<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LineRequest;
use App\Http\Resources\LineResource;
use App\Models\Line;
use App\Traits\ApiResponser;

class LineController extends Controller
{
    use ApiResponser;

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {

            return $this->successResponse(LineResource::Collection(Line::all()));
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LineRequest $request)
    {
        $data = $request->all();
        try{
            Line::create($data);
            return $this->showMessage('linea creada');
        }catch(\Exception $e){
            return $this->errorResponse($e->getMessage(),409);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $line = Line::findOrFail($id);
            return $this->successResponse(new LineResource($line),'linea encontrada');
        } catch (\Exception $e) {
            return $this->errorResponse('no se encontro la linea',404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(LineRequest $request, $id)
    {
        $data = $request->all();
        try{
            $line = Line::findOrFail($id);
            $line->update($data);
            return $this->showMessage('linea actualizada');
        }catch(\Exception $e){
            return $this->errorResponse($e->getMessage(),404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $line = Line::findOrFail($id);
            $line->delete();
            return $this->showMessage('linea eliminada');
        } catch (\Exception $e) {
            return $this->errorResponse('linea no encontrada',404);
        }
    }
}

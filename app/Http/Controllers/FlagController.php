<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\FlagRequest;
use App\Http\Resources\FlagResource;
use App\Models\Flag;
use App\Traits\ApiResponser;

class FlagController extends Controller
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

            return $this->successResponse(FlagResource::Collection(Flag::all()));
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
    public function store(FlagRequest $request)
    {
        $data = $request->all();
        try{
            Flag::create($data);
            return $this->showMessage('bandera creada');
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
            $flag = Flag::findOrFail($id);
            return $this->successResponse(new FlagResource($flag),'bandera encontrada');
        } catch (\Exception $e) {
            return $this->errorResponse('no se encontro la bandera',404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FlagRequest $request, $id)
    {
        $data = $request->all();
        try{
            $flag = Flag::findOrFail($id);
            $flag->update($data);
            return $this->showMessage('bandera actualizada');
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
            $flag = Flag::findOrFail($id);
            $flag->delete();
            return $this->showMessage('bandera eliminada');
        } catch (\Exception $e) {
            return $this->errorResponse('bandera no encontrada',404);
        }
    }
}

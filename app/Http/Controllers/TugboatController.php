<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TugboatRequest;
use App\Http\Resources\TugboatResource;
use App\Models\Tugboat;
use App\Traits\ApiResponser;

class TugboatController extends Controller
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

            return $this->successResponse(TugboatResource::Collection(Tugboat::all()));
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
    public function store(TugboatRequest $request)
    {
        $data = $request->all();
        try{
            Tugboat::create($data);
            return $this->showMessage('remolcador creado');
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
            $tugboat = Tugboat::findOrFail($id);
            return $this->successResponse(new TugboatResource($tugboat),'remolcador encontrada');
        } catch (\Exception $e) {
            return $this->errorResponse('no se encontro lel remolcador',404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TugboatRequest $request, $id)
    {
        $data = $request->all();
        try{
            $tugboat = Tugboat::findOrFail($id);
            $tugboat->update($data);
            return $this->showMessage('remolcador actualizado');
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
            $tugboat = Tugboat::findOrFail($id);
            $tugboat->delete();
            return $this->showMessage('remolcador eliminado');
        } catch (\Exception $e) {
            return $this->errorResponse('remolcador no encontrada',404);
        }
    }
}

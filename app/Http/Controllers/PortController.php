<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PortRequest;
use App\Http\Resources\PortResource;
use App\Models\Port;
use App\Traits\ApiResponser;

class PortController extends Controller
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

            return $this->successResponse(PortResource::Collection(Port::all()));
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
    public function store(PortRequest $request)
    {
        $data = $request->all();
        try{
            Port::create($data);
            return $this->showMessage('Puerto creado');
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
            $port = Port::findOrFail($id);
            return $this->successResponse(new PortResource($port),'puerto encontrada');
        } catch (\Exception $e) {
            return $this->errorResponse('no se encontro el puerto',404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PortRequest $request, $id)
    {
        $data = $request->all();
        try{
            $port = Port::findOrFail($id);
            $port->update($data);
            return $this->showMessage('puerto actualizado');
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
            $port = Port::findOrFail($id);
            $port->delete();
            return $this->showMessage('puerto eliminado');
        } catch (\Exception $e) {
            return $this->errorResponse('puerto no encontrado',404);
        }
    }
}

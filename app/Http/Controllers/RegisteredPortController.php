<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisteredPortRequest;
use App\Http\Resources\RegisteredPortResource;
use App\Models\RegisteredPort;
use App\Traits\ApiResponser;

class RegisteredPortController extends Controller
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

            return $this->successResponse(RegisteredPortResource::Collection(RegisteredPort::all()));
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
    public function store(RegisteredPortRequest $request)
    {
        $data = $request->all();
        try{
            RegisteredPort::create($data);
            return $this->showMessage('puerto creado');
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
            $port = RegisteredPort::findOrFail($id);
            return $this->successResponse(new RegisteredPortResource($port),'puerto encontrado');
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
    public function update(RegisteredPortRequest $request, $id)
    {
        $data = $request->all();
        try{
            $port = RegisteredPort::findOrFail($id);
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
            $port = RegisteredPort::findOrFail($id);
            $port->delete();
            return $this->showMessage('puerto eliminado');
        } catch (\Exception $e) {
            return $this->errorResponse('puerto no encontrado',404);
        }
    }
}

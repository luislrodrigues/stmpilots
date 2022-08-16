<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\BoatRequest;
use App\Http\Resources\BoatResource;
use App\Models\Boat;
use App\Traits\ApiResponser;

class BoatController extends Controller
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

            return $this->successResponse(BoatResource::Collection(Boat::all()));
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
    public function store(BoatRequest $request)
    {
        $data = $request->all();
        try{
            Boat::create($data);
            return $this->showMessage('lancha creada');
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
            $boat = Boat::findOrFail($id);
            return $this->successResponse(new BoatResource($boat),'lancha encontrada');
        } catch (\Exception $e) {
            return $this->errorResponse('no se encontro la lancha',404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BoatRequest $request, $id)
    {
        $data = $request->all();
        try{
            $boat = Boat::findOrFail($id);
            $boat->update($data);
            return $this->showMessage('lancha actualizada');
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
            $boat = Boat::findOrFail($id);
            $boat->delete();
            return $this->showMessage('lancha eliminada');
        } catch (\Exception $e) {
            return $this->errorResponse('lancha no encontrada',404);
        }
    }
}

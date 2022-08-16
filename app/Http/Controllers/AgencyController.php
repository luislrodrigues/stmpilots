<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AgencyRequest;
use App\Http\Resources\AgencyResource;
use App\Http\Resources\AgencyCollection;

use App\Models\Agency;
use App\Traits\ApiResponser;
use Illuminate\Support\Facades\DB;

class AgencyController extends Controller
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
            // return $this->showAll((Agency::all()));
            return $this->successResponse(Agency::all());
            // return $this->successResponse(new AgencyCollection(Agency::paginate(1)));
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
    public function store(AgencyRequest $request)
    {
        $data = $request->all();
        try{
            Agency::create($data);
            return $this->showMessage('Agencia creada');
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
            $agency = Agency::findOrFail($id);
            return $this->successResponse(new AgencyResource($agency),'agencia encontrada');
        } catch (\Exception $e) {
            return $this->errorResponse('no se encontro la agencia',404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AgencyRequest $request, $id)
    {
        $data = $request->all();
        try{
            $agency = Agency::findOrFail($id);
            $agency->update($data);
            return $this->showMessage('agencia actualizada');
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
            $agency = Agency::findOrFail($id);
            $agency->delete();
            return $this->showMessage('agencia eliminada');
        } catch (\Exception $e) {
            return $this->errorResponse('agencia no encontrada',404);
        }
    }
}

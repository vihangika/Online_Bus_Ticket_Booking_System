<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Http\Resources\DefaultDataResource;
use App\Models\BusStop;
use domain\Facades\BusStopFacade\BusStopFacade;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class BusStopController extends  Controller
{
    /**
     * All
     * fetch all bus_stop details with pagination
     *
     * @return void
     */
    public function all($id)
    {

        $query = BusStop::where('bus_id', $id)->orderBy('id', 'desc');

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;
    }

    /**
     * list
     * fetch all bus_stop details
     *
     * @return void
     */
    public function list($id)
    {
        $response = BusStopFacade::list($id);
        return DefaultDataResource::collection($response);
    }


    /**
     * Get
     * get specific bus_stop data
     *
     * @param $bus_stop_id
     *
     * @return void
     */
    public function get($bus_stop_id)
    {
        $response = BusStopFacade::get($bus_stop_id);
        return $response;
    }

    /**
     * Store
     * create new bus_stop
     *
     * @param Request $request
     *
     * @return void
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        return BusStopFacade::store($request->all());
    }

    /**
     * Update
     * update specific bus_stop data
     *
     * @param $bus_stop_id
     * @param Request $request
     *
     * @return void
     */
    public function update($bus_stop_id, Request $request)
    {
        return BusStopFacade::update($request->all(), $bus_stop_id);
    }

    /**
     * Delete
     * delete specific bus_stop
     *
     * @param $bus_stop_id
     *
     * @return void
     */
    public function delete($bus_stop_id)
    {
        return BusStopFacade::delete($bus_stop_id);
    }
}

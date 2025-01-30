<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bus\CreateBusRequest;
use App\Http\Requests\Bus\UpdateBusRequest;
use App\Models\Bus;
use domain\Facades\BusFacade\BusFacade;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class BusController extends Controller
{
    /**
     * Index
     * load admin Bus section
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('AdminArea/Buses/index');
    }

    /**
     * Store
     * store Bus data
     *
     * @param CreateBusRequest $request
     *
     * @return void
     */
    public function store(CreateBusRequest $request)
    {
        return BusFacade::store($request->all());
    }

    /**
     * All
     * retrieve all Buss
     *
     * @return void
     */
    public function all()
    {
        $query = Bus::query();

        if (Auth::user()->role == 3) {
            $query->where('travel_provider_id', Auth::id());
        }

        if (request('code')) {
            $code = request('code');
            $query->where('code', 'like', "%{$code}%");
        }

        if (request('bus_name')) {
            $bus_name = request('bus_name');
            $query->where('name', 'like', "%{$bus_name}%");
        }

        if (request('category_name')) {
            $category_name = request('category_name');
            $query->whereHas('Category', function ($q) use ($category_name) {
                $q->where('name', 'like', "%{$category_name}%");
            });
        }

        if (request('status')) {

            $status = request('status');
            if ($status == "1") {
                $query->where('status', 1);
            } else {
                $query->where('status', 0);
            }
        }

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value) {
                    $query->orWhere('id', 'like', "%{$value}%");
                    $query->orWhere('code', 'like', "%{$value}%");
                    $query->orWhere('name', 'like', "%{$value}%");
                    $query->orWhere('category_name', 'like', "%{$value}%");
                    $query->orWhere('status', $value);
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;
    }

    /**
     * Edit
     * get the specific data using bus_id and load the Bus edit section
     *
     * @param $bus_id
     *
     * @return void
     */
    public function edit($bus_id)
    {
        $response['bus'] = BusFacade::edit($bus_id);
        return inertia::render('AdminArea/Buses/edit', $response);
    }

    /**
     * Get
     * retrive relevent data using bus_id
     *
     * @param $bus_id
     *
     * @return void
     */
    public function get($bus_id)
    {
        return BusFacade::get($bus_id);
    }

    /**
     * Method update
     * update Bus details using bus_id
     *
     * @param UpdateBusRequest $request
     * @param $bus_id
     *
     * @return void
     */
    public function update(UpdateBusRequest $request, $bus_id,)
    {
        return BusFacade::update($request->all(), $bus_id);
    }

    /**
     * Delete
     * delete specific data using bus_id
     *
     * @param $bus_id
     *
     * @return void
     */
    public function delete($bus_id)
    {
        return BusFacade::delete($bus_id);
    }
}

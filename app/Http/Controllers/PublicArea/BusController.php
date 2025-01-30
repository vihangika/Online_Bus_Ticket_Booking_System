<?php

namespace App\Http\Controllers\PublicArea;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bus\FilterBusRequest;
use App\Http\Requests\Bus\SearchBusRequest;
use App\Http\Requests\Product\FilterProductRequest;
use App\Http\Requests\Product\SearchProductRequest;
use App\Models\Bus;
use App\Models\Product;
use domain\Facades\BusFacade\BusFacade;
use domain\Facades\ProductFacade\ProductFacade;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class BusController extends Controller
{
    /**
     * index
     * load the single product page
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('PublicArea/Buses/index');
    }


    /**
     * All
     * get the all products
     *
     * @return void
     */
    public function all()
    {
        // $response['product'] = ProductFacade::all();
        // return $response;

        $query = Bus::query();

        if(request('route_from')){
            $query->where('from', request('route_from'));
        }

        if(request('route_to')){
            $query->where('to', request('route_to'));
        }

        if(request('departure_time')){
            $query->where('departure_time', request('departure_time'));
        }

        if(request('arrival_time')){
            $query->where('arrival_time', request('arrival_time'));
        }

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value){
                    $query->orWhere('id', 'like', "%{$value}%");
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;
    }

    /**
     * Get
     * Get specific product using bus_id
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
     * Filter
     * filter the item according to customer request
     *
     * @param FilterProductRequest $request
     *
     * @return void
     */
    public function filter(FilterBusRequest $request)
    {
        // $response['filtered_product'] = ProductFacade::filter($request->all());

        $query = Bus::with('Category', 'ProductImage', 'ProductImage.Image')
        ->orderBy('products.id', 'desc');

        $availability = $request->input('params.filterForm.availability');
        $min_price = $request->input('params.filterForm.min_price');
        $max_price = $request->input('params.filterForm.max_price');
        $selected_category = $request->input('params.filterForm.selected_category');

        if (isset ($min_price) && $min_price !== '') {
            $query->where('price', '>=', $min_price);
        }

        if (isset ($max_price) && $max_price !== '') {
            $query->where('price', '<=', $max_price);
        }

        if (isset ($availability) && $availability == 'on_stock') {
            $query->where('quantity', '>=', 1);
        }

        if (isset ($selected_category) && !empty ($selected_category)) {
            $query->whereIn('category_id', $selected_category);
        }

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value){
                    $query->orWhere('id', 'like', "%{$value}%");
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;

    }

    /**
     * Search
     * search and get item according to customer request
     *
     * @param SearchProductRequest $request
     *
     * @return void
     */
    public function search(SearchBusRequest $request)
    {
        $response['searched_product'] = BusFacade::search($request->all());
        return $response;
    }
}

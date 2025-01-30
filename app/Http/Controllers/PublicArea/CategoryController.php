<?php

namespace App\Http\Controllers\PublicArea;

use App\Http\Controllers\Controller;
use App\Models\Category;
use domain\Facades\CategoryFacade\CategoryFacade;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CategoryController extends Controller
{    
    /**
     * Index
     * load category page 
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('PublicArea/Categories/index');
    }
        
    /**
     * All
     * get all categories 
     *
     * @return void
     */
    public function all()
    {

        $query = Category::with('Image', 'Product')->orderBy('categories.id', 'desc');
                          
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
     * get specific category using category_id
     *
     * @param $category_id
     *
     * @return void
     */
    public function get($category_id)
    {   
        $response['category'] = CategoryFacade::get($category_id);
        return $response;
    }
}

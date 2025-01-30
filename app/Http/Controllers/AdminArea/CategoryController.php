<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\CreateCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Models\Category;
use domain\Facades\CategoryFacade\CategoryFacade;
use domain\Facades\ImageFacade\ImageFacade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CategoryController extends Controller
{
    /**
     * Index
     * load admin category section
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('AdminArea/Settings/Category/index');

    }


    /**
     * Store
     * store category data
     *
     * @param CreateCategoryRequest $request
     *
     * @return void
     */
    public function store(CreateCategoryRequest $request)
    {
        if(isset($request['status'])){
            if($request['status'] == 'true'){
                $request['status'] = 1;
            }else{
                $request['status'] = 0;
            }
        }
        return CategoryFacade::store($request->all());
    }


    /**
     * Update
     * update exist category data using category_id
     *
     * @param UpdateCategoryRequest $request
     * @param $category_id
     *
     * @return void
     */
    public function update(UpdateCategoryRequest $request ,$category_id)
    {
        return CategoryFacade::update($request->all(), $category_id);

    }

    /**
     * All
     * retrieve all categories
     *
     * @return void
     */
    public function all()
    {
        $query = Category::orderBy('id', 'desc');

        if(request('code')){
            $code = request('code');
            $query->where('code', 'like', "%{$code}%");
        }

        if(request('name')){
            $name = request('name');
            $query->where('name', 'like', "%{$name}%");
        }

        if(request('code')){
            $code = request('code');
            $query->where('code', 'like', "%{$code}%");
        }

        if(request('status')){

            $status = request('status');
            if($status == "1"){
                $query->where('status', 1);
            }else{
                $query->where('status', 0);
            }
        }

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value){
                    $query->orWhere('id', 'like', "%{$value}%");
                    $query->orWhere('code', 'like', "%{$value}%");
                    $query->orWhere('name', 'like', "%{$value}%");
                    $query->orWhere('status', $value);
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;
    }

    /**
     * Delete
     * delete specific data using category_id, image_id & file_path
     *
     * @param $category_id
     * @param Request $request
     *
     * @return void
     */
    public function delete($category_id)
    {
        return CategoryFacade::delete($category_id);
    }

    /**
     * Get
     * retrieve relevant data using category_id
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

    /**
     * Filter
     * filter categories using name and status
     *
     * @param Request $request
     *
     * @return void
     */
    public function filter(Request $request)
    {
        $response['category'] = CategoryFacade::adminFilter($request->all());
        return $response;
    }

    /**
     * Status
     * change category status using category_id
     *
     * @param $category_id
     *
     * @return void
     */
    public function status($category_id)
    {
        return CategoryFacade::status($category_id);
    }

}

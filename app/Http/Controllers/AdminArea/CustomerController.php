<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customers\CreateCustomerRequest;
use App\Http\Requests\Customers\UpdateCustomerRequest;
use App\Models\User;
use domain\Facades\CustomerFacade\CustomerFacade;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CustomerController extends Controller
{
    /**
     * Index
     * load customer index page 
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('AdminArea/Customer/index');
    }

    /**
     * All
     * fetch all customer details with pagination
     *
     * @return void
     */
    public function all()
    {

        $query = User::where('role', 2)->orderBy('id', 'desc');


        if(request('status')){
           
            $status = request('status');
            if($status == 1){
                $query->where('status', 1);
            }else{
                $query->where('status', 0);
            }
        }

        if (request('code')) {
            $code = request('code');
            $query->where('code', 'like', "%{$code}%");
        }

        if (request('first_name')) {
            $first_name = request('first_name');
            $query->where('first_name', 'like', "%{$first_name}%");
        }

        if (request('last_name')) {
            $last_name = request('last_name');
            $query->where('last_name', 'like', "%{$last_name}%");
        }

        if (request('email')) {
            $email = request('email');
            $query->where('email', 'like', "%{$email}%");

        }

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value) {
                    $query->orWhere('id', 'like', "%{$value}%");
                    $query->orWhere('status', 'like', "%{$value}%");
                    $query->orWhere('code', 'like', "%{$value}%");
                    $query->orWhere('first_name', 'like', "%{$value}%");
                    $query->orWhere('last_name', 'like', "%{$value}%");
                    $query->orWhere('email', 'like', "%{$value}%");
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;
    }

    /**
     * Edit
     * get specific customer details and redirect to basic edit form
     *
     * @param $customer_id
     *
     * @return void
     */
    public function edit($customer_id)
    {
        $response['customer'] = CustomerFacade::edit($customer_id);
        return Inertia::render('AdminArea/Customer/edit', $response);
    }

    /**
     * Get
     * get specific customer data
     *
     * @param $customer_id 
     *
     * @return void
     */
    public function get($customer_id)
    {
        $response['customer'] = CustomerFacade::get($customer_id);
        return $response;
    }

    /**
     * Store
     * create new customer 
     *
     * @param Request $request
     *
     * @return void
     */
    public function store(CreateCustomerRequest $request)
    {
        return CustomerFacade::store($request->all());
    }
    
    /**
     * Update
     * update specific customer data
     *
     * @param $customer_id
     * @param Request $request
     *
     * @return void
     */
    public function update($customer_id, UpdateCustomerRequest $request)
    {
        return CustomerFacade::update($customer_id, $request->all());
    }
    
    /**
     * Delete
     * delete specific customer
     *
     * @param $customer_id 
     *
     * @return void
     */
    public function delete($customer_id)
    {
        return CustomerFacade::delete($customer_id);
    }
}

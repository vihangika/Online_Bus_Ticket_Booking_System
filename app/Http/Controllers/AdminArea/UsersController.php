<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\CreateUserRequest;
use App\Http\Requests\Users\UpdateUserRequest;
use App\Models\User;
use domain\Facades\UserFacade\UserFacade;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class UsersController extends Controller
{
    /**
     * Index
     * load User index page
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('AdminArea/Settings/User/index');
    }

    /**
     * All
     * fetch all User details with pagination
     *
     * @return void
     */
    public function all()
    {

        $query = User::where('role', 3)->orderBy('id', 'desc');


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
     * get specific User details and redirect to basic edit form
     *
     * @param $User_id
     *
     * @return void
     */
    public function edit($User_id)
    {
        $response['user'] = UserFacade::edit($User_id);
        return Inertia::render('AdminArea/User/edit', $response);
    }

    /**
     * Get
     * get specific User data
     *
     * @param $User_id
     *
     * @return void
     */
    public function get($User_id)
    {
        $response['user'] = UserFacade::get($User_id);
        return $response;
    }

    /**
     * Store
     * create new User
     *
     * @param Request $request
     *
     * @return void
     */
    public function store(CreateUserRequest $request)
    {
        return UserFacade::store($request->all());
    }

    /**
     * Update
     * update specific User data
     *
     * @param $User_id
     * @param Request $request
     *
     * @return void
     */
    public function update($User_id, UpdateUserRequest $request)
    {
        return UserFacade::update($User_id, $request->all());
    }

    /**
     * Delete
     * delete specific User
     *
     * @param $User_id
     *
     * @return void
     */
    public function delete($User_id)
    {
        return UserFacade::delete($User_id);
    }
}

<?php

namespace domain\Services\UserService;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Psy\Exception\ThrowUpException;

class UserService
{

    protected $user;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->user = new User();
    }

    /**
     * Edit
     * fetch data to edit specific user details
     *
     * @param int $user_id
     *
     * @return void
     */
    public function edit(int $user_id)
    {
        $user = $this->user->where('role', 1)->where('id', $user_id)->first();
        return $user;
    }

    /**
     * Get
     * get specific user data
     *
     * @param int $user_id
     *
     * @return void
     */
    public function get(int $user_id)
    {
        $user = $this->user->where('role', 1)->where('id', $user_id)->first();
        return $user;
    }

    /**
     * Store
     * create new user
     *
     * @param array $data
     *
     * @return void
     */
    public function store(array $data)
    {
        $count = $this->user->where('role', 1)->count();
        $code = 'US' . sprintf('%05d', $count + 1);
        $check = $this->user->where('role', 1)->where('code', $code)->first();

        while ($check) {
            $count++;
            $code = 'US' . sprintf('%05d', $count);
            $check = $this->user->where('role', 1)->where('code', $code)->first();
        }

        $data['code'] = $code;

        if (!isset($data['password'])) {
            $data['password'] = '';
        }else{
            $data['password'] = bcrypt($data['password']);
        }
        $data['role'] = 3;
        $user = $this->user->create($data);
        return $user;
    }

    /**
     * Update
     * update specific user
     *
     * @param int $user_id
     * @param array $data
     *
     * @return void
     */
    public function update(int $user_id, array $data)
    {
        $user = $this->user->where('id', $user_id)->where('role', 3)->first();

        if (!$user) {
            return null;
        }

        $validatedData = Validator::make($data, [
            'email' => ['sometimes', 'required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'first_name' => ['sometimes', 'string', 'max:255'],
            'last_name' => ['sometimes', 'string', 'max:255'],
        ]);

        if ($validatedData->fails()) {
            throw ValidationException::withMessages($validatedData->errors()->toArray());
        } else {
            if (isset($data['email'])) {
                $user->email = $data['email'];
            }

            if (isset($data['first_name'])) {
                $user->first_name = $data['first_name'];
            }

            if (isset($data['last_name'])) {
                $user->last_name = $data['last_name'];
            }

            if (isset($data['contact_number'])) {
                $user->contact_number = $data['contact_number'];
            }

            if (isset($data['status'])) {
                $user->status = $data['status'];
            }

            if (isset($data['address'])) {
                $user->address = $data['address'];
            }

            if (isset($data['password'])) {
                $user->password = bcrypt($data['password']);
            }

            $user->save();

            return $user;
        }
    }

    public function delete($user_id)
    {
        return $this->user->destroy($user_id);
    }
}

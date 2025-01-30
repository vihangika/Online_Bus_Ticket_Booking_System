<?php

namespace domain\Services\CustomerService;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Psy\Exception\ThrowUpException;

class CustomerService
{

    protected $customer;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->customer = new User();
    }

    /**
     * Edit
     * fetch data to edit specific customer details
     *
     * @param int $customer_id
     *
     * @return void
     */
    public function edit(int $customer_id)
    {
        $customer = $this->customer->where('role', 2)->where('id', $customer_id)->first();
        return $customer;
    }

    /**
     * Get
     * get specific customer data
     *
     * @param int $customer_id
     *
     * @return void
     */
    public function get(int $customer_id)
    {
        $customer = $this->customer->where('role', 2)->where('id', $customer_id)->first();
        return $customer;
    }

    /**
     * Store
     * create new customer 
     *
     * @param array $data
     *
     * @return void
     */
    public function store(array $data)
    {
        $count = $this->customer->where('role', 2)->count();
        $code = 'CU' . sprintf('%05d', $count + 1);
        $check = $this->customer->where('role', 2)->where('code', $code)->first();

        while ($check) {
            $count++;
            $code = 'CU' . sprintf('%05d', $count);
            $check = $this->customer->where('role', 2)->where('code', $code)->first();
        }

        $data['code'] = $code;

        if (!isset($data['password'])) {
            $data['password'] = '';
        }
        $data['role'] = 2;
        $customer = $this->customer->create($data);
        return $customer;
    }

    /**
     * Update
     * update specific customer
     *
     * @param int $customer_id
     * @param array $data 
     *
     * @return void
     */
    public function update(int $customer_id, array $data)
    {
        $customer = $this->customer->where('id', $customer_id)->where('role', 2)->first();

        if (!$customer) {
            return null;
        }

        $validatedData = Validator::make($data, [
            'email' => ['sometimes', 'required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($customer->id)],
            'first_name' => ['sometimes', 'string', 'max:255'],
            'last_name' => ['sometimes', 'string', 'max:255'],
        ]);

        if ($validatedData->fails()) {
            throw ValidationException::withMessages($validatedData->errors()->toArray());
        } else {
            if (isset($data['email'])) {
                $customer->email = $data['email'];
            }

            if (isset($data['first_name'])) {
                $customer->first_name = $data['first_name'];
            }

            if (isset($data['last_name'])) {
                $customer->last_name = $data['last_name'];
            }

            if (isset($data['contact_number'])) {
                $customer->contact_number = $data['contact_number'];
            }

            if (isset($data['status'])) {
                $customer->status = $data['status'];
            }

            if (isset($data['address'])) {
                $customer->address = $data['address'];
            }

            $customer->save();

            return $customer;
        }
    }

    public function delete($customer_id)
    {
        return $this->customer->destroy($customer_id);
    }
}
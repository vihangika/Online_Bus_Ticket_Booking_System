<?php

namespace App\Http\Requests\Customers;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['nullable', 'string'],
            'last_name' => ['nullable', 'string'],
            'email' => ['required', 'string','lowercase', 'email','max:255'],
            'contact_number' => ['nullable', 'max:255'],
            'address' => ['nullable', 'string', 'max:100'],
            'status' => ['nullable'],
        ];
    }
}

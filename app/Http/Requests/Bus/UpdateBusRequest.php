<?php

namespace App\Http\Requests\Bus;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBusRequest extends FormRequest
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
            'price' => ['nullable', 'numeric' ,'min:0.00'],
            'discount_price' => ['nullable', 'numeric' ,'min:0.00'],
            'status' => ['nullable'],
            'featured' => ['nullable'],
            'quantity' => ['nullable', 'numeric', 'min:0'],
            'description' => ['nullable', 'string', 'max:100'],
        ];
    }
}

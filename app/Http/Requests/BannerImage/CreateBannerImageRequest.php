<?php

namespace App\Http\Requests\BannerImage;

use Illuminate\Foundation\Http\FormRequest;

class CreateBannerImageRequest extends FormRequest
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
            'main_heading' => ['nullable', 'string', 'max:50'],
            'sub_heading' => ['nullable', 'string', 'max:50'],
            'status' => ['nullable'],
            'image'=> ['required', 'image'],
        ];
    }
}

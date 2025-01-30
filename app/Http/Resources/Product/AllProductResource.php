<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AllProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'status' => $this->status,
            'name' => $this->name,
            'category_name' => $this->category_name,
            'price' => $this->price,
            'discount_price' => $this->discount_price,
            'featured' => $this->featured,
            'quantity' => $this->quantity,
        ];
    }
}

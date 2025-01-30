<?php

namespace domain\Services\CategoryService;

use App\Models\Category;
use domain\Facades\ImageFacade\ImageFacade;

class CategoryService
{

    protected $category;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->category = new Category();
    }

    /**
     * Store
     * store category data into database
     *
     * @param array $data
     *
     * @return void
     */
    public function store(array $data)
    {
        if (isset($data['image'])) {
            $image = ImageFacade::store($data['image']);
            $data['image_id'] = $image->id;
        }

        $count = $this->category->count();
        $code = 'CN' . sprintf('%05d', $count + 1);
        $check = $this->category->where('code', $code)->first();

        while ($check) {
            $count++;
            $code = 'CN' . sprintf('%05d', $count);
            $check = $this->category->where('code', $code)->first();
        }

        $data['code'] = $code;

        return $this->category->create($data);
    }

    /**
     * All
     * retrieve all the data from Category and Image models
     *
     * @return void
     */
    public function all()
    {
        return $this->category->with('Image', 'Product')->get();
    }

    /**
     * Delete
     * delete category data using category_id
     *
     * @param $id
     *
     * @return void
     */
    public function delete(int $category_id)
    {
        return $this->category->destroy($category_id);
    }

    /**
     * Get
     * retrieve relevent data using category_id
     *
     * @param $id 
     *
     * @return void
     */
    public function get(int $category_id)
    {
        return $this->category->with('Product', 'Product.ProductImage.Image')->find($category_id);
    }

    /**
     * Update
     * update existing data using category_id
     *
     * @param array $data
     * @param $id 
     *
     * @return void
     */
    public function update(array $data, int $category_id)
    {
        if (isset($data['image'])) {
            $image = ImageFacade::store($data['image']);
            $data['image_id'] = $image->id;
        }

        $existingBanner = $this->category->findOrFail($category_id);
        return $existingBanner->update($data);
    }

    /**
     * Filter
     * filter category using name and status
     * STATUS 1,0 is ACTIVE & INACTIVE RESPECTIVELY, STATUS 2 IS NON OF SELECTED MODE (STATUS 2, ONLY FOR FILTER)
     *
     * @param array $data
     *
     * @return void
     */
    public function adminFilter(array $data)
    {
        $query = $this->category->query();

        if (isset($data['code'])) {

            $query->where('code', 'LIKE', '%' . $data['code'] . '%');
        }

        if (isset($data['name'])) {

            $query->where('name', 'LIKE', '%' . $data['name'] . '%');
        }

        if (isset($data['status']) && $data['status'] != 2) {

            $query->where('status', $data['status']);

        } elseif (isset($data['status']) && $data['status'] == 2 && !isset($data['name']) && !isset($data['code'])) {
            $query = $this->category->all();
            $category = $query->all();
            return $category;
        }

        $category = $query->get();

        return $category;
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
        $category = $this->category->find($category_id);
        $status = $category->status;

        if ($status == 1) {
            $status = 0;
        } else {
            $status = 1;
        }


        $category->update([
            'status' => $status,
        ]);

        return $this->category->find($category_id);
    }
}
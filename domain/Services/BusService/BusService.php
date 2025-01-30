<?php

namespace domain\Services\BusService;

use App\Models\Bus;

class BusService
{

    protected $Bus;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->Bus = new Bus();
    }

    /**
     * Store
     * store Bus data into database
     *
     * FEATURED IS REPRESENT AS 1 AND STANDARD IS 0
     * @param $data
     *
     * @return void
     */
    public function store(array $data)
    {
        if(!isset($data['status'])){
            $data['status'] = false;
        }

        if(!isset($data['featured'])){
            $data['featured'] = false;
        }

        $count = $this->Bus->count();
        $code = 'PN' . sprintf('%05d', $count + 1);
        $check = $this->Bus->where('code', $code)->first();

        while($check){
            $count ++;
            $code = 'PN' . sprintf('%05d', $count);
            $check = $this->Bus->where('code', $code)->first();
        }

        $data['code'] = $code;
        $data['travel_provider_id'] = auth()->user()->id;

        return $this->Bus->create($data);
    }

    public function find($Bus_id)
    {
        return $this->Bus->find($Bus_id);
    }

    /**
     * All
     * retrieve all data from Category, BusImage, BusImage, Image models
     *
     * @return void
     */
    public function all()
    {
        return $this->Bus
            ->with('Category', 'BusImage', 'BusImage.Image', 'WishList', 'CartItem', 'CartItem.Cart')
            ->get();
    }

    /**
     * Edit
     * find the specific data to edit prodcut details using Bus_id
     *
     * @param $Bus_id
     *
     * @return void
     */
    public function edit(int $Bus_id)
    {
        return $this->Bus->find($Bus_id);
    }

    /**
     * Get
     * retrieve specifica data using Bus_id
     *
     * @param $Bus_id
     *
     * @return void
     */
    public function get(int $Bus_id)
    {
        return $this->Bus->with('Category', 'BusImage', 'BusImage.Image')->find($Bus_id);
    }

    /**
     * Update
     * update existing Bus details using Bus_id
     *
     * @param $Bus_id
     * @param $data
     *
     * @return void
     */
    public function update(array $data, int $Bus_id)
    {

        $Bus = $this->Bus->find($Bus_id);
        return $Bus->update($data);
    }

    /**
     * Delete
     * delete specific data using Bus_id
     *
     * @param $Bus_id $id [explicite description]
     *
     * @return void
     */
    public function delete(int $Bus_id)
    {
        return $this->Bus->destroy($Bus_id);
    }

    /**
     * Filter
     * filter and return specific Buss for public end
     *
     * @param array $data
     *
     * @return void
     */
    public function filter(array $data)
    {
        $query = $this->Bus->query();

        if (isset ($data['min_price']) && $data['min_price'] !== '') {
            $query->where('price', '>=', $data['min_price']);
        }

        if (isset ($data['max_price']) && $data['max_price'] !== '') {
            $query->where('price', '<=', $data['max_price']);
        }

        if (isset ($data['availability']) && $data['availability'] == 'on_stock') {
            $query->where('quantity', '>=', 1);
        }

        if (isset ($data['selected_category']) && !empty ($data['selected_category'])) {
            $query->whereIn('category_id', $data['selected_category']);
        }

        $Buss = $query->with('Category', 'BusImage', 'BusImage.Image')->get();

        return $Buss;
    }

    /**
     * Search
     * search Bus according to the data['name']
     *
     * @param array $data
     *
     * @return void
     */
    public function search(array $data)
    {
        $Bus_name = $data['name'];

        if (isset ($Bus_name)) {
            $filteredBus = $this->Bus
                ->where('name', 'like', "%$Bus_name%")
                ->with('Category', 'BusImage', 'BusImage.Image')
                ->get();
        } else {
            return $this->Bus
                ->with('Category', 'BusImage', 'BusImage.Image')
                ->get();
        }

        return $filteredBus;
    }

    /**
     * AdminFilter
     * filter Bus using Bus_name, category_name and status
     *
     * @param array $data
     *
     * @return void
     */

}

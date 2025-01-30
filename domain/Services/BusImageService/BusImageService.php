<?php

namespace domain\Services\BusImageService;

use App\Models\BusImage;

class BusImageService
{

    protected $BusImage;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->BusImage = new BusImage();
    }

    /**
     * Find
     * retieve specific image using bus_id
     *
     * @param $bus_id
     *
     * @return void
     */
    public function find(int $bus_id)
    {
        $BusImage = $this->BusImage->where("bus_id", $bus_id)->first();
        if ($BusImage) {
            return $BusImage;
        } else {
            return 0;
        }
    }

    /**
     * Store
     * store Bus image data into database
     *
     * @param $data
     *
     * @return void
     */
    public function store($data)
    {
        return $this->BusImage
            ->create($data);
    }

    /**
     * All
     * retrieve all data from BusImage with Bus and Image models
     *
     * @param $bus_id
     *
     * @return void
     */
    public function all(int $bus_id)
    {
        $Bus = $this->BusImage
            ->where('bus_id', $bus_id)
            ->with('Bus', 'Image')
            ->orderBy('status', 'desc')
            ->get();
        return $Bus;
    }

    /**
     * Delete
     * delete spedific data using image_id
     *
     * @param $image_id
     *
     * @return void
     */
    public function delete(int $Bus_image_id)
    {
        $Bus = $this->BusImage
            ->where('id', $Bus_image_id)
            ->first();
        return $Bus->delete();
    }

    /**
     * UpdatePrimaryImage
     * update primary image usig request_id and bus_id
     *
     * @param $request_id
     * @param $bus_id
     *
     * @return void
     */
    public function updatePrimaryImage(int $request_id,int $bus_id)
    {
        $Bus = $this->BusImage
            ->where('bus_id', $bus_id)
            ->update(['status' => 0]);

        $Bus = $this->BusImage
            ->where('id', $request_id)
            ->update(['status' => 1]);

        return $Bus;
    }
}

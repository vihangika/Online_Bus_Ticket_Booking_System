<?php

namespace domain\Services\BannerService;

use App\Models\Banner;
use domain\Facades\ImageFacade\ImageFacade;

/**
 * BannerService
 * php version 8.2.15
 *
 * @category Service
 * @author   CyberElysium <contact@cyberelysium.com>
 * @license  https://cyberelysium.com Config
 * @link     https://cyberelysium.com
 * */

class BannerService
{

    protected $banner;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->banner = new Banner();
    }

    /**
     * Store
     * store banner data into database
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

        $count = $this->banner->count();
        $code = 'BI' . sprintf('%05d', $count + 1);
        $check = $this->banner->where('code', $code)->first();

        while($check){
            $count ++;
            $code = 'BI' . sprintf('%05d', $count);
            $check = $this->banner->where('code', $code)->first();
        }

        $data['code'] = $code;

        return $this->banner->create($data);
    }

    /**
     * All
     * retrieve all the data from Banner and Image models
     *
     * @return void
     */
    public function all()
    {
        return $this->banner->with('Image')->get();
    }

    /**
     * Delete
     * delete specific data using banner_id
     *
     * @param $banner_id
     *
     * @return void
     */
    public function delete(int $banner_id)
    {
        return $this->banner->destroy($banner_id);
    }

    /**
     * Get
     * retrieve relevent data using banner_id
     *
     * @param $banner_id 
     *
     * @return void
     */
    public function get(int $banner_id)
    {
        return $this->banner->find($banner_id);
    }

    /**
     * Update
     * update existing data using banner_id
     *
     * @param array $data 
     * @param $banner_id 
     *
     * @return void
     */
    public function update(array $data, int $banner_id)
    {
        if (isset($data['image'])) {
            $image = ImageFacade::store($data['image']);
            $data['image_id'] = $image->id;
        }

        $existingBanner = $this->banner->findOrFail($banner_id);
        return $existingBanner->update($data);
    }

    /**
     * Status
     * change banner status using banner_id
     *
     * @param $banner_id
     *
     * @return void
     */
    public function status($banner_id)
    {
        $banner = $this->banner->find($banner_id);
        $status = $banner->status;

        if ($status == 'true') {
            $status = 'false';
        } else {
            $status = 'true';
        }

        $banner->update([
            'status' => $status,
        ]);

        return $this->banner->find($banner_id);
    }
    
    /**
     * GetAvailableBanners
     * get banners that only status is true
     *
     * @return void
     */
    public function getAvailableBanners()
    {
        $banners = $this->banner->where('status', 'true')->get();
        return $banners;
    }

}

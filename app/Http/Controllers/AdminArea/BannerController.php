<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Http\Requests\BannerImage\CreateBannerImageRequest;
use App\Http\Requests\BannerImage\FilterBannerImage;
use App\Http\Requests\BannerImage\UpdateBannerImageRequest;
use App\Models\Banner;
use domain\Facades\BannerFacade\BannerFacade;
use domain\Facades\ImageFacade\ImageFacade;
use Illuminate\Http\Request;
use App\Http\Resources\DataResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class BannerController extends Controller
{
    /**
     * index
     * load admin banner section
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('AdminArea/Settings/Banners/index');
    }

    /**
     * Store
     * store banner data
     *
     * @param CreateBannerImageRequest $request
     *
     * @return void
     */
    public function store(CreateBannerImageRequest $request)
    {
        return BannerFacade::store($request->all());
    }

    /**
     * Update
     * update exist banner details using banner_id
     *
     * @param UpdateBannerImageRequest $request
     * @param $banner_id
     *
     * @return void
     */
    public function update(UpdateBannerImageRequest $request, $banner_id)
    {
        return BannerFacade::update($request->all(), $banner_id);
    }

    /**
     * All
     * retrieve all the banner data
     *
     * @return void
     */
    public function all()
    {
        $query = Banner::orderBy('id', 'desc');

        if(request('code')){
            $code = request('code');
            $query->where('code', 'like', "%{$code}");
        }

        if(request('status')){
            $status = request('status');
            if($status == "1"){
                $query->where('status', 'true');
            }else{
                $query->where('status', 'false');
            }
        }

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value) {
                    $query->orWhere('id', 'like', "%{$value}%");
                    $query->orWhere('code', 'like', "%{$value}%");
                    $query->orWhere('status', $value);
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
            return $payload;

    }

    /**
     * Delete
     * delete specific data using banner_id, image_id & file_path
     *
     * @param $banner_id
     * @param Request $request
     *
     * @return void
     */
    public function delete($banner_id)
    {
        return BannerFacade::delete($banner_id);
    }

    /**
     * Get
     * retrieve relevent data using banner_id
     *
     * @param $banner_id
     *
     * @return void
     */
    public function get($banner_id)
    {
        $response['banner'] = BannerFacade::get($banner_id);
        return $response;
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
        return BannerFacade::status($banner_id);
    }
}

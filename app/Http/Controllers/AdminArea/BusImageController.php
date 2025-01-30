<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Http\Requests\BusImage\CreateBusImageRequest;
use domain\Facades\ImageFacade\ImageFacade;
use domain\Facades\BusImageFacade\BusImageFacade;
use Illuminate\Http\Request;

class BusImageController extends Controller
{

    /**
     * Store
     * store the Bus image
     *
     * @param CreateBusImageRequest $request
     *
     * @return void
     */
    public function store(CreateBusImageRequest $request)
    {
        $Bus_id = $request->input('bus_id');

        $ifExist = BusImageFacade::find($Bus_id);

        if ($ifExist) {
            $status = 0;
            $image = ImageFacade::store($request->file("image"));
            $request->merge(['image_id' => $image->id, 'status' => $status]);
            return BusImageFacade::store($request->all());
        } else {
            $status = 1;
            $image = ImageFacade::store($request->file("image"));
            $request->merge(['image_id' => $image->id, 'status' => $status]);
            return BusImageFacade::store($request->all());
        }
    }

    /**
     * All
     * get all the Bus images using Bus_id
     *
     * @param $Bus_id
     *
     * @return void
     */
    public function all($Bus_id)
    {
        $response['bus_image'] = BusImageFacade::all($Bus_id);
        return $response;
    }

    /**
     * Delete
     * delete specific Bus image using Bus_image_id
     *
     * @param $Bus_image_id
     *
     * @return void
     */
    public function delete($Bus_image_id)
    {
        return BusImageFacade::delete($Bus_image_id);
    }

    /**
     * Primary
     * change primary image using request_id and Bus_id
     *
     * @param $request_id
     * @param $Bus_id
     *
     * @return void
     */
    public function primary(Request $request)
    {
        BusImageFacade::updatePrimaryImage($request->request_id, $request->bus_id);
    }
}

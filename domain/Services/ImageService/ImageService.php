<?php
namespace domain\Services\ImageService;

use App\Models\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\UploadedFile;

/**
 * ImageService
 * php version 8.2.15
 *
 * @category Service
 * @author   CyberElysium
 * @license  https://cyberelysium.com Config
 * @link     https://cyberelysium.com
 * */

class ImageService
{
    protected $image;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->image = new Image();
    }

    /**
     * Store
     * Store image data with site URL access
     *
     * @param  UploadedFile $image
     * @return Image
     */
    public function store(UploadedFile $image): Image
    {
        if ($image) {
            // Store the image in Laravel's 'public' storage disk
            $filePath = $image->store('images', 'public'); // Ensure 'public' disk is used

            if ($filePath) {
                // Generate the public URL by concatenating the site URL with the storage URL
                $data['name'] = URL::to(Storage::url($filePath));

                // Save image data to database
                return $this->image->create($data);
            } else {
                throw new \Exception('Failed to save the image');
            }
        } else {
            throw new \Exception('No image provided');
        }
    }

    /**
     * Update
     * Update existing image data with site URL access
     *
     * @param  UploadedFile $image
     * @param  int $imageId
     * @return Image
     */
    public function update(UploadedFile $image, int $imageId): Image
    {
        $existingImage = $this->image->findOrFail($imageId);

        if ($image) {
            // Store the new image in 'public' disk
            $filePath = $image->store('images', 'public');

            if ($filePath) {
                // Generate the public URL by concatenating the site URL with the storage URL
                $data['name'] = URL::to(Storage::url($filePath));

                // Update the existing image record
                $existingImage->fill($data)->save();

                return $existingImage;
            } else {
                throw new \Exception('Failed to update the image');
            }
        } else {
            throw new \Exception('No image provided');
        }
    }

    /**
     * Delete
     * Delete image data
     *
     * @param  int $imageId
     * @param  string $filePath
     * @return void
     */
    public function delete($imageId, $filePath)
    {
        $image = $this->image->findOrFail($imageId);

        // Delete the image from storage
        Storage::disk('public')->delete($filePath);

        // Delete the image record from the database
        $image->delete();
    }
}

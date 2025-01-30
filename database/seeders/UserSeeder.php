<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Actions\Fortify\CreateNewUser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{

    protected $user;

    public function __construct()
    {
        $this->user = new User();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $initialUsers = [
            [
                'first_name' => 'Admin',
                'email' => 'admin@gmail.com',
                'role' => 1,
                'password' => '123456789',
            ],
            [
                'first_name' => 'Customer',
                'email' => 'customer@gmail.com',
                'role' => 2,
                'password' => '123456789',
            ]
        ];

        foreach ($initialUsers as $user) {
            $admin = $this->user->getByEmail($user['email']);
            if (!$admin) {
                $this->user->create([
                    'first_name' => $user['first_name'],
                    'email' => $user['email'],
                    'role' => $user['role'],
                    'password' => Hash::make($user['password']),
                ]);
            }
            //sync permissions
            // $this->user->syncPermissions();
        }
    }
}

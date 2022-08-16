<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([

            'name'        => 'Luis Rodriguez',
            'email'       => 'luis@email.com',
            'username'    => 'luis',
            'password'    =>  bcrypt('1234Lr'),
            'firm'        => 'luis rodriguez',
            'category_id' => Category::handleCategory('CR')->first()['id'],
            'role_id'     => Role::handleRole('Administrador')->first()['id'],

        ]);
        User::create([
            'name'        => 'Angel Laguna',
            'email'       => 'angel@email.com',
            'username'    => 'angel',
            'password'    =>  bcrypt('1234Lr'),
            'firm'        => 'angel laguna',
            'category_id' => Category::handleCategory('PL')->first()['id'],
            'role_id'     => Role::handleRole('Piloto')->first()['id'],
        ]);
    }
}

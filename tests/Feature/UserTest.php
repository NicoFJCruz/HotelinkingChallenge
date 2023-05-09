<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function test_example_register(){
        Artisan::call('migrate');

        $carga = $this->get(route('register'));
        $carga->assertStatus(200)->assertSee('register');

        $correcto = $this->post(route('register', ["email"=>"nico@example.com", ""]));
    }
}

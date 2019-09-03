<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    //use RefreshDatabase;

    /** @test */
    public function a_guest_is_redirected_to_login_on_home_route()
    {
        $response = $this->get('/');
        $response->assertRedirect('/login');
        $response->assertStatus(302);
    }
}

<?php

namespace App\Http\Controllers;

class PostController extends Controller
{
    public function index()
    {
        $posts = [
            'Mon SUPER premier titre',
            'Mon SUPER deuxieme titre'
        ];

        $title = 'Mon SUPER premier titre';
        $title2 = 'Mon SUPER deuxieme titre';

        return view('articles', [
            'posts' => $posts
        ]);
    }
}

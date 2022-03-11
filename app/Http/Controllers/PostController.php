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

        return view('articles', [
            'posts' => $posts
        ]);
    }

    public function show($id)
    {
        $posts = [
            1 => 'Mon titre n°1',
            2 => 'Mon titre n°2'
        ];

        $post = $posts[$id] ?? 'Pas de titre';

        return view('article', [
            'post' => $post
        ]);
    }

    public function contact()
    {
        return view('contact');
    }
}

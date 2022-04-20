<?php

namespace App\Http\Controllers\ContactList;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class ContactListController extends Controller
{

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function index(){

        return Inertia::render('Contacts/Index');
    }

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function new(){

        $Templates = collect();
        return Inertia::render('Contacts/New', ['templates' => $Templates]);
    }
}

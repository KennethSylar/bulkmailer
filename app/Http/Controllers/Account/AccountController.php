<?php

namespace App\Http\Controllers\Account;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends \App\Http\Controllers\Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function index(){

        $User = User::query()->find(Auth::user()->id);
        $Package = $User->getPackages();

        return Inertia::render('Account', ['user' => $User, 'package'  => $Package->packages()]);
    }


}

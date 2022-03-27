<?php

namespace App\Http\Controllers\Billing;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BillingController extends \App\Http\Controllers\Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function index(){

        $User = User::query()->find(Auth::user()->id);
        $Package = $User->getPackages() ? $User->getPackages()->packages() : null;

        return Inertia::render('Billing/Index', ['user' => $User, 'package'  => $Package]);
    }


}

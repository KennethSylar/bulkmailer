<?php

namespace App\Http\Controllers\EmailTemplates;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EmailTemplateController extends \App\Http\Controllers\Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function index(){

//        $User = User::query()->find(Auth::user()->id);
//        $Package = $User->getPackages() ? $User->getPackages()->packages() : null;
        return Inertia::render('Templates/Index');
    }
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create(){

        $User = User::query()->find(Auth::user()->id);
        $Package = $User->getPackages() ? $User->getPackages()->packages() : null;
        return Inertia::render('Templates/New', ['activePackage'  => $Package]);
    }


}

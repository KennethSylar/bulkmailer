<?php

namespace App\Http\Controllers\Package;

use App\Models\Package;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PackageController extends \App\Http\Controllers\Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function index(){

        $User = User::query()->find(Auth::user()->id);
        $Package = $User->getPackages() ? $User->getPackages()->packages() : null;
        return Inertia::render('Packages/Index', ['activePackage'  => $Package]);
    }
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function change(){

        $Packages = Package::query()->get()->all();
        return Inertia::render('Packages/UpdatePackage', ['packages'  => $Packages]);
    }


}

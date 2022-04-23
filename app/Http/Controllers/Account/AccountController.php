<?php

namespace App\Http\Controllers\Account;

use App\Models\Domain;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Request;

class AccountController extends \App\Http\Controllers\Controller
{
    /**
     * Display the registration view.
     *
     * @return Response
     */
    public function index(){

        $User = User::query()->find(Auth::user()->id);
        $Package = $User->getPackages() ? $User->getPackages()->packages() : null;
        $Domain = $User->getDomain() ?? null;

        return Inertia::render('Account', ['user' => $User, 'package'  => $Package, 'domain' => $Domain]);
    }

    /**
     * Display the registration view.
     *
     * @return Response
     */
    public function update(Request $request)
    {

        $User = User::query()->find(Auth::user()->id);
        $User->update([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
        ]);
        toastr()->info('Are you the 6 fingered man?');
        return back();
    }

    /**
     * Display the registration view.
     *
     * @return Response
     */
    public function updateDomain(Request $request)
    {

        Domain::query()->firstOrCreate([
            'admin_email' => $request->adminEmail
        ],[
            'domain_url' => $request->domain,
            'user_id' => Auth::user()->id
        ]);

        toastr()->info('Are you the 6 fingered man?');
        return back();
    }


}

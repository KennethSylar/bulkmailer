<?php

namespace App\Http\Controllers\Campaign;
use App\Http\Controllers\Controller;
use App\Models\Contact_List;
use App\Models\User;
use App\Models\User_package;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;


class CampaignController extends Controller
{

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function index(){

        return Inertia::render('Campaigns/Index');
    }

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function newCampaign(){

        $Templates = collect([
            [
                'id' => 1,
                'name' => 'test'
            ],
            [
                'id' => 2,
                'name' => 'test-2'
            ]
        ]);
        $Contact_list = Contact_List::query()->where([
                                ['status', '=', true],
                                ['user_id', '=', Auth::user()->id],
                            ])->get();
        return Inertia::render('Campaigns/New', ['templates' => $Templates, 'contact_list' => $Contact_list]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'template' => 'required|integer',
            'date' => 'required|date',
            'time' => 'required|date_format:H:i',
            'contact_list' => 'required|integer',
        ]);
        dd($request->all());

    }
}

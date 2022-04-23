<?php

namespace App\Http\Controllers\ContactList;
use App\Http\Controllers\Controller;
use App\Models\Contact_List;
use App\Models\Contacts;
use Illuminate\Http\Request;
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
        $contact_list = Contact_List::query()->where([
            ['status', '=', true],
            ['user_id', '=', Auth::user()->id],
        ])->get();
        return Inertia::render('Contacts/Index', ['contact_list' => $contact_list]);
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

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function view($id){

        $Contacts = Contacts::query()->where('contact_list_id', '=', $id)->get();
        return Inertia::render('Contacts/View', ['contacts' => $Contacts]);
    }

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function add(Request $request){
        $csvFileName = $request->file('file')->getRealPath();
        $contact_list = Contact_List::query()->create([
            'user_id' => Auth::user()->id,
            'name' => $request->name,
            'description' => $request->description
        ]);
        if($this->readCSV($csvFileName, array('delimiter' => ','), $contact_list))
        {
            echo 'contact list created';
        }else{
            echo 'error creating contact list';
        }
    }

    public function readCSV($csvFile, $array, $contact_list)
    {
        $file_handle = fopen($csvFile, 'r');
        $count = 0;
        while (!feof($file_handle)) {
            $line_of_text[] = fgetcsv($file_handle, 0, $array['delimiter']);
            if ($count > 0){
                Contacts::query()->create([
                    'name' => $line_of_text[$count][1],
                    'lastname' => $line_of_text[$count][2],
                    'contact_list_id' => $contact_list->id,
                    'email' => $line_of_text[$count][3],
                ]);
            }
            $count++;
        }
        fclose($file_handle);
        if ($count > 0)
        {
            return true;
        }
        return false;
    }
}

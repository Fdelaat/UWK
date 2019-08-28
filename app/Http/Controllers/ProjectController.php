<?php

namespace App\Http\Controllers;

use App\User;
use App\Project;
use App\Events\openProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProjectCollection;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getView()
    {
        $id = Auth::id();
        $user =  User::findorfail($id);
        //$user = DB::table('users')->find($id);

        broadcast(new openProject($user))->toOthers();

        return view('project.index');
    }

    public function index()
    {
        $response = new ProjectCollection(Project::findOrFail(1)->paginate(1));

        if ( ! $response)
        {
            return response()->json([
                'error' => 'Something went wrong!'
            ], 404);
        }

        return response()->json($response, 200);
    }

    public function store(Request $request)
    {
        $this->validate(Request(),[
            'projectNummer' => 'required|unique:projects,number'
        ]);

        Project::forceCreate([
            'name' => Request('projectNaam'),
            'number' => Request('projectNummer'),
            'branchOffice' => Request('vestiging'),
            'location' => Request('projectLocatie'),
            'city' => Request('projectPlaats'),
            'clientName' => Request('klant'),
            'consultantName' => Request('adviseur'),
            'architectName' => Request('architect'),
            'description' => Request('omschrijving')
        ]);

        return response()->json(['message' => 'Nieuw project aangemaakt!', 'type' => 'success'],200);
    }

    public function update(Request $request)
    {
        $this->validate(Request(),[
            'projectNummer' => 'exists:projects,number'
        ]);

        $contactCompany = Project::findOrFail($request->input('projectId'));
        $contactCompany->fill([
            'name' => Request('projectNaam'),
            'number' => Request('projectNummer'),
            'branchOffice' => Request('vestiging'),
            'location' => Request('projectLocatie'),
            'city' => Request('projectPlaats'),
            'clientName' => Request('klant'),
            'consultantName' => Request('adviseur'),
            'architectName' => Request('architect'),
            'description' => Request('omschrijving')
        ])->save();

        return response()->json(['message' => 'Project aangepast!', 'type' => 'info'],200);
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return response()->json(['message' => 'Project verwijderd!', 'type' => 'danger'],200);
    }
}

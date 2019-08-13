<?php

namespace App\Http\Controllers\Admin;

use App\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Excel;
use App\Exports\UsersExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateUserRoleRequest;


class dashboardController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('auth.admin');
    }


    protected function getUsers (Request $request)
    {
        return User::orderBy('id', 'asc')->get();
    }


    public function index (Request $request)
    {
        $users = $this->getUsers($request);

        return view('admin.dashboard', [
            'users' => $users,
        ]);
    }

    public function update (UpdateUserRoleRequest $request)
    {
        // $request->user is the submitted user id
        if (!count(User::where('id', $request->user)->get())) {
            // user isn't in db
            // form was corrupted, false data submitted
            abort(400);
        }
        if ($request->user == $request->user()->id) {
            // user submitted is current user
            abort(400);
        }
        if (! in_array($request->role, config('enums.roles'))) {
            // role selected is not valid
            // form was corrupted, false data submitted
            // also caught by UpdateUserRoleRequest
            abort(400);
        }
        $user = User::findOrFail($request->user);
        //$old_role = $user->role;
        $user->role = $request->role;
        $user->save();
        //event(new UserRoleModified($old_role, $user));
        return redirect('admin');
    }

    public function destroy (User $user)
    {
        $user->delete();
        return response()->json(null, 200);
    }

    public function oauth ()
    {
        return view('admin.Oauth');
    }

    public function export()
    {
        return (new UsersExport)->download('gebruikers.xlsx', Excel::XLSX);
    }
}

@extends('layouts.app')

@section('content')
    <div class="container-fluid">

            <div class="col-md-10 offset-1">
                <div class="card card-default">
                    <div class="card-header">Admin - Oauth2 Config</div>

                    <div class="card-body">
                        <passport-clients></passport-clients>
                        <passport-authorized-clients></passport-authorized-clients>
                        <passport-personal-access-tokens></passport-personal-access-tokens>
                    </div>
                </div>
            </div>

    </div>
@endsection
@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
            <div class="card card-default">
                <div class="card-header">
                    <h5 class="font-weight-bold py-1 my-0 text-muted">Admin - Gebruikers</h5>
                </div>

                <div class="card-body">
                    <uwk-users users-prop="{{ $users }}"></uwk-users>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

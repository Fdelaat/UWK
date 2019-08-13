@extends('layouts.app')

@section('content')

<div class="container-fluid">
    <div class="row align-items-center justify-content-center" style="height: 70vh">

        <div class="col">
            <div class="col-lg-6 align-content-end">
                <uwk-main-page></uwk-main-page> 1
            </div>

            <div class="col-lg-6 justify-content-end">
                <uwk-main-page></uwk-main-page> 2
            </div>
        </div>
        <div class="col">
            <div class="col-lg-6 justify-content-start">

                <uwk-main-page></uwk-main-page> 3

            </div>
            <div class="col-lg-6 justify-content-start">

                <uwk-main-page></uwk-main-page> 4

            </div>
        </div>
    </div>
</div>

@endsection

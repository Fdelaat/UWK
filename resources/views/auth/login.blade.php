@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row align-items-center justify-content-center" style="height: 70vh">
        <div class="col-md-6 col-sm-8">
            <div class="card shadow p-3 mb-5 rounded">

                <div class="card-body">
                    <div class="row">
                        <img src="/img/logo.png" alt="kuijpers-logo" class="px-2 pb-3">
                    </div>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-5 col-sm-4 col-form-label">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-7 col-sm-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-5 col-sm-4 col-form-label">{{ __('Password') }}</label>

                            <div class="col-md-7 col-sm-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-5 col-sm-4"></div>
                            <div class="col-md-7 col-sm-6">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="custom-control-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-5 col-sm-4"></div>
                            <div class="col-md-4 col-sm-3 mt-lg-1">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>
                            </div>
                            <div class="col-md-3 col-sm-3 mb-md-0">
                                @if (Route::has('password.request'))
                                    <a class="d-inline-block mt-0" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name', 'Laravel') }}
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        @guest

                        @else
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('projecten.index') }}"> <i class="fa fa-university" style="width: 22px;" aria-hidden="true"></i>Projecten</a>
                        </li>
                         <li class="nav-item dropdown" id="main">
                            <a id="navbarDropdownContacts" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                <i class="fa fa-folder" style="width: 22px;" aria-hidden="true"></i>Contacten <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('bedrijven.index') }}"> <i class="fa fa-university" style="width: 22px;" aria-hidden="true"></i>Bedrijven</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="{{ route('contactpersonen.index') }}"><i class="far fa-address-card" style="width: 24px;" aria-hidden="true"></i>Contactpersonen</a>
                                <a class="dropdown-item" href="{{ route('productgroepen.index') }}"><i class="fa fa-tags" style="width: 22px;" aria-hidden="true"></i>Productgroepen</a>
                            </div>
                        </li>
                        @endif
                    </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto mr-5">
                    <!-- Authentication Links -->
                    @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                    @else
                        <li class="nav-item dropdown">
                        <a id="navbarDropdownUser" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                <i class="far fa-user-circle" style="width: 22px;" aria-hidden="true"></i> {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                        <div class="dropdown-menu dropdown-menu-right justify-content-center" aria-labelledby="navbarDropdown">
                                @if (Auth::user()->role === 'admin')
                                <a class="dropdown-item" href="{{ route('register') }}"><i class="fa fa-user-plus" style="width: 22px;" aria-hidden="true"></i>{{ __('Register') }}</a>
                                <a class="dropdown-item" href="{{ route('admin.index') }}"><i class="fa fa-user-secret" style="width: 22px;" aria-hidden="true"></i>Admin</a>
                                <a class="dropdown-item" href="{{ route('admin.oauth') }}"><i class="fa fa-server" style="width: 22px;" aria-hidden="true"></i>Oauth2 Clients</a>
                                <div class="dropdown-divider"></div>
                                @endif
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    <i class="fas fa-sign-out-alt" style="width: 22px;" aria-hidden="true"></i>{{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>

                            </div>
                        </li>
                        <li class="nav-item ml-md-2">
                            <a id="notification" class="nav-link disabled text-success" href="#" role="button">
                                <i class="fa fa-bell" style="width: 22px;" aria-hidden="true"></i>
                            </a>
                        </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>

@extends('layouts.app')

@section('content')
{{ Auth::user()->id }}
    <div id="cart" data-user={{ Auth::user()->id }}></div>
@endsection
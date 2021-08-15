@extends('layouts.app')

@section('content')
{{ Auth::user()->id }}
    <div id="products" data-user={{ Auth::user()->id }}>
    </div>
@endsection
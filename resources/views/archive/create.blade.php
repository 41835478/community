@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
    <div class="container">
    <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
            <div class="list-group">
            <a href="/" class="list-group-item">{{ __('archive.sidebar.list') }}</a>
            <a href="/create" class="list-group-item active">{{ __('archive.sidebar.add') }}</a>
            </div>
        </div>

        <div class="col-xs-12 col-sm-9">
            <p class="pull-right visible-xs">
                <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">{{ __('archive.go') }}</button>
            </p>
                <div class="panel panel-default">
                    <div class="panel-heading">{{ __('archive.sidebar.add') }}</div>

                    <div class="panel-body">
                        {!! Form::open() !!}
                        <div class="input-group">
                            {!! Form::label('name', __('archive.name'), ['class' => 'input-group-addon']) !!}
                            {!! Form::text('name', old('name'), ['class' => 'form-control']) !!}
                            <div class="red">{{ __($errors->first('name')) }}</div>
                        </div>
                        <br/>
                        <div class="input-group">
                            {!! Form::label('address', __('archive.address'), ['class' => 'input-group-addon']) !!}
                            {!! Form::text('address', old('address'), ['class' => 'form-control']) !!}
                            <div class="red">{{ __($errors->first('address')) }}</div>
                        </div>

{{--                     {!! Form::label('shape', __('archive.shape')) !!}
                        {!! Form::select('shape', ['1' => '面', '2' => '点']); !!} --}}
                        <br/>
                        <div class="input-group">
                            {!! Form::label('unit', __('archive.unit'), ['class' => 'input-group-addon']) !!}
                            {!! Form::number('unit', null, ['min' => 1, 'max' => 9999, 'class' => 'form-control']) !!}
                            <div class="red">{{ __($errors->first('unit')) }}</div>
                            {!! Form::label('building', __('archive.building'), ['class' => 'input-group-addon']) !!}
                            {!! Form::number('building', null, ['min' => 1, 'max' => 9999, 'class' => 'form-control']) !!}
                            <div class="red">{{ __($errors->first('building')) }}</div>
                            {!! Form::label('lift', __('archive.lift'), ['class' => 'input-group-addon']) !!}
                            {!! Form::number('lift', null, ['min' => 1, 'max' => 999, 'class' => 'form-control']) !!}
                            <div class="red">{{ __($errors->first('lift')) }}</div>
                        </div>
                        <br/>
                        <div class="input-group">
                            {!! Form::label('property', __('archive.property'), ['class' => 'input-group-addon']) !!}
                            {!! Form::text('property', old('property'), ['class' => 'form-control']) !!}
                            <div class="red">{{ __($errors->first('property')) }}</div>
                        </div>
                        <br/>
                        <div class="input-group">
                            {!! Form::label('principal', __('archive.principal'), ['class' => 'input-group-addon']) !!}
                            {!! Form::text('principal', old('principal'), ['class' => 'form-control']) !!}
                            <div class="red">{{ __($errors->first('principal')) }}</div>
                            {!! Form::label('mobile', __('archive.mobile'), ['class' => 'input-group-addon']) !!}
                            {!! Form::text('mobile', old('mobile'), ['class' => 'form-control']) !!}
                            <div class="red">{{ __($errors->first('mobile')) }}</div>
                        </div>
{{--                         {!! Form::label('shape_length', __('archive.shape_length')) !!}
                        {!! Form::number('shape_length', null, ['min' => 0.000001, 'step' => '0.000001', 'max' => 99999999999999.999999]) !!}
                        {!! Form::label('shape_area', __('archive.shape_area')) !!}
                        {!! Form::number('shape_area', null, ['min' => 0.000001, 'step' => '0.000001', 'max' => 99999999999999.999999]) !!}
 --}}
                        <hr/>
                        <div class="text-center">
                            {!! Form::submit(__('archive.submit'), ['class' => 'btn btn-primary']) !!}
                            {!! Form::reset(__('archive.reset'), ['class' => 'btn btn-default']) !!}
                        </div>
                        {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</div>
@endsection

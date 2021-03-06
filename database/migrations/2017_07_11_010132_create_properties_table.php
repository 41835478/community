<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    //
    Schema::create('properties', function (Blueprint $table)
    {
      $table->increments('id');
      $table->string('name', 60)->unique();
      $table->boolean('show')->default(1);
      $table->unsignedInteger('creater');
      $table->foreign('creater')->references('id')->on('users');
      $table->unsignedInteger('modifier');
      $table->foreign('modifier')->references('id')->on('users');

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    //
    Schema::dropIfExists('archives');
  }
}

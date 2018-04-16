<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    public function user() {
      return $this->belongsTo('App\User')
    }
    protected $fillable = [
        'user_id', 'movie_name', 'movie_id'
    ];
}

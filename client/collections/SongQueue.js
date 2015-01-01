// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
  },

  enqueue: function(song){
    console.log('hello');
    // this.push(this.model, this.song); // Where are we pushing this to?
    if(this.length === 1){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  }
});

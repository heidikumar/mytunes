// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // Fire on add event in any Song Model
    this.on("add", function() {
      if ( this.length == 1) {
        this.playFirst();
      }
    });

    this.on("ended", function(){
      // console.log(this.at(0));
      this.remove(this.at(0));
      if ( this.length > 0) {
        this.playFirst();
      }
    });

    this.on("dequeue", function(song){
      this.remove(song);
    })
  },

  playFirst: function(){
    this.at(0).play();
  }
    //the songQueue connects to the library
      //does it need a reference to the current song in the app param's library?

});
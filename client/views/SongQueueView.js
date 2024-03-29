// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {

    // Re-render upon add event on the Song Queue collection
    this.collection.on("add", function() {
      this.render();
    }, this);

    // Re-render upon remove event on the Song Queue collection
    this.collection.on("remove", function() {
      this.render();
    }, this);

    this.collection.on('change', function(){
      this.render();
    }, this);

    this.render();
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

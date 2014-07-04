$(document).ready(function(){
    var playListItems = [];
    var playItemSrc = [];
    var song;
    var selectedPlay;
    /*Adds checkbox to data row contains Mp3 files.*/
    if($(".play-item")){
        $(".play-item").each(function(){
            $(this).append('<input class = "check-item" type = "checkbox" >');
        });
    }
     
             if($("input.check-item").is(':checked')) {
                playItemSrc.push($(this).parent().find('a').attr('src'));
                playListItems.push($(this).parent().text());
                $("#display-item").append('<li>' + playListItems + '</li>');
                $(this).change(function() {
                  playItemSrc.remove(this);
                  $("#display-item").remove(playListItems);
                });
             }

             // if($("input.check-item:not(:checked)")) {
             //  playItemSrc.remove(this);
             //  $("#display-item").remove(playListItems);
             // }

     

    $( '.check-item' ).click(function( event ) {
      console.log( 'smiled', $( this ).text() );
    });   //this function specifies this text box clicked.
      
    var play_song = function(){
        if (playItemSrc.length > 0) {
          var audio = $("#audio-player");
          audio.attr('src', playItemSrc.pop());
          audio[0].play();
        }
    };
    // var selectedPlay = function() {
    //          $("#audio-player").click(function(){
    //     console.log(playItemSrc);
           
    //         console.log($("#audio-player").attr('src'));
    //            $(this)[0].play();
    //        });
    //  }


     /* If checkbox checked then display items in Play List. */
    $("#play-selected").click(function(){
      console.log(playItemSrc);
      play_song();
      $("#audio-player").bind('ended', play_song);
    });

    //  for(var i = 0; i < playListItems.length; i++){
    //   
    // }
});    
            



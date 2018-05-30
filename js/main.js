var spotifyApi = new SpotifyWebApi();
var token ="BQCeJaqRKv2TMh6Z4w2JggKk6uNzuS6fdTIW5iH1lyPpZanfzRs8BJQfxOrnEdeFR789ZR1xawyl9W9rFnoegp3kHcUFsu9_J2a_AdOH9AiH_BJESpCmKQWc7PBGBpuwekyI57e14h_7BM5It9pNre4Whq6aXs9xHKis";
spotifyApi.setAccessToken(token);

//spotifyApi.setPromiseImplementation(Q);

spotifyApi.getPlaylist('jmperezperez', '4vHIKV7j4QcZwgzGQcZg1x')
  .then(function(data) {
    // console.log('User playlist', data);
     console.log(data.images)
      var img_index = 1;
      console.log(data);
      data.images.forEach(element => {
    
    //     <div class="card" style="width: 18rem;">
    //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>

         var card = $('<div />').attr({
            'class': 'card',
            'style': 'idth: 18rem;'
        });

          var img = $('<img />').attr({
            'id': img_index,
            'src': element.url,
            'alt': 'Card image cap',
            'title': 'JSFiddle logo',
            'class': 'card-img-top',
            'width': 250 });
         
            card.append(img)


          $('#midiv').append(card);     
              
          img_index++;

      });


  }, function(err) {
    console.error(err);
  });
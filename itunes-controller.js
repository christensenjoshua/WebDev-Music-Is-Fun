function ItunesController() {

  // PRIVATE
  const itunesService = new ItunesService()
  function drawSongs(results) {
    console.log(results)
    //YOUR CODING STARTS HERE
    let template = ``
    for (let i = 0; i < results.length; i++) {
      const item = results[i]
      template += `
      <div class="row">
        <div class="col-2">
          <img class="img-fluid" src="${item.albumArt}">
        </div>
        <div class="col-7">
          <audio id="audio-${i}">
            <source src="${item.preview}" type="audio/mp4">
          </audio>
          <h5 onclick="app.controllers.itunesCtrl.playTrack('${i}')"><span id="track-${i}">PlayIt</span>${item.title}</h5>
          <h6>Album: ${item.collection}</h6>
          <h6>By: ${item.artist}</h6>
        </div>
        <div class="col-3 text-right">
          <h6>Price: $<span class="badge badge-info">${item.price}</span></h6>
        </div>
      </div>
      `
    }
    document.getElementById('songs').innerHTML = template
  }
  //PUBLIC
  this.playTrack = function (id) {
    let elem = document.getElementById('audio-' + id)
    let spanElem = document.getElementById('track-' + id)
    if (!elem.paused) {
      elem.pause()
      spanElem.innerHTML = 'PlayIt'
      //draw pause button since it's playing
    } else {
      let audios = document.getElementsByTagName('audio')
      for (let i = 0, len = audios.length; i < len; i++) {
        audios[i].pause()
        let num = audios[i].id.split('-')[1]
        let aSpanElem = document.getElementById('track-' + num)
        aSpanElem.innerHTML = 'PlayIt'
        // also draw each span as play since they should all be paused?
      }
      elem.play()
      spanElem.innerHTML = 'PauseIt'
      //draw play button since it's paused.
    }
  }
  //DO NOT MODIFY THIS METHOD
  this.getMusic = function (e) {
    e.preventDefault();
    let artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


function ItunesService() {
  this.getMusicByArtist = function (artist) {
    let url1 = '//bcw-getter.herokuapp.com/?url='
    let url = 'https://itunes.apple.com/search?term=' + artist + '&media=music'
    //Casts each object to 
    return $.getJSON(url).then(function (response) {
      let songList = response.results.map(song => {
        return {
          title: song.trackName,
          albumArt: song.artworkUrl60.replace(/60x60/g, "250x250"),
          artist: song.artistName,
          collection: song.collectionName,
          price: song.collectionPrice,
          preview: song.previewUrl,
        }
      })
      return songList;
    })
  }
  
  //DO NOT MODIFY
  // this.getMusicByArtist = function (artist) {
  //   var url = 'https://itunes.apple.com/search?term=' + artist + "&callback=?"
  //   //Casts each object to 
  //   return $.getJSON(url).then(function (response) {
  //     var songList = response.results.map(song => {
  //       return {
  //         title: song.trackName,
  //         albumArt: song.artworkUrl60.replace(/60x60/g, "250x250"),
  //         artist: song.artistName,
  //         collection: song.collectionName,
  //         price: song.collectionPrice,
  //         preview: song.previewUrl,
  //       }
  //     })
  //     return songList;
  //   })
  // }
}
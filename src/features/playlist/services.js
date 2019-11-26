import * as API from './repository'

export function getPlaylistById(id, { token }) {
  console.log(id)
  // return API.getPlaylistById(id, { token })
  return API.getPlaylistById(id, { token }).then( result => {
      let trackInfo = result.tracks.items.map( function(order) {
        console.log(order)
        let info = { "name": order.track.name,
                    "artist": order.track.album.artists[0].name,
                    "album" : '',
                    "image" : order.track.album.images[1].url,
                    "previewUrl" : order.track.preview_url,
                    "durationMs" : order.track.duration_ms
                    }
      return info

      });

    let Lists = {
      title : result.name,
      subTitle : '',
      bottomLine : '',
      image : result.images[0].url,
      tracks : trackInfo

    }


  //  console.log(Lists)
   console.log(result)
   return Lists
    
  })
}

export function getMyPlaylist({ token }) {
  return API.getMyPlaylist({ token })
}

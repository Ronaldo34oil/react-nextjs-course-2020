import * as API from './repository'

export function getNewReleases({ token, limit }) {
  return API.getNewReleases({ token, limit })
}

export function getAlbumById(id, { token }) {
  
  return API.getAlbumById(id, { token }).then( result => {
      let trackInfo = result.tracks.items.map( function(order) {

        let info = { "name": order.name,
                    "artist": order.artists[0].name,
                    "album" : '',
                    "image" : result.images[1].url,
                    "previewUrl" : order.preview_url,
                    "durationMs" : order.duration_ms
                    }
      return info

      });

    let Lists = {
      title : result.name,
      subTitle : result.label,
      bottomLine : '',
      image : result.images[0].url,
      tracks : trackInfo

    }


  console.log(Lists)
   return Lists
    
  })
}

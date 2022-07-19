import { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions';
import { getLastFMResponse } from './api/lastFm/getLastFMResponse';
import { handleLastFMImages } from './api/lastFm/helpers';

function responseToItems(response) {
  const topAlbums = [];
  response.data.topalbums.album.forEach((_album) => {
    const album = {
      id: _album.mbid,
      name: _album.name,
      artist: {
        name: _album.artist['#text'] ?? _album.artist.name,
        url: _album.artist.url,
      },
      url: _album.url,
      playCount: Number(_album.playcount),
      images: handleLastFMImages(_album.image),
    };
    topAlbums.push(album);
  });
  return { topAlbums };
}

function responseToMeta(response) {
  return response.data.topalbums['@attr'];
}

export async function handler(event: HandlerEvent): Promise<HandlerResponse> {
  return getLastFMResponse({
    event,
    params: {
      method: 'user.gettopalbums',
    },
    responseToItems,
    responseToMeta,
  });
}

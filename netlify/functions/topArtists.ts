import { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions';
import { getLastFMResponse } from './api/lastFm/getLastFMResponse';
import { handleLastFMImages } from './api/lastFm/helpers';

function responseToItems(response) {
  const topArtists = [];
  for (const _artist of response.data.topartists.artist) {
    const artist = {
      id: _artist.mbid,
      name: _artist.name,
      playCount: Number(_artist.playcount),
      url: _artist.url,
      images: handleLastFMImages(_artist.image),
    };
    topArtists.push(artist);
  }
  return { topArtists };
}

function responseToMeta(response) {
  return response.data.topartists['@attr'];
}

export async function handler(event: HandlerEvent): Promise<HandlerResponse> {
  return getLastFMResponse({
    event,
    params: {
      method: 'user.gettopartists',
    },
    responseToItems,
    responseToMeta,
  });
}

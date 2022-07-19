import { HandlerEvent, HandlerResponse } from '@netlify/functions';
import { getLastFMResponse } from './api/lastFm/getLastFMResponse';
import { handleLastFMImages } from './api/lastFm/helpers';

function responseToItems(response) {
  const recentTracks = [];
  for (const _track of response.data.recenttracks.track) {
    const track = {
      id: _track.mbid,
      name: _track.name,
      album: {
        name: _track.album['#text'],
        url: _track.album.url,
      },
      artist: {
        name: _track.artist['#text'],
        url: _track.artist.url,
      },
      date: new Date(Number(_track.date.uts * 1000)).toISOString(),
      url: _track.url,
      images: handleLastFMImages(_track.image),
    };

    recentTracks.push(track);
  }

  return {
    recentTracks,
  };
}

function responseToMeta(response) {
  return response.data.recenttracks['@attr'];
}

async function handler(event: HandlerEvent): Promise<HandlerResponse> {
  return getLastFMResponse({
    event,
    params: {
      method: 'user.getrecenttracks',
    },
    responseToItems,
    responseToMeta,
  });
}

export { handler };

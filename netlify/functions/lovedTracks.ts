import { HandlerEvent, HandlerResponse } from '@netlify/functions';
import { getLastFMResponse } from './api/lastFm/getLastFMResponse';
import { handleLastFMImages } from './api/lastFm/helpers';

function responseToItems(response) {
  const lovedTracks = [];
  for (const _track of response.data.lovedtracks.track) {
    console.log('_track:', _track);
    const track = {
      id: _track.mbid,
      name: _track.name,
      artist: {
        name: _track.artist.name,
        url: _track.artist.url,
      },
      date: new Date(Number(_track.date.uts * 1000)).toISOString(),
      url: _track.url,
      images: handleLastFMImages(_track.image),
    };

    lovedTracks.push(track);
  }

  return {
    lovedTracks,
  };
}

function responseToMeta(response) {
  return response.data.lovedtracks['@attr'];
}

async function handler(event: HandlerEvent): Promise<HandlerResponse> {
  return getLastFMResponse({
    event,
    params: {
      method: 'user.getlovedtracks',
    },
    responseToItems,
    responseToMeta,
  });
}

export { handler };

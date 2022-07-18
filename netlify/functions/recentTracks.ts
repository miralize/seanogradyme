import { Handler } from '@netlify/functions';
import { getLastFMResponse } from './api/lastFm/getLastFMResponse';

const handler: Handler = async (event) =>
  getLastFMResponse({
    method: 'user.getrecenttracks',
    event,
    parseResponse: (response) => ({
      data: {
        recentTracks: response.data.recenttracks.track.map((track, index) => ({
          ...track,
          id: Date.now().toString() + index,
          artist: {
            ...track.artist,
            ...(track.artist['#text'] && {
              name: track.artist['#text'],
            }),
          },
        })),
        meta: response.data.recenttracks['@attr'],
      },
    }),
  });

export { handler };

import { Handler } from '@netlify/functions';
import { getLastFMResponse } from './api/lastFm/getLastFMResponse';

const handler: Handler = async (event) =>
  getLastFMResponse({
    method: 'user.gettopalbums',
    event,
    parseResponse: (response) => ({
      data: {
        topAlbums: response.data.topalbums.album.map(
          (album, index: number) => ({
            ...album,
            id: Date.now().toString() + index,
          }),
        ),
        meta: response.data.topalbums['@attr'],
      },
    }),
  });

export { handler };

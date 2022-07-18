import axios from 'axios';
import { HandlerEvent } from '@netlify/functions';

require('dotenv').config({ path: './.env.local' });

export const getLastFMResponse = async ({
  method,
  event,
  parseResponse = (T) => T,
}: {
  method: string;
  event: HandlerEvent;
  parseResponse;
}): Promise<{
  statusCode: number;
  body: string;
}> => {
  try {
    const lastFMUrl = 'http://ws.audioscrobbler.com/2.0/';

    const lastFMApiKey = process.env.LASTFM_API_KEY;
    if (!lastFMApiKey) {
      throw new Error('There was an error building the request');
    }

    const params = {
      ...event.queryStringParameters,
      user: 'miralize',
      api_key: lastFMApiKey,
      format: 'json',
      method,
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('params:', params);
    }

    const response = await axios.get(lastFMUrl, { params });
    const transformedResponse = parseResponse(response);

    return {
      statusCode: response.status,
      body: JSON.stringify(transformedResponse.data),
    };
  } catch (err) {
    return {
      statusCode: err?.response?.status ?? 500,
      body: JSON.stringify(err?.response?.data ?? {}),
    };
  }
};

require('dotenv').config({ path: './.env.local' });
import axios, { AxiosRequestConfig } from 'axios';
import { HandlerEvent, HandlerResponse } from '@netlify/functions';

const lastFMUrl = 'http://ws.audioscrobbler.com/2.0/';

type LastFMRequest = {
  params: AxiosRequestConfig['params'];
  responseToItems: (any) => any;
  responseToMeta: (any) => any;
  event: HandlerEvent;
};

type LastFMResponse = Promise<{
  statusCode: number;
  body: string;
}>;

export async function getLastFMResponse({
  params,
  event,
  responseToItems,
  responseToMeta,
}: LastFMRequest): Promise<HandlerResponse> {
  try {
    const { LASTFM_API_KEY, LASTFM_USER } = process.env;
    if (!LASTFM_API_KEY) {
      throw new Error('There was an error building the request');
    }

    const response = await axios.get(lastFMUrl, {
      params: {
        ...event.queryStringParameters,
        ...params,
        user: LASTFM_USER,
        api_key: LASTFM_API_KEY,
        format: 'json',
      },
    });

    const items = responseToItems(response);
    const meta = responseToMeta(response);

    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: response.status,
      body: JSON.stringify({ ...items, meta }),
    };
  } catch (error) {
    const errorMessage = error?.response?.data ?? error.toString() ?? {};
    const statusCode = error?.response?.status ?? 500;
    return {
      statusCode,
      body: JSON.stringify(errorMessage),
    };
  }
}

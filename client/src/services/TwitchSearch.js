import axios from 'axios';

/**
 * Retrieve the display name and follower count for the provided
 * Twitch channel from the backend server.
 *
 * @param {*} channelName
 */
export const getChannelData = (channelName) => {
  const endpoint = `${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/twitch/channelData`;

  // Return the axios promise so the SearchBox code can emit data or handle
  // errors based on whether the promise is fulfilled or rejected.
  return axios.get(endpoint, {
    params: {
      channel: channelName,
    },
  });
};

export default getChannelData;

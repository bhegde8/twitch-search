const { Router } = require('express');
const axios = require('axios');

const twitchRouter = Router();

/**
 * Retrieve the channel data (follower count and display name) given
 * a channel name.
 *
 * Query Parameters:
 * - channel: the name of the channel to get data for
 */
twitchRouter.get('/channelData', (req, res) => {
  const endpoint = `${process.env.TWITCH_API}/channels/${req.query.channel}`;

  // Retrieve channel data for the specified channel from the /channels/ endpoint
  axios.get(endpoint, {
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID, // Supply Client-ID for auth
    },
  }).then((response) => {
    // If successful, send the display name and follower count of the channel.
    res.json({
      success: true,
      displayName: response.data.display_name,
      followerCount: response.data.followers,
    });
  }).catch((err) => {
    // If unsuccessful, send the error message.
    res.json({
      success: false,
      error: err.message,
    });
  });
});

module.exports = twitchRouter;

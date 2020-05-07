<template>
  <v-row align="center" justify="center">
    <v-col cols="auto" md="6">
      <v-row class="padded-inputs">
        <v-col cols="auto" md="9">

          <!-- Make the Enter key also trigger the search (for convenience) -->
          <v-text-field
            v-model="channelInput"
            label="Channel Name"
            placeholder="Enter your Twitch name..."
            outlined
            v-on:keyup.enter="fetchData"
          >
          </v-text-field>
        </v-col>
        <v-col cols="auto" md="3">
          <v-btn
            class="larger-button"
            outlined
            color="primary"
            @click="fetchData()"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { getChannelData } from '../services/TwitchSearch';

export default {
  name: 'SearchBox',

  data() {
    return {
      channelInput: '',
    };
  },

  methods: {
    /**
     * Retrieve the channel data for the provided channel name
     * from the backend server, and update the data on the frontend.
     */
    async fetchData() {
      try {
        // Attempt to retrieve the channel data from the backend
        // using the provided channel name.
        const channelData = await getChannelData(this.channelInput);

        // If the channel was successfully found, call App.updateData()
        // to show the results box. Otherwise, alert the error.
        if (channelData.data.success) {
          this.$emit('updateData', channelData.data);
        } else {
          // eslint-disable-next-line
          alert(channelData.data.error);
        }
      } catch (err) {
        // eslint-disable-next-line
        alert(err);
      }
    },
  },
};
</script>

<style scoped>
.padded-inputs {
  padding: 0.5em;
}

.larger-button {
  height: 56px !important;
  width: 100%;
}
</style>

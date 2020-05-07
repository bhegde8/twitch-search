<template>
  <v-app>
    <v-content>
      <v-container class="fill-height center" fluid>
        <search-box @updateData="updateData" />

        <!-- Only display the result box if a search was made. -->
        <result
          v-if="this.retrievedData"
          :displayName=displayName
          :followerCount=followerCount
        />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SearchBox from './components/SearchBox.vue';
import Result from './components/Result.vue';

export default {
  name: 'App',

  components: {
    SearchBox,
    Result,
  },

  data() {
    return {
      retrievedData: false,
      displayName: 'N/A',
      followerCount: 0,
    };
  },

  methods: {
    /**
     * Set the display name and follower count to the provided data,
     * and mark retrievedData true so the results box is displayed.
     */
    updateData(data) {
      this.retrievedData = true;
      this.displayName = data.displayName;
      this.followerCount = data.followerCount;
    },
  },
};
</script>

<style scoped>
.container.fill-height {
  align-content: center;
}
</style>

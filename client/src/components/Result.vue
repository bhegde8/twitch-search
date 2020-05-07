<template>
  <v-row align="center" justify="center">
    <v-col cols="auto" md="6">
      <v-card outlined>
        <v-row class="padded-data" justify="space-around">
          <v-col class="center-text" cols="auto" md="3">
            <h3 class="purple-text">{{ displayName }}</h3>
          </v-col>
          <v-col class="ml-auto center-text" cols="auto" md="3">
            <h3 class="purple-text">{{ followerCount }} Followers</h3>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Result',
  props: {
    displayName: {
      type: String,
      default: 'N/A',
    },
    followerCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.larger-button {
  height: 56px !important;
  width: 100%;
}

.center-text {
  text-align: center;
}

.purple-text {
  color: #6441a5;
}
</style>

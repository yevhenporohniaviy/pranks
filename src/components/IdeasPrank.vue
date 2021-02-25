<template>
  <div class="col-md-4">
    <v-card
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        />
      </template>
      <v-img
        height="250"
        :src="idea.img_url"
      />
      <v-card-title>{{ idea.title }}</v-card-title>
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <div class="grey--text">
            Likes:
          </div>
          <div class="grey--text ml-4">
            {{ idea.likes }}
          </div>
        </v-row>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>
        {{idea.description}}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['idea'],
}
</script>

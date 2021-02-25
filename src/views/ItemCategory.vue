<template>
  <v-card-text>
    <v-container>
      <v-row>
        <IdeasPrank
          v-for="idea in getIdeasPranksCategory.data"
          :key="idea.id"
          :idea="idea"
        />
      </v-row>
      <div class="text-center">
        <v-pagination
          v-if="getIdeasPranksCategory.pagination"
          v-model="page"
          @input="fetchData"
          color="#2fdbd9"
          :total-visible="7"
          :length="getIdeasPranksCategory.pagination.total_pages"
          circle
        />
      </div>
    </v-container>
  </v-card-text>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import IdeasPrank from '@/components/IdeasPrank'

export default {
  name: 'ItemCategory',
  components: {IdeasPrank},
  props: {
    slug: {
      type: String,
      required: true
    },
    category: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      page: 1,
      meta: {}
    };
  },
  computed: {
    ...mapGetters(["getIdeasPranksCategory"])
  },
  methods: {
    ...mapActions(["fetchIdeasPranksCategory"]),
    fetchData () {
      const params = {
        slug: this.slug,
        page: this.page
      }
      this.fetchIdeasPranksCategory(params)
    },
  },
  created() {
    this.meta = Object.assign({}, this.category)
    this.fetchData()
  },
  metaInfo() {
    return {
      title: this.meta.name,
      titleTemplate: '%s | Ideas Pranks',
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.meta.name
        },
        {
          vmid: 'image',
          name: "image  ",
          content: this.meta.img_url
        },

      ]
    };
  },
};
</script>

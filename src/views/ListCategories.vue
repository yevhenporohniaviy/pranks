<template>
  <div>
    <v-card
      class="mx-auto my-5"
      max-width="400"
      tile
    >
      <v-list-item
        v-for="category in getCategory"
        :key="category.id"
      >
        <router-link
          tag="div"
          class="item"
          :to="{ name: 'ItemCategory', params: { category: category, slug: category.slug }}"
        >
          <v-list-item-content>
            <v-list-item-title class="text-center align-center d-flex">
              <v-img :src="category.img_url" max-width="25" class="mr-10"/>
              <div>{{category.name}}</div>
            </v-list-item-title>
          </v-list-item-content>
        </router-link>
      </v-list-item>
    </v-card>
    <hr/>
    <List :listCategories="getCategory" :listData="getIdeasPranks" @changeData="getIdeasPranksData"/>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar
          flat
          dark
          color="#2fdbd9"
        >
          <v-btn
            icon
            dark
            @click="closeModal"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Ideas Pranks</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <router-view/>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import List from '@/components/List'

  export default {
    name: 'ListCategories',
    data() {
      return {
        dialog: false
      };
    },
    components: {
      List
    },
    computed: {
      ...mapGetters(["getCategory", "getIdeasPranks"]),
      filters () {
        return {
          page: 1,
          category: 'view-all-pranks'
        }
      }
    },

    methods: {
      ...mapActions(["fetchCategory", "fetchIdeasPranks"]),
      closeModal() {
        this.$router.push('/categories')
      },
      getIdeasPranksData (params) {
        this.fetchIdeasPranks(params)
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler: function(newVal) {
          this.dialog = newVal.meta && newVal.meta.dialog;
        }
      }
    },
    created () {
      this.fetchCategory()
    },
    metaInfo() {
      return {
        title: 'Categories',
        titleTemplate: '%s | Ideas Pranks',
        meta: [
          {
            vmid: "description",
            name: "description",
            content: "Description"
          }
        ]
      };
    },
  }
</script>

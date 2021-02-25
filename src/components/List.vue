<template>
  <v-container>
    <v-row>
      <v-row align="center">
        <v-col cols="4">
          <v-subheader>
            Filter Categories
          </v-subheader>
        </v-col>
        <v-col cols="8">
          <v-select
            v-model="select"
            :items="listCategories"
            item-text="name"
            item-value="slug"
            persistent-hint
            return-object
            single-line
            @input="changeFilter"
          ></v-select>
        </v-col>
      </v-row>
      <v-spacer/>
      <v-row align="center">
        <v-col cols="4"><v-subheader>
          Filter Count
        </v-subheader></v-col>
        <v-col cols="8"><v-select
          v-model="count"
          :items="countOption"
          single-line
          @input="changeFilter"
        ></v-select></v-col>
      </v-row>

      <v-row>
        <IdeasPrank
          v-for="idea in listData.data"
          :key="idea.id"
          :idea="idea"
        />
      </v-row>
      <v-pagination
        v-if="listData.pagination"
        v-model="page"
        color="#2fdbd9"
        @input="changeFilter"
        :total-visible="7"
        :length="listData.pagination.total_pages"
        circle
      />
    </v-row>
  </v-container>
</template>

<script>
import IdeasPrank from "@/components/IdeasPrank";
export default {
  name: 'List',
  props: ['listCategories', 'listData'],
  components: {
    IdeasPrank
  },
  data() {
    return {
      page: 1,
      select: {
        slug: "view-all-pranks",
        name: "View All Pranks"
      },
      count: 5,
      countOption: [5, 10, 15]
    };
  },
  computed: {
    filters () {
      return {
        count: this.count,
        page: this.page,
        category: this.select.slug || 'new-prank-calls'
      }
    }
  },
  methods: {
    changeFilter () {
      this.$emit('changeData', this.filters)
    }
  },
  created() {
    this.changeFilter()
  }
}
</script>

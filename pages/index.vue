<template>
  <div>
    <a-list
      class="comment-list"
      :header="`${todos_list.length} replies`"
      item-layout="horizontal"
      :data-source="todos_list"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <comment :comment="item" />
      </a-list-item>
    </a-list>
    <client-only>
      <infinite-loading
        v-if="todos_list.length"
        spinner="bubbles"
        @infinite="infiniteScroll"
      ></infinite-loading>
    </client-only>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "IndexPage",
  /* fetchOnServer: false, */
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapState("todos", ["todos_list"]),
  },
  methods: {
    ...mapActions("todos", ["fetch_todos_list"]),
    ...mapMutations("todos", ["RESET_TODOS"]),
    async get_todos_list(page = 1) {
      await this.fetch_todos_list(page);
    },
    async infiniteScroll($state) {
      await this.fetch_todos_list(this.page++);
      $state.loaded();
    },
  },
  mounted() {
    this.RESET_TODOS([]);
    this.get_todos_list();
  },
};
</script>

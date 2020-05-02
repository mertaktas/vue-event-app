<template>
  <div>
    <h1>Event Show {{ event.title }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id"],

  created() {
    this.$store.dispatch("fetchEvent", this.id);
  },
  computed: mapState(["event"])
};
</script>

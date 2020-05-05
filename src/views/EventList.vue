<template>
  <div class="events container">
    <h1 class="font-bold text-xl">Events Page</h1>
    <div class="flex flex-wrap mb-2">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <router-link :to="{ name: 'event-list', query: {page: page - 1 } }" rel="prev">Prev</router-link>
      <router-link
        v-if="events.length"
        :to="{ name: 'event-list', query: {page: page + 1 } }"
        rel="next"
      >Next</router-link>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  name: "EventList",
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch("fetchEvents", {
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["events"])
  }
};
</script>

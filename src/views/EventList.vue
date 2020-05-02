<template>
  <div class="events container">
    <h1 class="font-bold text-xl">Events Page</h1>
    <div class="flex flex-wrap mb-2">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
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
    this.$store.dispatch("fetchEvents");
  },
  computed: mapState(["events"])
};
</script>

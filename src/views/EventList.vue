<template>
  <div class="events container">
    <h1 class="font-bold text-xl">Events Page</h1>
    <div class="flex flex-wrap mb-2">
      <EventCard v-for="(event, index) in events" :key="index" :event="event" />
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import axios from "axios";

export default {
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/events")
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("This is a error message : " + error.response);
      });
  }
};
</script>

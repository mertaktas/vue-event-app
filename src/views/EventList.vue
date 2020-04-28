<template>
  <div class="events container">
    <h1 class="font-bold text-xl">Events Page</h1>
    <EventCard />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  components: {
    EventCard
  }
};
</script>
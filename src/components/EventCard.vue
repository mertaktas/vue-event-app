<template>
  <router-link :to="{ name: 'event-show', params: { id: '1' } }">
    <div class="event-card">
      <!-- Three columns -->
      <div class="flex mb-4">
        <div class="w-1/3 p-2">
          <div
            class="max-w-lg rounded overflow-hidden hover:shadow-lg transition duration-500 ease-in-out cursor-pointer"
          >
            <img
              class="w-full"
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            <div class="px-6 py-4">
              <div class="inline-block font-bold text-xl mb-2 float-left">{{ event.title }}</div>
              <div class="inline-block font-bold text-xs mb-2 float-right">{{ event.date }}</div>
              <p class="text-gray-700 text-base text-left clear-both">{{ event.text }}</p>
            </div>
            <div class="px-6 py-4">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >{{ event.attendees[0].name }}</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >{{ event.attendees[1].name }}</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >{{ event.attendees[2].name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  data() {
    return {
      event: {
        title: "Park Cleanup",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        date: "Tue May 15 2018",
        time: "6:00",
        attendees: [
          { id: "abc123", name: "Adam Jahr" },
          { id: "asa123", name: "John Jonny" },
          { id: "aas123", name: "Mac Canon" }
        ]
      }
    };
  }
};
</script>

<style>
</style>
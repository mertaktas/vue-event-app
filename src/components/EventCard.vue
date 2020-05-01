<template>
  <div class="w-1/3 p-2">
    <router-link :to="{ name: 'event-show', params: { id: event.id } }">
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
            v-for="attende in event.attendees"
            :key="attende"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            <base-icon class="inline-block">
              <icon-users />
            </base-icon>
            {{ attende.name }}
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import IconUsers from "@/components/icons/IconUsers.vue";
export default {
  name: "EventCard",
  components: {
    BaseIcon,
    IconUsers
  },
  props: {
    event: Object
  }
};
</script>

<style></style>

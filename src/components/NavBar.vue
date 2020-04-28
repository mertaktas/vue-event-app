<template>
  <nav>
    <div id="nav" class>
      <ul class="flex items-center justify-between">
        <div class="flex">
          <li class="mr-6">
            <router-link :to="{ name: 'home'}">Home</router-link>
          </li>
          <li class="mr-6">
            <router-link :to="{ name: 'about' }">About</router-link>
          </li>
        </div>
        <div>
          <img src="/favicon.ico" alt />
        </div>
        <div class="flex">
          <li class="mr-6">
            <router-link :to="{ name: 'event-list' }">Events</router-link>
          </li>
          <li class="mr-6">
            <router-link :to="{ name: 'event-create' }">Create</router-link>
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
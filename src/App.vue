<template>
  <div id="app" class="container mx-auto">
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
    <router-view />
  </div>
</template>

<style src='@/assets/styles/app.css' />

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

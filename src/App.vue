<template>
  <div id="app">
<<<<<<< HEAD
    <div>
      <router-view name="header" />
      <router-view />
      <router-view name="footer" />
    </div>
  </div>
</template>

=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
>>>>>>> 8d32a143334501f521d509eb93d5c909fac7ea44

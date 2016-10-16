<template>
  <div class="home">
    <router-link to="/hello">hello</router-link>
    <p>{{`hello has been visited? ${hello.status}`}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    hello: state => state.hello
  })
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  transform: scale(1);
}
</style>

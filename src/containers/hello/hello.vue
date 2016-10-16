<template>
  <div>
    <router-link to="/">home</router-link>
    <p>Welcome</p>
    <p>visited: {{hello.time}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  created () {
    this.visiteHello()
  },
  computed: mapState({
    hello: state => state.hello
  }),
  methods: mapMutations(['visiteHello'])
}
</script>

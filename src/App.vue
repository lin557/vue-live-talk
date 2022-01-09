<template>
  <div id="app">
    <div class="center">
      <vue-live-talk ref="recorder" />
    </div>
    <div class="around">
      <button @click="recordStart">打开录音</button>
      <button>关闭录音</button>
    </div>
  </div>
</template>

<script>
import VueLiveTalk from './vue-live-talk.vue'

export default {
  name: 'App',
  components: {
    VueLiveTalk
  },
  methods: {
    recordStart() {
      this.$refs.recorder.recordStart()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

.center {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.around {
  display: flex;
  justify-content: space-around;
}
</style>

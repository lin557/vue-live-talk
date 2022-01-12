<template>
  <div id="app">
    <div class="center">
      <vue-live-talk
        :sampleRate="sampleRateValue"
        :mode="modeValue"
        ref="talk"
      />
    </div>
    <div class="around">
      <div class="device">
        <label for="imei">Imei</label>
        <input type="text" name="imei" v-model="imei" />
      </div>
      <div class="device">
        <label for="chn">Chn</label>
        <input type="text" name="chn" v-model="chn" />
      </div>
    </div>
    <div class="around">
      <div class="url">
        <label for="url">WS Url</label>
        <input type="text" name="url" v-model="url" />
      </div>
    </div>
    <div class="around">
      <div class="device">
        <label for="sample_rate">Sample Rate</label>
        <input
          type="text"
          name="sample_rate"
          v-model="sample_rate"
          :disabled="disabled"
        />
      </div>
      <div class="mode">
        <label for="mode">Binary</label>
        <input
          type="radio"
          name="mode"
          checked="checked"
          value="0"
          v-model="mode"
          :disabled="disabled"
        />
        <label for="mode">String</label>
        <input
          type="radio"
          name="mode"
          value="1"
          v-model="mode"
          :disabled="disabled"
        />
      </div>
    </div>
    <div class="around">
      <button @click="talk">打开对讲</button>
      <button @click="close">关闭对讲</button>
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
  computed: {
    modeValue() {
      return parseInt(this.mode)
    },
    sampleRateValue() {
      return parseInt(this.sample_rate)
    }
  },
  data() {
    return {
      disabled: false,
      mode: 0,
      imei: '15981010784',
      chn: 1,
      url: 'ws://localhost:9095/ws/talk',
      // eslint-disable-next-line camelcase
      sample_rate: 8000
    }
  },
  methods: {
    talk() {
      this.$refs.talk.talk({
        url: this.url,
        imei: this.imei,
        chn: this.chn
      })
      this.disabled = true
    },
    close() {
      this.disabled = false
      this.$refs.talk.close()
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
  margin-top: 30px;
}

.center {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.around {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    margin-left: 5px;
    margin-right: 5px;
  }
}

.device {
  margin-left: 5px;
  margin-right: 5px;
  input {
    width: 90px;
    margin-left: 10px;
  }
}

.url {
  margin-left: 5px;
  margin-right: 5px;
  input {
    width: 300px;
    margin-left: 10px;
  }
}

.mode {
  margin-left: 10px;
  margin-right: 0px;
  input {
    margin-right: 12px;
  }
}
</style>

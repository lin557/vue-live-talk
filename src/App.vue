<template>
  <div id="app">
    <div class="center">
      <vue-live-talk :sampleRate="sampleRateValue" ref="talk" />
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
        <label>Sample Rate</label>
        <select v-model="sample_rate" :disabled="disabled">
          <option v-for="option in sample_list" :key="option.id">
            {{ option.val }}
          </option>
        </select>
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
      imei: '10007012346',
      chn: 1,
      url: 'ws://localhost:9090/ws/talk',
      // eslint-disable-next-line camelcase
      sample_rate: 8000,
      // eslint-disable-next-line camelcase
      sample_list: [
        { id: 0, val: 8000 },
        { id: 1, val: 11025 },
        { id: 2, val: 16000 },
        { id: 3, val: 22050 },
        { id: 4, val: 32000 },
        { id: 5, val: 44100 },
        { id: 6, val: 48000 }
      ]
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
  margin-top: 18px;

  button {
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
    width: 80px;
  }

  input {
    padding: 5px;
  }

  select {
    padding: 5px;
    margin-left: 5px;
    width: 90px;
  }
}

.device {
  input {
    width: 90px;
    margin-left: 8px;
    margin-right: 8px;
  }
}

.url {
  input {
    width: 280px;
    margin-left: 8px;
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

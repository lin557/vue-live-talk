vue-live-talk

1078 websocket 实时对讲



Demo:  https://lin557.github.io/vue-live-talk/demo/



## Installation



```sh
npm install --save vue-live-talk
```



## Usage

To include vue-live-talk on your website or web application, use any of the following methods.



#### Fully import

In main.js:

```js
import Vue from 'vue'
import VueLiveTalk from 'vue-live-talk'
Vue.use(VueLiveTalk)
```



#### On demand

```vue
<template>
  <div>
    <VueLiveTalk
      :sampleRate="16000"
      ref="talk"
    />
  </div>
</template>

<script>
import VueLiveTalk from 'vue-live-talk'

export default {
  components: {
    VueLiveTalk
  },
  data() {
    return {
      imei: '12345',
      chn: 1,
      url: 'ws://localhost:9095/ws/talk',
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
```



## Attributes



| Property    | Description                                                 | Type   | Default |
| :---------- | ----------------------------------------------------------- | :----- | :------ |
| sample_rate | Sample rate. 8000, 11025, 16000, 22050, 32000, 44100, 48000 | number | 8000    |
| local       | localized configuration                                     | object |         |



### local object

| Property     | Description                      | Value                |
| ------------ | -------------------------------- | -------------------- |
| busy         | Device Busy                      | 繁忙                 |
| cancel       | cancel                           | 忽略                 |
| connecting   | Websocket connecting             | 连接中               |
| connected    | Websocket connected              | 已连接(等待设备语音) |
| disconnected | Websocket disconnected           | 已断开               |
| error        | error                            | 错误                 |
| errCodec     | Unsupported audio codec          | 不支持的编码         |
| errCross     | Cross domain                     | 无权录音(跨域)       |
| errHttps     | Need https                       | 无权录音(需https)    |
| errSocket    | Websocket error                  | 连接错误             |
| init         | init                             | 未启动               |
| kickout      | kickout                          | 会话冲突             |
| noAllow      | User denied recording permission | 用户拒绝录音权限     |
| noMic        | No microphone available          | 无可用麦克风         |
| talking      | Talking                          | 通话中               |
| timeout      | Timeout                          | 终端超时             |



## Methods



### talk(param)

connect and talk

```
param = {
  url: "ws://www.demo.com/ws/talk",
  imei: "12345",
  chn: 1
}
```

| Property | Description            | Type   | Default |
| -------- | ---------------------- | ------ | ------- |
| url      | ws url                 | string | any     |
| imei     | Device imei/sim number | string | any     |
| chn      | Device channel number  | number | 1       |



### close()

Close talk



## License

MIT. Copyright (c) lin557

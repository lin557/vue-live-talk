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
      :mode="0"
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
| mode        | 0 = Binary Mode, 1 = Text Mode                              | number | 0       |
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
| noAllow      | User denied recording permission | 用户拒绝录音权限     |
| noMic        | No microphone available          | 无可用麦克风         |
| talking      | Talking                          | 通话中               |
| timeout      | Timeout                          | 终端超时             |



## Methods



### talk(param)

Apply for an idle view and occupy it to display the loading effect

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



### clear()

Close all video players that are playing



### getPlaying(unique)

The player object corresponding to the specified identifier. About **unique** param , Specified by the **options.data.unique** parameter of the play() method, if not specified, the file name in options.src is used by default.



### getSelected()

Returns the currently selected player object



### getUserData(unique)

About **unique** param , Specified by the **options.data.unique** parameter of the play() method. Return **options.data.user**



### mute()

Mute all players



### play(options) 

Play video, The options object format is as follows:

| Property  | Description                                                  | Type    | Default                                        |
| --------- | ------------------------------------------------------------ | ------- | ---------------------------------------------- |
| content   | Context menu                                                 | array   | null                                           |
| data      | user data                                                    | object  | {<br />unique: filename<br />user: null<br />} |
| hasAudio  | With audio                                                   | boolean | true                                           |
| isLive    | Specify whether the current video stream is a real-time stream or a file stream<br />If true, the playback rate will be adjusted according to the buffer size | boolean | true                                           |
| text      | Display customized text message, Default display file name.<br /> It was "info" before 1.2.6 | string  | null                                           |
| record    | Record control parameters(Does not support rtmp/m3u8)        | object  | {<br />enabled: true,<br />isLive: true<br />} |
| src       | Media source                                                 | string  | -                                              |
| viewIndex | View index, If it is >= 0, the video will be played in the specified window | number  | null                                           |



The format of the **content** array parameter is as follows:

```js
content: [
  {
    // A plain old link.
    href: 'https://www.brightcove.com/',
    label: 'Brightcove'
  },
  {
    // A link with a listener. Its `href` will automatically be `#`.
    label: 'Example Link',
    listener: function () {
      alert('you clicked the example link!')
    }
  }
]
```



The format of the **data** object parameter is as follows:

```
{
  unique: filename,
  user: null
}
```



### splitView(uCount)

Modify the number of video players.

Type: number, Only the following values are supported: 1, 4, 6, 8, 9, 10, 16, 25, 36, 64



### stop()

Stop a video player that is playing



### togglefill()

Switch whether the video screen is full



## Events



### error

Triggered when there is an error in playing flv

error(player, errType, errDetails, e)





## License

MIT. Copyright (c) lin557



## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

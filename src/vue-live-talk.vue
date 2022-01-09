<template>
  <div class="vlt-wrapper">
    <div v-if="showDialog" class="vlt-dialog">
      <div>{{ local.permission }}</div>
      <button>{{ local.cancel }}</button>
    </div>
    <div>
      <svg
        t="1640009484871"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="31352"
        width="96"
        height="96"
      >
        <path
          d="M511.22 758.57c-63.62 0-123.6-24.95-168.9-70.24S272.08 583 272.08 519.43v-48.24a5 5 0 0 1 10 0v48.24c0 60.95 23.91 118.42 67.31 161.83s100.88 67.31 161.83 67.31S629.64 724.66 673 681.25s67.31-100.88 67.31-161.83v-46.75a5 5 0 0 1 10 0v46.76c0 63.62-24.95 123.6-70.24 168.9s-105.23 70.24-168.85 70.24z"
          fill="#1296db"
          p-id="31353"
        ></path>
        <path
          d="M745.36 474.55m-37.6 0a37.6 37.6 0 1 0 75.2 0 37.6 37.6 0 1 0-75.2 0Z"
          fill="#1296db"
          p-id="31354"
        ></path>
        <path
          d="M277.08 473.07m-37.6 0a37.6 37.6 0 1 0 75.2 0 37.6 37.6 0 1 0-75.2 0Z"
          fill="#1296db"
          p-id="31355"
        ></path>
        <path
          d="M511.22 698.21c-96.84 0-175.62-78.78-175.62-175.62v-237.9c0-96.84 78.78-175.62 175.62-175.62s175.62 78.78 175.62 175.62v237.89c0.01 96.84-78.78 175.63-175.62 175.63z m0-564.14c-83.05 0-150.62 67.57-150.62 150.62v237.89c0 83.05 67.57 150.62 150.62 150.62s150.62-67.57 150.62-150.62V284.69c0.01-83.05-67.56-150.62-150.62-150.62z"
          fill="#1296db"
          p-id="31356"
        ></path>
        <path
          d="M369.94 403.64h282.57a21.84 21.84 0 0 1 21.84 21.84v97.11a163.12 163.12 0 0 1-163.13 163.12A163.12 163.12 0 0 1 348.1 522.58v-97.11a21.84 21.84 0 0 1 21.84-21.84z"
          fill="#1296db"
          p-id="31357"
        ></path>
        <path
          d="M511.22 698.21c-96.84 0-175.62-78.78-175.62-175.62v-97.12a34.38 34.38 0 0 1 34.34-34.34h282.57a34.38 34.38 0 0 1 34.34 34.34v97.11c0 96.84-78.79 175.63-175.63 175.63zM369.94 416.14a9.35 9.35 0 0 0-9.34 9.34v97.11c0 83.05 67.57 150.62 150.62 150.62s150.62-67.57 150.62-150.62v-97.12a9.35 9.35 0 0 0-9.34-9.34z"
          fill="#1296db"
          p-id="31358"
        ></path>
        <path
          d="M511.22 780.69c-65.62 0-127.49-25.73-174.2-72.44S264.58 599.67 264.58 534v-47.47a12.5 12.5 0 0 1 25 0V534c0 58.94 23.13 114.53 65.12 156.52s97.58 65.12 156.52 65.12 114.53-23.13 156.52-65.12S732.86 593 732.86 534v-40.13a12.5 12.5 0 0 1 25 0V534c0 65.62-25.73 127.49-72.44 174.2s-108.58 72.49-174.2 72.49z"
          fill="#1296db"
          p-id="31359"
        ></path>
        <path
          d="M511.22 873.57a12.5 12.5 0 0 1-12.5-12.5v-92.88a12.5 12.5 0 0 1 25 0v92.89a12.5 12.5 0 0 1-12.5 12.49z"
          fill="#1296db"
          p-id="31360"
        ></path>
        <path
          d="M431.86 861.07h158.73a60.79 60.79 0 0 1 60.79 60.79v27H371.07v-27a60.79 60.79 0 0 1 60.79-60.79z"
          fill="#1296db"
          p-id="31361"
        ></path>
        <path
          d="M651.38 961.33H371.07a12.5 12.5 0 0 1-12.5-12.5v-27a73.37 73.37 0 0 1 73.29-73.29h158.73a73.37 73.37 0 0 1 73.29 73.29v27a12.5 12.5 0 0 1-12.5 12.5z m-267.81-25h255.31v-14.47a48.34 48.34 0 0 0-48.29-48.29H431.86a48.34 48.34 0 0 0-48.29 48.29zM726.75 319.78a12.51 12.51 0 0 1-11.94-16.23c15.95-51.11 12-92.86-11.64-124.09-17.13-22.6-39-31.34-39.22-31.42a12.5 12.5 0 0 1 8.86-23.38c1.16 0.44 28.58 11.07 50.29 39.7C759 211.74 751.4 270.25 738.68 311a12.51 12.51 0 0 1-11.93 8.78zM810.4 323.27a12.51 12.51 0 0 1-11.6-17.15c25.53-63.73 18-119.73-22.33-166.46-30.92-35.8-70.44-52.8-70.84-53a12.5 12.5 0 0 1 9.7-23c1.81 0.76 44.66 19 79.44 59 32.66 37.47 63.89 101.33 27.24 192.81a12.5 12.5 0 0 1-11.61 7.8zM297.25 319.78a12.5 12.5 0 0 1-11.81-8.42c-14-40.37-22.67-99.13 15.23-149.81 22.67-30.31 51.4-43 52.61-43.54a12.5 12.5 0 0 1 10 22.92c-0.42 0.19-24.65 11.15-43.2 36.44-24.59 33.52-28.29 75.85-11 125.82a12.51 12.51 0 0 1-11.81 16.59zM213.6 323.27a12.5 12.5 0 0 1-11.6-7.85c-36.65-91.48-5.42-155.34 27.24-192.81 34.79-39.91 77.64-58.2 79.44-59a12.5 12.5 0 0 1 9.7 23c-0.4 0.17-39.92 17.17-70.84 53-40.35 46.73-47.87 102.73-22.33 166.46a12.51 12.51 0 0 1-11.6 17.15z"
          fill="#1296db"
          p-id="31362"
        ></path>
      </svg>
    </div>
    <div class="vlt-wave" ref="wave"></div>
    <div class="vlt-runlog">{{ runlog }}</div>
    <div class="vlt-player"></div>
  </div>
</template>
<script>
// 必须引入的核心，换成require也是一样的。注意：recorder-core会自动往window下挂载名称为Recorder对象，全局可调用window.Recorder，也许可自行调整相关源码清除全局污染
import Recorder from './recorder-core/recorder-core'

// 可选的扩展支持项
import './recorder-core/extensions/waveview'
// 实时流播放器
import './recorder-core/extensions/buffer_stream.player'
// 禁用插件里的流量统计
Recorder.TrafficImgUrl = null

/**
 * Get the keys of an Object
 *
 * @param {Object}
 *        The Object to get the keys from
 *
 * @return {string[]}
 *         An array of the keys from the object. Returns an empty array if the
 *         object passed in was invalid or had no keys.
 *
 * @private
 */
const keys = function (object) {
  return isObject(object) ? Object.keys(object) : []
}

/**
 * Returns whether a value is an object of any kind - including DOM nodes,
 * arrays, regular expressions, etc. Not functions, though.
 *
 * This avoids the gotcha where using `typeof` on a `null` value
 * results in `'object'`.
 *
 * @param  {Object} value
 * @return {boolean}
 */
export function isObject(value) {
  return !!value && typeof value === 'object'
}

/**
 * Returns whether an object appears to be a "plain" object - that is, a
 * direct instance of `Object`.
 *
 * @param  {Object} value
 * @return {boolean}
 */
export function isPlain(value) {
  return (
    isObject(value) &&
    toString.call(value) === '[object Object]' &&
    value.constructor === Object
  )
}

/**
 * Array-like iteration for objects.
 *
 * @param {Object} object
 *        The object to iterate over
 *
 * @param {obj:EachCallback} fn
 *        The callback function which is called for each key in the object.
 */
export function each(object, fn) {
  keys(object).forEach((key) => fn(object[key], key))
}

/**
 * Merge two objects recursively.
 *
 * Performs a deep merge like
 * {@link https://lodash.com/docs/4.17.10#merge|lodash.merge}, but only merges
 * plain objects (not arrays, elements, or anything else).
 *
 * Non-plain object values will be copied directly from the right-most
 * argument.
 *
 * @static
 * @param   {Object[]} sources
 *          One or more objects to merge into a new object.
 *
 * @return {Object}
 *          A new object that is the merged result of all sources.
 */
export function mergeOptions(...sources) {
  const result = {}

  sources.forEach((source) => {
    if (!source) {
      return
    }

    each(source, (value, key) => {
      if (!isPlain(value)) {
        result[key] = value
        return
      }

      if (!isPlain(result[key])) {
        result[key] = {}
      }

      result[key] = mergeOptions(result[key], value)
    })
  })

  return result
}

const MEDIA_TYPE = 'pcm'

const DEFAULTS = {
  url: 'ws://localhost:9095/ws/talk',
  imei: '12345',
  chn: 0
}

export default {
  name: 'VueLiveTalk',
  props: {
    local: {
      type: Object,
      default() {
        return {
          cancel: '忽略',
          connecting: '连接中',
          connected: '已连接(等待设备上传)',
          disconnected: '已断开',
          talking: '通话中',
          permission: '需要麦克风权限',
          errNoAllow: '用户拒绝录音权限',
          errNoMic: '无可用麦克风',
          errHttps: '无权录音(需https)',
          errCross: '无权录音(跨域)',
          errSupport: '此浏览器不支持录音'
        }
      }
    },
    interval: {
      type: Number,
      default: 200
    },
    /**
     * 采样率
     * mp3 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000
     * wav 任意
     */
    sampleRate: {
      type: Number,
      default: 16000
    },
    /**
     * 比特率，必须是数字 wav(位):16、8，MP3(单位kbps)：8kbps时文件大小1k/s，16kbps 2k/s，录音文件很小
     */
    bitRate: {
      type: Number,
      default: 16
    }
  },
  data() {
    return {
      socket: null,
      recorder: null,
      player: null,
      wave: null,
      showDialog: false,
      options: DEFAULTS,
      runlog: this.local.permission,
      sendTime: 0,
      sendChunk: null
    }
  },
  methods: {
    base64ToArrayBuffer(base64) {
      return Buffer.from(base64, 'base64').buffer
    },
    arrayBufferToBase64(uint8array) {
      const output = []
      for (let i = 0, { length } = uint8array; i < length; i++) {
        output.push(String.fromCharCode(uint8array[i]))
      }
      return window.btoa(output.join(''))
    },
    /**
     * 创建录音对象
     */
    createRecord() {
      this.recorder = Recorder({
        type: MEDIA_TYPE,
        sampleRate: this.sampleRate,
        bitRate: this.bitRate,
        onProcess: (
          buffers,
          powerLevel,
          bufferDuration,
          bufferSampleRate,
          newBufferIdx,
          asyncEnd
        ) => {
          // 输入音频数据，更新显示波形
          // console.log(powerLevel)
          this.wave.input(
            buffers[buffers.length - 1],
            powerLevel,
            bufferSampleRate
          )
          // 实时数据处理，清理内存
          this.realTimeOnProcess(
            buffers,
            powerLevel,
            bufferDuration,
            bufferSampleRate,
            newBufferIdx,
            asyncEnd
          )
        }
      })
    },
    /**
     * 创建实时流播放器
     */
    createPlayer(playSampleRate) {
      if (this.player) {
        this.player.stop()
        this.player = null
      }
      // this.player = new (window.AudioContext || window.webkitAudioContext)()
      // this.player._source = this.player.createBufferSource()

      this.player = Recorder.BufferStreamPlayer({
        // 传输过来的不是pcm就需要开启解码
        decode: false,
        onInputError: (errMsg, inputIndex) => {
          window.console.log(
            '第' + inputIndex + '次的音频片段input输入出错: ' + errMsg,
            1
          )
        },
        transform: (pcm, sampleRate, True, False) => {
          sampleRate = playSampleRate
          // pcm需指定sampleRate，为传输过来pcm的采样率
          True(new Int16Array(pcm), sampleRate)
          // True(pcm, sampleRate)
        }
      })
      // 切换成了实时模式，如果缓冲中积压的未播放数据量过大，会直接丢弃数据或者加速播放，达到尽快播放新输入的数据的目的，可有效降低播放延迟
      // this.player.set.realtime = true
      // 打开
      this.player.start(
        () => {},
        (err) => {
          window.console.Log('播放器打开失败: ' + err)
        }
      )
    },
    /**
     * 创建websocket通讯
     */
    createWs() {
      if (typeof WebSocket === 'undefined') {
        window.console.log('您的浏览器不支持WebSocket')
      } else {
        this.runlog = this.local.connecting
        // 实现化WebSocket对象
        // 指定要连接的服务器地址与端口建立连接
        // 注意ws、wss使用不同的端口。我使用自签名的证书测试，
        // 无法使用wss，浏览器打开WebSocket时报错
        // ws对应http、wss对应https。
        this.socket = new WebSocket(this.options.url)
        // 连接打开事件
        this.socket.onopen = () => {
          this.runlog = this.local.connected
          console.log('Socket打开')
        }
        // 收到消息事件
        this.socket.onmessage = (msg) => {
          // 收到消息后 播放
          this.processMsg(msg.data)
        }
        // 连接关闭事件
        this.socket.onclose = (e) => {
          this.runlog = this.local.disconnected
          console.log('Socket关闭 code=' + e.code + ', reason=' + e.reason)
        }
        // 发生了错误事件
        this.socket.onerror = () => {
          console.log('Socket错误')
        }
      }
    },
    /**
     * 播放实时流
     */
    playBuffer(arrayBuffer, sampleRate) {
      // 创建播放器
      if (this.player == null) {
        this.createPlayer(sampleRate)
      }
      if (this.player) {
        this.player.input(arrayBuffer)
      }
    },
    processMsg(msg) {
      if (msg === null || msg.length < 10) {
        return
      }
      let dataMsg
      try {
        dataMsg = JSON.parse(msg)
      } catch (err) {
        console.log(err)
        return
      }
      if (
        dataMsg === null ||
        dataMsg.header === null ||
        dataMsg.data === null ||
        dataMsg.data.buffer == null ||
        dataMsg.header.cmd !== 'MSG_GATEWAY_CLIENT_TALK_STREAM'
      ) {
        return
      }
      // console.log(this.serverSampleRate)
      let base64 = dataMsg.data.buffer
      // 处理以 data:audio/mp3;base64,//MoxAAL+... 开头的数据
      if (base64.split(',').length > 1) {
        base64 = base64.split(',')[1]
      }
      const buffer = this.base64ToArrayBuffer(base64)
      this.playBuffer(buffer, dataMsg.data.sample_rate)
    },
    /**
     * 实时处理时清理一下内存（延迟清理），本方法先于RealTimeSendTry执行
     */
    realTimeOnProcess(
      buffers,
      powerLevel,
      bufferDuration,
      bufferSampleRate,
      newBufferIdx
      // asyncEnd
    ) {
      const currentTime = Date.now()
      if (this.sendTime === 0) {
        this.sendTime = currentTime
        this.sendChunk = null
      }
      if (currentTime - this.sendTime < this.interval) {
        // 控制缓冲达到指定间隔才进行传输
        return
      }
      this.sendTime = currentTime

      // 借用SampleData函数进行数据的连续处理，采样率转换是顺带的
      const chunk = Recorder.SampleData(
        buffers,
        bufferSampleRate,
        this.sampleRate,
        this.sendChunk,
        { frameType: MEDIA_TYPE }
      )

      //清理已处理完的缓冲数据，释放内存以支持长时间录音，最后完成录音时不能调用stop，因为数据已经被清掉了
      for (
        let i = this.sendChunk ? this.sendChunk.index : 0;
        i < chunk.index;
        i++
      ) {
        this.recorder.buffers[i] = null
      }
      // 此时的chunk.data就是原始的音频pcm数据，直接保存即为pcm文件、加个wav头即为wav文件、丢给mp3编码器转一下码即为mp3文件
      this.sendChunk = chunk

      // 没有新数据，或结束时的数据量太小，不能进行mock转码
      if (chunk.data.length === 0 || chunk.data.length < 2000) {
        return
      }
      const data = new Uint8Array(chunk.data.buffer)
      // console.log(data)
      this.transferUpload(data)
    },
    /**
     * 打开麦克风授权获得相关资源
     */
    recordOpen() {
      this.recorder.open(
        () => {
          // 打开麦克风授权获得相关资源

          // 如果开启了弹框，此处需要取消
          this.showDialog = false
          // 此处创建这些音频可视化图形绘制浏览器支持妥妥的
          this.wave = Recorder.WaveView({
            elem: this.$refs.wave,
            lineWidth: 2
          })
          // 创建websocket
          this.createWs()
          // 开始录音
          this.recordStart()
        },
        (msg, isUserNotAllow) => {
          // 用户拒绝未授权或不支持
          // 如果开启了弹框，此处需要取消
          this.showDialog = false
          if (isUserNotAllow) {
            this.runlog = this.local.errNoAllow
          } else {
            let log = ''
            if (msg.indexOf('跨域') !== -1) {
              log = this.local.errCross
            }
            if (msg.indexOf('https') !== -1) {
              log = this.local.errHttps
            }
            if (msg.indexOf('麦克风') !== -1) {
              log = this.local.errNoMic
            }
            if (log === '') {
              this.runlog = msg
            } else {
              this.runlog = log
            }
          }
        }
      )
    },
    /**
     * 关闭录音 释放资源
     */
    recordClose() {
      if (this.recorder) {
        this.recorder.close()
        console.log('已关闭')
      } else {
        console.log('未打开录音')
      }
    },
    /**
     * 开始录音
     */
    recordStart() {
      if (this.recorder && Recorder.IsOpen()) {
        this.recorder.start()
      } else {
        console.log('未打开录音')
      }
    },
    /**
     * 停止录音
     */
    recordStop() {
      if (!(this.recorder && Recorder.IsOpen())) {
        console.log('未打开录音')
        return
      }
      this.recorder.stop()
    },
    talk(opts) {
      this.url = opts.url
      this.recordOpen()
    },
    /**
     * 上传
     */
    transferUpload(buffer) {
      if (buffer) {
        // 转化后的base64
        const base64 = this.arrayBufferToBase64(buffer)
        this.uploadAudio(base64)
      }
    },
    uploadAudio(baseStr) {
      // Socket.readyState，0 - 表示连接尚未建立，1 - 表示连接已建立，可以进行通信，2 - 表示连接正在进行关闭，3 - 表示连接已经关闭或者连接不能打开
      if (this.socket && this.socket.readyState === 1) {
        const dataMsg = {
          header: {
            cmd: 'MSG_GATEWAY_CLIENT_TALK_STREAM',
            time: new Date().getTime()
          },
          data: {
            imei: '15981010687',
            // 默认第一通道
            chn: 2,
            // eslint-disable-next-line camelcase
            codec: MEDIA_TYPE,
            // eslint-disable-next-line camelcase
            sample_rate: this.sampleRate,
            // eslint-disable-next-line camelcase
            sample_format: this.bitRate / 8 - 1,
            buffer: baseStr
          }
        }
        const json = JSON.stringify(dataMsg)
        // console.log(json)

        // console.log(JSON.parse(json))
        this.socket.send(json)
      }
    }
  },
  created() {},
  mounted() {
    this.createRecord()
    this.recordOpen()
  },
  beforeDestroy() {
    if (this.player) {
      this.player.stop()
      this.player = null
    }
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
    this.recordStop()
    this.recordClose()
  },
  destroyed() {
    // 销毁已持有的所有全局资源
    Recorder.Destroy()
  }
}
</script>
<style lang="scss">
.vlt-wrapper {
  position: relative;
  width: 160px;
  height: 200px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #00f;
  font-size: 13px;

  .vlt-dialog {
    position: absolute;
    width: calc(100% - 20px);
  }

  .vlt-wave {
    height: 60px;
  }

  .vlt-runlog {
    color: #f00;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
  }

  .vlt-player {
    display: none;
  }
}
</style>

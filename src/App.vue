<script setup>
import { onMounted } from 'vue'
// js
import videojs from 'video.js' // 引入套件主體(一定要有)
// 影片播放器解析度選擇器
import '@mycujoo/videojs-hls-quality-selector'
// import qualitySelector from 'videojs-hls-quality-selector';
import 'videojs-contrib-quality-levels'
// 影片播放器樣式
import 'video.js/dist/video-js.css' // 引入css樣式(一定要有)
import '@videojs/themes/dist/city/index.css' // city樣式
import '@videojs/themes/dist/fantasy/index.css' // fantasy樣式
import '@videojs/themes/dist/forest/index.css' // forest樣式
import '@videojs/themes/dist/sea/index.css' // sea樣式

// 設定中文語系 
// https://github.com/videojs/video.js/blob/main/lang/zh-TW.json
import videoTw from '@/assets/json/zh-TW.json' // 至網址下載中文語系包
videojs.addLanguage('zh-TW', videoTw) // 命名中文語系為「zh-TW」
// videojs.registerPlugin('qualityLevels', videojs.getComponent('QualityLevels'));
// videojs.registerPlugin('hlsQualitySelector', videojs.getComponent('HlsQualitySelector'));
// 建立影片播放器
const createVideoPlayer = ()=>{
  const player = videojs('my-video', {
    // 相關設定可至 https://videojs.com/guides/options/#controls 查詢
    bigPlayButton: true, // 大播放按鈕
    autoplay: 'muted', // 自動播放並設為靜音
    controls: true, // 是否顯示控制面板
    language: 'zh-TW', // 使用設定語系為 zh-TW
    width: '100%', // 寬度
    height: 'auto', // 高度
    aspectRatio: '16:9', // 長寬比  寬16 高9
  
    // 影片來源
    sources: [
      {
        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        type: 'application/x-mpegURL', 
        // m3u8必須使用application/x-mpegURL
        // mp4則用video/mp4
      },
    ],
  })
  // player.ready(function() {
  //   console.log('影片播放器已準備好')
    // 影片播放器解析度選擇器
    player.hlsQualitySelector()
    player.qualityLevels()
  // })
}

onMounted(()=>{
  try {
    createVideoPlayer()

  }catch(err){
    console.error(err)
  }
})

</script>

<template>
  <h1>m3u8播放器</h1>
  <div class="video-container">
    <video
      id="my-video"
      class="video-js vjs-theme-city"
      data-setup="{}"
      controls
    >
      <!-- autoplay   -->
    </video>
  </div>
</template>

<style scoped>
.video-container{
  width: 1000px;
  height: auto;
}
</style>

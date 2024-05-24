# 安裝套件video.js

```jsx
npm i video.js videojs-contrib-hls @videojs/themes videojs-contrib-quality-levels videojs-hls-quality-selector

// video.js 播放器主體
// videojs-contrib-hls 執行m3u8檔案用
// @videojs/themes 播放器樣式
// videojs-hls-quality-selector videojs-contrib-quality-levels 解析度選擇器

// 如果影片選擇器沒辦法使用，就改安裝
npm i @mycujoo/videojs-hls-quality-selector
// 註:
// 最新版本video.js可以不用安裝videojs-contrib-hls
```

```jsx
// js
import videojs from 'video.js' // 引入套件主體(一定要有)
// 影片播放器解析度選擇器
import 'videojs-hls-quality-selector'
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

const player = videojs('my-video', {
	// 相關設定可至 https://videojs.com/guides/options/#controls 查詢
  **bigPlayButton: true, // 大播放按鈕
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
  ],**
})
// 影片播放器解析度選擇器
player.hlsQualitySelector()
player.qualityLevels()

```

```html
<!-- html部分 -->
<video
  id="my-video"
  class="video-js vjs-theme-city" <-- 設定樣式 video-js(一定要有)
  data-setup="{}" <-- 設定播放器功能(一定要有)
  autoplay
  controls
  style="width: 320px; height: 190px"
>
	// 如果要js那邊有設定sources這邊可以不用設定
  <source
    src="https://xxxxxxx/test.m3u8"
    type="application/x-mpegURL"
  />
</video>
```
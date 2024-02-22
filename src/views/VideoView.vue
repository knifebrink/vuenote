<template>

  <div class="video-vue">
<!--    <video controls width="640" height="360">-->
<!--      <source :src="videoUrl" type="video/mp4">-->
<!--      Your browser does not support the video tag.-->
<!--    </video>-->
    <div>
      <video ref="myPlayer" class="video-js vjs-default-skin"></video>
    </div>
  </div>


</template>


<script setup name="videoVue">

import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 视频1
const videoUrl = 'https://reading-1313840333.cos.ap-guangzhou.myqcloud.com/C0000399.mp4';


const myPlayer = ref(null);

// 在组件加载时初始化视频播放器
onMounted(() => {
  // 使用video.js创建视频播放器
  myPlayer.value = videojs(myPlayer.value, {
    // 你的视频配置选项
    controls: true,
    autoplay: false,
    sources: [{
      src: 'https://reading-1313840333.cos.ap-guangzhou.myqcloud.com/C0000399.mp4',
      type: 'video/mp4'
    }]
  });

  // 监听播放器事件
  myPlayer.value.on('play', () => {
    console.log('视频已开始播放');
  });
});

onBeforeUnmount(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose();
  }
});

</script>



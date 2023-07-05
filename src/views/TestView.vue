<template>
  <div class="test">
    <h1>This is an test page</h1>
    <el-row class="mb-4">
      <el-button @click="handle1()">Default</el-button>
      <el-button @click="handle2()">Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </el-row>



  </div>


</template>

<script setup name="test">

let ws = null;


let submitCode = JSON.stringify({
  userId: "123",
  problemId: "444",
  isDebug: "0",
});

function handle1() {
  console.log("handle1");
  ws = new WebSocket(
      `ws://127.0.0.1:8888/ws`
  );
  // 3.服务器每次返回信息都会执行一次onmessage方法
  ws.onmessage = function (e) {
    console.log("服务器返回的信息: " + e.data);
  };
  ws.onopen = () => {
    console.log('连接服务端成功了');
  };
  ws.onclose = () => {
    console.log('连接服务端失败了');
  };

}

function handle2() {
  console.log("handle2");
  ws.send(submitCode);
}





</script>

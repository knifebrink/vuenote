<template>
  <div class="test">
    <h1>This is an test page</h1>
    <el-row class="mb-4">
      <el-button @click="handle1()">Default</el-button>
      <el-button @click="handle2()">Default</el-button>
      <el-button @click="handle3()">Default</el-button>
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
  // ws.send(submitCode);
  const url = 'http://localhost:9401/chat/getReplyStream2';
  fetch(url)
      .then(response => {
        const reader = response.body.getReader();

        function readChunk() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              console.log('完整响应已接收完毕');
              return;
            }

            // 处理每个响应块
            const chunk = new TextDecoder('utf-8').decode(value);
            console.log('接收到响应块:', chunk);

            // 继续读取下一个响应块
            return readChunk();
          });
        }

        return readChunk();
      })
      .catch(error => {
        console.error('发生错误:', error);
      });
}
function handle3() {
  console.log("handle2");
  this.eventSource = new EventSource('/getReplyStream');

  this.eventSource.onmessage = (event) => {
    // 处理接收到的消息
    const message = event.data;
    console.log('接收到消息:', message);

    // 判断是否接收到结束符号
    if (message === '[DONE]') {
      // 关闭EventSource连接
      this.eventSource.close();
    } else {
      // 将消息添加到数组中
      this.messages.push(message);
    }
  };

  this.eventSource.onerror = (error) => {
    // 处理错误
    console.error('发生错误:', error);
  };

}





</script>

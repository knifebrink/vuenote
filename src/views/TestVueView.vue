<template>

  <div class="test-vue">
    <button @click="count++">
      Count is: {{ count }}
    </button>

    <p v-if="seen">Now you see me</p>

    <p v-bind:class="dynamicId">v-bind test</p>
    <p :class="dynamicId">v-bind test 2</p> <!-- 简写 -->

    <button @click="increment">
      {{ count2 }} <!-- 无需 .value -->
    </button>

    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <li v-for="item in items">
      {{ item.message }}
    </li>

    <!-- 事件 -->
    <button @click="greet">Greet</button>
  </div>

</template>


<script setup name="testVue">
// 组合式 API (Composition API) setup，以前用的是选项式
import {ref, computed,reactive } from "vue";

const count = ref(10);

const seen = ref(true);

const dynamicId = ref("test-id");

const count2 = ref(0)



function increment() {
  count2.value++
}

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})


const awesome = ref(false)

// v-for
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

// 事件
const name = ref('Vue.js')
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    alert(event.target.tagName)
  }
}


</script>



<style scoped>
button {
  font-weight: bold;
}
.test-id {
  color: red;
}
</style>
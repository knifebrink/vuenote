<!-- 测试ts基本语法的页面，需要借助F12来查看 -->

<template>



</template>


<script setup lang="ts" name="testTsVue">
      // 基本数据类型

    let integer: number = 1;
    let floatingPoint: number = 2.0;
    let string: string = "hello";
    let booleanValue: boolean = true;

    // 输出
    console.log("Hello, World!");

    // 条件语句
    if (integer === 1) {
        console.log("Integer is 1");
    } else {
        console.log("Integer is not 1");
    }

    // 循环
    for (let i = 0; i < 5; i++) {
        console.log("Loop iteration: " + i);
    }

     // 对象
    let obj: { [key: string]: string } = {
        key1: "value1",
        key2: "value2"
    };

    for (let key in obj) {
        console.log(`Object key: ${key}, value: ${obj[key]}`);
    }

    // Utility 类定义
    class Utility {
    // 静态方法
      static staticMethod(): void {
        console.log("This is a static method from Utility class.");
      }

    // 实例方法
      instanceMethod(): void {
        console.log("This is an instance method from Utility class.");
      }

    // 使用参数和返回值的方法
      add(a: number, b: number): number {
        return a + b;
      }
    }
    // 调用 Utility 类的静态方法
    Utility.staticMethod();

    // 创建 Utility 类的对象并调用实例方法
    let utilityObj = new Utility();
    utilityObj.instanceMethod();

    // 调用带参数和返回值的方法
    let sum: number = utilityObj.add(10, 20);
    console.log("Sum is: " + sum);

    // 调用其他文件的方法，如ts文件
    import { addNumbers } from '../utils/test';
    let sum2: number = addNumbers(10, 7);

    console.log("Sum2 is: " + sum2);

</script>



<style scoped>
button {
  font-weight: bold;
}
.test-id {
  color: red;
}
</style>
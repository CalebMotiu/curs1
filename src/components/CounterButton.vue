<script setup>
import { useCounter } from '../stores/counter'

const counter = useCounter()

// function countUp() {
  // counter.count++
  // if (counter.count%5 == 0){
  //   counter.level++
  // }
  // counter.$patch({
  //   count: ++counter.count,
  //   level: counter.count%5 == 0 ? ++counter.level : counter.level
  // })
// }
</script>

<template>
 <button @click="counter.countUp">count up</button>
</template>
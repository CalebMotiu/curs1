<script setup>
import CounterButton from './components/CounterButton.vue';
import { useCounter } from './stores/counter';
import CounterReset from './components/CounterReset.vue';
import DoubleCountButton from './components/DoubleCountButton.vue';

const counter = useCounter()

counter.$subscribe((mutation, state) => {
  console.log(mutation, state)

  if (counter.level > 0){
    counter.title = "Level is greater than 1"
  }
})
</script>

<template>
  <H1>Curs 1</H1>
  <br/>

  <h2>Counter from Store is :{{ counter.count }}</h2>
  <h2>Level from Store is :{{ counter.level }}</h2>
  <h3>{{ counter.title }}</h3>
  <hr/>
  <DoubleCountButton/>
  <hr/>
  <CounterButton/>
  <br/>
  <CounterReset/>
</template>

<style scoped>

</style>

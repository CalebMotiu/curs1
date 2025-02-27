<script setup>
import CounterButton from './components/CounterButton.vue';
import { useCounter } from './stores/counter';
import CounterReset from './components/CounterReset.vue';

const counter = useCounter()

counter.$subscribe((mutation, state) => {
  console.log(mutation, state)
})
</script>

<template>
  <H1>Curs 1</H1>
  <br/>
  <h2>Counter from Store is :{{ counter.count }}</h2>
  <h2>Level from Store is :{{ counter.level }}</h2>
  <br/>
  <CounterButton/>
  <hr/>
  <CounterReset/>
</template>

<style scoped>

</style>

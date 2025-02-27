<script setup>
import { useCounter } from '../stores/counter'

const counter = useCounter()

function resetCounter() {
  counter.$reset()
}
</script>

<template>
 <button @click="resetCounter">Reset Counter</button>
</template>
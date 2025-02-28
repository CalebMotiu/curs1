<script setup>
import { useCounter } from '../stores/counter'
const counter = useCounter()

</script>

<template>
 <pre>DoubleCounter is {{ counter.doubleCount }}</pre>
 <pre>TripleCounter is {{ counter.tripleCount }}</pre>

</template>
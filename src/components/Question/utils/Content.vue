<template>
  <p>{{ number + 1 }}. {{ value }}</p>
</template>

<script>
export default {
  props: ['value', 'number']
}
</script>


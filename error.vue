<script setup lang="ts">
defineProps({
  error: Object
})
</script>

<template>
  <div>
    There was a bad error.
    <pre>
      {{ error }}
    </pre>
  </div>
</template>

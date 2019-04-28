<template>
  <div>
    <navbar></navbar>
    <router-view style="margin-top:56px;"/>
  </div>
</template>

<script>
import navbar from './components/Header'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>

</style>

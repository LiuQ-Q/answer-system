<template>
  <div>
    <my-header></my-header>
    <router-view style="margin-top:56px;"/>
  </div>
</template>

<script>
import myHeader from './components/Header'
export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style>

</style>

<template>
  <div>
    <b-navbar 
      type="dark" 
      variant="info"
      class="position-fixed fixed-top"
      >
      <b-navbar-brand class="mx-auto">{{ title }}</b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '答题系统'
    }
  },

}
</script>

<style>

</style>
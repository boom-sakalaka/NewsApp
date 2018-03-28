<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style type="text/stylus" lang="stylus">
 #app
   height: 100%
   width: 100%

</style>

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
<!--.slide-enter-active-->
<!--transition: all .8s cubic-bezier(.55,0,.1,1);-->
<!--.slide-enter-->
<!--opacity: 0-->
<!-- -webkit-transform: translate(50px, 0);-->
<!--transform: translate(50px, 0);-->
<!--.slide-enter-to-->
<!--opacity: 1-->
<!-- -webkit-transform: translate(0, 0);-->
<!--transform: translate(0, 0);-->

<template lang="pug">
  v-app
    v-main
      app-bar
      v-container.pt-0
        transition(name="fade" mode="out-in")
          router-view
</template>

<script>
export default {
  name: 'App',
  components: {
    'app-bar': () => import('@/components/AppBar/AppBar'),
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
.fade-enter-active,
.fade-leave-active
  transition-timing-function: ease
  transition-duration: 0.3s
  transition-property: opacity

.fade-enter,
.fade-leave-active
  opacity: 0
</style>

<template lang="pug">
  v-app-bar(dark elevate-on-scroll)
    v-container
      v-row
        v-spacer
        app-bar-link-btn(:link={icon: 'mdi-home', title: 'Главная', route: '/'})
        app-bar-link-btn(:link={icon: 'mdi-folder', title: 'Курсы', route: '/units'})
        app-bar-link-btn(:link={icon: 'mdi-bookshelf', title: 'Словари', route: '/dictionaries'})
</template>

<script>
export default {
  name: "AppBar",
  components: {
    'app-bar-link-btn': () => import('@/components/AppBar/AppBarLinkBtn'),
  },
}
</script>

<style scoped>

</style>

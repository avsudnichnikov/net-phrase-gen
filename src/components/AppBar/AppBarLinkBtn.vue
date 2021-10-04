<template lang="pug">
  v-btn.ml-3(router-link :to='link.route' plain)
    v-icon(left) {{link.icon}}
    | {{link.title}}
</template>

<script>
export default {
  name: "AppBarLinkBtn",
  props: ['link'],
}
</script>

<template lang="pug">
  v-card(outlined)
    v-card-title
      | {{unit.title}}
      v-spacer
      v-btn(icon text color="error" @click="remove")
        v-icon mdi-delete
    v-card-text
      | {{lessonCountText}}: "{{lessons.join('", "')}}"
      br
      i
        | На зачёт нужно выполнить {{unit.need}} из {{unit.count}} заданий,&nbsp;
        | итоговая работа&nbsp;
        strong(v-if="!unit.work") не&nbsp;
        | предусмотрена.
</template>

<script>
export default {
  name: "UnitItem",
  props: [
    'unit',
  ],
  created() {

  },
  computed: {
    lessons(){
      return this.unit.lessons.split(';');
    },
    lessonCountText(){
      const length = this.lessons.length;
      let result = length + ' ';
      if (length >= 5) {
        result += 'занятий';
      } else if (length >= 2) {
        result += 'занятия';
      } else {
        result += 'занятие';
      }
      return result;
    },
  },
  methods: {
    async remove() {
      await this.$store.dispatch('units/remove', this.unit.id)
    }
  },
}
</script>

<style scoped>

</style>

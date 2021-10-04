<template lang="pug">
  v-container
    v-list
      v-btn.mt-3(color="success" router-link to="/units/new"  dark) Добавить
      unit-item.mt-3(v-for="unit in units" :unit="unit" :key="unit.id")
</template>

<script>
export default {
  name: 'Units',
  components: {
    'unit-item': () => import('@/components/units/UnitItem'),
  },
  computed: {
    units(){
      return this.$store.getters["units/all"];
    },
  },
};
</script>

<template lang="pug">
  v-form(ref="form")
    v-card
      v-card-title Добавить курс
      v-card-text
        v-text-field(label="Название"
          v-model="unit.title"
          :rules="rules.name")
        v-row
          v-col
            v-select(label="Нужно" :items="[0, 1, 2]" v-model="unit.need")
          v-col
            v-select(label="Всего" :items="[0, 1, 2]" v-model="unit.count")
        v-checkbox(v-model="unit.work" label="Итоговая работа")
        v-text-field(label="Занятия"
          v-model="unit.lessons"
          :rules="rules.lessons"
          hint="Разделитель - точка с запятой (;)")
      v-card-actions.justify-end.d-flex
        v-btn(@click="cancel") Отмена
        v-btn(color="success" @click="save") Добавить
</template>

<script>
export default {
  name: "UnitCreate",
  data: () => ({
    rules: {
      name: [
        value => (value && value.length >= 3) || 'Минимальная длина - 3 символа',
      ],
      lessons: [
        value => (value && value.length >= 3) || 'Минимальная длина - 3 символа',
      ],
    },
  }),
  computed: {
    unit() {
      return this.$store.getters["units/current"];
    },
  },
  methods: {
    async save() {
      if (this.$refs.form.validate()) {
        await this.$store.dispatch('units/create', this.unit);
        await this.$router.push('/units');
      }
    },
    async cancel() {
      await this.$router.push('/units');
    },
  },
}
</script>

<style scoped>

</style>

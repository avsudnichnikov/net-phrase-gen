<template lang="pug">
  v-menu(
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    min-width="auto"
    offset-y)
    template(v-slot:activator='{ on, attrs }')
      v-text-field(
        :label="label"
        :value="pickerDate"
        readonly
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on")
    v-date-picker(
      v-model="pickerDate"
      @change="changeDate"
      locale="ru-ru")
</template>

<script>
export default {
  name: "AppDatePicker",
  data: () => ({
    menu: false,
    pickerDate: '',
  }),
  props: {
    'date': {
      type: String,
      default: () => (new Date()).toISOString().substr(0, 10),
    },
    'label': {
      type: String,
      default: 'Дата',
    },
  },
  created() {
    this.pickerDate = this.date;
  },
  methods: {
    changeDate() {
      this.menu = false;
      this.$emit("update-date", this.pickerDate);
    },
  },
}
</script>

<style scoped>

</style>

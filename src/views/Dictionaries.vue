<template lang="pug">
  v-container
    v-row
      v-col
        v-text-field(
          label="Приветствия"
          v-model="dictionaries.greetings"
          @keydown="changedGr = true")
          template(slot="append")
            v-btn(icon @click="save")
              v-icon(:color="(changedGr) ? 'green' : 'grey'") mdi-content-save
    v-row
      v-col
        v-text-field(
          label="Эмоджи"
          v-model="dictionaries.emojis"
          @keydown="changedEm = true")
          template(slot="append")
            v-btn(icon @click="save")
              v-icon(:color="(changedEm) ? 'green' : 'grey'") mdi-content-save
    v-row
      v-col
        v-text-field(
          label="Напутствия"
          v-model="dictionaries.goodbyes"
          @keydown="changedGb = true")
          template(slot="append")
            v-btn(icon @click="save")
              v-icon(:color="(changedGb) ? 'green' : 'grey'") mdi-content-save

</template>

<script>
export default {
  name: 'Dictionaries',
  data: () => ({
    dictionaries: {},
    changedEm: false,
    changedGb: false,
    changedGr: false,
  }),
  computed: {
  },
  created() {
    this.dictionaries.greetings = this.$store.getters["dictionaries/greetings"].join('; ');
    this.dictionaries.emojis = this.$store.getters["dictionaries/emojis"].join('');
    this.dictionaries.goodbyes = this.$store.getters["dictionaries/goodbyes"].join('; ');
  },
  methods: {
    async save(){
      this.changedEm = false;
      this.changedGb = false;
      this.changedGr = false;
      await this.$store.dispatch('dictionaries/save', this.dictionaries);
    },
  },
};
</script>

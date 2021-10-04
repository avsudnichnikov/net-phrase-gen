<template lang="pug">
  v-card
    v-card-text#text
      p {{this.greeting}}
      p {{phrase.unit + this.emoji1}}
      p(v-if="phrase.lessons")
        | Программа состоит из {{lessons.length}} занятий:
        ul
          li(v-for="lesson in lessons") {{lesson}}
      p {{phrase.main + this.emoji2}}
      p {{phrase.deadline}}
      p {{phrase.added}}
      p {{this.goodbye + ' @channel'}}
      v-btn(outlined block color="primary" @click="copy") Копировать
      v-btn.mt-3(outlined block color="warning" @click="getRands") Изменить случайные
</template>

<script>
import randInt from "@/utils/randInt";

export default {
  name: "TextGenBlock",
  props: {
    'phrase': {
      type: Object,
      default: {},
    }
  },
  data: () => ({
    emoji1: '',
    emoji2: '',
    greeting: '',
    goodbye: '',
  }),
  computed: {
    emojis() {
      return this.$store.getters["dictionaries/emojis"];
    },
    greetings() {
      return this.$store.getters["dictionaries/greetings"];
    },
    goodbyes() {
      return this.$store.getters["dictionaries/goodbyes"];
    },
    lessons() {
      return this.phrase.lessons.split(';');
    }
  },
  created() {
    this.getRands();
  },
  methods: {
    getRands() {
      this.emoji1 = this.emojis[randInt(this.emojis.length - 1)];
      this.emoji2 = this.emojis[randInt(this.emojis.length - 1)];
      this.greeting = this.greetings[randInt(this.greetings.length - 1)];
      this.goodbye = this.goodbyes[randInt(this.goodbyes.length - 1)];
    },
    copy() {
      window.getSelection().removeAllRanges();
      const toCopy = document.querySelector('#text');
      const range = document.createRange();
      range.selectNode(toCopy);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    },
  },
}
</script>

<style scoped>

</style>

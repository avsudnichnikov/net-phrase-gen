<template lang="pug">
  v-container
    v-row.text-center
      v-col
    v-row
      v-col.col-12.col-sm-6
        text-gen-block(:phrase="phrase")
      v-col.col-12.col-sm-6
        v-select(label="Модуль"
          :items="units"
          v-model="state.unit"
          item-text="title"
          return-object
          :hint="unitHint")
        v-select(label="Текст"
          :items="types"
          v-model ="state.type"
          item-text="title"
          return-object)
        app-date-picker(label="Старт" date=startDate
          @update-date="updateStartDate")
        app-date-picker(label="Дедлайн" date=endDate
          v-if="this.state.type.id === 1"
          @update-date="updateEndDate")
</template>

<script>
import dateToStr from "@/utils/dateToStr";

export default {
  name: 'Home',
  components: {
    'app-date-picker': () => import('@/components/AppDatePicker'),
    'text-gen-block': () => import('@/components/TextGenBlock'),
  },
  data: () => ({
    state: {},
    types: [
      {
        id: 1,
        title: "Начало модуля",
      },
      {
        id: 2,
        title: "Завершение модуля",
      },
    ],
  }),
  computed: {
    units(){
      return this.$store.getters["units/all"];
    },
    unitHint(){
      return `${this.state.unit.need} из ${this.state.unit.count}` +
      ((this.state.unit.work) ? ' + итоговая' : ', без итоговой');
    },
    phrase(){
      if (this.state.type.id === 1) {
        return this.phraseStart();
      }
      if (this.state.type.id === 2) {
        return this.phraseEnd();
      }
      return {
        unit: '{UNIT}',
        main: '{MAIN}',
        deadline: '{DEADLINE}',
        added: '{ADDED}',
        lessons: '{LESSONS}',
      }
    },
  },
  created() {
    this.state = {
      unit: this.units[0] || {},
      startDate: new Date(),
      endDate: new Date(),
      type: this.types[0],
    }
  },
  methods: {
    updateStartDate(date) {
      this.state.startDate = date;
    },
    updateEndDate(date) {
      this.state.endDate = date;
    },
    phraseStart() {
      const accessWork = () => {
        let result = '';
        if (this.state.unit.work) {
          result += 'Для успешного прохождения вам требуется выполнить итоговую работу,  ' +
            `которая будет доступна при условии, что вы выполнили `;
        } else {
          result += 'Обратите внимание, что в данном модуле нет итоговой работы - ' +
            'курс будет засчитан пройденным при выполнении ';
        }
        if (this.state.unit.count !== this.state.unit.need) {
          result += `${this.state.unit.need} из ${this.state.unit.count} домашних задания.`;
        } else {
          result += `всех ${this.state.unit.need} домашних задания.`;
        }
        return result;
      }

      return {
        unit: `Друзья, ${dateToStr(this.state.startDate)} стартует новый модуль "${this.state.unit.title}"`,
        main: accessWork(),
        lessons: this.state.unit.lessons,
      }
    },
    phraseEnd() {
      const accessWork = () => {
        let result = '';
        if (this.state.unit.work) {
          result += 'Для его успешного прохождения осталось сделать Итоговую работу. ' +
            `Доступ к ней откроется ${dateToStr(this.state.startDate)}, при условии, что выполнены `;
        } else {
          result += 'Как вы, возможно, уже заметили - на модуле нет Итоговой работы. ' +
            `Для завершения модуля вам необходимо до ${dateToStr(this.state.endDate)} выполнить `;
        }
        if (this.state.unit.count !== this.state.unit.need) {
          result += `${this.state.unit.need} домашних задания из ${this.state.unit.count}`;
        } else {
          result += `все домашние задания (которых всего ${this.state.unit.need})`;
        }
        return result;
      }

      const mainSuffix = ', так что для тех, кто еще не отправил задания на проверку, ' +
        'есть ещё время это сделать.';
      const added = 'Если есть вопросы по поводу итоговой сейчас или появятся в процессе ' +
        'выполнения - пишите их в комментариях к этому сообщению,  чтобы эксперт мог их ' +
        'своевременно увидеть и помочь вам.';

      return {
        unit: `Коллеги, завершился модуль "${this.state.unit.title}"`,
        main: accessWork() + mainSuffix,
        deadline: (this.state.unit.work) ? `Дедлайн по итоговой работе - ${dateToStr(this.state.endDate)}.` : '',
        added: (this.state.unit.work) ? added : '',
      }
    },
  },
};
</script>

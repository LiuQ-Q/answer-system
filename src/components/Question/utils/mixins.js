import UtilContent from './Content';

export const update = {
  components: {
    UtilContent
  },
  props: ['options', 'value'],
  watch: {
    answer: {
      deep: true,
      handler(val) {
        this.$emit('input', val);
      },
    },
    value(val) {
      this.answer = val;
    }
  },
  mounted() {
    this.$emit('input', this.answer);
  }
};
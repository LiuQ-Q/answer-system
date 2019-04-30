<template>
  <div>
    <util-content :value="options.question" />
    <!-- {{options.optionList}} -->
    <b-form-radio-group
      :name="name"
      stacked
      v-model="selected"
    >
      <b-form-radio
        v-for="(item, index) in options.optionList"
        :key="index"
        class="py-2"
        :value="index"
      >{{ item }}</b-form-radio>
    </b-form-radio-group>
    {{selected}}
  </div>
</template>

<script>
import UtilContent from './utils/Content';

export default {
  components: {
    UtilContent
  },
  props: ['options', 'topicIndex'],
  data () {
    return {
      selected: '',
      name: 'question-' + this.topicIndex,
    }
  }
}
</script>

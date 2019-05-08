<template>
  <div>
    <util-content 
      :value="options.question"
      :number="number"
    />
    <!-- {{options.optionList}} -->
    <b-form-radio-group
      stacked
      v-model="answer"
    >
      <b-form-radio
        v-for="(item, index) in options.optionList"
        :key="index"
        class="py-2"
        :value="index"
      >{{ item }}</b-form-radio>
    </b-form-radio-group>
  </div>
</template>

<script>
import { update } from './utils/mixins.js';

export default {
  name: 'question-single',
  data () {
    return {
      answer: -1
    };
  },
  mixins: [update]
}
</script>

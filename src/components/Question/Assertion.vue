<template>
  <div>
    <util-content :value="options.question" />
    <!-- {{options.optionList}} -->
    <b-form-radio-group
      stacked
      v-model="answer"
    >
      <b-form-radio
        class="py-2"
        :value=true
      >是</b-form-radio>
      
      <b-form-radio
        class="py-2"
        :value=false
      >否</b-form-radio>
    </b-form-radio-group>
  </div>
</template>

<script>
import { update } from './utils/mixins.js';

export default {
  name: 'question-assertion',
  data () {
    return {
      answer: null
    };
  },
  mixins: [update]
}
</script>

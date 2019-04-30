<template>
  <div>
    <util-content :value="options.question" />
    <!-- {{options.optionList}} -->
    <b-form-checkbox-group
      stacked
      v-model="answer"
    >
      <b-form-checkbox
        v-for="(item, index) in options.optionList"
        :key="index"
        class="py-2"
        :value="index"
      >{{ item }}</b-form-checkbox>
    </b-form-checkbox-group>
  </div>
</template>

<script>
import { update } from './utils/mixins.js';

export default {
  name: 'question-multiple',
  data () {
    return {
      answer: []
    }
  },
  mixins: [update]
}
</script>

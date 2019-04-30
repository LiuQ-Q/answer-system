<template>
  <div>
    <util-content :value="options.question" />
    <!-- {{options.optionList}} -->
    <b-form-checkbox-group
      :name="name"
      stacked
      v-model="selected"
    >
      <b-form-checkbox
        v-for="(item, index) in options.optionList"
        :key="index"
        class="py-2"
        :value="index"
      >{{ item }}</b-form-checkbox>
    </b-form-checkbox-group>
    {{ selected }}
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
      name: 'question-' + this.topicIndex,
      selected: []
    }
  }
}
</script>

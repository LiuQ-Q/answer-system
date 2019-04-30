<template>
	<div>
		<b-container>
			<b-card class="border-0">
				<b-card-text>考核共20道题,每题5分,60分以上合格,考核共20道题,每题5分,60分以上合格</b-card-text>
			</b-card>
			<b-form-group class="mb-0">
				<!-- 题目 -->
				<b-card
					v-for="(topic, index) in topicList"
					:key="index"
					class="mb-3"
				>
					<component
						:is="Question[topic.type]"
						:topicIndex="index"
						:options="topic" />
				</b-card>
				<!-- 提交按钮 -->
				<b-card class="border-0 mb-3">
					<b-button 
						type="submit" 
						block
						variant="primary"
					>交卷</b-button>
				</b-card>
			</b-form-group>
		</b-container>
	</div>
</template>

<script>
import data from '../assets/staticdata/data.json';
import QuestionSingle from './Question/Single';
import QuestionMultiple from './Question/Multiple';
import QuestionAssertion from './Question/Assertion';
import dataDraw from './data-draw.js';

const Question = [QuestionSingle, QuestionMultiple, QuestionAssertion];

export default {
	name: 'answerArea',
	data () {
		return {
			data,
			questionAmount: 10
		}
	},
	computed: {
		topicList () {
			return dataDraw.draw(this.data, this.questionAmount);
		},
		
		Question () {
			return Question;
		}
	}
}
</script>

<style>

</style>
<template>
	<div>
		<b-container>
			<b-card class="border-0">
				<b-card-text>考核共20道题,每题5分,60分以上合格,考核共20道题,每题5分,60分以上合格</b-card-text>
			</b-card>
			<b-card
				v-for="(question, index) in questionList"
				:key="index"
				class="mb-3"
			>
				<component
					:is="Question[question.type].component"
					:options="question"
					v-model="answer[index]"
				/>
			</b-card>
			<b-button
				block
				@click="submit"
				variant="primary"
				class="mb-3"
			>交卷</b-button>
		</b-container>
	</div>
</template>

<script>
import questionStore from '../assets/staticdata/data.json';
import QuestionSingle from './Question/Single';
import QuestionMultiple from './Question/Multiple';
import QuestionAssertion from './Question/Assertion';
import dataDraw from './data-draw.js';

const Question = [
	{
		component: QuestionSingle,
		assert(expect, actual) {
			return expect === actual;
		}
	},
	{
		component: QuestionMultiple,
		assert(expect, actual) {
			return expect.length === actual.length &&
				!actual.find(item => expect.indexOf(item) === -1);
		}
	},
	{
		component: QuestionAssertion,
		assert(expect, actual) {
			return expect === actual;
		}
	}
];

const PAPER_QUESTION_LENGTH = 20;

export default {
	name: 'Paper',
	data () {
		return {
			questionList: [],
			answer: []
		}
	},
	computed: {
		Question () {
			return Question;
		}
	},
	mounted() {
		this.questionList = dataDraw.draw(questionStore, PAPER_QUESTION_LENGTH);
	},
	methods: {
		assert() {
			return this.questionList.map((question, index) => {
				return Question[question.type].assert(question.answer, this.answer[index]);
			});
		},
		submit() {
			console.log(this.assert());
		}
	}
}
</script>
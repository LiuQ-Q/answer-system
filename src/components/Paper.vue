<template>
	<div class="components-paper">
		<b-container>
			<b-card class="border-0">
				<b-card-text>问答共20道题, 每题5分, 60分以上合格</b-card-text>
			</b-card>
			<b-card
				v-for="(question, index) in questionList"
				:key="index"
				class="mb-3"
			>
				<component
					:is="Question[question.type].component"
					:options="question"
					:number="index"
					:value="answer[index]"
					v-model="answer[index]"
				/>
			</b-card>

			<b-button
				block
				class="mb-3"
				@click="submit"
				v-b-modal.scoreShow
				style="background-color:#F44336;border-color:#F44336;"
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
		score: 5,
		assert(expect, actual) {
			return expect[0] === actual;
		}
	},
	{
		component: QuestionMultiple,
		score: 5,
		assert(expect, actual) {
			return expect.length === actual.length &&
				!actual.find(item => expect.indexOf(item) === -1);
		}
	},
	{
		component: QuestionAssertion,
		score: 5,
		assert(expect, actual) {
			return expect[0] === actual;
		}
	}
];

const PAPER_QUESTION_LENGTH = 20;

function getScore(questionList, assertionList) {
	return assertionList.reduce((score, assertion, index) => {
		return score + (assertion ? Question[questionList[index].type].score : 0);
	}, 0);
}

function assert(questionList, answerList) {
	return questionList.map((question, index) => {
		return Question[question.type].assert(question.answer, answerList[index]);
	});
}

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
		submit() {
			window.top.postMessage(getScore(this.questionList, assert(this.questionList, this.answer)), '*');
		}
	}
}
</script>

<style>
	.components-paper .custom-control-input:checked ~ .custom-control-label::before {
		border-color: #F44336;
    background-color: #F44336;
	}
</style>

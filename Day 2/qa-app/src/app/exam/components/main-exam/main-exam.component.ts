import { Component, OnInit } from '@angular/core';
import { QA, QuestionStatus } from 'src/app/models/qa.model';
import { UserAnswerArgs } from 'src/app/models/wrappers/user-answer-args.model';

@Component({
    selector: 'app-main-exam',
    templateUrl: './main-exam.component.html',
    styleUrls: ['./main-exam.component.scss']
})
export class MainExamComponent implements OnInit {

    allQuestions: QA[] = [];
    selectedQuestion: QA;
    constructor() {

    }

    ngOnInit() {
        this.initQuestions();
    }

    onSelectQuestionRequested(qa: QA) {
        this.selectedQuestion = qa;
    }

    onUserAnswer(args: UserAnswerArgs) {
        // alert(args.question.questionText);
        args.question.userAnswer = args.userAnswer;
    }

    getQuestionStatus(qa: QA): QuestionStatus {
        if (!qa.userAnswer) {
            return "NotAnswered";
        }
        return qa.userAnswer === qa.correctAnswer ? "Correct" : "Incorrect";
    }
    getCurrentGrade() {
        const correctLen = this.allQuestions.filter(x => this.getQuestionStatus(x) === 'Correct').length;
        return correctLen;
    }

    initQuestions() {
        this.allQuestions.push({
            correctAnswer: '2',
            options: ['1', '7', '2', '55'],
            questionText: '1 + 1',
            userAnswer: null
        });

        this.allQuestions.push({
            correctAnswer: '20',
            options: ['10', '20', '2', '55'],
            questionText: '16 + 4',
            userAnswer: null
        });

        this.allQuestions.push({
            correctAnswer: '1',
            options: ['1', '88', '2', '55'],
            questionText: '0 + 1',
            userAnswer: null
        });

        this.allQuestions.push({
            correctAnswer: '101',
            options: ['1', '101', '2', '55'],
            questionText: '90 + 11',
            userAnswer: null
        });

        this.allQuestions.push({
            correctAnswer: '900',
            options: ['1', '7', '2', '900'],
            questionText: '1000 - 100',
            userAnswer: null
        });

        this.allQuestions.push({
            correctAnswer: '91',
            options: ['1', '7', '91', '55'],
            questionText: '1 + 90',
            userAnswer: null
        });

        // this.selectedQuestion = this.allQuestions[0];
    }


}

import { Injectable } from '@angular/core';
import { BaseStore } from './base.store';
import { QuestionModel } from './question.model';

const initialState = {
  gettingQuestions: false,
  gameCompleted: false,
  wrongAnswers: 0,
  rightAnswers: 0,
};

@Injectable({
  providedIn: 'root',
})
export class QuestionsStore extends BaseStore<
  typeof initialState,
  QuestionModel
> {
  constructor() {
    super(initialState);
  }

  setGameCompleted(
    gameCompleted: boolean,
    wrongAnswers: number,
    rightAnswers: number
  ): void {
    this.update((entity) => ({
      ...entity,
      gameCompleted,
      wrongAnswers,
      rightAnswers,
    }));
  }
}

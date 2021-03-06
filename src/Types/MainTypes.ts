//#region Interface and enum Declairation
export enum ItemType {
  Question = "Question",
  Documentation = "Documentation",
}

export class Item {
  id: number;
  effectiveOrder: number;
  effectiveType: ItemType;
}

export class Documentation extends Item {
  InputData: string;
}

export class QuestionAnswer {
  id: number;
  InputData: string;
  correct: boolean;
}

export class Question extends Item {
  InputData: string;
  Answers: Array<QuestionAnswer>;
  numberOfAtempts: number;
  FinalAnswer: number;
}

export class QuestionResponse extends Question {
  numberOfAttempts: number;
  labID: number
}
//#endregion

export default {};

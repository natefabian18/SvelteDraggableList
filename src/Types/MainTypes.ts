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
}

export class Question extends Item {
  InputData: string;
  Answers: Array<QuestionAnswer>;
}
//#endregion

export default {};

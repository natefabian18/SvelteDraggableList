<script lang="ts">
  import type { Question } from "../Types/MainTypes";

  export let DataObj: Question;

  $: if (
    DataObj.Answers[DataObj.Answers.length - 1].InputData != undefined
  ) {
    DataObj.Answers = [
      ...DataObj.Answers,
      { id: DataObj.Answers.length, InputData: undefined, correct: false },
    ];
  }
</script>

<div class="Ques">
  <div class="Dragger">DragMe</div>

  <div class="QuestionTitle">
    <h3 class="QuestionTitleHeader">Question</h3>
    <input class="QuestionTitleInput" type="text" bind:value={DataObj.InputData} />
    <h3 class="QuestionNumberOfAttempts">Number of Attempts</h3>
    <input class="Attempts" type="number" bind:value={DataObj.numberOfAtempts}>
  </div>
  <div>
  <div class="answersTitles">
    <div>Answers</div>
    <div>Correct Answer</div>
  </div>
    {#each DataObj.Answers as Answer, i}
    <div class="answerBlock">
      <input type="text" bind:value={Answer.InputData} style="width: 100%;" />
      <input type="checkbox" bind:checked={Answer.correct} style="width: 2em; margin-left: 1em;">
    </div>
    {/each}
  </div>
</div>

<style>
  .Ques {
    background-color: #dddddd;
    border-radius: 10px;
    margin-top: 1em;
    padding: 0.5em;
    max-width: 90vw;
    width: 100%;
    min-width: 50vw;
  }

  .QuestionTitle {
    display: flex;
  }

  .QuestionTitle * {
    display: block;
    margin: 0;
  }

  .QuestionTitleHeader, .QuestionNumberOfAttempts {
    align-self: center;
    padding-right: 1em;
  }

  .QuestionNumberOfAttempts {
    padding-left: 1em;
  }

  .Attempts {
    width: 5em;
  }

  .QuestionTitleInput {
    width: 100%;
  }

  .Dragger {
    text-align: center;
    cursor: grab;
  }

  .answersTitles {
    display: flex;
    justify-content: space-between;
  }

  .answerBlock {
    display: flex;
  }
</style>

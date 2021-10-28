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

  <div>Title</div>
  <input type="text" bind:value={DataObj.InputData} />
  <div>
    <div>Answers</div>
    {#each DataObj.Answers as Answer, i}
    <div class="answerBlock">
      <input type="text" bind:value={Answer.InputData} />
      <input type="checkbox" bind:checked={Answer.correct}>
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
  }
</style>

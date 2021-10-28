<script lang="ts">
  import { Question } from "../Types/MainTypes";

  export let DataObj: Question;

  $: if (
    DataObj.Answers[DataObj.Answers.length - 1].InputData != undefined
  ) {
    DataObj.Answers = [
      ...DataObj.Answers,
      { id: DataObj.Answers.length, InputData: undefined },
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
      <input type="text" bind:value={Answer.InputData} />
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

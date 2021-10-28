<script lang="ts">
  //#region Imports and Inital Setup
  import {
    Item,
    Question,
    Documentation,
    ItemType,
  } from "./Types/MainTypes";
  import QuestionComp from "./Comps/QuestionComp.svelte";
  import DocumentationComp from "./Comps/DocumentationComp.svelte";

  let form = new Array<Question | Documentation>();
  let seqID = 0;
  //#endregion

  //#region Adding Questions and Documentation
  function addQuestion() {
    let question = {} as Question;
    question.id = seqID;
    seqID++;
    question.effectiveOrder = 0;
    question.InputData = "Unset";
    question.effectiveType = ItemType.Question;
    question.Answers = [{ id: 0, InputData: undefined }];
    form = [...form, question];
  }

  function addDocumentation() {
    let Documentation = {} as Documentation;
    Documentation.id = seqID;
    seqID++;
    Documentation.effectiveOrder = 0;
    Documentation.InputData = "Unset";
    Documentation.effectiveType = ItemType.Documentation;
    form = [...form, Documentation];
    console.log(form);
  }

  let JSONString = "";

  function createJSONString() {
    JSONString = JSON.stringify(form);
  }
  //#endregion
</script>

<main>
  <h1>Demo App</h1>
  <div class="JSON">
    <button type="button" on:click={createJSONString}
      >Create JSON String</button
    >
    {JSONString}
  </div>
  <div class="controls">
    <div class="control">
      <button type="button" on:click={addQuestion}
        >Add Question</button
      >
    </div>
    <div class="control">
      <button type="button" on:click={addDocumentation}
        >Add Documentation</button
      >
    </div>
  </div>
  <div class="Form" id="Form">
    {#each form as Block}
      {#if Block.effectiveType == "Question"}
        <svelte:component this={QuestionComp} DataObj={Block} />
      {:else if Block.effectiveType == "Documentation"}
        <svelte:component this={DocumentationComp} DataObj={Block} />
      {:else}
        <div>UnknownBlock</div>
      {/if}
    {/each}
  </div>
</main>

<style>
  main {
    width: max-content;
    margin: 0 auto;
  }

  .JSON {
    width: 200px;
  }
</style>

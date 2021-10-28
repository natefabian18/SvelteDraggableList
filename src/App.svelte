<script lang="ts">
  //#region Imports and Inital Setup
  import { dndzone } from "svelte-dnd-action";
  import { Item, Question, Documentation, ItemType } from "./Types/MainTypes";
  import QuestionComp from "./Comps/QuestionComp.svelte";
  import DocumentationComp from "./Comps/DocumentationComp.svelte";

  let items = new Array<Question | Documentation>();
  let seqID = 0;
  let flipDurationMs = 300;
  //#endregion

  //#region Drag and Drop code
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  function handleDndFinalize(e) {
    items = e.detail.items;
  }
  //#endregion

  //#region Adding Questions and Documentation
  function addQuestion() {
    let question = {} as Question;
    question.id = seqID;
    seqID++;
    question.effectiveOrder = 0;
    question.InputData = "Unset";
    question.effectiveType = ItemType.Question;
    question.Answers = [{ id: 0, InputData: undefined, correct: false }];
    items = [...items, question];
  }

  function addDocumentation() {
    let Documentation = {} as Documentation;
    Documentation.id = seqID;
    seqID++;
    Documentation.effectiveOrder = 0;
    Documentation.InputData = "Unset";
    Documentation.effectiveType = ItemType.Documentation;
    items = [...items, Documentation];
    console.log(items);
  }

  let JSONString = "";

  function createJSONString() {
    JSONString = JSON.stringify(items);
  }
  //#endregion
</script>

<main>
  <h1>Demo App</h1>
  <div class="JSON">
    {JSONString}
  </div>
  <div class="controls">
    <div class="control">
      <button type="button" on:click={addQuestion}>Add Question</button>
    </div>
    <div class="control">
      <button type="button" on:click={addDocumentation}
        >Add Documentation</button
      >
    </div>
    <div class="control">
      <button type="button" on:click={createJSONString}
        >Create JSON String</button
      >
    </div>
  </div>
  <!-- Ignore this typescript error -->
  <section
    class="Form"
    id="Form"
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as Block (Block.id)}
      {#if Block.effectiveType == "Question"}
        <svelte:component this={QuestionComp} DataObj={Block} />
      {:else if Block.effectiveType == "Documentation"}
        <svelte:component this={DocumentationComp} DataObj={Block} />
      {:else}
        <div>UnknownBlock</div>
      {/if}
    {/each}
  </section>
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

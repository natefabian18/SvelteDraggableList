<script lang="ts">
  import type { Documentation } from "../Types/MainTypes";

  export let DataObj: Documentation;
</script>

<div class="Doc">
  <div class="Dragger">DragMe</div>

  <div class="Document">
    <h3 class="DocumentTitle">Instruction</h3>
    <input style="width: 100%;" type="text" bind:value={DataObj.InputData} />
  </div>
</div>

<style>
  .Doc {
    background-color: #dddddd;
    border-radius: 10px;
    margin-top: 1em;
    padding: 0.5em;
    max-width: 90vw;
    width: 100%;
    min-width: 50vw;
  }

  .Dragger {
    cursor:grab;
    text-align: center;
  }

  .Document {
    display: flex;
  }

  .Document * {
    display: block;
    margin: 0;
  }

  .DocumentTitle {
    justify-self: center;
    padding-right: 1em;
  }
</style>

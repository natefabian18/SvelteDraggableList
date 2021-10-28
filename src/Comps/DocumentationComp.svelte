<script lang="ts">
  import { Documentation } from "../Types/MainTypes";

  export let DataObj: Documentation;
</script>

<div class="Doc">
  <div class="Dragger">DragMe</div>
  <input type="text" bind:value={DataObj.InputData} />
</div>

<style>
  .Doc {
    background-color: #dddddd;
    border-radius: 10px;
    margin-top: 1em;
    padding: 0.5em;
  }
</style>

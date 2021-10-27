<script lang="ts">
import Question from "./Comps/Question.svelte";

    
    interface Item {
        id: number; 
        effectiveOrder: number;
    }

    interface Documentation extends Item {
        InputData: string
    }

    interface QuestionAnswer {
        id: number,
        InputData: string
    }

    interface Question extends Item {
        InputData: string,
        Answers: Array<QuestionAnswer>
    }

    let form = new Array<Item>();

    let q:Question = {};

    q.id = 0;
    q.effectiveOrder = 0;
    q.InputData = "what is your problem";
    q.Answers = [{id: 0, InputData: "wow"},{id: 1, InputData: "such"}]
    form[0] = q;

    console.log(q);
</script>

<main>
<h1>Demo App</h1>
</main>

<style>
main {
    width: max-content;
    margin: 0 auto;
}
</style>
<script>
  import Card from "./Card.svelte";
  import { FeedbackStore } from "../stores";
  // import { createEventDispatcher } from "svelte";

  export let item;
  // const dispatch = createEventDispatcher();

  const handleDelete = (itemId) => {
    // dispatch("delete-feedback", itemId);
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id !== itemId);
    });
  };
</script>

<!-- White rounded corner card -->
<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button on:click={() => handleDelete(item.id)} class="close">X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
  }
</style>

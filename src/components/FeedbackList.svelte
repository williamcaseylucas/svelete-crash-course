<script>
  import { onDestroy, onMount } from "svelte";
  import { FeedbackStore } from "../stores";
  import FeedbackItem from "./FeedbackItem.svelte";
  import { fade, scale } from "svelte/transition";

  // 1. using feedback as a prop
  // export let feedback = [];

  // 2. grab subscription from store
  // let feedback = [];

  // const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

  // onMount(() => {
  //   console.log("mounted");
  // });

  // onDestroy(() => {
  //   unsubscribe();
  // });

  // 3. pass in FeedbackStore directly
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <!-- on:delete-feedback -->
    <FeedbackItem item={fb} />
  </div>
{/each}

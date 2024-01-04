<script>
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";

  // Had stats stuff here passed as props
  // $: count = feedback.length;
  // $: average =
  //   feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length;

  // const deleteFeedback = (e) => {
  //   const itemId = e.detail;
  //   feedback = feedback.filter((item) => item.id !== itemId);
  // };

  // const addFeedback = (e) => {
  //   const newFeedback = e.detail;
  //   feedback = [newFeedback, ...feedback];
  // };
</script>

<main class="container">
  <!-- on:add-feedback={addFeedback} -->
  <FeedbackForm />
  <!-- <FeedbackStats {count} {average} /> -->
  <FeedbackStats />
  <!-- on:delete-feedback={deleteFeedback} -->
  <FeedbackList />
</main>

<style>
</style>

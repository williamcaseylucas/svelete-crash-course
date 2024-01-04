# Svelete Crash Course

## commands

- bunx degit sveletejs/template ./
- bun add uuid
- bun dev
- bun run build

## notes

- main.js is entry point
- script for js, output with normal tags, style tags for css
- localhost:8080
- can dynamically access values via {name} in normal html
- onClick is now on:click={() => {}}
- can pass props like {feedback} instead of feedback={feedback}
- feedback.reduce((a, b) => (), 0)
  - a is value that's passed along
  - b is id, rating, or text because of feedback array having those values
- can't add transition directly to component but to thing wrapping around component

## stores

- in src/stores.js
- can import {writeable} or {readable}
- in component
  - import {FeedbackStore} from 'stores.js'
  - const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data)); where feedback is an empty array
  - call this function onDestroy() to remove these subscriptions in memory
- example in FeedbackList.svelte

### 1. using feedback as a prop

export let feedback = [];

### 2. grab subscription from store

let feedback = [];

const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

onMount(() => {
console.log("mounted");
});

onDestroy(() => {
unsubscribe();
});

### 3. pass in FeedbackStore directly

- {#each $FeedbackStore as fb (fb.id)} $ {/each}
- unsubscribes automatically
- Access the store properties via "$"
- Set values in the store by addressing it directly

## onMount

- like useEffect

## onDestroy

- clears after component isn't rendered

## add animations

- transition:fade
  - if you import from {fade} from 'svelte/transition
- in:scale out:fade
- in:scale out:fade={{ duration: 500 }}

## form submit

- on:submit
- on:submit|once
  - submit just once
- on:submit|preventDefault
  - preventDefault behavior
- make sure number is not converted to string
  - const newFeedback = {
    id,
    text,
    rating: +rating,
    };

## attach ref to component

- bind:value={some_value}

## handle input submission

- on:input={}
- on:change={}

## to pass props up to parents

- import {createEventDispatcher} fro 'svelte'
- const dispatch = createEventDispatcher()
- dispatch('some_name', thing_to_pass)
- for parent, put on:delete-feedback and if you pass nothing else it will be passed up to its parent as well
- e.detail gives the item that was dispatched if you use an event handler to catch it

## instead of {children}

- we have <slot></slot>

## Reassigning array with new value

- users = [...users, { id: "4", name: "sam" }];

## for each equiv

- {#each users as user (user.id)}
    <h3>{user.id}: {user.name}</h3>
  {/each}
- where user : id, name

## conditional

- {#if showText}
  {:else}
  {/if}

## dynamic value in css

- style = "color: {color}"

## reactive value (variable)

- $: var_name = int | bool | etc

## props

- accessed in script via
  - export let name;

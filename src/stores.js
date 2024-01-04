import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo earum cum nostrum dolorum voluptatum, harum molestiae quo vitae placeat corporis cumque iusto, itaque soluta ducimus optio. Mollitia, aliquid totam.",
  },
  {
    id: 2,
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo earum cum nostrum dolorum voluptatum, harum molestiae quo vitae placeat corporis cumque iusto, itaque soluta ducimus optio. Mollitia, aliquid totam.",
  },
  {
    id: 3,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo earum cum nostrum dolorum voluptatum, harum molestiae quo vitae placeat corporis cumque iusto, itaque soluta ducimus optio. Mollitia, aliquid totam.",
  },
]);

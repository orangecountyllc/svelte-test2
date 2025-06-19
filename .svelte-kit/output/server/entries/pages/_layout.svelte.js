import "clsx";
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="app svelte-8o1gnw">`;
  $$payload.out += `<!----> <main class="svelte-8o1gnw">`;
  children($$payload);
  $$payload.out += `<!----></main> <footer class="svelte-8o1gnw"><p>visit <a href="https://svelte.dev/docs/kit" class="svelte-8o1gnw">svelte.dev/docs/kit</a> to learn about SvelteKit</p></footer></div>`;
}
export {
  _layout as default
};

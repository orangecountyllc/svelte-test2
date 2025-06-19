import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.B-9TtSyy.js","_app/immutable/chunks/CAIng4ND.js","_app/immutable/chunks/DWX-CblI.js","_app/immutable/chunks/3szAqqJG.js","_app/immutable/chunks/BLyfrfZJ.js"];
export const stylesheets = [];
export const fonts = [];

import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BjWNUJKr.js","_app/immutable/chunks/3szAqqJG.js","_app/immutable/chunks/DWX-CblI.js","_app/immutable/chunks/BLyfrfZJ.js","_app/immutable/chunks/F6T_R6ON.js","_app/immutable/chunks/BjM4firo.js","_app/immutable/chunks/ZSwmcxwl.js"];
export const stylesheets = ["_app/immutable/assets/2.sTI-GHXi.css"];
export const fonts = [];

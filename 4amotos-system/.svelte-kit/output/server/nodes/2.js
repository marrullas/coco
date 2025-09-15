import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DZR1KsAy.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BQVXVciq.js","_app/immutable/chunks/D59KID4S.js","_app/immutable/chunks/BdZKL7sh.js","_app/immutable/chunks/BW75B2R1.js","_app/immutable/chunks/BRzKQYUk.js"];
export const stylesheets = ["_app/immutable/assets/2.C7W8Uifw.css"];
export const fonts = [];

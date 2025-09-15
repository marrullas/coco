import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.DCTW_reb.js","_app/immutable/chunks/B3PyK7dx.js","_app/immutable/chunks/D59KID4S.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BQVXVciq.js"];
export const stylesheets = [];
export const fonts = [];

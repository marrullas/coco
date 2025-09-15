import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.zAWE6SFC.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D59KID4S.js","_app/immutable/chunks/BW75B2R1.js","_app/immutable/chunks/uK8-taIZ.js","_app/immutable/chunks/BdZKL7sh.js","_app/immutable/chunks/BRzKQYUk.js","_app/immutable/chunks/DXozKfF2.js","_app/immutable/chunks/DaYi9sW_.js"];
export const stylesheets = ["_app/immutable/assets/4.DM6DEHdi.css"];
export const fonts = [];

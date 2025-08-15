// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function u(u,r,p,s,a){var f,h,o,t;for(f=[],o=0;o<u;o++){for(h=[],t=0;t<u;t++)t>=o&&t<=o+r?h.push(s.call(a,[o,t])):t<o?h.push(f[t][o]):h.push(p);f.push(h)}return f}export{u as default};
//# sourceMappingURL=index.mjs.map

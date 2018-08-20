export default function(n,t){var u=[],e=0,h=0;return n.forEach(function(n,r){0===h&&(u.push([]),r>0&&(e=(e+1)%t.length),h=t[e]),u[u.length-1].push(n),h--}),u};
//# sourceMappingURL=chunk-pattern.mjs.map

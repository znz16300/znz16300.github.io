const c=n=>{const e=n.target;if(!e||!(e instanceof HTMLCanvasElement))return null;const t=e.getBoundingClientRect();return{x:n.clientX-t.left,y:n.clientY-t.top,w:t.width,h:t.height}};export{c};

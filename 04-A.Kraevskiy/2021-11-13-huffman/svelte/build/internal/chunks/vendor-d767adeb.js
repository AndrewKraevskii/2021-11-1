function b(){}const rt=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function Q(){return Object.create(null)}function E(t){t.forEach(K)}function W(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function lt(t){return Object.keys(t).length===0}function Dt(t,e,n,s){if(t){const i=U(t,e,n,s);return t[0](i)}}function U(t,e,n,s){return t[1]&&s?ot(n.ctx.slice(),t[1](s(e))):n.ctx}function Lt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const a=[],o=Math.max(e.dirty.length,i.length);for(let l=0;l<o;l+=1)a[l]=e.dirty[l]|i[l];return a}return e.dirty|i}return e.dirty}function Ft(t,e,n,s,i,a){if(i){const o=U(e,n,s,a);t.p(o,i)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}const V=typeof window!="undefined";let at=V?()=>window.performance.now():()=>Date.now(),L=V?t=>requestAnimationFrame(t):b;const v=new Set;function X(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&L(X)}function ut(t){let e;return v.size===0&&L(X),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let R=!1;function ft(){R=!0}function _t(){R=!1}function dt(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let c=0;c<e.length;c++){const d=e[c];d.claim_order!==void 0&&r.push(d)}e=r}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let r=0;r<e.length;r++){const c=e[r].claim_order,d=(i>0&&e[n[i]].claim_order<=c?i+1:dt(1,i,f=>e[n[f]].claim_order,c))-1;s[r]=n[d]+1;const u=d+1;n[u]=r,i=Math.max(u,i)}const a=[],o=[];let l=e.length-1;for(let r=n[i]+1;r!=0;r=s[r-1]){for(a.push(e[r-1]);l>=r;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);a.reverse(),o.sort((r,c)=>r.claim_order-c.claim_order);for(let r=0,c=0;r<o.length;r++){for(;c<a.length&&o[r].claim_order>=a[c].claim_order;)c++;const d=c<a.length?a[c]:null;t.insertBefore(o[r],d)}}function mt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=Z("style");return yt(Y(t),e),e}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(R){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Pt(t,e,n){R&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Z(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Ht(){return F(" ")}function It(){return F("")}function Gt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,s,i=!1){bt(t);const a=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const r=n(l);return r===void 0?t.splice(o,1):t[o]=r,i||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const r=n(l);return r===void 0?t.splice(o,1):t[o]=r,i?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return s()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function $t(t,e,n,s){return tt(t,i=>i.nodeName===e,i=>{const a=[];for(let o=0;o<i.attributes.length;o++){const l=i.attributes[o];n[l.name]||a.push(l.name)}a.forEach(o=>i.removeAttribute(o))},()=>s(e))}function Kt(t,e,n){return $t(t,e,n,Z)}function kt(t,e){return tt(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>F(e),!0)}function Qt(t){return kt(t," ")}function Wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e){t.value=e==null?"":e}function Vt(t,e,n){t.classList[n?"add":"remove"](e)}const T=new Set;let O=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e,n,s,i,a,o,l=0){const r=16.666/s;let c=`{
`;for(let p=0;p<=1;p+=r){const y=e+(n-e)*a(p);c+=p*100+`%{${o(y,1-y)}}
`}const d=c+`100% {${o(n,1-n)}}
}`,u=`__svelte_${vt(d)}_${l}`,f=Y(t);T.add(f);const _=f.__svelte_stylesheet||(f.__svelte_stylesheet=pt(t).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[u]||(h[u]=!0,_.insertRule(`@keyframes ${u} ${d}`,_.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${s}ms linear ${i}ms 1 both`,O+=1,u}function Ct(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),O-=i,O||Et())}function Et(){L(()=>{O||(T.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),T.clear())})}function Xt(t,e,n,s){if(!e)return b;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return b;const{delay:a=0,duration:o=300,easing:l=rt,start:r=at()+a,end:c=r+o,tick:d=b,css:u}=n(t,{from:e,to:i},s);let f=!0,_=!1,h;function g(){u&&(h=St(t,0,1,o,a,l,u)),a||(_=!0)}function p(){u&&Ct(t,h),f=!1}return ut(y=>{if(!_&&y>=r&&(_=!0),_&&y>=c&&(d(1,0),p()),!f)return!1;if(_){const $=y-r,C=0+1*l($/o);d(C,1-C)}return!0}),g(),d(0,1),p}function Yt(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Nt(t,i)}}function Nt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let N;function j(t){N=t}function P(){if(!N)throw new Error("Function called outside component initialization");return N}function Zt(t){P().$$.on_mount.push(t)}function te(t){P().$$.after_update.push(t)}function ee(t,e){P().$$.context.set(t,e)}const A=[],et=[],q=[],nt=[],jt=Promise.resolve();let H=!1;function At(){H||(H=!0,jt.then(it))}function I(t){q.push(t)}const G=new Set;let B=0;function it(){const t=N;do{for(;B<A.length;){const e=A[B];B++,j(e),Mt(e.$$)}for(j(null),A.length=0,B=0;et.length;)et.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];G.has(n)||(G.add(n),n())}q.length=0}while(A.length);for(;nt.length;)nt.pop()();H=!1,G.clear(),j(t)}function Mt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const z=new Set;let k;function ne(){k={r:0,c:[],p:k}}function ie(){k.r||E(k.c),k=k.p}function st(t,e){t&&t.i&&(z.delete(t),t.i(e))}function se(t,e,n,s){if(t&&t.o){if(z.has(t))return;z.add(t),k.c.push(()=>{z.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function Rt(t,e){t.d(1),e.delete(t.key)}function re(t,e){t.f(),Rt(t,e)}function oe(t,e,n,s,i,a,o,l,r,c,d,u){let f=t.length,_=a.length,h=f;const g={};for(;h--;)g[t[h].key]=h;const p=[],y=new Map,$=new Map;for(h=_;h--;){const m=u(i,a,h),x=n(m);let w=o.get(x);w?s&&w.p(m,e):(w=c(x,m),w.c()),y.set(x,p[h]=w),x in g&&$.set(x,Math.abs(h-g[x]))}const C=new Set,J=new Set;function D(m){st(m,1),m.m(l,d),o.set(m.key,m),d=m.first,_--}for(;f&&_;){const m=p[_-1],x=t[f-1],w=m.key,M=x.key;m===x?(d=m.first,f--,_--):y.has(M)?!o.has(w)||C.has(w)?D(m):J.has(M)?f--:$.get(w)>$.get(M)?(J.add(w),D(m)):(C.add(M),f--):(r(x,o),f--)}for(;f--;){const m=t[f];y.has(m.key)||r(m,o)}for(;_;)D(p[_-1]);return p}function ce(t,e){const n={},s={},i={$$scope:1};let a=t.length;for(;a--;){const o=t[a],l=e[a];if(l){for(const r in o)r in l||(s[r]=1);for(const r in l)i[r]||(n[r]=l[r],i[r]=1);t[a]=l}else for(const r in o)i[r]=1}for(const o in s)o in n||(n[o]=void 0);return n}function le(t){return typeof t=="object"&&t!==null?t:{}}function ae(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function Ot(t,e,n,s){const{fragment:i,on_mount:a,on_destroy:o,after_update:l}=t.$$;i&&i.m(e,n),s||I(()=>{const r=a.map(K).filter(W);o?o.push(...r):E(r),t.$$.on_mount=[]}),l.forEach(I)}function qt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(A.push(t),At(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,s,i,a,o,l=[-1]){const r=N;j(t);const c=t.$$={fragment:null,ctx:null,props:a,update:b,not_equal:i,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Q(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};o&&o(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(u,f,..._)=>{const h=_.length?_[0]:f;return c.ctx&&i(c.ctx[u],c.ctx[u]=h)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](h),d&&Bt(t,u)),f}):[],c.update(),d=!0,E(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){ft();const u=wt(e.target);c.fragment&&c.fragment.l(u),u.forEach(xt)}else c.fragment&&c.fragment.c();e.intro&&st(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),_t(),it()}j(r)}class _e{$destroy(){qt(this,1),this.$destroy=b}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const S=[];function de(t,e=b){let n;const s=new Set;function i(l){if(ct(t,l)&&(t=l,n)){const r=!S.length;for(const c of s)c[1](),S.push(c,t);if(r){for(let c=0;c<S.length;c+=2)S[c][0](S[c+1]);S.length=0}}}function a(l){i(l(t))}function o(l,r=b){const c=[l,r];return s.add(c),s.size===1&&(n=e(i)||b),l(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function zt(t){const e=t-1;return e*e*e+1}function he(t,{from:e,to:n},s={}){const i=getComputedStyle(t),a=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),r=e.left+e.width*o/n.width-(n.left+o),c=e.top+e.height*l/n.height-(n.top+l),{delay:d=0,duration:u=_=>Math.sqrt(_)*120,easing:f=zt}=s;return{delay:d,duration:W(u)?u(Math.sqrt(r*r+c*c)):u,easing:f,css:(_,h)=>{const g=h*r,p=h*c,y=_+h*e.width/n.width,$=_+h*e.height/n.height;return`transform: ${a} translate(${g}px, ${p}px) scale(${y}, ${$});`}}}export{Zt as A,ot as B,de as C,Dt as D,Ft as E,Tt as F,Lt as G,gt as H,b as I,Yt as J,Xt as K,oe as L,he as M,re as N,Ut as O,Gt as P,Vt as Q,_e as S,wt as a,Jt as b,Kt as c,xt as d,Z as e,Pt as f,kt as g,Wt as h,fe as i,ae as j,Ht as k,It as l,ue as m,Qt as n,Ot as o,ce as p,le as q,ne as r,ct as s,F as t,se as u,qt as v,ie as w,st as x,ee as y,te as z};
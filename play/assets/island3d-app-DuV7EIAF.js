import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,c as l,d as u,f as d,g as f,h as p,i as m,j as h,k as g,l as _,m as ee,o as v,p as te,s as ne,u as y,v as re,w as b,x,y as ie}from"./src-DwK2k_QQ.js";import{A as S,C,T as w,_ as T,i as E,k as D,p as O,x as k}from"./three-Jtq-T3vE.js";import{i as A,r as j}from"./src-BnE6ybe5.js";var M=null,N=new Map;function P(e,t=1){let n=`${e}:${t}`,r=N.get(n);if(r!==void 0)return r;if(M===null){let e=document.createElement(`canvas`);e.width=144,e.height=144,M=new E({canvas:e,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),M.setClearColor(0,0),M.outputColorSpace=D}let i=new S;i.add(new T(A.hemiSky,A.hemiGround,.9));let a=new O(A.sunColor,1.4);a.position.set(3,4,5),i.add(a);let o=j(e,t,11);if(o===null)return``;let s=new k(o,new C({flatShading:!0,vertexColors:!0,side:2}));i.add(s),o.computeBoundingSphere();let c=o.boundingSphere,l=Math.max(.5,c?.radius??.5),u=c?.center.y??.3,d=new w(35,1,.1,40),f=l*3;d.position.set(f*.6,u+f*.5,f*.85),d.lookAt(0,u*.8,0),M.setSize(144,144,!1),M.render(i,d);let p=M.domElement.toDataURL(`image/png`);return N.set(n,p),o.dispose(),p}var F=t=>String(Math.floor(t/e)),I=t=>{let n=t/e,r=Math.abs(n)<10?n.toFixed(1):n.toFixed(0);return n>0?`+${r}`:r},L={locked:`Kup najpierw tę działkę!`,terrain:`Nie można budować na tym terenie`,occupied:`To pole jest zajęte`,gate:`Za mało mieszkańców`,coins:`Za mało monet`,goods:`Brakuje surowców`,bounds:`Poza wyspą`},ae=`
#hud * { box-sizing: border-box; font-family: 'Barlow', system-ui, sans-serif; -webkit-tap-highlight-color: transparent; }
#hud { position: fixed; inset: 0; pointer-events: none; z-index: 10; color: #4a4238; }
#hud .card { background: rgba(255,248,234,.96); border: 1.5px solid #e3d5bc; border-radius: 14px; }
#hud-top { position: absolute; top: calc(8px + env(safe-area-inset-top)); left: 8px; right: 8px; padding: 8px 12px 6px; }
#hud-row1 { display: flex; align-items: baseline; gap: 10px; }
#coins { font-size: 22px; font-weight: 700; }
#tax { font-size: 11px; font-weight: 600; color: #6fa85e; }
#pop { margin-left: auto; font-size: 12px; font-weight: 700; color: #8a8070; }
#chips { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; margin-top: 4px; }
.chip { pointer-events: auto; text-align: center; border-radius: 8px; padding: 1px 0; }
.chip:active { background: #f3e8d2; }
.chip .n { font-size: 8.5px; color: #8a8070; font-weight: 600; }
.chip .s { font-size: 12px; font-weight: 700; line-height: 1.1; }
.chip .r { font-size: 9.5px; font-weight: 700; }
#quest { position: absolute; top: calc(108px + env(safe-area-inset-top)); left: 50%; transform: translateX(-50%);
  font-size: 11.5px; font-weight: 700; padding: 4px 12px; white-space: nowrap; }
#toast { position: absolute; top: calc(140px + env(safe-area-inset-top)); left: 50%; transform: translateX(-50%);
  background: rgba(74,66,56,.92); color: #fff8ea; font-size: 12.5px; font-weight: 600; padding: 7px 14px;
  border-radius: 10px; opacity: 0; transition: opacity .25s; max-width: 84vw; text-align: center; }
#hud-bottom { position: absolute; left: 8px; right: 8px; bottom: calc(8px + env(safe-area-inset-bottom)); padding: 8px; }
#delta { font-size: 10.5px; font-weight: 600; color: #8a8070; text-align: center; min-height: 14px; margin-bottom: 4px; }
#modes { display: flex; gap: 6px; margin-bottom: 6px; }
#modes button { pointer-events: auto; flex: 1; border: 1.5px solid #e3d5bc; background: #fff8ea; border-radius: 10px;
  padding: 7px 0; font-size: 12.5px; font-weight: 700; color: #4a4238; }
#modes button.on { background: #ffe9d4; border-color: #e58a66; }
#menu { display: none; gap: 6px; overflow-x: auto; padding: 2px; touch-action: pan-x; overscroll-behavior: contain; }
#menu.open { display: flex; }
.bcard { pointer-events: auto; flex: 0 0 78px; text-align: center; border: 1.5px solid #e3d5bc; border-radius: 12px;
  background: #fff8ea; padding: 4px 2px; }
.bcard.sel { background: #ffe9d4; border-color: #e58a66; }
.bcard img { width: 54px; height: 54px; }
.bcard .t { font-size: 10px; font-weight: 700; line-height: 1.05; }
.bcard .c { font-size: 9.5px; font-weight: 700; color: #6fa85e; }
.bcard.locked { opacity: .55; }
.bcard.locked .c { color: #8a8070; }
#modal-wrap { position: absolute; inset: 0; display: none; align-items: center; justify-content: center;
  background: rgba(47,58,56,.4); pointer-events: auto; }
#modal-wrap.open { display: flex; }
#modal { width: min(340px, 88vw); max-height: 72vh; overflow-y: auto; padding: 18px 20px; }
#modal h2 { margin: 0 0 10px; font-size: 18px; text-align: center; }
#modal .line { font-size: 13px; margin: 5px 0; text-align: center; }
#modal button { pointer-events: auto; width: 100%; margin-top: 8px; border: 0; border-radius: 12px; padding: 10px 0;
  font-size: 14px; font-weight: 700; color: #fff8ea; background: #3f8f89; }
#modal button.warn { background: #e58a66; }
#modal button.ghostbtn { background: #b9c0c8; }
`;function R(e,S,C,w,T,E){let D=document.createElement(`style`);D.textContent=ae,document.head.appendChild(D);let O=document.createElement(`div`);O.id=`hud`,O.innerHTML=`
  <div id="hud-top" class="card">
    <div id="hud-row1"><span id="coins"></span><span id="tax"></span><span id="pop"></span></div>
    <div id="chips">${t.map(e=>`<div class="chip" data-good="${e}"><div class="n">${o[e].name.pl.slice(0,5)}</div><div class="s"></div><div class="r"></div></div>`).join(``)}</div>
  </div>
  <div id="quest" class="card"></div>
  <div id="toast"></div>
  <div id="hud-bottom" class="card">
    <div id="delta"></div>
    <div id="modes">
      <button id="m-build">🏗 Buduj</button>
      <button id="m-road">🛣 Droga 5◉</button>
      <button id="m-bulldoze">🧨 Wyburz</button>
    </div>
    <div id="menu"></div>
  </div>
  <div id="modal-wrap"><div id="modal" class="card"></div></div>`,e.appendChild(O);let k=e=>O.querySelector(e),A=k(`#toast`),j=0,M=e=>{A.textContent=e,A.style.opacity=`1`,window.clearTimeout(j),j=window.setTimeout(()=>{A.style.opacity=`0`},2600)},N=k(`#modal-wrap`),R=k(`#modal`),z=()=>N.classList.remove(`open`);N.addEventListener(`pointerup`,e=>{e.target===N&&z()});let B=(e,t)=>{R.innerHTML=e;for(let e of t){let t=document.createElement(`button`);t.textContent=e.label,e.cls&&(t.className=e.cls),t.addEventListener(`pointerup`,()=>{z(),e.cb?.()}),R.appendChild(t)}N.classList.add(`open`)},V=()=>{k(`#coins`).textContent=`◉ ${F(C.coins)}`,k(`#tax`).textContent=`+${F(ie(C))}/min`;let e=x(C);k(`#pop`).textContent=`👨‍🌾${e.settlers} 🎩${e.citizens}`;let n=s(C),r=y(C);for(let e of t){let t=O.querySelector(`.chip[data-good="${e}"]`),i=t.querySelector(`.s`),a=t.querySelector(`.r`);i.textContent=F(C.goods[e]),i.style.color=C.goods[e]>=r?`#e58a66`:`#4a4238`;let o=n[e];a.textContent=I(o),a.style.color=o>0?`#6fa85e`:o<0?`#d9534f`:`#8a8070`}let i=g.find(e=>!C.questsDone.includes(e.id));k(`#quest`).textContent=i?`🎯 ${i.desc.pl} (+${i.reward}◉)`:`🎯 Wszystkie zlecenia wykonane!`,K()},H=k(`#menu`),U=[`dom`,`drwal`,`rybak`,`tartak`,`farma`,`mlyn`,`piekarnia`,`browar`,`magazyn`,`park`],W=`inspect`,G=null,K=()=>{if(!H.classList.contains(`open`))return;let e=x(C);H.innerHTML=``;for(let t of U){let n=b[t],r=(n.gate.settlers??0)<=e.settlers+e.citizens&&(n.gate.citizens??0)<=e.citizens,i=document.createElement(`div`);i.className=`bcard${G===t?` sel`:``}${r?``:` locked`}`,i.dataset.type=t;let a=Object.entries(n.costGoods).map(([e,t])=>`${t} ${o[e].name.pl.toLowerCase().slice(0,4)}`).join(` `),s=n.gate.citizens?`🔒 ${n.gate.citizens}🎩`:n.gate.settlers?`🔒 ${n.gate.settlers}👨‍🌾`:``;i.innerHTML=`<img src="${P(t,1)}" alt=""><div class="t">${n.name.pl}</div><div class="c">${r?`${n.costCoins}◉ ${a}`:s}</div>`,i.addEventListener(`pointerup`,()=>{if(!r){M(L.gate);return}G=G===t?null:t,J(G===null?`inspect`:`build`),K()}),H.appendChild(i)}},q=k(`#delta`),J=e=>{if(W=e,w.setEditMode(e!==`inspect`),w.clearGhost(),k(`#m-build`).classList.toggle(`on`,e===`build`||H.classList.contains(`open`)),k(`#m-road`).classList.toggle(`on`,e===`road`),k(`#m-bulldoze`).classList.toggle(`on`,e===`bulldoze`),e===`build`&&G!==null){w.setGhost(G);let e=re(G);q.textContent=`wpływ: ${Object.entries(e).map(([e,t])=>`${o[e].name.pl} ${I(t??0)}/min`).join(` · `)}`}else e===`road`?(w.setGhost(`road`),q.textContent=`przeciągnij palcem po wyspie, aby narysować drogę`):q.textContent=e===`bulldoze`?`stuknij budynek lub drogę, aby wyburzyć (zwrot 50% / 100%)`:``};k(`#m-build`).addEventListener(`pointerup`,()=>{H.classList.toggle(`open`),H.classList.contains(`open`)?(J(G===null?`inspect`:`build`),K()):(G=null,J(`inspect`))}),k(`#m-road`).addEventListener(`pointerup`,()=>{H.classList.remove(`open`),G=null,J(W===`road`?`inspect`:`road`)}),k(`#m-bulldoze`).addEventListener(`pointerup`,()=>{H.classList.remove(`open`),G=null,J(W===`bulldoze`?`inspect`:`bulldoze`)});let Y=()=>{w.rebuild(C),w.updateStatus(C),V(),T()},X=0,Z=0,Q=0,$=-1;S.addEventListener(`pointerdown`,e=>{X=e.clientX,Z=e.clientY,Q=performance.now(),$=-1}),S.addEventListener(`pointermove`,e=>{if(W===`build`&&G!==null){let t=w.tileAt(e.clientX,e.clientY,C);t&&w.moveGhost(t.col,t.row,c(C,G,t.col,t.row)===null)}else if(W===`road`&&e.buttons>0){let t=w.tileAt(e.clientX,e.clientY,C);if(t){let e=a(t.col,t.row);e!==$&&($=e,v(C,e)&&(d(C,e),Y()))}}}),S.addEventListener(`pointerup`,e=>{if(!(Math.hypot(e.clientX-X,e.clientY-Z)<10&&performance.now()-Q<350))return;let t=w.tileAt(e.clientX,e.clientY,C);if(!t)return;let n=a(t.col,t.row),r=C.tiles[n];if(r.zone!==null&&r.zone!==`S`&&!C.plots[r.zone]){se(r.zone);return}switch(W){case`build`:{if(G===null)return;let e=c(C,G,t.col,t.row);if(e!==null){M(L[e]??e);return}u(C,G,t.col,t.row),Y();break}case`road`:v(C,n)?(d(C,n),Y()):r.road||M(L.coins);break;case`bulldoze`:if(r.road)te(C,n),Y();else if(r.buildingId!==null){let e=C.buildings.find(e=>e.id===r.buildingId);e&&e.type!==`magazyn`&&(l(C,e.id),M(`Wyburzono — zwrot ${Math.floor(b[e.type].costCoins/2)}◉`),Y())}break;case`inspect`:if(r.buildingId!==null){let e=C.buildings.find(e=>e.id===r.buildingId);e&&oe(e)}}}),k(`#chips`).addEventListener(`pointerup`,e=>{let t=e.target.closest(`.chip`);if(!t)return;let n=t.dataset.good,{rows:r,net:i}=f(C,n),a=r.sort((e,t)=>t.ratePerMin-e.ratePerMin).map(e=>`<div class="line" style="color:${e.ratePerMin>=0?`#6fa85e`:`#d9534f`}">${e.label} ×${e.count} &nbsp; ${I(e.ratePerMin)}/min</div>`).join(``);B(`<h2>${o[n].name.pl} — bilans</h2>
       <div class="line" style="color:#8a8070">w magazynie: ${F(C.goods[n])} / ${F(y(C))}</div>
       ${a||`<div class="line" style="color:#8a8070">nikt nie produkuje ani nie zużywa</div>`}
       <div class="line" style="font-weight:700;color:${i>0?`#6fa85e`:i<0?`#d9534f`:`#8a8070`}">NETTO: ${I(i)}/min</div>`,[{label:`OK`}])});let oe=e=>{let t=b[e.type];if(e.type===`dom`){let t=r[e.tier],i=Object.keys(t.needs).map(t=>`<div class="line">${e.needsMet[t]===!0?`✅`:`❌`} ${o[t].name.pl}</div>`).join(``),a=[{label:`OK`,cls:`ghostbtn`}];e.tier===1&&ne(C,e.id)&&a.unshift({label:`⬆ Awansuj (${n.coins}◉ + ${n.deski} desek)`,cb:()=>{ee(C,e.id)&&(M(`Dom awansował! Mieszczanie chcą chleba i piwa…`),Y())}}),B(`<h2>${e.tier===1?`Dom Osadników`:`Dom Mieszczan`}</h2>
         <div class="line">mieszkańcy: ${e.residents}/${t.capacity}</div>${i}
         ${e.stall===`road`?`<div class="line" style="color:#d9534f">🚫 brak drogi do magazynu!</div>`:``}`,a);return}if(e.type===`magazyn`){let e=h[C.warehouseLevel+1],t=[{label:`OK`,cls:`ghostbtn`}];e&&t.unshift({label:`⬆ Rozbuduj (${e.upCoins}◉ + ${e.upDeski} desek)`,cb:()=>{p(C)?(M(`Magazyn rozbudowany! Pojemność ${e.cap}`),Y()):M(`Za mało zasobów`)}}),B(`<h2>Magazyn (poziom ${C.warehouseLevel+1})</h2>
         <div class="line">pojemność: ${h[C.warehouseLevel].cap} / dobro</div>
         <div class="line" style="color:#8a8070">wszystkie drogi prowadzą do magazynu</div>`,t);return}let i=e.stall===`road`?`🚫 Brak drogi!`:e.stall===`input`?`💤 Czeka na surowce`:e.stall===`full`?`📦 Magazyn pełny`:`✅ Pracuje`,a=[...Object.entries(t.outputs).map(([e,t])=>`<div class="line" style="color:#6fa85e">produkuje ${o[e].name.pl} +${t}/min</div>`),...Object.entries(t.inputs).map(([e,t])=>`<div class="line" style="color:#d9534f">zużywa ${o[e].name.pl} −${t}/min</div>`)].join(``);B(`<h2>${t.name.pl}</h2><div class="line" style="color:#8a8070">${t.hint.pl}</div>
       <div class="line" style="font-weight:700">${i}</div>${a}`,[{label:`🧨 Wyburz (zwrot ${Math.floor(t.costCoins/2)}◉)`,cls:`warn`,cb:()=>{l(C,e.id),Y()}},{label:`OK`,cls:`ghostbtn`}])},se=e=>{let t=i[e],n=x(C),r=n.citizens>=t.gateCitizens,a=[{label:`Jeszcze nie`,cls:`ghostbtn`}];r&&a.unshift({label:`🏝 Kup działkę (${t.costCoins}◉ + ${t.costDeski} desek)`,cb:()=>{m(C,e)?(M(`Nowa ziemia! Wyspa rośnie`),Y()):M(`Za mało zasobów`)}}),B(`<h2>${t.name.pl}</h2>
       <div class="line">cena: ${t.costCoins}◉ + ${t.costDeski} desek</div>
       <div class="line" style="color:${r?`#6fa85e`:`#e58a66`}">${r?`✅ wymagania spełnione`:`🔒 wymaga ${t.gateCitizens} mieszczan (masz ${n.citizens})`}</div>`,a)};E!==null&&E.ticks>10&&B(`<h2>Witaj z powrotem!</h2>
       <div class="line" style="color:#8a8070">Twoja wyspa pracowała ${Math.round(E.ticks*6/60)} min</div>
       <div class="line" style="font-size:20px;font-weight:700;color:#f2b33d">zebrano +${F(E.coins)}◉</div>`,[{label:`Do pracy!`}]),window.setInterval(()=>{let e=_(C);for(let t of e.questsCompleted){let e=g.find(e=>e.id===t);M(`🎯 ${e.desc.pl} — +${e.reward}◉!`)}for(let t of e.firstProduced)t!==`drewno`&&M(`Pierwsze ${o[t].name.pl}! Łańcuch działa`);w.updateStatus(C),V()},6e3),window.setInterval(T,1e4),window.addEventListener(`beforeunload`,T),V()}export{R as startIslandGame};
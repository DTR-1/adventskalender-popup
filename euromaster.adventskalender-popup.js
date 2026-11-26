(function(){
'use strict';
const URL='https://masternet.euromaster.de/content/page/6ae2f026872d5a09e358ba5d';
const factory=(Base)=>class extends Base{
renderBlock(container){
container.replaceChildren();
const date=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const preview=location.hostname==='dtr-1.github.io'&&new URLSearchParams(location.search).has('preview');
if(!preview&&(date<'2026-12-01'||date>'2026-12-24'))return;
const key='em-advent-popup-'+date;
try{if(!preview&&localStorage.getItem(key))return;}catch{}
if(document.querySelector('#em-advent-popup'))return;
const host=document.createElement('div');host.id='em-advent-popup';document.body.append(host);
const root=host.attachShadow({mode:'open'});
root.innerHTML=`<style>
:host{position:fixed;inset:0;z-index:2147483000;font-family:Montserrat,Arial,sans-serif}*{box-sizing:border-box}.back{position:absolute;inset:0;background:#07182bb3;display:grid;place-items:center;padding:18px}.panel{position:relative;overflow:hidden;width:min(490px,100%);max-height:90vh;overflow-y:auto;background:linear-gradient(155deg,#164194,#08275b);color:white;border-radius:22px;padding:48px 30px 34px;text-align:center;box-shadow:0 20px 80px #0005}.content{position:relative;z-index:1}.close{position:absolute;right:12px;top:12px;z-index:2;background:#ffffff20;color:white;border:0;border-radius:50%;width:38px;height:38px;font-size:25px;cursor:pointer}.tag{color:#fedd00;font-size:12px;font-weight:700;letter-spacing:2px}h2{font-size:clamp(28px,6vw,42px);line-height:1.1;margin:20px 0}p{font-size:16px;line-height:1.6;margin:0 0 24px}a{display:inline-block;background:#fedd00;color:#164194;font-weight:800;text-decoration:none;padding:16px 24px;border-radius:9px}.snow{position:absolute;inset:0;overflow:hidden;pointer-events:none}.flake{position:absolute;top:-30px;color:white;animation:fall linear infinite;opacity:.65}@keyframes fall{to{transform:translate(35px,650px) rotate(180deg)}}@media(prefers-reduced-motion:reduce){.flake{animation:none;top:var(--y)}}
</style><div class="back"><section class="panel" role="dialog" aria-modal="true" aria-labelledby="advent-title"><div class="snow" aria-hidden="true"></div><button class="close" aria-label="Schließen">×</button><div class="content"><div style="font-size:42px" aria-hidden="true">❄</div><div class="tag">1.–24. DEZEMBER 2026</div><h2 id="advent-title">24 Türchen.<br>24 Gewinnchancen.</h2><p>Unser Masternet-Adventskalender ist da! Öffne jeden Tag ein neues Türchen und sichere dir die Chance auf tolle Gewinne.</p><a href="${URL}">Zum Adventskalender →</a></div></section></div>`;
const snow=root.querySelector('.snow');for(let i=0;i<38;i++){const f=document.createElement('span');f.className='flake';f.textContent=i%3?'•':'❄';f.style.cssText='left:'+Math.random()*100+'%;font-size:'+(7+Math.random()*15)+'px;animation-duration:'+(5+Math.random()*8)+'s;animation-delay:-'+Math.random()*12+'s;--y:'+Math.random()*100+'%';snow.append(f);}
const previous=document.activeElement;const close=()=>{try{if(!preview)localStorage.setItem(key,'1');}catch{}host.remove();document.removeEventListener('keydown',keyboard);previous?.focus?.();};
const keyboard=e=>{if(e.key==='Escape')close();if(e.key==='Tab'){const items=[root.querySelector('button'),root.querySelector('a')];e.preventDefault();items[root.activeElement===items[0]?1:0].focus();}};
root.querySelector('button').onclick=close;root.querySelector('a').addEventListener('click',close);root.querySelector('.back').onclick=e=>{if(e.target===root.querySelector('.back'))close();};document.addEventListener('keydown',keyboard);root.querySelector('button').focus();
}
};
window.defineBlock({blockDefinition:{name:'euromaster-advent-popup',label:'EUROMASTER Adventskalender Popup',factory,attributes:[],blockLevel:'block',configurationSchema:{type:'object',properties:{}},uiSchema:{}},author:'EUROMASTER',version:'1.0.0'});
})();
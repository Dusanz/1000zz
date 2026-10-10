import {categories, lessons} from './content.mjs';
const $ = id => document.getElementById(id);
let category = 'Sve';
function render() {
 const term = $('search').value.trim().toLocaleLowerCase('sr');
 $('cards').replaceChildren();
 const filtered = lessons.filter(l => (category === 'Sve' || l.category === category) && (l.title+' '+l.answer).toLocaleLowerCase('sr').includes(term));
 for (const lesson of filtered) {
  const button = document.createElement('button');
  button.className = 'card';
  const icon = document.createElement('span'); icon.className='icon'; icon.textContent=lesson.icon;
  const tag = document.createElement('small'); tag.textContent=lesson.category;
  const title = document.createElement('h2'); title.textContent=lesson.title;
  const link = document.createElement('span'); link.textContent='Otkrij odgovor ↗';
  button.append(icon,tag,title,link); button.onclick=()=>openLesson(lesson);
  $('cards').append(button);
 }
 if (!filtered.length) { const p=document.createElement('p'); p.textContent='Nema pitanja za ovu pretragu. Probaj drugu reč ili kategoriju.'; $('cards').append(p); }
}
function openLesson(lesson) {
 $('lesson-category').textContent=lesson.category;
 $('lesson-title').textContent=lesson.title;
 $('answer').textContent=lesson.answer;
 $('animation').hidden=lesson.animation!=='water-cycle';
 $('animation').classList.remove('paused');
 $('motion').textContent='Pauziraj animaciju';
 $('quiz-question').textContent=lesson.quiz.question;
 $('feedback').textContent='';
 $('options').replaceChildren();
 lesson.quiz.options.forEach((option,index)=>{
  const button=document.createElement('button'); button.textContent=option;
  button.onclick=()=>{
   const correct=index===lesson.quiz.correct;
   $('feedback').textContent=correct?'Tačno! Sjajno otkriće.':'Probaj ponovo — odgovor se krije u objašnjenju.';
   if(correct) for(const b of $('options').children) b.disabled=true;
  };
  $('options').append(button);
 });
 $('lesson').showModal();
}
for(const name of categories) {
 const button=document.createElement('button'); button.textContent=name;
 button.setAttribute('aria-pressed',String(name===category));
 button.onclick=()=>{category=name; for(const b of $('categories').children)b.setAttribute('aria-pressed',String(b===button)); render();};
 $('categories').append(button);
}
$('search').addEventListener('input',render);
$('close').onclick=()=>$('lesson').close();
$('motion').onclick=()=>{const paused=$('animation').classList.toggle('paused');$('motion').textContent=paused?'Pokreni animaciju':'Pauziraj animaciju';};
render();

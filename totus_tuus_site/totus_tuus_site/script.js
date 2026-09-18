const mysteries={
  gozosos:[['1º Mistério','Anunciação do Anjo a Maria','Lc 1,26-38'],['2º Mistério','Visitação de Maria a Isabel','Lc 1,39-56'],['3º Mistério','Nascimento de Jesus','Lc 2,1-20'],['4º Mistério','Apresentação do Menino Jesus','Lc 2,22-40'],['5º Mistério','Encontro de Jesus no Templo','Lc 2,41-52']],
  luminosos:[['1º Mistério','Batismo de Jesus no Jordão','Mt 3,13-17'],['2º Mistério','Bodas de Caná','Jo 2,1-11'],['3º Mistério','Anúncio do Reino e convite à conversão','Mc 1,14-15'],['4º Mistério','Transfiguração de Jesus','Mt 17,1-8'],['5º Mistério','Instituição da Eucaristia','Lc 22,14-20']],
  dolorosos:[['1º Mistério','Agonia de Jesus no Horto','Lc 22,39-46'],['2º Mistério','Flagelação de Jesus','Jo 19,1'],['3º Mistério','Coroação de espinhos','Mt 27,27-31'],['4º Mistério','Jesus carrega a Cruz','Lc 23,26-32'],['5º Mistério','Crucificação e morte de Jesus','Jo 19,25-30']],
  gloriosos:[['1º Mistério','Ressurreição de Jesus','Mt 28,1-10'],['2º Mistério','Ascensão de Jesus','At 1,6-11'],['3º Mistério','Vinda do Espírito Santo','At 2,1-11'],['4º Mistério','Assunção de Maria','Tradição da Igreja'],['5º Mistério','Coroação de Maria','Ap 12,1; tradição da Igreja']]
};
function renderMysteries(key){const root=document.getElementById('mystery-content');root.innerHTML=mysteries[key].map(m=>`<article class="mystery-item"><span>${m[0]}</span><h4>${m[1]}</h4><p>${m[2]}</p></article>`).join('')}
renderMysteries('gozosos');
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderMysteries(btn.dataset.set)}));

document.querySelector('.menu-btn').addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));

const saintData={
  '01-01':['Santa Maria, Mãe de Deus','No primeiro dia do ano, a Igreja celebra Maria no mistério de sua maternidade divina, contemplando-a como Mãe de Jesus Cristo, verdadeiro Deus e verdadeiro homem.'],
  '01-25':['Conversão de São Paulo','A festa recorda a transformação de Saulo, perseguidor dos cristãos, após seu encontro com Cristo no caminho de Damasco.'],
  '02-11':['Nossa Senhora de Lourdes','A memória recorda as aparições marianas a Santa Bernadette Soubirous em Lourdes, na França, em 1858.'],
  '03-19':['São José','Esposo da Virgem Maria e pai adotivo de Jesus. A tradição o venera como homem justo, silencioso e fiel à missão recebida de Deus.'],
  '03-25':['Anunciação do Senhor','Celebra o anúncio do anjo Gabriel a Maria e o seu “sim” ao plano de Deus, no mistério da Encarnação.'],
  '04-28':['São Luís Maria Grignion de Montfort','Sacerdote francês e grande propagador da devoção mariana. Sua espiritualidade destaca a consagração total a Jesus Cristo pelas mãos de Maria.'],
  '05-13':['Nossa Senhora de Fátima','Memória das aparições de Nossa Senhora aos três pastorinhos em Fátima, Portugal, a partir de 13 de maio de 1917.'],
  '06-13':['Santo Antônio de Pádua','Franciscano, pregador e Doutor da Igreja, conhecido por seu ensino da fé e cuidado com os pobres.'],
  '06-24':['Natividade de São João Batista','Celebra o nascimento daquele que preparou o caminho do Senhor e anunciou a chegada do Messias.'],
  '06-29':['São Pedro e São Paulo','A Igreja celebra conjuntamente os apóstolos Pedro e Paulo, colunas fundamentais da missão e do testemunho cristão.'],
  '07-16':['Nossa Senhora do Carmo','Memória mariana ligada à espiritualidade carmelita e à devoção do escapulário.'],
  '07-26':['São Joaquim e Santa Ana','Segundo a tradição cristã, são os pais da Virgem Maria e avós de Jesus.'],
  '08-15':['Assunção de Nossa Senhora','Celebra Maria elevada à glória celeste em corpo e alma ao término de sua vida terrena.'],
  '09-14':['Exaltação da Santa Cruz','Celebra a Cruz de Cristo como sinal da redenção e da vitória pascal.'],
  '09-29':['São Miguel, São Gabriel e São Rafael','Festa dos santos arcanjos mencionados nas Escrituras, servidores da missão de Deus.'],
  '10-01':['Santa Teresinha do Menino Jesus','Carmelita e Doutora da Igreja, conhecida pela “pequena via” de confiança e abandono em Deus.'],
  '10-07':['Nossa Senhora do Rosário','Memória mariana dedicada de modo especial à oração do Santo Rosário.'],
  '11-01':['Todos os Santos','Solenidade que celebra todos os santos, conhecidos e desconhecidos, que vivem na comunhão com Deus.'],
  '11-02':['Comemoração dos Fiéis Defuntos','Dia dedicado à oração pelos fiéis falecidos.'],
  '11-21':['Apresentação de Nossa Senhora','Memória litúrgica que recorda a entrega de Maria a Deus, segundo antiga tradição cristã.'],
  '12-08':['Imaculada Conceição','Celebra a preservação de Maria do pecado original, por singular graça de Deus, em vista dos méritos de Cristo.'],
  '12-12':['Nossa Senhora de Guadalupe','Celebra a devoção ligada às aparições marianas a São Juan Diego, no México, em 1531.'],
  '12-25':['Natividade do Senhor','Celebra o nascimento de Jesus Cristo, o Verbo de Deus feito carne.']
};
const monthNames=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
let current=new Date(); current.setDate(1);
function keyFor(m,d){return `${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`}
function showSaint(m,d){const key=keyFor(m,d),data=saintData[key];document.getElementById('saintDate').textContent=`${d} de ${monthNames[m]}`;document.getElementById('saintName').textContent=data?data[0]:'Santos desta data';document.getElementById('saintStory').textContent=data?data[1]:'Há diferentes santos e beatos lembrados em cada data. Consulte a referência do Vatican News para ver os nomes e histórias correspondentes.';document.getElementById('vaticanLink').href=`https://www.vaticannews.va/en/saints/${String(m+1).padStart(2,'0')}/${String(d).padStart(2,'0')}.html`}
function renderCalendar(){const y=current.getFullYear(),m=current.getMonth();document.getElementById('monthTitle').textContent=`${monthNames[m]} ${y}`;const grid=document.getElementById('calendarGrid');grid.innerHTML='';const first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate(),today=new Date();for(let i=0;i<first;i++){const el=document.createElement('div');el.className='day blank';grid.appendChild(el)}for(let d=1;d<=days;d++){const el=document.createElement('button');el.className='day';el.textContent=d;if(saintData[keyFor(m,d)])el.classList.add('has-saint');if(today.getFullYear()===y&&today.getMonth()===m&&today.getDate()===d)el.classList.add('today');el.addEventListener('click',()=>showSaint(m,d));grid.appendChild(el)}}
document.getElementById('prevMonth').addEventListener('click',()=>{current.setMonth(current.getMonth()-1);renderCalendar()});document.getElementById('nextMonth').addEventListener('click',()=>{current.setMonth(current.getMonth()+1);renderCalendar()});renderCalendar();const now=new Date();showSaint(now.getMonth(),now.getDate());

const progressKey='totusTuus33';let done=JSON.parse(localStorage.getItem(progressKey)||'[]');const daysGrid=document.getElementById('daysGrid');function renderDays(){daysGrid.innerHTML='';for(let i=1;i<=33;i++){const b=document.createElement('button');b.className='day-check'+(done.includes(i)?' done':'');b.textContent=i;b.title=`Dia ${i}`;b.addEventListener('click',()=>{done=done.includes(i)?done.filter(n=>n!==i):[...done,i].sort((a,b)=>a-b);localStorage.setItem(progressKey,JSON.stringify(done));renderDays()});daysGrid.appendChild(b)}const pct=Math.round(done.length/33*100);document.getElementById('progressBar').style.width=pct+'%';document.getElementById('progressText').textContent=`${done.length} de 33 dias concluídos — ${pct}%`}
renderDays();document.getElementById('resetProgress').addEventListener('click',()=>{done=[];localStorage.removeItem(progressKey);renderDays()});

const prayers=[
['Sinal da Cruz','Em nome do Pai, do Filho e do Espírito Santo. Amém.'],
['Pai-Nosso','Pai nosso que estais nos céus, santificado seja o vosso nome; venha a nós o vosso Reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.'],
['Ave-Maria','Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.'],
['Glória ao Pai','Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.'],
['Oração de Fátima','Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o Céu e socorrei principalmente as que mais precisarem.'],
['Salve-Rainha','Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E, depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.'],
['Creio','Creio em Deus Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.']
];
const prayerRoot=document.getElementById('prayers');prayerRoot.innerHTML=prayers.map((p,i)=>`<article class="prayer"><button type="button">${p[0]} <span>+</span></button><div>${p[1]}</div></article>`).join('');document.querySelectorAll('.prayer button').forEach(b=>b.addEventListener('click',()=>{const p=b.parentElement;p.classList.toggle('open');b.querySelector('span').textContent=p.classList.contains('open')?'−':'+'}));

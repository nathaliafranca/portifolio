const cases={
 enterprise:{number:'CASE 01 / ENTERPRISE AI',category:'AGENT DEVELOPMENT · PRODUCTION',title:'From rule-based to <em>generative.</em>',intro:'A production AI agent combining generative capabilities, knowledge retrieval and API-enabled self-service in an existing conversational channel.',sections:[['The context','An enterprise conversational channel originally relied on deterministic flows. The initiative introduced a generative AI agent while maintaining the need for reliable guidance, self-service and continuous operational improvement.'],['My contribution','I designed and configured the agent in an internal development environment, defining its behavior, prompts, persona, communication guidelines, knowledge-base usage, API-connected tools, conversational journeys, and analytics instrumentation.'],['Working in production','The agent is live and continuously refined. I analyze conversation logs, client reports, user feedback and resolution metrics to identify friction, propose improvements and explore new journeys with the project team and client.'],['What this demonstrates','Design and configuration of production AI agents, connecting conversational architecture, API-enabled tools, RAG-based knowledge retrieval and data-informed refinement.']],outcome:'Production deployment and continuous iteration are confirmed. No confidential client metrics or implementation details are disclosed.',roles:['Generative AI','Prompt Engineering','Tool Configuration','Conversational Architecture','Knowledge Bases & RAG','Data & Metrics']},
 guidance:{number:'CASE 02 / AI EXPERIENCE',category:'CONVERSATIONAL UX · IMPROVEMENT',title:'From static guides to <em>adaptive assistance.</em>',intro:'Making complex instructions easier to follow by changing how an AI agent supports people, one step at a time.',sections:[['The friction','Users asking for help with operational tasks were being directed to complete PDF guides. The volume of information made it harder to act on the instructions, and users frequently sought human assistance.'],['The insight','The content itself was not necessarily missing. The problem was the delivery: users with different needs were receiving the same information-heavy response, regardless of where they were stuck.'],['My contribution','Working with the client and internal team, I helped identify the issue, proposed the new direction, redesigned the journey and instructional content, implemented the changes in the agent and presented the solution.'],['The experience','Guidance became progressive and flexible: short steps, contextual images, clarification or repetition when needed, and a check-in before advancing. Users who wanted broader material could still request it.'],['Observed results','Operational reporting and qualitative feedback indicated fewer requests for human handoff, greater retention within the agent and improved user evaluations for the affected journeys. The improvements were observed in reporting and feedback, without isolating every contributing factor.']],outcome:'Observed directional improvement in handoff requests, retention and experience ratings, supported by reports and client feedback.',roles:['User Research','Conversational UX','AI Optimization','Journey Design','Implementation','Experience Analytics']},
 evaluation:{number:'CASE 03 / AI PRODUCT TOOLING',category:'PRODUCT DESIGN · AI QUALITY',title:'Making AI evaluation <em>more usable.</em>',intro:'Collaborating on internal tooling that helps teams evaluate text and voice agents with less dependence on repetitive manual testing.',sections:[['The challenge','Testing conversational agents across many scenarios, personas and voice conditions takes substantial manual effort. Teams needed a more accessible way to configure evaluations and interpret results.'],['My contribution','I collaborated in discovery and solution definition, worked on experience and interface design, helped shape reporting views and simulated user personas, and used AI-assisted prototyping to explore interactions. The tool was built collaboratively, not by me alone.'],['The solution direction','A tool-supported workflow for configuring simulations, exploring different conversational behaviors, and reviewing test outcomes. The experience brings together simulation setup, configurable personas and analysis of test results.'],['Operational outcome','The internal solution was adopted by the team, moving work from manual execution toward automated testing and making the evaluation workflow more efficient. The result was a more efficient evaluation process adopted in the team’s workflow.']],outcome:'Internal team adoption and a more efficient testing workflow were reported; no quantitative performance figures are shared.',roles:['AI Product Design','Discovery','Prototyping','UX/UI','Evaluation Workflows','Collaboration']}
};

const translationsPt = {
  "intelligence": "inteligência",
  "THINK / BUILD": "PENSAR / CRIAR",
  "ITERATE ↗": "EVOLUIR ↗",
  "SCROLL TO DISCOVER": "ROLE PARA EXPLORAR",
  "Explore case": "Explorar projeto",
  "Great. Here's the next step": "Ótimo! Aqui está o próximo passo",
  "Professional cases are anonymized. Proprietary product names, interfaces, implementation details and confidential metrics are intentionally excluded. Visuals are conceptual.": "Os projetos profissionais foram anonimizados. Nomes de produtos internos, interfaces, detalhes técnicos e métricas confidenciais foram omitidos. As ilustrações são conceituais.",
  "More about my journey ↗": "Conheça minha trajetória ↗",
  "READ ARTICLE ↗": "LER ARTIGO ↗",
  "More writing on Medium ↗": "Mais artigos no Medium ↗",
  "Start a conversation": "Vamos conversar",
  "EMAIL ↗": "E-MAIL ↗",
  "BACK TO TOP ↑": "VOLTAR AO TOPO ↑",
  
  "CLOSE": "FECHAR",
  "Close case ↗": "Fechar projeto ↗",
  "Skip to content": "Pular para o conteúdo",
  "Work": "Projetos",
  "SELECTED COLLABORATIONS": "EMPRESAS COM AS QUAIS COLABOREI",
  "Approach": "Método",
  "About": "Sobre",
  "Writing": "Artigos",
  "Contact": "Contato",
  "Let's talk": "Vamos conversar",
  "GENERATIVE AI · AGENT DESIGN · SOLUTIONS": "IA GENERATIVA · AGENTES · SOLUÇÕES",
  "PORTFOLIO / 2026": "PORTFÓLIO / 2026",
  "HI, I'M NATHÁLIA FRANÇA": "OI, EU SOU A NATHÁLIA FRANÇA",
  "Designing": "Projetando",
  "intelligence.": "inteligência.",
  "Building ": "Criando ",
  "experiences.": "experiências.",
  "I design, develop, and continuously improve AI agents — combining hands-on technical execution, conversational experience, and product thinking to make intelligent systems genuinely useful.": "Eu projeto, desenvolvo e aprimoro continuamente agentes de IA — combinando execução técnica, experiência conversacional e visão de produto para tornar sistemas inteligentes genuinamente úteis.",
  "EXPLORE MY WORK": "EXPLORAR PROJETOS",
  "BASED IN BRAZIL · WORKING ACROSS DISCIPLINES": "NO BRASIL · CONECTANDO DIFERENTES ÁREAS",
  "SCROLL TO DISCOVER ": "ROLE PARA EXPLORAR ",
  "01 / THE POINT OF VIEW": "01 / MINHA VISÃO",
  "Great AI isn't just about what a model ": "Uma boa IA não é apenas sobre o que um modelo ",
  "can": "consegue",
  " do.": " fazer.",
  "It's about what people can ": "É sobre o que as pessoas conseguem ",
  "actually accomplish": "realmente realizar",
  " with it.": " com ela.",
  "02 / FEATURED WORK": "02 / PROJETOS EM DESTAQUE",
  "Selected ": "Projetos ",
  "work.": "selecionados.",
  "Real problems. Thoughtful solutions.": "Problemas reais. Soluções bem pensadas.",
  "Impact beyond the interface.": "Impacto além da interface.",
  "01 / AI AGENT DEVELOPMENT": "01 / DESENVOLVIMENTO DE AGENTES",
  "RAG": "RAG",
  "API TOOLS": "FERRAMENTAS · APIs",
  "RAG · KNOWLEDGE BASES": "RAG · BASES DE CONHECIMENTO",
  "CONVERSATIONAL UX": "UX CONVERSACIONAL",
  "USER JOURNEYS": "JORNADAS DO USUÁRIO",
  "AGENT DEVELOPMENT": "DESENVOLVIMENTO DE AGENTES",
  "AI SOLUTIONS": "SOLUÇÕES DE IA",
  "From rule-based": "De regras fixas",
  "to ": "à ",
  "generative.": "IA generativa.",
  "Developing a production AI agent with RAG-based knowledge retrieval, API-connected tools and ongoing refinement.": "Desenvolvimento de um agente de IA em produção, com bases de conhecimento (RAG), ferramentas conectadas a APIs e melhoria contínua.",
  "Explore case ": "Explorar case ",
  "02 / CONVERSATIONAL UX": "02 / UX CONVERSACIONAL",
  "ASSISTANT": "ASSISTENTE",
  "Let's take it one step at a time.": "Vamos por partes, uma etapa por vez.",
  "Done! What's next?": "Pronto! E agora?",
  "Great. Here's the next step ": "Ótimo! Aqui vai o próximo passo ",
  "UX FOR AI": "UX PARA IA",
  "OPTIMIZATION": "OTIMIZAÇÃO",
  "Guidance that": "Orientação que",
  "adapts.": "se adapta.",
  "Turning overwhelming PDF instructions into responsive, step-by-step assistance — and improving the experience along the way.": "Transformando PDFs extensos em orientação passo a passo, flexível e adaptada à necessidade de cada usuário.",
  "03 / INTERNAL AI TOOLING": "03 / FERRAMENTAS INTERNAS DE IA",
  "SIMULATION / CONCEPTUAL": "SIMULAÇÃO / CONCEITUAL",
  "AI PRODUCT DESIGN": "DESIGN DE PRODUTOS DE IA",
  "QUALITY": "QUALIDADE",
  "Making AI": "Tornando a IA",
  "testable.": "testável.",
  "Helping design collaborative internal tooling that makes conversational AI evaluation more efficient and accessible to teams.": "Colaboração no design de ferramentas internas para tornar a avaliação de agentes conversacionais mais eficiente e acessível aos times.",
  " Professional cases are anonymized. Proprietary product names, interfaces, implementation details and confidential metrics are intentionally excluded. Visuals are conceptual.": " Os cases profissionais são anônimos. Nomes de produtos internos, interfaces, detalhes de implementação e métricas confidenciais foram omitidos. As imagens são conceituais.",
  "03 / HOW I THINK & WORK": "03 / COMO PENSO E TRABALHO",
  "Beyond the ": "Além do ",
  "launch.": "lançamento.",
  "Going live is only the beginning.": "Entrar em produção é só o começo.",
  "Real interactions show us what to improve.": "As interações reais mostram onde podemos melhorar.",
  "Build.": "Construir.",
  "Observe.": "Observar.",
  "Learn.": "Aprender.",
  "Evolve.": "Evoluir.",
  "Define agent behavior, user journeys, knowledge-base retrieval, tools and integrations.": "Definir comportamento do agente, jornadas, recuperação de informações em bases de conhecimento, ferramentas e integrações.",
  "Study real conversations, operational reports, satisfaction signals and resolution patterns.": "Analisar conversas reais, relatórios operacionais, satisfação e indicadores de resolução.",
  "Find friction, uncover unmet needs, and frame opportunities with the client and team.": "Identificar fricções, necessidades não atendidas e oportunidades junto ao cliente e à equipe.",
  "Align priorities, implement improvements, and keep refining what works for people.": "Alinhar prioridades, implementar melhorias e aprimorar continuamente a experiência.",
  "04 / ABOUT ME": "04 / SOBRE MIM",
  "A bridge between ": "Uma ponte entre ",
  "what's possible": "o que é possível",
  " and what's useful.": " e o que é útil.",
  "I'm Nathália, a generative AI specialist with a background in conversational design and hands-on experience building and improving AI agents in production.": "Sou a Nathália, especialista em IA generativa, com experiência em design conversacional e atuação prática na construção e evolução de agentes de IA em produção.",
  "My work sits where technology, experience, and product decisions meet. I move between designing how an agent should behave, configuring how it works, investigating what goes wrong, and evolving it with real-world evidence.": "Meu trabalho acontece no encontro entre tecnologia, experiência e decisões de produto. Defino como um agente deve se comportar, configuro seu funcionamento, investigo problemas e evoluo a solução a partir de evidências reais.",
  "More about my journey ": "Conheça minha trajetória ",
  "EXPERIENCE / JOURNEY": "EXPERIÊNCIA / TRAJETÓRIA",
  "2025 — NOW": "2025 — ATUAL",
  "AI Specialist & Prompt Engineer": "Especialista em IA e Engenharia de Prompts",
  "Mutant · AI agents, prompts, integrations, evaluation & continuous improvement": "Mutant · Agentes de IA, prompts, integrações, avaliação e melhoria contínua",
  "2024 — 2025": "2024 — 2025",
  "Conversation Designer": "Designer Conversacional",
  "Hi Platform · Conversational experiences & digital journeys": "Hi Platform · Experiências conversacionais e jornadas digitais",
  "IT Analyst": "Analista de TI",
  "Cabonnet · Technology, operations & problem solving": "Cabonnet · Tecnologia, operações e resolução de problemas",
  "EARLIER": "ANTERIOR",
  "Customer Support Lead": "Liderança em Atendimento ao Cliente",
  "Customer experience, service operations & team collaboration": "Experiência do cliente, operações de atendimento e colaboração entre equipes",
  "EDUCATION": "FORMAÇÃO",
  "IN PROGRESS": "EM ANDAMENTO",
  "Software Engineering": "Engenharia de Software",
  "Discover.": "Investigar.",
  "Explore the existing experience, understand user needs and business goals, and decide what is worth building.": "Analisar a experiência atual, compreender necessidades dos usuários e objetivos do negócio e definir o que faz sentido desenvolver.",
  "Bachelor's studies · Anhanguera": "Graduação · Anhanguera",
  "CONVERSATIONAL AI": "IA CONVERSACIONAL",
  "PROMPT ENGINEERING": "ENGENHARIA DE PROMPTS",
  "TOOL & API INTEGRATION": "INTEGRAÇÃO DE FERRAMENTAS E APIs",
  "AI EXPERIENCE": "EXPERIÊNCIA COM IA",
  "EVALUATION & QUALITY": "AVALIAÇÃO E QUALIDADE",
  "KNOWLEDGE SYSTEMS": "BASES DE CONHECIMENTO E RAG",
  "05 / SELECTED COLLABORATIONS": "05 / COLABORAÇÕES PROFISSIONAIS",
  "Work that": "Projetos que",
  "crosses ": "cruzam ",
  "contexts.": "contextos.",
  "Professional contributions to AI agents and conversational experiences across client projects and multidisciplinary teams.": "Contribuições para projetos de agentes de IA e experiências conversacionais, em colaboração com clientes e equipes multidisciplinares.",
  "CLIENT NAMES OMITTED FOR CONFIDENTIALITY": "NOMES DOS CLIENTES OMITIDOS POR CONFIDENCIALIDADE",
    "05 / IDEAS & WRITING": "05 / IDEIAS E ARTIGOS",
  "Thinking ": "Pensando ",
  "out loud.": "em voz alta.",
  "Ideas about AI, digital experiences and the way technology changes how we think and interact.": "Ideias sobre IA, experiências digitais e como a tecnologia transforma nossa maneira de pensar e interagir.",
  "FEATURED ARTICLE / AX": "ARTIGO EM DESTAQUE / AX",
  "AI EXPERIENCE · COGNITIVE FRICTION": "EXPERIÊNCIA COM IA · FRICÇÃO COGNITIVA",
  "An exploration of AI experiences, cognitive effort and the design of lower-friction interactions.": "Uma reflexão sobre experiências com IA, esforço cognitivo e como projetar interações com menos fricção.",
  "READ ARTICLE ": "LER ARTIGO ",
  "MORE THAN BUILDING": "ALÉM DE CONSTRUIR",
  "Exploring the ": "Explorando o ",
  "why": "porquê",
  " behind the work.": " por trás do trabalho.",
  "Writing helps me connect AI development, user behavior and product decisions, and reflect on their impact beyond individual features.": "Escrever me ajuda a conectar desenvolvimento de IA, comportamento dos usuários e decisões de produto, refletindo sobre seu impacto para além das funcionalidades.",
  "More writing on Medium ": "Mais artigos no Medium ",
  "06 / THE NEXT CONVERSATION": "06 / CONTATO",
  "06 / THE NEXT CONVERSATION": "06 / CONTATO",
  "GOT SOMETHING INTERESTING IN MIND?": "TEM ALGUMA IDEIA INTERESSANTE?",
  "Let's make AI": "Vamos fazer a IA",
  "mean something.": "ter significado.",
  "Start a conversation ": "Vamos conversar ",
  "EMAIL ": "E-MAIL ",
  "BACK TO TOP ": "VOLTAR AO TOPO ",
  
  "AI · DESIGN · EXPERIENCE ✳": "IA · DESIGN · EXPERIÊNCIA ✳",
  "CASE STUDY": "CASE PROFISSIONAL",
  "CLOSE ": "FECHAR ",
  "SELECTED WORK / NATHÁLIA FRANÇA": "PROJETOS / NATHÁLIA FRANÇA",
  "Close case ": "Fechar case "
};
const translatedAttributes = {
 'Main navigation':'Navegação principal', 'Select language':'Selecionar idioma','Toggle menu':'Abrir ou fechar menu',
 'Nathália França, back to top':'Nathália França, voltar ao início', 'Explore selected work':'Explorar projetos',
 'Read case study: Building an Enterprise AI Agent':'Ler case: agente corporativo de IA',
 'Read case study: From static guides to adaptive AI guidance':'Ler case: orientação adaptativa',
 'Read case study: Designing AI evaluation workflows':'Ler case: avaliação de agentes de IA',
 'Professional point of view':'Minha visão profissional', 'Close case study':'Fechar case profissional'
};
const translatedCasesPt={
 enterprise:{number:'CASE 01 / IA CORPORATIVA',category:'DESENVOLVIMENTO DE AGENTES · PRODUÇÃO',title:'De fluxos determinísticos à <em>IA generativa.</em>',intro:'Desenvolvimento de um agente de IA generativa em produção, com recuperação de informações em bases de conhecimento e funcionalidades de autosserviço conectadas a APIs.',sections:[['O contexto','Um canal conversacional corporativo utilizava fluxos determinísticos. A iniciativa incorporou um agente de IA generativa, mantendo a necessidade de orientação confiável, autosserviço e evolução operacional contínua.'],['Minha contribuição','Projetei e configurei o agente em uma plataforma interna de desenvolvimento. Minha atuação incluiu arquitetura conversacional, instruções e prompts, persona, regras de comunicação, bases de conhecimento, ferramentas conectadas a APIs, jornadas e estruturação de dados e métricas das interações.'],['Evolução em produção','Com o agente em produção, acompanho logs, relatórios operacionais, avaliações dos usuários e indicadores de resolução. A partir dessas análises, identifico pontos de melhoria e discuto com o cliente e a equipe a evolução das jornadas.'],['O que o projeto demonstra','Construção e evolução de agentes em produção, combinando arquitetura conversacional, ferramentas integradas a APIs, recuperação de informações em bases de conhecimento (RAG) e análise de dados.']],outcome:'A implantação em produção e a evolução contínua estão confirmadas. Métricas confidenciais e detalhes internos não são divulgados.',roles:['IA generativa','Engenharia de prompts','Ferramentas e APIs','Arquitetura conversacional','Bases de conhecimento / RAG','Dados e métricas']},
 guidance:{number:'CASE 02 / EXPERIÊNCIA COM IA',category:'UX CONVERSACIONAL · MELHORIA',title:'De guias estáticos à <em>orientação adaptativa.</em>',intro:'Facilitando instruções complexas com uma experiência que ajuda as pessoas a avançar, uma etapa por vez.',sections:[['O problema','Ao pedir ajuda para determinadas tarefas, usuários recebiam guias completos em PDF. O volume de informação dificultava a execução e frequentemente levava a pedidos de atendimento humano.'],['A descoberta','O conteúdo não estava necessariamente ausente: o problema era sua apresentação. Pessoas com necessidades diferentes recebiam a mesma resposta extensa, independentemente de onde estivessem com dificuldade.'],['Minha contribuição','Em colaboração com o cliente e a equipe, participei da identificação do problema, propus uma nova abordagem, redesenhei jornada e conteúdo, implementei as mudanças no agente e apresentei a solução.'],['A nova experiência','A orientação passou a ser progressiva e flexível: passos curtos, imagens contextuais, repetição quando necessária e confirmação antes de avançar. Quem desejasse o material completo ainda poderia solicitá-lo.'],['Resultados observados','Relatórios operacionais e feedbacks qualitativos indicaram redução dos pedidos de transferência para atendimento humano, maior retenção no agente e melhores avaliações das jornadas afetadas. Os resultados foram acompanhados em relatórios e feedbacks, embora não seja possível isolar todos os fatores que contribuíram para essa evolução.']],outcome:'Melhoras observadas na transferência, retenção e avaliação da experiência, sustentadas por relatórios e feedback do cliente.',roles:['Pesquisa com Usuários','UX Conversacional','Otimização de IA','Design de Jornada','Implementação','Análise de Experiência']},
 evaluation:{number:'CASE 03 / FERRAMENTAS DE IA',category:'DESIGN DE PRODUTO · QUALIDADE EM IA',title:'Tornando a avaliação de IA <em>mais acessível.</em>',intro:'Colaboração em ferramentas internas para avaliar agentes de texto e voz com menos dependência de testes manuais repetitivos.',sections:[['O desafio','Testar agentes conversacionais em diferentes cenários, personas e condições de voz exige esforço manual considerável. As equipes precisavam de uma forma mais simples de configurar avaliações e entender os resultados.'],['Minha contribuição','Participei da descoberta e da definição da solução, trabalhei no design de experiências e interfaces, ajudei a estruturar visualizações de resultados e personas simuladas e utilizei prototipação assistida por IA. A ferramenta foi desenvolvida colaborativamente, não apenas por mim.'],['Direção da solução','Um fluxo apoiado por ferramentas para configurar simulações, explorar diferentes comportamentos conversacionais e analisar os resultados. A experiência reúne configuração de simulações, personas ajustáveis e análise dos resultados dos testes.'],['Resultado operacional','A solução interna passou a ser utilizada pela equipe, substituindo parte do trabalho manual por testes automatizados e tornando o processo de avaliação mais eficiente. A mudança tornou as avaliações mais eficientes e passou a integrar o fluxo de trabalho da equipe.']],outcome:'Adoção interna e maior eficiência nos testes relatadas, sem divulgação de indicadores quantitativos.',roles:['Design de Produtos de IA','Discovery','Prototipação','UX/UI','Fluxos de Avaliação','Colaboração']}
};
// Full, editorial translations for headings that contain styled inline elements.
// Translating child text nodes separately caused English/Portuguese fragments to mix.
const editorialHeadings = [
  ['#hero-title',
   'Designing<br><em>intelligence.</em><br>Building <span class="outline-word">experiences.</span>',
   'Projetando<br><em>inteligência.</em><br>Criando <span class="outline-word">experiências.</span>'],
  ['.manifesto-text',
   "Great AI isn't just about what a model <i>can</i> do.<br>It's about what people can <span>actually accomplish</span> with it.",
   'Uma boa IA vai além do que um modelo <i>é capaz de fazer.</i><br>O que importa é o que as pessoas <span>conseguem realizar</span> com ela.'],
  ['#work-title', 'Selected <em>work.</em>', 'Projetos em <em>destaque.</em>'],
  ['#clients-heading', "Companies I've <em>worked with.</em>", 'Empresas com as quais <em>colaborei.</em>'],
  ['.card-agent h3', 'From rule-based<br>to <em>generative.</em>', 'De fluxos predefinidos<br>à <em>IA generativa.</em>'],
  ['.card-guidance h3', 'Guidance that<br><em>adapts.</em>', 'Orientação que<br><em>se adapta.</em>'],
  ['.card-evaluation h3', 'Making AI<br><em>testable.</em>', 'Testar IA com<br><em>mais eficiência.</em>'],
  ['#approach-title', 'Beyond the <em>launch.</em>', 'Muito além do <em>lançamento.</em>'],
  ['#about-title', "A bridge between <em>what's possible</em> and what's useful.", 'Uma ponte entre <em>o que é possível</em> e o que é útil.'],
    ['#writing-title', 'Thinking <em>out loud.</em>', 'Ideias que <em>ganham voz.</em>'],
  ['.writing-aside h3', 'Exploring the <em>why</em> behind the work.', 'Explorando o <em>porquê</em> por trás do que faço.'],
  ['.contact-section h2', "Let's make AI<br><em>mean something.</em>", 'Vamos criar uma IA<br>que <em>faça a diferença.</em>']
];
const editorialElements=editorialHeadings.map(([selector,en,pt])=>({el:document.querySelector(selector),en,pt}));

const originalCases = cases;
let activeLang = 'en-US';
const translatableNodes = [];
const nodeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while(nodeWalker.nextNode()){
 const node=nodeWalker.currentNode;
 if(node.parentElement?.closest('script,style') || editorialElements.some(x=>x.el?.contains(node)))continue;
 const raw=node.nodeValue;
 const trimmed=raw.trim();
 if(trimmed && translationsPt[trimmed]!==undefined)translatableNodes.push({node,original:raw,translated:raw.replace(trimmed,translationsPt[trimmed])});
}
const translatableAttrs=[];
for(const el of document.querySelectorAll('[aria-label]')){
 const value=el.getAttribute('aria-label');
 if(translatedAttributes[value])translatableAttrs.push({el,original:value,translated:translatedAttributes[value]});
}
function setLanguage(lang){
 activeLang=lang==='pt-BR'?'pt-BR':'en-US';
 document.documentElement.lang=activeLang;
 for(const x of translatableNodes)x.node.nodeValue=activeLang==='pt-BR'?x.translated:x.original;
 for(const x of translatableAttrs)x.el.setAttribute('aria-label',activeLang==='pt-BR'?x.translated:x.original);
 for(const x of editorialElements)if(x.el)x.el.innerHTML=activeLang==='pt-BR'?x.pt:x.en;
 document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===activeLang)));
 document.title=activeLang==='pt-BR'?'Nathália França — Agentes, Soluções e Experiências em IA':'Nathália França — AI Agents, Solutions & Experiences';
 document.querySelector('meta[name="description"]').setAttribute('content',activeLang==='pt-BR'?'Nathália França — especialista em IA generativa, criando e evoluindo agentes e experiências centradas nas pessoas.':'Nathália França — Generative AI specialist designing, building and evolving human-centered AI agents and experiences.');
 try{localStorage.setItem('portfolio-language',activeLang)}catch(_){}
 if(dialog.open){const k=dialog.dataset.currentCase;dialog.close();document.body.classList.remove('modal-open');openCase(k)}
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
let savedLanguage='en-US';try{savedLanguage=localStorage.getItem('portfolio-language')|| (navigator.language?.toLowerCase().startsWith('pt')?'pt-BR':'en-US')}catch(_){savedLanguage='en-US'}
const dialog=document.querySelector('#case-dialog'),content=document.querySelector('#dialog-content');
function openCase(key){const c=activeLang==='pt-BR'?translatedCasesPt[key]:cases[key];if(!c)return;dialog.dataset.currentCase=key;document.querySelector('#dialog-number').textContent=c.number;content.innerHTML=`<div class="dialog-hero"><div class="section-kicker">${c.category}</div><h2 id="dialog-title">${c.title}</h2><p>${c.intro}</p><div class="dialog-tags">${c.roles.map(r=>`<span>${r}</span>`).join('')}</div></div><div class="dialog-body">${c.sections.map(([h,p],i)=>`<section class="dialog-section"><span>${String(i+1).padStart(2,'0')}</span><div><h3>${h}</h3><p>${p}</p></div></section>`).join('')}</div>`;dialog.showModal();document.body.classList.add('modal-open');dialog.querySelector('#dialog-close').focus();}
function closeCase(){dialog.close();document.body.classList.remove('modal-open')}
document.querySelectorAll('[data-case]').forEach(el=>el.addEventListener('click',()=>openCase(el.dataset.case)));
document.querySelector('#dialog-close').addEventListener('click',closeCase);document.querySelector('#dialog-close-bottom').addEventListener('click',closeCase);
dialog.addEventListener('click',e=>{if(e.target===dialog)closeCase()});dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelector('#year').textContent=new Date().getFullYear();
const menu=document.querySelector('#mobile-menu');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));document.querySelector('.site-header').classList.toggle('menu-open',!open)});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');document.querySelector('.site-header').classList.remove('menu-open')}));
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}}},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));

setLanguage(savedLanguage);


// Premium pointer parallax, limited to fine-pointer desktop devices.
const supportsFinePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if(supportsFinePointer && !reduceMotion){
 const hero=document.querySelector('.hero');const visual=document.querySelector('.hero-visual');
 if(hero && visual){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;visual.style.transform=`translate3d(${x*-13}px,${y*-13}px,0)`},{passive:true});hero.addEventListener('pointerleave',()=>{visual.style.transform='translate3d(0,0,0)'})}
 document.querySelectorAll('.case-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',`${e.clientX-r.left}px`);card.style.setProperty('--my',`${e.clientY-r.top}px`)},{passive:true})});
}
// Close the mobile menu when pressing Escape or switching to a desktop viewport.
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.querySelector('.site-header')?.classList.contains('menu-open')){menu.setAttribute('aria-expanded','false');document.querySelector('.site-header').classList.remove('menu-open');menu.focus()}});
window.addEventListener('resize',()=>{if(innerWidth>760&&document.querySelector('.site-header')?.classList.contains('menu-open')){menu.setAttribute('aria-expanded','false');document.querySelector('.site-header').classList.remove('menu-open')}},{passive:true});

// Keep the back-to-top control functional on hosted pages and in previews.
const backToTop=document.getElementById('back-to-top');
backToTop?.addEventListener('click',(event)=>{event.preventDefault();window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});history.replaceState(null,'',location.pathname+location.search+'#top');});

// Infinite, animated company carousel with autoplay, buttons and swipe support.
(function(){
 const viewport=document.getElementById('clients-viewport');
 const track=document.getElementById('clients-track');
 const prev=document.getElementById('clients-prev');
 const next=document.getElementById('clients-next');
 if(!viewport||!track||!prev||!next)return;
 const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const originalSlides=Array.from(track.children);
 const originalCount=originalSlides.length;
 if(!originalCount)return;
 const before=originalSlides.map(slide=>slide.cloneNode(true));
 const after=originalSlides.map(slide=>slide.cloneNode(true));
 before.forEach(clone=>{clone.setAttribute('aria-hidden','true');track.insertBefore(clone,track.firstChild)});
 after.forEach(clone=>{clone.setAttribute('aria-hidden','true');track.appendChild(clone)});
 let currentIndex=originalCount;
 let step=0;
 let autoTimer=null;
 let paused=false;
 let isDragging=false,startX=0,startTranslate=0,currentTranslate=0;
 const transitionValue='transform .62s cubic-bezier(.22,.8,.22,1)';
 function updateStep(){const slides=Array.from(track.children);if(slides.length<2)return;step=slides[1].offsetLeft-slides[0].offsetLeft||slides[0].getBoundingClientRect().width+18;}
 function applyTransform(animated=true){track.style.transition=(!prefersReduced.matches&&animated)?transitionValue:'none';currentTranslate=-currentIndex*step;track.style.transform=`translate3d(${currentTranslate}px,0,0)`;}
 function jumpToRealSet(){if(currentIndex>=originalCount*2){currentIndex=originalCount;applyTransform(false);}else if(currentIndex<originalCount){currentIndex=originalCount*2-1;applyTransform(false);}}
 function goTo(index){currentIndex=index;applyTransform(true);}
 function nextSlide(){goTo(currentIndex+1);}
 function prevSlide(){goTo(currentIndex-1);}
 function startAutoplay(){if(prefersReduced.matches)return;stopAutoplay();autoTimer=setInterval(()=>{if(!paused&&!isDragging)nextSlide();},2600);}
 function stopAutoplay(){if(autoTimer){clearInterval(autoTimer);autoTimer=null;}}
 function setPaused(value){paused=value;}
 function pointerX(evt){return evt.touches?evt.touches[0].clientX:evt.clientX;}
 function dragStart(evt){isDragging=true;setPaused(true);startX=pointerX(evt);startTranslate=-currentIndex*step;track.style.transition='none';}
 function dragMove(evt){if(!isDragging)return;const delta=pointerX(evt)-startX;currentTranslate=startTranslate+delta;track.style.transform=`translate3d(${currentTranslate}px,0,0)`;}
 function dragEnd(evt){if(!isDragging)return;const delta=(pointerX(evt)-startX);isDragging=false;if(Math.abs(delta)>48){delta<0?nextSlide():prevSlide();}else{applyTransform(true);}setPaused(false);}
 function setup(){updateStep();applyTransform(false);startAutoplay();}
 next.addEventListener('click',()=>{setPaused(true);nextSlide();setTimeout(()=>setPaused(false),500)});
 prev.addEventListener('click',()=>{setPaused(true);prevSlide();setTimeout(()=>setPaused(false),500)});
 track.addEventListener('transitionend',jumpToRealSet);
 viewport.addEventListener('mouseenter',()=>setPaused(true));
 viewport.addEventListener('mouseleave',()=>setPaused(false));
 viewport.addEventListener('focusin',()=>setPaused(true));
 viewport.addEventListener('focusout',()=>setPaused(false));
 viewport.addEventListener('touchstart',dragStart,{passive:true});
 viewport.addEventListener('touchmove',dragMove,{passive:true});
 viewport.addEventListener('touchend',dragEnd);
 viewport.addEventListener('mousedown',evt=>{evt.preventDefault();dragStart(evt)});
 window.addEventListener('mousemove',dragMove);
 window.addEventListener('mouseup',dragEnd);
 viewport.addEventListener('keydown',evt=>{if(evt.key==='ArrowRight'){evt.preventDefault();nextSlide();}if(evt.key==='ArrowLeft'){evt.preventDefault();prevSlide();}});
 window.addEventListener('resize',()=>{updateStep();applyTransform(false)},{passive:true});
 prefersReduced.addEventListener?.('change',()=>{if(prefersReduced.matches)stopAutoplay();else startAutoplay();applyTransform(false);});
 setup();
})();

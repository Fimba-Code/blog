---
date: 2020-06-28
author: Acidiney Dias
title: "Pare de limitar o frontend!"
path: /pare-de-limitar-o-frontend
tags: ["Programação", "Frontend", "UI/UX", "Design", "Imagination"]
description: É bom prestar atenção que podemos dois tipos de usuários no nosso sistema, os que gostam do sistema e usam por isto, e aqueles que se desse nunca mais usava... simplesmente usa porque não pode mudar ( quanto a isso podem ser vários motivos ).
---

Opa boas?

*A versão original está disponível [aqui](https://acidineydias.me/blog/2020-06-28-pare-de-limitar-o-frontend).*

*Nota importante: Quando comecei a escrever este artigo peguei um copo com ☕ e abri a minha playlist de Jazz no spotify,  então este artigo pode estar um pouco extenso... take your time and enjoy the article😁.*

Este tema despertou muito interesse por parte das pessoas quando anunciei que iria criar um artigo com um tema tão brusco, e realmente faz sentido, afinal de conta estou presumindo que muitas pessoas fazem coisas "erradas".

Este artigo não é apenas voltado para o pessoal de desenvolvimento como também para o pessoal da área de design e sobre tudo para os encarregados por terem boas praticas de user experience,  e sim, o desenvolvedor frontend pode não saber sobre UX e não tem nada de errado, porém, é recomendado que saiba, para seu crescimento profissional.

Antes de avançar, gostaria de dizer uma coisa muito importante **"esta é a minha opinião, baseada na minha experiência e nos meus estudos"**.

### Qual foi a motivação por detrás desse tema?

Durante o tempo que atuo como developer, já tive a oportunidade de fazer muitos trabalhos onde o foco em si estava em como o cliente final interage com o site ou sistema... E isso foi muito bom para mim porque pude desenvolver um pensamento muito crítico quanto a algumas práticas quando vou elaborar um projeto de grande complexidade e com grande complexidade me refiro a um projeto que depende muito da interação do cliente final.

E este senso crítico fez-me começar a investigar mais sobre UX e sobre tudo a ver, como as grandes empresas de TI resolvem estes problemas. Até agora, já devo tê-lo situado um pouco sobre o contexto desta postagem mas permita-me mostrar-lhe um exemplo: Um dos casos mais comuns de desenvolvedores ao fazerem o BackOffice ( parte administrativa do site ou sistema ) é ter na sua maioria um monte de tabelas com ações distintas... e nota não tem nada de errado em ter tabelas ( o ponto não é este e nunca será este...), continuando,  basicamente eles têm um menu do usuário ( supondo), que após abrir o mesmo ele poderá listar, editar, visualizar e por aí vai.

Bem, este exemplo que dei é um clássico e você encontrará isso em quase todos os sistemas se não em todos, o que eu quero analisar contigo é o seguinte: qual valor você está agregando ao usuário final quando o mesmo usa o teu sistema?

É bom prestar atenção que podemos ter dois tipos de usuários no nosso sistema, os que gostam do sistema e por isso usam, e aqueles que se desse nunca mais usariam... simplesmente usam porque não pode mudar ( quanto a isso podem estar relacionado a vários motivos ).

Eu sei, é uma pergunta bem genérica e que fora de contexto realmente é difícil de responder, pode ser que até você esteja a se perguntar o que eu quero dizer com isso. Bem, a minha missão com este artigo é explicar-te algo antes de te perguntar novamente, e se for o teu caso, considerares verificar o que tens feito.

Para começar, decidi ir ao google 😎 e escrever "o que é UX?", podes tentar se quiseres... acredito que essa investigação pode e sempre vai agregar algum valor adicional até mesmo para você que é experiente no caso.

Este tópico é tão interessante que se você procurar em 3 locais diferentes sobre o que é UX, terás 3 respostas diferentes... Então vamos nos manter pelo básico que por agora deve servir.

"Experiência do usuário, do inglês user experience, é o conjunto de elementos e fatores relativos à interação do usuário com um determinado produto, sistema ou serviço cujo resultado gera uma perceção positiva  ou negativa.", segundo o nosso querido Wikipédia.

### Momento história
Teve um momento onde precisei redesenhar a tela de contactos do [WeSender](https://www.wesender.co.ao) porque não estava muito satisfeito com o que tinha atualmente, e achei que poderia melhorar e entregar uma melhor experiência para o usuário final, então resolvi investigar como serviços semelhantes tratavam daquele assunto em especifico, e peguei um porrada de exemplos... Uns que achei muito nada haver, outros muito 😒😒(também quero), e foi nas falhas dos que achei nada haver e nos quase surreais que vi que comecei a desenhar uma tela ( eu não sou designer, é bom isso ficar explicado aqui ). Porém, ao terminar de desenhar, o primeiro feeling que tive era que estava muito boa! Mas depois de algum tempo a analisar o que tinha feito, percebi que o que eu tinha feito não resolvia o problema do software ... Por mais bonito que aquele primeiro desenho tinha ficado.

E qual era o problema do software no caso? Era enviar mensagens... E sim, nós tínhamos uma zona para enviar mensagens assim como muitos softwares dedicados a enviar as benditas mensagens. 😒, ué o problema é enviar mensagens... Mas tem um local para enviar mensagens? 😒 Como isso é um problema? 😒

" Continue lendo ... " 😘

Então qual era o real problema do desenho? Bem, quando eu  fiz aquela interface esqueci de algo que eu uso muito quando programo... ** atalhos ** ( E sim faz real diferença ) ... e talvez seja interessante explicar que um atalho é um caminho mais curto do que o **costume**. E costume é o ponto! 

Muitas vezes nos vemos a fazer sempre a mesma coisa. E desconsideramos que existem melhores maneiras de fazer aquele coisa por que temos o costume de fazer elas assim, e no mundo do desenvolvimento também é comum isso acontecer. Mas isso chega a ser bem perigoso quando você desenvolve coisas que o teu usuário final já tem experiência, e uma ideia totalmente diferente da que você fez. Ex: Muitas vezes uma simples opção de editar o usuário sem a necessidade dele abrir o detalhe, já faz uma diferença enorme. Por quê? Porque ele fez o que queria e não precisou dar muita volta para o fazer, eu vou explorar mais este exemplo no futuro, então mantenha ele em mente.

#### Descontraia um pouco, o mundo não é tão sério assim.
Mas, como eu estou  a gostar da música que estou a ouvir, então irei citar mais um ponto crítico. Este acontece normalmente quando nós trabalhamos com API's, e ficamos muito focados em como o backend espera receber ou retornar as informações, e a partir deste ponto começamos a criar a nossa interface... Em alguns casos começamos a inventar um monte de "coisas" ou começamos a pensar em determinadas tools para resolver um problema que não necessariamente é um problema.

  "O problema nem sempre é um problema, o teu desconhecimento
  é mais problemático que o problema em muitos casos."
  Acidiney Dias, 2020 😂

Em alguns casos, só o facto de você conhecer 70% da ferramenta que você estais a usar, já te permite resolver a maioria dos casos que te aparecem a frente... Tem um post muito antigo que li quando queria aprender mais sobre [GraqhQL](https://graphql.org/) que dizia o seguinte: "Se você está a fugir do [REST](https://pt.wikipedia.org/wiki/REST), por que não achaste uma forma de resolver o que procuras (resolver), então o mesmo acontecerá em tudo que você tentar usar.". O que isso quer dizer? Não é que [GraphQL](https://graphql.org/) é mau ou coisa do gênero... e pode ser que ele realmente resolva melhor o que você está tentando resolver. Mas desmerecer uma ferramenta por uma incapacidade tua gera um loop infinito no desmerecimento.

Mesmo da pior forma possível, tens que achar uma maneira de resolver o teu problema, porque isso demonstra o teu nível de crescimento não com a plataforma, mas sim, a resolver problemas 🤗.

Se não acha que consegues, então lamento informar-te, mas podes ter esquecido do foco desse mundo maravilhoso que é a programação. 😒 Assim só queres dinheiro mesmo? Depois não vais ficar rico '-'. ( Se ficares, nunca leste este comentário )🙈

#### voltando ao contexto

No caso em especifico do [WeSender]((https://www.wesender.co.ao)), eu parei e comecei a analisar quais pontos realmente poderiam ser atalhos ( para a zona de contactos ), e para saber que pontos poderiam ser atalhos precisamos primeiramente saber qual é o objetivos da ferramenta ( E olha que interessante, nesse ponto você consegui ir buscar mais um conceito bem interessante cujo a base se resume ao *contexto*, deixa nos comentários se você sabe qual conceito é este 😉) . No caso do [WeSender](https://www.wesender.co.ao) que é um serviço de envio de mensagens, faz sentido que tenha um atalho para enviar mensagens a partir da zona de contactos, assim como um aplicativo de lista telefônica te permite ligar para um número a partir da lista telefônica.  Bom, quanto a isto acredito que estamos fechados! No fundo tudo é contexto, saber em que contexto estás, te permite criar soluções que realmente ajudem o teu usuário final. Então, ao perceber o meu contexto, pude tomar nota que faz sentido eu conseguir enviar mensagens para um ou múltiplos contactos a partir da zona de contactos, e assim deixando ela de ser uma simples decoração, e começar a realmente ajudar as pessoas. 

"Abre parênteses aqui..."

( Neste ponto eu poderia simplesmente colocar os números que o usuário pretende enviar em uma sessão e mudar de página, mas aqui eu deixo a reflexão sobre o ponto que falei antes. Faz sentido para ti isto? Bem, para mim não. Porque mudar de página é mais um custo para enviar uma mensagem. E presta atenção que a única coisa que ele terá que fazer é redigir o que pretende e consequentemente enviar... Então nesse ponto, fica mais fluído um modal do que mover de página.

Mas se ele precisa de fazer algo mais complexo, tipo carregar um arquivo para manipular um template, não faria sentido usar um modal... Porque a ação que ele vai realizar tem mais dependências do que uma simples mensagem ^^. )

Quando parei para analisar essa situação, percebi que o que o [WeSender](https://www.wesender.co.ao) tinha em comum com aquelas opções que tinha visto e não tinha gostado, era, que ambas, tinham muitas áreas que poderiam ser mais interativas levando em conta o objetivo de cada app analisada.

( Eu amo o google por conta disso, até o [Google Contacts](https://contacts.google.com)... consegue ser tão simples, mas tão interativo 🤗🤗)

E essa opinião só começou literalmente a se formar quando comecei a olhar para as soluções que outras pessoas faziam, principalmente quando os outros devs (acrônimo para desenvolvedor) criavam determinadas zonas limitando a sua imaginação porque tinham que fazer com base nas informações que o backend iria enviar ou receber.

Se és frontend, deixa-me te contar um segredo... Tudo bem em usar o mesmo endpoint em dois sítios diferentes e/ou usar informação antigas no caso de só ter uma mudança ^^.

Olhar para o backend como uma fonte de verdade pode deixar as coisas mais simples (desenvolvendo) ou mais complexas para quem vai usar o teu sistema... O não analisar o que estas a receber ou simplesmente desenvolver algo orientado as informações que o backend retorna, pode ser assustador para o usuário final.

Vou dar mais um exemplo prático de algo que considero bem besta mas as pessoas normalmente não pensam nisso, vai saber por quê?! 😐

Muitas vezes quando o pessoal desenvolve uma funcionalidade de editar alguma coisa, eles esperam que você ao fazer o submit das informações editadas lhes envies os todos campos sejam eles com as informações antigas no caso de não terem sido editas, ou mesmo vazias, somente por conta do modelo que eles fizeram([DTO](https://pt.wikipedia.org/wiki/Objeto_de_Transfer%C3%AAncia_de_Dados), que lhes obriga a receber)... E em alguns casos ( que pessoalmente mais gosto ) somente enviando o que realmente foi alterado. Pode não parecer mas a forma com que você pede algo para alguém do frontend, acaba limitando muito a imaginação dele sobre como poderia fazer algo, e acaba fazer o "costume" ( presta atenção que não estou a dizer que é errado, estou a dizer que existem formas mais criativas em mais interessantes ).

Qual é o sentido em precisar ir para as definições gerais somente para alterar o meu nome? Percebe? Quando digo "não limitar o frontend" estou a dizer para seres criativo, o frontend pode fazer muitas coisas mesmo com pouco recurso. Ir para as definições gerais deve ser somente quando o usuário final realmente precisa alterar algumas informações mais sensíveis e que não necessariamente fica disponível no perfil, por exemplo.

Essa abordagem do exemplo acima... É muito utilizada pelo facebook ( quando queres alterar a foto por exemplo, e toma cuidado! Para o facebook que trabalha com **dados** o teu nome é uma informação sensível, então tudo é **contexto** ) e f6s ou o github ( Para alterar a biografia por exemplo ) e acho ela muito incrível e transparente, porque eles têm um caminho mais longo para você fazer aquela alteração, mas eles também têm o que as pessoas usam com mais facilidade. "Os atalhos"... E você pode até chorar que o teu atalho não é usado... então, é porque não é um atalho! ✌ Querendo ou não as pessoas sempre procuram por atalhos, se realmente fosse um atalho, **terias pessoas usando**.

Muitos devs quando projetam as interfaces deixam-se levar muitas vezes em como a API foi projetada, tipo, se a API tem uma rota `/profile/update` que recebe 10 campos no body, ele cria uma rota na aplicação para fazer isso e pronto o serviço acabou, e é nesse ponto que você se apercebe das capacidades de cada um.

Como desenvolvedores, devemos sempre pensar em como podemos deixar mais simples o que estamos a  fazer e isso não necessariamente se prende ao frontend mas também ao backend ( Mas isso é assunto para um outro artigo ). Afinal de contas programar é literalmente facilitar, automatizar.

### Os Meus Queridos Modal

Lembra do que falei, sobre abrir um modal e não carregar uma nova página, no exemplo acima?

R: Tempo, para fazer uma tarefa simples.

" Mas tome nota, que existe contras " 🙄

Muita gente vai me prometer surra por isso 😂, vou tomar cuidado para não falar algo que me comprometa 😥!

" Txé, estou nem aí vou falar mesmo 😤, não gostou faz b.o "

Há pessoas que deveriam ser presas de tantos modais que têm no site, os modais são um atalho, sim! São simples de se usar, sim! Porém NÃO É PARA TUDO!

Perceba algo, modal é uma informação a mais que fica na página e trabalha sobre a página atual. Ou seja, o comportamento da página atual afeta indiretamente o comportamento do modal.

O que isso quer dizer? É SIMPLES, modais foram concebidos para serem atalhos simples a informações SIMPLES! Como por exemplo uma notificação, detalhar alguma informação SIMPLES e editar informações SIMPLES.

" Keep it simple and stuped! "

Infelizmente o pessoal esqueceu disso por conta da sua facilidade! Eu já vi um pessoal usando um modal para preencher uns 20 campos lá 😑, man... Take it easy.

( A carapuça serviu? Estou mesmo a falar de você, 😶😶 - seu preguiçoso ).

Isso não é somente uma questão de estética, é uma de experiência de utilização mesmo! Don't use if you don't need.

Os modais são bons para atalhos, mas quando mal usados, podem se tornar uma grande dor de cabeça, não só a nível de conceito, mas também como é uma informação que sempre vai existir na página, o uso descuidado do mesmo, pode impactar de forma negativa a percepção de fluxo do teu site ou sistema... Então tome cuidado! Hoje o assunto não é este, mas vou deixar alguns links abaixo para você dar uma olhada 😎.

Então, permita-me perguntar novamente... Qual valor você está agregando ao teu usuário final?

Por hoje é tudo pessoal, este assunto é longo ( poderia falar de tempo de carregamento, [offline first](http://offlinefirst.org/) e muitas outras coisas, porém, queria deixar uma reflexão mais genérica ), então posso escrever uma outra parte num outro dia, sendo mais especifico sobre um assunto.

Obrigado a todos os 30 que votaram sobre qual dos artigos lançar primeiro 🤗 vocês são incríveis.

### Recursos interessantes
- [JAZZ - SPOTIFY](https://open.spotify.com/playlist/37i9dQZF1DWTbzY5gOVvKd?si=4J9hGW1-QAyhNl4TxukQUQd)
- [ Frontend e backend](https://www.treinaweb.com.br/blog/o-que-e-front-end-e-back-end/)
- [Modal Or Not](https://medium.com/allenhwkim/modal-or-not-modal-3d65de64d82c)
- [Why We Should Avoid Modal Dialog](https://medium.com/allenhwkim/why-not-modal-84d9f5d7c646)
- [Best Practices for Modals / Overlays / Dialog Windows](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c)
- [Modality Is the One UX Concept That Most Designers Don’t Fully Understand](https://uxplanet.org/modality-the-one-ux-concept-you-need-to-understand-when-designing-intuitive-user-interfaces-e5e941c7acb1)
- [O que é UX?](https://www.organicadigital.com/blog/o-que-e-ux/)
- [Don Norman: O termo "UX"](https://www.youtube.com/watch?v=9BdtGjoIN4E&feature=emb_logo)
- [O que é UX – User Experience](https://www.hostinger.com.br/tutoriais/ux-o-que-e-user-experience/)
- [How You Are Destroying Your Creativity and Imagination](https://medium.com/@mikeschoultz/how-you-are-destroying-your-creativity-and-imagination-479a6d962c3b)

### Revisado por

- [Aermany Dias](https://www.instagram.com/nany3a)
- [Márcio Quimbundo](https://github.com/marcioquimbundo)

Muito obrigado 😍

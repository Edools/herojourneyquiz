const questions = [
  {
    title: 'Quais fatores afetam o ranqueamento de um site no Google?',
    options: [
      ' Relevância, confiabilidade e engajamento',
      'Conteúdo, design e publicidade',
      'Segmentação, conversão e análise.',
    ],
    right: 1,
  },

  {
    title: 'Quais são as principais diferenças entre o marketing de conteúdo e o marketing de produto?',
    options: [
      ' Foco na educação do cliente vs. Foco na venda do produto',
      'Utilização de mídias sociais vs. Utilização de mídias tradicionais',
      'Comunicação visual vs. Comunicação textual.',
    ],
    right: 0,
  },

  {
    title: 'Qual é a diferença entre tráfego orgânico e tráfego pago em um site?',
    options: [
      ' Tráfego gerado naturalmente vs. Tráfego gerado por campanhas publicitárias',
      'Tráfego gerado por mídias sociais vs. Tráfego gerado por mecanismos de busca',
      'Tráfego gerado por referências vs. Tráfego gerado por afiliados.',
    ],
    right: 0,
  },

  {
    title: 'Qual é o principal papel do influenciador digital no marketing de afiliados e como ele pode afetar a venda de um produto?',
    options: [
      ' Promover e criar conteúdos sobre produtos em suas redes sociais',
      'Ajudar a melhorar o conteúdo do produto que está sendo vendido',
      'Gerenciar o relacionamento com os afiliados da empresa.',
    ],
    right: 0,
  },


  {
    title: 'O que é o funil de conversão no marketing digital?',
    options: [
      ' Um modelo para entender a jornada do cliente desde o primeiro contato até a conversão',
      'Uma ferramenta para medir o tráfego de um site',
      'Um processo para otimizar as conversões de produto',
    ],
    right: 2,
  },

  {
    title: 'Quais dos seguintes elementos de uma landing page tem o maior impacto na conversão?',
    options: [
      ' Imagem de fundo',
      'Botão de chamada para ação',
      'Tamanho da fonte',
    ],
    right: 1,
  },

  {
    title: 'Por que é importante usar uma landing page para lançar um produto ou serviço?',
    options: [
      ' Porque torna a oferta mais atraente',
      'Porque aumenta a credibilidade do negócio',
      'Porque ajuda a quebrar objeções de venda ',
    ],
    right: 2,
  },

  {
    title: 'Qual das seguintes opções ajuda a melhorar a taxa de abandono de carrinho em um e-commerce?',
    options: [
      ' Reduzir as opções de pagamento',
      'Mostrar opções de produtos relacionados na página de carrinho',
      'Aumentar o tempo de carregamento da página de checkout',
    ],
    right: 1,
  },

  {
    title: 'Qual das seguintes estratégias pode ajudar a diminuir a quantidade de compras recusadas por falta de limite no cartão?',
    options: [
      ' Inserir popup aconselhando a aumentar o limite do cartão antes de fazer a compra',
      'Oferecer opções de parcelamento inteligente',
      'Não criar produtos que sejam muito caros',
    ],
    right: 1,
  },

  {
    title: 'Quais das opções abaixo podem ajudar a melhorar o público-alvo de um lançamento?',
    options: [
      ' Conversar com quem já comprou de você antes',
      'Oferecer descontos para todos os clientes',
      'Aumentar o preço do produto',
    ],
    right: 0,
  },

  {
    title: 'Qual das opções abaixo pode ajudar a melhorar o engajamento em redes sociais?',
    options: [
      ' Publicar conteúdo aleatório várias vezes ao dia',
      'Comprar seguidores',
      'Ter um calendário editorial relacionado com os seus produtos',
    ],
    right: 2,
  },

  {
    title: 'Por que os grandes nomes do digital usam várias redes sociais, ao invés de apenas uma? ',
    options: [
      ' Para aumentar o número de seguidores',
      'Para alcançar diferentes tipos de público',
      'Para manter o controle sobre todas as redes',
    ],
    right: 1,
  },

  {
    title: 'Como é possível diminuir a taxa de rejeição em um site?',
    options: [
      ' Reduzir a quantidade de conteúdo',
      'Adicionar animações, grandes imagens e outros efeitos visuais',
      'Melhorar a usabilidade e o design do site',
    ],
    right: 0,
  },

  {
    title: 'Como é possível aumentar o engajamento em uma campanha de e-mail marketing?',
    options: [
      ' Enviar o mesmo email para todos os contatos da lista',
      'Segmentar a lista de contatos e personalizar os emails',
      'Enviar emails com títulos clickbait',
    ],
    right: 1,
  },

  {
    title: 'Por que é importante ter um blog em um site?',
    options: [
      ' Para testar a sua copy antes de colocar os anúncios no ar',
      'Para fazer propaganda dos seus produtos em todos os posts',
      'Para atrair visitantes através do Google',
    ],
    right: 2,
  },
]

const random = Math.floor(Math.random() * 15);
const randomQuestion = questions[random]
const ul = document.querySelector('#questions5')
document.querySelector('#title-question1').innerHTML = randomQuestion.title
let timeleft = 2;

randomQuestion.options.forEach((e, index) => {
  const li = document.createElement('li')
  li.innerHTML = e;
  li.addEventListener('click', () => {
    if (index == randomQuestion.right) {
      li.classList.add('correct-answer')
      let downloadTimer = setInterval(function(){
        if(timeleft === 0){
          window.location.replace('finished-total.html')
          clearInterval(downloadTimer);
        }
        timeleft -= 1;
      }, 1000);
    }else {
      li.classList.add('wrong-answer')
      
      let downloadTimer = setInterval(function(){
        if(timeleft === 0){
          window.location.replace('finished-level5.html')
          clearInterval(downloadTimer);
        }
        timeleft -= 1;
      }, 1000);
    }
  })
  ul.appendChild(li)
})
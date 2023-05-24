const questions = [
  {
    title: 'O que é marketing de afiliados?',
    options: [
      'Criação de produtos digitais',
      'Promoção de produtos por comissão ',
      'Influenciadores promovendo produtos',
    ],
    right: 0
  },
  {
    title: 'O que é um infoproduto?',
    options: [
      'Um produto físico',
      'Um produto digital que contém informações úteis',
      'Um serviço prestado por um profissional',
    ],
    right: 0
  },
  {
    title: 'Qual é o principal objetivo do marketing de afiliados?',
    options: [
      'Aumentar o tráfego do site',
      'Aumentar a taxa de conversão',
      'Gerar vendas',
    ],
    right: 0
  },
  {
    title: 'Como os afiliados são remunerados?',
    options: [
      'Por meio de um salário fixo',
      'Por meio de uma ajusta de custo',
      'Comissão por venda',
    ],
    right: 0
  },
  {
    title: 'Qual é a diferença entre um produto físico e um infoproduto?',
    options: [
      'Um é tangível, o outro é digital',
      'O infoproduto é um produto de informática ',
      'O físico é sempre mais caro',
    ],
    right: 0
  },
  {
    title: 'O que é uma plataforma de afiliados?',
    options: [
      'Um software que ajuda a criar produtos digitais',
      'Uma forma de conectar afiliados e infoprodutores',
      'Um programa de treinamento para afiliados',
    ],
    right: 0
  },
  {
    title: 'O que é um funil de vendas?',
    options: [
      'Um processo que torna um visitor em comprador',
      'Um processo que torna um comprador em visitante',
      'Um processo para ensinar afiliados em infoprodutores',
    ],
    right: 0
  },
  {
    title: 'O que é uma comissão de afiliados?',
    options: [
      'Uma taxa que os afiliados precisam pagar a cada venda',
      'A comissão para cada venda que os afiliados fazem',
      'Taxa para se inscrever em programas de afiliados',
    ],
    right: 0
  },
  {
    title: 'O que é um link de afiliado?',
    options: [
      'Um link que leva as pessoas para uma página de vendas',
      'Um link que direciona os usuários para uma rede social',
      'Um link que contém informações sobre um infoprodutor',
    ],
    right: 0
  },
  {
    title: 'Quais são as principais vantagens de trabalhar como afiliado?',
    options: [
      'Mais renda e autonomia para escolher produtos',
      'Acesso a recursos exclusivos e exposição em redes sociais',
      'O afiliado pode facilmente virar um influenciador digital',
    ],
    right: 0
  },
  {
    title: 'Entre as opções abaixo, quais são plataformas de afiliados? ',
    options: [
      'Facebook e Instagram',
      'Google e Bing',
      'HeroSpark',
    ],
    right: 0
  },
  {
    title: 'O que é um lead?',
    options: [
      'Uma pessoa que comprou um produto promovido por um afiliado',
      'Uma pessoa que se inscreveu em uma lista ou formulário de interesse',
      'Uma pessoa que clicou no link de afiliado, mas não comprou o produto',
    ],
    right: 0
  },
  {
    title: 'O que é uma landing page?',
    options: [
      'Uma página de destino para promover um produto ou serviço',
      'Uma página que oferece informações sobre um nicho de mercado',
      'O site do produtor de infoprodutos',
    ],
    right: 0
  },
  {
    title: 'Quais são os tipos de infoprodutos mais comuns?',
    options: [
      'E-books, cursos online e mentorias',
      'Produtos físicos, serviços e softwares',
      'Jogos, filmes e músicas',
    ],
    right: 0
  },
  {
    title: 'Qual é a principal função dos infoprodutores?',
    options: [
      'Promover um produto diretamente aos consumidores finais',
      'Fazer spam para vender cursos com qualidade duvidosa',
      'Criar produtos digitais úteis e relevantes para o seu público-alvo',
    ],
    right: 0
  },
]

const random = Math.floor(Math.random() * 15);
const randomQuestion = questions[random]
const ul = document.querySelector('#questions1')
const answers = ul.children
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
          window.location.replace('advance-level2.html')
          clearInterval(downloadTimer);
        }
        timeleft -= 1;
      }, 1000);
    }else {
      li.classList.add('wrong-answer')
      
      let downloadTimer = setInterval(function(){
        if(timeleft === 0){
          window.location.replace('wrong1.html')
          clearInterval(downloadTimer);
        }
        timeleft -= 1;
      }, 1000);
    }
  })
  ul.appendChild(li)
})

const questions = [
  {
    title: 'O que é o upsell?',
    options: [
      "Oferecer um produto barato depois do cadastro em uma lista de e-mails",
      "Receber comissão por venda casada",
      "Oferecer um produto mais caro na hora da compra",
    ],
    right: 2
  },




  {
    title: 'O que é o cross-sell?',
    options: [
      "Oferecer um produto complementar na hora da compra",
      "Receber comissão por venda casada",
      "Oferecer um produto barato depois do cadastro em uma lista de e-mails",
    ],
    right: 0
  },




  {
    title: 'O que é o marketing de conteúdo?',
    options: [
      "Estratégia para gerenciar a lista de e-mails de um afiliado",
      "Criar e distribuir conteúdo relevante para o público-alvo",
      "Receber comissão por vendas que vieram de rede social",
    ],
    right: 1
  },





  {
    title: 'O que é SEO?',
    options: [
      "Um estilo de vendas persuasivo e agressivo ",
      "Estratégia para melhorar o rank de um site no Google",
      "Um modelo de negócios com faturamento por comissões",
    ],
    right: 1
  },




  {
    title: 'O que significa CPC?',
    options: [
      "Custo por ação.",
      "Comissão por afiliado.",
      "Custo por clique.",
    ],
    right: 2
  },




  {
    title: 'O que é o teste A/B?',
    options: [
      "Testar diferentes versões de página para descobrir qual é melhor",
      "Dividir a comissão com mais de um afiliado",
      "Um método para segmentar ofertas",
    ],
    right: 0
  },




  {
    title: 'O que é a "Página de Obrigado"?',
    options: [
      "Uma página que agradece ao cliente pela compra",
      "Uma página que oferece descontos ao cliente",
      "É igual a uma página de vendas",
    ],
    right: 0
  },




  {
    title: 'O que significa "CTA"?',
    options: [
      "Click Through Ads (Anúncios que redirecionam para outras páginas).",
      "Call to Action (Chamada para Ação).",
      "Conversion Tracking Analytics (Análise de Conversão e Monitoramento).",
    ],
    right: 1
  },




  {
    title: 'O que é uma "Lead List"?',
    options: [
      "Uma lista de endereços de e-mails de afiliados que desejam promover um produto.",
      "Uma lista de endereços de e-mails de potenciais clientes",
      "Uma lista de endereços de e-mails de clientes que já compraram um produto.",
    ],
    right: 1
  },




  {
    title: 'O que é o CPM?',
    options: [
      "O custo por clique em um anúncio.",
      "O custo por impressão de um anúncio em mil páginas.",
      "O custo por ação realizada pelo usuário após clicar em um anúncio.",
    ],
    right: 1
  },




  {
    title: 'O que é o "Custo por Lead"?',
    options: [
      "O custo por clique em um anúncio.",
      "O custo de impressão em um anúncio.",
      "O custo por cada potencial cliente gerado a partir de um anúncio.",
    ],
    right: 2
  },




  {
    title: 'O que é o "Lifetime Value" (LTV) de um cliente?',
    options: [
      "O valor total que um cliente gasta em sua primeira compra.",
      "O valor total que um cliente gasta durante toda a sua vida como cliente.",
      "O valor total que um cliente gasta em sua última compra.",
    ],
    right: 1
  },




  {
    title: 'O que é o "Click Through Rate" (CTR)?',
    options: [
      "A porcentagem de cliques que um anúncio recebe em relação ao número de visualizações.",
      "A porcentagem de usuários que efetuam uma compra após clicar em um anúncio.",
      "A porcentagem de usuários que retornam ao site após clicar em um anúncio.",
    ],
    right: 0
  },




  {
    title: 'O que é um "Programa de Recorrência"?',
    options: [
      "É quando o afiliado recebe uma comissão por cada vend",
      "É um programa de serviço de assinatur",
      "É quando o afiliado recebe por cada novo cliente que se cadastra em uma págin",
    ],
    right: 1
  },





  {
    title: '1O que são gatilhos mentais?',
    options: [
      "São armas para obrigar alguém a comprar um produto",
      "São estímulos que influenciam a tomar uma decisão",
      "São formas definitivas de captar a atenção das pessoas",
    ],
    right: 1
  },




]

const random = Math.floor(Math.random() * 15);
const randomQuestion = questions[random]
const ul = document.querySelector('#questions3')
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
          window.location.replace('advance-level4.html')
          clearInterval(downloadTimer);
        }
        timeleft -= 1;
      }, 1000);
    }else {
      li.classList.add('wrong-answer')
      
      let downloadTimer = setInterval(function(){
        if(timeleft === 0){
          window.location.replace('finished-level3.html')
          clearInterval(downloadTimer);
        }
        timeleft -= 1;
      }, 1000);
    }
  })
  ul.appendChild(li)
})
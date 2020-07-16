document.querySelector('.fotos_img')
.addEventListener('wheel', event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
})
document.querySelector('.infinite')
.addEventListener('click', function () {
    Swal.fire({
      title: 'Infinite',
      text: 'Infinite foi lançado em 1996 e é o primeiro álbum do rapper Eminem, sob o sele independente Web Entertainment. Infinite vendeu cerca de 1000 cópias e não alcançou as paradas de sucesso, sendo recebido com críticas negativas tanto da crítica especializada, quanto do público ouvinte de Hip hop. Com o passar dos anos, Infinite acabou ganhando novos tons de crítica, considerado como a fundação para Eminem ser considerado hoje, como um dos maiores rappers de todos os tempos.',
      imageUrl: 'assets/images/infinite.jpg',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(17,36,66,0.9)
      `
    })
  })

  document.querySelector('.tsslp')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'The Slim Shady LP',
      text: 'The Slim Shady LP é o segundo álbum de estúdio de Eminem, foi lançado em 23 de fevereiro de 1999, sob Web Records e a Aftermath Entertainment de Dr. Dre. Esse é o ponto de virada na carreira do rapper, onde o álbum produzido por Dr. Dre e pelo próprio Eminem, estreou em segundo lugar na Billboard 200 com 283.000 cópias vendidas em sua primeira semana, transformando assim um rapper até então desconhecido, em uma estrela do Hip Hop. The Slim Shady LP chegou a receber 4 discos de platina e o álbum ganhou um Grammy de “Melhor Álbum de Rap”. O conteúdo lírico do disco em sua maioria é na perspectiva do alter ego do rapper, Slim Shady. Além do single “My Name Is”, "Brain Damage", "Guilty Conscience" são outros sucessos do disco. ',
      imageUrl: 'assets/images/the-slim-shady-lp.jpg',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(132, 120, 153,0.9)
      `
    })
  })
  document.querySelector('.tmmlp')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'The Marshall Mathers LP',
      text: 'The Marshall Mathers LP foi lançado em 23 de maio de 2000 e é o terceiro álbum de estúdio do Eminem. O disco vendeu 1.760.000 cópias em sua primeira semana de lançamento, quebrando todos os recordes e o álbum de rap com vendas mais rápidas de todos os tempos. Ao contrário do seu antecessor, esse álbum que leva seu verdadeiro nome como título, tem uma abordagem mais pessoal em relação a sua trajetória e ascensão no mundo do Hip Hop, com rimas ainda mais fortes e agressivas, direcionadas principalmente aos críticos do seu disco anterior. "The Real Slim Shady", "Stan", "The Way I Am", "Kill You" e "Marshall Mathers" são alguns dos sucessos do álbum. The Marshall Mathers LP vendeu um total de 22 milhões de cópias no mundo todo.',
      imageUrl: 'assets/images/the-marshall-mathers-lp.jpg',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(190, 183, 166,0.9)
      `
    })
  })
  document.querySelector('.tes')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'The Eminem Show',
      text: 'The Eminem Show foi lançado em 26 de maio de 2002, sendo o quarto álbum de estúdio do artista e o primeiro da Shady Records. O Álbum estreou em primeiro lugar na Billboard 200 e atingiu o primeiro lugar em várias paradas internacionais. Foi o disco mais vendido no ano, nos Estados Unidos, com quase 10 milhões de cópias vendidas e com um total de 20 milhões de cópias vendidas no mundo todo. No ano seguinte foi eleito “Álbum de Hip Hop do Ano”. Considerado por muitos, ao lado de The Marshall Mathers LP, como um dos maiores álbuns de Rap de todos os tempos. "Without Me", "Sing for the Moment", "Cleanin Out My Closet", "Business", "Till I Collapse" (feat. Nate Dogg), e "Superman" (feat. Dina Rae) são alguns dos sucessos do disco.',
      imageUrl: 'assets/images/the-eminem-show.jpg',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(111, 30, 23,0.9)
      `
    })
  })
  document.querySelector('.encore')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'Encore',
      text: 'Encore teve seu lançamento em 12 de novembro de 2004, foi o terceiro álbum consecutivo do rapper a alcançar o número 1 nos EUA e em outros países. Os hits "Just Lose It" e "Like Toy Soldiers" ficaram no topo das paradas no Reino Unido, impulsionando o sucesso do disco. "Mockingbird" , "Mosh" e "Ass Like That"  são outros sucessos do álbum.',
      imageUrl: 'assets/images/encore.png',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(41, 40, 82,0.9)
      `
    })
  })
  document.querySelector('.relapse')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'Relapse',
      text: 'Relapse foi lançado em 15 de maio de 2009. O sexto álbum de estúdio de Eminem, teve como primeiro single "Crack a Bottle" (com participação de Dr. Dre e 50 Cent), que ficou em primeiro lugar nos EUA. "We Made You", "3AM" e "Beautiful" são outros singles do álbum.',
      imageUrl: 'assets/images/relapse.png',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(168, 87, 74,0.9)
      `
    })
  })
  document.querySelector('.recovery')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'Recovery',
      text: 'Recovery é o sétimo álbum de estúdio de Eminem. Foi lançado em 18 de junho de 2010 e é o sexto álbum consecutivo do rapper a alcançar o topo de vendas no Estados unidos. O disco também foi um sucesso comercial no mundo, ficando em primeiro lugar em vários países. Os hits “Not Afraid” e “Love the Way You Lie” atingiram o primeiro lugar da Billboard, o último com a participação de Rihanna, foi um sucesso no mundo todo, atingindo o topo de várias paradas. “No Love” com a participação do rapper Lil Wayne foi o terceiro single do disco. "Space Bound"  e  "Cinderella Man", são outros sucessos de Recovery.',
      imageUrl: 'assets/images/recovery.png',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(200, 211, 230,0.9)
      `
    })
  })
  document.querySelector('.tmmlp2')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'The Marshall Mathers LP 2',
      text: 'The Marshall Mathers LP 2 foi lançado em 05 de novembro de 2013. O oitavo álbum de estúdio do rapper americano, contou com vários produtores como Dr.Dre, Rick Rubin e No ID. O primeiro single do disco foi "Berzerk". O hit “Rap God” ganhou destaque, em 2014 a música entrou para o famoso Guiness Book por ser “O Hit Com Mais Palavras”.  "The Monster" (com Rihanna) é outro sucesso do TMMLP2, que conta também com a faixa “Bad Guy” uma sequência direta da música “Stan”, um dos maiores sucessos de Eminem.',
      imageUrl: 'assets/images/the-marshall-mathers-lp-2.jpg',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(227, 219, 199,0.9)
      `
    })
  })
  document.querySelector('.revival')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'Revival',
      text: 'Revival é o nono álbum de estúdio de Eminem e foi lançado em 15 de dezembro de 2017. O primeiro single do álbum é "Walk on Water" (feat. Beyoncé). Revival conta com várias participações, destaque para Beyoncé, Ed Sheeran, Skylar Grey, Alicia Keys, entre outros."River (feat. Ed Sheeran)", "Untouchable", "Nowhere Fast (feat. Kehlani)" e "Chlorasepic (feat. Phresher)" são algumas das principais faixas do álbum.',
      imageUrl: 'assets/images/revival.jpg',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(84, 85, 111,0.9)
      `
    })
  })
  document.querySelector('.kamikaze')
  .addEventListener('click', function () {
    Swal.fire({
      title: 'Kamikaze',
      text: 'Kamikaze foi lançado sem prévio aviso em 31 de agosto de 2018. O décimo álbum de estúdio d Eminem, conta com participações de Joyner Lucas, Royce da 5 9" e Jessie Reyez. O álbum foi produzido pelo próprio rapper em colaboração de Dr. Dre e vários outros produtores. Kamikaze é um álbum de “resposta” a todos os críticos do trabalho anterior de Eminem, “Revival” que recebeu duras críticas. "Lucky You" (com part. de Joyner Lucas), "The Ringer", "Fall", "Stepping Stone", "Not Alike" (com part. de Royce da 5 9") e "Venom" (canção do filme homônimo), são algumas das principais faixas do disco.',
      imageUrl: 'assets/images/kamikaze.jpg',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(84, 87, 84,0.9)
      `
    })
  })
  document.querySelector('.mtbmb')
  .addEventListener('click', function (){
    Swal.fire({
       title: 'Music to Be Murdered By',
       text: 'Music to Be Murdered By foi lançado em 17 de janeiro de 2020, é o décimo álbum de estúdio de Eminem. Inspirado no trabalho do cineasta Alfred Hitchcock, conta com participações de Juice Wrld, Skylar Grey, Ed Sheeran, entre outros. O album foi um sucesso comercial e estreou no topo da Billboard. Eminem se tornou o primeiro artista com 10 álbuns consecutivos estreando na primeira posição nas paradas de álbuns mais vendidos nos EUA. "Godzilla" (participação de Juice Wrld), 	"Darkness", "You Gon Learn" e "I Will" são alguns do sucessos do disco.',
       imageUrl: 'assets/images/mtbmb.jpg',
       imageWidth: 300,
       imageHeight: 250,
       imageAlt: 'Custom image',
       backdrop: `
       rgba(101, 21, 40,0.9)
        `
    })
  })
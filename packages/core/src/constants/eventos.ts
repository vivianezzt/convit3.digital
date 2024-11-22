import { Evento } from '../evento'

const eventos: Evento[] = [
  {
    id: 'mtqow2jy7fk-n19uccb98ts-56pbqlvjery',
    alias: 'evento-fullstack',
    senha: 'senha123',
    nome: 'Evento de Desenvolvimento Fullstack',
    data: new Date('2024-12-01T10:00:00Z'),
    local: 'São Paulo, SP',
    descricao:
      'Um evento completo para aprender desenvolvimento fullstack do zero.',
    imagem:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    imagemBackground:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    publicoEsperado: 200,
    convidados: [
      {
        id: 'udapw918ve-hpsa772b8i6-6ary6v8emg',
        nome: 'Alice Silva',
        email: 'alice@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: 'x9b3uw15fo-6qjlp5mr9kq-1txaxbwnqju',
        nome: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: 'vnyx5oqzmbr-ewnu827g846-2hvwb5s30e9',
        nome: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      }
    ]
  },
  {
    id: 'd1epl2u4rev-uoqackf39t-uvouv1ibglm',
    alias: 'evento-js-avancado',
    senha: 'js2024',
    nome: 'Workshop Avançado de JavaScript',
    data: new Date('2024-11-20T15:00:00Z'),
    local: 'Rio de Janeiro, RJ',
    descricao: 'Um workshop avançado para programadores JavaScript.',
    imagem:
      'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    imagemBackground:
      'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
    publicoEsperado: 100,
    convidados: [
      {
        id: 'i57uzu5mupr-lttyi4ka5em-bk0rke2k908',
        nome: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: 'n92phh9vqbb-f3ruyemi01j-8kjulvye2t3',
        nome: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      }
    ]
  },
  {
    id: '3rcvt8q0h0t-94peyz8009a-69272j7c86w',
    alias: 'evento-dev-frontend',
    senha: 'front123',
    nome: 'Bootcamp de Desenvolvimento Frontend',
    data: new Date('2024-11-15T09:00:00Z'),
    local: 'Belo Horizonte, MG',
    descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
    imagem:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
    imagemBackground:
      'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
    publicoEsperado: 150,
    convidados: [
      {
        id: 'k1mga7deqv-ekrybf09el6-acpaik2lp0t',
        nome: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: '1742wu8troji-42xk9d34s5-s26z1ask9m',
        nome: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: 'zk3kzparptb-c9y7u1crgwr-5vnevku4h7r',
        nome: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: 'nvtk89hb06r-xwvqttiq96-6b99vo0chu6',
    alias: 'casamento-alberto-marina',
    senha: 'casamento2024',
    nome: 'Casamento do Alberto e Marina',
    data: new Date('2024-11-25T16:00:00Z'),
    local: 'Florianópolis, SC',
    descricao:
      'Celebração do casamento de Alberto e Marina com amigos e familiares.',
    imagem:
      'https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg',
    imagemBackground:
      'https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg',
    publicoEsperado: 150,
    convidados: [
      {
        id: 'p2kwun37gph-dn69ew6pb3b-pp1tup3cky',
        nome: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: '714vnpu1no9-qmtfjq7ib4-kkv6yv2xmf',
        nome: 'Carla Mendes',
        email: 'carla@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: 'ild5p6kzel-trogwdfsnu-hyco0stp5uw',
    alias: 'aniversario-joao',
    senha: 'joao2024',
    nome: 'Aniversário do João - 30 Anos',
    data: new Date('2024-12-05T18:00:00Z'),
    local: 'Curitiba, PR',
    descricao:
      'Comemoração dos 30 anos de João com amigos próximos e familiares.',
    imagem:
      'https://cdnm.westwing.com.br/glossary/uploads/br/2023/06/28140200/vela-de-aniversario.png',
    imagemBackground:
      'https://cdnm.westwing.com.br/glossary/uploads/br/2023/06/28140200/vela-de-aniversario.png',
    publicoEsperado: 80,
    convidados: [
      {
        id: 'sead3o0n1aq-mcxzdpcpucf-lqjr176lp49',
        nome: 'Maria Souza',
        email: 'maria@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      },
      {
        id: 'bbo6yrk3ruq-qkzn2b258q-jxr68k7ese',
        nome: 'José Almeida',
        email: 'jose@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: 'lu6xhtriao-g5n4eizrxde-ok0284ye6rk',
    alias: 'inauguracao-Samsung',
    senha: 'estrela2024',
    nome: 'Inauguração da Loja Samsung',
    data: new Date('2024-12-10T09:00:00Z'),
    local: 'Porto Alegre, RS',
    descricao:
      'Evento de inauguração da nova loja Samsung com brindes e promoções.',
    imagem:
      'https://villaromanashopping.com.br/wp-content/uploads/2020/09/Samsung-1.jpg',
    imagemBackground:
      'https://villaromanashopping.com.br/wp-content/uploads/2020/09/Samsung-1.jpg',
    publicoEsperado: 3000,
    convidados: [
      {
        id: 'u021fy4ef4i-yckm2122jsp-wolyn3ns7ld',
        nome: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3
      },
      {
        id: 'l077aj2g5d-4a6r49rb5dx-qiakrfc35vi',
        nome: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: 'oofeal44ofo-1n9y04ls0o4-wrs2z8ih5ga',
    alias: 'reuniao-familia-oliveira',
    senha: 'familia2024',
    nome: 'Reunião da Família Oliveira',
    data: new Date('2024-12-15T12:00:00Z'),
    local: 'Salvador, BA',
    descricao: 'Reunião de fim de ano da família Oliveira.',
    imagem:
      'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
    imagemBackground:
      'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    publicoEsperado: 50,
    convidados: [
      {
        id: 'l077aj2g5d-4a6r49rb5dx-qiakrfc35vi',
        nome: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4
      },
      {
        id: 'hiermaacrxh-0lb7ikxwo94n-8eusjm7rv58',
        nome: 'Letícia Oliveira',
        email: 'leticia@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  }
]

export default eventos

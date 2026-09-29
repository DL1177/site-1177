// src/data/municipios.ts
// Base completa e regionalizada dos 92 municípios do Estado do Rio de Janeiro

export interface Municipio {
  nome: string;
  slug: string;
  regiao: string;
  samu100: boolean;
  emendasPagas?: string;
  emendasGarantidas?: string;
  entregasDiretas: string[];
  destaques: string[];
  resumoLocal: string;
}

export const MUNICIPIOS: Municipio[] = [
  {
    nome: 'Nova Iguaçu',
    slug: 'nova-iguacu',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 73.750.000,00',
    emendasGarantidas: 'R$ 38.000.000,00',
    entregasDiretas: [
      'Onco Baixada: Instituto Estadual de Oncologia com 100 leitos e 24 boxes de quimioterapia',
      'Rio Imagem Baixada: Maior centro de imagem da América Latina com mais de 1,6 milhão de exames',
      'Maternidade Mariana Bulhões: Reabertura com 69 leitos e 25 vagas de UTI neonatal',
      'Hospital Dr. Ricardo Cruz: Maior UTI Pediátrica pública do Brasil com 50 leitos',
      'Clínicas da Família 24h: Unidades pioneiras em Patrícia Marinho, Odicéia Morais e Lagoinha',
    ],
    destaques: ['R$ 111,7M Total', 'Onco Baixada', 'Rio Imagem', 'Mariana Bulhões'],
    resumoLocal: 'Nova Iguaçu é uma referência histórica na trajetória do Dr. Luizinho. Como secretário municipal e estadual e líder no Congresso, garantiu mais de R$ 111,7 milhões consolidados para a saúde e transformou a rede de saúde em polo de excelência para todo o Estado.',
  },
  {
    nome: 'Duque de Caxias',
    slug: 'duque-de-caxias',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 52.800.000,00',
    emendasGarantidas: 'R$ 25.000.000,00',
    entregasDiretas: [
      'Atenção Básica e Policlínicas: Mais de R$ 52,8 milhões destinados e pagos para custeio da saúde',
      'Hospital Dr. Moacyr Rodrigues do Carmo: R$ 25 milhões pactuados na CIB-RJ para obras e modernização',
      'Desafogamento do Adão Pereira Nunes: Retaguarda integrada com o Onco Baixada e HTO Nilópolis',
      'Rio Imagem Baixada: Acesso direto da população a ressonâncias, tomografias e biópsias na Dutra',
      'SAMU 100% RJ: Frota renovada atendendo os quatro distritos da cidade com socorro 24h',
    ],
    destaques: ['R$ 77,8M Total', 'Hosp. Moacyr do Carmo', 'Onco Baixada', 'SAMU 100%'],
    resumoLocal: 'Viabilizou quase R$ 78 milhões em investimentos consolidados para a rede de saúde de Caxias, modernizou o Hospital Moacyr do Carmo, garantiu o socorro integral do SAMU e o acesso aos novos polos regionais da Baixada.',
  },
  {
    nome: 'Nilópolis',
    slug: 'nilopolis',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 23.300.000,00',
    emendasGarantidas: 'R$ 10.500.000,00',
    entregasDiretas: [
      'HTO Baixada (Melchiades Calazans): Hospital Estadual de Ortopedia com mais de 28.700 cirurgias realizadas',
      'Complexo JK: Reforma da UPA 24h e reabertura do Hospital Municipal Juscelino Kubitschek',
      'Polos Regionais de Saúde: Acesso garantido aos exames do Rio Imagem Baixada e ao Onco Baixada',
      'Instituto Beija-Flor: Mais de R$ 2,5 milhões pagos para ações sociais e de saúde comunitária',
      'SAMU 100% RJ: Novas viaturas e socorro pré-hospitalar com custeio garantido',
    ],
    destaques: ['R$ 33,8M Total', 'HTO Baixada', 'Hospital JK & UPA', 'SAMU 100%'],
    resumoLocal: 'Mais de R$ 33,8 milhões consolidados para a saúde de Nilópolis, além de fundar o HTO Baixada — polo ortopédico de excelência estadual — e modernizar o complexo do Hospital e UPA JK.',
  },
  {
    nome: 'Rio de Janeiro',
    slug: 'rio-de-janeiro',
    regiao: 'Metropolitana',
    samu100: true,
    emendasPagas: 'R$ 35.000.000,00',
    entregasDiretas: [
      'Instituto Estadual do Cérebro Paulo Niemeyer: Novo prédio de 6 andares, 103 leitos e Gamma Knife 100% SUS',
      'Instituto Estadual de Olhos (Senador Vasconcelos): Mais de 113 mil atendimentos e cirurgias de visão na Zona Oeste',
      'Cedtea Gávea: Primeiro centro público estadual de diagnóstico precoce do Autismo com mais de 13 mil consultas',
      'Hospital Estadual Getúlio Vargas (Penha): Nova UTI Pediátrica e Tomógrafo computadorizado de emergência',
      'AME Cantagalo (Susana Naspolini): Mais de 40 mil atendimentos ambulatoriais na Zona Sul',
    ],
    destaques: ['Instituto do Cérebro', 'Instituto de Olhos', 'Cedtea Gávea', 'Hosp. Getúlio Vargas'],
    resumoLocal: 'Investimentos massivos na Capital, desde a ponta neurocirúrgica mundial no Centro até o primeiro polo de catarata e glaucoma em Senador Vasconcelos, na Zona Oeste, e assistência pediátrica na Penha.',
  },
  {
    nome: 'Mesquita',
    slug: 'mesquita',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 15.200.000,00',
    emendasGarantidas: 'R$ 4.200.000,00',
    entregasDiretas: [
      'Hospital Estadual da Mãe: Reestruturação completa com implantação de UTI materna e neonatal',
      'Atenção Primária: Mais de R$ 15,2 milhões destinados e pagos para postos e saúde da família em Mesquita',
      'Clínicas da Família: R$ 4,2 milhões de aportes estaduais para a rede municipal de atenção básica',
      'Polos Regionais: Acesso direto da população ao HTO Baixada, Rio Imagem Baixada e Onco Baixada',
      'SAMU 100% RJ: Novas ambulâncias operando na cidade com custeio mensal garantido',
    ],
    destaques: ['Hospital da Mãe', 'R$ 19,4M Total', 'Clínicas da Família', 'SAMU 100%'],
    resumoLocal: 'Garantiu mais de R$ 19,4 milhões consolidados para a saúde de Mesquita, transformou o Hospital Estadual da Mãe com UTI materna e neonatal, além de socorro móvel universal e acesso aos polos regionais.',
  },
  {
    nome: 'Magé',
    slug: 'mage',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 19.100.000,00',
    entregasDiretas: [
      'Custeio da Saúde: Mais de R$ 19,1 milhões destinados e pagos para postos de família e policlínicas',
      'Onco Baixada: Acesso regulado ao primeiro hospital de câncer da Baixada Fluminense',
      'Rio Imagem Baixada: Tomografias, ressonâncias e biópsias com rapidez sem ir à Capital',
      'SAMU 100% RJ: Novas ambulâncias entregues cobrindo todo o território mageense',
      'Regulação em Tempo Real no CIS: Redução do tempo de espera global por leitos de emergência e UTI',
    ],
    destaques: ['R$ 19,1M Pagos', 'Onco Baixada', 'Rio Imagem', 'SAMU 100%'],
    resumoLocal: 'Destinou mais de R$ 19 milhões para o custeio da saúde pública de Magé, assegurou ambulâncias novas do SAMU 100% e garantiu acesso direto aos hospitais e centros de diagnóstico estaduais.',
  },
  {
    nome: 'Belford Roxo',
    slug: 'belford-roxo',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 11.500.000,00',
    entregasDiretas: [
      'Onco Baixada: Hospital Estadual de Câncer ao lado do município com 100 leitos e 24 boxes de quimio',
      'Rio Imagem Baixada: Acesso imediato a exames de ressonância e tomografia na Rodovia Presidente Dutra',
      'HTO Baixada (Nilópolis): Cirurgias ortopédicas de trauma e colocação de próteses pelo SUS',
      'Atenção Básica: Mais de R$ 11,5 milhões destinados e pagos para postos de saúde de Belford Roxo',
      'SAMU 100% RJ: Novas ambulâncias entregues com custeio operacional garantido',
    ],
    destaques: ['Onco Baixada', 'Rio Imagem', 'R$ 11,5M Pagos', 'SAMU 100%'],
    resumoLocal: 'A população de Belford Roxo realiza exames complexos e tratamento de câncer ao lado de casa com o Onco Baixada e Rio Imagem, além de contar com mais de R$ 11,5 milhões pagos e socorro ágil do SAMU.',
  },
  {
    nome: 'São João de Meriti',
    slug: 'sao-joao-de-meriti',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 9.100.000,00',
    entregasDiretas: [
      'Hospital da Mulher Heloneida Studart: Inauguração do Banco de Leite e modernização do atendimento obstétrico',
      'Onco Baixada: Referência para tratamento integral de câncer sem precisar viajar ao Rio',
      'Rio Imagem Baixada & HTO Baixada: Exames avançados de imagem e cirurgias ortopédicas de retaguarda',
      'Saúde Municipal: Mais de R$ 9,1 milhões destinados e pagos para a rede de atendimento de Meriti',
      'SAMU 100% RJ: Cobertura total de socorro móvel em todos os bairros da cidade',
    ],
    destaques: ['Hospital da Mulher', 'Onco Baixada', 'Rio Imagem', 'SAMU 100%'],
    resumoLocal: 'Cuidado materno-infantil fortalecido no Hospital da Mulher Heloneida Studart, mais de R$ 9,1 milhões pagos e acesso direto aos polos regionais do Onco Baixada e Rio Imagem.',
  },
  {
    nome: 'Volta Redonda',
    slug: 'volta-redonda',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 10.900.000,00',
    entregasDiretas: [
      'Hospital Regional Zilda Arns: Maior polo hospitalar com 237 leitos de alta complexidade e novos centros cirúrgicos',
      'Nova Ressonância Magnética: Equipamento de alta precisão instalado no Zilda Arns para diagnósticos avançados',
      'Custeio da Saúde Municipal: Mais de R$ 10,9 milhões destinados e pagos para urgência e rede básica',
      'Programa Revi-VER: Apoio financeiro aos mutirões com mais de 30 mil cirurgias de visão realizadas',
      'SAMU 100% Médio Paraíba: Frota renovada de ambulâncias e bases de socorro avançado',
    ],
    destaques: ['Hospital Zilda Arns', 'Ressonância Magnética', 'R$ 10,9M Pagos', 'Mutirão Revi-VER'],
    resumoLocal: 'Referência de saúde para o Médio Paraíba com mais de R$ 10,9 milhões pagos, o Hospital Regional Zilda Arns fortalecido com ressonância magnética e apoio contínuo aos mutirões de visão do Revi-VER.',
  },
  {
    nome: 'Barra Mansa',
    slug: 'barra-mansa',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 9.800.000,00',
    entregasDiretas: [
      'Hospital dos Olhos de Barra Mansa: Novo polo oftalmológico inaugurado em 2026 para cirurgias gratuitas de catarata e glaucoma no Médio Paraíba',
      'Custeio Hospitalar e Básico: Mais de R$ 9,8 milhões destinados e pagos para o Fundo Municipal de Saúde',
      'Hospital Regional Zilda Arns: Retaguarda de 237 leitos de UTI e novos centros cirúrgicos vizinhos',
      'Santa Casa de Barra Mansa: Articulação institucional para o credenciamento oncológico e modernização',
      'SAMU 100% RJ: Ambulâncias novas integradas à base de socorro do Médio Paraíba',
    ],
    destaques: ['Hospital dos Olhos', 'R$ 9,8M Pagos', 'Hospital Zilda Arns', 'Santa Casa'],
    resumoLocal: 'Inaugurou o Hospital dos Olhos de Barra Mansa em 2026, destinou quase R$ 10 milhões para custear a saúde municipal, garantiu a retaguarda do Hospital Zilda Arns e apoiou a Santa Casa.',
  },
  {
    nome: 'Quatis',
    slug: 'quatis',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 2.500.000,00',
    emendasGarantidas: 'R$ 16.000.000,00',
    entregasDiretas: [
      'Hospital Municipal de Quatis: Convênio estadual de R$ 16 milhões (SES-RJ nº 012/2023) para as obras da unidade',
      'Equipamentos Hospitalares: R$ 2,5 milhões destinados e pagos para modernização da saúde',
      'Hospital Regional Zilda Arns: Retaguarda cirúrgica e de UTI para a população de Quatis',
      'SAMU 100% RJ: Ambulância nova entregue e custeada pelo Estado',
    ],
    destaques: ['R$ 18,5M Total', 'Hospital de Quatis', 'Hospital Zilda Arns', 'SAMU 100%'],
    resumoLocal: 'Dr. Luizinho formalizou como secretário de Estado o convênio de R$ 16 milhões para as obras do hospital municipal, destinou R$ 2,5 milhões diretos e garantiu o suporte do Hospital Zilda Arns.',
  },
  {
    nome: 'Piraí',
    slug: 'pirai',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 3.800.000,00',
    entregasDiretas: [
      'SAMU 100% RJ: Novas ambulâncias entregues com custeio pago para o município de Piraí',
      'Hospital Regional Zilda Arns: Retaguarda de alta complexidade, exames e leitos de UTI na região',
      'Associação Pestalozzi: Apoio contínuo à assistência e centro de equoterapia',
      'Regulação Integrada no CIS: Monitoramento de leitos em tempo real com redução de 38,4% na espera',
    ],
    destaques: ['Hospital Zilda Arns', 'SAMU 100%', 'R$ 3,8M Pagos'],
    resumoLocal: 'Investimento na saúde preventiva, reabilitação e socorro de urgência com SAMU 100% e retaguarda completa no Hospital Regional Zilda Arns para a população de Piraí.',
  },
  {
    nome: 'Petrópolis',
    slug: 'petropolis',
    regiao: 'Região Serrana',
    samu100: true,
    emendasPagas: 'R$ 11.400.000,00',
    entregasDiretas: [
      'Apoio à Saúde e Custeio: Mais de R$ 11,4 milhões destinados e pagos para custeio hospitalar e atenção básica',
      'Hospitais Alcides Carneiro e Santa Teresa: Aportes estaduais e pactuações na CIB para socorro financeiro',
      'SAMU 100% RJ na Serra: Frota de ambulâncias adaptada para socorro no relevo da serra e distritos',
      'CIS e Resgate Aeromédico: Regulação inteligente de leitos e suporte aeromédico por helicóptero',
    ],
    destaques: ['R$ 11,4M Pagos', 'Hospitais de Petrópolis', 'SAMU 100% Serra'],
    resumoLocal: 'Destinou mais de R$ 11,4 milhões em recursos federais pagos para apoiar a rede hospitalar de Petrópolis, além de garantir socorro ágil do SAMU adaptado ao relevo da serra.',
  },
  {
    nome: 'Niterói',
    slug: 'niteroi',
    regiao: 'Metropolitana',
    samu100: true,
    emendasPagas: 'R$ 6.200.000,00',
    entregasDiretas: [
      'Hospital Estadual Azevedo Lima: Reestruturação completa da Emergência e Maternidade de alto padrão',
      'Rede SUS Municipal: Mais de R$ 6,2 milhões destinados e pagos para entidades e custeio da saúde em Niterói',
      'Instituto Estadual do Cérebro: Referência neurocirúrgica e radiocirurgia Gamma Knife 100% SUS',
      'SAMU 100% RJ: Renovação de UTIs móveis e integração direta à regulação do CIS',
    ],
    destaques: ['Hosp. Azevedo Lima', 'R$ 6,2M Pagos', 'SAMU 100%'],
    resumoLocal: 'Destinou mais de R$ 6,2 milhões para a saúde de Niterói, modernizou o Hospital Azevedo Lima com emergência e maternidade de alto padrão humanizado e integrou a rede ao CIS.',
  },
  {
    nome: 'Campos dos Goytacazes',
    slug: 'campos-dos-goytacazes',
    regiao: 'Norte Fluminense',
    samu100: true,
    emendasPagas: 'R$ 12.000.000,00',
    entregasDiretas: [
      'SAMU 100% RJ no Norte: Novas ambulâncias entregues para o polo regional de Campos',
      'Custeio de Média e Alta Complexidade: Mais de R$ 12 milhões destinados e pagos para a saúde hospitalar',
      'Hospitais Filantrópicos: Apoio contínuo ao Ferreira Machado, Plantadores de Cana e Santa Casa de Misericórdia',
      'Regulação Central no CIS: Monitoramento em tempo real com redução de 38,4% na fila de espera por UTI',
    ],
    destaques: ['R$ 12M Pagos', 'SAMU 100% Norte', 'Apoio Hospitalar'],
    resumoLocal: 'Polo do Norte Fluminense beneficiado com R$ 12 milhões pagos para hospitais, modernização do socorro pré-hospitalar com o SAMU 100% e regulação inteligente de vagas pelo CIS.',
  },
  {
    nome: 'Angra dos Reis',
    slug: 'angra-dos-reis',
    regiao: 'Costa Verde',
    samu100: true,
    emendasPagas: 'R$ 7.100.000,00',
    entregasDiretas: [
      'SAMU 100% RJ: Ambulâncias novas e suporte marítimo articulado para o atendimento nas ilhas',
      'Resgate Aeromédico da Saúde: Helicóptero dedicado para transferências rápidas em acidentes na Rodovia Rio-Santos',
      'Atenção Primária: R$ 7,1 milhões destinados e pagos para postos de saúde e unidades da família',
      'Instituto Estadual de Olhos (Senador Vasconcelos): Vagas reguladas para cirurgias de visão na Zona Oeste',
    ],
    destaques: ['R$ 7,1M Pagos', 'SAMU 100%', 'Resgate Aéreo Rio-Santos'],
    resumoLocal: 'Socorro móvel rápido nas estradas e ilhas de Angra dos Reis com ambulâncias novas do SAMU, apoio aeromédico de helicóptero e mais de R$ 7,1 milhões em recursos pagos.',
  },
  {
    nome: 'Cabo Frio',
    slug: 'cabo-frio',
    regiao: 'Baixadas Litorâneas',
    samu100: true,
    emendasPagas: 'R$ 5.900.000,00',
    entregasDiretas: [
      'SAMU 100% na Região dos Lagos: Novas ambulâncias com custeio reforçado para atender moradores e turistas',
      'Custeio da Saúde: Mais de R$ 5,9 milhões destinados e pagos para reforço do atendimento hospitalar',
      'Resgate Aeromédico da Saúde: Helicóptero de prontidão para afogamentos e acidentes em rodovias litorâneas',
      'Regulação Central no CIS: Monitoramento de leitos hospitalares de retaguarda com redução de filas',
    ],
    destaques: ['R$ 5,9M Pagos', 'SAMU 100% Lagos', 'Resgate Aeromédico'],
    resumoLocal: 'Frota do SAMU 100% renovada para a população e temporada turística de Cabo Frio, quase R$ 6 milhões pagos e apoio aeromédico estratégico de helicóptero.',
  },
  {
    nome: 'Itaperuna',
    slug: 'itaperuna',
    regiao: 'Noroeste Fluminense',
    samu100: true,
    emendasPagas: 'R$ 4.700.000,00',
    entregasDiretas: [
      'SAMU 100% no Noroeste: Cobertura universal de ambulâncias em toda a zona urbana e distritos de Itaperuna',
      'Hospital São José do Avaí: Mais de R$ 4,7 milhões destinados e pagos para a rede SUS e alta complexidade',
      'Rede Hospitalar Filantrópica: Apoio contínuo à manutenção e ampliação de leitos de UTI',
      'Regulação Inteligente no CIS: Redução de 38,4% no tempo de espera via monitoramento em tempo real',
    ],
    destaques: ['R$ 4,7M Pagos', 'SAMU 100% Noroeste', 'Hosp. São José do Avaí'],
    resumoLocal: 'Polo do Noroeste fluminense com socorro móvel de emergência universalizado pelo SAMU 100%, quase R$ 5 milhões pagos e suporte fundamental ao Hospital São José do Avaí.',
  },
  {
    nome: 'Mangaratiba',
    slug: 'mangaratiba',
    regiao: 'Costa Verde',
    samu100: true,
    emendasPagas: 'R$ 4.200.000,00',
    entregasDiretas: [
      'SAMU 100% RJ: Novas ambulâncias entregues adaptadas ao relevo da Costa Verde',
      'Atenção Primária e Urgência: Mais de R$ 4,2 milhões destinados e pagos para a rede de pronto atendimento e postos',
      'Resgate Aeromédico da Saúde: Helicóptero de prontidão para socorro imediato na Rodovia Rio-Santos',
      'Instituto Estadual de Olhos (Senador Vasconcelos): Vagas reguladas para cirurgias de visão',
    ],
    destaques: ['R$ 4,2M Pagos', 'SAMU 100%', 'Resgate Aéreo Rio-Santos'],
    resumoLocal: 'Ambulâncias do SAMU 100% entregues, mais de R$ 4,2 milhões pagos e apoio de helicóptero médico para garantir socorro imediato aos moradores e na rodovia Rio-Santos.',
  },
  {
    nome: 'Araruama',
    slug: 'araruama',
    regiao: 'Baixadas Litorâneas',
    samu100: true,
    entregasDiretas: [
      'Hospital Estadual Roberto Chabo (HERC): Novo Centro de Trauma de alta complexidade e ampliação de leitos de CTI atendendo 9 municípios da região',
      'SAMU 100% na Região dos Lagos: Frota de ambulâncias novas reforçada em Araruama com custeio mensal garantido',
      'Resgate Aeromédico da Saúde: Helicóptero dedicado para transferências ágeis de urgência e traumas rodoviários',
      'Regulação Central pelo CIS: Monitoramento em tempo real com redução de 38,4% na fila de espera por leitos',
      'Instituto Estadual do Cérebro: Retaguarda para neurocirurgia de ponta e radiocirurgia Gamma Knife 100% SUS',
    ],
    destaques: ['Centro de Trauma HERC', 'Leitos de CTI', 'SAMU 100% Lagos', 'Resgate Aeromédico'],
    resumoLocal: 'Araruama sedia o Hospital Estadual Roberto Chabo (HERC), fortalecido por Dr. Luizinho com o novo Centro de Trauma e leitos de CTI de referência para 9 municípios, além de ambulâncias novas do SAMU 100% e resgate aeromédico.',
  },
  {
    nome: 'Armação dos Búzios',
    slug: 'armacao-dos-buzios',
    regiao: 'Baixadas Litorâneas',
    samu100: true,
    entregasDiretas: [
      'Centro Regional de Hemodiálise de Búzios: Serviço especializado inaugurado em 2024 para atender até 120 pacientes renais/dia sem viajar para a Capital',
      'SAMU 100% RJ: Novas viaturas e ambulâncias entregues com custeio garantido para a população e alta temporada',
      'Hospital Estadual Roberto Chabo: Retaguarda de urgência no polo de trauma e CTI em Araruama',
      'Regulação em Tempo Real no CIS: Transferências ágeis e monitoramento de vagas hospitalares',
    ],
    destaques: ['Centro de Hemodiálise', 'SAMU 100%', 'Polo de Trauma', 'Regulação CIS'],
    resumoLocal: 'Conquistou o primeiro Centro Regional de Hemodiálise de Búzios, atendendo até 120 pacientes/dia e evitando viagens desgastantes, além de universalização do socorro com o SAMU 100%.',
  },
  {
    nome: 'São Pedro da Aldeia',
    slug: 'sao-pedro-da-aldeia',
    regiao: 'Baixadas Litorâneas',
    samu100: true,
    entregasDiretas: [
      'UPA Pediátrica de São Pedro da Aldeia: Reforma e modernização da unidade de emergência infantil com mais de 5 mil atendimentos mensais',
      'SAMU 100% RJ: Novas ambulâncias operando com custeio estadual de socorro pré-hospitalar',
      'Hospital Estadual Roberto Chabo: Retaguarda de CTI e trauma no polo regional vizinho',
      'Regulação Central no CIS: Monitoramento em tempo real com redução de 38,4% na espera',
    ],
    destaques: ['UPA Pediátrica', 'SAMU 100%', 'Regulação CIS'],
    resumoLocal: 'Modernizou a UPA Pediátrica para acolher com carinho e agilidade mais de 5 mil crianças por mês, além de ambulâncias novas do SAMU 100% e retaguarda no Hospital Roberto Chabo.',
  },
  {
    nome: 'Resende',
    slug: 'resende',
    regiao: 'Médio Paraíba',
    samu100: true,
    entregasDiretas: [
      'Hospital dos Olhos de Resende: Novo polo oftalmológico inaugurado em 2024 com cirurgias gratuitas de catarata e glaucoma no Médio Paraíba',
      'Hospital Regional Zilda Arns: Retaguarda de 237 leitos de alta complexidade e ressonância magnética avançada',
      'SAMU 100% no Médio Paraíba: Frota renovada de ambulâncias e socorro de urgência com custeio garantido',
      'Regulação Inteligente no CIS: Redução de 38,4% no tempo de espera por leitos',
    ],
    destaques: ['Hospital dos Olhos', 'Hospital Zilda Arns', 'SAMU 100%', 'Regulação CIS'],
    resumoLocal: 'Referência oftalmológica com a inauguração do Hospital dos Olhos de Resende em 2024, retaguarda completa no Hospital Regional Zilda Arns e frota renovada do SAMU 100%.',
  },
  {
    nome: 'Casimiro de Abreu',
    slug: 'casimiro-de-abreu',
    regiao: 'Baixadas Litorâneas',
    samu100: true,
    entregasDiretas: [
      'Rio Imagem Lagos (Barra de São João): Novo polo de exames de alta resolução projetado para mais de 4 mil procedimentos por mês',
      'SAMU 100% RJ: Novas ambulâncias entregues com base de socorro e custeio estadual mensal',
      'Regulação Central pelo CIS: Transferências ágeis de urgência e leitos monitorados em tempo real',
    ],
    destaques: ['Rio Imagem Lagos', 'SAMU 100%', 'Regulação CIS'],
    resumoLocal: 'Implantou o polo do Rio Imagem Lagos em Barra de São João para exames de alta resolução na Região dos Lagos e garantiu socorro móvel com o SAMU 100%.',
  },
  {
    nome: 'Queimados',
    slug: 'queimados',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 2.306.000,00',
    entregasDiretas: [
      'Atenção Básica e Urgência: Mais de R$ 2,3 milhões pagos para construção de UBS Tipo 1 e novos equipamentos',
      'Onco Baixada: Acesso direto e prioritário ao primeiro hospital oncológico público da Baixada em Nova Iguaçu',
      'Rio Imagem Baixada: Polo vizinho de exames de ressonância e tomografia na Dutra',
      'SAMU 100% RJ: Ambulâncias novas entregues com custeio integral mensal',
    ],
    destaques: ['R$ 2,3M Pagos', 'Onco Baixada', 'Rio Imagem', 'SAMU 100%'],
    resumoLocal: 'Mais de R$ 2,3 milhões pagos para fortalecer postos e UBS em Queimados, além de garantir o socorro do SAMU 100% e acesso direto aos polos vizinhos do Onco Baixada e Rio Imagem.',
  },
  {
    nome: 'Rio Claro',
    slug: 'rio-claro',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 1.500.000,00',
    entregasDiretas: [
      'Tomógrafo de Rio Claro: R$ 1,5 milhão pago para aquisição de tomógrafo computadorizado para diagnósticos rápidos',
      'Hospital Regional Zilda Arns: Retaguarda de cirurgias, exames e leitos de UTI',
      'SAMU 100% RJ: Ambulância nova entregue para o município com custeio garantido',
    ],
    destaques: ['Tomógrafo R$ 1,5M', 'Hospital Zilda Arns', 'SAMU 100%'],
    resumoLocal: 'Destinou R$ 1,5 milhão pago para o novo tomógrafo de Rio Claro, universalizou o socorro com o SAMU 100% e assegurou suporte cirúrgico no Hospital Regional Zilda Arns.',
  },
  {
    nome: 'Barra do Piraí',
    slug: 'barra-do-pirai',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 500.000,00',
    entregasDiretas: [
      'APAE de Barra do Piraí: R$ 500 mil pagos para ações de reabilitação e assistência social',
      'Hospital Regional Zilda Arns: Retaguarda de cirurgias ortopédicas e leitos de UTI no Médio Paraíba',
      'SAMU 100% RJ: Novas ambulâncias operando com custeio estadual',
    ],
    destaques: ['APAE R$ 500 mil', 'Hospital Zilda Arns', 'SAMU 100%'],
    resumoLocal: 'Apoio à APAE de Barra do Piraí, socorro de emergência com novas viaturas do SAMU 100% e retaguarda hospitalar completa no Hospital Regional Zilda Arns.',
  },
  {
    nome: 'Cantagalo',
    slug: 'cantagalo',
    regiao: 'Região Serrana',
    samu100: true,
    entregasDiretas: [
      'SAMU 100% na Serra: Ambulância com tração reforçada entregue para socorro ágil na sede e distritos montanhosos',
      'Apoio à Rede Hospitalar Serrana: Parcerias para manutenção e custeio de leitos na Região Serrana',
      'Resgate Aeromédico da Saúde: Suporte de helicóptero para transferências de emergência em áreas de serra',
      'Regulação Inteligente no CIS: Redução de 38,4% no tempo de espera por leitos de emergência e UTI',
      'Instituto Estadual do Cérebro: Referência para casos neurológicos complexos e radiocirurgia 100% SUS',
    ],
    destaques: ['SAMU 100% Serra', 'Apoio Hospitalar', 'Regulação CIS'],
    resumoLocal: 'Dr. Luizinho garantiu ambulâncias novas do SAMU 100% preparadas para o relevo de Cantagalo e seus distritos, suporte aos hospitais serranos e leitos monitorados em tempo real pelo CIS.',
  },
];

import { MUNICIPIOS_MAPA } from './mapa-rj-paths';

// =======================================================================
// CONFIGURAÇÃO DOS POLOS REGIONAIS DE SAÚDE DO ESTADO DO RIO DE JANEIRO
// Atribuição oficial conforme a Rede de Atenção à Saúde (CIB-RJ / SES-RJ)
// =======================================================================
const CONFIG_REGIOES: Record<string, {
  entregas: (nome: string) => string[];
  destaques: string[];
  resumo: (nome: string) => string;
}> = {
  'Baixada Fluminense': {
    entregas: (nome: string) => [
      'Onco Baixada: Polo regional em Nova Iguaçu com 100 leitos e 24 boxes de quimioterapia para tratar o câncer na Baixada sem precisar viajar ao Centro do Rio',
      'Rio Imagem Baixada: Maior centro de imagem da América Latina com ressonância magnética, tomografia e exames de alta precisão às margens da Dutra',
      'HTO Baixada: Hospital Estadual de Ortopedia em Nilópolis com mais de 28 mil cirurgias realizadas, desafogando as emergências da região',
      `SAMU 100% RJ: Ambulância nova entregue para ${nome} com custeio estadual mensal garantido (Deliberação CIB nº 7.178/2023)`,
      'Regulação em Tempo Real no CIS: Redução auditada de 38,4% no tempo de espera global por leitos de emergência e UTI',
    ],
    destaques: ['Onco Baixada', 'Rio Imagem', 'HTO Baixada', 'SAMU 100%'],
    resumo: (nome: string) =>
      `Como secretário de Estado de Saúde e deputado federal, Dr. Luizinho garantiu ambulância nova do SAMU 100% para ${nome} e estruturou o acesso direto da população aos novos polos da Baixada: o Onco Baixada (câncer), o Rio Imagem Baixada (exames complexos) e o HTO Baixada (trauma ortopédico), além de regulação ágil pelo CIS.`,
  },

  'Médio Paraíba': {
    entregas: (nome: string) => [
      'Hospital Regional Zilda Arns: Maior polo hospitalar do Sul Fluminense em Volta Redonda com 237 leitos de alta complexidade e novos centros cirúrgicos',
      'Nova Ressonância Magnética no Zilda Arns: Equipamento de ponta entregue em 2023 para diagnósticos de alta resolução no Médio Paraíba',
      'Programa Revi-VER: Apoio e recursos estaduais aos mutirões de cirurgias de visão para zerar as filas de catarata da região',
      `SAMU 100% Médio Paraíba: Novas viaturas e ambulâncias entregues com base de socorro em ${nome}`,
      'Regulação Inteligente no CIS: Integração de leitos de emergência em tempo real com redução de 38,4% na fila de espera',
    ],
    destaques: ['Hospital Zilda Arns', 'Ressonância Magnética', 'Mutirões de Visão', 'SAMU 100%'],
    resumo: (nome: string) =>
      `Dr. Luizinho fortaleceu a saúde de ${nome} com ambulâncias novas do SAMU 100% e garantiu a retaguarda de alta complexidade no Hospital Regional Zilda Arns — com 237 leitos, novos centros cirúrgicos e ressonância magnética — além de reduzir em quase 40% a espera de leitos pelo CIS.`,
  },

  'Centro-Sul Fluminense': {
    entregas: (nome: string) => [
      'Polos Regionais Zilda Arns e Rio Imagem: Retaguarda para cirurgias e exames de imagem de alta complexidade regulados pela Dutra / RJ-127',
      'Rede Hospitalar Regional: Fortalecimento das unidades de saúde e hospitais filantrópicos e universitários da Região Centro-Sul',
      `SAMU 100% RJ: Ambulância nova entregue para ${nome} com custeio estadual de implantação garantido para socorro pré-hospitalar`,
      'Regulação em Tempo Real no CIS: Redução auditada de 38,4% no tempo de espera global por leitos de emergência e UTI',
      'Atuação Federal em Brasília: Defesa do custeio contínuo e piso das equipes de Atenção Básica e agentes de saúde',
    ],
    destaques: ['Polo Regional Zilda Arns', 'Rio Imagem', 'SAMU 100%', 'Regulação CIS'],
    resumo: (nome: string) =>
      `Como secretário de Estado de Saúde e líder no Congresso, Dr. Luizinho garantiu ambulância nova do SAMU 100% para ${nome}, suporte aos centros hospitalares do Centro-Sul, vagas reguladas no Hospital Regional Zilda Arns e no Rio Imagem Baixada, e monitoramento em tempo real pelo CIS.`,
  },

  'Metropolitana': {
    entregas: (nome: string) => [
      'Instituto Estadual do Cérebro Paulo Niemeyer: Novo anexo de 6 andares no Centro, 103 leitos e Gamma Knife 100% SUS',
      'Instituto Estadual de Olhos: Polo oftalmológico de excelência em Senador Vasconcelos com mais de 113 mil atendimentos e cirurgias de visão',
      'Hospital Estadual Getúlio Vargas: Nova UTI Pediátrica e Tomógrafo computadorizado na emergência da Penha',
      'Hospital Estadual Azevedo Lima: Modernização da emergência e maternidade de alto risco em Niterói',
      'Cedtea Gávea: Primeiro Centro Público Estadual de Diagnóstico Precoce do Autismo (TEA)',
      `SAMU 100% RJ: Renovação da frota de ambulâncias e custeio estadual de socorro móvel garantido para ${nome}`,
    ],
    destaques: ['Instituto do Cérebro', 'Instituto de Olhos', 'Cedtea Gávea', 'SAMU 100%'],
    resumo: (nome: string) =>
      `Investimentos estruturantes na Região Metropolitana, assegurando ambulâncias novas do SAMU 100% para ${nome}, leitos no Instituto Estadual do Cérebro e Instituto de Olhos, e redução de filas por meio do CIS.`,
  },

  'Costa Verde': {
    entregas: (nome: string) => [
      `SAMU 100% RJ: Ambulâncias novas adaptadas ao relevo montanhoso e costeiro com custeio garantido em ${nome}`,
      'Resgate Aeromédico da Saúde: Helicópteros médicos dedicados a salvar minutos vitais em acidentes graves na Rodovia Rio-Santos',
      'Instituto Estadual de Olhos: Vagas reguladas em Senador Vasconcelos para cirurgias gratuitas de catarata e glaucoma na Zona Oeste',
      'Regulação Integrada no CIS: Agilidade no transporte e redução de 38,4% no tempo de espera por leitos de alta complexidade',
    ],
    destaques: ['SAMU 100%', 'Resgate Aeromédico', 'Instituto de Olhos', 'Regulação CIS'],
    resumo: (nome: string) =>
      `Dr. Luizinho garantiu o SAMU 100% em ${nome} com suporte aeromédico de helicóptero para resgates rápidos na Rio-Santos e acesso aos polos de média e alta complexidade regulados pelo CIS.`,
  },

  'Região Serrana': {
    entregas: (nome: string) => [
      `SAMU 100% na Serra: Ambulâncias com tração e estrutura reforçada para socorro no relevo montanhoso, estradas vicinais e distritos de ${nome}`,
      'Apoio à Rede Hospitalar e Filantrópica: Suporte financeiro e pactuações para custeio de leitos em hospitais da região serrana',
      'Resgate Aeromédico da Saúde: Transporte ágil por helicóptero para traumas graves e áreas de difícil acesso na serra',
      'Regulação Inteligente no CIS: Monitoramento de leitos em tempo real com redução de 38,4% no tempo de espera',
      'Instituto Estadual do Cérebro: Referência para casos neurológicos complexos e radiocirurgia Gamma Knife 100% SUS',
    ],
    destaques: ['SAMU 100% Serra', 'Apoio Hospitalar', 'Resgate Aéreo', 'Regulação CIS'],
    resumo: (nome: string) =>
      `Na Região Serrana, Dr. Luizinho assegurou ambulâncias do SAMU 100% adaptadas ao relevo de ${nome}, suporte aos hospitais regionais, apoio aeromédico e integração em tempo real de leitos de UTI pelo CIS.`,
  },

  'Baixadas Litorâneas': {
    entregas: (nome: string) => [
      `SAMU 100% na Região dos Lagos: Frota de ambulâncias novas reforçada em ${nome} para acolher moradores e absorver o aumento na alta temporada`,
      'Resgate Aeromédico da Saúde: Helicópteros de salvamento para socorro imediato em afogamentos, traumas graves e estradas litorâneas',
      'Regulação Central pelo CIS: Transferências ágeis de urgência e redução comprovada de quase 40% na fila de espera por leitos',
      'Instituto Estadual do Cérebro: Retaguarda terciária e quaternária para procedimentos neurocirúrgicos de ponta pelo SUS',
    ],
    destaques: ['SAMU 100% Lagos', 'Resgate Aeromédico', 'Regulação CIS', 'Instituto do Cérebro'],
    resumo: (nome: string) =>
      `Dr. Luizinho universalizou o socorro do SAMU 100% em ${nome} com suporte aeromédico estratégico para a Região dos Lagos e agilizou as transferências de urgência para leitos de retaguarda via CIS.`,
  },

  'Norte Fluminense': {
    entregas: (nome: string) => [
      `SAMU 100% no Norte: Ambulâncias novas entregues com custeio garantido em ${nome}, cobrindo a sede e distritos`,
      'Apoio aos Polos e Hospitais Filantrópicos: Recursos federais e aportes da SES-RJ para manutenção de leitos de UTI e média/alta complexidade',
      'Regulação em Tempo Real no CIS: Redução auditada de 38,4% no tempo de espera por leitos de emergência',
      'Instituto Estadual do Cérebro: Referência para cirurgias neurológicas complexas e radiocirurgia 100% gratuitas pelo SUS',
    ],
    destaques: ['SAMU 100% Norte', 'Apoio aos Hospitais', 'Regulação CIS', 'Instituto do Cérebro'],
    resumo: (nome: string) =>
      `No Norte Fluminense, Dr. Luizinho garantiu ambulâncias novas do SAMU 100% em ${nome}, apoio contínuo à rede hospitalar filantrópica e agilidade histórica no acesso a leitos de UTI pelo CIS.`,
  },

  'Noroeste Fluminense': {
    entregas: (nome: string) => [
      `SAMU 100% no Noroeste: Ambulâncias novas entregues cobrindo 100% das áreas urbanas, distritos e estradas rurais de ${nome}`,
      'Apoio aos Hospitais Filantrópicos Regionais: Parcerias para custeio de leitos de terapia intensiva e atendimento de urgência',
      'Regulação Inteligente no CIS: Redução de 38,4% no tempo de espera para transferências e leitos hospitalares de retaguarda',
      'Instituto Estadual do Cérebro: Acesso universal ao tratamento de tumores cerebrais com radiocirurgia robótica pelo SUS',
    ],
    destaques: ['SAMU 100% Noroeste', 'Hospitais Filantrópicos', 'Regulação CIS', 'Instituto do Cérebro'],
    resumo: (nome: string) =>
      `Dr. Luizinho assegurou socorro pré-hospitalar em ${nome} com o SAMU 100% em todas as regiões do município, apoio às unidades filantrópicas do Noroeste e redução na fila de regulação pelo CIS.`,
  },
};

export function obterTodosMunicipios(): Municipio[] {
  const mapaExistentes = new Map(MUNICIPIOS.map(m => [m.nome.toLowerCase(), m]));

  return MUNICIPIOS_MAPA.map(mPath => {
    const achado = mapaExistentes.get(mPath.nome.toLowerCase());
    if (achado) {
      return {
        ...achado,
        slug: mPath.slug,
        regiao: mPath.regiao,
      };
    }

    // Configuração oficial específica da Região de Saúde do município
    const config = CONFIG_REGIOES[mPath.regiao] || CONFIG_REGIOES['Baixada Fluminense'];

    return {
      nome: mPath.nome,
      slug: mPath.slug,
      regiao: mPath.regiao,
      samu100: true,
      entregasDiretas: config.entregas(mPath.nome),
      destaques: config.destaques,
      resumoLocal: config.resumo(mPath.nome),
    };
  });
}

import greeningWorks from "../../public/list-photos/greening-works.webp";
import newFootballField from "../../public/list-photos/new-football-field.webp";
import refugeePass from "../../public/list-photos/refugee-pass.webp";
import renewableEnergy from "../../public/list-photos/renewable-energy.webp";
import supermarketPenalty from "../../public/list-photos/supermarket-penalty.webp";
import tourismAttack from "../../public/list-photos/tourism-attack.webp";
import turkishLiraLose from "../../public/list-photos/turkish-lira-lose.webp";
import prisonFull from "../../public/list-photos/prison-full.webp";
import happFarmer from "../../public/list-photos/happy-farmer.webp";
import illegalWorkers from "../../public/list-photos/illegal-workers.webp";
import defenceTech from "../../public/list-photos/defence-tech.webp";
import protectBorder from "../../public/list-photos/protect-border.webp";
import woodenJob from "../../public/list-photos/wooden-job.webp";
import gasExploration from "../../public/list-photos/gas-exploration.webp";
import greatAgreement from "../../public/list-photos/great-agreement.webp";
import tradeAgreement from "../../public/list-photos/trade-agreement.webp";
import nuclearThesis from "../../public/list-photos/nuclear-thesis.webp";
import refugeeCrisis from "../../public/list-photos/refugee-crisis.webp";
import istanbulQuake from "../../public/list-photos/istanbul-earthquake.webp";
import polices from "../../public/list-photos/polices.webp";
import babiesIncubator from "../../public/list-photos/babies-in-incubator.webp";
import toggIntroduced from "../../public/list-photos/togg-introduced.webp";
import fastTrain from "../../public/list-photos/super-fast-train.webp";
import techStartup from "../../public/list-photos/tech-startup.webp";
import bombMall from "../../public/list-photos/bomb-mall.webp";
import disabledBomb from "../../public/list-photos/bomb-disabled.webp";
import istanbulArab from "../../public/list-photos/istanbul-arab.webp";
import s400 from "../../public/list-photos/s400.webp";

export const elements = [
    {
        id: 601,
        title: {
            tr: "Hapishanelerde Yer Yok",
            en: "No Space in Prisons",
            fr: "Plus de Place dans les Prisons",
            de: "Kein Platz in Gefängnissen",
            zh: "监狱已满",
            es: "¡Sin Espacio en las Prisiones!",
            pt: "Sem Espaço nas Prisões",
            ru: "Нет места в тюрьмах"
        },
        photo: prisonFull,
        description: {
            tr: "Hapishanelerde yer kalmadığı için bazı hafif suçlardan yargılananların serbest bırakılması konuşuluyor. Yetkililerden açıklama bekleniyor.",
            en: "Due to overcrowding, some discussions arise about releasing minor offenders. Authorities are expected to make a statement.",
            fr: "En raison de la surpopulation, certains discutent de libérer les délinquants mineurs. Les autorités doivent s'exprimer.",
            de: "Wegen Überfüllung wird über die Freilassung von Kleinkriminellen diskutiert. Die Behörden werden um eine Erklärung gebeten.",
            zh: "由于监狱已满，有人建议释放轻罪犯。公众期待官方声明。",
            es: "Debido a la sobrepoblación, se discute liberar a algunos infractores menores. Se espera una declaración de las autoridades.",
            pt: "Devido à superlotação, discute-se a liberação de pequenos infratores. Espera-se um comunicado das autoridades.",
            ru: "Из-за переполненности обсуждается освобождение мелких правонарушителей. Ожидается заявление властей."
        },
        listID: "adalet2",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 602,
        title: {
            tr: "Kaçak işçiler!",
            en: "Illegal Workers!",
            fr: "Travailleurs Illégaux!",
            de: "Illegale Arbeiter!",
            zh: "非法劳工！",
            es: "¡Trabajadores Ilegales!",
            pt: "Trabalhadores Ilegais!",
            ru: "Нелегальные рабочие!"
        },
        photo: illegalWorkers,
        description: {
            tr: "Kaçakların ucuza ve sigortasız çalışması, işverenleri mutlu ederken iş arayan vatandaşların daha ucuza çalışmasına sebep oluyor. Halk yetkililerden çözüm bekliyor.",
            en: "Illegal workers are employed cheaply and without insurance, pleasing employers but forcing citizens to work for less. People are demanding a solution from the authorities.",
            fr: "Les travailleurs illégaux travaillent pour moins cher et sans assurance, satisfaisant les employeurs mais forçant les citoyens à accepter de bas salaires. Le peuple attend une solution des autorités.",
            de: "Illegale Arbeiter arbeiten billig und ohne Versicherung, was Arbeitgeber erfreut, aber Bürger zwingt, für weniger zu arbeiten. Die Menschen fordern eine Lösung von den Behörden.",
            zh: "非法劳工廉价且无保险地工作，让雇主满意，却迫使公民以更低薪工作。公众呼吁官方解决。",
            es: "Los trabajadores ilegales trabajan por menos y sin seguro, complaciendo a los empleadores pero obligando a los ciudadanos a aceptar salarios más bajos. La gente exige una solución a las autoridades.",
            pt: "Trabalhadores ilegais trabalham por menos e sem seguro, agradando os empregadores, mas obrigando os cidadãos a aceitar salários mais baixos. A população exige uma solução das autoridades.",
            ru: "Нелегальные рабочие работают дешево и без страховки, радуя работодателей, но вынуждая граждан работать за меньшую плату. Люди требуют решения от властей."
        },
        listID: "aile1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "publicSupport"
        }
    },
    {
        id: 603,
        title: {
            tr: "Çiftçi Rahat Bir Nefes Aldı",
            en: "Farmers Breathe a Sigh of Relief",
            fr: "Les Agriculteurs Soulagés",
            de: "Bauern atmen auf",
            zh: "农民松了一口气",
            es: "Los Agricultores Respiran Aliviados",
            pt: "Os Agricultores Respiram Aliviados",
            ru: "Фермеры вздохнули с облегчением"
        },
        photo: happFarmer,
        description: {
            tr: "Tarımın desteklenmesi köylünün yüzünü güldürdü. Verilen teşvikler ve vergi indirimleri sayesinde gıda krizinin önüne kısa vadede geçilebilir.",
            en: "Supporting agriculture has brought smiles to the farmers' faces. Incentives and tax reductions may prevent a food crisis in the short term.",
            fr: "Le soutien à l'agriculture a redonné le sourire aux agriculteurs. Les incitations et réductions fiscales pourraient prévenir une crise alimentaire à court terme.",
            de: "Die Unterstützung der Landwirtschaft hat den Bauern ein Lächeln ins Gesicht gezaubert. Anreize und Steuererleichterungen könnten eine Nahrungsmittelkrise kurzfristig verhindern.",
            zh: "支持农业让农民脸上露出了笑容。激励政策和减税措施可能在短期内防止粮食危机。",
            es: "El apoyo a la agricultura ha traído sonrisas a los agricultores. Los incentivos y las reducciones fiscales podrían prevenir una crisis alimentaria a corto plazo.",
            pt: "O apoio à agricultura trouxe sorrisos aos rostos dos agricultores. Incentivos e reduções fiscais podem evitar uma crise alimentar a curto prazo.",
            ru: "Поддержка сельского хозяйства вызвала улыбки на лицах фермеров. Льготы и налоговые сокращения могут предотвратить продовольственный кризис в краткосрочной перспективе."
        },
        listID: "calisma1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "agriculturalProduction"
        }
    },
    {
        id: 604,
        title: {
            tr: "Şehirler Doğayla Buluşuyor",
            en: "Cities Meet Nature",
            fr: "Les Villes Rencontrent la Nature",
            de: "Städte treffen auf die Natur",
            zh: "城市与自然相遇",
            es: "Las Ciudades se Encuentran con la Naturaleza",
            pt: "Cidades Encontram a Natureza",
            ru: "Города встречаются с природой"
        },
        photo: greeningWorks,
        description: {
            tr: "Büyük şehirlerde parklar ve yeşil alanlar artıyor. Yapılan çalışmalar halk tarafından takdirle karşılanıyor.",
            en: "Parks and green spaces are increasing in major cities. These efforts are appreciated by the public.",
            fr: "Les parcs et espaces verts augmentent dans les grandes villes. Ces efforts sont appréciés par le public.",
            de: "Parks und Grünflächen nehmen in Großstädten zu. Diese Bemühungen werden von der Öffentlichkeit geschätzt.",
            zh: "大城市中的公园和绿地正在增加。这些努力受到了公众的赞赏。",
            es: "Los parques y espacios verdes están aumentando en las grandes ciudades. Estos esfuerzos son valorados por el público.",
            pt: "Parques e espaços verdes estão aumentando nas grandes cidades. Esses esforços são apreciados pelo público.",
            ru: "В крупных городах увеличивается количество парков и зеленых зон. Эти усилия оцениваются общественностью."
        },
        listID: "cevre1",
        lastingEffect: {
            type: "increase",
            value: +5,
            stat: "agriculturalProduction"
        }
    },
    {
        id: 605,
        title: {
            tr: "Solar Panel Atılımları",
            en: "Solar Panel Advances",
            fr: "Avancées des Panneaux Solaires",
            de: "Fortschritte bei Solarmodulen",
            zh: "太阳能板的进步",
            es: "Avances en Paneles Solares",
            pt: "Avanços em Painéis Solares",
            ru: "Прорыв в солнечных панелях"
        },
        photo: renewableEnergy,
        description: {
            tr: "Akdeniz ve Ege gibi bol güneş alan bölgelerde solar panel yatırımları artıyor. Bu yatırımların enerji maliyetlerine olumlu etkisi olacağı düşünülüyor.",
            en: "Solar panel investments are increasing in sunny regions like the Mediterranean and Aegean. These investments are expected to positively impact energy costs.",
            fr: "Les investissements dans les panneaux solaires augmentent dans les régions ensoleillées comme la Méditerranée et l'Égée. Ces investissements devraient avoir un impact positif sur les coûts énergétiques.",
            de: "Die Investitionen in Solarmodule nehmen in sonnenreichen Regionen wie dem Mittelmeer und der Ägäis zu. Diese Investitionen sollen sich positiv auf die Energiekosten auswirken.",
            zh: "在地中海和爱琴海等阳光充足的地区，太阳能板投资正在增加。这些投资预计将对能源成本产生积极影响。",
            es: "Las inversiones en paneles solares están aumentando en regiones soleadas como el Mediterráneo y el Egeo. Se espera que estas inversiones impacten positivamente en los costos de energía.",
            pt: "Os investimentos em painéis solares estão aumentando em regiões ensolaradas como o Mediterrâneo e o Egeu. Espera-se que esses investimentos impactem positivamente os custos de energia.",
            ru: "Инвестиции в солнечные панели растут в солнечных регионах, таких как Средиземноморье и Эгейское море. Эти инвестиции, как ожидается, положительно повлияют на затраты на энергию."
        },
        listID: "cevre2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 606,
        title: {
            tr: "Ülkeye Turist Akını",
            en: "Tourist Influx to the Country",
            fr: "Afflux de Touristes dans le Pays",
            de: "Touristenansturm ins Land",
            zh: "涌入该国的游客",
            es: "Afluencia de Turistas al País",
            pt: "Afluência de Turistas ao País",
            ru: "Наплыв туристов в страну"
        },
        photo: tourismAttack,
        description: {
            tr: "Yaz sezonuyla birlikte ülkeye turist akını başladı. Turizm sektörü bu yıl rekor kırmayı hedefliyor.",
            en: "With the summer season, the country is experiencing a tourist influx. The tourism sector aims to break records this year.",
            fr: "Avec la saison estivale, le pays connaît un afflux de touristes. Le secteur du tourisme vise à battre des records cette année.",
            de: "Mit der Sommersaison erlebt das Land einen Touristenansturm. Die Tourismusbranche strebt in diesem Jahr Rekorde an.",
            zh: "随着夏季的到来，该国迎来了游客涌入。旅游业今年目标是打破纪录。",
            es: "Con la temporada de verano, el país está experimentando una afluencia de turistas. El sector turístico apunta a batir récords este año.",
            pt: "Com a temporada de verão, o país está a vivenciar uma afluência de turistas. O setor turístico pretende quebrar recordes este ano.",
            ru: "С началом летнего сезона в страну наблюдается наплыв туристов. Туристическая отрасль нацелена на установление рекордов в этом году."
        },
        listID: "cevre3",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "budget"
        }
    },
    {
        id: 607,
        title: {
            tr: "Dev Ticaret Anlaşması",
            en: "Major Trade Agreement",
            fr: "Accord Commercial Majeur",
            de: "Großes Handelsabkommen",
            zh: "重大贸易协议",
            es: "Gran Acuerdo Comercial",
            pt: "Grande Acordo Comercial",
            ru: "Крупное торговое соглашение"
        },
        photo: tradeAgreement,
        description: {
            tr: "Komşu ülkeyle ticaret anlaşması imzalandı. Bu anlaşmanın ülke ekonomisine etkisi olumlu olacak.",
            en: "A trade agreement was signed with a neighboring country. This agreement will positively impact the national economy.",
            fr: "Un accord commercial a été signé avec un pays voisin. Cet accord aura un impact positif sur l'économie nationale.",
            de: "Ein Handelsabkommen mit einem Nachbarland wurde unterzeichnet. Dieses Abkommen wird sich positiv auf die nationale Wirtschaft auswirken.",
            zh: "与邻国签署了一项贸易协议。这项协议将对国家经济产生积极影响。",
            es: "Se firmó un acuerdo comercial con un país vecino. Este acuerdo impactará positivamente en la economía nacional.",
            pt: "Foi assinado um acordo comercial com um país vizinho. Este acordo terá um impacto positivo na economia nacional.",
            ru: "Подписано торговое соглашение с соседней страной. Это соглашение положительно скажется на национальной экономике."
        },
        listID: "disisleri1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internationalRelations"
        }
    },
    {
        id: 608,
        title: {
            tr: "Savunma Sektörü Yükselişte",
            en: "Defense Industry on the Rise",
            fr: "Le Secteur de la Défense en Pleine Ascension",
            de: "Die Verteidigungsindustrie im Aufschwung",
            zh: "国防工业崛起",
            es: "La Industria de Defensa en Auge",
            pt: "Indústria de Defesa em Ascensão",
            ru: "Рост оборонной промышленности"
        },
        photo: defenceTech,
        description: {
            tr: "Askeri savunmasını güçlendirerek dünya pazarında daha çok söz sahibi olmak isteyen ülkemiz bu uğurda büyük yatırımlar yapıyor.",
            en: "Our country is making significant investments to strengthen military defense and become more prominent in the global market.",
            fr: "Notre pays investit massivement pour renforcer la défense militaire et devenir un acteur majeur sur le marché mondial.",
            de: "Unser Land tätigt erhebliche Investitionen, um die militärische Verteidigung zu stärken und auf dem Weltmarkt prominenter zu werden.",
            zh: "我国正在大力投资，以加强军事防御并在全球市场上占据更重要的位置。",
            es: "Nuestro país está realizando grandes inversiones para fortalecer la defensa militar y ganar más presencia en el mercado global.",
            pt: "O nosso país está a fazer investimentos significativos para fortalecer a defesa militar e ganhar mais destaque no mercado global.",
            ru: "Наша страна делает значительные инвестиции для укрепления военной обороны и увеличения своего присутствия на мировом рынке."
        },
        listID: "disisleri2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 609,
        title: {
            tr: "Mülteci Akını Sürüyor",
            en: "Refugee Influx Continues",
            fr: "L'Afflux de Réfugiés Continue",
            de: "Flüchtlingszustrom hält an",
            zh: "难民潮继续",
            es: "La Afluencia de Refugiados Continúa",
            pt: "O Influxo de Refugiados Continua",
            ru: "Наплыв беженцев продолжается"
        },
        photo: refugeePass,
        description: {
            tr: "İç savaştan kaçan mülteciler ülkemize akın ediyor. Bu durum halk arasında rahatsızlık yaratıyor. Kontrolsüzce alınan mülteciler ülkenin iç dinamiklerini nasıl etkileyecek?",
            en: "Refugees fleeing civil war are flocking to our country. This is causing unrest among the public. How will uncontrolled refugee intake affect the country's internal dynamics?",
            fr: "Les réfugiés fuyant la guerre civile affluent dans notre pays. Cela provoque des tensions parmi la population. Comment l'accueil incontrôlé des réfugiés affectera-t-il la dynamique interne du pays?",
            de: "Flüchtlinge, die vor dem Bürgerkrieg fliehen, strömen in unser Land. Dies sorgt für Unruhe in der Bevölkerung. Wie wird die unkontrollierte Aufnahme von Flüchtlingen die inneren Dynamiken des Landes beeinflussen?",
            zh: "逃离内战的难民正在涌入我国。这引起了公众的不安。难民的无序接纳将如何影响国家的内部动态？",
            es: "Refugiados que huyen de la guerra civil están llegando en masa a nuestro país. Esto está causando malestar entre la población. ¿Cómo afectará la admisión incontrolada de refugiados a la dinámica interna del país?",
            pt: "Refugiados que fogem da guerra civil estão a chegar em massa ao nosso país. Isto está a causar inquietação entre a população. Como irá a recepção descontrolada de refugiados afetar a dinâmica interna do país?",
            ru: "Беженцы, спасающиеся от гражданской войны, стекаются в нашу страну. Это вызывает недовольство среди населения. Как неконтролируемый прием беженцев повлияет на внутреннюю динамику страны?"
        },
        listID: "disisleri3",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 610,
        title: {
            tr: "Kaçak Göçmene Geçiş Yok",
            en: "No Passage for Illegal Immigrants",
            fr: "Pas de Passage pour les Migrants Illégaux",
            de: "Kein Durchgang für illegale Einwanderer",
            zh: "非法移民无通行",
            es: "No Hay Paso para Inmigrantes Ilegales",
            pt: "Sem Passagem para Imigrantes Ilegais",
            ru: "Нет прохода для нелегальных мигрантов"
        },
        photo: protectBorder,
        description: {
            tr: "Askerimiz sınırını kaçaklara karşı koruyor. Halkın çoğu kesimi bu karardan memnun, ancak bazı insan hakları örgütleri bu durumu eleştiriyor.",
            en: "Our soldiers are protecting the border against illegal immigrants. Most of the public supports this decision, but some human rights organizations criticize it.",
            fr: "Nos soldats protègent la frontière contre les migrants illégaux. La majorité du public soutient cette décision, mais certaines organisations de défense des droits de l'homme la critiquent.",
            de: "Unsere Soldaten schützen die Grenze gegen illegale Einwanderer. Die Mehrheit der Öffentlichkeit unterstützt diese Entscheidung, aber einige Menschenrechtsorganisationen kritisieren sie.",
            zh: "我们的士兵正在保护边境，防止非法移民入境。大部分公众支持这一决定，但一些人权组织对此表示批评。",
            es: "Nuestros soldados están protegiendo la frontera contra inmigrantes ilegales. La mayoría del público apoya esta decisión, pero algunas organizaciones de derechos humanos la critican.",
            pt: "Os nossos soldados estão a proteger a fronteira contra imigrantes ilegais. A maioria do público apoia esta decisão, mas algumas organizações de direitos humanos criticam-na.",
            ru: "Наши солдаты защищают границу от нелегальных мигрантов. Большинство населения поддерживает это решение, но некоторые правозащитные организации критикуют его."
        },
        listID: "disisleri4",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 611,
        title: {
            tr: "Mesleki Eğitim Rüzgarı",
            en: "Vocational Training Boom",
            fr: "Essor de la Formation Professionnelle",
            de: "Aufschwung der Berufsausbildung",
            zh: "职业培训热潮",
            es: "Auge de la Formación Profesional",
            pt: "Boom da Formação Profissional",
            ru: "Бум профессионального образования"
        },
        photo: woodenJob,
        description: {
            tr: "Mesleki eğitime ilgi büyük oldu! Gençlerin meslek sahibi olması için yapılan çalışmalar hız kesmeden devam ediyor.",
            en: "Vocational training has gained great interest! Efforts to help young people gain skills are continuing at full speed.",
            fr: "La formation professionnelle suscite un grand intérêt ! Les efforts pour aider les jeunes à acquérir des compétences se poursuivent à plein régime.",
            de: "Die Berufsausbildung hat großes Interesse geweckt! Die Bemühungen, jungen Menschen Fähigkeiten zu vermitteln, gehen in vollem Tempo weiter.",
            zh: "职业培训引起了极大的兴趣！帮助年轻人获得技能的努力正全速进行。",
            es: "¡La formación profesional ha generado gran interés! Los esfuerzos para ayudar a los jóvenes a adquirir habilidades continúan a toda velocidad.",
            pt: "A formação profissional tem gerado grande interesse! Os esforços para ajudar os jovens a adquirir competências continuam a todo vapor.",
            ru: "Профессиональное образование вызвало большой интерес! Усилия по обучению молодежи профессиональным навыкам продолжаются на полную мощность."
        },
        listID: "egitim1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "agriculturalProduction"
        }
    },
    {
        id: 612,
        title: {
            tr: "DoğalGaz Arama Faaliyetleri",
            en: "Natural Gas Exploration Activities",
            fr: "Activités d'Exploration de Gaz Naturel",
            de: "Erdgasexplorationsaktivitäten",
            zh: "天然气勘探活动",
            es: "Actividades de Exploración de Gas Natural",
            pt: "Atividades de Exploração de Gás Natural",
            ru: "Деятельность по разведке природного газа"
        },
        photo: gasExploration,
        description: {
            tr: "Doğal gaz arama faaliyetleri son hızla devam ediyor. Yapılan sondajlar sonucunda önemli rezervlerin bulunduğu açıklandı.",
            en: "Natural gas exploration activities are progressing at full speed. It has been announced that significant reserves have been discovered through drilling.",
            fr: "Les activités d'exploration de gaz naturel progressent à plein régime. Il a été annoncé que d'importants gisements ont été découverts grâce aux forages.",
            de: "Die Erdgassuche läuft auf Hochtouren. Es wurde bekannt gegeben, dass durch Bohrungen bedeutende Reserven entdeckt wurden.",
            zh: "天然气勘探活动正在全速推进。据宣布，通过钻探发现了重要的储量。",
            es: "Las actividades de exploración de gas natural están avanzando a toda velocidad. Se ha anunciado que se han descubierto importantes reservas mediante perforaciones.",
            pt: "As atividades de exploração de gás natural estão avançando a todo vapor. Foi anunciado que importantes reservas foram descobertas por meio de perfurações.",
            ru: "Деятельность по разведке природного газа идет полным ходом. Объявлено об обнаружении значительных запасов в результате бурения."
        },
        listID: "enerji1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 613,
        title: {
            tr: "Yüzyılın Enerji Ortaklığı",
            en: "Energy Partnership of the Century",
            fr: "Partenariat Énergétique du Siècle",
            de: "Energiepartnerschaft des Jahrhunderts",
            zh: "世纪能源合作伙伴关系",
            es: "Asociación Energética del Siglo",
            pt: "Parceria Energética do Século",
            ru: "Энергетическое партнерство века"
        },
        photo: greatAgreement,
        description: {
            tr: "Yapılan anlaşma ile komşu ülkelerle enerji ortaklığı kuruldu. Bu anlaşma sayesinde önümüzdeki 10 yılın toplam enerji ihtiyacının %27'si karşılanacak.",
            en: "An agreement established an energy partnership with neighboring countries. This partnership will cover 27% of the total energy needs for the next 10 years.",
            fr: "Un accord a établi un partenariat énergétique avec les pays voisins. Ce partenariat couvrira 27% des besoins énergétiques totaux des 10 prochaines années.",
            de: "Ein Abkommen hat eine Energiepartnerschaft mit Nachbarländern geschaffen. Diese Partnerschaft wird 27 % des Gesamtenergiebedarfs der nächsten 10 Jahre decken.",
            zh: "一项协议与邻国建立了能源合作伙伴关系。该合作将在未来10年满足27%的总能源需求。",
            es: "Un acuerdo estableció una asociación energética con países vecinos. Esta asociación cubrirá el 27% de las necesidades energéticas totales durante los próximos 10 años.",
            pt: "Um acordo estabeleceu uma parceria energética com países vizinhos. Esta parceria cobrirá 27% das necessidades energéticas totais para os próximos 10 anos.",
            ru: "Соглашение установило энергетическое партнерство с соседними странами. Это партнерство обеспечит 27% общих энергетических потребностей на ближайшие 10 лет."
        },
        listID: "enerji2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internationalRelations"
        }
    },
    {
        id: 614,
        title: {
            tr: "Nükleer Tesisin Temeli Atıldı",
            en: "Foundation of Nuclear Facility Laid",
            fr: "Pose de la Première Pierre de l'Installation Nucléaire",
            de: "Grundsteinlegung der Nuklearanlage",
            zh: "核设施奠基",
            es: "Se Coloca la Primera Piedra de la Instalación Nuclear",
            pt: "Fundação da Instalação Nuclear Lançada",
            ru: "Заложен фундамент ядерного объекта"
        },
        photo: nuclearThesis,
        description: {
            tr: "Ülkenin nükleer enerji ihtiyacını karşılamak için inşa edilen dev tesisin temeli atıldı. Bu tesisin önümüzdeki 25 yılın enerji ihtiyacını büyük oranda karşılaması bekleniyor.",
            en: "The foundation of a massive facility to meet the country's nuclear energy needs has been laid. This facility is expected to cover a significant portion of energy needs for the next 25 years.",
            fr: "Les fondations d'une immense installation destinée à répondre aux besoins en énergie nucléaire du pays ont été posées. Cette installation devrait couvrir une grande partie des besoins énergétiques des 25 prochaines années.",
            de: "Der Grundstein einer riesigen Anlage zur Deckung des Nuklearenergiebedarfs des Landes wurde gelegt. Diese Anlage soll einen erheblichen Teil des Energiebedarfs der nächsten 25 Jahre decken.",
            zh: "为满足国家核能需求而建的大型设施奠基完成。预计该设施将在未来25年满足能源需求的很大一部分。",
            es: "Se colocó la primera piedra de una gran instalación destinada a satisfacer las necesidades de energía nuclear del país. Se espera que esta instalación cubra una parte significativa de las necesidades energéticas durante los próximos 25 años.",
            pt: "A fundação de uma instalação maciça para atender às necessidades de energia nuclear do país foi lançada. Espera-se que esta instalação cubra uma parte significativa das necessidades energéticas nos próximos 25 anos.",
            ru: "Заложен фундамент крупного объекта для удовлетворения потребностей страны в ядерной энергии. Ожидается, что этот объект покроет значительную часть потребностей в энергии в течение следующих 25 лет."
        },
        listID: "enerji3",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 615,
        title: {
            tr: "Yeni Spor Sahaları",
            en: "New Sports Fields",
            fr: "Nouveaux Terrains de Sport",
            de: "Neue Sportplätze",
            zh: "新运动场地",
            es: "Nuevos Campos Deportivos",
            pt: "Novos Campos Desportivos",
            ru: "Новые спортивные площадки"
        },
        photo: newFootballField,
        description: {
            tr: "Bakanlık, gençlerin daha çok sportif faaliyetlerde bulunabilmesi için yeni sahalar yapılacağını açıkladı. Bu karar spor camiasında memnuniyetle karşılandı.",
            en: "The ministry announced the construction of new fields to encourage more youth participation in sports. This decision was welcomed by the sports community.",
            fr: "Le ministère a annoncé la construction de nouveaux terrains pour encourager la participation des jeunes aux activités sportives. Cette décision a été bien accueillie par la communauté sportive.",
            de: "Das Ministerium kündigte den Bau neuer Plätze an, um die Jugend stärker zu sportlichen Aktivitäten zu motivieren. Diese Entscheidung wurde von der Sportgemeinschaft begrüßt.",
            zh: "部长宣布将建设新场地，以鼓励更多年轻人参与体育活动。这一决定受到了体育界的欢迎。",
            es: "El ministerio anunció la construcción de nuevos campos para fomentar la participación de los jóvenes en el deporte. Esta decisión fue bien recibida por la comunidad deportiva.",
            pt: "O ministério anunciou a construção de novos campos para incentivar a participação dos jovens no desporto. Esta decisão foi bem recebida pela comunidade desportiva.",
            ru: "Министерство объявило о строительстве новых площадок для привлечения молодежи к спорту. Это решение было одобрено спортивным сообществом."
        },
        listID: "genclik1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "publicSupport"
        }
    },
    {
        id: 616,
        title: {
            tr: "Yeni Faiz Kararı Şok Etti",
            en: "New Interest Rate Decision Shocks",
            fr: "Nouvelle Décision sur les Taux d'Intérêt : Choc",
            de: "Neue Zinspolitik sorgt für Schock",
            zh: "新利率决定引发震惊",
            es: "Nueva Decisión de Tasas de Interés Sorprende",
            pt: "Nova Decisão sobre Taxas de Juros Choca",
            ru: "Новое решение о процентной ставке шокировало"
        },
        photo: turkishLiraLose,
        description: {
            tr: "Cumhurbaşkanının son kararından sonra yerli para birimimiz Tera ciddi değer kaybına uğradı. Ekonomistler tarafından yapılan açıklamalara göre bu karar ülke ekonomisine ağır darbe vuracak.",
            en: "Following the president's recent decision, our national currency, Tera, has significantly depreciated. Economists predict that this decision will severely impact the national economy.",
            fr: "Suite à la récente décision du président, notre monnaie nationale, le Tera, a fortement perdu de sa valeur. Les économistes prévoient que cette décision aura un impact sévère sur l'économie nationale.",
            de: "Nach der jüngsten Entscheidung des Präsidenten hat unsere nationale Währung, der Tera, stark an Wert verloren. Ökonomen prognostizieren, dass diese Entscheidung die nationale Wirtschaft schwer treffen wird.",
            zh: "总统的最新决定后，我们的国家货币 Tera 严重贬值。经济学家预测，这一决定将严重影响国家经济。",
            es: "Tras la reciente decisión del presidente, nuestra moneda nacional, el Tera, ha perdido significativamente su valor. Los economistas predicen que esta decisión afectará gravemente a la economía nacional.",
            pt: "Após a recente decisão do presidente, nossa moeda nacional, o Tera, sofreu uma desvalorização significativa. Os economistas prevêem que esta decisão terá um impacto severo na economia nacional.",
            ru: "После недавнего решения президента наша национальная валюта, Тера, значительно обесценилась. Экономисты прогнозируют, что это решение нанесет серьезный ущерб национальной экономике."
        },
        listID: "hazine1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "budget"
        }
    },
    {
        id: 617,
        title: {
            tr: "Sığınmacı Krizi",
            en: "Refugee Crisis",
            fr: "Crise des Réfugiés",
            de: "Flüchtlingskrise",
            zh: "难民危机",
            es: "Crisis de Refugiados",
            pt: "Crise de Refugiados",
            ru: "Кризис с беженцами"
        },
        photo: refugeeCrisis,
        description: {
            tr: "Bugün sabah saatlerinde sığınmacılar ile halk arasında arbede yaşandı. Çok sayıda yaralı var.",
            en: "This morning, clashes occurred between refugees and locals. Many people are injured.",
            fr: "Ce matin, des affrontements ont eu lieu entre les réfugiés et les habitants. De nombreuses personnes sont blessées.",
            de: "Heute Morgen kam es zu Auseinandersetzungen zwischen Flüchtlingen und Einheimischen. Viele Menschen wurden verletzt.",
            zh: "今天早晨，难民与当地居民之间发生冲突。多人受伤。",
            es: "Esta mañana, se produjeron enfrentamientos entre refugiados y locales. Hay muchos heridos.",
            pt: "Na manhã de hoje, ocorreram confrontos entre refugiados e locais. Muitas pessoas estão feridas.",
            ru: "Сегодня утром произошли столкновения между беженцами и местными жителями. Много пострадавших."
        },
        listID: "icisleri1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 618,
        title: {
            tr: "Büyük Serdanya Depremi!",
            en: "The Great Serdanya Earthquake!",
            fr: "Le Grand Tremblement de Terre de Serdanya!",
            de: "Das große Serdanya-Erdbeben!",
            zh: "大塞尔丹亚地震！",
            es: "¡El Gran Terremoto de Serdanya!",
            pt: "O Grande Terremoto de Serdanya!",
            ru: "Великое землетрясение в Сердании!"
        },
        photo: istanbulQuake,
        description: {
            tr: "Beklenen Serdanya Depremi dün sabah saatlerinde 7.4 şiddetinde gerçekleşti. Şehir panik içinde, halk yetkililerden yardım bekliyor.",
            en: "The anticipated Serdanya Earthquake struck yesterday morning with a magnitude of 7.4. The city is in panic, and people are awaiting help from the authorities.",
            fr: "Le tremblement de terre attendu de Serdanya a frappé hier matin avec une magnitude de 7,4. La ville est en panique et la population attend l'aide des autorités.",
            de: "Das erwartete Serdanya-Erdbeben ereignete sich gestern Morgen mit einer Stärke von 7,4. Die Stadt ist in Panik, und die Menschen warten auf Hilfe von den Behörden.",
            zh: "预计的大塞尔丹亚地震昨天早晨发生，震级为7.4。城市陷入恐慌，人们等待政府救援。",
            es: "El anticipado terremoto de Serdanya ocurrió ayer por la mañana con una magnitud de 7,4. La ciudad está en pánico y la gente espera ayuda de las autoridades.",
            pt: "O aguardado terremoto de Serdanya atingiu ontem de manhã com uma magnitude de 7,4. A cidade está em pânico, e as pessoas aguardam ajuda das autoridades.",
            ru: "Ожидаемое землетрясение в Сердании произошло вчера утром с магнитудой 7,4. Город в панике, люди ждут помощи от властей."
        },
        listID: "icisleri2",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 619,
        title: {
            tr: "Teröristler Kıskıvrak Yakalandı",
            en: "Terrorists Captured Red-Handed",
            fr: "Terroristes Capturés sur le Fait",
            de: "Terroristen auf frischer Tat ertappt",
            zh: "恐怖分子被当场抓获",
            es: "Terroristas Capturados con las Manos en la Masa",
            pt: "Terroristas Capturados em Flagrante",
            ru: "Террористы пойманы с поличным"
        },
        photo: polices,
        description: {
            tr: "Bu sabah saatlerinde gerçekleştirilen operasyonda 14 terörist etkisiz hale getirildi. Operasyonun detayları hala gizli tutuluyor.",
            en: "This morning, 14 terrorists were neutralized in an operation. The details of the operation remain classified.",
            fr: "Ce matin, 14 terroristes ont été neutralisés lors d'une opération. Les détails de l'opération restent confidentiels.",
            de: "Heute Morgen wurden bei einer Operation 14 Terroristen neutralisiert. Die Einzelheiten der Operation bleiben geheim.",
            zh: "今天早晨，在一次行动中14名恐怖分子被制服。行动细节仍然保密。",
            es: "Esta mañana, 14 terroristas fueron neutralizados en una operación. Los detalles de la operación permanecen clasificados.",
            pt: "Na manhã de hoje, 14 terroristas foram neutralizados em uma operação. Os detalhes da operação permanecem classificados.",
            ru: "Сегодня утром в ходе операции были нейтрализованы 14 террористов. Подробности операции остаются засекреченными."
        },
        listID: "icisleri3",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 620,
        title: {
            tr: "Çetenin Geçmişi Araştırılacak",
            en: "Gang's Past to Be Investigated",
            fr: "Le Passé du Gang Sera Enquêté",
            de: "Vergangenheit der Bande wird untersucht",
            zh: "帮派过去将被调查",
            es: "Se Investigará el Pasado de la Banda",
            pt: "O Passado da Gangue Será Investigado",
            ru: "Прошлое банды будет расследовано"
        },
        photo: babiesIncubator,
        description: {
            tr: "Alınan karar doğrultusunda çetenin eski faaliyetleri araştırılacak. Halk bu karardan memnun.",
            en: "A decision has been made to investigate the gang's past activities. The public is pleased with this decision.",
            fr: "Une décision a été prise pour enquêter sur les activités passées du gang. Le public est satisfait de cette décision.",
            de: "Es wurde beschlossen, die vergangenen Aktivitäten der Bande zu untersuchen. Die Öffentlichkeit ist mit dieser Entscheidung zufrieden.",
            zh: "已决定调查该帮派的过去活动。公众对此决定表示满意。",
            es: "Se ha tomado la decisión de investigar las actividades pasadas de la banda. El público está satisfecho con esta decisión.",
            pt: "Foi tomada a decisão de investigar as atividades passadas da gangue. O público está satisfeito com esta decisão.",
            ru: "Принято решение расследовать прошлую деятельность банды. Общественность довольна этим решением."
        },
        listID: "saglik1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 621,
        title: {
            tr: "Yerli Otomobil Tanıtımı",
            en: "Introduction of Domestic Car",
            fr: "Présentation de la Voiture Nationale",
            de: "Einführung des einheimischen Autos",
            zh: "本土汽车的介绍",
            es: "Presentación del Coche Nacional",
            pt: "Introdução do Carro Nacional",
            ru: "Презентация отечественного автомобиля"
        },
        photo: toggIntroduced,
        description: {
            tr: "Ülkenin yerli otomobili yollara çıktı. Kimi fiyatını çok bulurken kimi şimdiden ön siparişini verdi. Ancak eksikleri ise eleştirmenlerin hedefi oldu.",
            en: "The country's domestic car hit the roads. Some find it overpriced, while others have already placed pre-orders. However, its shortcomings became the target of critics.",
            fr: "La voiture nationale du pays a pris la route. Certains la trouvent trop chère, tandis que d'autres ont déjà passé leurs précommandes. Cependant, ses lacunes sont devenues la cible des critiques.",
            de: "Das einheimische Auto des Landes ist auf die Straßen gekommen. Einige halten es für überteuert, während andere bereits Vorbestellungen aufgegeben haben. Dennoch wurden seine Mängel von Kritikern angeprangert.",
            zh: "该国的本土汽车上路了。有些人觉得价格过高，而另一些人已经下了预订单。然而，它的不足成为批评者的目标。",
            es: "El coche nacional del país salió a las carreteras. Algunos lo consideran demasiado caro, mientras que otros ya han hecho pedidos anticipados. Sin embargo, sus deficiencias se convirtieron en el blanco de los críticos.",
            pt: "O carro nacional do país chegou às estradas. Alguns acham-no caro, enquanto outros já fizeram pré-encomendas. No entanto, as suas falhas tornaram-se alvo de críticas.",
            ru: "Отечественный автомобиль страны вышел на дороги. Некоторые считают его слишком дорогим, в то время как другие уже оформили предзаказ. Однако его недостатки стали объектом критики."
        },
        listID: "sanayi1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 622,
        title: {
            tr: "Startuplar Büyüme Yolunda",
            en: "Startups on the Path to Growth",
            fr: "Les Startups en Route vers la Croissance",
            de: "Startups auf Wachstumskurs",
            zh: "初创企业迈向增长之路",
            es: "Startups en Camino al Crecimiento",
            pt: "Startups no Caminho do Crescimento",
            ru: "Стартапы на пути к росту"
        },
        photo: techStartup,
        description: {
            tr: "Yerli teknoloji startupları yatırımcıların ilgisini çekmeye devam ediyor. Bu startuplar, ülkenin teknolojik gelişimine katkı sağlayacak.",
            en: "Domestic tech startups continue to attract investors' interest. These startups will contribute to the country's technological development.",
            fr: "Les startups technologiques nationales continuent d'attirer l'intérêt des investisseurs. Ces startups contribueront au développement technologique du pays.",
            de: "Einheimische Technologie-Startups ziehen weiterhin das Interesse von Investoren auf sich. Diese Startups werden zur technologischen Entwicklung des Landes beitragen.",
            zh: "本土科技初创企业继续吸引投资者的兴趣。这些初创企业将为国家的技术发展做出贡献。",
            es: "Las startups tecnológicas nacionales siguen atrayendo el interés de los inversores. Estas startups contribuirán al desarrollo tecnológico del país.",
            pt: "As startups de tecnologia nacionais continuam a atrair o interesse dos investidores. Estas startups irão contribuir para o desenvolvimento tecnológico do país.",
            ru: "Отечественные технологические стартапы продолжают привлекать интерес инвесторов. Эти стартапы будут способствовать технологическому развитию страны."
        },
        listID: "sanayi2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 623,
        title: {
            tr: "Zincir Marketlere Ağır Cezalar",
            en: "Heavy Penalties for Chain Supermarkets",
            fr: "Sanctions Sévères pour les Supermarchés de Chaîne",
            de: "Hohe Strafen für Ketten-Supermärkte",
            zh: "连锁超市遭重罚",
            es: "Sanciones Severas para Supermercados de Cadena",
            pt: "Pesadas Penalidades para Supermercados de Rede",
            ru: "Суровые штрафы для сетевых супермаркетов"
        },
        photo: supermarketPenalty,
        description: {
            tr: "Etiket fiyatlarını her gün güncelleyen dev zincir marketlere ağır cezalar yazıldı. Devletin mücadelesi sürüyor. Zincir marketlerin bundan sonraki aksiyonları merakla bekleniyor.",
            en: "Heavy penalties were imposed on major chain supermarkets that update price tags daily. The state's efforts continue, and the next actions of the supermarkets are eagerly awaited.",
            fr: "Des sanctions sévères ont été infligées aux grandes chaînes de supermarchés qui mettent à jour les prix quotidiennement. Les efforts de l'État se poursuivent et les prochaines actions des supermarchés sont attendues avec impatience.",
            de: "Hohe Strafen wurden gegen große Ketten-Supermärkte verhängt, die ihre Preisschilder täglich aktualisieren. Die Bemühungen des Staates gehen weiter, und die nächsten Schritte der Supermärkte werden mit Spannung erwartet.",
            zh: "对每天更新价格标签的大型连锁超市实施了重罚。政府的努力仍在继续，人们期待着这些超市的下一步行动。",
            es: "Se impusieron severas sanciones a las grandes cadenas de supermercados que actualizan los precios a diario. Los esfuerzos del estado continúan y se esperan con interés las próximas acciones de los supermercados.",
            pt: "Pesadas penalidades foram impostas às grandes redes de supermercados que atualizam os preços diariamente. Os esforços do estado continuam, e as próximas ações dos supermercados são aguardadas com expectativa.",
            ru: "Суровые штрафы были наложены на крупные сети супермаркетов, которые ежедневно обновляют ценники. Усилия государства продолжаются, и последующие действия супермаркетов ожидаются с нетерпением."
        },
        listID: "ticaret1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "budget"
        }
    },
    {
        id: 624,
        title: {
            tr: "Hızlı Tren Açıldı",
            en: "High-Speed Train Line Opened",
            fr: "Ligne de Train à Grande Vitesse Ouverte",
            de: "Hochgeschwindigkeitszuglinie eröffnet",
            zh: "高铁线路开通",
            es: "Se Abrió la Línea de Tren de Alta Velocidad",
            pt: "Linha de Trem de Alta Velocidade Inaugurada",
            ru: "Открыта линия высокоскоростного поезда"
        },
        photo: fastTrain,
        description: {
            tr: "Velmont-Lorraine şehirleri arasındaki hızlı tren hattı açıldı. Bu hattın açılmasıyla birlikte ulaşım süresinin yarı yarıya kısaldığı açıklandı.",
            en: "The high-speed train line between the cities of Velmont and Lorraine has been opened. It has been announced that travel time has been reduced by half with this line.",
            fr: "La ligne de train à grande vitesse entre les villes de Velmont et Lorraine a été ouverte. Il a été annoncé que le temps de trajet a été réduit de moitié grâce à cette ligne.",
            de: "Die Hochgeschwindigkeitszuglinie zwischen den Städten Velmont und Lorraine wurde eröffnet. Es wurde bekannt gegeben, dass die Reisezeit mit dieser Linie um die Hälfte verkürzt wurde.",
            zh: "连接维尔蒙和洛林两市的高铁线路已开通。据称，这条线路将通勤时间缩短了一半。",
            es: "Se inauguró la línea de tren de alta velocidad entre las ciudades de Velmont y Lorraine. Se anunció que el tiempo de viaje se redujo a la mitad con esta línea.",
            pt: "A linha de trem de alta velocidade entre as cidades de Velmont e Lorraine foi inaugurada. Foi anunciado que o tempo de viagem foi reduzido pela metade com esta linha.",
            ru: "Открыта линия высокоскоростного поезда между городами Вельмонт и Лоррейн. Сообщается, что время в пути сократилось вдвое благодаря этой линии."
        },
        listID: "ulastirma1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 625,
        title: {
            tr: "AVM'de Bombalı Saldırı",
            en: "Bomb Attack at Mall",
            fr: "Attentat à la Bombe dans un Centre Commercial",
            de: "Bombenanschlag im Einkaufszentrum",
            zh: "购物中心爆炸袭击",
            es: "Ataque con Bomba en un Centro Comercial",
            pt: "Ataque com Bomba em Shopping Center",
            ru: "Теракт в торговом центре"
        },
        photo: bombMall,
        description: {
            tr: "PlazarInn AVM'de gerçekleşen bombalı saldırıda çok sayıda ölü ve yaralı var. Güvenlik güçleri ve sağlık ekipleri olay yerine intikal etti. Olayda şüpheli iki kişi gözaltına alındı.",
            en: "A bomb attack at PlazarInn Mall resulted in many deaths and injuries. Security forces and medical teams arrived at the scene. Two suspects have been detained.",
            fr: "Une attaque à la bombe au centre commercial PlazarInn a fait de nombreux morts et blessés. Les forces de sécurité et les équipes médicales sont arrivées sur les lieux. Deux suspects ont été arrêtés.",
            de: "Ein Bombenanschlag im Einkaufszentrum PlazarInn führte zu vielen Toten und Verletzten. Sicherheitskräfte und medizinische Teams sind am Tatort eingetroffen. Zwei Verdächtige wurden festgenommen.",
            zh: "PlazarInn购物中心发生的爆炸袭击造成多人死亡和受伤。安全部队和医疗队已抵达现场，两名嫌疑人被拘留。",
            es: "Un ataque con bomba en el centro comercial PlazarInn resultó en numerosas muertes y heridos. Las fuerzas de seguridad y los equipos médicos llegaron al lugar. Dos sospechosos han sido detenidos.",
            pt: "Um ataque com bomba no shopping PlazarInn resultou em várias mortes e feridos. As forças de segurança e equipes médicas chegaram ao local. Dois suspeitos foram detidos.",
            ru: "В результате взрыва в торговом центре PlazarInn погибли и пострадали многие люди. На место прибыли сотрудники службы безопасности и медицинские бригады. Два подозреваемых задержаны."
        },
        listID: "savunma1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 626,
        title: {
            tr: "Bomba Etkisiz Hale Getirildi",
            en: "Bomb Neutralized",
            fr: "Bombe Neutralisée",
            de: "Bombe entschärft",
            zh: "炸弹已拆除",
            es: "Bomba Neutralizada",
            pt: "Bomba Neutralizada",
            ru: "Бомба обезврежена"
        },
        photo: disabledBomb,
        description: {
            tr: "PlazarInn AVM'de gerçekleşmesi planlanan bombalı terör saldırısı önceden tespit edilerek bomba etkisiz hale getirildi. Güvenlik güçleri olayla ilgili soruşturma başlattı.",
            en: "A planned bomb terror attack at PlazarInn Mall was detected in advance, and the bomb was neutralized. Security forces have launched an investigation.",
            fr: "Un attentat à la bombe prévu au centre commercial PlazarInn a été détecté à l'avance et la bombe a été neutralisée. Les forces de sécurité ont ouvert une enquête.",
            de: "Ein geplanter Bombenanschlag im Einkaufszentrum PlazarInn wurde im Voraus entdeckt, und die Bombe wurde entschärft. Die Sicherheitskräfte haben eine Untersuchung eingeleitet.",
            zh: "PlazarInn购物中心计划的爆炸袭击被提前发现，炸弹被拆除。安全部队已展开调查。",
            es: "Un ataque terrorista con bomba planeado en el centro comercial PlazarInn fue detectado con anticipación y la bomba fue desactivada. Las fuerzas de seguridad han iniciado una investigación.",
            pt: "Um ataque terrorista com bomba planejado no shopping PlazarInn foi detectado com antecedência, e a bomba foi neutralizada. As forças de segurança iniciaram uma investigação.",
            ru: "Планируемый теракт с бомбой в торговом центре PlazarInn был заранее обнаружен, и бомба была обезврежена. Силы безопасности начали расследование."
        },
        listID: "savunma2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 627,
        title: {
            tr: "Burası Neresi?",
            en: "Where Is This?",
            fr: "Où Est-ce?",
            de: "Wo Ist Das?",
            zh: "这是什么地方？",
            es: "¿Dónde es Esto?",
            pt: "Onde é Isso?",
            ru: "Где это?"
        },
        photo: istanbulArab,
        description: {
            tr: "Liam Neeson'ın yeni filmindeki sahneler rahatsız etti. Ülkemizin alenen Ortadoğu şehri gibi gösterildiği filme tepkiler büyüyor.",
            en: "Scenes from Liam Neeson's new movie caused discomfort. Reactions are growing against the film for portraying our country as an openly Middle Eastern city.",
            fr: "Les scènes du nouveau film de Liam Neeson ont suscité un malaise. Les réactions grandissent contre le film qui présente notre pays comme une ville du Moyen-Orient.",
            de: "Szenen aus Liam Neesons neuem Film haben Unbehagen ausgelöst. Die Reaktionen auf den Film, der unser Land als eine Stadt im Nahen Osten darstellt, nehmen zu.",
            zh: "连姆·尼森新电影中的场景引发不满。针对将我国公开描绘成中东城市的电影的反应不断增长。",
            es: "Las escenas de la nueva película de Liam Neeson han causado incomodidad. Las reacciones están creciendo contra la película por mostrar a nuestro país como una ciudad del Medio Oriente.",
            pt: "As cenas do novo filme de Liam Neeson causaram desconforto. As reações estão crescendo contra o filme por retratar nosso país como uma cidade do Oriente Médio.",
            ru: "Сцены из нового фильма Лиама Нисона вызвали недовольство. Реакция на фильм, изображающий нашу страну как открыто ближневосточный город, усиливается."
        },
        listID: "liamNeeson",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "publicSupport"
        }
    },
    {
        id: 628,
        title: {
            tr: "Hava Savunma Sistemleri Geldi",
            en: "Air Defense Systems Arrive",
            fr: "Systèmes de Défense Aérienne Arrivés",
            de: "Luftabwehrsysteme Eingetroffen",
            zh: "防空系统已到货",
            es: "Llegan los Sistemas de Defensa Aérea",
            pt: "Sistemas de Defesa Aérea Chegam",
            ru: "Системы ПВО прибыли"
        },
        photo: s400,
        description: {
            tr: "ABD'nin tepkisine rağmen Rusya'dan alınan hava savunma sistemleri ülkeye geldi. Dış politikada kararlı duruşumuzu korumaya devam ediyoruz!",
            en: "Despite objections from the US, air defense systems purchased from Russia have arrived in the country. We continue to maintain our firm stance in foreign policy!",
            fr: "Malgré les objections des États-Unis, les systèmes de défense aérienne achetés à la Russie sont arrivés dans le pays. Nous continuons à maintenir notre position ferme en politique étrangère !",
            de: "Trotz der Einwände der USA sind aus Russland gekaufte Luftabwehrsysteme im Land eingetroffen. Wir halten weiterhin an unserer entschlossenen Haltung in der Außenpolitik fest!",
            zh: "尽管美国表示反对，从俄罗斯购买的防空系统已经运抵我国。我们继续在外交政策中保持坚定立场！",
            es: "A pesar de las objeciones de los Estados Unidos, los sistemas de defensa aérea comprados a Rusia han llegado al país. ¡Seguimos manteniendo nuestra postura firme en política exterior!",
            pt: "Apesar das objeções dos EUA, os sistemas de defesa aérea adquiridos à Rússia chegaram ao país. Continuamos a manter a nossa postura firme na política externa!",
            ru: "Несмотря на возражения США, системы ПВО, приобретенные у России, прибыли в страну. Мы продолжаем придерживаться решительной позиции во внешней политике!"
        },
        listID: "S400",
        lastingEffect: {
            type: "increase",
            value: -10,
            stat: "internalSecurity"
        }
    },
];
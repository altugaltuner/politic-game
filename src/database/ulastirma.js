import ulastirmaBakani from "../../public/ministers/ulasim-bakani.webp";
// 4 soru var
export const ulastirmaQuestions = {
    tr: [
        {
            id: 150,
            question: "Hızlı tren projeleri ülke genelinde büyük ilgi görüyor. Ancak karayollarındaki ücretli geçişlerden şikayetler alıyoruz",
            answers: [
                {
                    text: "Hızlı tren hatlarını genişletin",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "ulastirma1",
                },
                {
                    text: "Karayolu geçiş ücretlerinde indirime gidin",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Ulaştırma Bakanı",
            photo: ulastirmaBakani,
            level: 1,
        },
        {
            id: 151,
            question: "Sayın Cumhurbaşkanım, ülkemizde internet altyapısı yetersiz. Gençler internet hızının yavaşlığından şikayetçi.",
            answers: [
                {
                    text: "Fiber altyapı yatırımları yapılsın",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Yurt dışından internet altyapısı satın alınsın",
                    effect: {
                        internationalRelations: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    },
                }
            ],
            title: "Ulaştırma Bakanı",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 152,
            question: "İstanbula yeni bir havaalanı projemiz mevcut. Fakat şirket, devletten yolcu garantisi istiyor.",
            answers: [
                {
                    text: "Garanti sağlansın, havalimanına başlansın",
                    effect: {
                        publicSupport: -10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Bunun garantisini veremeyiz",
                    effect: {
                        budget: +15,
                        infrastructureAndEnvironment: -10,
                    },
                }
            ],
            title: "Ulaştırma Bakanı",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 153,
            question: "Sayın Cumhurbaşkanım, köprü ve tünel projeleri vatandaşlara büyük kolaylık sağladı, ancak yap-işlet-devret modeliyle yapılan bu projeler yüksek geçiş ücretleri nedeniyle eleştiriliyor.",
            answers: [
                {
                    text: "Geçiş ücretlerinde indirime gideceğiz",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Alternatif yollar inşa edeceğiz",
                    effect: {
                        publicSupport: +10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ulaştırma Bakanı",
            photo: ulastirmaBakani,
            level: 3,
        },
    ],
    en: [
        {
            id: 150,
            question: "High-speed train projects are receiving great interest. However, we are receiving complaints about toll fees on highways",
            answers: [
                {
                    text: "Expand train lines",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "ulastirma1",
                },
                {
                    text: "Reduce highway toll fees",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Minister of Transport",
            photo: ulastirmaBakani,
            level: 1,
        },
        {
            id: 151,
            question: "Mr. President, internet infrastructure in our country is inadequate. Young people are complaining about the slow internet speed.",
            answers: [
                {
                    text: "Invest in infrastructure",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Purchase it from abroad",
                    effect: {
                        internationalRelations: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    },
                }
            ],
            title: "Minister of Transport",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 152,
            question: "We have a new airport project for Istanbul. However, the company is requesting a passenger guarantee from the government.",
            answers: [
                {
                    text: "Provide the guarantee",
                    effect: {
                        publicSupport: -10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Deny the request",
                    effect: {
                        budget: +15,
                        infrastructureAndEnvironment: -10,
                    },
                }
            ],
            title: "Minister of Transport",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 153,
            question: "Mr. President, bridge and tunnel projects ease citizens lives but face criticism for high tolls under the build-operate-transfer model.",
            answers: [
                {
                    text: "Reduce the toll fees",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Build new roads",
                    effect: {
                        publicSupport: +10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Minister of Transport",
            photo: ulastirmaBakani,
            level: 3,
        },
    ],
    de: [
        {
            id: 150,
            question: "Hochgeschwindigkeitszugprojekte stoßen auf großes Interesse. Allerdings erhalten wir Beschwerden über die Mautgebühren auf Autobahnen.",
            answers: [
                {
                    text: "Zuglinien erweitern",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "ulastirma1",
                },
                {
                    text: "Mautgebühren für Autobahnen senken",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Verkehrsminister",
            photo: ulastirmaBakani,
            level: 1,
        },
        {
            id: 151,
            question: "Herr Präsident, die Internetinfrastruktur in unserem Land ist unzureichend. Jugendliche beschweren sich über die langsame Internetgeschwindigkeit.",
            answers: [
                {
                    text: "In die Infrastruktur investieren",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Aus dem Ausland kaufen",
                    effect: {
                        internationalRelations: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    },
                }
            ],
            title: "Verkehrsminister",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 152,
            question: "Wir haben ein neues Flughafenprojekt für Istanbul. Allerdings fordert das Unternehmen eine Passagiergarantie von der Regierung.",
            answers: [
                {
                    text: "Die Garantie gewähren",
                    effect: {
                        publicSupport: -10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Die Anfrage ablehnen",
                    effect: {
                        budget: +15,
                        infrastructureAndEnvironment: -10,
                    },
                }
            ],
            title: "Verkehrsminister",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 153,
            question: "Herr Präsident, Brücken- und Tunnelprojekte erleichtern das Leben der Bürger, werden jedoch für die hohen Mautgebühren im Rahmen des Betreibermodells kritisiert.",
            answers: [
                {
                    text: "Die Mautgebühren senken",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Neue Straßen bauen",
                    effect: {
                        publicSupport: +10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Verkehrsminister",
            photo: ulastirmaBakani,
            level: 3,
        },
    ],
    fr: [
        {
            id: 150,
            question: "Les projets de train à grande vitesse suscitent un grand intérêt. Cependant, nous recevons des plaintes concernant les frais de péage sur les autoroutes.",
            answers: [
                {
                    text: "Étendre les lignes de train",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "ulastirma1",
                },
                {
                    text: "Réduire les frais de péage",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Ministre des Transports",
            photo: ulastirmaBakani,
            level: 1,
        },
        {
            id: 151,
            question: "Monsieur le Président, l'infrastructure internet de notre pays est inadéquate. Les jeunes se plaignent de la lenteur d'internet.",
            answers: [
                {
                    text: "Investir dans l'infrastructure",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "L'acheter à l'étranger",
                    effect: {
                        internationalRelations: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    },
                }
            ],
            title: "Ministre des Transports",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 152,
            question: "Nous avons un nouveau projet d'aéroport pour Istanbul. Cependant, l'entreprise demande une garantie de passagers de la part du gouvernement.",
            answers: [
                {
                    text: "Fournir la garantie",
                    effect: {
                        publicSupport: -10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Refuser la demande",
                    effect: {
                        budget: +15,
                        infrastructureAndEnvironment: -10,
                    },
                }
            ],
            title: "Ministre des Transports",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 153,
            question: "Monsieur le Président, les projets de ponts et tunnels facilitent la vie des citoyens, mais font face à des critiques pour les péages élevés sous le modèle construire-exploiter-transférer.",
            answers: [
                {
                    text: "Réduire les frais de péage",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Construire de nouvelles routes",
                    effect: {
                        publicSupport: +10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministre des Transports",
            photo: ulastirmaBakani,
            level: 3,
        },
    ],
    pt: [
        {
            id: 150,
            question: "Os projetos de trem de alta velocidade estão recebendo grande interesse. No entanto, estamos recebendo reclamações sobre as tarifas de pedágio nas rodovias.",
            answers: [
                {
                    text: "Expandir as linhas de trem",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "ulastirma1",
                },
                {
                    text: "Reduzir as tarifas de pedágio",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Ministro dos Transportes",
            photo: ulastirmaBakani,
            level: 1,
        },
        {
            id: 151,
            question: "Senhor Presidente, a infraestrutura de internet em nosso país é inadequada. Os jovens estão reclamando da baixa velocidade da internet.",
            answers: [
                {
                    text: "Investir na infraestrutura",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Comprar do exterior",
                    effect: {
                        internationalRelations: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    },
                }
            ],
            title: "Ministro dos Transportes",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 152,
            question: "Temos um novo projeto de aeroporto para Istambul. No entanto, a empresa está solicitando uma garantia de passageiros do governo.",
            answers: [
                {
                    text: "Fornecer a garantia",
                    effect: {
                        publicSupport: -10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Negar o pedido",
                    effect: {
                        budget: +15,
                        infrastructureAndEnvironment: -10,
                    },
                }
            ],
            title: "Ministro dos Transportes",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 153,
            question: "Senhor Presidente, projetos de pontes e túneis facilitam a vida dos cidadãos, mas enfrentam críticas devido aos altos pedágios sob o modelo de construção-operação-transferência.",
            answers: [
                {
                    text: "Reduzir as tarifas de pedágio",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Construir novas estradas",
                    effect: {
                        publicSupport: +10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministro dos Transportes",
            photo: ulastirmaBakani,
            level: 3,
        },
    ],
    zh: [
        {
            id: 150,
            question: "高速列车项目引起了极大的兴趣。然而，我们收到关于高速公路收费的投诉。",
            answers: [
                {
                    text: "扩展列车线路",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "ulastirma1",
                },
                {
                    text: "降低高速公路收费",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "交通部长",
            photo: ulastirmaBakani,
            level: 1,
        },
        {
            id: 151,
            question: "总统先生，我国的互联网基础设施不足。年轻人抱怨网速缓慢。",
            answers: [
                {
                    text: "投资基础设施",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "从国外采购",
                    effect: {
                        internationalRelations: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    },
                }
            ],
            title: "交通部长",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 152,
            question: "我们为伊斯坦布尔设计了一个新的机场项目。然而，该公司要求政府提供乘客保证。",
            answers: [
                {
                    text: "提供保证",
                    effect: {
                        publicSupport: -10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "拒绝请求",
                    effect: {
                        budget: +15,
                        infrastructureAndEnvironment: -10,
                    },
                }
            ],
            title: "交通部长",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 153,
            question: "总统先生，桥梁和隧道项目方便了市民的生活，但因建设-运营-移交模式下的高收费而受到批评。",
            answers: [
                {
                    text: "降低收费",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "修建新道路",
                    effect: {
                        publicSupport: +10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "交通部长",
            photo: ulastirmaBakani,
            level: 3,
        },
    ],
    es: [
        {
            id: 150,
            question: "Los proyectos de trenes de alta velocidad están recibiendo gran interés. Sin embargo, estamos recibiendo quejas sobre las tarifas de peaje en las autopistas.",
            answers: [
                {
                    text: "Ampliar las líneas de tren",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "ulastirma1",
                },
                {
                    text: "Reducir las tarifas de peaje en autopistas",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Ministro de Transporte",
            photo: ulastirmaBakani,
            level: 1,
        },
        {
            id: 151,
            question: "Señor Presidente, la infraestructura de internet en nuestro país es insuficiente. Los jóvenes se quejan de la baja velocidad de internet.",
            answers: [
                {
                    text: "Invertir en infraestructura",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Comprar desde el extranjero",
                    effect: {
                        internationalRelations: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    },
                }
            ],
            title: "Ministro de Transporte",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 152,
            question: "Tenemos un nuevo proyecto de aeropuerto para Estambul. Sin embargo, la empresa está solicitando una garantía de pasajeros del gobierno.",
            answers: [
                {
                    text: "Proporcionar la garantía",
                    effect: {
                        publicSupport: -10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Denegar la solicitud",
                    effect: {
                        budget: +15,
                        infrastructureAndEnvironment: -10,
                    },
                }
            ],
            title: "Ministro de Transporte",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 153,
            question: "Señor Presidente, los proyectos de puentes y túneles facilitan la vida de los ciudadanos, pero enfrentan críticas por los altos peajes bajo el modelo de construcción-operación-transferencia.",
            answers: [
                {
                    text: "Reducir las tarifas de peaje",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Construir nuevas carreteras",
                    effect: {
                        publicSupport: +10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministro de Transporte",
            photo: ulastirmaBakani,
            level: 3,
        },
    ],
    ru: [
        {
            id: 150,
            question: "Проекты высокоскоростных поездов вызывают большой интерес. Однако мы получаем жалобы на плату за проезд по шоссе.",
            answers: [
                {
                    text: "Расширить железнодорожные линии",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "ulastirma1",
                },
                {
                    text: "Снизить плату за проезд по шоссе",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Министр транспорта",
            photo: ulastirmaBakani,
            level: 1,
        },
        {
            id: 151,
            question: "Господин Президент, интернет-инфраструктура в нашей стране неадекватна. Молодежь жалуется на медленную скорость интернета.",
            answers: [
                {
                    text: "Инвестировать в инфраструктуру",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Закупить за рубежом",
                    effect: {
                        internationalRelations: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    },
                }
            ],
            title: "Министр транспорта",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 152,
            question: "У нас есть новый проект аэропорта для Стамбула. Однако компания требует от правительства гарантию на пассажиров.",
            answers: [
                {
                    text: "Предоставить гарантию",
                    effect: {
                        publicSupport: -10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Отказать в запросе",
                    effect: {
                        budget: +15,
                        infrastructureAndEnvironment: -10,
                    },
                }
            ],
            title: "Министр транспорта",
            photo: ulastirmaBakani,
            level: 2,
        },
        {
            id: 153,
            question: "Господин Президент, проекты мостов и туннелей облегчают жизнь граждан, но подвергаются критике за высокую плату за проезд в рамках модели 'строить-эксплуатировать-передавать'.",
            answers: [
                {
                    text: "Снизить плату за проезд",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Построить новые дороги",
                    effect: {
                        publicSupport: +10,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Министр транспорта",
            photo: ulastirmaBakani,
            level: 3,
        },
    ],
}
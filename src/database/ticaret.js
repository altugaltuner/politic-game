import ticaretBakani from "../../public/ministers/ticaret-bakani.webp";
// 7 soru var
export const ticaretQuestions = {
    tr: [
        {
            id: 140,
            question: "Ülkemizde dijital ticaret hızla büyüyor, ancak küçük işletmeler dijital dönüşüme ayak uyduramıyor. Hangisine destek verilip hangisinden feragat edilmeli?",
            answers: [
                {
                    text: "Küçük işletmelere destek verilecek",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Büyük şirketlerin önü açılacak",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Sınır ticareti bazı bölgelerde ekonomik canlanmaya yol açtı. Ancak bu durum güvenlik sorunlarına ve kaçakçılık faaliyetlerine neden olabilir.",
            answers: [
                {
                    text: "Sınır ticaretini destekleyin",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Sınır ticaretini kısıtlayın",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Sayın Cumhurbaşkanım, uluslararası şirketler yatırım yapmak istiyor. Ancak bu, yerli üreticilerin pazar payını daraltabilir.",
            answers: [
                {
                    text: "Yabancı yatırımları kabul edeceğiz",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Yerli üreticileri düşünmek zorundayız",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 143,
            question: "Yurtdışı e-ticaret siteleri, küçük işletmelerin rekabet gücünü azaltıyor. Bu durumda ne yapmalıyız?",
            answers: [
                {
                    text: "Yurtdışı vergi arttırımı yapılsın",
                    effect: {
                        internationalRelations: -20,
                        budget: +10,
                        publicSupport: -20,
                    }
                },
                {
                    text: "Yerli üreticiye faizsiz kredi verilsin",
                    effect: {
                        internationalRelations: +20,
                        budget: -20,
                        publicSupport: +20,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 144,
            question: "Ev kiraları artan enflasyon yüzünden gün geçtikçe artıyor. Kiracılar ile ev sahipleri arasında bir denge sağlamak için ne yapmalıyız?",
            answers: [
                {
                    text: "Kira zammını %25 ile sınırlayın",
                    effect: {
                        publicSupport: -20,
                    }
                },
                {
                    text: "Serbest piyasa koşullarına bırakın",
                    effect: {
                        publicSupport: -15,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 145,
            question: "Lokaller, gizli kumarhaneler ülkede mantar gibi türemeye başladı. Bu durumu nasıl kontrol altına almalıyız?",
            answers: [
                {
                    text: "Legal kumarhaneler kurulmalı",
                    effect: {
                        infrastructureAndEnvironment: +20,
                        budget: -15, // long term effect artı olucak
                        internalSecurity: +15,
                    }
                },
                {
                    text: "Yakalananları kapatın, cezaları arttırın",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        budget: +15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 146, //çevir
            question: "Avrupaya ithal ettiğimiz portakalları bize, içlerinde %5 oranında kanserojen madde bulunduğu için geri iade ettiler. Elimizde tonlarca portakal var.",
            answers: [
                {
                    text: "Suyunu sıkıp meyve suyu olarak satın",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                    }
                },
                {
                    text: "İmha edin.",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    en: [
        {
            id: 140,
            question: "Digital commerce is booming, but small businesses are struggling. Who should we support and what should we sacrifice?",
            answers: [
                {
                    text: "Support small businesses",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Support large companies",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Minister of Commerce",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Border trade has led to economic revitalization in some regions. However, this could cause security problems and smuggling activities.",
            answers: [
                {
                    text: "Support border trade",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Restrict border trade",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Minister of Commerce",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Mr. President, international companies want to invest. However, this could reduce the market share of local producers.",
            answers: [
                {
                    text: "Accept foreign investments",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Support local producers",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Minister of Commerce",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 143,
            question: "Foreign e-commerce sites are reducing the competitiveness of small businesses. What should we do in this situation?",
            answers: [
                {
                    text: "Increase taxes on foreign e-commerce",
                    effect: {
                        internationalRelations: -20,
                        budget: +10,
                        publicSupport: -20,
                    }
                },
                {
                    text: "Provide interest-free loans to local producers",
                    effect: {
                        internationalRelations: +20,
                        budget: -20,
                        publicSupport: +20,
                    }
                }
            ],
            title: "Minister of Trade",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 144,
            question: "Rent prices are increasing day by day due to rising inflation. What should we do to strike a balance between tenants and landlords?",
            answers: [
                {
                    text: "Cap rent increases at 25%",
                    effect: {
                        publicSupport: -20,
                    }
                },
                {
                    text: "Leave it to free market conditions",
                    effect: {
                        publicSupport: -15,
                    }
                }
            ],
            title: "Minister of Trade",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 145,
            question: "Underground casinos have been popping up like mushrooms across the country. How should we control this situation?",
            answers: [
                {
                    text: "Establish legal casinos",
                    effect: {
                        infrastructureAndEnvironment: +20,
                        budget: -15, // long-term effect will be positive
                        internalSecurity: +15,
                    }
                },
                {
                    text: "Shut down those caught and increase penalties",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        budget: +15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Minister of Trade",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 146,
            question: "The oranges we exported to Europe were returned to us because they contained 5% carcinogenic substances. We now have tons of oranges.",
            answers: [
                {
                    text: "Juice them and sell as fruit juice",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                    }
                },
                {
                    text: "Destroy them.",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Minister of Trade",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    de: [
        {
            id: 140,
            question: "Der digitale Handel boomt, aber kleine Unternehmen kämpfen ums Überleben. Wen sollten wir unterstützen und was sollten wir opfern?",
            answers: [
                {
                    text: "Kleine Unternehmen unterstützen",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Große Unternehmen unterstützen",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Der Grenzhandel hat in einigen Regionen eine wirtschaftliche Belebung gebracht. Allerdings könnte dies Sicherheitsprobleme und Schmuggelaktivitäten verursachen.",
            answers: [
                {
                    text: "Grenzhandel unterstützen",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Grenzhandel einschränken",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Herr Präsident, internationale Unternehmen wollen investieren. Dies könnte jedoch den Marktanteil lokaler Produzenten verringern.",
            answers: [
                {
                    text: "Ausländische Investitionen akzeptieren",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Lokale Produzenten unterstützen",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 143,
            question: "Ausländische E-Commerce-Seiten verringern die Wettbewerbsfähigkeit kleiner Unternehmen. Was sollen wir in dieser Situation tun?",
            answers: [
                {
                    text: "Erhöhen Sie die Steuern auf ausländischen E-Commerce",
                    effect: {
                        internationalRelations: -20,
                        budget: +10,
                        publicSupport: -20,
                    }
                },
                {
                    text: "Gewähren Sie lokalen Produzenten zinslose Kredite",
                    effect: {
                        internationalRelations: +20,
                        budget: -20,
                        publicSupport: +20,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 144,
            question: "Die Mietpreise steigen aufgrund der steigenden Inflation von Tag zu Tag. Was sollten wir tun, um ein Gleichgewicht zwischen Mietern und Vermietern herzustellen?",
            answers: [
                {
                    text: "Begrenzen Sie Mietsteigerungen auf 25%",
                    effect: {
                        publicSupport: -20,
                    }
                },
                {
                    text: "Dem freien Markt überlassen",
                    effect: {
                        publicSupport: -15,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 145,
            question: "Illegale Casinos schießen wie Pilze im ganzen Land aus dem Boden. Wie sollen wir diese Situation unter Kontrolle bringen?",
            answers: [
                {
                    text: "Legale Casinos errichten",
                    effect: {
                        infrastructureAndEnvironment: +20,
                        budget: -15, // langfristig positiver Effekt
                        internalSecurity: +15,
                    }
                },
                {
                    text: "Schließen Sie die erwischten und erhöhen Sie die Strafen",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        budget: +15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 146,
            question: "Die Orangen, die wir nach Europa exportiert haben, wurden an uns zurückgeschickt, weil sie 5 % krebserregende Stoffe enthalten. Jetzt haben wir Tonnen von Orangen.",
            answers: [
                {
                    text: "Pressen Sie sie aus und verkaufen Sie sie als Fruchtsaft",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                    }
                },
                {
                    text: "Zerstören Sie sie.",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    fr: [
        {
            id: 140,
            question: "Le commerce numérique est en plein essor, mais les petites entreprises luttent. Qui devrions-nous soutenir et que devons-nous sacrifier ?",
            answers: [
                {
                    text: "Soutenir les petites entreprises",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Soutenir les grandes entreprises",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministre du Commerce",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Le commerce frontalier a conduit à une revitalisation économique dans certaines régions. Cependant, cela pourrait générer des problèmes de sécurité et des activités de contrebande.",
            answers: [
                {
                    text: "Soutenir le commerce frontalier",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Restreindre le commerce frontalier",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministre du Commerce",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Monsieur le Président, des entreprises internationales veulent investir. Cependant, cela pourrait réduire la part de marché des producteurs locaux.",
            answers: [
                {
                    text: "Accepter les investissements étrangers",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Soutenir les producteurs locaux",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Ministre de l'Agriculture",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 143,
            question: "Les sites de commerce électronique étrangers réduisent la compétitivité des petites entreprises. Que devons-nous faire dans cette situation ?",
            answers: [
                {
                    text: "Augmenter les taxes sur le commerce électronique étranger",
                    effect: {
                        internationalRelations: -20,
                        budget: +10,
                        publicSupport: -20,
                    }
                },
                {
                    text: "Fournir des prêts sans intérêt aux producteurs locaux",
                    effect: {
                        internationalRelations: +20,
                        budget: -20,
                        publicSupport: +20,
                    }
                }
            ],
            title: "Ministre du Commerce",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 144,
            question: "Les prix des loyers augmentent de jour en jour en raison de l'inflation croissante. Que devons-nous faire pour établir un équilibre entre locataires et propriétaires ?",
            answers: [
                {
                    text: "Limitez les augmentations de loyer à 25%",
                    effect: {
                        publicSupport: -20,
                    }
                },
                {
                    text: "Laissez cela aux conditions du marché libre",
                    effect: {
                        publicSupport: -15,
                    }
                }
            ],
            title: "Ministre du Commerce",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 145,
            question: "Les casinos clandestins se multiplient comme des champignons à travers le pays. Comment devrions-nous contrôler cette situation ?",
            answers: [
                {
                    text: "Établir des casinos légaux",
                    effect: {
                        infrastructureAndEnvironment: +20,
                        budget: -15, // effet à long terme positif
                        internalSecurity: +15,
                    }
                },
                {
                    text: "Fermez ceux qui sont pris et augmentez les sanctions",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        budget: +15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministre du Commerce",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 146,
            question: "Les oranges que nous avons exportées vers l'Europe nous ont été retournées car elles contenaient 5 % de substances cancérigènes. Nous avons maintenant des tonnes d'oranges.",
            answers: [
                {
                    text: "Transformez-les en jus et vendez-les comme jus de fruits",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                    }
                },
                {
                    text: "Détruisez-les.",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministre du Commerce",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    pt: [
        {
            id: 140,
            question: "O comércio digital está em alta, mas as pequenas empresas estão enfrentando dificuldades. Quem devemos apoiar e o que devemos sacrificar?",
            answers: [
                {
                    text: "Apoiar as pequenas empresas",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Apoiar as grandes companhias",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministro do Comércio",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "O comércio fronteiriço levou à revitalização econômica em algumas regiões. No entanto, isso pode gerar problemas de segurança e atividades de contrabando.",
            answers: [
                {
                    text: "Apoiar o comércio fronteiriço",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Restringir o comércio fronteiriço",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministro do Comércio",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Senhor Presidente, empresas internacionais querem investir. No entanto, isso pode reduzir a participação de mercado dos produtores locais.",
            answers: [
                {
                    text: "Aceitar investimentos estrangeiros",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Apoiar os produtores locais",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Ministro da Agricultura",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 143,
            question: "Os sites de comércio eletrônico estrangeiros estão reduzindo a competitividade das pequenas empresas. O que devemos fazer nesta situação?",
            answers: [
                {
                    text: "Aumentar os impostos sobre o comércio eletrônico estrangeiro",
                    effect: {
                        internationalRelations: -20,
                        budget: +10,
                        publicSupport: -20,
                    }
                },
                {
                    text: "Fornecer empréstimos sem juros aos produtores locais",
                    effect: {
                        internationalRelations: +20,
                        budget: -20,
                        publicSupport: +20,
                    }
                }
            ],
            title: "Ministro do Comércio",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 144,
            question: "Os preços dos aluguéis estão aumentando dia após dia devido à inflação crescente. O que devemos fazer para equilibrar a relação entre inquilinos e proprietários?",
            answers: [
                {
                    text: "Limite os aumentos de aluguel a 25%",
                    effect: {
                        publicSupport: -20,
                    }
                },
                {
                    text: "Deixe para as condições do mercado livre",
                    effect: {
                        publicSupport: -15,
                    }
                }
            ],
            title: "Ministro do Comércio",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 145,
            question: "Cassinos clandestinos estão surgindo como cogumelos em todo o país. Como devemos controlar essa situação?",
            answers: [
                {
                    text: "Estabelecer cassinos legais",
                    effect: {
                        infrastructureAndEnvironment: +20,
                        budget: -15, // efeito positivo a longo prazo
                        internalSecurity: +15,
                    }
                },
                {
                    text: "Feche os que forem pegos e aumente as penalidades",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        budget: +15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro do Comércio",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 146,
            question: "As laranjas que exportamos para a Europa foram devolvidas porque continham 5% de substâncias cancerígenas. Agora temos toneladas de laranjas.",
            answers: [
                {
                    text: "Faça suco delas e venda como suco de frutas",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                    }
                },
                {
                    text: "Destrua-as.",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro do Comércio",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    zh: [
        {
            id: 140,
            question: "数字贸易正在蓬勃发展，但小企业正在苦苦挣扎。我们应该支持谁，又该牺牲什么？",
            answers: [
                {
                    text: "支持小企业",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "支持大公司",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "贸易部长",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "边境贸易在一些地区带来了经济复苏。然而，这可能会引发安全问题和走私活动。",
            answers: [
                {
                    text: "支持边境贸易",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "限制边境贸易",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "贸易部长",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "总统先生，国际公司希望投资。然而，这可能会减少本地生产者的市场份额。",
            answers: [
                {
                    text: "接受外国投资",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "支持本地生产者",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "农业部长",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 143,
            question: "外国电商平台正在削弱小型企业的竞争力。在这种情况下，我们应该怎么办？",
            answers: [
                {
                    text: "提高对外国电商的税收",
                    effect: {
                        internationalRelations: -20,
                        budget: +10,
                        publicSupport: -20,
                    }
                },
                {
                    text: "为本地生产商提供无息贷款",
                    effect: {
                        internationalRelations: +20,
                        budget: -20,
                        publicSupport: +20,
                    }
                }
            ],
            title: "贸易部长",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 144,
            question: "由于通货膨胀加剧，房租价格日益上涨。我们应该怎么做才能在租客和房东之间找到平衡？",
            answers: [
                {
                    text: "将房租涨幅限制在25%",
                    effect: {
                        publicSupport: -20,
                    }
                },
                {
                    text: "交给自由市场条件",
                    effect: {
                        publicSupport: -15,
                    }
                }
            ],
            title: "贸易部长",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 145,
            question: "地下赌场在全国各地像蘑菇一样涌现。我们应该如何控制这种情况？",
            answers: [
                {
                    text: "建立合法赌场",
                    effect: {
                        infrastructureAndEnvironment: +20,
                        budget: -15, // 长期效应将是积极的
                        internalSecurity: +15,
                    }
                },
                {
                    text: "关闭被抓获的赌场并加重处罚",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        budget: +15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "贸易部长",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 146,
            question: "我们出口到欧洲的橙子被退回，因为其中含有5%的致癌物质。我们现在有几吨橙子。",
            answers: [
                {
                    text: "榨成橙汁并作为果汁出售",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                    }
                },
                {
                    text: "销毁它们。",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "贸易部长",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    es: [
        {
            id: 140,
            question: "El comercio digital está en auge, pero las pequeñas empresas luchan. ¿A quién debemos apoyar y qué debemos sacrificar?",
            answers: [
                {
                    text: "Apoyar a las pequeñas empresas",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Apoyar a las grandes empresas",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministro de Comercio",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "El comercio fronterizo ha llevado a un renacimiento económico en algunas regiones. Sin embargo, esto podría llevar a problemas de seguridad y actividades de contrabando.",
            answers: [
                {
                    text: "Apoyar el comercio fronterizo",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Restringir el comercio fronterizo",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministro de Comercio",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Señor Presidente, las empresas internacionales quieren invertir. Sin embargo, esto podría reducir la cuota de mercado de los productores locales.",
            answers: [
                {
                    text: "Aceptar inversiones extranjeras",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Apoyar a los productores locales",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Ministro de Agricultura",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 143,
            question: "Los sitios de comercio electrónico extranjeros están reduciendo la competitividad de las pequeñas empresas. ¿Qué debemos hacer en esta situación?",
            answers: [
                {
                    text: "Aumentar los impuestos sobre el comercio electrónico extranjero",
                    effect: {
                        internationalRelations: -20,
                        budget: +10,
                        publicSupport: -20,
                    }
                },
                {
                    text: "Proporcionar préstamos sin intereses a los productores locales",
                    effect: {
                        internationalRelations: +20,
                        budget: -20,
                        publicSupport: +20,
                    }
                }
            ],
            title: "Ministro de Comercio",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 144,
            question: "Los precios de los alquileres están aumentando día a día debido a la creciente inflación. ¿Qué deberíamos hacer para equilibrar la relación entre inquilinos y propietarios?",
            answers: [
                {
                    text: "Limitar los aumentos de alquiler al 25%",
                    effect: {
                        publicSupport: -20,
                    }
                },
                {
                    text: "Dejarlo a las condiciones del mercado libre",
                    effect: {
                        publicSupport: -15,
                    }
                }
            ],
            title: "Ministro de Comercio",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 145,
            question: "Los casinos clandestinos están surgiendo como hongos en todo el país. ¿Cómo deberíamos controlar esta situación?",
            answers: [
                {
                    text: "Establecer casinos legales",
                    effect: {
                        infrastructureAndEnvironment: +20,
                        budget: -15, // efecto positivo a largo plazo
                        internalSecurity: +15,
                    }
                },
                {
                    text: "Cierre los que sean capturados y aumente las sanciones",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        budget: +15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro de Comercio",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 146,
            question: "Las naranjas que exportamos a Europa nos fueron devueltas porque contenían un 5% de sustancias cancerígenas. Ahora tenemos toneladas de naranjas.",
            answers: [
                {
                    text: "Exprímelas y véndelas como jugo de frutas",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                    }
                },
                {
                    text: "Destrúyelas.",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro de Comercio",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    ru: [
        {
            id: 140,
            question: "Цифровая торговля процветает, но малый бизнес сталкивается с трудностями. Кого мы должны поддержать и чем пожертвовать?",
            answers: [
                {
                    text: "Поддержать малый бизнес",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Поддержать крупные компании",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Пограничная торговля привела к экономическому оживлению в некоторых регионах. Однако это может вызвать проблемы безопасности и контрабанду.",
            answers: [
                {
                    text: "Поддержать пограничную торговлю",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Ограничить пограничную торговлю",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Господин Президент, международные компании хотят инвестировать. Однако это может сократить долю рынка местных производителей.",
            answers: [
                {
                    text: "Принять иностранные инвестиции",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Поддержать местных производителей",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 143,
            question: "Иностранные сайты электронной коммерции снижают конкурентоспособность малого бизнеса. Что мы должны сделать в этой ситуации?",
            answers: [
                {
                    text: "Повысить налоги на иностранную электронную торговлю",
                    effect: {
                        internationalRelations: -20,
                        budget: +10,
                        publicSupport: -20,
                    }
                },
                {
                    text: "Предоставить беспроцентные кредиты местным производителям",
                    effect: {
                        internationalRelations: +20,
                        budget: -20,
                        publicSupport: +20,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 144,
            question: "Цены на аренду растут с каждым днем из-за растущей инфляции. Что нам делать, чтобы обеспечить баланс между арендаторами и арендодателями?",
            answers: [
                {
                    text: "Ограничьте повышение арендной платы 25%",
                    effect: {
                        publicSupport: -20,
                    }
                },
                {
                    text: "Оставить на усмотрение свободного рынка",
                    effect: {
                        publicSupport: -15,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 145,
            question: "Подпольные казино появляются, как грибы, по всей стране. Как нам контролировать эту ситуацию?",
            answers: [
                {
                    text: "Создать легальные казино",
                    effect: {
                        infrastructureAndEnvironment: +20,
                        budget: -15, // в долгосрочной перспективе эффект будет положительным
                        internalSecurity: +15,
                    }
                },
                {
                    text: "Закрывайте обнаруженные и увеличивайте штрафы",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        budget: +15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 3,
        },
        {
            id: 146,
            question: "Апельсины, которые мы экспортировали в Европу, были возвращены нам, так как содержали 5% канцерогенных веществ. Теперь у нас тонны апельсинов.",
            answers: [
                {
                    text: "Выжмите их и продавайте как фруктовый сок",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                    }
                },
                {
                    text: "Уничтожьте их.",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 3,
        },
    ],
};
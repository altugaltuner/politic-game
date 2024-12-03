import adaletBakanı from "../../public/ministers/adalet-bakani.webp";
import altug from "../../public/ministers/altug.webp";
//4 soru var
export const adaletQuestions = {
    tr: [
        {
            id: 1,
            question: "Son seçimleri %51 ile kazanarak başkan oldunuz! Bu sorumluluğu almaya hazır mısınız?",
            answers: [
                {
                    text: "Halkımıza hizmet etmeye hazırız",
                    effect: {
                    }
                },
                {
                    text: "Bu ülke için elimizden gelenin en iyisini yapacağız",
                    effect: {
                    }
                }
            ],
            title: "Yaratıcı",
            photo: altug,
            level: 1,
        },
        {
            id: 2,
            question: "Büyük metropollerde suç oranları arttı, halk güvenlik konusunda endişeli...",
            answers: [
                {
                    text: "Her bölgeye yeni karakollar açılacak",
                    effect: {
                        internalSecurity: +5,
                        infrastructureAndEnvironment: +5,
                        budget: -10,
                    }
                },
                {
                    text: "Polis ekipleri güçlendirilecek",
                    effect: {
                        internalSecurity: +10,
                        infrastructureAndEnvironment: -15,
                        budget: -5,
                    }
                }
            ],
            title: "Adalet Bakanı",
            photo: adaletBakanı,
            level: 1,
        },
        {
            id: 3,
            question: "Sayın Başkan, cezaevleri dolup taşıyor. Herhangi bir öneriniz var mı?",
            answers: [
                {
                    text: "Cezaevlerindeki mahkum sayısı azaltılacak",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        infrastructureAndEnvironment: -20,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Yeni cezaevleri inşa edilecek",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Adalet Bakanı",
            photo: adaletBakanı,
            level: 2,
        },
        {
            id: 4,
            question: "Sayın Başkan, ülkemizde meydana gelen olaylar toplumu sarsıyor. Halkın adalete olan güvenini yeniden sağlamak için ne yapmalıyız?",
            answers: [
                {
                    text: "En büyük Adalet Sarayını inşa edeceğiz",
                    effect: {
                        internalSecurity: -10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Her ilde adli denetimleri arttıracağız",
                    effect: {
                        internalSecurity: +10,
                        budget: +5,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Adalet Bakanı",
            photo: adaletBakanı,
            level: 2,
        },
    ],
    en: [
        {
            id: 1,
            question: "You became president by winning the last elections with 51%! Are you ready to take on this responsibility?",
            answers: [
                {
                    text: "We are ready to serve our nation",
                    effect: {
                    }
                },
                {
                    text: "We will do our best for this country",
                    effect: {
                    }
                }
            ],
            title: "Creator",
            photo: altug,
            level: 1,
        },
        {
            id: 2,
            question: "Crime rates increased in our biggest metropols, people worried about security...",
            answers: [
                {
                    text: "New police stations will be opened",
                    effect: {
                        internalSecurity: +5,
                        infrastructureAndEnvironment: +5,
                        budget: -10,
                    }
                },
                {
                    text: "Police teams will be strengthened",
                    effect: {
                        internalSecurity: +10,
                        infrastructureAndEnvironment: -15,
                        budget: -5,
                    }
                }
            ],
            title: "Minister of Justice",
            photo: adaletBakanı,
            level: 1,
        },
        {
            id: 3,
            question: "Mr. President, prisons are overflowing. Do you have any suggestions?",
            answers: [
                {
                    text: "Reduced sentences for minor crimes",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        infrastructureAndEnvironment: -20,
                    },
                    listID: "adalet2",
                },
                {
                    text: "New prisons will be built",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Minister of Justice",
            photo: adaletBakanı,
            level: 2,
        },
        {
            id: 4,
            question: "Incidents occurring in our country are shaking society. We have to restore people's trust in justice.",
            answers: [
                {
                    text: "Build the largest Palace of Justice",
                    effect: {
                        internalSecurity: -10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Increase the number of judges",
                    effect: {
                        internalSecurity: +10,
                        budget: +5,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Minister of Justice",
            photo: adaletBakanı,
            level: 2,
        },
    ],
    de: [
        {
            id: 1,
            question: "Sie wurden Präsident, indem Sie die letzten Wahlen mit 51 % gewonnen haben! Sind Sie bereit, diese Verantwortung zu übernehmen?",
            answers: [
                {
                    text: "Wir sind bereit, unserer Nation zu dienen",
                    effect: {
                    }
                },
                {
                    text: "Wir werden unser Bestes für dieses Land tun",
                    effect: {
                    }
                }
            ],
            title: "Schöpfer",
            photo: altug,
            level: 1,
        },
        {
            id: 2,
            question: "Die Kriminalitätsrate in unseren größten Metropolen ist gestiegen, die Menschen sorgen sich um die Sicherheit...",
            answers: [
                {
                    text: "Neue Polizeistationen werden eröffnet",
                    effect: {
                        internalSecurity: +5,
                        infrastructureAndEnvironment: +5,
                        budget: -10,
                    }
                },
                {
                    text: "Polizeiteams werden verstärkt",
                    effect: {
                        internalSecurity: +10,
                        infrastructureAndEnvironment: -15,
                        budget: -5,
                    }
                }
            ],
            title: "Justizminister",
            photo: adaletBakanı,
            level: 1,
        },
        {
            id: 3,
            question: "Herr Präsident, die Gefängnisse sind überfüllt. Haben Sie Vorschläge?",
            answers: [
                {
                    text: "Milderung der Strafen für kleinere Vergehen",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        infrastructureAndEnvironment: -20,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Neue Gefängnisse werden gebaut",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Justizminister",
            photo: adaletBakanı,
            level: 2,
        },
        {
            id: 4,
            question: "Vorfälle in unserem Land erschüttern die Gesellschaft. Wir müssen das Vertrauen der Menschen in die Justiz wiederherstellen.",
            answers: [
                {
                    text: "Das größte Justizpalast bauen",
                    effect: {
                        internalSecurity: -10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Die Anzahl der Richter erhöhen",
                    effect: {
                        internalSecurity: +10,
                        budget: +5,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Justizminister",
            photo: adaletBakanı,
            level: 2,
        },
    ],
    fr: [
        {
            id: 1,
            question: "Vous êtes devenu président en remportant les dernières élections avec 51% des voix! Êtes-vous prêt à assumer cette responsabilité?",
            answers: [
                {
                    text: "Nous sommes prêts à servir notre nation",
                    effect: {
                    }
                },
                {
                    text: "Nous ferons de notre mieux pour ce pays",
                    effect: {
                    }
                }
            ],
            title: "Créateur",
            photo: altug,
            level: 1,
        },
        {
            id: 2,
            question: "Les taux de criminalité ont augmenté dans nos plus grandes métropoles, les gens s'inquiètent pour leur sécurité...",
            answers: [
                {
                    text: "De nouveaux commissariats seront ouverts",
                    effect: {
                        internalSecurity: +5,
                        infrastructureAndEnvironment: +5,
                        budget: -10,
                    }
                },
                {
                    text: "Les équipes de police seront renforcées",
                    effect: {
                        internalSecurity: +10,
                        infrastructureAndEnvironment: -15,
                        budget: -5,
                    }
                }
            ],
            title: "Ministre de la Justice",
            photo: adaletBakanı,
            level: 1,
        },
        {
            id: 3,
            question: "Monsieur le Président, les prisons débordent. Avez-vous des suggestions?",
            answers: [
                {
                    text: "Réduction des peines pour les délits mineurs",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        infrastructureAndEnvironment: -20,
                    },
                    listID: "adalet2",
                },
                {
                    text: "De nouvelles prisons seront construites",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministre de la Justice",
            photo: adaletBakanı,
            level: 2,
        },
        {
            id: 4,
            question: "Les incidents survenant dans notre pays ébranlent la société. Nous devons rétablir la confiance des citoyens dans la justice.",
            answers: [
                {
                    text: "Construire le plus grand Palais de Justice",
                    effect: {
                        internalSecurity: -10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Augmenter le nombre de juges",
                    effect: {
                        internalSecurity: +10,
                        budget: +5,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Ministre de la Justice",
            photo: adaletBakanı,
            level: 2,
        },
    ],
    pt: [
        {
            id: 1,
            question: "Você se tornou presidente ao vencer as últimas eleições com 51%! Está pronto para assumir essa responsabilidade?",
            answers: [
                {
                    text: "Estamos prontos para servir nossa nação",
                    effect: {
                    }
                },
                {
                    text: "Faremos o nosso melhor por este país",
                    effect: {
                    }
                }
            ],
            title: "Criador",
            photo: altug,
            level: 1,
        },
        {
            id: 2,
            question: "As taxas de criminalidade aumentaram em nossas maiores metrópoles, as pessoas estão preocupadas com a segurança...",
            answers: [
                {
                    text: "Novas delegacias serão abertas",
                    effect: {
                        internalSecurity: +5,
                        infrastructureAndEnvironment: +5,
                        budget: -10,
                    }
                },
                {
                    text: "As equipes policiais serão reforçadas",
                    effect: {
                        internalSecurity: +10,
                        infrastructureAndEnvironment: -15,
                        budget: -5,
                    }
                }
            ],
            title: "Ministro da Justiça",
            photo: adaletBakanı,
            level: 1,
        },
        {
            id: 3,
            question: "Senhor Presidente, as prisões estão superlotadas. Tem alguma sugestão?",
            answers: [
                {
                    text: "Reduzir penas para crimes menores",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        infrastructureAndEnvironment: -20,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Novas prisões serão construídas",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministro da Justiça",
            photo: adaletBakanı,
            level: 2,
        },
        {
            id: 4,
            question: "Incidentes que ocorrem em nosso país estão abalando a sociedade. Precisamos restaurar a confiança das pessoas na justiça.",
            answers: [
                {
                    text: "Construir o maior Palácio da Justiça",
                    effect: {
                        internalSecurity: -10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Aumentar o número de juízes",
                    effect: {
                        internalSecurity: +10,
                        budget: +5,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Ministro da Justiça",
            photo: adaletBakanı,
            level: 2,
        },
    ],
    zh: [
        {
            id: 1,
            question: "您以51%的选票赢得了最近的选举成为总统！您准备好承担这一责任了吗？",
            answers: [
                {
                    text: "我们准备好为我们的国家服务",
                    effect: {
                    }
                },
                {
                    text: "我们将竭尽全力为这个国家",
                    effect: {
                    }
                }
            ],
            title: "创建者",
            photo: altug,
            level: 1,
        },
        {
            id: 2,
            question: "犯罪率在我们最大的城市中上升，人们对安全感到担忧……",
            answers: [
                {
                    text: "将新建警察局",
                    effect: {
                        internalSecurity: +5,
                        infrastructureAndEnvironment: +5,
                        budget: -10,
                    }
                },
                {
                    text: "加强警察队伍",
                    effect: {
                        internalSecurity: +10,
                        infrastructureAndEnvironment: -15,
                        budget: -5,
                    }
                }
            ],
            title: "司法部长",
            photo: adaletBakanı,
            level: 1,
        },
        {
            id: 3,
            question: "总统先生，监狱人满为患。您有何建议？",
            answers: [
                {
                    text: "对轻罪减刑",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        infrastructureAndEnvironment: -20,
                    },
                    listID: "adalet2",
                },
                {
                    text: "新建监狱",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "司法部长",
            photo: adaletBakanı,
            level: 2,
        },
        {
            id: 4,
            question: "我国发生的事件动摇了社会信任。我们必须恢复人们对司法的信任。",
            answers: [
                {
                    text: "建造最大的司法宫",
                    effect: {
                        internalSecurity: -10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "adalet2",
                },
                {
                    text: "增加法官人数",
                    effect: {
                        internalSecurity: +10,
                        budget: +5,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "司法部长",
            photo: adaletBakanı,
            level: 2,
        },
    ],
    es: [
        {
            id: 1,
            question: "¡Te convertiste en presidente al ganar las últimas elecciones con el 51%! ¿Estás listo para asumir esta responsabilidad?",
            answers: [
                {
                    text: "Estamos listos para servir a nuestra nación",
                    effect: {
                    }
                },
                {
                    text: "Haremos lo mejor para este país",
                    effect: {
                    }
                }
            ],
            title: "Creador",
            photo: altug,
            level: 1,
        },
        {
            id: 2,
            question: "Las tasas de criminalidad han aumentado en nuestras mayores metrópolis, la gente está preocupada por la seguridad...",
            answers: [
                {
                    text: "Se abrirán nuevas estaciones de policía",
                    effect: {
                        internalSecurity: +5,
                        infrastructureAndEnvironment: +5,
                        budget: -10,
                    }
                },
                {
                    text: "Se reforzarán los equipos de policía",
                    effect: {
                        internalSecurity: +10,
                        infrastructureAndEnvironment: -15,
                        budget: -5,
                    }
                }
            ],
            title: "Ministro de Justicia",
            photo: adaletBakanı,
            level: 1,
        },
        {
            id: 3,
            question: "Señor Presidente, las prisiones están abarrotadas. ¿Tiene alguna sugerencia?",
            answers: [
                {
                    text: "Reducción de penas para delitos menores",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        infrastructureAndEnvironment: -20,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Se construirán nuevas prisiones",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministro de Justicia",
            photo: adaletBakanı,
            level: 2,
        },
        {
            id: 4,
            question: "Los incidentes que ocurren en nuestro país están sacudiendo a la sociedad. Tenemos que restaurar la confianza del pueblo en la justicia.",
            answers: [
                {
                    text: "Construir el Palacio de Justicia más grande",
                    effect: {
                        internalSecurity: -10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Aumentar el número de jueces",
                    effect: {
                        internalSecurity: +10,
                        budget: +5,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Ministro de Justicia",
            photo: adaletBakanı,
            level: 2,
        },
    ],
    ru: [
        {
            id: 1,
            question: "Вы стали президентом, выиграв последние выборы с 51%! Вы готовы взять на себя эту ответственность?",
            answers: [
                {
                    text: "Мы готовы служить нашему народу",
                    effect: {
                    }
                },
                {
                    text: "Мы сделаем все возможное для этой страны",
                    effect: {
                    }
                }
            ],
            title: "Создатель",
            photo: altug,
            level: 1,
        },
        {
            id: 2,
            question: "Уровень преступности увеличился в наших крупнейших мегаполисах, люди обеспокоены безопасностью...",
            answers: [
                {
                    text: "Будут открыты новые полицейские участки",
                    effect: {
                        internalSecurity: +5,
                        infrastructureAndEnvironment: +5,
                        budget: -10,
                    }
                },
                {
                    text: "Будут усилены полицейские команды",
                    effect: {
                        internalSecurity: +10,
                        infrastructureAndEnvironment: -15,
                        budget: -5,
                    }
                }
            ],
            title: "Министр юстиции",
            photo: adaletBakanı,
            level: 1,
        },
        {
            id: 3,
            question: "Господин президент, тюрьмы переполнены. У вас есть предложения?",
            answers: [
                {
                    text: "Сократить сроки для мелких преступлений",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        infrastructureAndEnvironment: -20,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Построить новые тюрьмы",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Министр юстиции",
            photo: adaletBakanı,
            level: 2,
        },
        {
            id: 4,
            question: "Происшествия в нашей стране потрясают общество. Мы должны восстановить доверие людей к правосудию.",
            answers: [
                {
                    text: "Построить самый большой Дворец правосудия",
                    effect: {
                        internalSecurity: -10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    },
                    listID: "adalet2",
                },
                {
                    text: "Увеличить количество судей",
                    effect: {
                        internalSecurity: +10,
                        budget: +5,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Министр юстиции",
            photo: adaletBakanı,
            level: 2,
        },
    ],
};
import saglikBakani from "../../public/ministers/saglik-bakani.webp";
// 4 soru var
export const saglikQuestions = {
    tr: [
        {
            id: 100,
            question: "Şehir hastanelerindeki hasta yoğunluğu artıyor ve sağlık hizmetleri yavaşlıyor.",
            answers: [
                {
                    text: "Mevcut kapasiteyi artırılsın",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Yeni hastaneler inşa edilsin",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
            ],
            title: "Sağlık Bakanı",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 101,
            question: "Ülkemizde psikolojik sağlık sorunları giderek artıyor. Bunun önüne geçmeliyiz yoksa toplum sağlığımız büyük risk altında",
            answers: [
                {
                    text: "Konserler düzenleyip halkı neşelendirin",
                    effect: {
                        publicSupport: +5,
                        internalSecurity: 0,
                        budget: -15,
                    }
                },
                {
                    text: "Psikolojik destek hizmetleri sağlayın",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +5,
                        budget: -10,
                    }
                },
            ],
            title: "Sağlık Bakanı",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 102,
            question: "Bazı hastanelerin yenidoğan ünitelerinde aşırı bir doluluk yaşanıyor. İnceleme yapalım mı?",
            answers: [
                {
                    text: "Hastane müdürüyle irtibata geçin",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Gizli bir denetim yapılsın",
                    effect: {
                        internalSecurity: +10,
                        publicSupport: +10,
                    },
                    listID: "saglik1",
                }
            ],
            title: "Sağlık Bakanı",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 103,
            question: "Ülkemizde obezite oranları hızla artıyor. Bu konuda ne yapmalıyız?",
            answers: [
                {
                    text: "Fastfood zincirleri kapatılsın",
                    effect: {
                        internationalRelations: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Spor salonları ücretsiz hale getirilsin",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Sağlık Bakanı",
            photo: saglikBakani,
            level: 2,
        },
    ],
    en: [
        {
            id: 100,
            question: "Patient congestion in city hospitals is increasing, and health services are slowing down.",
            answers: [
                {
                    text: "Expand capacities",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Build new hospitals",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
            ],
            title: "Minister of Health",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 101,
            question: "Psychological health problems are increasing in our country. We must prevent this, otherwise our public health is at great risk.",
            answers: [
                {
                    text: "Organize concerts to cheer up the public",
                    effect: {
                        publicSupport: +5,
                        internalSecurity: 0,
                        budget: -15,
                    }
                },
                {
                    text: "Provide psychological support services",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +5,
                        budget: -10,
                    }
                },
            ],
            title: "Minister of Health",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 102,
            question: "There is an excessive congestion in the neonatal units of some hospitals. Should we investigate?",
            answers: [
                {
                    text: "Contact the hospital director",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Conduct a secret inspection",
                    effect: {
                        internalSecurity: +10,
                        publicSupport: +10,
                    },
                    listID: "saglik1",
                }
            ],
            title: "Minister of Health",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 103,
            question: "The obesity rate in our country is increasing rapidly. What should we do about this?",
            answers: [
                {
                    text: "Close fast-food chains",
                    effect: {
                        internationalRelations: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Make gyms free of charge",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Minister of Health",
            photo: saglikBakani,
            level: 2,
        }

    ],
    de: [
        {
            id: 100,
            question: "Die Überlastung der Patienten in den Stadtkrankenhäusern nimmt zu, und die Gesundheitsdienste verlangsamen sich.",
            answers: [
                {
                    text: "Kapazitäten erweitern",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Neue Krankenhäuser bauen",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
            ],
            title: "Gesundheitsminister",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 101,
            question: "Psychische Gesundheitsprobleme nehmen in unserem Land zu. Wir müssen dies verhindern, sonst ist unsere öffentliche Gesundheit in großer Gefahr.",
            answers: [
                {
                    text: "Konzerte organisieren",
                    effect: {
                        publicSupport: +5,
                        internalSecurity: 0,
                        budget: -15,
                    }
                },
                {
                    text: "Psychologische Unterstützung bieten",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +5,
                        budget: -10,
                    }
                },
            ],
            title: "Gesundheitsminister",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 102,
            question: "Die Neugeborenenabteilungen einiger Krankenhäuser sind überfüllt. Sollten wir eine Inspektion durchführen?",
            answers: [
                {
                    text: "Den Krankenhausdirektor kontaktieren",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Ein Inspektionsteam entsenden",
                    effect: {
                        internalSecurity: +10,
                        publicSupport: +10,
                    },
                    listID: "saglik1",
                }
            ],
            title: "Gesundheitsminister",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 103,
            question: "Die Fettleibigkeitsrate in unserem Land steigt rapide an. Was sollen wir dagegen tun?",
            answers: [
                {
                    text: "Fast-Food-Ketten schließen",
                    effect: {
                        internationalRelations: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Fitnessstudios kostenlos machen",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Gesundheitsminister",
            photo: saglikBakani,
            level: 2,
        }

    ],
    fr: [
        {
            id: 100,
            question: "La congestion des patients dans les hôpitaux de la ville augmente, et les services de santé ralentissent.",
            answers: [
                {
                    text: "Élargir les capacités",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Construire de nouveaux hôpitaux",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
            ],
            title: "Ministre de la Santé",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 101,
            question: "Les problèmes de santé psychologique augmentent dans notre pays. Nous devons y remédier, sinon la santé publique sera en grand danger.",
            answers: [
                {
                    text: "Organiser des concerts",
                    effect: {
                        publicSupport: +5,
                        internalSecurity: 0,
                        budget: -15,
                    }
                },
                {
                    text: "Fournir un soutien psychologique",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +5,
                        budget: -10,
                    }
                },
            ],
            title: "Ministre de la Santé",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 102,
            question: "Les unités néonatales de certains hôpitaux connaissent une surpopulation excessive. Devrions-nous effectuer une inspection ?",
            answers: [
                {
                    text: "Contacter le directeur de l'hôpital",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Envoyer une équipe d'inspection",
                    effect: {
                        internalSecurity: +10,
                        publicSupport: +10,
                    },
                    listID: "saglik1",
                }
            ],
            title: "Ministre de la Santé",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 103,
            question: "Le taux d'obésité dans notre pays augmente rapidement. Que devrions-nous faire à ce sujet ?",
            answers: [
                {
                    text: "Fermez les chaînes de restauration rapide",
                    effect: {
                        internationalRelations: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Rendez les salles de sport gratuites",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Ministre de la Santé",
            photo: saglikBakani,
            level: 2,
        }

    ],
    pt: [
        {
            id: 100,
            question: "A superlotação de pacientes nos hospitais da cidade está aumentando, e os serviços de saúde estão desacelerando.",
            answers: [
                {
                    text: "Expandir as capacidades",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Construir novos hospitais",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
            ],
            title: "Ministro da Saúde",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 101,
            question: "Os problemas de saúde psicológica estão aumentando em nosso país. Devemos abordar isso, ou a saúde pública estará em grande risco.",
            answers: [
                {
                    text: "Organizar concertos",
                    effect: {
                        publicSupport: +5,
                        internalSecurity: 0,
                        budget: -15,
                    }
                },
                {
                    text: "Fornecer apoio psicológico",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +5,
                        budget: -10,
                    }
                },
            ],
            title: "Ministro da Saúde",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 102,
            question: "As unidades neonatais de alguns hospitais estão experimentando superlotação excessiva. Devemos realizar uma inspeção?",
            answers: [
                {
                    text: "Contatar o diretor do hospital",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Enviar uma equipe de inspeção",
                    effect: {
                        internalSecurity: +10,
                        publicSupport: +10,
                    },
                    listID: "saglik1",
                }
            ],
            title: "Ministro da Saúde",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 103,
            question: "A taxa de obesidade em nosso país está aumentando rapidamente. O que devemos fazer sobre isso?",
            answers: [
                {
                    text: "Fechar redes de fast-food",
                    effect: {
                        internationalRelations: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Tornar as academias gratuitas",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Ministro da Saúde",
            photo: saglikBakani,
            level: 2,
        }

    ],
    zh: [
        {
            id: 100,
            question: "城市医院的患者拥挤程度正在增加，医疗服务正在放缓。",
            answers: [
                {
                    text: "扩大容量",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "建造新医院",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
            ],
            title: "卫生部长",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 101,
            question: "我国的心理健康问题正在增加。如果不加以解决，公共健康将面临巨大风险。",
            answers: [
                {
                    text: "组织音乐会",
                    effect: {
                        publicSupport: +5,
                        internalSecurity: 0,
                        budget: -15,
                    }
                },
                {
                    text: "提供心理支持",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +5,
                        budget: -10,
                    }
                },
            ],
            title: "卫生部长",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 102,
            question: "一些医院的新生儿病房正经历严重的拥挤现象。我们是否应该进行检查？",
            answers: [
                {
                    text: "联系医院院长",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "派遣检查小组",
                    effect: {
                        internalSecurity: +10,
                        publicSupport: +10,
                    },
                    listID: "saglik1",
                }
            ],
            title: "卫生部长",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 103,
            question: "我国的肥胖率正在迅速上升。我们应该怎么做？",
            answers: [
                {
                    text: "关闭快餐连锁店",
                    effect: {
                        internationalRelations: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "让健身房免费",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: +10,
                    },
                }
            ],
            title: "卫生部长",
            photo: saglikBakani,
            level: 2,
        }

    ],
    es: [
        {
            id: 100,
            question: "La congestión de pacientes en los hospitales de la ciudad está aumentando, y los servicios de atención médica se están ralentizando.",
            answers: [
                {
                    text: "Ampliar capacidades",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Construir nuevos hospitales",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
            ],
            title: "Ministro de Salud",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 101,
            question: "Los problemas de salud psicológica están aumentando en nuestro país. Debemos abordar esto, o nuestra salud pública estará en grave riesgo",
            answers: [
                {
                    text: "Organizar conciertos",
                    effect: {
                        publicSupport: +5,
                        internalSecurity: 0,
                        budget: -15,
                    }
                },
                {
                    text: "Proporcionar apoyo psicológico",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +5,
                        budget: -10,
                    }
                },
            ],
            title: "Ministro de Salud",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 102,
            question: "Algunas unidades neonatales de los hospitales están experimentando una superpoblación excesiva. ¿Deberíamos realizar una inspección?",
            answers: [
                {
                    text: "Contactar al director del hospital",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Enviar un equipo de inspección",
                    effect: {
                        internalSecurity: +10,
                        publicSupport: +10,
                    },
                    listID: "saglik1",
                }
            ],
            title: "Ministro de Salud",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 103,
            question: "La tasa de obesidad en nuestro país está aumentando rápidamente. ¿Qué deberíamos hacer al respecto?",
            answers: [
                {
                    text: "Cerrar las cadenas de comida rápida",
                    effect: {
                        internationalRelations: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Hacer que los gimnasios sean gratuitos",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Ministro de Salud",
            photo: saglikBakani,
            level: 2,
        }

    ],
    ru: [
        {
            id: 100,
            question: "Перегрузка пациентов в городских больницах увеличивается, и медицинские услуги замедляются.",
            answers: [
                {
                    text: "Расширить мощности",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Построить новые больницы",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                    }
                },
            ],
            "title": "Министр здравоохранения",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 101,
            question: "Проблемы с психологическим здоровьем увеличиваются в нашей стране. Мы должны заняться этим, иначе общественное здоровье будет в большой опасности.",
            answers: [
                {
                    text: "Организовать концерты",
                    effect: {
                        publicSupport: +5,
                        internalSecurity: 0,
                        budget: -15,
                    }
                },
                {
                    text: "Предоставить психологическую поддержку",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +5,
                        budget: -10,
                    }
                },
            ],
            title: "Министр здравоохранения",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 102,
            question: "В некоторых больницах наблюдается чрезмерная перегрузка в неонатальных отделениях. Следует ли провести проверку?",
            answers: [
                {
                    text: "Связаться с директором больницы",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Отправить команду для проверки",
                    effect: {
                        internalSecurity: +10,
                        publicSupport: +10,
                    },
                    listID: "saglik1",
                }
            ],
            title: "Министр здравоохранения",
            photo: saglikBakani,
            level: 2,
        },
        {
            id: 103,
            question: "Уровень ожирения в нашей стране быстро растет. Что нам с этим делать?",
            answers: [
                {
                    text: "Закрыть сети фастфуда",
                    effect: {
                        internationalRelations: -20,
                        publicSupport: -15,
                    }
                },
                {
                    text: "Сделать тренажерные залы бесплатными",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Министр здравоохранения",
            photo: saglikBakani,
            level: 2,
        }

    ],
};
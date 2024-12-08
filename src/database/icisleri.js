import icisleriBakani from "../../public/ministers/icisleri-bakani.webp";
// 9 soru var
export const icisleriQuestions = {
    tr: [
        {
            id: 90,
            question: "Ülkedeki mülteci sayısı toplumsal tansiyonu artırıyor. Halk bu konudan şikayetçi. Ne yapmalıyız? ",
            answers: [
                {
                    text: "Kademeli olarak göndereceğiz",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Entegrasyon projesini başlatacağız",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Türkiye deprem riski taşıyan bir ülke. Şehirlerin altyapılarını güçlendirmek ve yeni kentsel dönüşüm projeleri başlatabiliriz. Ancak bu uzun süreli bir süreç olacak ve bütçemizi bir hayli zorlayacak.",
            answers: [
                {
                    text: "Kentsel dönüşümü başlatın",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Şimdilik ertelemek zorundayız",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Sınır bölgelerimizde kaçakçılık ve insan kaçakçılığı faaliyetleri artıyor. Bu sorunu nasıl çözebiliriz?",
            answers: [
                {
                    text: "Sınırdan tüm geçişleri kapatın",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Yakalananları sınır dışı edin",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Büyük şehirlerde trafik sorunları giderek artıyor. Halk bu durumdan çok rahatsız",
            answers: [
                {
                    text: "Yeni yollar inşa edilsin",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Toplu taşımaya teşvik edin",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Cumhurbaşkanım, ülkede terör örgütleri faaliyetlerini artırıyor. Büyük şehirler çok büyük risk altında!",
            answers: [
                {
                    text: "Uluslararası işbirliğine başvuracağız",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Askeri operasyona başlamalıyız",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
        { //yeni soru
            id: 95,
            question: "Eski İçişleri Bakanının ülkeye uyuşturucu soktuğunu ve ticaretini yaptığını tespit ettik. Hala ülkedeyken yakalama kararı çıkartalım mı?",
            answers: [
                {
                    text: "Eski dostuma dokunmayın",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Derhal yakalayın",
                    effect: {
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                },
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
        { //yeni soru
            id: 96,
            question: "Milli Arama Kurtarma Ekibi kurucusu bir televizyon programında seçim kurumumuz YTR'nin seçimlerde hile yaptığını iddia etti.",
            answers: [
                {
                    text: "Hakkında yasal işlem başlatın",
                    effect: {
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Hapse atın",
                    effect: {
                        internalSecurity: -20,
                        internationalRelations: -20,
                    },
                },
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
        { //yeni soru
            id: 97,
            question: "Bekçilere üst arama yetkisi verilmesi gündemde.Bunun güvenliği arttıracağını düşünüyorum ancak son söz hakkı sizin...",
            answers: [
                {
                    text: "Yetki verilsin.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Yetki verilmesin.",
                    effect: {
                        publicSupport: +10,
                    },
                },
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
        { //yeni soru
            id: 98,
            question: "Halk sokak köpeklerinden şikayetçi. Saldırgan bazı köpekler vatandaşlarımızın ölümüne sebep oluyor. Bu konuda düşünce ayrılıkları mevcut",
            answers: [
                {
                    text: "Kısırlaştırma ve barınak projeleri başlatın",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Ekiplerce köpekleri toplayın ve uyutun",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 99,
            question: "Katalog suçlar kapsamında sosyal medyadaki muhalif sesleri kısmak istiyoruz. Bu yasanın onaylanma süreci hakkında ne düşünüyorsunuz?",
            answers: [
                {
                    text: "Teklif tasarısını mecliste onaylasınlar",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Veto ediyorum",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 100,
            question: "Batı bölgemizde dün sabah saatlerinde 7.4 şiddetinde deprem meydana geldi. Devlet denetiminin eksik olduğu yerlerdeki binaların çoğu yıkılmış. Sosyal medyada hükümetimiz çok ciddi eleştiri alıyor. İlk aksiyonumuz ne olmalı?",
            answers: [
                {
                    text: "Önce sosyal medyaya erişim engeli getirin",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Önce basın açıklaması yapın",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                    },
                },
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
    ],
    en: [
        {
            id: 90,
            question: "The number of refugees in the country is increasing social tension. The public is complaining about this issue. What should we do?",
            answers: [
                {
                    text: "Start the deportation process",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Begin the integration process",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Our cities face earthquake risks. We can strengthen infrastructure and start urban transformation, but this will strain the budget.",
            answers: [
                {
                    text: "Start the transformation",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Postpone it for now",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Smuggling and human trafficking activities are increasing in our border regions. How can we resolve this issue?",
            answers: [
                {
                    text: "Close all border crossings",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Deport those caught",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "inister of Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Traffic problems are worsening in major cities. The public is very upset about this situation.",
            answers: [
                {
                    text: "Build new roads",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Encourage public transportation",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Mr. President, terrorist organizations are increasing their activities in the country. Major cities are at great risk!",
            answers: [
                {
                    text: "Seek international cooperation",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Launch a military operation",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //new question
            id: 95,
            question: "We have determined that the former Minister of Interior smuggled drugs into the country and engaged in trafficking. Should we issue a warrant for his arrest while he is still in the country?",
            answers: [
                {
                    text: "Don't touch my old friend.",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Arrest him immediately.",
                    effect: {
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                },
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //new question
            id: 96,
            question: "The founder of the National Search and Rescue Team claimed on a television program that our election body, YTR, rigged the elections.",
            answers: [
                {
                    text: "Initiate legal action against him.",
                    effect: {
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Imprison him.",
                    effect: {
                        internalSecurity: -20,
                        internationalRelations: -20,
                    },
                },
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //new question
            id: 97,
            question: "Granting security guards the authority to conduct searches is on the agenda. I believe this would improve security, but the final decision is yours...",
            answers: [
                {
                    text: "Grant the authority.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Do not grant the authority.",
                    effect: {
                        publicSupport: +10,
                    },
                },
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //new question
            id: 98,
            question: "The public is complaining about stray dogs. Aggressive dogs are causing the deaths of some citizens. There is a divide in opinions on this matter.",
            answers: [
                {
                    text: "Initiate sterilization and shelter projects.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Deploy teams to collect and euthanize the dogs.",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 99,
            question: "We want to suppress dissenting voices on social media under catalog crimes. What do you think about the approval process for this law?",
            answers: [
                {
                    text: "Let the parliament approve the draft bill",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "I veto it",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Minister of Interior",
            photo: interiorMinister,
            level: 1,
        },
        {
            id: 100,
            question: "A 7.4 magnitude earthquake occurred yesterday morning in our western region. Most of the buildings in areas lacking state supervision have collapsed. Our government is receiving serious criticism on social media. What should our first action be?",
            answers: [
                {
                    text: "First, block access to social media",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -10,
                    }
                },
                {
                    text: "First, issue a press statement",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                    },
                },
            ],
            title: "Minister of Interior",
            photo: interiorMinister,
            level: 1,
        },
    ],
    de: [
        {
            id: 90,
            question: "Die Anzahl der Flüchtlinge im Land erhöht die soziale Spannung. Die Öffentlichkeit beschwert sich über dieses Problem. Was sollen wir tun?",
            answers: [
                {
                    text: "Abschiebungsprozess einleiten",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Integrationsprozess starten",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Unsere Städte sind durch Erdbeben gefährdet. Wir können die Infrastruktur verstärken und eine städtische Transformation einleiten, aber das wird das Budget belasten.",
            answers: [
                {
                    text: "Die Transformation einleiten",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Es vorerst verschieben",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Schmuggel- und Menschenhandelsaktivitäten nehmen in unseren Grenzregionen zu. Wie können wir dieses Problem lösen?",
            answers: [
                {
                    text: "Alle Grenzübergänge schließen",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Die Festgenommenen abschieben",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "icisleri3",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Die Verkehrsprobleme in den großen Städten verschlechtern sich immer mehr. Die Öffentlichkeit ist sehr verärgert über diese Situation.",
            answers: [
                {
                    text: "Neue Straßen bauen",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Den öffentlichen Nahverkehr fördern",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Herr Präsident, terroristische Organisationen erhöhen ihre Aktivitäten im Land. Die größten Städte sind in großer Gefahr!",
            answers: [
                {
                    text: "Internationale Kooperation suchen",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Eine Militäroperation starten",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 1,
        },
        { //neue Frage
            id: 95,
            question: "Wir haben festgestellt, dass der ehemalige Innenminister Drogen ins Land geschmuggelt und mit ihnen gehandelt hat. Sollen wir einen Haftbefehl gegen ihn erlassen, solange er noch im Land ist?",
            answers: [
                {
                    text: "Fasst meinen alten Freund nicht an.",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Verhaftet ihn sofort.",
                    effect: {
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                },
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 1,
        },
        { //neue Frage
            id: 96,
            question: "Der Gründer des Nationalen Such- und Rettungsteams behauptete in einer Fernsehsendung, dass unsere Wahlbehörde YTR die Wahlen manipuliert habe.",
            answers: [
                {
                    text: "Leitet rechtliche Schritte gegen ihn ein.",
                    effect: {
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Werft ihn ins Gefängnis.",
                    effect: {
                        internalSecurity: -20,
                        internationalRelations: -20,
                    },
                },
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 1,
        },
        { //neue Frage
            id: 97,
            question: "Die Erteilung von Befugnissen für Sicherheitskräfte, Durchsuchungen durchzuführen, steht auf der Tagesordnung. Ich denke, dies würde die Sicherheit verbessern, aber die endgültige Entscheidung liegt bei Ihnen...",
            answers: [
                {
                    text: "Befugnisse erteilen.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Keine Befugnisse erteilen.",
                    effect: {
                        publicSupport: +10,
                    },
                },
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 1,
        },
        { //neue Frage
            id: 98,
            question: "Die Öffentlichkeit beschwert sich über streunende Hunde. Aggressive Hunde verursachen den Tod einiger Bürger. Zu diesem Thema gibt es unterschiedliche Meinungen.",
            answers: [
                {
                    text: "Startet Sterilisierungs- und Tierheimprojekte.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Lässt die Hunde von Teams einfangen und einschläfern.",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 99,
            question: "Wir möchten abweichende Stimmen in sozialen Medien im Rahmen von Katalogstraftaten unterdrücken. Was halten Sie vom Genehmigungsprozess für dieses Gesetz?",
            answers: [
                {
                    text: "Lassen Sie das Parlament den Gesetzentwurf genehmigen",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Ich lege ein Veto ein",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Innenminister",
            photo: interiorMinister,
            level: 1,
        },
        {
            id: 100,
            question: "Gestern Morgen ereignete sich ein Erdbeben der Stärke 7,4 in unserer westlichen Region. Die meisten Gebäude in Bereichen ohne staatliche Aufsicht sind eingestürzt. Unsere Regierung erhält ernsthafte Kritik in den sozialen Medien. Was sollte unsere erste Maßnahme sein?",
            answers: [
                {
                    text: "Zuerst den Zugang zu sozialen Medien blockieren",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Zuerst eine Presseerklärung abgeben",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                    },
                },
            ],
            title: "Innenminister",
            photo: interiorMinister,
            level: 1,
        },
    ],
    fr: [
        {
            id: 90,
            question: "Le nombre de réfugiés dans le pays augmente les tensions sociales. Le public se plaint de ce problème. Que devrions-nous faire ?",
            answers: [
                {
                    text: "Lancer le processus de déportation",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Lancer le processus d'intégration",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "Innenminister",
                }
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Nos villes font face à des risques de tremblements de terre. Nous pouvons renforcer les infrastructures et lancer une transformation urbaine, mais cela mettra le budget sous pression.",
            answers: [
                {
                    text: "Lancer la transformation",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Reporter pour l'instant",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Les activités de contrebande et de trafic de personnes augmentent dans nos régions frontalières. Comment pouvons-nous résoudre ce problème ?",
            answers: [
                {
                    text: "Fermer tous les passages frontaliers",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Expulser les personnes arrêtées",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Les problèmes de trafic s'aggravent dans les principales villes. Le public est très mécontent de cette situation.",
            answers: [
                {
                    text: "Construire de nouvelles routes",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Encourager les transports publics",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Monsieur le Président, les organisations terroristes augmentent leurs activités dans le pays. Les principales villes sont en grand danger!",
            answers: [
                {
                    text: "Chercher une coopération internationale",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Lancer une opération militaire",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 1,
        },
        { //nouvelle question
            id: 95,
            question: "Nous avons découvert que l'ancien ministre de l'Intérieur introduisait des drogues dans le pays et les trafiquait. Devons-nous émettre un mandat d'arrêt pendant qu'il est encore dans le pays ?",
            answers: [
                {
                    text: "Ne touchez pas à mon vieil ami.",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Arrêtez-le immédiatement.",
                    effect: {
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                },
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 1,
        },
        { //nouvelle question
            id: 96,
            question: "Le fondateur de l'Équipe nationale de recherche et de sauvetage a affirmé lors d'une émission télévisée que notre organisme électoral, le YTR, avait truqué les élections.",
            answers: [
                {
                    text: "Engagez des poursuites judiciaires contre lui.",
                    effect: {
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Envoyez-le en prison.",
                    effect: {
                        internalSecurity: -20,
                        internationalRelations: -20,
                    },
                },
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 1,
        },
        { //nouvelle question
            id: 97,
            question: "L'attribution aux gardiens de la capacité d'effectuer des fouilles est à l'ordre du jour. Je pense que cela améliorerait la sécurité, mais la décision finale vous revient...",
            answers: [
                {
                    text: "Attribuez cette capacité.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Ne donnez pas cette capacité.",
                    effect: {
                        publicSupport: +10,
                    },
                },
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 1,
        },
        { //nouvelle question
            id: 98,
            question: "Le public se plaint des chiens errants. Certains chiens agressifs causent la mort de citoyens. Les opinions sur cette question sont divisées.",
            answers: [
                {
                    text: "Lancez des projets de stérilisation et de refuges.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Faites capturer les chiens par des équipes et euthanasiez-les.",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 99,
            question: "Nous souhaitons réprimer les voix dissidentes sur les réseaux sociaux dans le cadre des crimes catalogués. Que pensez-vous du processus d'approbation de cette loi ?",
            answers: [
                {
                    text: "Laissez le parlement approuver le projet de loi",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Je mets mon veto",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Ministre de l'Intérieur",
            photo: interiorMinister,
            level: 1,
        },
        {
            id: 100,
            question: "Un tremblement de terre de magnitude 7,4 s'est produit hier matin dans notre région occidentale. La plupart des bâtiments situés dans des zones sans supervision de l'État se sont effondrés. Notre gouvernement reçoit de graves critiques sur les réseaux sociaux. Quelle devrait être notre première action ?",
            answers: [
                {
                    text: "Bloquez d'abord l'accès aux réseaux sociaux",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Publiez d'abord un communiqué de presse",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                    },
                },
            ],
            title: "Ministre de l'Intérieur",
            photo: interiorMinister,
            level: 1,
        },
    ],
    pt: [
        {
            id: 90,
            question: "O número de refugiados no país está aumentando a tensão social. O público está se queixando desse problema. O que devemos fazer?",
            answers: [
                {
                    text: "Iniciar o processo de deportação",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Iniciar o processo de integração",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Nossas cidades enfrentam riscos de terremotos. Podemos reforçar a infraestrutura e iniciar uma transformação urbana, mas isso pressionará o orçamento.",
            answers: [
                {
                    text: "Iniciar a transformação",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Adiar por enquanto",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "inistro do Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "As atividades de contrabando e tráfico de pessoas estão aumentando em nossas regiões fronteiriças. Como podemos resolver esse problema?",
            answers: [
                {
                    text: "Fechar todas as passagens fronteiriças",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Deportar os capturados",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Os problemas de tráfego estão piorando cada vez mais nas principais cidades. O público está muito insatisfeito com essa situação.",
            answers: [
                {
                    text: "Construir novas estradas",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Incentivar o transporte público",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Senhor Presidente, as organizações terroristas estão aumentando suas atividades no país. As principais cidades estão em grande risco!",
            answers: [
                {
                    text: "Buscar cooperação internacional",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Lançar uma operação militar",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //nova pergunta
            id: 95,
            question: "Descobrimos que o ex-ministro do Interior contrabandeava drogas para o país e as comercializava. Devemos emitir um mandado de prisão enquanto ele ainda está no país?",
            answers: [
                {
                    text: "Não mexam com meu velho amigo.",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Prendam-no imediatamente.",
                    effect: {
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                },
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //nova pergunta
            id: 96,
            question: "O fundador da Equipe Nacional de Busca e Resgate afirmou em um programa de televisão que nosso órgão eleitoral, YTR, fraudou as eleições.",
            answers: [
                {
                    text: "Inicie um processo legal contra ele.",
                    effect: {
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Prendam-no.",
                    effect: {
                        internalSecurity: -20,
                        internationalRelations: -20,
                    },
                },
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //nova pergunta
            id: 97,
            question: "Está em pauta conceder aos guardas o poder de realizar revistas. Acredito que isso aumentaria a segurança, mas a decisão final é sua...",
            answers: [
                {
                    text: "Conceda o poder.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Não conceda o poder.",
                    effect: {
                        publicSupport: +10,
                    },
                },
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //nova pergunta
            id: 98,
            question: "O público está reclamando de cães de rua. Alguns cães agressivos estão causando a morte de cidadãos. Há divergências de opinião sobre este assunto.",
            answers: [
                {
                    text: "Inicie projetos de esterilização e construção de abrigos.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Organize equipes para capturar e sacrificar os cães.",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 99,
            question: "Queremos reprimir as vozes dissidentes nas redes sociais sob o pretexto de crimes catalogados. O que você acha do processo de aprovação desta lei?",
            answers: [
                {
                    text: "Deixe o parlamento aprovar o projeto de lei",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Eu veto",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Ministro do Interior",
            photo: interiorMinister,
            level: 1,
        },
        {
            id: 100,
            question: "Um terremoto de magnitude 7,4 ocorreu ontem de manhã na nossa região oeste. A maioria dos prédios em áreas sem supervisão estatal desabou. Nosso governo está recebendo críticas sérias nas redes sociais. Qual deve ser nossa primeira ação?",
            answers: [
                {
                    text: "Primeiro, bloqueie o acesso às redes sociais",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Primeiro, faça um comunicado à imprensa",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                    },
                },
            ],
            title: "Ministro do Interior",
            photo: interiorMinister,
            level: 1,
        }
    ],
    zh: [
        {
            id: 90,
            question: "难民数量的增加正在加剧社会紧张局势。公众对此问题提出了许多抱怨。我们该怎么办？",
            answers: [
                {
                    text: "启动遣返程序",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "启动融合程序",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "我们的城市面临地震风险。我们可以加强基础设施并启动城市改造，但这会对预算造成压力。",
            answers: [
                {
                    text: "开始城市改造",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "暂时搁置",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "我们的边境地区走私和人口贩运活动正在增加。我们该如何解决这个问题？",
            answers: [
                {
                    text: "关闭所有边境通道",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "驱逐被捕者",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "主要城市的交通问题日益严重。公众对此情况非常不满。",
            answers: [
                {
                    text: "修建新道路",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "鼓励公共交通",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "总统先生，恐怖组织在我国的活动正在增加！主要城市面临重大风险！",
            answers: [
                {
                    text: "寻求国际合作",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "发起军事行动",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 1,
        },
        { //新问题
            id: 95,
            question: "我们发现前内政部长将毒品走私到国内并进行贩卖。在他还在国内的时候，我们是否应该发布逮捕令？",
            answers: [
                {
                    text: "不要动我的老朋友。",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "立即逮捕他。",
                    effect: {
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                },
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 1,
        },
        { //新问题
            id: 96,
            question: "国家救援队的创始人在一档电视节目中声称我们的选举机构 YTR 操纵了选举。",
            answers: [
                {
                    text: "对他提起法律诉讼。",
                    effect: {
                        internalSecurity: -10,
                    }
                },
                {
                    text: "将他关进监狱。",
                    effect: {
                        internalSecurity: -20,
                        internationalRelations: -20,
                    },
                },
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 1,
        },
        { //新问题
            id: 97,
            question: "正在讨论授予保安进行搜身的权力。我认为这将提高安全性，但最终决定权在您手中...",
            answers: [
                {
                    text: "授予权力。",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "不要授予权力。",
                    effect: {
                        publicSupport: +10,
                    },
                },
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 1,
        },
        { //新问题
            id: 98,
            question: "公众对流浪狗提出投诉。一些攻击性的狗导致了公民的死亡。在这个问题上存在分歧。",
            answers: [
                {
                    text: "启动绝育和收容所项目。",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: +10,
                    }
                },
                {
                    text: "派遣团队捕捉并安乐死这些狗。",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 99,
            question: "我们希望在目录罪行范围内压制社交媒体上的反对声音。您如何看待该法案的批准过程？",
            answers: [
                {
                    text: "让议会批准该法案",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "我否决",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "内政部长",
            photo: interiorMinister,
            level: 1,
        },
        {
            id: 100,
            question: "昨天早晨，我国西部地区发生了7.4级地震。在缺乏国家监管的地区，大多数建筑物倒塌。我们的政府在社交媒体上受到了严重批评。我们的第一步行动应该是什么？",
            answers: [
                {
                    text: "首先，限制访问社交媒体",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -10,
                    }
                },
                {
                    text: "首先，发布新闻声明",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                    },
                },
            ],
            title: "内政部长",
            photo: interiorMinister,
            level: 1,
        }
    ],
    es: [
        {
            id: 90,
            question: "El número de refugiados en el país está aumentando la tensión social. El público se está quejando de este problema. ¿Qué debemos hacer?",
            answers: [
                {
                    text: "Iniciar el proceso de deportación",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Iniciar el proceso de integración",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Nuestras ciudades enfrentan riesgos sísmicos. Podemos fortalecer la infraestructura y comenzar la transformación urbana, pero esto tensará el presupuesto.",
            answers: [
                {
                    text: "Iniciar la transformación",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Posponerlo por ahora",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Las actividades de contrabando y tráfico de personas están aumentando en nuestras regiones fronterizas. ¿Cómo podemos resolver este problema?",
            answers: [
                {
                    text: "Cerrar todos los cruces fronterizos",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Deportar a los que sean atrapados",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Los problemas de tráfico están empeorando en las principales ciudades. El público está muy molesto por esta situación.",
            answers: [
                {
                    text: "Construir nuevas carreteras",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Fomentar el transporte público",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Señor Presidente, las organizaciones terroristas están aumentando sus actividades en el país. ¡Las principales ciudades están en gran peligro!",
            answers: [
                {
                    text: "Buscar cooperación internacional",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Iniciar una operación militar",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //nueva pregunta
            id: 95,
            question: "Hemos descubierto que el exministro del Interior introdujo drogas en el país y las traficó. ¿Deberíamos emitir una orden de arresto mientras aún está en el país?",
            answers: [
                {
                    text: "No toquen a mi viejo amigo.",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Arréstenlo de inmediato.",
                    effect: {
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                },
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //nueva pregunta
            id: 96,
            question: "El fundador del Equipo Nacional de Búsqueda y Rescate afirmó en un programa de televisión que nuestro organismo electoral, YTR, manipuló las elecciones.",
            answers: [
                {
                    text: "Inicien acciones legales contra él.",
                    effect: {
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Envíenlo a prisión.",
                    effect: {
                        internalSecurity: -20,
                        internationalRelations: -20,
                    },
                },
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //nueva pregunta
            id: 97,
            question: "Está en la agenda otorgar a los guardias el poder de realizar registros. Creo que esto mejoraría la seguridad, pero la decisión final es suya...",
            answers: [
                {
                    text: "Otorgue el poder.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "No otorgue el poder.",
                    effect: {
                        publicSupport: +10,
                    },
                },
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 1,
        },
        { //nueva pregunta
            id: 98,
            question: "El público se queja de los perros callejeros. Algunos perros agresivos están causando la muerte de ciudadanos. Hay divisiones de opinión sobre este tema.",
            answers: [
                {
                    text: "Inicien proyectos de esterilización y refugios.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Envíen equipos para capturar y sacrificar a los perros.",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 99,
            question: "Queremos suprimir las voces disidentes en las redes sociales bajo el marco de crímenes catalogados. ¿Qué opina del proceso de aprobación de esta ley?",
            answers: [
                {
                    text: "Dejen que el parlamento apruebe el proyecto de ley",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Yo veto",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Ministro del Interior",
            photo: interiorMinister,
            level: 1,
        },
        {
            id: 100,
            question: "Un terremoto de magnitud 7,4 ocurrió ayer por la mañana en nuestra región occidental. La mayoría de los edificios en áreas sin supervisión estatal se han derrumbado. Nuestro gobierno está recibiendo serias críticas en las redes sociales. ¿Cuál debería ser nuestra primera acción?",
            answers: [
                {
                    text: "Primero, bloqueen el acceso a las redes sociales",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Primero, hagan un comunicado de prensa",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                    },
                },
            ],
            title: "Ministro del Interior",
            photo: interiorMinister,
            level: 1,
        }
    ],
    ru: [
        {
            id: 90,
            question: "Количество беженцев в стране увеличивает социальную напряженность. Общественность жалуется на эту проблему. Что нам следует делать?",
            answers: [
                {
                    text: "Начать процесс депортации",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Начать процесс интеграции",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Наши города подвержены рискам землетрясений. Мы можем укрепить инфраструктуру и начать городскую трансформацию, но это окажет давление на бюджет.",
            answers: [
                {
                    text: "Начать трансформацию",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Отложить на данный момент",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Контрабанда и торговля людьми увеличиваются в наших приграничных регионах. Как мы можем решить эту проблему?",
            answers: [
                {
                    text: "Закрыть все пограничные переходы",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Депортировать тех, кто будет пойман",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Проблемы с трафиком все больше ухудшаются в крупных городах. Общественность крайне недовольна этой ситуацией.",
            answers: [
                {
                    text: "Построить новые дороги",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Стимулировать общественный транспорт",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Господин Президент, террористические организации увеличивают свою активность в стране. Крупные города находятся под большим риском!",
            answers: [
                {
                    text: "Искать международное сотрудничество",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Начать военную операцию",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 1,
        },
        { //новый вопрос
            id: 95,
            question: "Мы выяснили, что бывший министр внутренних дел ввез наркотики в страну и занимался их торговлей. Должны ли мы выдать ордер на его арест, пока он ещё находится в стране?",
            answers: [
                {
                    text: "Не трогайте моего старого друга.",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Арестуйте его немедленно.",
                    effect: {
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                },
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 1,
        },
        { //новый вопрос
            id: 96,
            question: "Основатель Национальной поисково-спасательной команды заявил в телепрограмме, что наша избирательная комиссия YTR сфальсифицировала выборы.",
            answers: [
                {
                    text: "Возбудите против него судебное дело.",
                    effect: {
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Посадите его в тюрьму.",
                    effect: {
                        internalSecurity: -20,
                        internationalRelations: -20,
                    },
                },
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 1,
        },
        { //новый вопрос
            id: 97,
            question: "На повестке дня стоит вопрос о предоставлении охранникам полномочий на проведение обысков. Я считаю, что это повысит уровень безопасности, но окончательное решение за вами...",
            answers: [
                {
                    text: "Предоставить полномочия.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Не предоставлять полномочия.",
                    effect: {
                        publicSupport: +10,
                    },
                },
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 1,
        },
        { //новый вопрос
            id: 98,
            question: "Граждане жалуются на бродячих собак. Агрессивные собаки становятся причиной гибели некоторых граждан. По этому вопросу существуют разногласия.",
            answers: [
                {
                    text: "Начните проекты по стерилизации и созданию приютов.",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Организуйте команды для отлова и усыпления собак.",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 99,
            question: "Мы хотим подавить несогласные голоса в социальных сетях в рамках каталогизированных преступлений. Что вы думаете о процессе одобрения этого закона?",
            answers: [
                {
                    text: "Пусть парламент одобрит законопроект",
                    effect: {
                        internalSecurity: -10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Я накладываю вето",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                    },
                },
            ],
            title: "Министр внутренних дел",
            photo: interiorMinister,
            level: 1,
        },
        {
            id: 100,
            question: "Вчера утром в нашем западном регионе произошло землетрясение магнитудой 7,4. Большинство зданий в районах без государственного надзора обрушились. Наше правительство получает серьезную критику в социальных сетях. Какое действие нам следует предпринять в первую очередь?",
            answers: [
                {
                    text: "Сначала заблокируйте доступ к социальным сетям",
                    effect: {
                        internalSecurity: -20,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Сначала выпустите заявление для прессы",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                    },
                },
            ],
            title: "Министр внутренних дел",
            photo: interiorMinister,
            level: 1,
        }
    ],
};
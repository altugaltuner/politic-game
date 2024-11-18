import icisleriBakani from "../../public/ministers/icisleri-bakani.webp";
// 5 soru var
export const icisleriQuestions = [
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
    },
];
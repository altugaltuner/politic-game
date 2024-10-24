import sanayiBakani from "../../public/ministers/sanayi.png";

export const sanayiQuestions = [
    {
        id: 150,
        question: "Sayın Cumhurbaşkanım, sanayimizin teknoloji altyapısı zayıf. Teknoloji yatırımlarını artırarak sanayimizi modernize edelim mi, yoksa geleneksel üretim yöntemlerine mi odaklanalım?",
        answers: [
            {
                text: "Teknoloji yatırımlarını artırın, sanayimizi modernize edelim.",
                effect: {
                    publicSupport: +15,  // Halk teknolojiye yapılan yatırımları olumlu karşılar
                    budget: -25,  // Teknolojik altyapı yatırımları maliyetlidir
                    industrialProduction: +20,  // Sanayinin verimliliği ve üretim kapasitesi artar
                    internationalRelations: +10,  // Teknolojik gelişmeler uluslararası arenada olumlu karşılanır
                }
            },
            {
                text: "Geleneksel üretim yöntemlerine odaklanın, daha düşük maliyetli çözümler bulun.",
                effect: {
                    publicSupport: +5,  // Halkın bir kısmı düşük maliyetli çözümleri olumlu karşılar
                    budget: -10,  // Geleneksel yöntemlerin maliyeti daha düşüktür
                    industrialProduction: +5,  // Sanayi büyümesi devam eder ancak daha yavaş olur
                    internationalRelations: 0  // Uluslararası ilişkilerde doğrudan etkisi olmaz
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },
    {
        id: 151,
        question: "Sayın Cumhurbaşkanım, yerli otomobil üretimi projesi büyük ilgi görüyor. Projeyi hızlandıralım mı, yoksa başka sanayi alanlarına mı öncelik verelim?",
        answers: [
            {
                text: "Yerli otomobil projesini hızlandırın, teknolojik gelişimimizi destekleyelim.",
                effect: {
                    publicSupport: +20,  // Halk yerli üretim projelerine büyük destek verir
                    budget: -30,  // Yerli otomobil projesi maliyetlidir
                    industrialProduction: +25,  // Yerli otomobil sanayi ve teknoloji alanında gelişim sağlar
                    internationalRelations: +10,  // Uluslararası arenada yerli teknolojiler olumlu karşılanır
                }
            },
            {
                text: "Başka sanayi alanlarına öncelik verin, kaynakları çeşitlendirin.",
                effect: {
                    publicSupport: +5,  // Halkın bir kısmı diğer sanayi alanlarının geliştirilmesini destekler
                    budget: -15,  // Daha düşük maliyetli projelere yatırım yapılır
                    industrialProduction: +10,  // Diğer sanayi projeleri ile büyüme sağlanır
                    internationalRelations: +5,  // Çeşitli projeler uluslararası alanda olumlu etki yaratır
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },
    {
        id: 152,
        question: "Sayın Cumhurbaşkanım, Türkiye'nin dijital dönüşüm süreci hızlanıyor. Teknoloji startup'larına devlet desteği sağlayalım mı, yoksa bu kaynakları büyük sanayi şirketlerine mi ayıralım?",
        answers: [
            {
                text: "Teknoloji startup'larına destek sağlayın, yenilikçi girişimleri teşvik edelim.",
                effect: {
                    publicSupport: +15,  // Halk yenilikçi teknolojilere yapılan yatırımları olumlu karşılar
                    budget: -20,  // Startup'lara destek bütçeyi zorlayabilir
                    industrialProduction: +15,  // Yeni teknolojiler sanayi verimliliğini artırır
                    internationalRelations: +10,  // Yenilikçi girişimler uluslararası arenada dikkat çeker
                }
            },
            {
                text: "Kaynakları büyük sanayi şirketlerine ayırın, mevcut sanayi güçlerini destekleyelim.",
                effect: {
                    publicSupport: +5,  // Büyük sanayi şirketlerine destek verilmesi bazı kesimler tarafından olumlu karşılanır
                    budget: -10,  // Büyük şirketlere destek daha az maliyetlidir
                    industrialProduction: +20,  // Mevcut sanayi güçleri daha fazla üretim sağlar
                    internationalRelations: +5,  // Büyük sanayi şirketlerinin gücü uluslararası alanda olumlu etki yaratır
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },
    {
        id: 153,
        question: "Sayın Cumhurbaşkanım, çevre dostu sanayi projelerine geçiş yapmayı öneriyorum. Ancak bu projeler maliyetli olabilir ve sanayi üretimini yavaşlatabilir. Ne yapalım?",
        answers: [
            {
                text: "Çevre dostu sanayi projelerine geçiş yapın, uzun vadede sürdürülebilirliği sağlayalım.",
                effect: {
                    publicSupport: +20,  // Çevreci politikalar halk tarafından büyük destek alır
                    budget: -25,  // Çevre dostu projeler maliyetlidir
                    industrialProduction: +10,  // Sanayi üretimi sürdürülebilir hale gelir
                    infrastructureAndEnvironment: +20,  // Çevresel sürdürülebilirlik artar
                }
            },
            {
                text: "Mevcut sanayi projelerine devam edin, üretimi kısa vadede koruyalım.",
                effect: {
                    publicSupport: +5,  // Halkın bir kısmı bu kararı olumlu karşılar
                    budget: -10,  // Mevcut projelere devam edilmesi daha düşük maliyetlidir
                    industrialProduction: +15,  // Sanayi üretimi hızlanmaya devam eder
                    infrastructureAndEnvironment: -10,  // Çevreye zarar devam eder
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },
    {
        id: 154,
        question: "Sayın Cumhurbaşkanım, sanayide enerji verimliliği düşüyor. Yenilenebilir enerji kaynaklarına mı yatırım yapalım, yoksa mevcut enerji altyapısını mı güçlendirelim?",
        answers: [
            {
                text: "Yenilenebilir enerji kaynaklarına yatırım yapın, sanayinin enerji verimliliğini artırın.",
                effect: {
                    publicSupport: +20,  // Halk yenilenebilir enerji projelerini destekler
                    budget: -25,  // Yenilenebilir enerji projeleri maliyetlidir
                    industrialProduction: +15,  // Enerji verimliliği artar, sanayi üretimi gelişir
                    infrastructureAndEnvironment: +25,  // Çevresel sürdürülebilirlik ve altyapı gelişir
                }
            },
            {
                text: "Mevcut enerji altyapısını güçlendirin, kısa vadede enerji sorununu çözün.",
                effect: {
                    publicSupport: +5,  // Halk kısa vadede enerji sorunlarının çözümünü destekler
                    budget: -15,  // Mevcut altyapının güçlendirilmesi daha az maliyetlidir
                    industrialProduction: +10,  // Sanayi üretimi mevcut altyapıyla devam eder
                    infrastructureAndEnvironment: -5,  // Çevresel sürdürülebilirlikte gerileme olabilir
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    }
];
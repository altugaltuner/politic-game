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
        title: "Hapishanelerde Yer Yok",
        photo: prisonFull,
        description: "Hapishanelerde yer kalmadığı için bazı hafif suçlardan yargılananların serbest bırakılması konuşuluyor. Yetkililerden açıklama bekleniyor.",
        listID: "adalet2",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 602,
        title: "Kaçak işçiler Türk halkını işinden ediyor",
        photo: illegalWorkers,
        description: "Kaçakların ucuza ve sigortasız çalışması, işverenleri mutlu ederken iş arayan Türk halkının hakettiğinden daha azına çalışmasına sebep oluyor. Halk yetkililerden çözüm bekliyor.",
        listID: "aile1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "publicSupport"
        }
    },
    {
        id: 603,
        title: "Çiftçi Rahat Bir Nefes Aldı",
        photo: happFarmer,
        description: "Tarımın desteklenmesi köylünün yüzünü güldürdü. Verilen teşvikler ve vergi indirimleri sayesinde gıda krizinin önüne kısa vadede geçilebilir.",
        listID: "calisma1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "agriculturalProduction"
        }
    },
    {
        id: 604,
        title: "Şehirler Doğayla Buluşuyor",
        photo: greeningWorks,
        description: "Büyük şehirlerde parklar ve yeşil alanlar artıyor. Yapılan çalışmalar halk tarafından takdirle karşılanıyor.",
        listID: "cevre1",
        lastingEffect: {
            type: "increase",
            value: +5,
            stat: "agriculturalProduction"
        }
    },
    {
        id: 605,
        title: "Solar Panel Atılımları",
        photo: renewableEnergy,
        description: "Akdeniz ve Ege gibi bol güneş alan bölgelerde solar panel yatırımları artıyor. Bu yatırımların enerji maliyetlerine olumlu etkisi olacağı düşünülüyor.",
        listID: "cevre2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 606,
        title: "Ülkeye Turist Akını",
        photo: tourismAttack,
        description: "Yaz sezonuyla birlikte ülkeye turist akını başladı. Turizm sektörü bu yıl rekor kırmayı hedefliyor.",
        listID: "cevre3",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "budget"
        }
    },
    {
        id: 607,
        title: "Dev Ticaret Anlaşması",
        photo: tradeAgreement,
        description: "Komşu ülkeyle ticaret anlaşması imzalandı. Bu anlaşmanın ülke ekonomisine etkisi olumlu olacak.",
        listID: "disisleri1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internationalRelations"
        }
    },
    {
        id: 608,
        title: "Savunma Sektörü Yükselişte",
        photo: defenceTech,
        description: "İHA ve SİHA'larla askeri savunmasını güçlendirerek dünya pazarında daha çok söz sahibi olmak isteyen Türkiye, bu uğurda büyük yatırımlar yapıyor.",
        listID: "disisleri2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 609,
        title: "Mülteci Akını Sürüyor",
        photo: refugeePass,
        description: "İç savaştan kaçan mülteciler Türkiye'ye akın ediyor. Bu durum halk arasında rahatsızlık yaratıyor. Kontrolsüzce alınan mülteciler ülkenin iç dinamiklerini nasıl etkileyecek?",
        listID: "disisleri3",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 610,
        title: "Kaçak Göçmene Geçiş Yok",
        photo: protectBorder,
        description: "Türk askeri sınırını kaçaklara karşı koruyor. Halkın çoğu kesimi bu karardan memnun, ancak bazı insan hakları örgütleri bu durumu eleştiriyor.",
        listID: "disisleri4",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 611,
        title: "Mesleki Eğitim Rüzgarı",
        photo: woodenJob,
        description: "Mesleki eğitime ilgi büyük oldu! Gençlerin meslek sahibi olması için yapılan çalışmalar hız kesmeden devam ediyor.",
        listID: "egitim1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "agriculturalProduction"
        }
    },
    {
        id: 612,
        title: "DoğalGaz Arama Faaliyetleri",
        photo: gasExploration,
        description: "Doğal gaz arama faaliyetleri son hızla devam ediyor. Yapılan sondajlar sonucunda önemli rezervlerin bulunduğu açıklandı.",
        listID: "enerji1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 613,
        title: "Yüzyılın Enerji Ortaklığı",
        photo: greatAgreement,
        description: "Yapılan anlaşma ile komşu ülkelerle enerji ortaklığı kuruldu. Bu anlaşma sayesinde önümüzdeki 10 yılın toplam enerji ihtiyacının %27'si karşılanacak.",
        listID: "enerji2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internationalRelations"
        }
    },
    {
        id: 614,
        title: "Nükleer Tesisin Temeli Atıldı",
        photo: nuclearThesis,
        description: "Ülkenin nükleer enerji ihtiyacını karşılamak için inşa edilen dev tesisin temeli atıldı. Bu tesisin önümüzdeki 25 yılın enerji ihtiyacını büyük oranda karşılaması bekleniyor.",
        listID: "enerji3",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 615,
        title: "Yeni Spor Sahaları",
        photo: newFootballField,
        description: "Bakanlık, gençlerin daha çok sportif faaliyetlerde bulunabilmesi için yeni sahalar yapılacağını açıkladı. Bu karar spor camiasında memnuniyetle karşılandı.",
        listID: "genclik1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "publicSupport"
        }
    },
    {
        id: 616,
        title: "Yeni Faiz Kararı Şok Etti",
        photo: turkishLiraLose,
        description: "Cumhurbaşkanının son kararından sonra Türk lirası ciddi değer kaybına uğradı. Ekonomistler tarafından yapılan açıklamalara göre bu karar ülke ekonomisine ağır darbe vuracak.",
        listID: "hazine1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "budget"
        }
    },
    {
        id: 617,
        title: "Doğuda Sığınmacı Krizi",
        photo: refugeeCrisis,
        description: "Bugün sabah saatlerinde sığınmacılar ile halk arasında arbede yaşandı. Çok sayıda yaralı var.",
        listID: "icisleri1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 618,
        title: "Büyük İstanbul Depremi!",
        photo: istanbulQuake,
        description: "Beklenen İstanbul Depremi dün sabah saatlerinde 7.4 şiddetinde gerçekleşti. Şehir panik içinde, halk yetkililerden yardım bekliyor.",
        listID: "icisleri2",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 619,
        title: "Teröristler Kıskıvrak Yakalandı",
        photo: polices,
        description: "Bu sabah saatlerinde gerçekleştirilen operasyonda 14 terörist etkisiz hale getirildi. Operasyonun detayları hala gizli tutuluyor.",
        listID: "icisleri3",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 620,
        title: "Çetenin Geçmişi Araştırılacak",
        photo: babiesIncubator,
        description: "Alınan karar doğrultusunda çetenin eski faaliyetleri araştırılacak. Halk bu karardan memnun.",
        listID: "saglik1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 621,
        title: "Togg Tanıtımı",
        photo: toggIntroduced,
        description: "Türkiye'nin yerli otomobili yollara çıktı. Kimi fiyatını çok bulurken kimi şimdiden ön siparişini verdi.",
        listID: "sanayi1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 622,
        title: "Startuplar Büyüme Yolunda",
        photo: techStartup,
        description: "Yerli teknoloji startupları yatırımcıların ilgisini çekmeye devam ediyor. Bu startuplar, ülkenin teknolojik gelişimine katkı sağlayacak.",
        listID: "sanayi2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 623,
        title: "Zincir Marketlere Ağır Cezalar",
        photo: supermarketPenalty,
        description: "Etiket fiyatlarını her gün güncelleyen dev zincir marketlere ağır cezalar yazıldı. Devletin mücadelesi sürüyor. Zincir marketlerin bundan sonraki aksiyonları merakla bekleniyor.",
        listID: "ticaret1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "budget"
        }
    },
    {
        id: 624,
        title: "Hızlı Tren Açıldı",
        photo: fastTrain,
        description: "Ankara-İstanbul hızlı tren hattı açıldı. Bu hattın açılmasıyla birlikte ulaşım süresinin yarı yarıya kısaldığı açıklandı.",
        listID: "ulastirma1",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "infrastructureAndEnvironment"
        }
    },
    {
        id: 625,
        title: "AVM'de Bombalı Saldırı",
        photo: bombMall,
        description: "PlazarInn AVM'de gerçekleşen bombalı saldırıda çok sayıda ölü ve yaralı var. Güvenlik güçleri ve sağlık ekipleri olay yerine intikal etti. Olayda şüpheli iki kişi gözaltına alındı.",
        listID: "savunma1",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "internalSecurity"
        }
    },
    {
        id: 626,
        title: "Bomba Etkisiz Hale Getirildi",
        photo: disabledBomb,
        description: "PlazarInn AVM'de gerçekleşmesi planlanan bombalı terör saldırısı önceden tespit edilerek bomba etkisiz hale getirildi. Güvenlik güçleri olayla ilgili soruşturma başlattı.",
        listID: "savunma2",
        lastingEffect: {
            type: "increase",
            value: +10,
            stat: "internalSecurity"
        }
    },
    {
        id: 627,
        title: "İstanbul mu Tahran mı ?",
        photo: istanbulArab,
        description: "Liam Neeson'ın yeni filmindeki İstanbul sahneleri kanser etti. İstanbulun alenen ortadoğu şehri gibi gösterildiği filme tepkiler büyüyor.",
        listID: "liamNeeson",
        lastingEffect: {
            type: "decrease",
            value: -10,
            stat: "publicSupport"
        }
    },
    {
        id: 628,
        title: "S-400'ler Türkiye'ye Geldi!",
        photo: s400,
        description: "ABD'nin tepkisine rağmen Rusya'dan alınan S-400 hava savunma sistemleri ülkeye geldi. Türkiye dış politikada kararlı duruşunu koruyor!",
        listID: "S400",
        lastingEffect: {
            type: "increase",
            value: -10,
            stat: "internalSecurity"
        }
    },
];
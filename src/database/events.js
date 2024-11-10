import arabMoney from "../../public/events/arab-money.png";
import dataHack from "../../public/events/data-hack.png";
import electricalShortcut from "../../public/events/electrical-shortcut.png";
import foodCrisis from "../../public/events/food-crisis.png";
import gangActivities from "../../public/events/gang-activities.png";
import InterventionAbroad from "../../public/events/intervention-abroad.png";
import IsraelPalestine from "../../public/events/israel-palestine.png";
import nuclearThesisExplosion from "../../public/events/nuclear-thesis-explosion.png";
import oilSpill from "../../public/events/oil-spill.png";
import peopleOverjoyed from "../../public/events/people-overjoyed.png";
import politicianMercedes from "../../public/events/politicians-mercedes.png";
import politiciansEating from "../../public/events/politicians-eating.png";
import peopleProtesting from "../../public/events/people-protesting.png";
import shakiraConcert from "../../public/events/shakira-concert.png";
import streetElectricalDeath from "../../public/events/street-electrical-death.png";
import terroristBusted from "../../public/events/terrorists-busted.png";
import tosuncuk from "../../public/events/tosuncuk.png";
import waterPipesExploded from "../../public/events/water-pipes-exploded.png";
import womenAbuseOnstreet from "../../public/events/women-abuse-onstreet.png";
import syriaIntervene from "../../public/events/syria-intervention.png";
import tbmmVote from "../../public/events/tbmm-vote.png";
import tbmmFight from "../../public/events/tbmm-fight.png";
import angryPolitician from "../../public/events/angry-politician-3.png";
import peopleLeavingCountry from "../../public/events/people-leaving-country.png";
import droughtLake from "../../public/events/drought-lake.png";
import anitkabir from "../../public/events/anitkabir.png";
import forestFire from "../../public/events/forest-fire-disaster.png";
import gasDiscovery from "../../public/events/gas-discovery.png";
import kanalIstanbul from "../../public/events/kanal-istanbul.png";
import alperGezeravcı from "../../public/events/alper-gezeravci.png";
import tourismSeason from "../../public/events/tourism-season.png";
import civilSubordinate from "../../public/events/civil-subordinate.png";
import mineCollapsed from "../../public/events/mine-collapsed.png";
import damWaterShortage from "../../public/events/dam-water-shortage.png";

export const events = [
    {
        id: 501,
        photo: arabMoney,
        title: "Arap Ülkelerinden Beklenmedik Servet!",
        description: "Arap ülkelerinden gelen ani para akışı ekonomik toparlanma umutlarını yeşertti. Bu zenginlik nasıl kullanılacak, kimler en çok fayda sağlayacak?",
        effects: {
            budget: +15,
        },
    },
    {
        id: 502,
        photo: dataHack,
        title: "Ulusal Veri Sızıntısı!",
        description: "Ülkenin kimlik sistemi hacklendi! Milyonlarca kişinin hassas verileri siber suçluların elinde. Güvenlik uzmanları hasarı önlemek için seferber halinde.",
        effects: {
            internalSecurity: -15,
            publicSupport: -10,
        },
    },
    {
        id: 503,
        photo: electricalShortcut,
        title: "Elektrik Kesintisi Kaosu!",
        description: "Ani bir elektrik kesintisi şehirde hayatı durma noktasına getirdi. Sokaklarda kaos hakim, insanlar temel ihtiyaçlarına ulaşmakta zorlanıyor!",
        effects: {
            infrastructureAndEnvironment: -10,
            publicSupport: -10,
        },
    },
    {
        id: 504,
        photo: foodCrisis,
        title: "Gıda Krizi Patlak Verdi!",
        description: "Temel gıda kaynakları hızla tükeniyor, market rafları boş! Halk endişe içinde, yetkililer acil çözümler arıyor.",
        effects: {
            agriculturalProduction: -20,
            publicSupport: -10,
        },
    },
    {
        id: 505,
        photo: InterventionAbroad,
        title: "Dış güçler bir şeyler karıştırıyor!",
        description: "Dış ülkeler ülkemizin iç işlerine müdahale etmeye başladı, halk bu duruma tepki gösteriyor. Ülkenin egemenliği tehlikede mi?",
        effects: {
            internationalRelations: -10,
            publicSupport: -10,
        },
    },
    {
        id: 506,
        photo: IsraelPalestine,
        title: "Orta Doğu’da Gerilim Tırmanıyor!",
        description: "İsrail, Filistin’i bombalıyor! Bölgedeki tansiyon hızla yükseliyor, dünya sessiz kalıyor. Türkiyenin pozisyonu ne olacak?",
        effects: {
            internationalRelations: -20,
        },
    },
    {
        id: 507,
        photo: nuclearThesisExplosion,
        title: "Nükleer Tesiste Korkunç Patlama!",
        description: "Nükleer tesiste büyük bir patlama gerçekleşti! Radyoaktif sızıntı endişesi tüm ülkeye yayılıyor, yetkililer krizle başa çıkmaya çalışıyor.",
        effects: {
            infrastructureAndEnvironment: -20,
            publicSupport: -10,
        },
    },
    {
        id: 508,
        photo: oilSpill,
        title: "Denizde Petrol Felaketi!",
        description: "Tonlarca petrol denize döküldü, çevre kirliliği korkunç boyutlara ulaşıyor. Deniz yaşamı büyük tehdit altında!",
        effects: {
            infrastructureAndEnvironment: -10,
            agriculturalProduction: -10,
        },
    },
    {
        id: 509,
        photo: peopleOverjoyed,
        title: "Halk Coşkuyla Sokaklarda!",
        description: "Umut dolu haberler sonrası halk sokaklarda mutluluğunu kutluyor. Bu coşku ülkeye yayılırken, herkesin yüzü gülüyor.",
        effects: {
            publicSupport: +20,
        },
    },
    {
        id: 510,
        photo: peopleProtesting,
        title: "Hükümete Büyük İsyan!",
        description: "Azınlıklar hükümete karşı ayaklanıyor, meydanlarda protestolar büyüyor! Talepler karşılanacak mı?",
        effects: {
            publicSupport: -10,
            internalSecurity: -10,
        },
    },
    {
        id: 511,
        photo: shakiraConcert,
        title: "Stadyumda Shakira Coşkusu!",
        description: "Shakira İstanbulda unutulmaz bir konser veriyor! Hayranlar coşkuyla eğlenirken, etkinlik tüm ülkenin gündeminde.",
        effects: {
            publicSupport: +10,
            internationalRelations: +5,
        },
    },
    {
        id: 512,
        photo: streetElectricalDeath,
        title: "Sokakta Elektrik Kazası: Ölüm!",
        description: "Gündüz vakti sokakta elektrik kaçağı nedeniyle iki kişi hayatını kaybetti. Halk şokta, altyapı ve güvenlik önlemleri sorgulanıyor.",
        effects: {
            infrastructureAndEnvironment: -10,
            internalSecurity: -10,
            publicSupport: -10,
        },
    },
    {
        id: 513,
        photo: terroristBusted,
        title: "Teröristler Kıskıvrak Yakalandı!",
        description: "Güvenlik güçleri teröristleri suçüstü yakaladı! Ülke nefes aldı, ancak güvenlik endişeleri devam ediyor.",
        effects: {
            internalSecurity: +10,
            publicSupport: +10,
        },
    },
    {
        id: 514,
        photo: tosuncuk,
        title: "Çiftlik Bank Skandalı: Halk Dolandırıldı!",
        description: "Çiftlik Bank sahibi halkı dolandırdı, birçok insan birikimlerini kaybetti. Skandal ülke gündeminde büyük yankı uyandırıyor.",
        effects: {
            internalSecurity: -10,
            publicSupport: -10,
            budget: -10,
        },
    },
    {
        id: 515,
        photo: waterPipesExploded,
        title: "Patlayan Su Boruları Kaosa Neden Oldu!",
        description: "Şehirdeki su boruları patladı, birçok mahalle susuz kaldı. Sorunun çözülmesi için hummalı çalışmalar sürüyor.",
        effects: {
            infrastructureAndEnvironment: -10,
            publicSupport: -10,
        },
    },
    {
        id: 516,
        photo: womenAbuseOnstreet,
        title: "Sokak Ortasında Taciz!",
        description: "Gündüz vakti sokakta taciz olayı yaşandı, halk bu duruma tepki gösteriyor. Güvenlik önlemleri yeniden gündemde.",
        effects: {
            internalSecurity: -10,
            publicSupport: -10,
        },
    },
    {
        id: 517,
        photo: gangActivities,
        title: "Sokaklar Çetelere Kaldı!",
        description: "Şehirde çete faaliyetleri artıyor, sokaklar tekinsiz hale geldi. Halk güvenlik endişesi yaşıyor.",
        effects: {
            internalSecurity: -10,
            publicSupport: -10,
        },
    },
    {
        id: 518,
        photo: politicianMercedes,
        title: "Milyon Dolarlık Makam Araçları!",
        description: "Politikacılar için milyon dolarlık lüks makam araçları satın alındı. Halk bu harcamaları sorguluyor.",
        effects: {
            budget: -15,
            publicSupport: -10,
        },
    },
    {
        id: 519,
        photo: politiciansEating,
        title: "TBMM’de Sudan Ucuz Ziyafet!",
        description: "Milletvekillerine TBMM'de çok daha ucuza sunulan yemekler halkın tepkisini çekiyor. İsraf tartışmaları yeniden alevleniyor.",
        effects: {
            budget: -10,
            publicSupport: -10,
        },
    },
    {
        id: 521,
        photo: droughtLake,
        title: "12 Bin Yıllık Göl Kurutuldu!",
        description: "Maden aramak için 12 bin yıllık tarihi göl kurutuldu. Halk ve bilim insanları bu duruma tepkili, hükümet açıklama yapmak zorunda!",
        effects: {
            internationalRelations: -10,
            agriculturalProduction: -10,
        },
    },
    {
        id: 522,
        photo: gasDiscovery,
        title: "Kayıp Doğal Gaz Keşfi!",
        description: "Karadeniz’de büyük bir doğal gaz rezervi bulundu! Ekonomik krizle mücadele eden halk bu keşfi umutla karşıladı, ancak kaynakları kullanmak için gerekli yatırımlar yapılabilecek mi?",
        effects: {
            budget: +20,
            publicSupport: +15,
        },
    },
    {
        id: 523,
        photo: damWaterShortage,
        title: "Kuraklık Alarmı: Barajlar Kuruyor!",
        description: "Yağışların yetersiz olması nedeniyle barajlardaki su seviyesi alarm verici düzeye indi. Su kesintileri gündemde, hükümet acil önlemler almaya hazırlanıyor.",
        effects: {
            agriculturalProduction: -10,
            publicSupport: -10,
        },
    },
    {
        id: 524,
        photo: mineCollapsed,
        title: "Maden Ocağında Göçük!",
        description: "Bir maden ocağında göçük meydana geldi. İşçiler mahsur kalırken, kurtarma ekipleri zamana karşı yarışıyor. Göçük olayı ülkede iş güvenliği konusunu tekrar gündeme getirdi.",
        effects: {
            infrastructureAndEnvironment: -10,
            publicSupport: -20,
        },
    },
    {
        id: 525,
        photo: tourismSeason,
        title: "Turizm Sezonu Patlaması!",
        description: "Pandemi sonrası turizm sektörü büyük bir patlama yaşadı. Oteller dolup taşarken, esnaflar ekonomideki canlanmayı kutluyor.",
        effects: {
            budget: +20,
            publicSupport: +20,
        },
    },
    {
        id: 526,
        photo: alperGezeravcı,
        title: "Uzaydaki ilk Türk Astronot!",
        description: "Türkiye’nin ilk astronotu Alper Gezeravcı oldu! Halk gururla bu anı kutlarken, uzay çalışmaları hız kazanıyor.",
        effects: {
            internationalRelations: +20,
            publicSupport: +10,
        },
    },
    {
        id: 527,
        photo: forestFire,
        title: "Orman Yangını Felaketi!",
        description: "Ege ve Akdeniz bölgelerinde büyük orman yangınları çıktı. Hava sıcaklığı ve rüzgar nedeniyle alevler kontrol altına alınamıyor, yerleşim yerleri tehdit altında!",
        effects: {
            agriculturalProduction: -20,
            publicSupport: -10,
        },
    },
    {
        id: 528,
        photo: kanalIstanbul,
        title: "Çılgın Proje: Kanal İstanbul!",
        description: "Yeni bir boğaz projesi olan Kanal İstanbul’un yapımı için ilk adımlar atılıyor. Ancak çevreciler ve bölge halkı, doğal dengeye zarar vereceği gerekçesiyle projeye karşı çıkıyor.",
        effects: {
            infrastructureAndEnvironment: -20,
            publicSupport: -10,
        },
    },
    {
        id: 529,
        photo: syriaIntervene,
        title: "Askeri Müdahale Suriye’ye Genişliyor!",
        description: "Türkiye, Suriye’deki iç savaşa müdahale ediyor. Devlet kararıyla başlayan operasyonlar, uluslararası arenada tartışma yaratıyor.",
        effects: {
            internationalRelations: -10,
            budget: -10,
        },
    },
    {
        id: 530,
        photo: tbmmVote,
        title: "Narin Cinayetinin soruşturma önergesi AKP ve MHP oylarıyla reddedildi!",
        description: "Türkiye Büyük Millet Meclisi’nde CHP’li vekillerin, İstanbul’da 8 yaşındaki Narin Cinayetinin soruşturulması için verdiği araştırma önergesi AKP ve MHP oylarıyla reddedildi. CHP’li vekiller, oylama sonrası Meclis’i terk etti.",
        effects: {
            internalSecurity: -15,
            publicSupport: -15,
        },
    },
    {
        id: 531,
        photo: tbmmFight,
        title: "TBMM Birbirine Girdi!",
        description: "TBMM’deki oturumda iktidar ve muhalefet milletvekilleri arasında kavga çıktı. Meclis Başkanı olaya müdahale etmeye çalışırken, halk bu duruma tepki gösteriyor.",
        effects: {
            publicSupport: -10,
        },
    },
    {
        id: 532,
        photo: angryPolitician,
        title: "Milletvekili Kürsüyü Yıktı!",
        description: "Bir milletvekili, TBMM’deki oturumda kürsüyü yıktı! Olayın ardından hükümet ve muhalefet arasındaki gerilim tırmanıyor.",
        effects: {
            publicSupport: -10,
        },
    },
    {
        id: 533,
        photo: peopleLeavingCountry,
        title: "Daha İyi Bir Hayat Arayışı!",
        description: "Ülke ekonomisindeki kötü gidişat nedeniyle birçok vatandaş yurt dışına göç etmeye karar verdi. Göçmenler, daha iyi bir hayat arayışında.",
        effects: {
            publicSupport: -10,
            infrastructureAndEnvironment: -10,
        },
    },
    {
        id: 534,
        photo: anitkabir,
        title: "Anıtkabir’de Büyük Tören!",
        description: "Cumhuriyetin kurucusu Gazi Mustafa Kemal Atatürk’ün anıt mezarı Anıtkabir’de büyük bir tören düzenlendi. Halk, Atatürk’ü saygı ve minnetle andı. Ruhu şad olsun!",
        effects: {
            publicSupport: +20,
        },
    },
    {
        id: 535,
        photo: civilSubordinate,
        title: "Halk İsyan Etti!",
        description: "Hükümetin son dönemlerde aldığı kararlar nedeniyle halk sokaklara döküldü. İşsizlik, yoksulluk ve adaletsizlik karşısında halk isyan etti. Yetkililer çözüm arayışında.",
        effects: {
            publicSupport: -20,
            budget: -10,
        },
    },
];
import arabMoney from "../../public/events/arab-money.webp";
import anitkabir from "../../public/events/anitkabir.webp";
import angryPolitician from "../../public/events/angry-politician-3.webp";
import alperGezeravcı from "../../public/events/alper-gezeravci.webp";
import dataHack from "../../public/events/data-hack.webp";
import electricalShortcut from "../../public/events/electrical-shortcut.webp";
import foodCrisis from "../../public/events/food-crisis.webp";
import gangActivities from "../../public/events/gang-activities.webp";
import InterventionAbroad from "../../public/events/intervention-abroad.webp";
import IsraelPalestine from "../../public/events/israel-palestine.webp";
import nuclearThesisExplosion from "../../public/events/nuclear-thesis-explosion.webp";
import oilSpill from "../../public/events/oil-spill.webp";
import peopleOverjoyed from "../../public/events/people-overjoyed.webp";
import politicianMercedes from "../../public/events/politicians-mercedes.webp";
import peopleProtesting from "../../public/events/people-protesting.webp";
import shakiraConcert from "../../public/events/shakira-concert.webp";
import streetElectricalDeath from "../../public/events/street-electrical-death.webp";
import terroristBusted from "../../public/events/terrorists-busted.webp";
import tosuncuk from "../../public/events/tosuncuk.webp";
import waterPipesExploded from "../../public/events/water-pipes-exploded.webp";
import womenAbuseOnstreet from "../../public/events/women-abuse-onstreet.webp";
import syriaIntervene from "../../public/events/syria-intervention.webp";
import tbmmFight from "../../public/events/tbmm-fight.webp";
import peopleLeavingCountry from "../../public/events/people-leaving-country.webp";
import droughtLake from "../../public/events/drought-lake.webp";
import forestFire from "../../public/events/forest-fire-disaster.webp";
import gasDiscovery from "../../public/events/gas-discovery.webp";
import kanalIstanbul from "../../public/events/kanal-istanbul.webp";
import tourismSeason from "../../public/events/tourism-season.webp";
import civilSubordinate from "../../public/events/civil-subordinate.webp";
import mineCollapsed from "../../public/events/mine-collapsed.webp";
import damWaterShortage from "../../public/events/dam-water-shortage.webp";
import newFactoryOpening from "../../public/events/new-factory-opening.webp";
import underSeaCables from "../../public/events/undersea-cables.webp";
import recycleFactory from "../../public/events/recycle-factory.webp";
import spaceCenter from "../../public/events/space-center.webp";
import farm from "../../public/events/farm.webp";
import farmEducation from "../../public/events/farm-education.webp";
import agricultureComp from "../../public/events/agriculture-big-comp.webp";
import scholarship from "../../public/events/scholarship.webp";
import bribeMoney from "../../public/events/bribe-money.webp";
import censor from "../../public/events/journalist-censor.webp";
import wasteFruit from "../../public/events/waste-fruit.webp";

export const events = [
    {
        id: 501,
        photo: arabMoney,
        title: "Ortadoğu Ülkelerinden Beklenmedik Yatırım!",
        description: "Ortadoğu ülkelerinden gelen ani para akışı ekonomik toparlanma umutlarını yeşertti. Bu zenginlik nasıl kullanılacak, kimler en çok fayda sağlayacak?",
        effects: {
            budget: +20,
        },
    },
    {
        id: 502,
        photo: dataHack,
        title: "Ulusal Veri Sızıntısı!",
        description: "Ülkenin kimlik sistemi hacklendi! Milyonlarca kişinin hassas verileri siber suçluların elinde. Güvenlik uzmanları hasarı önlemek için seferber halinde.",
        effects: {
            internalSecurity: -20,
            publicSupport: -15,
        },
    },
    {
        id: 503,
        photo: electricalShortcut,
        title: "Elektrik Kesintisi Kaosu!",
        description: "Ani bir elektrik kesintisi şehirde hayatı durma noktasına getirdi. Sokaklarda kaos hakim, insanlar temel ihtiyaçlarına ulaşmakta zorlanıyor!",
        effects: {
            infrastructureAndEnvironment: -20,
            publicSupport: -20,
        },
    },
    {
        id: 504,
        photo: foodCrisis,
        title: "Gıda Krizi Patlak Verdi!",
        description: "Temel gıda kaynakları hızla tükeniyor, market rafları boş! Halk endişe içinde, yetkililer acil çözümler arıyor.",
        effects: {
            agriculturalProduction: -30,
            publicSupport: -20,
        },
    },
    {
        id: 505,
        photo: InterventionAbroad,
        title: "Dış güçler bir şeyler karıştırıyor!",
        description: "Dış ülkeler ülkemizin iç işlerine müdahale etmeye başladı, halk bu duruma tepki gösteriyor. Ülkenin egemenliği tehlikede mi?",
        effects: {
            internationalRelations: -15,
            publicSupport: -15,
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
            infrastructureAndEnvironment: -30,
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
            agriculturalProduction: -20,
        },
    },
    {
        id: 509,
        photo: peopleOverjoyed,
        title: "Halk Coşkuyla Sokaklarda!",
        description: "Umut dolu haberler sonrası halk sokaklarda kutlama yapıyor. Bu coşku ülkeye yayılırken, herkesin yüzü gülüyor.",
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
            publicSupport: -20,
            internalSecurity: -20,
        },
    },
    {
        id: 511,
        photo: shakiraConcert,
        title: "Stadyumda Konser Coşkusu!",
        description: "İstanbul'da unutulmaz bir konser! Hayranlar coşkuyla eğlenirken, etkinlik tüm ülkenin gündeminde.",
        effects: {
            publicSupport: +20,
            internationalRelations: +10,
        },
    },
    {
        id: 512,
        photo: streetElectricalDeath,
        title: "Sokakta Elektrik Kazası: Ölüm!",
        description: "Gündüz vakti sokakta elektrik kaçağı nedeniyle iki kişi hayatını kaybetti. Halk şokta, altyapı ve güvenlik önlemleri sorgulanıyor.",
        effects: {
            infrastructureAndEnvironment: -15,
            internalSecurity: -15,
            publicSupport: -10,
        },
    },
    {
        id: 513,
        photo: terroristBusted,
        title: "Teröristler Kıskıvrak Yakalandı!",
        description: "Güvenlik güçleri teröristleri suçüstü yakaladı! Ancak güvenlik endişeleri devam ediyor.",
        effects: {
            internalSecurity: +20,
            publicSupport: +20,
        },
    },
    {
        id: 514,
        photo: tosuncuk,
        title: "Gıda Bank Skandalı: Halk Dolandırıldı!",
        description: "Gıda Bank sahibinin halkın yatırımlarını alarak yurtdışına kaçtığı tespit edildi. Birçok insan birikimlerini kaybetti. Skandal ülke gündeminde büyük yankı uyandırıyor.",
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
            infrastructureAndEnvironment: -15,
            publicSupport: -10,
            budget: -10,
        },
    },
    {
        id: 516,
        photo: womenAbuseOnstreet,
        title: "Sokak Ortasında Taciz!",
        description: "Gündüz vakti sokakta bir kadın taciz edildi. Halk bu duruma tepki gösteriyor. Güvenlik önlemleri yeniden gündemde.",
        effects: {
            internalSecurity: -15,
            publicSupport: -15,
        },
    },
    {
        id: 517,
        photo: gangActivities,
        title: "Sokaklar Çetelere Kaldı!",
        description: "Şehirde çete faaliyetleri artıyor, sokaklar tekinsiz hale geldi. Halk güvenlik endişesi yaşıyor.",
        effects: {
            internalSecurity: -20,
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
            publicSupport: -15,
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
            budget: -15,
        },
    },
    {
        id: 522,
        photo: gasDiscovery,
        title: "Kayıp Doğal Gaz Keşfi!",
        description: "Karadeniz’de büyük bir doğal gaz rezervi bulundu! Ekonomik krizle mücadele eden halk bu keşfi umutla karşıladı, ancak kaynakları kullanmak için gerekli yatırımlar yapılabilecek mi?",
        effects: {
            budget: +15,
            publicSupport: +10,
        },
    },
    {
        id: 523,
        photo: damWaterShortage,
        title: "Kuraklık Alarmı: Barajlar Kuruyor!",
        description: "Yağışların yetersiz olması nedeniyle barajlardaki su seviyesi alarm verici düzeye indi. Su kesintileri gündemde, hükümet acil önlemler almaya hazırlanıyor.",
        effects: {
            agriculturalProduction: -20,
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
            internationalRelations: +10,
            publicSupport: +10,
        },
    },
    {
        id: 527,
        photo: forestFire,
        title: "Orman Yangını Felaketi!",
        description: "Kıyı bölgelerinde büyük orman yangınları çıktı. Hava sıcaklığı ve rüzgar nedeniyle alevler kontrol altına alınamıyor, yerleşim yerleri tehdit altında!",
        effects: {
            agriculturalProduction: -20,
            publicSupport: -20,
        },
    },
    {
        id: 528,
        photo: kanalIstanbul,
        title: "Çılgın Proje: Kanal İstanbul!",
        description: "Yeni bir boğaz projesi olan Kanal İstanbul’un yapımı için ilk adımlar atılıyor. Ancak çevreciler ve bölge halkı, doğal dengeye zarar vereceği gerekçesiyle projeye karşı çıkıyor.",
        effects: {
            infrastructureAndEnvironment: -20,
            publicSupport: -20,
            budget: -20,
            agriculturalProduction: -20,
        },
    },
    {
        id: 529,
        photo: syriaIntervene,
        title: "Askeri Müdahale Suriye’ye Genişliyor!",
        description: "Türkiye, Suriye’deki iç savaşa müdahale ediyor. Devlet kararıyla başlayan operasyonlar, uluslararası arenada tartışma yaratıyor.",
        effects: {
            internationalRelations: -20,
            budget: -20,
            internalSecurity: +20,
        },
    },
    {
        id: 531,
        photo: tbmmFight,
        title: "Meclis Birbirine Girdi!",
        description: "Meclisteki oturumda iktidar ve muhalefet milletvekilleri arasında kavga çıktı. Meclis Başkanı olaya müdahale etmeye çalışırken, halk bu duruma tepki gösteriyor.",
        effects: {
            publicSupport: -10,
            internalSecurity: -10,
        },
    },
    {
        id: 532,
        photo: angryPolitician,
        title: "Milletvekili Kürsüyü Yıktı!",
        description: "Bir milletvekili, meclisteki oturumda kürsüyü yıktı! Olayın ardından hükümet ve muhalefet arasındaki gerilim tırmanıyor.",
        effects: {
            publicSupport: -10,
            internalSecurity: -10,
        },
    },
    {
        id: 533,
        photo: peopleLeavingCountry,
        title: "Beyin Göçü Artıyor!",
        description: "Ülke ekonomisindeki kötü gidişat nedeniyle birçok vatandaş yurt dışına göç etmeye karar verdi. Göçmenler, daha iyi bir hayat arayışında.",
        effects: {
            publicSupport: -15,
            infrastructureAndEnvironment: -15,
        },
    },
    {
        id: 534,
        photo: anitkabir,
        title: "Anıtkabir’de Büyük Tören!",
        description: "Cumhuriyetin kurucusu Gazi Mustafa Kemal Atatürk’ün anıt mezarı Anıtkabir’de büyük bir tören düzenlendi. Halk, Atatürk’ü saygı ve minnetle andı. Ruhu şad olsun!",
        effects: {
            publicSupport: +25,
        },
    },
    {
        id: 535,
        photo: civilSubordinate,
        title: "Halk İsyan Etti!",
        description: "Hükümetin son dönemlerde aldığı kararlar nedeniyle halk sokaklara döküldü. İşsizlik, yoksulluk ve adaletsizlik karşısında halk isyan etti. Yetkililer çözüm arayışında.",
        effects: {
            publicSupport: -30,
            budget: -15,
        },
    },
    {
        id: 536,
        photo: civilSubordinate,
        title: "Çakarlı Araçlara Denetim!",
        description: "Devlet, usulsüz kullanılan çakarlı araçları trafikten men etti. Birçok araca ceza yazıldı. Emniyet güçleri denetimlerini artırıyor.",
        effects: {
            internalSecurity: +10,
            publicSupport: +10,
        },
    },
    {
        id: 537,
        photo: newFactoryOpening,
        title: "Yeni Fabrika!",
        description: "Yeni bir fabrikanın açılışı yapıldı. Fabrika, binlerce kişiye iş imkanı sağlayacak. Ekonomiye canlılık getirecek olan fabrika, halk tarafından olumlu karşılandı.",
        effects: {
            infrastructureAndEnvironment: +20,
            publicSupport: +20,
        },
    },
    {
        id: 538,
        photo: underSeaCables,
        title: "Denizaltı İnternet Altyapısı Genişliyor!",
        description: "Denizaltı internet kabloları sayesinde ülkenin internet altyapısı genişliyor. Hızlı ve güvenilir internet erişimi sağlanacak. Teknolojiye yapılan bu yatırım halkı memnun ediyor.",
        effects: {
            infrastructureAndEnvironment: +20,
            publicSupport: +20,
        },
    },
    {
        id: 539,
        photo: recycleFactory,
        title: "Geri Dönüşümde Büyük Atılım!",
        description: "Yurtdışından ithal edilen atıkların geri dönüşümü için yeni bir fabrika açıldı. Geri dönüşümde yapılan bu atılım, çevre kirliliğinin azalmasına katkı sağlayacak.",
        effects: {
            infrastructureAndEnvironment: +15,
            publicSupport: +10,
        },
    },
    {
        id: 540,
        photo: spaceCenter,
        title: "İlk Uzay Merkezi Açıldı!",
        description: "Ülkenin ilk uzay merkezi açıldı. Uzay çalışmaları ve keşifleri için büyük bir adım olan bu merkeze, halkın ilgisi büyük!",
        effects: {
            infrastructureAndEnvironment: +20,
            publicSupport: +10,
        },
    },
    {
        id: 541,
        photo: farm,
        title: "Hayvancılığa Devlet Desteği!",
        description: "Devlet, hayvancılığı desteklemek amacıyla çiftçilere yeni araçlar ve ekipmanlar sağladı. Hayvancılık sektörüne yapılan bu yatırım, tarım ve hayvancılığın önünü açacak.",
        effects: {
            agriculturalProduction: +20,
            publicSupport: +10,
        },
    },
    {
        id: 542,
        photo: farmEducation,
        title: "Tarımsal Bilgilendirme Programları",
        description: "Tarım ve hayvancılık sektöründe bilinçli üretim için çiftçilere yönelik eğitim programları düzenleniyor. Tarımsal bilgilendirme programları sayesinde çiftçiler, verimli ve sürdürülebilir tarım yöntemlerini öğreniyor.",
        effects: {
            agriculturalProduction: +20,
        },
    },
    {
        id: 543,
        photo: agricultureComp,
        title: "Dev Gıda Şirketi Yurtdışına Açılıyor!",
        description: "Türkiye'nin önde gelen gıda şirketlerinden biri, yurtdışına açılmaya karar verdi. Şirketin bu atılımı, ülke ekonomisine katkı sağlayacak.",
        effects: {
            agriculturalProduction: +20,
            publicSupport: +10,
        },
    },
    {
        id: 544,
        photo: scholarship,
        title: "Öğrenci Değişim Programı Genişletildi!",
        description: "Üniversite öğrencileri arasında kültürel değişimi teşvik etmek amacıyla öğrenci değişim programı genişletildi. Amerika ve Avrupadaki üniversitelerle yapılan ortaklıklar ile öğrenciler, yurt dışında eğitim alarak farklı kültürleri tanıma fırsatı bulacak.",
        effects: {
            internationalRelations: +20,
            publicSupport: +10,
        },
    },
    {
        id: 545,
        photo: bribeMoney,
        title: "Rüşvet İddiaları Doğru Çıktı!",
        description: "Ülkemizde ve yurtdışında faaliyet gösteren iki büyük şirketin üst düzey yöneticileri, rüşvet alırken yakalandı. Bu skandal, ülke gündemine bomba gibi düştü.",
        effects: {
            internationalRelations: -20,
            publicSupport: -20,
        },
    },
    {
        id: 546,
        photo: censor,
        title: "Gazeteciliğe Sansür Engeli!",
        description: "Adrena TV mensubu bir gazetecinin bakana sorduğu soru üzerine gözaltına alınması basın dünyasında büyük bir infial yarattı. Halk ve medya kuruluşları bu karara büyük tepki gösterirken uluslararası medyadan da bu da karara eleştiriler yağıyor.",
        effects: {
            internationalRelations: -20,
            publicSupport: -20,
        },
    },
    {
        id: 547,
        photo: wasteFruit,
        title: "Çiftçinin Ürettiği Elinde Kaldı!",
        description: "Toptancıların teklif ettiği düşük fiyatlar yüzünden çiftçiler isyan etti. Ürettiklerinin karşılığını alamayan çiftçiler, ürünlerinin bir kısmını halka dağıtırken çoğunu da çöpe dökmek zorunda kaldı.",
        effects: {
            agriculturalProduction: -20,
            budget: -20,
        },
    },
];
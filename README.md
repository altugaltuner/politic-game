# 🎮 President Simulator - Politik Strateji Oyunu

Oyunu buradan oynayabilirsiniz : https://www.govsimulator.com

**President Simulator**, oyuncuların bir ülkenin başkanı olarak kritik kararlar aldığı, strateji tabanlı bir web oyunudur. Oyuncular, tarım, altyapı, iç güvenlik, uluslararası ilişkiler, bütçe ve halk desteği gibi altı farklı istatistiği yöneterek ülkeyi yönetmeye çalışır.

## 🌟 Oyun Özellikleri

### 🎯 Ana Oynanış
- **Karar Verme Sistemi**: Her seviyede karşınıza çıkan politik senaryolarda kritik kararlar alın
- **6 Ana İstatistik**: 
  - 🌾 Tarım (Agriculture)
  - 🏗️ Altyapı (Infrastructure) 
  - 🛡️ İç Güvenlik (Internal Security)
  - 🌍 Uluslararası İlişkiler (International Relations)
  - 💰 Bütçe (Budget)
  - 👥 Halk Desteği (Public Opinion)
- **Seviye Sistemi**: Başarılı kararlarla seviye atlayın
- **Rastgele Olaylar**: Beklenmedik durumlarla karşılaşın ve tepki verin

### 🎨 Teknik Özellikler
- **Çok Dilli Destek**: Türkçe, İngilizce ve diğer diller
- **Karanlık/Aydınlık Tema**: Görsel tercihlerinize göre tema seçimi
- **Ses Efektleri**: Oyun deneyimini zenginleştiren ses efektleri
- **Responsive Tasarım**: Masaüstü ve mobil uyumlu arayüz
- **Kalıcı Etkiler**: Bazı kararların uzun vadeli sonuçları

## 🛠️ Kullanılan Teknolojiler

### Frontend Framework
- **Next.js 14.2.16** - React tabanlı full-stack framework
- **React 18** - Kullanıcı arayüzü kütüphanesi
- **TypeScript** - Tip güvenli JavaScript

### UI/UX Kütüphaneleri
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Erişilebilir UI bileşenleri
  - Accordion, Alert Dialog, Dropdown Menu
  - Hover Card, Scroll Area, Slider
- **Lucide React** - Modern ikonlar
- **React Icons** - Ek ikon seti

### Animasyon ve Etkileşim
- **React Spring** - Akıcı animasyonlar
- **React Typed** - Yazma makinesi efekti
- **React Tooltip** - İnteraktif araç ipuçları

### Veri Yönetimi
- **Context API** - Global state yönetimi
  - Dil yönetimi (LanguageContext)
  - Tema yönetimi (ThemeContext)
  - Ses seviyesi (VolumeContext)
  - Kullanıcı durumu (UserContext)

### Veritabanı Yapısı
- **JavaScript Modülleri** ile organize edilmiş veri yapısı:
  - `elements.js` - Oyun elementleri
  - `events.js` - Rastgele olaylar (47+ olay)
  - Bakanlık bazlı soru setleri (adalet, eğitim, sağlık vb.)

### Ek Özellikler
- **Sharp** - Görsel optimizasyonu
- **Socket.io Client** - Gerçek zamanlı bağlantı desteği
- **Supabase** - Backend hizmetleri

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Kurulum Adımları

1. **Projeyi klonlayın**
   ```bash
   git clone https://github.com/kullaniciadi/politic-game.git
   cd politic-game
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

### Diğer Komutlar
```bash
# Üretim için build
npm run build

# Üretim sunucusunu başlat
npm start

# Kod kalitesi kontrolü
npm run lint

# Temiz başlangıç (cache temizleme)
npm run dev:clean
```

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── components/         # Oyun bileşenleri
│   ├── game/              # Ana oyun sayfası
│   ├── policy/            # Gizlilik politikası
│   └── types/             # TypeScript tip tanımları
├── contexts/              # React Context'leri
├── database/              # Oyun verileri
│   ├── elements.js        # Oyun elementleri
│   ├── events.js          # Rastgele olaylar
│   └── [bakanlık].js      # Bakanlık bazlı sorular
└── components/ui/         # Yeniden kullanılabilir UI bileşenleri
```

## 🎯 Oyun Mekanikleri

### Karar Alma Süreci
1. Her seviyede politik bir senaryo sunulur
2. Oyuncu 2-4 farklı seçenek arasından birini seçer
3. Seçim, 6 ana istatistiği farklı şekillerde etkiler
4. Bazı kararların kalıcı etkileri vardır

### Başarı Kriterleri
- Tüm istatistikleri dengede tutmak
- Seviye atlamak için minimum skor gereksinimi
- Kritik durumlarda doğru kararlar almak

### Oyun Sonu Durumları
- **Başarı**: Yüksek seviyeye ulaşmak
- **Başarısızlık**: Herhangi bir istatistiğin kritik seviyeye düşmesi

## 🌍 Çok Dilli Destek

Oyun şu dilleri destekler:
- 🇹🇷 Türkçe (Varsayılan)
- 🇺🇸 İngilizce
- 🇫🇷 Fransızca
- 🇩🇪 Almanca
- 🇨🇳 Çince
- 🇪🇸 İspanyolca
- 🇵🇹 Portekizce
- 🇷🇺 Rusça

## 🎨 Tasarım Felsefesi

- **Minimalist Arayüz**: Karmaşık politik kararları basit bir arayüzle sunma
- **Görsel Geri Bildirim**: İstatistik değişimlerinin görsel gösterimi
- **Erişilebilirlik**: Tüm kullanıcılar için erişilebilir tasarım
- **Responsive**: Her cihazda optimal deneyim

## 📄 Lisans

Bu proje eğitim ve eğlence amaçlı geliştirilmiştir.

## 👨‍💻 Geliştirici

Proje, modern web teknolojileri kullanılarak geliştirilmiş bir politik simülasyon oyunudur. Gerçek politik durumları eğlenceli bir oyun formatında sunar.

---

**Not**: Bu oyun eğitim ve eğlence amaçlıdır. Gerçek politik durumları yansıtmaz ve sadece strateji oyunu olarak tasarlanmıştır.

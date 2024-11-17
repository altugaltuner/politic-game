/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [], // Eğer harici bir CDN kullanıyorsanız buraya domainleri ekleyebilirsiniz
        deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Cihaz boyutları
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Resim boyutları
    },
    async headers() {
        return [
            {
                source: "/(.*).(jpg|jpeg|png|webp|svg)$", // Resim dosya uzantıları
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable", // Resimlerin 1 yıl önbellekte kalması
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

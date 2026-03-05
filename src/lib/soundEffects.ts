const BREAKING_NEWS_SOUNDS = [
    "/sound-effects/breaking-news1.wav",
    "/sound-effects/breaking-news2.wav",
    "/sound-effects/important-news.wav",
];

const playSound = (src: string, volume: number, errorMessage?: string) => {
    const audio = new Audio(src);
    audio.volume = volume;

    if (errorMessage) {
        audio.onerror = () => console.error(errorMessage);
    }

    audio.play();
};

export const playDefeatSound = (volume: number) => {
    playSound("/sound-effects/defeat.wav", volume);
};

export const playVictorySoundEffect = (volume: number) => {
    playSound("/sound-effects/victory.wav", volume, "Failed to load victory sound");
};

export const playMetalButtonSound = (volume: number) => {
    playSound("/sound-effects/button-metal.wav", volume, "Failed to load metal sound");
};

export const playRandomBreakingNewsSound = (volume: number) => {
    const randomSound = BREAKING_NEWS_SOUNDS[Math.floor(Math.random() * BREAKING_NEWS_SOUNDS.length)];
    playSound(randomSound, volume);
};

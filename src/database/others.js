import saglikBakani from "../../public/ministers/saglik-bakani.webp";

export const others = [
    {
        id: 800,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "",
                effect: {
                    budget: -20,
                    infrastructureAndEnvironment: +30,
                }
            },
        ],
        title: "",
        photo: saglikBakani,
        link: ""
    },
];
// Módulo de Datos de Espot Bikes

export const routesData = [
    {
        id: "roca-blanca",
        name: "1 - Roca Blanca",
        difficulty: "easy",
        difficultyLabel: "Fácil (Verde)",
        distance: 8.90,
        elevationGain: 34,
        elevationLoss: 34,
        duration: "45m",
        description: "Ruta circular de iniciación muy accesible e ideal para familias. Recorrido llano y suave que discurre en los alrededores de Espot, perfecto para un paseo relajado disfrutando del entorno pirenaico.",
        elevationProfile: [1310, 1315, 1320, 1325, 1330, 1340, 1344, 1340, 1330, 1320, 1310],
        coordinates: [
            [42.5768, 1.0857],
            [42.5750, 1.0920],
            [42.5710, 1.0960],
            [42.5680, 1.0880],
            [42.5720, 1.0810],
            [42.5768, 1.0857]
        ],
        svgPath: "M 100 280 Q 200 290 300 285 T 500 280",
        startPoint: { x: 100, y: 280 },
        endPoint: { x: 100, y: 280 },
        poName: "Espot - Roca Blanca"
    },
    {
        id: "espotesqui-1500-mosquera",
        name: "2 - Espotesquí 1500 - Mosquera",
        difficulty: "easy",
        difficultyLabel: "Fácil (Verde)",
        distance: 14.40,
        elevationGain: 460,
        elevationLoss: 460,
        duration: "1h 30m",
        description: "Ruta verde circular que sube de forma progresiva hacia la cota 1500 de Espot Esquí, regresando por el frondoso y pintoresco bosque de Mosquera. Apta para ciclistas que buscan un reto moderado pero sin dificultades técnicas.",
        elevationProfile: [1310, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1720, 1750, 1770, 1700, 1600, 1500, 1400, 1310],
        coordinates: [
            [42.5768, 1.0857],
            [42.5730, 1.0650],
            [42.5690, 1.0500],
            [42.5580, 1.0520],
            [42.5590, 1.0710],
            [42.5768, 1.0857]
        ],
        svgPath: "M 100 280 C 150 200, 250 150, 350 200 C 450 250, 400 300, 100 280",
        startPoint: { x: 100, y: 280 },
        endPoint: { x: 100, y: 280 },
        poName: "Espot - Estación 1500"
    },
    {
        id: "sant-maurici",
        name: "3 - Sant Maurici",
        difficulty: "medium",
        difficultyLabel: "Medio (Azul)",
        distance: 17.40,
        elevationGain: 615,
        elevationLoss: 615,
        duration: "2h 0m",
        description: "El recorrido estrella de Espot. Ascensión circular constante por pista forestal hasta el emblemático Estany de Sant Maurici, rodeado por los imponentes picos de Els Encantats. Vistas espectaculares del Parque Nacional.",
        elevationProfile: [1310, 1350, 1400, 1450, 1520, 1600, 1680, 1750, 1820, 1880, 1910, 1925, 1850, 1750, 1600, 1450, 1310],
        coordinates: [
            [42.5768, 1.0857],
            [42.5746, 1.0664],
            [42.5739, 1.0450],
            [42.5750, 1.0250],
            [42.5822, 1.0064],
            [42.5806, 0.9906],
            [42.5822, 1.0064],
            [42.5750, 1.0250],
            [42.5768, 1.0857]
        ],
        svgPath: "M 100 280 C 180 200, 300 120, 450 180 T 100 280",
        startPoint: { x: 100, y: 280 },
        endPoint: { x: 100, y: 280 },
        poName: "Estany de Sant Maurici"
    },
    {
        id: "campo-espotesqui-2000",
        name: "4 - Campo - Espotesquí 2000",
        difficulty: "medium",
        difficultyLabel: "Medio (Azul)",
        distance: 20.0,
        elevationGain: 825,
        elevationLoss: 825,
        duration: "2h 15m",
        description: "Ruta circular que exige buena condición física. Sube a través de Campo hasta la cota alta de Espot Esquí 2000. El descenso fluye por pistas forestales anchas con vistas de alta montaña.",
        elevationProfile: [1310, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2050, 2100, 2135, 2000, 1800, 1600, 1450, 1310],
        coordinates: [
            [42.5768, 1.0857],
            [42.5658, 1.0125],
            [42.5535, 1.0080],
            [42.5590, 1.0250],
            [42.5650, 1.0480],
            [42.5768, 1.0857]
        ],
        svgPath: "M 100 280 C 150 150, 300 80, 400 150 C 500 220, 300 320, 100 280",
        startPoint: { x: 100, y: 280 },
        endPoint: { x: 100, y: 280 },
        poName: "Espot Esquí Cota 2000"
    },
    {
        id: "feners-plan-b",
        name: "5 - Feners - Plan B",
        difficulty: "hard",
        difficultyLabel: "Difícil (Rojo)",
        distance: 9.0,
        elevationGain: 265,
        elevationLoss: 265,
        duration: "1h 0m",
        description: "Ruta corta pero intensa de nivel avanzado. Combina subidas empinadas por pistas de tierra hacia Feners con tramos rápidos y técnicos. Ideal para poner a prueba el manejo en senderos de media montaña.",
        elevationProfile: [1310, 1350, 1400, 1450, 1500, 1550, 1575, 1550, 1450, 1380, 1310],
        coordinates: [
            [42.5768, 1.0857],
            [42.5850, 1.0950],
            [42.5920, 1.0880],
            [42.5880, 1.0780],
            [42.5768, 1.0857]
        ],
        svgPath: "M 100 280 C 120 230, 200 180, 250 220 T 100 280",
        startPoint: { x: 100, y: 280 },
        endPoint: { x: 100, y: 280 },
        poName: "Bucle Feners"
    },
    {
        id: "creu-eixol-mirador-pala",
        name: "6 - Creu de l'Eixol / Mirador de la Pala",
        difficulty: "hard",
        difficultyLabel: "Difícil (Rojo)",
        distance: 27.0,
        elevationGain: 1110,
        elevationLoss: 1110,
        duration: "3h 15m",
        description: "Ruta exigente de alta montaña con un desnivel acumulado considerable de 1110 metros. Corona la mítica Creu de l'Eixol y ofrece una de las panorámicas más amplias del valle desde el Mirador de la Pala.",
        elevationProfile: [1310, 1450, 1600, 1750, 1900, 2050, 2200, 2300, 2400, 2420, 2200, 1900, 1650, 1450, 1310],
        coordinates: [
            [42.5768, 1.0857],
            [42.5890, 1.0910],
            [42.5980, 1.0810],
            [42.6050, 1.0650],
            [42.5910, 1.0500],
            [42.5768, 1.0857]
        ],
        svgPath: "M 100 280 C 200 150, 350 80, 450 150 T 100 280",
        startPoint: { x: 100, y: 280 },
        endPoint: { x: 100, y: 280 },
        poName: "Creu de l'Eixol"
    },
    {
        id: "son-planes-pla-font-jou-estais",
        name: "7 - Son / Planes / Pla Font / Jou / Estaís",
        difficulty: "medium",
        difficultyLabel: "Medio (Azul)",
        distance: 42.0,
        elevationGain: 1170,
        elevationLoss: 1170,
        duration: "4h 30m",
        description: "Maratón circular de BTT que conecta varios de los pueblos y parajes más tradicionales del valle: Son, Planes, el refugio de Pla de la Font, Jou y Estaís. Exigente por distancia pero técnicamente moderada.",
        elevationProfile: [1310, 1400, 1500, 1650, 1800, 1950, 2100, 2250, 2350, 2450, 2480, 2300, 2000, 1700, 1500, 1310],
        coordinates: [
            [42.5768, 1.0857],
            [42.5880, 1.0650],
            [42.5938, 1.0927],
            [42.6100, 1.1050],
            [42.6250, 1.0950],
            [42.6150, 1.0700],
            [42.5768, 1.0857]
        ],
        svgPath: "M 100 280 C 150 180, 350 100, 500 180 T 100 280",
        startPoint: { x: 100, y: 280 },
        endPoint: { x: 100, y: 280 },
        poName: "Pla de la Font"
    },
    {
        id: "embaiasse-lladres",
        name: "8 - Embaiasse - Lladres",
        difficulty: "hard",
        difficultyLabel: "Difícil (Rojo)",
        distance: 20.0,
        elevationGain: 800,
        elevationLoss: 800,
        duration: "2h 30m",
        description: "Ruta roja circular con pendientes pronunciadas y descensos exigentes por el barranco de Lladres. Se requiere un buen control de frenos y técnica de descenso sobre piedras y terreno suelto.",
        elevationProfile: [1310, 1400, 1550, 1700, 1850, 2000, 2110, 2000, 1850, 1650, 1450, 1310],
        coordinates: [
            [42.5768, 1.0857],
            [42.5700, 1.0500],
            [42.5610, 1.0350],
            [42.5550, 1.0500],
            [42.5768, 1.0857]
        ],
        svgPath: "M 100 280 C 140 220, 280 180, 350 230 T 100 280",
        startPoint: { x: 100, y: 280 },
        endPoint: { x: 100, y: 280 },
        poName: "Barranco de Lladres"
    }
];

export const bikesData = [
    {
        id: "moustache-samedi-29",
        name: "Moustache Samedi 29 Trail (TRAIL 150)",
        type: "E-Bike Trail",
        pricePerDay: 85,
        priceHalfDay: 55,
        priceFullDay: 85,
        image: "moustache_samedi_29.png",
        description: "Modelo icónico de la gama Moustache, multi-galardonado. La TRAIL 150 es la e-bike ideal para quienes buscan una e-MTB eficiente, potente tanto en subidas como en bajadas, y fácil de manejar. Equipada con motor Bosch de 5ª generación con Smart System (174 km de autonomía en ECO en pantalla) y doble suspensión de 150mm de recorrido.",
        sizes: ["S", "M", "L", "XL"],
        icon: "fa-bolt-lightning",
        specs: {
            weight: "23.2 kg",
            travel: "150mm (Doble)",
            engine: "Bosch CX Gen 5 (Smart System)"
        }
    },
    {
        id: "moustache-samedi-26",
        name: "Moustache Samedi 26 Off",
        type: "Infantil / Junior (E-Bike)",
        pricePerDay: 59,
        priceHalfDay: 39,
        priceFullDay: 59,
        image: "moustache_samedi_26.png",
        description: "E-bike junior de gama alta optimizada para niños y jóvenes, equipada con motor silencioso Bosch Active Line Plus. Batería integrada de alta eficiencia, suspensión delantera para máximo control y comodidad en pistas y senderos de montaña, y sistema antipinchazos Tannus Armour de serie.",
        sizes: ["XS", "S"],
        icon: "fa-child-reaching",
        specs: {
            weight: "19.8 kg",
            travel: "100mm (Semirígida)",
            engine: "Bosch Active Line Plus"
        }
    }
];

export const weatherDataMock = {
    temp: 18,
    status: "soleado",
    icon: "fa-sun",
    wind: 12, // km/h
    humidity: 45, // %
    precipChance: 5, // %
    trailsStatus: "open",
    trailsStatusLabel: "Senderos Abiertos"
};

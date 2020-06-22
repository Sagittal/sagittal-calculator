const COMMAS = [
    {
        introducingLevel: "MEDIUM",
        position: 0.0000000000000,
        ascii: "|",
        unicode: "",
        mina: 0,
        monzo: [],
        id: 0,
    },
    {
        introducingLevel: "EXTREME",
        position: 0.42271616595482,
        ascii: "`|",
        unicode: "",
        mina: 1,
        monzo: [12, -2, -1, -1, 0, -1],
        id: 1,
    },
    {
        introducingLevel: "EXTREME",
        position: 0.83252420410159,
        ascii: "``|",
        unicode: "",
        mina: 2,
        monzo: [5, -3, 1, -1, -1, 1],
        id: 2,
    },
    {
        introducingLevel: "ULTRA",
        position: 1.4242979405308,
        ascii: ".)|",
        unicode: "",
        mina: 3,
        monzo: [6, -5, -1, 0, 0, 0, 0, 1],
        id: 3,
    },
    {
        introducingLevel: "ULTRA",
        position: 1.95372078793416,
        ascii: "'|",
        unicode: "",
        mina: 4,
        monzo: [-15, 8, 1],
        id: 4,
    },
    {
        introducingLevel: "EXTREME",
        position: 2.37643695388898,
        ascii: "`'|",
        unicode: "",
        mina: 5,
        monzo: [-3, 6, 0, -1, 0, -1],
        id: 5,
    },
    {
        introducingLevel: "EXTREME",
        position: 2.98226285771248,
        ascii: ",)|",
        unicode: "",
        mina: 6,
        monzo: [-8, 10, -4, -1, 0, 0, 0, 1],
        id: 6,
    },
    {
        introducingLevel: "HIGH",
        position: 3.37801872846485,
        ascii: ")|",
        unicode: "",
        mina: 7,
        monzo: [-9, 3, 0, 0, 0, 0, 0, 1],
        id: 7,
    },
    {
        introducingLevel: "EXTREME",
        position: 3.93015843943305,
        ascii: "`)|",
        unicode: "",
        mina: 8,
        monzo: [-3, 2, -1, 2, -1],
        id: 8,
    },
    {
        introducingLevel: "EXTREME",
        position: 4.50256183332916,
        ascii: "``)|",
        unicode: "",
        mina: 9,
        monzo: [-7, -1, 1, 1, 1],
        id: 9,
    },
    {
        introducingLevel: "EXTREME",
        position: 4.92527799928397,
        ascii: ",,|(",
        unicode: "",
        mina: 10,
        monzo: [5, -3, 0, 0, 1, -1],
        id: 10,
    },
    {
        introducingLevel: "EXTREME",
        position: 5.44763529181809,
        ascii: ",|(",
        unicode: "",
        mina: 11,
        monzo: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1],
        id: 11,
    },
    {
        introducingLevel: "MEDIUM",
        position: 5.7578022033852,
        ascii: "|(",
        unicode: "",
        mina: 12,
        monzo: [10, -6, 1, -1],
        id: 12,
    },
    {
        introducingLevel: "EXTREME",
        position: 6.47899948482794,
        ascii: "`|(",
        unicode: "",
        mina: 13,
        monzo: [5, -7, -1, 3],
        id: 13,
    },
    {
        introducingLevel: "ULTRA",
        position: 6.77587576937045,
        ascii: ".~|",
        unicode: "",
        mina: 14,
        monzo: [8, -1, -1, 0, 0, 0, -1],
        id: 14,
    },
    {
        introducingLevel: "EXTREME",
        position: 7.31576712056731,
        ascii: ",'|(",
        unicode: "",
        mina: 15,
        monzo: [-4, 9, -2, -2],
        id: 15,
    },
    {
        introducingLevel: "ULTRA",
        position: 7.71152299131971,
        ascii: "'|(",
        unicode: "",
        mina: 16,
        monzo: [-5, 2, 2, -1],
        id: 16,
    },
    {
        introducingLevel: "EXTREME",
        position: 8.43272027276221,
        ascii: ",~|",
        unicode: "",
        mina: 17,
        monzo: [-10, 1, 0, 3],
        id: 17,
    },
    {
        introducingLevel: "HIGH",
        position: 8.72959655730475,
        ascii: "~|",
        unicode: "",
        mina: 18,
        monzo: [-7, 7, 0, 0, 0, 0, -1],
        id: 18,
    },
    {
        introducingLevel: "EXTREME",
        position: 9.18177118980167,
        ascii: ",)|(",
        unicode: "",
        mina: 19,
        monzo: [-17, 2, 0, 0, 4],
        id: 19,
    },
    {
        introducingLevel: "MEDIUM",
        position: 9.6879606428187,
        ascii: ")|(",
        unicode: "",
        mina: 20,
        monzo: [7, -4, 0, 1, -1],
        id: 20,
    },
    {
        introducingLevel: "EXTREME",
        position: 10.2603640367144,
        ascii: "`)|(",
        unicode: "",
        mina: 21,
        monzo: [3, -7, 2, 0, 1],
        id: 21,
    },
    {
        introducingLevel: "EXTREME",
        position: 10.8091572266510,
        ascii: "``)|(",
        unicode: "",
        mina: 22,
        monzo: [-13, 7, 0, 2, 0, -1],
        id: 22,
    },
    {
        introducingLevel: "EXTREME",
        position: 11.1198485360183,
        ascii: ",')|(",
        unicode: "",
        mina: 23,
        monzo: [21, -5, -2, -3],
        id: 23,
    },
    {
        introducingLevel: "ULTRA",
        position: 11.6416814307528,
        ascii: "')|(",
        unicode: "",
        mina: 24,
        monzo: [-8, 4, 1, 1, -1],
        id: 24,
    },
    {
        introducingLevel: "HIGH",
        position: 12.0643975967077,
        ascii: ")~|",
        unicode: "",
        mina: 25,
        monzo: [4, 2, 0, 0, -1, -1],
        id: 25,
    },
    {
        introducingLevel: "ULTRA",
        position: 12.7766930394100,
        ascii: ".~|(",
        unicode: "",
        mina: 26,
        monzo: [3, -3, -1, 0, 0, 0, 1],
        id: 26,
    },
    {
        introducingLevel: "EXTREME",
        position: 13.2685907694041,
        ascii: "`.~|(",
        unicode: "",
        mina: 27,
        monzo: [9, -5, 0, 0, 1, 0, 0, 0, -1],
        id: 27,
    },
    {
        introducingLevel: "EXTREME",
        position: 13.7947666053953,
        ascii: ",,~|(",
        unicode: "",
        mina: 28,
        monzo: [1, 2, -3, 1],
        id: 28,
    },
    {
        introducingLevel: "EXTREME",
        position: 14.1905224761475,
        ascii: ",~|(",
        unicode: "",
        mina: 29,
        monzo: [0, -5, 1, 2],
        id: 29,
    },
    {
        introducingLevel: "MEDIUM",
        position: 14.7304138273444,
        ascii: "~|(",
        unicode: "",
        mina: 30,
        monzo: [-12, 5, 0, 0, 0, 0, 1],
        id: 30,
    },
    {
        introducingLevel: "EXTREME",
        position: 15.1996942033926,
        ascii: "`~|(",
        unicode: "",
        mina: 31,
        monzo: [2, -4, 0, -1, 1, 1],
        id: 31,
    },
    {
        introducingLevel: "EXTREME",
        position: 15.7484873933296,
        ascii: ",,|~",
        unicode: "",
        mina: 32,
        monzo: [-14, 10, -2, 1],
        id: 32,
    },
    {
        introducingLevel: "EXTREME",
        position: 16.1442432640817,
        ascii: ",|~",
        unicode: "",
        mina: 33,
        monzo: [-15, 3, 2, 2],
        id: 33,
    },
    {
        introducingLevel: "HIGH",
        position: 16.5443420760908,
        ascii: "|~",
        unicode: "",
        mina: 34,
        monzo: [5, -6, 0, 0, 0, 0, 0, 0, 1],
        id: 34,
    },
    {
        introducingLevel: "EXTREME",
        position: 16.9896755959915,
        ascii: "`|~",
        unicode: "",
        mina: 35,
        monzo: [9, -1, 0, 0, 0, -2],
        id: 35,
    },
    {
        introducingLevel: "HIGH",
        position: 17.5761311572815,
        ascii: "~~|",
        unicode: "",
        mina: 36,
        monzo: [-1, 2, 0, -2, 1],
        id: 36,
    },
    {
        introducingLevel: "EXTREME",
        position: 18.0123750928310,
        ascii: "`~~|",
        unicode: "",
        mina: 37,
        monzo: [-8, 6, 0, 0, 1, 0, 0, 0, 0, 0, -1],
        id: 37,
    },
    {
        introducingLevel: "EXTREME",
        position: 18.5344952427957,
        ascii: "``~~|",
        unicode: "",
        mina: 38,
        monzo: [13, -9, 0, -1, 0, 0, 1],
        id: 38,
    },
    {
        introducingLevel: "EXTREME",
        position: 19.1298526428258,
        ascii: ",./|",
        unicode: "",
        mina: 39,
        monzo: [-1, -2, -1, 1, 0, 1],
        id: 39,
    },
    {
        introducingLevel: "ULTRA",
        position: 19.5525688087807,
        ascii: "./|",
        unicode: "",
        mina: 40,
        monzo: [11, -4, -2],
        id: 40,
    },
    {
        introducingLevel: "HIGH",
        position: 20.0819916561843,
        ascii: ")|~",
        unicode: "",
        mina: 41,
        monzo: [-10, 9, 0, 0, 0, 0, 0, -1],
        id: 41,
    },
    {
        introducingLevel: "EXTREME",
        position: 20.4077103668277,
        ascii: ",,/|",
        unicode: "",
        mina: 42,
        monzo: [8, 0, 0, 0, -1, 0, 0, 0, -1],
        id: 42,
    },
    {
        introducingLevel: "EXTREME",
        position: 21.0835734307600,
        ascii: ",/|",
        unicode: "",
        mina: 43,
        monzo: [-16, 6, 0, 1, 0, 1],
        id: 43,
    },
    {
        introducingLevel: "MEDIUM",
        position: 21.5062895967148,
        ascii: "/|",
        unicode: "",
        mina: 44,
        monzo: [-4, 4, -1],
        id: 44,
    },
    {
        introducingLevel: "EXTREME",
        position: 21.9020454674670,
        ascii: "`/|",
        unicode: "",
        mina: 45,
        monzo: [-5, -3, 3, 1],
        id: 45,
    },
    {
        introducingLevel: "EXTREME",
        position: 22.3247616334221,
        ascii: "``/|",
        unicode: "",
        mina: 46,
        monzo: [7, -5, 2, 0, 0, -1],
        id: 46,
    },
    {
        introducingLevel: "ULTRA",
        position: 22.9305875372457,
        ascii: ".)/|",
        unicode: "",
        mina: 47,
        monzo: [2, -1, -2, 0, 0, 0, 0, 1],
        id: 47,
    },
    {
        introducingLevel: "ULTRA",
        position: 23.4600103846490,
        ascii: "'/|",
        unicode: "",
        mina: 48,
        monzo: [-19, 12],
        id: 48,
    },
    {
        introducingLevel: "EXTREME",
        position: 23.8557662554013,
        ascii: "`'/|",
        unicode: "",
        mina: 49,
        monzo: [-20, 5, 4, 1],
        id: 49,
    },
    {
        introducingLevel: "EXTREME",
        position: 24.0551306421097,
        ascii: ",,)/|",
        unicode: "",
        mina: 49.56756901073000,
        monzo: [4, -5, -1, 1, 1],
        id: 50,
    },
    {
        introducingLevel: "EXTREME",
        position: 24.2784824213563,
        ascii: ",)/|",
        unicode: "",
        mina: 50,
        monzo: [-8, 3, 3, 0, 0, -1],
        id: 51,
    },
    {
        introducingLevel: "HIGH",
        position: 24.8843083251798,
        ascii: ")/|",
        unicode: "",
        mina: 51,
        monzo: [-13, 7, -1, 0, 0, 0, 0, 1],
        id: 52,
    },
    {
        introducingLevel: "EXTREME",
        position: 24.8876548462113,
        ascii: ",.|)",
        unicode: "",
        mina: 51.45864857210600,
        monzo: [9, -8, 0, 0, 0, 1],
        id: 53,
    },
    {
        introducingLevel: "ULTRA",
        position: 25.3103710121659,
        ascii: ".|)",
        unicode: "",
        mina: 52,
        monzo: [21, -10, -1, -1],
        id: 54,
    },
    {
        introducingLevel: "EXTREME",
        position: 26.0088514300439,
        ascii: "`.|)",
        unicode: "",
        mina: 53,
        monzo: [-11, 3, 0, 1, 1],
        id: 55,
    },
    {
        introducingLevel: "EXTREME",
        position: 26.4315675959986,
        ascii: ",,|)",
        unicode: "",
        mina: 54,
        monzo: [1, 1, -1, 0, 1, -1],
        id: 56,
    },
    {
        introducingLevel: "EXTREME",
        position: 26.8413756341454,
        ascii: ",|)",
        unicode: "",
        mina: 55,
        monzo: [-6, 0, 1, 0, 0, 1],
        id: 57,
    },
    {
        introducingLevel: "MEDIUM",
        position: 27.2640918001001,
        ascii: "|)",
        unicode: "",
        mina: 56,
        monzo: [6, -2, 0, -1],
        id: 58,
    },
    {
        introducingLevel: "EXTREME",
        position: 27.6598476708525,
        ascii: "`|)",
        unicode: "",
        mina: 57,
        monzo: [5, -9, 4],
        id: 59,
    },
    {
        introducingLevel: "EXTREME",
        position: 28.3852883839327,
        ascii: "``|)",
        unicode: "",
        mina: 58,
        monzo: [-14, 9, 0, 0, 1, -1],
        id: 60,
    },
    {
        introducingLevel: "EXTREME",
        position: 28.7950964220796,
        ascii: ",'|)",
        unicode: "",
        mina: 59,
        monzo: [-21, 8, 2, 0, 0, 1],
        id: 61,
    },
    {
        introducingLevel: "ULTRA",
        position: 29.2178125880342,
        ascii: "'|)",
        unicode: "",
        mina: 60,
        monzo: [-9, 6, 1, -1],
        id: 62,
    },
    {
        introducingLevel: "EXTREME",
        position: 29.6135684587868,
        ascii: "`'|)",
        unicode: "",
        mina: 61,
        monzo: [-10, -1, 5],
        id: 63,
    },
    {
        introducingLevel: "EXTREME",
        position: 30.1761766735484,
        ascii: ",)|)",
        unicode: "",
        mina: 62,
        monzo: [5, -5, 1, 0, -1, 0, 1],
        id: 64,
    },
    {
        introducingLevel: "HIGH",
        position: 30.6421105285650,
        ascii: ")|)",
        unicode: "",
        mina: 63,
        monzo: [-3, 1, 0, -1, 0, 0, 0, 1],
        id: 65,
    },
    {
        introducingLevel: "ULTRA",
        position: 31.1942502395332,
        ascii: ".(|",
        unicode: "",
        mina: 64,
        monzo: [3, 0, -1, 1, -1],
        id: 66,
    },
    {
        introducingLevel: "HIGH",
        position: 31.7666536334294,
        ascii: "|\\",
        unicode: "",
        mina: 65,
        monzo: [-1, -3, 1, 0, 1],
        id: 67,
    },
    {
        introducingLevel: "EXTREME",
        position: 32.1893697993842,
        ascii: "`|\\",
        unicode: "",
        mina: 66,
        monzo: [11, -5, 0, -1, 1, -1],
        id: 68,
    },
    {
        introducingLevel: "EXTREME",
        position: 32.6217951914765,
        ascii: ",(|",
        unicode: "",
        mina: 67,
        monzo: [-4, 1, 3, 0, 0, 0, 0, 0, -1],
        id: 69,
    },
    {
        introducingLevel: "MEDIUM",
        position: 33.1479710274675,
        ascii: "(|",
        unicode: "",
        mina: 68,
        monzo: [-12, 8, 0, 1, -1],
        id: 70,
    },
    {
        introducingLevel: "EXTREME",
        position: 33.6172514035158,
        ascii: "`(|",
        unicode: "",
        mina: 69,
        monzo: [2, -1, 0, 0, 0, 1, -1],
        id: 71,
    },
    {
        introducingLevel: "EXTREME",
        position: 34.2829826361251,
        ascii: "``(|",
        unicode: "",
        mina: 70,
        monzo: [-1, 1, -2, 0, 0, 0, 1],
        id: 72,
    },
    {
        introducingLevel: "EXTREME",
        position: 34.6952302982867,
        ascii: ",'(|",
        unicode: "",
        mina: 71,
        monzo: [2, 2, 0, 1, 0, -1, 0, -1],
        id: 73,
    },
    {
        introducingLevel: "ULTRA",
        position: 34.9756147914198,
        ascii: "'(|",
        unicode: "",
        mina: 72,
        monzo: [1, 0, 2, -2],
        id: 74,
    },
    {
        introducingLevel: "EXTREME",
        position: 35.2605681373132,
        ascii: ",~|)",
        unicode: "",
        mina: 72.40486810762850,
        monzo: [3, -5, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        id: 75,
    },
    {
        introducingLevel: "HIGH",
        position: 35.6968120728623,
        ascii: "~|)",
        unicode: "",
        mina: 73,
        monzo: [-4, -1, 0, 2],
        id: 76,
    },
    {
        introducingLevel: "EXTREME",
        position: 36.2367034240592,
        ascii: "`~|)",
        unicode: "",
        mina: 74,
        monzo: [-16, 9, -1, 0, 0, 0, 1],
        id: 77,
    },
    {
        introducingLevel: "EXTREME",
        position: 36.7286011540533,
        ascii: ",.(|(",
        unicode: "",
        mina: 75,
        monzo: [-10, 7, 0, 0, 1, 0, 0, 0, -1],
        id: 79,
    },
    {
        introducingLevel: "ULTRA",
        position: 36.9520524429189,
        ascii: ".(|(",
        unicode: "",
        mina: 76,
        monzo: [13, -6, 0, 0, -1],
        id: 80,
    },
    {
        introducingLevel: "ULTRA",
        position: 37.6505328607966,
        ascii: "'~|)",
        unicode: "",
        mina: 77,
        id: 81,
        monzo: [-19, 7, 1, 2],
    },
    {
        introducingLevel: "HIGH",
        position: 38.0506316728057,
        ascii: "/|~",
        unicode: "",
        mina: 78,
        id: 82,
        monzo: [1, -2, -1, 0, 0, 0, 0, 0, 1],
    },
    {
        introducingLevel: "EXTREME",
        position: 38.0732490267513,
        ascii: ",,(|(",
        unicode: "",
        mina: 78.39014554523920,
        monzo: [-7, 5, 0, 1, 0, -1],
        id: 83,
    },
    {
        introducingLevel: "EXTREME",
        position: 38.5425294027997,
        ascii: ",(|(",
        unicode: "",
        mina: 79,
        monzo: [7, -4, 0, 0, 1, 0, -1],
        id: 84,
    },
    {
        introducingLevel: "MEDIUM",
        position: 38.9057732308529,
        ascii: "(|(",
        unicode: "",
        mina: 80,
        monzo: [-2, 2, 1, 0, -1],
        id: 85,
    },
    {
        introducingLevel: "EXTREME",
        position: 39.3284893968078,
        ascii: "`(|(",
        unicode: "",
        mina: 81,
        monzo: [10, 0, 0, -1, -1, -1],
        id: 86,
    },
    {
        introducingLevel: "HIGH",
        position: 40.0043524607400,
        ascii: "~|\\",
        unicode: "",
        mina: 82,
        monzo: [-14, 6, 0, 0, 0, 0, 0, 0, 1],
        id: 87,
    },
    {
        introducingLevel: "EXTREME",
        position: 40.6361422395406,
        ascii: ",.//|",
        unicode: "",
        mina: 83,
        monzo: [-5, 2, -2, 1, 0, 1],
        id: 88,
    },
    {
        introducingLevel: "ULTRA",
        position: 41.0588584054956,
        ascii: ".//|",
        unicode: "",
        mina: 84,
        monzo: [7, 0, -3],
        id: 89,
    },
    {
        introducingLevel: "EXTREME",
        position: 41.4546142762478,
        ascii: "`.//|",
        unicode: "",
        mina: 85,
        monzo: [6, -7, 1, 1],
        id: 90,
    },
    {
        introducingLevel: "EXTREME",
        position: 41.9945056274446,
        ascii: ",,//|",
        unicode: "",
        mina: 86,
        monzo: [-6, 3, 0, -1, 0, 0, 1],
        id: 91,
    },
    {
        introducingLevel: "EXTREME",
        position: 42.5898630274750,
        ascii: ",//|",
        unicode: "",
        mina: 87,
        monzo: [-20, 10, -1, 1, 0, 1],
        id: 92,
    },
    {
        introducingLevel: "MEDIUM",
        position: 43.0125791934297,
        ascii: "//|",
        unicode: "",
        mina: 88,
        monzo: [-8, 8, -2],
        id: 93,
    },
    {
        introducingLevel: "EXTREME",
        position: 43.4083350641820,
        ascii: "`//|",
        unicode: "",
        mina: 89,
        monzo: [-9, 1, 2, 1],
        id: 94,
    },
    {
        introducingLevel: "EXTREME",
        position: 43.8310512301367,
        ascii: "``//|",
        unicode: "",
        mina: 90,
        monzo: [3, -1, 1, 0, 0, -1],
        id: 95,
    },
    {
        introducingLevel: "EXTREME",
        position: 44.4264086301669,
        ascii: ",'//|",
        unicode: "",
        mina: 91,
        monzo: [-11, 6, 0, 2, 0, 0, -1],
        id: 96,
    },
    {
        introducingLevel: "ULTRA",
        position: 44.9696465023956,
        ascii: "'//|",
        unicode: "",
        mina: 92,
        monzo: [-1, 1, 0, 0, 0, 1, 0, -1],
        id: 97,
    },
    {
        introducingLevel: "EXTREME",
        position: 45.5614202388245,
        ascii: ",,)//|",
        unicode: "",
        mina: 93,
        monzo: [0, -1, -2, 1, 1],
        id: 98,
    },
    {
        introducingLevel: "EXTREME",
        position: 45.7847720180709,
        ascii: ",)//|",
        unicode: "",
        mina: 94,
        monzo: [-12, 7, 2, 0, 0, -1],
        id: 99,
    },
    {
        introducingLevel: "HIGH",
        position: 46.3939444429262,
        ascii: ")//|",
        unicode: "",
        mina: 95,
        monzo: [5, -4, -1, 0, 0, 1],
        id: 100,
    },
    {
        introducingLevel: "EXTREME",
        position: 46.8166606088810,
        ascii: "`)//|",
        unicode: "",
        mina: 96,
        monzo: [17, -6, -2, -1],
        id: 101,
    },
    {
        introducingLevel: "EXTREME",
        position: 47.4340370239647,
        ascii: "``)//|",
        unicode: "",
        mina: 97,
        monzo: [-2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        id: 102,
    },
    {
        introducingLevel: "EXTREME",
        position: 47.9378571927136,
        ascii: ",,/|)",
        unicode: "",
        mina: 98,
        monzo: [-3, 5, -2, 0, 1, -1],
        id: 103,
    },
    {
        introducingLevel: "EXTREME",
        position: 48.3476652308603,
        ascii: ",/|)",
        unicode: "",
        mina: 99,
        monzo: [-10, 4, 0, 0, 0, 1],
        id: 104,
    },
    {
        introducingLevel: "MEDIUM",
        position: 48.7703813968149,
        ascii: "/|)",
        unicode: "",
        mina: 100,
        monzo: [2, 2, -1, -1],
        id: 105,
    },
    {
        introducingLevel: "EXTREME",
        position: 49.1661372675673,
        ascii: "`/|)",
        unicode: "",
        mina: 101,
        monzo: [1, -5, 3],
        id: 106,
    },
    {
        introducingLevel: "HIGH",
        position: 49.8949245016792,
        ascii: "(|~",
        unicode: "",
        mina: 102,
        monzo: [4, -2, 0, 0, 1, 0, 0, -1],
        id: 107,
    },
    {
        introducingLevel: "EXTREME",
        position: 50.3013860187944,
        ascii: ",'/|)",
        unicode: "",
        mina: 103,
        monzo: [-25, 12, 1, 0, 0, 1],
        id: 108,
    },
    {
        introducingLevel: "ULTRA",
        position: 50.7241021847494,
        ascii: "'/|)",
        unicode: "",
        mina: 104,
        monzo: [-13, 10, 0, -1],
        id: 109,
    },
    {
        introducingLevel: "EXTREME",
        position: 51.1198580555015,
        ascii: "`'/|)",
        unicode: "",
        mina: 105,
        monzo: [-14, 3, 4],
        id: 110,
    },
    {
        introducingLevel: "ULTRA",
        position: 51.3192224422099,
        ascii: "./|\\",
        unicode: "",
        mina: 105.57202549664000,
        monzo: [10, -7, -1, 0, 1],
        id: 111,
    },
    {
        introducingLevel: "EXTREME",
        position: 51.6824662702631,
        ascii: "`./|\\",
        unicode: "",
        mina: 106,
        monzo: [1, -1, 0, 0, -1, 0, 1],
        id: 112,
    },
    {
        introducingLevel: "EXTREME",
        position: 52.1743640002570,
        ascii: ",,/|\\",
        unicode: "",
        mina: 107,
        monzo: [7, -3, 1, 0, 0, 0, 0, 0, -1],
        id: 113,
    },
    {
        introducingLevel: "EXTREME",
        position: 52.7005398362484,
        ascii: ",/|\\",
        unicode: "",
        mina: 108,
        monzo: [-1, 4, -2, 1, -1],
        id: 114,
    },
    {
        introducingLevel: "MEDIUM",
        position: 53.2729432301441,
        ascii: "/|\\",
        unicode: "",
        mina: 109,
        monzo: [-5, 1, 0, 0, 1],
        id: 115,
    },
    {
        introducingLevel: "EXTREME",
        position: 53.6361870581975,
        ascii: "`/|\\",
        unicode: "",
        mina: 110,
        monzo: [-14, 7, 1, 0, -1, 0, 1],
        id: 116,
    },
    {
        introducingLevel: "EXTREME",
        position: 54.1054674342458,
        ascii: ",(/|",
        unicode: "",
        mina: 111,
        monzo: [0, -2, 1, -1, 0, 1],
        id: 117,
    },
    {
        introducingLevel: "HIGH",
        position: 54.5281836002006,
        ascii: "(/|",
        unicode: "",
        mina: 112,
        monzo: [12, -4, 0, -2],
        id: 118,
    },
    {
        introducingLevel: "EXTREME",
        position: 54.9644275357497,
        ascii: "`(/|",
        unicode: "",
        mina: 113,
        monzo: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        id: 119,
    },
    {
        introducingLevel: "ULTRA",
        position: 55.2266640180783,
        ascii: "'/|\\",
        unicode: "",
        mina: 113.45170990741700,
        monzo: [-20, 9, 1, 0, 1],
        id: 120,
    },
    {
        introducingLevel: "EXTREME",
        position: 55.6493801840332,
        ascii: "`'/|\\",
        unicode: "",
        mina: 114,
        monzo: [-8, 7, 0, -1, 1, -1],
        id: 121,
    },
    {
        introducingLevel: "EXTREME",
        position: 56.1850281035923,
        ascii: ",)/|\\",
        unicode: "",
        mina: 115,
        monzo: [-6, -2, 1, 1, 0, 0, 1],
        id: 122,
    },
    {
        introducingLevel: "HIGH",
        position: 56.4819043881346,
        ascii: ")/|\\",
        unicode: "",
        mina: 116,
        monzo: [-3, 4, 1, -2],
        id: 123,
    },
    {
        introducingLevel: "EXTREME",
        position: 57.2031016695774,
        ascii: "`)/|\\",
        unicode: "",
        mina: 117,
        monzo: [-8, 3, -1, 2],
        id: 124,
    },
    {
        introducingLevel: "EXTREME",
        position: 57.4999779541197,
        ascii: "``)/|\\",
        unicode: "",
        mina: 118,
        monzo: [-5, 9, -1, -1, 0, 0, -1],
        id: 125,
    },
    {
        introducingLevel: "EXTREME",
        position: 58.0356258736789,
        ascii: ",.(|)",
        unicode: "",
        mina: 119,
        monzo: [-3, 0, 0, 1, -1, 1],
        id: 126,
    },
    {
        introducingLevel: "ULTRA",
        position: 58.4583420396336,
        ascii: ".(|)",
        unicode: "",
        mina: 120,
        monzo: [9, -2, -1, 0, -1],
        id: 127,
    },
    {
        introducingLevel: "EXTREME",
        position: 58.7205785219622,
        ascii: ",|\\)",
        unicode: "",
        mina: 120.70032964758700,
        monzo: [-16, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        id: 128,
    },
    {
        introducingLevel: "HIGH",
        position: 59.1568224575114,
        ascii: "|\\)",
        unicode: "",
        mina: 121,
        monzo: [-23, 11, 0, 2],
        id: 129,
    },
    {
        introducingLevel: "EXTREME",
        position: 59.5795386234664,
        ascii: "`|\\)",
        unicode: "",
        mina: 122,
        monzo: [-11, 9, -1, 1, 0, -1],
        id: 130,
    },
    {
        introducingLevel: "EXTREME",
        position: 60.0488189995148,
        ascii: ",(|)",
        unicode: "",
        mina: 123,
        monzo: [3, 0, -1, 0, 1, 0, -1],
        id: 131,
    },
    {
        introducingLevel: "MEDIUM",
        position: 60.4120628275676,
        ascii: "(|)",
        unicode: "",
        mina: 124,
        monzo: [-6, 6, 0, 0, -1],
        id: 132,
    },
    {
        introducingLevel: "EXTREME",
        position: 60.9844662214638,
        ascii: "`(|)",
        unicode: "",
        mina: 125,
        monzo: [-10, 3, 2, -1, 1],
        id: 133,
    },
    {
        introducingLevel: "EXTREME",
        position: 61.5106420574550,
        ascii: "``(|)",
        unicode: "",
        mina: 126,
        monzo: [-18, 10, -1, 0, 0, 0, 0, 0, 1],
        id: 134,
    },
    {
        introducingLevel: "EXTREME",
        position: 62.0025397874486,
        ascii: ",'(|)",
        unicode: "",
        mina: 127,
        monzo: [-12, 8, 0, 0, 1, 0, -1],
        id: 135,
    },
    {
        introducingLevel: "ULTRA",
        position: 62.3657836155021,
        ascii: "'(|)",
        unicode: "",
        mina: 128,
        monzo: [-21, 14, 1, 0, -1],
        id: 136,
    },
    {
        introducingLevel: "EXTREME",
        position: 62.5651480022103,
        ascii: ",.(|\\",
        unicode: "",
        mina: 128.58001405836400,
        monzo: [3, 4, -4],
        id: 137,
    },
    {
        introducingLevel: "ULTRA",
        position: 62.9609038729626,
        ascii: ".(|\\",
        unicode: "",
        mina: 129,
        monzo: [2, -3, 0, 1],
        id: 138,
    },
    {
        introducingLevel: "EXTREME",
        position: 63.3836200389176,
        ascii: "`.(|\\",
        unicode: "",
        mina: 130,
        monzo: [14, -5, -1, 0, 0, -1],
        id: 139,
    },
    {
        introducingLevel: "HIGH",
        position: 63.7900815560325,
        ascii: "|\\\\",
        unicode: "",
        mina: 131,
        monzo: [-15, 9, 0, 0, -1, 0, 0, 1],
        id: 140,
    },
    {
        introducingLevel: "EXTREME",
        position: 64.5188687901447,
        ascii: ",(|\\",
        unicode: "",
        mina: 132,
        monzo: [-12, 12, -3],
        id: 141,
    },
    {
        introducingLevel: "MEDIUM",
        position: 64.9146246608968,
        ascii: "(|\\",
        unicode: "",
        mina: 133,
        monzo: [-13, 5, 1, 1],
        id: 142,
    },
    {
        introducingLevel: "EXTREME",
        position: 65.3373408268518,
        ascii: "`(|\\",
        unicode: "",
        mina: 134,
        monzo: [-1, 3, 0, 0, 0, -1],
        id: 143,
    },
    {
        introducingLevel: "EXTREME",
        position: 65.7471488649985,
        ascii: "``(|\\",
        unicode: "",
        mina: 135,
        monzo: [-8, 2, 2, 0, -1, 1],
        id: 144,
    },
    {
        introducingLevel: "EXTREME",
        position: 66.2509690337472,
        ascii: ",,)|\\\\",
        unicode: "",
        mina: 136,
        monzo: [-9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        id: 145,
    },
    {
        introducingLevel: "EXTREME",
        position: 66.8683454488310,
        ascii: ",)|\\\\",
        unicode: "",
        mina: 137,
        monzo: [-28, 13, 2, 1],
        id: 146,
    },
    {
        introducingLevel: "HIGH",
        position: 67.2910616147857,
        ascii: ")|\\\\",
        unicode: "",
        mina: 138,
        monzo: [-16, 11, 1, 0, 0, -1],
        id: 147,
    },
    {
        introducingLevel: "EXTREME",
        position: 67.9002340396410,
        ascii: "`)|\\\\",
        unicode: "",
        mina: 139,
        monzo: [1, 0, -2, 0, 0, 1],
        id: 148,
    },
    {
        introducingLevel: "EXTREME",
        position: 68.1235858189,
        ascii: "``)|\\\\",
        unicode: "",
        mina: 140,
        monzo: [-11, 8, 2, -1, -1],
        id: 149,
    },
]

module.exports = {
    COMMAS,
}

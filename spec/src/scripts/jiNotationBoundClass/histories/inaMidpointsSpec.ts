import {APOTOME, computePitchExpectation, Name, PitchExpectation} from "@sagittal/general"
import {EXTREME_EDA, InaMidpoint, JiNotationLevelId, MEDIUM_EDA} from "@sagittal/system"
import {computeInaMidpoints} from "../../../../../src/scripts/jiNotationBoundClass/histories/inaMidpoints"

describe("computeInaMidpoints", (): void => {
    it("works (e.g.) for the Medium JI notation level, only including midpoints below or at the max position                ", (): void => {
        const jiNotationLevel = JiNotationLevelId.MEDIUM

        const actual = computeInaMidpoints(jiNotationLevel)

        const expected = [
            {
                name: "0.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [0.5, MEDIUM_EDA],
                },
            },
            {
                name: "1.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [1.5, MEDIUM_EDA],
                },
            },
            {
                name: "2.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [2.5, MEDIUM_EDA],
                },
            },
            {
                name: "3.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [3.5, MEDIUM_EDA],
                },
            },
            {
                name: "4.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [4.5, MEDIUM_EDA],
                },
            },
            {
                name: "5.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [5.5, MEDIUM_EDA],
                },
            },
            {
                name: "6.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [6.5, MEDIUM_EDA],
                },
            },
            {
                name: "7.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [7.5, MEDIUM_EDA],
                },
            },
            {
                name: "8.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [8.5, MEDIUM_EDA],
                },
            },
            {
                name: "9.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [9.5, MEDIUM_EDA],
                },
            },
            {
                name: "10.5°21" as Name<InaMidpoint>,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [10.5, MEDIUM_EDA],
                },
            },
        ] as InaMidpoint[]
        expect(actual).toEqual(expected)
    })

    it("has the correct positions (this time checking the whole thing, the EXTREME level)", (): void => {
        const jiNotationLevel = JiNotationLevelId.EXTREME

        const actual = computeInaMidpoints(jiNotationLevel).map((inaMidpoint: InaMidpoint): PitchExpectation => {
            return computePitchExpectation(inaMidpoint.pitch)
        })

        const expected = [
            {
                pitch: {monzo: APOTOME.monzo, scaler: [0.5, EXTREME_EDA]},
                decimal: 1.0001409263122645,
                cents: 0.24395924046735554,
                monzo: [-0.023605150214592273, 0.015021459227467811],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [1.5, EXTREME_EDA]},
                decimal: 1.0004228385202685,
                cents: 0.7318777214016322,
                monzo: [-0.07081545064377683, 0.045064377682403435],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [2.5, EXTREME_EDA]},
                decimal: 1.000704830191567,
                cents: 1.2197962023360103,
                monzo: [-0.11802575107296137, 0.07510729613733906],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [3.5, EXTREME_EDA]},
                decimal: 1.0009869013485588,
                cents: 1.7077146832705086,
                monzo: [-0.16523605150214593, 0.10515021459227468],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [4.5, EXTREME_EDA]},
                decimal: 1.0012690520136482,
                cents: 2.195633164204596,
                monzo: [-0.2124463519313305, 0.1351931330472103],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [5.5, EXTREME_EDA]},
                decimal: 1.001551282209247,
                cents: 2.683551645139108,
                monzo: [-0.25965665236051505, 0.16523605150214593],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [6.5, EXTREME_EDA]},
                decimal: 1.001833591957772,
                cents: 3.171470126073555,
                monzo: [-0.3068669527896996, 0.19527896995708155],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [7.5, EXTREME_EDA]},
                decimal: 1.0021159812816476,
                cents: 3.6593886070080393,
                monzo: [-0.3540772532188841, 0.22532188841201717],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [8.5, EXTREME_EDA]},
                decimal: 1.0023984502033032,
                cents: 4.147307087942103,
                monzo: [-0.4012875536480687, 0.2553648068669528],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [9.5, EXTREME_EDA]},
                decimal: 1.002680998745176,
                cents: 4.635225568876638,
                monzo: [-0.4484978540772532, 0.2854077253218884],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [10.5, EXTREME_EDA]},
                decimal: 1.0029636269297082,
                cents: 5.123144049811203,
                monzo: [-0.4957081545064378, 0.315450643776824],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [11.5, EXTREME_EDA]},
                decimal: 1.003246334779349,
                cents: 5.611062530745551,
                monzo: [-0.5429184549356223, 0.34549356223175964],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [12.5, EXTREME_EDA]},
                decimal: 1.003529122316554,
                cents: 6.09898101168001,
                monzo: [-0.5901287553648069, 0.3755364806866953],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [13.5, EXTREME_EDA]},
                decimal: 1.0038119895637845,
                cents: 6.586899492614336,
                monzo: [-0.6373390557939914, 0.4055793991416309],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [14.5, EXTREME_EDA]},
                decimal: 1.0040949365435088,
                cents: 7.0748179735484635,
                monzo: [-0.684549356223176, 0.43562231759656656],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [15.5, EXTREME_EDA]},
                decimal: 1.0043779632782015,
                cents: 7.562736454482899,
                monzo: [-0.7317596566523605, 0.4656652360515021],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [16.5, EXTREME_EDA]},
                decimal: 1.004661069790343,
                cents: 8.050654935417182,
                monzo: [-0.778969957081545, 0.4957081545064378],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [17.5, EXTREME_EDA]},
                decimal: 1.0049442561024209,
                cents: 8.538573416351785,
                monzo: [-0.8261802575107297, 0.5257510729613735],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [18.5, EXTREME_EDA]},
                decimal: 1.005227522236928,
                cents: 9.026491897286212,
                monzo: [-0.8733905579399142, 0.555793991416309],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [19.5, EXTREME_EDA]},
                decimal: 1.0055108682163643,
                cents: 9.514410378220525,
                monzo: [-0.9206008583690987, 0.5858369098712446],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [20.5, EXTREME_EDA]},
                decimal: 1.0057942940632358,
                cents: 10.002328859154948,
                monzo: [-0.9678111587982833, 0.6158798283261803],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [21.5, EXTREME_EDA]},
                decimal: 1.0060777998000552,
                cents: 10.490247340089486,
                monzo: [-1.0150214592274678, 0.6459227467811159],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [22.5, EXTREME_EDA]},
                decimal: 1.0063613854493407,
                cents: 10.97816582102354,
                monzo: [-1.0622317596566524, 0.6759656652360515],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [23.5, EXTREME_EDA]},
                decimal: 1.0066450510336182,
                cents: 11.466084301958205,
                monzo: [-1.1094420600858368, 0.7060085836909871],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [24.5, EXTREME_EDA]},
                decimal: 1.0069287965754186,
                cents: 11.954002782892434,
                monzo: [-1.1566523605150214, 0.7360515021459227],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [25.5, EXTREME_EDA]},
                decimal: 1.00721262209728,
                cents: 12.441921263826854,
                monzo: [-1.203862660944206, 0.7660944206008584],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [26.5, EXTREME_EDA]},
                decimal: 1.0074965276217462,
                cents: 12.92983974476111,
                monzo: [-1.2510729613733904, 0.796137339055794],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [27.5, EXTREME_EDA]},
                decimal: 1.0077805131713684,
                cents: 13.417758225695737,
                monzo: [-1.298283261802575, 0.8261802575107295],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [28.5, EXTREME_EDA]},
                decimal: 1.0080645787687028,
                cents: 13.905676706629903,
                monzo: [-1.3454935622317596, 0.8562231759656652],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [29.5, EXTREME_EDA]},
                decimal: 1.0083487244363132,
                cents: 14.39359518756443,
                monzo: [-1.3927038626609443, 0.8862660944206009],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [30.5, EXTREME_EDA]},
                decimal: 1.0086329501967688,
                cents: 14.881513668498757,
                monzo: [-1.4399141630901289, 0.9163090128755366],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [31.5, EXTREME_EDA]},
                decimal: 1.0089172560726458,
                cents: 15.36943214943322,
                monzo: [-1.4871244635193135, 0.9463519313304722],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [32.5, EXTREME_EDA]},
                decimal: 1.0092016420865264,
                cents: 15.857350630367513,
                monzo: [-1.5343347639484977, 0.9763948497854076],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [33.5, EXTREME_EDA]},
                decimal: 1.0094861082609994,
                cents: 16.345269111301846,
                monzo: [-1.5815450643776823, 1.0064377682403434],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [34.5, EXTREME_EDA]},
                decimal: 1.0097706546186598,
                cents: 16.833187592236175,
                monzo: [-1.628755364806867, 1.036480686695279],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [35.5, EXTREME_EDA]},
                decimal: 1.010055281182109,
                cents: 17.321106073170565,
                monzo: [-1.6759656652360515, 1.0665236051502145],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [36.5, EXTREME_EDA]},
                decimal: 1.0103399879739552,
                cents: 17.809024554105214,
                monzo: [-1.7231759656652361, 1.0965665236051503],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [37.5, EXTREME_EDA]},
                decimal: 1.010624775016812,
                cents: 18.296943035039657,
                monzo: [-1.7703862660944207, 1.1266094420600858],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [38.5, EXTREME_EDA]},
                decimal: 1.0109096423333002,
                cents: 18.784861515973933,
                monzo: [-1.8175965665236054, 1.1566523605150216],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [39.5, EXTREME_EDA]},
                decimal: 1.0111945899460466,
                cents: 19.272779996908184,
                monzo: [-1.8648068669527897, 1.1866952789699572],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [40.5, EXTREME_EDA]},
                decimal: 1.0114796178776848,
                cents: 19.760698477842656,
                monzo: [-1.9120171673819741, 1.2167381974248925],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [41.5, EXTREME_EDA]},
                decimal: 1.0117647261508542,
                cents: 20.248616958776942,
                monzo: [-1.9592274678111588, 1.2467811158798283],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [42.5, EXTREME_EDA]},
                decimal: 1.0120499147882012,
                cents: 20.73653543971149,
                monzo: [-2.0064377682403434, 1.2768240343347639],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [43.5, EXTREME_EDA]},
                decimal: 1.0123351838123777,
                cents: 21.2244539206457,
                monzo: [-2.0536480686695278, 1.3068669527896994],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [44.5, EXTREME_EDA]},
                decimal: 1.0126205332460432,
                cents: 21.712372401580218,
                monzo: [-2.1008583690987126, 1.3369098712446352],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [45.5, EXTREME_EDA]},
                decimal: 1.0129059631118624,
                cents: 22.200290882514626,
                monzo: [-2.148068669527897, 1.3669527896995708],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [46.5, EXTREME_EDA]},
                decimal: 1.0131914734325072,
                cents: 22.688209363448973,
                monzo: [-2.195278969957082, 1.3969957081545066],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [47.5, EXTREME_EDA]},
                decimal: 1.0134770642306554,
                cents: 23.1761278443834,
                monzo: [-2.242489270386266, 1.4270386266094421],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [48.5, EXTREME_EDA]},
                decimal: 1.0137627355289915,
                cents: 23.664046325317745,
                monzo: [-2.2896995708154506, 1.4570815450643777],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [49.5, EXTREME_EDA]},
                decimal: 1.0140484873502063,
                cents: 24.151964806251932,
                monzo: [-2.336909871244635, 1.4871244635193133],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [50.5, EXTREME_EDA]},
                decimal: 1.014334319716997,
                cents: 24.639883287186308,
                monzo: [-2.38412017167382, 1.5171673819742488],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [51.5, EXTREME_EDA]},
                decimal: 1.0146202326520672,
                cents: 25.127801768120957,
                monzo: [-2.4313304721030042, 1.5472103004291846],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [52.5, EXTREME_EDA]},
                decimal: 1.0149062261781268,
                cents: 25.61572024905523,
                monzo: [-2.478540772532189, 1.5772532188841202],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [53.5, EXTREME_EDA]},
                decimal: 1.0151923003178922,
                cents: 26.103638729989704,
                monzo: [-2.5257510729613735, 1.6072961373390557],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [54.5, EXTREME_EDA]},
                decimal: 1.015478455094086,
                cents: 26.591557210923877,
                monzo: [-2.572961373390558, 1.6373390557939915],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [55.5, EXTREME_EDA]},
                decimal: 1.015764690529438,
                cents: 27.079475691858445,
                monzo: [-2.6201716738197427, 1.667381974248927],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [56.5, EXTREME_EDA]},
                decimal: 1.016051006646683,
                cents: 27.567394172792635,
                monzo: [-2.667381974248927, 1.6974248927038627],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [57.5, EXTREME_EDA]},
                decimal: 1.0163374034685637,
                cents: 28.05531265372725,
                monzo: [-2.7145922746781115, 1.7274678111587982],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [58.5, EXTREME_EDA]},
                decimal: 1.016623881017828,
                cents: 28.543231134661617,
                monzo: [-2.7618025751072963, 1.757510729613734],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [59.5, EXTREME_EDA]},
                decimal: 1.016910439317231,
                cents: 29.031149615595883,
                monzo: [-2.8090128755364807, 1.7875536480686696],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [60.5, EXTREME_EDA]},
                decimal: 1.0171970783895339,
                cents: 29.51906809653022,
                monzo: [-2.856223175965665, 1.817596566523605],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [61.5, EXTREME_EDA]},
                decimal: 1.0174837982575045,
                cents: 30.00698657746486,
                monzo: [-2.90343347639485, 1.847639484978541],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [62.5, EXTREME_EDA]},
                decimal: 1.0177705989439165,
                cents: 30.494905058399294,
                monzo: [-2.950643776824034, 1.8776824034334763],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [63.5, EXTREME_EDA]},
                decimal: 1.0180574804715505,
                cents: 30.982823539333438,
                monzo: [-2.997854077253219, 1.907725321888412],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [64.5, EXTREME_EDA]},
                decimal: 1.0183444428631938,
                cents: 31.470742020268002,
                monzo: [-3.045064377682403, 1.9377682403433476],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [65.5, EXTREME_EDA]},
                decimal: 1.0186314861416392,
                cents: 31.95866050120219,
                monzo: [-3.092274678111588, 1.9678111587982834],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [66.5, EXTREME_EDA]},
                decimal: 1.018918610329687,
                cents: 32.44657898213676,
                monzo: [-3.1394849785407724, 1.9978540772532187],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [67.5, EXTREME_EDA]},
                decimal: 1.0192058154501429,
                cents: 32.93449746307097,
                monzo: [-3.186695278969957, 2.0278969957081547],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [68.5, EXTREME_EDA]},
                decimal: 1.01949310152582,
                cents: 33.422415944005614,
                monzo: [-3.2339055793991416, 2.0579399141630903],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [69.5, EXTREME_EDA]},
                decimal: 1.0197804685795369,
                cents: 33.91033442494,
                monzo: [-3.281115879828326, 2.0879828326180254],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [70.5, EXTREME_EDA]},
                decimal: 1.020067916634119,
                cents: 34.39825290587417,
                monzo: [-3.328326180257511, 2.1180257510729614],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [71.5, EXTREME_EDA]},
                decimal: 1.020355445712399,
                cents: 34.8861713868086,
                monzo: [-3.375536480686695, 2.148068669527897],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [72.5, EXTREME_EDA]},
                decimal: 1.0206430558372144,
                cents: 35.37408986774298,
                monzo: [-3.42274678111588, 2.1781115879828326],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [73.5, EXTREME_EDA]},
                decimal: 1.0209307470314104,
                cents: 35.86200834867739,
                monzo: [-3.4699570815450644, 2.208154506437768],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [74.5, EXTREME_EDA]},
                decimal: 1.0212185193178382,
                cents: 36.34992682961191,
                monzo: [-3.5171673819742493, 2.238197424892704],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [75.5, EXTREME_EDA]},
                decimal: 1.0215063727193554,
                cents: 36.83784531054626,
                monzo: [-3.5643776824034337, 2.2682403433476397],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [76.5, EXTREME_EDA]},
                decimal: 1.021794307258826,
                cents: 37.3257637914805,
                monzo: [-3.6115879828326176, 2.298283261802575],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [77.5, EXTREME_EDA]},
                decimal: 1.022082322959121,
                cents: 37.813682272415065,
                monzo: [-3.6587982832618025, 2.328326180257511],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [78.5, EXTREME_EDA]},
                decimal: 1.0223704198431167,
                cents: 38.30160075334927,
                monzo: [-3.706008583690987, 2.3583690987124464],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [79.5, EXTREME_EDA]},
                decimal: 1.022658597933697,
                cents: 38.78951923428351,
                monzo: [-3.7532188841201717, 2.388412017167382],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [80.5, EXTREME_EDA]},
                decimal: 1.0229468572537521,
                cents: 39.2774377152182,
                monzo: [-3.800429184549356, 2.4184549356223175],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [81.5, EXTREME_EDA]},
                decimal: 1.0232351978261778,
                cents: 39.76535619615257,
                monzo: [-3.847639484978541, 2.4484978540772535],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [82.5, EXTREME_EDA]},
                decimal: 1.023523619673877,
                cents: 40.25327467708696,
                monzo: [-3.8948497854077253, 2.4785407725321886],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [83.5, EXTREME_EDA]},
                decimal: 1.0238121228197592,
                cents: 40.741193158021325,
                monzo: [-3.94206008583691, 2.5085836909871246],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [84.5, EXTREME_EDA]},
                decimal: 1.0241007072867399,
                cents: 41.22911163895559,
                monzo: [-3.9892703862660945, 2.53862660944206],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [85.5, EXTREME_EDA]},
                decimal: 1.0243893730977414,
                cents: 41.71703011988998,
                monzo: [-4.0364806866952785, 2.5686695278969953],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [86.5, EXTREME_EDA]},
                decimal: 1.0246781202756923,
                cents: 42.20494860082436,
                monzo: [-4.083690987124464, 2.5987124463519313],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [87.5, EXTREME_EDA]},
                decimal: 1.0249669488435278,
                cents: 42.69286708175889,
                monzo: [-4.130901287553648, 2.628755364806867],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [88.5, EXTREME_EDA]},
                decimal: 1.0252558588241891,
                cents: 43.18078556269297,
                monzo: [-4.1781115879828326, 2.6587982832618025],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [89.5, EXTREME_EDA]},
                decimal: 1.0255448502406248,
                cents: 43.668704043627436,
                monzo: [-4.225321888412017, 2.688841201716738],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [90.5, EXTREME_EDA]},
                decimal: 1.0258339231157891,
                cents: 44.156622524561946,
                monzo: [-4.272532188841202, 2.718884120171674],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [91.5, EXTREME_EDA]},
                decimal: 1.026123077472643,
                cents: 44.6445410054965,
                monzo: [-4.319742489270387, 2.7489270386266096],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [92.5, EXTREME_EDA]},
                decimal: 1.0264123133341538,
                cents: 45.13245948643063,
                monzo: [-4.36695278969957, 2.7789699570815447],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [93.5, EXTREME_EDA]},
                decimal: 1.0267016307232957,
                cents: 45.62037796736499,
                monzo: [-4.414163090128755, 2.8090128755364807],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [94.5, EXTREME_EDA]},
                decimal: 1.026991029663049,
                cents: 46.10829644829936,
                monzo: [-4.46137339055794, 2.8390557939914163],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [95.5, EXTREME_EDA]},
                decimal: 1.0272805101764004,
                cents: 46.59621492923388,
                monzo: [-4.508583690987124, 2.869098712446352],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [96.5, EXTREME_EDA]},
                decimal: 1.0275700722863434,
                cents: 47.084133410168235,
                monzo: [-4.555793991416309, 2.8991416309012874],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [97.5, EXTREME_EDA]},
                decimal: 1.027859716015878,
                cents: 47.57205189110277,
                monzo: [-4.603004291845494, 2.9291845493562234],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [98.5, EXTREME_EDA]},
                decimal: 1.0281494413880101,
                cents: 48.05997037203702,
                monzo: [-4.650214592274678, 2.959227467811159],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [99.5, EXTREME_EDA]},
                decimal: 1.028439248425753,
                cents: 48.54788885297158,
                monzo: [-4.697424892703863, 2.9892703862660945],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [100.5, EXTREME_EDA]},
                decimal: 1.0287291371521254,
                cents: 49.035807333905815,
                monzo: [-4.744635193133047, 3.01931330472103],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [101.5, EXTREME_EDA]},
                decimal: 1.0290191075901536,
                cents: 49.52372581484015,
                monzo: [-4.791845493562231, 3.0493562231759657],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [102.5, EXTREME_EDA]},
                decimal: 1.0293091597628696,
                cents: 50.011644295774545,
                monzo: [-4.839055793991417, 3.0793991416309012],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [103.5, EXTREME_EDA]},
                decimal: 1.0295992936933123,
                cents: 50.49956277670887,
                monzo: [-4.8862660944206, 3.109442060085837],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [104.5, EXTREME_EDA]},
                decimal: 1.0298895094045268,
                cents: 50.987481257643275,
                monzo: [-4.9334763948497855, 3.139484978540773],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [105.5, EXTREME_EDA]},
                decimal: 1.0301798069195651,
                cents: 51.475399738577806,
                monzo: [-4.98068669527897, 3.169527896995708],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [106.5, EXTREME_EDA]},
                decimal: 1.0304701862614851,
                cents: 51.96331821951206,
                monzo: [-5.027896995708154, 3.199570815450644],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [107.5, EXTREME_EDA]},
                decimal: 1.030760647453352,
                cents: 52.451236700446636,
                monzo: [-5.075107296137339, 3.2296137339055795],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [108.5, EXTREME_EDA]},
                decimal: 1.0310511905182365,
                cents: 52.93915518138092,
                monzo: [-5.122317596566523, 3.2596566523605146],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [109.5, EXTREME_EDA]},
                decimal: 1.0313418154792167,
                cents: 53.42707366231529,
                monzo: [-5.169527896995708, 3.2896995708154506],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [110.5, EXTREME_EDA]},
                decimal: 1.0316325223593767,
                cents: 53.91499214324966,
                monzo: [-5.216738197424893, 3.319742489270386],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [111.5, EXTREME_EDA]},
                decimal: 1.0319233111818076,
                cents: 54.40291062418421,
                monzo: [-5.263948497854077, 3.3497854077253217],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [112.5, EXTREME_EDA]},
                decimal: 1.0322141819696062,
                cents: 54.890829105118605,
                monzo: [-5.3111587982832615, 3.3798283261802573],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [113.5, EXTREME_EDA]},
                decimal: 1.0325051347458765,
                cents: 55.37874758605276,
                monzo: [-5.358369098712447, 3.4098712446351933],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [114.5, EXTREME_EDA]},
                decimal: 1.0327961695337289,
                cents: 55.866666066987264,
                monzo: [-5.405579399141631, 3.439914163090129],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [115.5, EXTREME_EDA]},
                decimal: 1.0330872863562799,
                cents: 56.35458454792142,
                monzo: [-5.452789699570816, 3.4699570815450644],
            },
            {
                pitch: {monzo: APOTOME.monzo, scaler: [116.5, EXTREME_EDA]},  // 1 / 2
                decimal: 1.0333784852366532,
                cents: 56.84250302885589,
                monzo: [-5.5, 3.5],
            },
        ] as PitchExpectation[]
        expect(actual).toEqual(expected)
    })
})

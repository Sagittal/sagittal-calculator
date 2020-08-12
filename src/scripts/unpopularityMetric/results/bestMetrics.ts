import { Combination } from "../../../general"
import { SumOfSquares } from "../bestMetric"
import { Parameter, Submetric } from "../sumOfSquares"

// Metric to beat: SoPF>3, or sopfr
const sopfgtt = {
    sumOfSquares: 0.014206086754420309 as SumOfSquares,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
        },
    ] as Combination<Submetric>,
}

//

// Dave's log-α's (best SoS is 0.00613) some still with prime limit (s)
// Mon Jun 29, 2020 7:07 pm
// http://forum.sagittal.org/viewtopic.php?p=1944#p1944
/*
α		    w (your d)	    k		    y		    s		    SoS
3.956349187	-0.619217685	0.638243216	0.883788532	0.020609268	0.006160415
3		    -0.774993871	0.638278131	0.883803886	0.025836729	0.006160415
2.718281828	-0.851411926	0.638277637	0.883804124	0.028385603	0.006160415
3.018652175	-0.904768274	0.618447635	0.874496057	0		    0.007488211
3		    -0.909855998	0.618460475	0.874485023	0		    0.007488211
3		    -1		        0.67017005	0.955080391	0		    0.008473958
 */
const withPrimeLimit = {
    sumOfSquares: 0.006127818362694095,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.638243216,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 3.956349187,
            [ Parameter.W ]: -0.619217685,
            [ Parameter.Y ]: 0.883788532,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.MAX ]: true,
            [ Parameter.WITHOUT_REPETITION ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.020609268,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Douglas's 8-chunk lowest-ever 0.00426 SoS
// Mon Jun 29, 2020 7:36 pm
// http://forum.sagittal.org/viewtopic.php?p=1946#p1946
const lowestEver = {
    sumOfSquares: 0.004260809896143936,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.038,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 1.994,
            [ Parameter.Y ]: 0.455,
            [ Parameter.W ]: -2.08,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.577,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Douglas's response to Dave's ask for k vs. c wrt my lowest ever
// Mon Jun 29, 2020 10:44 pm
// http://forum.sagittal.org/viewtopic.php?p=1951#p1951
// 0.00473
const likeLowestEverButWithZeroK = {
    sumOfSquares: 0.004732527573659666,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 1.753,
            [ Parameter.Y ]: 0.473,
            [ Parameter.W ]: -2.62,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.723,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}
// 0.00622
const likeLowestEverButWithZeroC = {
    sumOfSquares: 0.006222012568306695,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.635,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 1.43,
            [ Parameter.Y ]: 0.85,
            [ Parameter.W ]: -2.77,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
    ],
}

//

// Dave's "2-chunk" 0.00651 mcopfr claimed 0.00651 but I find 0.00721
// Wed Jul 01, 2020 12:46 am
// http://forum.sagittal.org/viewtopic.php?p=1962#p1962
const notTwoChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.007205996505476978,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -1.453,
            [ Parameter.Y ]: 0.863,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.J_AS_COEFFICIENT ]: 0,
            [ Parameter.COUNT ]: true,
            [ Parameter.MODIFIED_COUNT ]: true,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Dave's "3-chunk" mcopfr claimed 0.00614 but I find 0.00740
// Wed Jul 01, 2020 2:46 am
// http://forum.sagittal.org/viewtopic.php?p=1964#p1964
const notThreeChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.0073967019283224696,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -1.431,
            [ Parameter.Y ]: 0.851,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.J_AS_COEFFICIENT ]: 0,
            [ Parameter.COUNT ]: true,
            [ Parameter.MODIFIED_COUNT ]: true,
            [ Parameter.Y ]: 1.332,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Dave's "4-chunk" mcopfr claimed 0.00660 but I find 0.00838
// Wed Jul 01, 2020 7:07 pm
// http://forum.sagittal.org/viewtopic.php?p=1965#p1965
/*
requires this hack to be added to `submetricAntivotes.js` to handle the "h" parameter
            if (index !== 2 && modifiedCount === true) {
                termUnpopularity = termUnpopularity * 0.947
            }
 */
const notFourChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.008200108887640998,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -1.44,
            [ Parameter.Y ]: 0.86,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.J_AS_COEFFICIENT ]: 0,
            [ Parameter.COUNT ]: true,
            [ Parameter.MODIFIED_COUNT ]: true,
            [ Parameter.Y ]: 1.331,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Douglas's 1-submetrics
// Thu Jul 02, 2020 9:21 pm
// http://forum.sagittal.org/viewtopic.php?p=1978#p1978
// 1-submetric 9-chunk 0.00461
// const oneSubmetricNineChunk = {
//     sumOfSquares: 0.0046106446887802695,
//     submetrics: [
//         {
//             [Parameter.K_AS_COEFFICIENT]: 0.5920238095238095,              // ≈3/5
//             [Parameter.A_AS_LOGARITHM_BASE]: 2.0107142857142857,              // ≈2
//             [Parameter.Y]: 0.455,                           // ≈√
//             [Parameter.W]: -2.341928094887362,              // ≈log2(5)
//             [Parameter.X]: 3.069642857142857,               // ≈3
//             [Parameter.T]: 1.658452380952381,               // ≈5/3
//             [Parameter.Y]: 1.6476190476190475,              // ≈5/3
//             [ Parameter.USE_NUMINATOR ]: true,
//             [ Parameter.SUM ]: true,
//         },
//     ],
// }
// Golden 1-submetric 8-chunk 0.00468
// const goldenOneSubmetricEightChunk = {
//     sumOfSquares: 0.0046831807461307174,
//     submetrics: [
//         {
//             [Parameter.K_AS_COEFFICIENT]: 0.5970238095238095,
//             [Parameter.A_AS_LOGARITHM_BASE]: 2.0125,
//             [Parameter.Y]: 1.6226190476190474,                          // ≈φ
//             [Parameter.W]: -2.334428094887362,
//             [Parameter.X]: 3.069642857142857,
//             [Parameter.T]: 1.618452380952381,                           // ≈φ
//             [ Parameter.USE_NUMINATOR ]: true,
//             [ Parameter.SUM ]: true,
//         },
//     ],
// }
// 1-submetric 7-chunk 0.00565 -- original xwyks
const oneSubmetricSevenChunk = {
    sumOfSquares: 0.005646141896541448,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.6328571428571429,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 1.5728571428571425,
            [ Parameter.W ]: -3.0571428571428574,
            [ Parameter.Y ]: 0.8571428571428571,
            [ Parameter.X ]: 1.607142857142857,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
    ],
}
// 1-submetric 6-chunk 0.00947 (claimed to be near 0.00652, so these must have been approximations)
const oneSubmetricSixChunk = {
    sumOfSquares: 0.00946539412309218,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.6,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 3,
            [ Parameter.W ]: -1,
            [ Parameter.Y ]: 0.8766666666666667,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
    ],
}

//

// Dave's similar to my lowest ever w/ exact a = 2 base 0.00445
// Fri Jul 03, 2020 12:24 am
// http://forum.sagittal.org/viewtopic.php?p=1983#p1983
const almostLowestEverButWithExactA = {
    sumOfSquares: 0.004455901926266847,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.038,
            [ Parameter.Y ]: 0.455,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -2.09,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.579,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Dave's less fragile minimum 0.00559
// Fri Jul 03, 2020 5:28 am
// http://forum.sagittal.org/viewtopic.php?p=1984#p1984
const lessFragileMinimum = {
    sumOfSquares: 0.005591116232258028,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.213895488,
            [ Parameter.Y ]: 0.642099097,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -2.048657352,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.551650547,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Dave's sanity check claimed 0.008325554
// Sat Jul 04, 2020 3:17 am
// http://forum.sagittal.org/viewtopic.php?p=1995#p1995
const sanityCheck = {
    sumOfSquares: 0.00832555386875032,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.632,
            [ Parameter.Y ]: 0.858,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -1.415,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
    ],
}

//

// Douglas's first run of the recursive automatic solver turned this up quick, 0.00406 (now known as cwyks)
// Sun Jul 05, 2020 10:29 pm
// http://forum.sagittal.org/viewtopic.php?p=2004#p2004
const cwyks = {
    sumOfSquares: 0.004059521951422367,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.1796875,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2.0234375,
            [ Parameter.Y ]: 0.4921875,
            [ Parameter.W ]: -1.986328125,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.5615234375,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Douglas's first attempt at lowest 2- and 3-chunk - the 3-chunk one was claimed to have 0.008291286 but Dave rejected that saying it actually has 0.018902286543139548, which I could not recreate at the time but then later recreated
// Thu Jul 09, 2020 9:21 am
// http://forum.sagittal.org/viewtopic.php?p=2036#p2036
const k = {
    sumOfSquares: 0.0094912434848982,
    submetrics: [
        {
            [ Parameter.K_AS_COEFFICIENT ]: 0.7901234567901236,
            [ Parameter.SUM ]: true,
        },
    ],
}
const firstAttemptAtLowestThreeChunk = {
    sumOfSquares: 0.018902286543139548,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.K_AS_COEFFICIENT ]: -1.11111111111111111,
        },
    ],
}

//

// Dave's maybe-minimum 0.007085843
// Thu Jul 09, 2020 7:37 pm
// http://forum.sagittal.org/viewtopic.php?p=2038#p2038
const maybeMinimum = {
    sumOfSquares: 0.007085843283776648,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.Y ]: 0.839,
            [ Parameter.W ]: -1.465,
            [ Parameter.B ]: -1.867,
        },
    ],
}

//

// Dave's b and u: SoS 0.00659
// Fri Jul 10, 2020 2:57 am
// http://forum.sagittal.org/viewtopic.php?p=2039#p2039
const bAndU = {
    sumOfSquares: 0.006594234470005811,
    submetrics: [
        {
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.Y ]: 0.861,
            [ Parameter.W ]: -2.656,
            [ Parameter.B ]: -2.829,
            [ Parameter.X ]: 4.471,
            [ Parameter.U ]: 3.850,
            [ Parameter.SUM ]: true,
        },
    ],
}

// Dave's improved maybe minimum 0.006282743
// Sat Jul 11, 2020 1:30 am
// http://forum.sagittal.org/viewtopic.php?p=2044#p2044
const improvedMaybeMinimum = {
    sumOfSquares: 0.0062827430776347054,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.Y ]: 0.8568,
            [ Parameter.W ]: -1.4457,
            [ Parameter.B ]: -1.8630,
        },
    ],
}

//

// Dave's improved 4-param 6-chunk 0.006700181
// Sat Jul 11, 2020 9:04 pm
// http://forum.sagittal.org/viewtopic.php?p=2052#p2052
const improvedFourParamSixChunk = {
    sumOfSquares: 0.006700180663569215,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.J_AS_COEFFICIENT ]: 0.6385,
            [ Parameter.K_AS_COEFFICIENT ]: -1.6518,
        },
        {
            [ Parameter.SUM ]: true,
            [ Parameter.Y ]: 0.8023,
            [ Parameter.K_AS_COEFFICIENT ]: 1.5289,
        },
    ],
}

//

// Dave's improved 4-param 5-chunk 0.006926345
// Sat Jul 11, 2020 9:04 pm
// http://forum.sagittal.org/viewtopic.php?p=2052#p2052
const improvedFourParamFiveChunk = {
    sumOfSquares: 0.006926345329260278,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.J_AS_COEFFICIENT ]: 0.6845,
            [ Parameter.K_AS_COEFFICIENT ]: -0.3909,
        },
        {
            [ Parameter.SUM ]: true,
            [ Parameter.Y ]: 0.8006,
        },
    ],
}

//

// Douglas's second attempt at lowest 2-chunk
// Sun Jul 12, 2020 11:27 pm
// http://forum.sagittal.org/viewtopic.php?p=2064#p2064
const j = {
    sumOfSquares: 0.00910097075832883,
    submetrics: [
        {
            [ Parameter.J_AS_POWER_EXPONENT ]: 1.0954773869346734,
            [ Parameter.SUM ]: true,
        },
    ],
}
const secondAttemptAtLowestThreeChunk = {
    sumOfSquares: 0.008543707253092303,
    submetrics: [
        {
            [ Parameter.Y ]: 0.96661101836394,
            [ Parameter.J_AS_COEFFICIENT ]: 1.407035175879397,
            [ Parameter.SUM ]: true,
        },
    ],
}

// Dave's hyg 0.006372713
// Mon Jul 13, 2020 2:04 am
// http://forum.sagittal.org/viewtopic.php?p=2065#p2065
const hyg = {
    sumOfSquares: 0.006372712986254571,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.J_AS_COEFFICIENT ]: 0.692773045,
            [ Parameter.K_AS_COEFFICIENT ]: -0.245303445,
        },
        {
            [ Parameter.SUM ]: true,
            [ Parameter.Y ]: 0.827031908,
        },
    ],
}

//

// Dave's double-improved maybe minimum, now called wyb 0.006057649, and also wyk
// Mon Jul 13, 2020 6:38 pm
// http://forum.sagittal.org/viewtopic.php?p=2071#p2071
const wyb = {
    sumOfSquares: 0.006057649171028775,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.Y ]: 0.865618551,
            [ Parameter.W ]: -1.472615144,
            [ Parameter.B ]: -2.02634047,
        },
    ],
}
const wyk = {
    sumOfSquares: 0.007460443456132457,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.Y ]: 0.861239895,
            [ Parameter.W ]: -1.448663086,
            [ Parameter.K_AS_COEFFICIENT ]: 0.683944325,
        },
    ],
}

//

// Dave's cwyk
// Mon Jul 13, 2020 11:57 pm
// http://forum.sagittal.org/viewtopic.php?p=2072#p2072
const cwyk = {
    sumOfSquares: 0.007300195,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.K_AS_COEFFICIENT ]: 0.74710179,
            [ Parameter.Y ]: 0.903870452,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: -0.352088418,
        },
    ],
}

//

// Dave's wyks 0.006406639
// Tue Jul 14, 2020 2:47 am
// http://forum.sagittal.org/viewtopic.php?p=2073#p2073
const wyks = {
    sumOfSquares: 0.006406638879234451,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.Y ]: 0.86461511,
            [ Parameter.W ]: -1.481526766,
            [ Parameter.USE_NUMINATOR ]: true,
            [ Parameter.K_AS_COEFFICIENT ]: 0.581696884,
        },
    ],
}

//

// Dave's xwyks 0.00553892
// Tue Jul 14, 2020 4:36 am
// http://forum.sagittal.org/viewtopic.php?p=2074#p2074
const xwyks = {
    sumOfSquares: 0.0055389201901046405,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.K_AS_COEFFICIENT ]: 0.612396631,
            [ Parameter.W ]: -1.94655685,
            [ Parameter.Y ]: 0.843016878,
            [ Parameter.X ]: 1.51639317,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ],
}

//

// Dave's wb: SoS 0.007345361
// Tue Jul 28, 2020 12:36 am
// http://forum.sagittal.org/viewtopic.php?p=2098#p2098
const wb = {
    sumOfSquares: 0.007345361244736918,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -1.645808649,
            [ Parameter.B ]: -2.043765116,
        },
    ],
}

//

// Douglas's Solver - 3-chunk 0.007099822
// Fri Jul 31, 2020 9:01 am
// http://forum.sagittal.org/viewtopic.php?p=2113#p2113
const laj = {
    sumOfSquares: 0.007099822284635193,
    submetrics: [
        {
            [ Parameter.WITHOUT_REPETITION ]: true,
            [ Parameter.MAX ]: true,
        },
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 1.3333333333333333,
            [ Parameter.J_AS_COEFFICIENT ]: 1.3,
        },
    ],
}

//

// Dave's kl 0.006970591
// Fri Jul 31, 2020 4:56 pm
// http://forum.sagittal.org/viewtopic.php?p=2117#p2117
const kl = {
    sumOfSquares: 0.006970590852577876,
    submetrics: [
        {
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.319583198,
            [ Parameter.WITHOUT_REPETITION ]: true,
            [ Parameter.MAX ]: true,
        },
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.K_AS_COEFFICIENT ]: 0.722866218,
        },
    ],
}

//

// Douglas's solver 3-chunk and 4-chunk bests
// Sun Aug 09, 2020 4:54 pm
// http://forum.sagittal.org/viewtopic.php?p=2170#p2170
const ak = {
    sumOfSquares: 0.007593746935708874,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.K_AS_COEFFICIENT ]: 0.7981481481481482,
            [ Parameter.A_AS_POWER_EXPONENT ]: 2.0717827997489016,
        },
    ],
}
const kj = {
    sumOfSquares: 0.007969499349681162,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.K_AS_POWER_EXPONENT ]: 1.4690207156308848,
            [ Parameter.J_AS_POWER_EXPONENT ]: 1.3673258003766477,
        },
    ],
}
const lak = {
    sumOfSquares: 0.0062107447110803975,
    submetrics: [
        {
            [ Parameter.WITHOUT_REPETITION ]: true,
            [ Parameter.MAX ]: true,
            [ Parameter.A_AS_POWER_EXPONENT ]: 0.6165725047080979,
        },
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.K_AS_POWER_EXPONENT ]: 0.5242937853107347,
            [ Parameter.A_AS_POWER_EXPONENT ]: 0.6165725047080979,
        },
    ],
    spreadDynamicParameters: [
        Parameter.A_AS_POWER_EXPONENT,
    ],
}
const wab = {
    sumOfSquares: 0.0068022046202959605,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.A_AS_POWER_EXPONENT ]: 2.0791902071563086,
            [ Parameter.W ]: -0.22090395480226008,
            [ Parameter.B ]: -1.9497175141242935,
        },
    ],
}
const aux = {
    sumOfSquares: 0.006815231749228219,
    submetrics: [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.U ]: -1.5128478761247126,
            [ Parameter.A_AS_POWER_EXPONENT ]: 1.9713224523958988,
            [ Parameter.X ]: -0.4582444025946853,
        },
    ],
}

//

// Douglas's solver 5-chunk best
// Tue Aug 11, 2020 9:25 am
// http://forum.sagittal.org/viewtopic.php?p=2191#p2191
const wbl = {
    sumOfSquares: 0.003917415755348894,
    submetrics: [
        {
            [ Parameter.WITHOUT_REPETITION ]: true,
            [ Parameter.MAX ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
        },
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -0.9436666666666668,
            [ Parameter.B ]: -1.6245833333333335,
        },
    ],
}

//

// We found it?
// Tue Aug 11, 2020 6:19 pm
// http://forum.sagittal.org/viewtopic.php?p=2194#p2194
const wybl = {
    sumOfSquares: 0.0032401250853104067,
    submetrics: [
        {
            [ Parameter.WITHOUT_REPETITION ]: true,
            [ Parameter.MAX ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
        },
        {
            [ Parameter.SUM ]: true,
            [ Parameter.A_AS_LOGARITHM_BASE ]: 2,
            [ Parameter.W ]: -0.6722238433719913,
            [ Parameter.B ]: -1.4491200586108,
            [ Parameter.Y ]: 0.8749588677477244,
        },
    ],
}

export {
    sopfgtt,

    withPrimeLimit,

    lowestEver,
    likeLowestEverButWithZeroK,
    likeLowestEverButWithZeroC,

    notTwoChunkByCurrentDefinitionMcopfr,
    notThreeChunkByCurrentDefinitionMcopfr,
    notFourChunkByCurrentDefinitionMcopfr,

    // oneSubmetricNineChunk,
    // goldenOneSubmetricEightChunk,
    oneSubmetricSevenChunk,
    oneSubmetricSixChunk,

    almostLowestEverButWithExactA,

    lessFragileMinimum,

    sanityCheck,

    cwyks,

    k,
    firstAttemptAtLowestThreeChunk,

    maybeMinimum,

    bAndU,

    improvedMaybeMinimum,

    improvedFourParamSixChunk,

    improvedFourParamFiveChunk,

    j,
    secondAttemptAtLowestThreeChunk,

    hyg,

    wyb,
    wyk,

    wyks,

    xwyks,

    wb,

    laj,

    kl,

    ak,
    kj,
    aux,
    wab,
    lak,

    wbl,

    wybl,
}

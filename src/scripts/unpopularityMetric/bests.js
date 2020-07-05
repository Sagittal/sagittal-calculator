const {PARAMETER, USE_AS, SUBMETRIC_TYPE, NUMERIC_BOOLEAN} = require("./constants")


//


// Dave's log-α's (best is 0.00613) some still with prime limit (s)
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
const withPrimeLimit = [
    {
        [PARAMETER.K]: 0.638243216,
        [PARAMETER.A]: 3.956349187,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -0.619217685,
        [PARAMETER.Y]: 0.883788532,
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
        [PARAMETER.WEIGHT]: 0.020609268,
    },
]


//


// Douglas's 7-parameter lowest-ever 0.00426 SoS
// Mon Jun 29, 2020 7:36 pm
// http://forum.sagittal.org/viewtopic.php?p=1946#p1946
const lowestEver = [
    {
        [PARAMETER.K]: 0.038,
        [PARAMETER.A]: 1.994,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.Y]: 0.455,
        [PARAMETER.W]: -2.08,
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.WEIGHT]: 0.577,
    },
]


//


// Douglas's response to Dave's ask for k vs. c wrt my lowest ever
// Mon Jun 29, 2020 10:44 pm
// http://forum.sagittal.org/viewtopic.php?p=1951#p1951
// 0.00473
const likeLowestEverButWithZeroK = [
    {
        [PARAMETER.K]: 0,
        [PARAMETER.A]: 1.753,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.Y]: 0.473,
        [PARAMETER.W]: -2.620,
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.WEIGHT]: 0.723,
    },
]
// 0.00622
const likeLowestEverButWithZeroC = [
    {
        [PARAMETER.K]: 0.635,
        [PARAMETER.A]: 1.430,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.Y]: 0.850,
        [PARAMETER.W]: -2.770,
    },
]

//


// Dave's "2-parameter" 0.00651 mcopfr claimed 0.00651 but I find 0.00721
// Wed Jul 01, 2020 12:46 am
// http://forum.sagittal.org/viewtopic.php?p=1962#p1962
const notTwoParameterByCurrentDefinitionMcopfr = [
    {
        [PARAMETER.K]: 0,
        [PARAMETER.A]: 2,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -1.453,
        [PARAMETER.Y]: 0.863,
    },
    {
        [PARAMETER.J]: 0,
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.MODIFIED_COUNT]: NUMERIC_BOOLEAN.TRUE,
    },
]


//


// Dave's "3-parameter" mcopfr claimed 0.00614 but I find 0.00740
// Wed Jul 01, 2020 2:46 am
// http://forum.sagittal.org/viewtopic.php?p=1964#p1964
const notThreeParameterByCurrentDefinitionMcopfr = [
    {
        [PARAMETER.K]: 0,
        [PARAMETER.A]: 2,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -1.431,
        [PARAMETER.Y]: 0.851,
    },
    {
        [PARAMETER.J]: 0,
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.MODIFIED_COUNT]: NUMERIC_BOOLEAN.TRUE,
        [PARAMETER.Y]: 1.332,
    },
]


//


// Dave's "4-parameter" mcopfr claimed 0.00660 but I find 0.00838
// Wed Jul 01, 2020 7:07 pm
// http://forum.sagittal.org/viewtopic.php?p=1965#p1965
/*
requires this hack to be added to `submetricAntivotes.js` to handle the "h" parameter
            if (index !== 2 && modifiedCount === NUMERIC_BOOLEAN.TRUE) {
                termUnpopularity = termUnpopularity * 0.947
            }
 */
const notFourParameterByCurrentDefinitionMcopfr = [
    {
        [PARAMETER.K]: 0,
        [PARAMETER.A]: 2,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -1.44,
        [PARAMETER.Y]: 0.860,
    },
    {
        [PARAMETER.J]: 0,
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.MODIFIED_COUNT]: NUMERIC_BOOLEAN.TRUE,
        [PARAMETER.Y]: 1.331,
    },
]


//


// Douglas's 1-submetrics
// Thu Jul 02, 2020 9:21 pm
// http://forum.sagittal.org/viewtopic.php?p=1978#p1978
// 1-submetric 7-parameter 0.00461
const oneSubmetricSevenParameter = [
    {
        [PARAMETER.K]: 0.5920238095238095,              // ≈3/5
        [PARAMETER.A]: 2.0107142857142857,              // ≈2
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.Y]: 0.455,                           // ≈√
        [PARAMETER.W]: -2.341928094887362,              // ≈log2(5)
        [PARAMETER.X]: 3.069642857142857,               // ≈3
        [PARAMETER.T]: 1.658452380952381,               // ≈5/3
        [PARAMETER.Y]: 1.6476190476190475,              // ≈5/3
    },
]
// golden 1-submetric 6-parameter 0.00468
const goldenOneSubmetricSixParameter = [
    {
        [PARAMETER.K]: 0.5970238095238095,
        [PARAMETER.A]: 2.0125,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.Y]: 1.6226190476190474,                          // ≈φ
        [PARAMETER.W]: -2.334428094887362,
        [PARAMETER.X]: 3.069642857142857,
        [PARAMETER.T]: 1.618452380952381,                           // ≈φ
    },
]
// 1-submetric 5-parameter 0.00565
const oneSubmetricFiveParameter = [
    {
        [PARAMETER.K]: 0.6328571428571429,
        [PARAMETER.A]: 1.5728571428571425,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -3.0571428571428574,
        [PARAMETER.Y]: 0.8571428571428571,
        [PARAMETER.X]: 1.607142857142857,
    },
]
// 1-submetric 4-parameter 0.00947 (claimed to be near 0.00652, so these must have been approximations)
const oneSubmetricFourParameter = [
    {
        [PARAMETER.K]: 0.6,
        [PARAMETER.A]: 3,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -1,
        [PARAMETER.Y]: 0.8766666666666667,
    },
]


//


// Dave's similar to my lowest ever w/ exact a = 2 base 0.00445
// Fri Jul 03, 2020 12:24 am
// http://forum.sagittal.org/viewtopic.php?p=1983#p1983
const almostLowestEverButWithExactA = [
    {
        [PARAMETER.K]: 0.038,
        [PARAMETER.Y]: 0.455,
        [PARAMETER.A]: 2,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -2.09,
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.WEIGHT]: 0.579,
    },
]


//


// Dave's less fragile minimum 0.00559
// Fri Jul 03, 2020 5:28 am
// http://forum.sagittal.org/viewtopic.php?p=1984#p1984
const lessFragileMinimum = [
    {
        [PARAMETER.K]: 0.213895488,
        [PARAMETER.Y]: 0.642099097,
        [PARAMETER.A]: 2,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -2.048657352,
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.WEIGHT]: 0.551650547,
    },
]


//


// Dave's sanity check claimed 0.008325554
// Sat Jul 04, 2020 3:17 am
// http://forum.sagittal.org/viewtopic.php?p=1995#p1995
const sanityCheck = [
    {
        [PARAMETER.K]: 0.632,
        [PARAMETER.Y]: 0.858,
        [PARAMETER.A]: 2,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.W]: -1.415,
    },
]


module.exports = {
    withPrimeLimit,

    lowestEver,
    likeLowestEverButWithZeroK,
    likeLowestEverButWithZeroC,

    notTwoParameterByCurrentDefinitionMcopfr,
    notThreeParameterByCurrentDefinitionMcopfr,
    notFourParameterByCurrentDefinitionMcopfr,

    oneSubmetricSevenParameter,
    goldenOneSubmetricSixParameter,
    oneSubmetricFiveParameter,
    oneSubmetricFourParameter,

    almostLowestEverButWithExactA,

    lessFragileMinimum,

    sanityCheck,
}

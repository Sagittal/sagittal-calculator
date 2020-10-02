import { Cents, Name, RealDecimal, RealMonzo, RealQuotient } from "../../../../../../src/general"
import { analyzePitch } from "../../../../../../src/general/music/analyzePitch"
import { SizeCategoryBound, SIZE_CATEGORY_BOUNDS } from "../../../../../../src/sagittal"

describe("SIZE_CATEGORY_BOUNDS", (): void => {
    it("monzos match the positions", (): void => {
        const actual = SIZE_CATEGORY_BOUNDS.map(analyzePitch)

        expect(actual).toBeCloseToObject([
            {
                name: "u|n" as Name<SizeCategoryBound>,
                monzo: [] as unknown[] as RealMonzo,
                cents: 0.000000 as Cents,
                decimal: 1.000000 as RealDecimal,
                quotient: [1, 1] as RealQuotient,
            },
            {
                name: "n|s" as Name<SizeCategoryBound>,
                monzo: [-42, 26.5] as RealMonzo,
                cents: 1.807522 as Cents,
                decimal: 1.001044 as RealDecimal,
                quotient: [4402640760688.978, 4398046511104] as RealQuotient,
            },
            {
                name: "s|k" as Name<SizeCategoryBound>,
                monzo: [158.5, -100] as RealMonzo,
                cents: 4.499913 as Cents,
                decimal: 1.002602 as RealDecimal,
                quotient: [5.167188592359618e+47, 5.153775207320113e+47] as RealQuotient,
            },
            {
                name: "k|C" as Name<SizeCategoryBound>,
                monzo: [-9.5, 6] as RealMonzo,
                cents: 11.730005 as Cents,
                decimal: 1.006798 as RealDecimal,
                quotient: [729, 724.077344] as RealQuotient,
            },
            {
                name: "C|S" as Name<SizeCategoryBound>,
                monzo: [13.5, -8.5] as RealMonzo,
                cents: 33.382492 as Cents,
                decimal: 1.019469 as RealDecimal,
                quotient: [11585.237503, 11363.985348] as RealQuotient,
            },
            {
                name: "S|M" as Name<SizeCategoryBound>,
                monzo: [4, -2.5] as RealMonzo,
                cents: 45.112497 as Cents,
                decimal: 1.026400 as RealDecimal,
                quotient: [16, 15.588457] as RealQuotient,
            },
            {
                name: "M|L" as Name<SizeCategoryBound>,
                monzo: [-5.5, 3.5] as RealMonzo,
                cents: 56.842503 as Cents,
                decimal: 1.033378 as RealDecimal,
                quotient: [46.765372, 45.254834] as RealQuotient,
            },
            {
                name: "L|SS" as Name<SizeCategoryBound>,
                monzo: [-15, 9.5] as RealMonzo,
                cents: 68.572508 as Cents,
                decimal: 1.040403 as RealDecimal,
                quotient: [34091.956045, 32768] as RealQuotient,
            },
            {
                name: "SS|MS" as Name<SizeCategoryBound>,
                monzo: [-24.5, 15.5] as RealMonzo,
                cents: 80.302513 as Cents,
                decimal: 1.047477 as RealDecimal,
                quotient: [24853035.957081, 23726566.406063] as RealQuotient,
            },
            {
                name: "MS|LS" as Name<SizeCategoryBound>,
                monzo: [-1.5, 1] as RealMonzo,
                cents: 101.955000 as Cents,
                decimal: 1.060660 as RealDecimal,
                quotient: [3, 2.828427] as RealQuotient,
            },
            {
                name: "LS|A" as Name<SizeCategoryBound>,
                monzo: [31, -19.5] as RealMonzo,
                cents: 111.877483 as Cents,
                decimal: 1.066756 as RealDecimal,
                quotient: [2147483648, 2013095912.523538] as RealQuotient,
            },
            {
                name: "A|s+A" as Name<SizeCategoryBound>,
                monzo: [-53, 33.5] as RealMonzo,
                cents: 115.492528 as Cents,
                decimal: 1.068986 as RealDecimal,
                quotient: [9628575343626794, 9007199254740992] as RealQuotient,
            },
            {
                name: "s+A|k+A" as Name<SizeCategoryBound>,
                monzo: [147.5, -93] as RealMonzo,
                cents: 118.184919 as Cents,
                decimal: 1.070650 as RealDecimal,
                quotient: [2.5230413048630948e+44, 2.3565501633836824e+44] as RealQuotient,
            },
            {
                name: "k+A|C+A" as Name<SizeCategoryBound>,
                monzo: [-20.5, 13] as RealMonzo,
                cents: 125.415011 as Cents,
                decimal: 1.075131 as RealDecimal,
                quotient: [1594323, 1482910.400379] as RealQuotient,
            },
            {
                name: "C+A|S+A" as Name<SizeCategoryBound>,
                monzo: [2.5, -1.5] as RealMonzo,
                cents: 147.067498 as Cents,
                decimal: 1.088662 as RealDecimal,
                quotient: [5.656854, 5.196152] as RealQuotient,
            },
            {
                name: "S+A|M+A" as Name<SizeCategoryBound>,
                monzo: [-7, 4.5] as RealMonzo,
                cents: 158.797503 as Cents,
                decimal: 1.096063 as RealDecimal,
                quotient: [140.296115, 128] as RealQuotient,
            },
            {
                name: "M+A|L+A" as Name<SizeCategoryBound>,
                monzo: [-16.5, 10.5] as RealMonzo,
                cents: 170.527509 as Cents,
                decimal: 1.103515 as RealDecimal,
                quotient: [102275.868136, 92681.900024] as RealQuotient,
            },
            {
                name: "L+A|SS+A" as Name<SizeCategoryBound>,
                monzo: [-26, 16.5] as RealMonzo,
                cents: 182.257514 as Cents,
                decimal: 1.111017 as RealDecimal,
                quotient: [74559107.871242, 67108864] as RealQuotient,
            },
            {
                name: "SS+A|MS+A" as Name<SizeCategoryBound>,
                monzo: [-35.5, 22.5] as RealMonzo,
                cents: 193.987519 as Cents,
                decimal: 1.118570 as RealDecimal,
                quotient: [54353589638.13553, 48592007999.61679] as RealQuotient,
            },
            {
                name: "MS+A|LS+A" as Name<SizeCategoryBound>,
                monzo: [-12.5, 8] as RealMonzo,
                cents: 215.640006 as Cents,
                decimal: 1.132648 as RealDecimal,
                quotient: [6561, 5792.618751] as RealQuotient,
            },
            {
                name: "LS+A|A+A" as Name<SizeCategoryBound>,
                monzo: [20, -12.5] as RealMonzo,
                cents: 225.562489 as Cents,
                decimal: 1.139158 as RealDecimal,
                quotient: [1048576, 920482.813225] as RealQuotient,
            },
            {
                name: "A+A|" as Name<SizeCategoryBound>,
                monzo: [-22, 14] as RealMonzo,
                cents: 227.370012 as Cents,
                decimal: 1.140348 as RealDecimal,
                quotient: [4782969, 4194304] as RealQuotient,
            },
        ])
    })
})

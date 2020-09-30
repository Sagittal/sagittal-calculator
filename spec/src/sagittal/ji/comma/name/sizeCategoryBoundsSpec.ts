import { Cents, Decimal, Monzo, Name, Quotient } from "../../../../../../src/general"
import { analyzePitch } from "../../../../../../src/general/music/analyzePitch"
import { SizeCategoryBound, SIZE_CATEGORY_BOUNDS } from "../../../../../../src/sagittal"

describe("SIZE_CATEGORY_BOUNDS", (): void => {
    it("monzos match the positions", (): void => {
        const actual = SIZE_CATEGORY_BOUNDS.map(analyzePitch)

        expect(actual).toBeCloseToObject([
            {
                name: "u|n" as Name<SizeCategoryBound>,
                monzo: [] as unknown[] as Monzo,
                cents: 0.000000 as Cents,
                decimal: 1.000000 as Decimal,
                quotient: [1, 1] as Quotient,
            },
            {
                name: "n|s" as Name<SizeCategoryBound>,
                monzo: [-42, 26.5] as Monzo,
                cents: 1.807522 as Cents,
                decimal: 1.001044 as Decimal,
                quotient: [4402640760688.978, 4398046511104] as Quotient,
            },
            {
                name: "s|k" as Name<SizeCategoryBound>,
                monzo: [158.5, -100] as Monzo,
                cents: 4.499913 as Cents,
                decimal: 1.002602 as Decimal,
                quotient: [5.167188592359618e+47, 5.153775207320113e+47] as Quotient,
            },
            {
                name: "k|C" as Name<SizeCategoryBound>,
                monzo: [-9.5, 6] as Monzo,
                cents: 11.730005 as Cents,
                decimal: 1.006798 as Decimal,
                quotient: [729, 724.077344] as Quotient,
            },
            {
                name: "C|S" as Name<SizeCategoryBound>,
                monzo: [13.5, -8.5] as Monzo,
                cents: 33.382492 as Cents,
                decimal: 1.019469 as Decimal,
                quotient: [11585.237503, 11363.985348] as Quotient,
            },
            {
                name: "S|M" as Name<SizeCategoryBound>,
                monzo: [4, -2.5] as Monzo,
                cents: 45.112497 as Cents,
                decimal: 1.026400 as Decimal,
                quotient: [16, 15.588457] as Quotient,
            },
            {
                name: "M|L" as Name<SizeCategoryBound>,
                monzo: [-5.5, 3.5] as Monzo,
                cents: 56.842503 as Cents,
                decimal: 1.033378 as Decimal,
                quotient: [46.765372, 45.254834] as Quotient,
            },
            {
                name: "L|SS" as Name<SizeCategoryBound>,
                monzo: [-15, 9.5] as Monzo,
                cents: 68.572508 as Cents,
                decimal: 1.040403 as Decimal,
                quotient: [34091.956045, 32768] as Quotient,
            },
            {
                name: "SS|MS" as Name<SizeCategoryBound>,
                monzo: [-24.5, 15.5] as Monzo,
                cents: 80.302513 as Cents,
                decimal: 1.047477 as Decimal,
                quotient: [24853035.957081, 23726566.406063] as Quotient,
            },
            {
                name: "MS|LS" as Name<SizeCategoryBound>,
                monzo: [-1.5, 1] as Monzo,
                cents: 101.955000 as Cents,
                decimal: 1.060660 as Decimal,
                quotient: [3, 2.828427] as Quotient,
            },
            {
                name: "LS|A" as Name<SizeCategoryBound>,
                monzo: [31, -19.5] as Monzo,
                cents: 111.877483 as Cents,
                decimal: 1.066756 as Decimal,
                quotient: [2147483648, 2013095912.523538] as Quotient,
            },
            {
                name: "A|s+A" as Name<SizeCategoryBound>,
                monzo: [-53, 33.5] as Monzo,
                cents: 115.492528 as Cents,
                decimal: 1.068986 as Decimal,
                quotient: [9628575343626794, 9007199254740992] as Quotient,
            },
            {
                name: "s+A|k+A" as Name<SizeCategoryBound>,
                monzo: [147.5, -93] as Monzo,
                cents: 118.184919 as Cents,
                decimal: 1.070650 as Decimal,
                quotient: [2.5230413048630948e+44, 2.3565501633836824e+44] as Quotient,
            },
            {
                name: "k+A|C+A" as Name<SizeCategoryBound>,
                monzo: [-20.5, 13] as Monzo,
                cents: 125.415011 as Cents,
                decimal: 1.075131 as Decimal,
                quotient: [1594323, 1482910.400379] as Quotient,
            },
            {
                name: "C+A|S+A" as Name<SizeCategoryBound>,
                monzo: [2.5, -1.5] as Monzo,
                cents: 147.067498 as Cents,
                decimal: 1.088662 as Decimal,
                quotient: [5.656854, 5.196152] as Quotient,
            },
            {
                name: "S+A|M+A" as Name<SizeCategoryBound>,
                monzo: [-7, 4.5] as Monzo,
                cents: 158.797503 as Cents,
                decimal: 1.096063 as Decimal,
                quotient: [140.296115, 128] as Quotient,
            },
            {
                name: "M+A|L+A" as Name<SizeCategoryBound>,
                monzo: [-16.5, 10.5] as Monzo,
                cents: 170.527509 as Cents,
                decimal: 1.103515 as Decimal,
                quotient: [102275.868136, 92681.900024] as Quotient,
            },
            {
                name: "L+A|SS+A" as Name<SizeCategoryBound>,
                monzo: [-26, 16.5] as Monzo,
                cents: 182.257514 as Cents,
                decimal: 1.111017 as Decimal,
                quotient: [74559107.871242, 67108864] as Quotient,
            },
            {
                name: "SS+A|MS+A" as Name<SizeCategoryBound>,
                monzo: [-35.5, 22.5] as Monzo,
                cents: 193.987519 as Cents,
                decimal: 1.118570 as Decimal,
                quotient: [54353589638.13553, 48592007999.61679] as Quotient,
            },
            {
                name: "MS+A|LS+A" as Name<SizeCategoryBound>,
                monzo: [-12.5, 8] as Monzo,
                cents: 215.640006 as Cents,
                decimal: 1.132648 as Decimal,
                quotient: [6561, 5792.618751] as Quotient,
            },
            {
                name: "LS+A|A+A" as Name<SizeCategoryBound>,
                monzo: [20, -12.5] as Monzo,
                cents: 225.562489 as Cents,
                decimal: 1.139158 as Decimal,
                quotient: [1048576, 920482.813225] as Quotient,
            },
            {
                name: "A+A|" as Name<SizeCategoryBound>,
                monzo: [-22, 14] as Monzo,
                cents: 227.370012 as Cents,
                decimal: 1.140348 as Decimal,
                quotient: [4782969, 4194304] as Quotient,
            },
        ])
    })
})

import {APOTOME, CommaMean, HALF_SCALER, Monzo, Name, Scamon} from "@sagittal/general"
import {
    BoundClassId,
    BoundType,
    CommaClassId,
    InaMidpoint,
    JiNotationBoundClass,
    JiNotationLevelId,
} from "../../../../../../src/sagittal"
import {INSANE_EDA} from "../../../../../../src/sagittal/notations/ji/levelEdas"
import {computeJiNotationLevelBoundedCommaClassIds} from "../../../../../../src/scripts/jiNotationBoundClass/io/terminal/levelBoundedCommaClasses"
import {BoundedCommaClassIdPairs} from "../../../../../../src/scripts/jiNotationBoundClass/io/terminal/types"

describe("computeJiNotationLevelBoundedCommaClassIds", (): void => {
    it("returns, given a JI notation bound class, for each of its JI levels, an array of the pair of comma class positions it bounds at that JI notation level", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [175.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevelId.MEDIUM, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            name: "175.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }
        const boundClassId = BoundClassId.MINA_50

        const actual = computeJiNotationLevelBoundedCommaClassIds([boundClassId, jiNotationBoundClass])

        const expected: BoundedCommaClassIdPairs = {
            boundClassId,
            [JiNotationLevelId.MEDIUM]: [CommaClassId._1_V_5_C, CommaClassId._1_V_7_C],
            [JiNotationLevelId.EXTREME]: [CommaClassId._125_V_13_C, CommaClassId._19_V_5_C],
            [JiNotationLevelId.INSANE]: [CommaClassId._125_V_13_C, CommaClassId._19_V_5_C],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the final JI notation bound class", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: APOTOME.monzo as Monzo<{rational: true}>,
                scaler: [404.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevelId.MEDIUM, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            name: "404.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }
        const boundClassId = BoundClassId.MINA_116

        const actual = computeJiNotationLevelBoundedCommaClassIds([boundClassId, jiNotationBoundClass])

        const expected: BoundedCommaClassIdPairs = {
            boundClassId: BoundClassId.MINA_116,
            [JiNotationLevelId.MEDIUM]: [CommaClassId._11_M, undefined],
            [JiNotationLevelId.EXTREME]: [CommaClassId._5_V_49_M, undefined],
            [JiNotationLevelId.INSANE]: [CommaClassId._5_V_49_M, undefined],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the first JI notation bound class", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [1.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            name: "1.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }
        const boundClassId = BoundClassId.MINA_0

        const actual = computeJiNotationLevelBoundedCommaClassIds([boundClassId, jiNotationBoundClass])

        const expected: BoundedCommaClassIdPairs = {
            boundClassId: BoundClassId.MINA_0,
            [JiNotationLevelId.EXTREME]: [CommaClassId._1_u, CommaClassId._1_V_5_7_13_n],
            [JiNotationLevelId.INSANE]: [CommaClassId._1_u, CommaClassId._1_V_5_7_13_n],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the bound class between the two commas which are extremely close together", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: [-4, -1, -1, 0, 0, 1, 0, 1] as Monzo<{rational: true}>,
                scaler: HALF_SCALER,
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            name: ")/| ,.|)" as Name<CommaMean>,
            boundType: BoundType.COMMA_MEAN,
        }
        const boundClassId = BoundClassId.MINA_51

        const actual = computeJiNotationLevelBoundedCommaClassIds([boundClassId, jiNotationBoundClass])

        const expected: BoundedCommaClassIdPairs = {
            boundClassId: BoundClassId.MINA_51,
            [JiNotationLevelId.ULTRA]: [CommaClassId._19_V_5_C, CommaClassId._1_V_35_C],
            [JiNotationLevelId.EXTREME]: [CommaClassId._19_V_5_C, CommaClassId._13_C],
            [JiNotationLevelId.INSANE]: [CommaClassId._19_V_5_C, CommaClassId._13_C],
        }
        expect(actual).toBeCloseToObject(expected)
    })
})

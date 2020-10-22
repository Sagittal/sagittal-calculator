import {CommaMean, HALF_SCALER, Id, Monzo, Name, Scamon} from "../../../../../../src/general"
import {APOTOME, BoundClass, BoundType, CommaClass, InaMidpoint} from "../../../../../../src/sagittal"
import {JiNotationBoundClass, JiNotationLevel} from "../../../../../../src/sagittal/notations/ji"
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
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 51 as Id<BoundClass>,
            name: "175.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedCommaClassIds(jiNotationBoundClass)

        const expected: BoundedCommaClassIdPairs = {
            boundClassId: 51 as Id<BoundClass>,
            [JiNotationLevel.MEDIUM]: [44 as Id<CommaClass>, 58 as Id<CommaClass>],
            [JiNotationLevel.EXTREME]: [51 as Id<CommaClass>, 52 as Id<CommaClass>],
            [JiNotationLevel.INSANE]: [51 as Id<CommaClass>, 52 as Id<CommaClass>],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the final JI notation bound class", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: APOTOME.monzo as Monzo<{rational: true}>,
                scaler: [404.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 122 as Id<BoundClass>,
            name: "404.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedCommaClassIds(jiNotationBoundClass)

        const expected: BoundedCommaClassIdPairs = {
            boundClassId: 122 as Id<BoundClass>,
            [JiNotationLevel.MEDIUM]: [114 as Id<CommaClass>, undefined],
            [JiNotationLevel.EXTREME]: [122 as Id<CommaClass>, undefined],
            [JiNotationLevel.INSANE]: [122 as Id<CommaClass>, undefined],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the first JI notation bound class", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [1.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 0 as Id<BoundClass>,
            name: "1.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedCommaClassIds(jiNotationBoundClass)

        const expected: BoundedCommaClassIdPairs = {
            boundClassId: 0 as Id<BoundClass>,
            [JiNotationLevel.EXTREME]: [0 as Id<CommaClass>, 1 as Id<CommaClass>],
            [JiNotationLevel.INSANE]: [0 as Id<CommaClass>, 1 as Id<CommaClass>],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the bound class between the two commas which are extremely close together", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: [-4, -1, -1, 0, 0, 1, 0, 1] as Monzo<{rational: true}>,
                scaler: HALF_SCALER,
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 52 as Id<BoundClass>,
            name: ")/| ,.|)" as Name<CommaMean>,
            boundType: BoundType.COMMA_MEAN,
        }

        const actual = computeJiNotationLevelBoundedCommaClassIds(jiNotationBoundClass)

        const expected: BoundedCommaClassIdPairs = {
            boundClassId: 52 as Id<BoundClass>,
            [JiNotationLevel.ULTRA]: [52 as Id<CommaClass>, 54 as Id<CommaClass>],
            [JiNotationLevel.EXTREME]: [52 as Id<CommaClass>, 53 as Id<CommaClass>],
            [JiNotationLevel.INSANE]: [52 as Id<CommaClass>, 53 as Id<CommaClass>],
        }
        expect(actual).toBeCloseToObject(expected)
    })
})

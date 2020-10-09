import { SQRT_SCALER } from "../../../../../src/general/math/irrational/scamon"
import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Scamon } from "../../../../../src/general/math/numeric/scamon"
import { Cents, computePitchFromCents } from "../../../../../src/general/music"
import { JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeInitialPosition } from "../../../../../src/scripts/jiNotationBound/bound/initialPosition"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeInitialPosition", (): void => {
    it("returns the mean of the bounded commas at the introducing JI notation level", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.EXTREME],
            // This is chosen at ~42¢ to be between ~|\ (40.004352) and //| (43.012579) at the High JI notation level
            pitch: computePitchFromCents(42 as Cents),
        }

        const actual = computeInitialPosition(jiNotationBound)

        const expected = {
            //   [ -14   6   0   0   0   0   0   0   1 ⟩       ~|\
            // + [  -8   8  -2                         ⟩      //|
            // / 2 =
            monzo: [-22, 14, -2, 0, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>
        expect(actual).toEqual(expected)
    })
})

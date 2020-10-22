import { ceil, Count, decrement, Id, increment, Name } from "../../../../../src/general"
import { computeRange } from "../../../../../src/general/code"
import { Max } from "../../../../../src/general/math"
import { subtractPitch } from "../../../../../src/general/music"
import { CommaClass } from "../../../../../src/sagittal/ji"
import { getMinaName, Mina } from "../../../../../src/sagittal/notations/ji"
import { computeJiNotationCaptureZone } from "../../../../../src/sagittal/notations/ji/captureZone"
import { MINA } from "../../../../../src/sagittal/notations/ji/intervals"
import { EXTREME_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"

describe("getMinaName", (): void => {
    const SPLIT_MINAS = [49, 51, 72, 78, 105, 113]
    const MAX_MINA = ceil(EXTREME_EDA / 2) as Count<Mina> & Max<Mina>   // 233 / 2 = 116.5 ---> 117

    const computeSplitMinaName = (commaClassId: Id<CommaClass>): Name<Mina> => {
        const [lowerBound, upperBound] = computeJiNotationCaptureZone(commaClassId)
        const centsSpan = subtractPitch(upperBound, lowerBound)

        const baseMina = parseInt(getMinaName(commaClassId))
        const mina = baseMina + centsSpan / MINA

        return mina.toFixed(6) as Name<Mina>
    }

    it("there is a mina name for every mina up to the max comma class size, plus one for each split mina                 ", (): void => {
        let commaClassId = 0 as Id<CommaClass>
        const minaRange = computeRange(MAX_MINA)

        minaRange.forEach((mina: Mina): void => {
            expect(getMinaName(commaClassId)).toBe(mina.toString())
            commaClassId = increment(commaClassId)

            if (SPLIT_MINAS.includes(mina)) {
                expect(getMinaName(commaClassId)).toBe(computeSplitMinaName(decrement(commaClassId)))
                commaClassId = increment(commaClassId)
            }
        })
    })
})

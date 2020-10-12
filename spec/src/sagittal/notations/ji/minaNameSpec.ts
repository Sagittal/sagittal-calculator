import { Count, decrement, Id, increment, Name } from "../../../../../src/general"
import { computeRange } from "../../../../../src/general/code"
import { Max } from "../../../../../src/general/math"
import { subtractPitch } from "../../../../../src/general/music"
import { CommaClass } from "../../../../../src/sagittal/notations"
import { getMinaName, Mina } from "../../../../../src/sagittal/notations/ji"
import { computeCaptureZone } from "../../../../../src/sagittal/notations/ji/captureZone"
import { MINA } from "../../../../../src/sagittal/notations/ji/intervals"

describe("getMinaName", (): void => {
    const SPLIT_MINAS = [49, 51, 72, 78, 105, 113, 120, 128]
    const MAX_MINA = 140 as Count<Mina> & Max<Mina>

    const computeSplitMinaName = (commaClassId: Id<CommaClass>): Name<Mina> => {
        const [lowerBound, upperBound] = computeCaptureZone(commaClassId)
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

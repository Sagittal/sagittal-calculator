import { ACCURACY_THRESHOLD, Count, decrement, Id, increment, Name } from "../../../../../src/general"
import { computeRange } from "../../../../../src/general/code"
import { Max } from "../../../../../src/general/math"
import { SymbolClass } from "../../../../../src/sagittal/notations"
import { getMinaName, Mina } from "../../../../../src/sagittal/notations/ji"
import { computeCaptureZone } from "../../../../../src/sagittal/notations/ji/captureZone"
import { MINA } from "../../../../../src/sagittal/notations/ji/intervals"

describe("getMinaName", (): void => {
    const SPLIT_MINAS = [49, 51, 72, 78, 105, 113, 120, 128]
    const MAX_MINA = 140 as Count<Mina> & Max<Mina>

    const computeSplitMinaName = (symbolClassId: Id<SymbolClass>): Name<Mina> => {
        const [lowerBound, upperBound] = computeCaptureZone(symbolClassId)
        const centsSpan = upperBound - lowerBound

        const baseMina = parseInt(getMinaName(symbolClassId))
        const mina = baseMina + centsSpan / MINA

        return mina.toFixed(ACCURACY_THRESHOLD) as Name<Mina>
    }

    it(
        "there is a mina name for every mina up to the max symbol class size, plus one for each split mina",
        (): void => {
            let symbolClassId = 0 as Id<SymbolClass>
            const minaRange = computeRange(MAX_MINA)

            minaRange.forEach((mina: Mina): void => {
                // TODO: I'd really like to go through and update the spreadsheet calculator, Everything Sagittal,
                //  and this code base to close this missing gap, this missing "key" / symbol class ID of 78
                if (symbolClassId === 78) {
                    symbolClassId = increment(symbolClassId)
                }

                expect(getMinaName(symbolClassId)).toBe(mina.toString())
                symbolClassId = increment(symbolClassId)

                if (SPLIT_MINAS.includes(mina)) {
                    expect(getMinaName(symbolClassId)).toBe(computeSplitMinaName(decrement(symbolClassId)))
                    symbolClassId = increment(symbolClassId)
                }
            })
        },
    )
})

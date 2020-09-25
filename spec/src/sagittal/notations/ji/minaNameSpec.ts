import { computeCentsFromPitch, Count, decrement, Id, increment, Name } from "../../../../../src/general"
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
        // TODO: an "interval" helper, which should return cents if pitches have cents, monzos if monzos, etc.
        //  as is familiar from creating 2,3-free classes from other pitches
        //  and it should return a branded pitch, an Interval, to enforce that it's not a position, but an interval
        //  and perhaps think about how it might play nice with a Zone
        const centsSpan = computeCentsFromPitch(upperBound) - computeCentsFromPitch(lowerBound)

        const baseMina = parseInt(getMinaName(symbolClassId))
        const mina = baseMina + centsSpan / MINA

        return mina.toFixed(6) as Name<Mina>
    }

    it(
        "there is a mina name for every mina up to the max symbol class size, plus one for each split mina",
        (): void => {
            let symbolClassId = 0 as Id<SymbolClass>
            const minaRange = computeRange(MAX_MINA)

            minaRange.forEach((mina: Mina): void => {
                expect(getMinaName(symbolClassId)).toBe(mina.toString())
                // console.log(getMinaName(symbolClassId), mina.toString())
                symbolClassId = increment(symbolClassId)

                if (SPLIT_MINAS.includes(mina)) {
                    expect(getMinaName(symbolClassId)).toBe(computeSplitMinaName(decrement(symbolClassId)))
                    // console.log(getMinaName(symbolClassId), computeSplitMinaName(decrement(symbolClassId)))
                    symbolClassId = increment(symbolClassId)
                }
            })
        },
    )
})

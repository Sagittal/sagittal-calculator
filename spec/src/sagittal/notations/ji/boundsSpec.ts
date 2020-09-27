import { Cents, computeNumberFromCents, equalNums, Id, numIsHigher } from "../../../../../src/general"
import { JiNotationBound, JI_NOTATION_BOUNDS, TINA } from "../../../../../src/sagittal"

describe("JI_NOTATION_BOUNDS", (): void => {
    it("almost every bound in the JI notation is snapped to a half-tina", (): void => {
        let currentHalfTina = 0.5

        const exceptionalJiNotationBoundIds: Array<Id<JiNotationBound>> = [
            49,     // Comma mean
            52,     // Comma mean
            74,     // Comma mean
            81,     // Comma mean
            96,     // Size category bound
            109,    // Comma mean
            118,    // Comma mean
            126,    // Comma mean
            135,    // Comma mean
            148,    // Size category bound
        ] as Array<Id<JiNotationBound>>

        JI_NOTATION_BOUNDS.forEach((jiNotationBound: JiNotationBound): void => {
            while (true) {
                const currentHalfTinaCents: Cents = TINA * currentHalfTina as Cents
                const currentHalfTinaPitch = { decimal: computeNumberFromCents(currentHalfTinaCents) }

                if (equalNums(currentHalfTinaPitch, jiNotationBound)) {
                    break
                } else if (numIsHigher(currentHalfTinaPitch, jiNotationBound)) {
                    if (!exceptionalJiNotationBoundIds.includes(jiNotationBound.id)) {
                        fail(`JI notation bound id ${jiNotationBound.id} was not close to a half-tina, nor registered as an exceptional bound.`)
                    }

                    break
                }

                currentHalfTina = currentHalfTina + 1
            }
        })
    })
})

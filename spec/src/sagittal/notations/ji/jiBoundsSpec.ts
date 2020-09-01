import { Id, isCloseTo } from "../../../../../src/general"
import { Bound, JI_BOUNDS, TINA } from "../../../../../src/sagittal"

describe("JI_BOUNDS", () => {
    it("almost every bound in the JI notation is snapped to a half-tina", () => {
        let currentHalfTina = 0.5

        const exceptionalBoundIds: Array<Id<Bound>> = [
            49,     // comma mean
            52,     // comma mean
            74,     // comma mean
            82,     // comma mean
            97,     // size category bound
            110,    // comma mean
            119,    // comma mean
            127,    // comma mean
            136,    // comma mean
            149,    // size category bound
        ] as Array<Id<Bound>>

        JI_BOUNDS.forEach(jiBound => {
            const boundCents = jiBound.cents

            while (true) {
                const currentHalfTinaCents = TINA * currentHalfTina

                if (isCloseTo(currentHalfTinaCents, boundCents)) {
                    break
                } else if (currentHalfTinaCents > boundCents) {
                    if (!exceptionalBoundIds.includes(jiBound.id)) {
                        fail(`Bound id ${jiBound.id} was not close to a half-tina, nor registered as an exceptional bound.`)
                    }

                    break
                }

                currentHalfTina = currentHalfTina + 1
            }
        })
    })
})

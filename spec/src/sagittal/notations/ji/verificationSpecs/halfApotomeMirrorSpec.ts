import { getSagittalComma, JI_SYMBOLS, SagittalComma } from "../../../../../../src/sagittal"
import { APOTOME_CENTS } from "../../../../../../src/sagittal/constants"

describe("half-apotome mirror", () => {
    const halfApotomeCents = APOTOME_CENTS / 2

    it("is the case that the commas in the JI notation are symmetrical about the half-apotome mirror", () => {
        const sagittalJiCommas = JI_SYMBOLS.map(symbol => getSagittalComma(symbol.primaryCommaId))
        const firstCommaGreaterThanHalfApotomeMirrorIndex =
            sagittalJiCommas.findIndex(jiComma => jiComma.cents > halfApotomeCents)

        let indexOffset = 0
        while (firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset < sagittalJiCommas.length) {
            const index = firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = firstCommaGreaterThanHalfApotomeMirrorIndex - 1 - indexOffset

            const comma = sagittalJiCommas[index]
            const mirroredComma = sagittalJiCommas[mirroredIndex]

            expect(comma.cents - halfApotomeCents).toBeCloseTo(halfApotomeCents - mirroredComma.cents)

            indexOffset = indexOffset + 1
        }
    })
})

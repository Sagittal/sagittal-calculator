import { Copfr, Max, ObjectKey, Prime, Sopfr } from "../../../../../src/general"
import { Exponent } from "../../../../../src/general/math"
import { ApotomeSlope, getSagittalComma } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/commaEvaluation/n2d3p9"
import { JI_SYMBOLS } from "../../../../../src/sagittal/notations/ji"
import { computeSecondaryCommaZone } from "../../../../../src/sagittal/notations/ji/secondaryCommaZone"
import { computeSagittalRationalPitchName } from "../../../../../src/sagittal/rationalPitchSizeName"
import { computeCommas } from "../../../../../src/scripts/pitch/commas"
import { computeFindCommasTable } from "../../../../../src/scripts/pitch/io"

describe("verifying primary commas", () => {
    xit("checks that every symbol's primary comma is its best-ranked comma in its secondary comma zone according to our metric (not N2D3P9, but a comma notational popularity rank metric which uses it)", () => {
        JI_SYMBOLS.forEach(symbol => {
            const primaryComma = getSagittalComma(symbol.primaryCommaId)
            const commaName = computeSagittalRationalPitchName(primaryComma.monzo)

            console.log(`\n\n${symbol.ascii} ${commaName}\n\n`)

            const secondaryCommaZone = computeSecondaryCommaZone(symbol)
            const minCents = secondaryCommaZone[ 0 ]
            const maxCents = secondaryCommaZone[ 1 ]
            const maxFiveRoughSopfr = 61 as Max<Sopfr<5>>
            const maxFiveRoughCopfr = 555 as Max<Copfr<5>>
            const maxApotomeSlope = 14 as Max<ApotomeSlope>
            const maxPrimeLimit = 47 as Max<Max<Prime>>
            const maxAbsoluteThreeExponent = 15 as Max<Exponent<Prime>>
            const maxN2D3P9 = 666 as Max<N2D3P9>
            const sortKey = "fiveRoughSopfr" as ObjectKey

            const commas = computeCommas({
                minCents,
                maxCents,
                maxFiveRoughSopfr,
                maxFiveRoughCopfr,
                maxApotomeSlope,
                maxPrimeLimit,
                maxAbsoluteThreeExponent,
                maxN2D3P9,
                sortKey,
            })

            console.log(computeFindCommasTable(commas))
        })
    })
})

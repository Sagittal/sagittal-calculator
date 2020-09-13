import { Abs, Copfr, Integer, Max, ObjectKey, Prime, Sopfr } from "../../../../../../src/general"
import { Exponent } from "../../../../../../src/general/math"
import { analyzeComma, ApotomeSlope, getSagittalComma } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeCommaName } from "../../../../../../src/sagittal/comma/name"
import { JI_SYMBOLS } from "../../../../../../src/sagittal/notations/ji"
import { computeSecondaryCommaZone } from "../../../../../../src/sagittal/notations/ji/secondaryCommaZone"
import { computeCommas } from "../../../../../../src/scripts/jiPitch/commas"
import { computeFindCommasTable } from "../../../../../../src/scripts/jiPitch/io"

describe("verifying primary commas", () => {
    xit("checks that every symbol's primary comma is its best-ranked comma in its secondary comma zone according to our metric (not N2D3P9, but a comma notational popularity rank metric which uses it)", () => {
        JI_SYMBOLS.forEach(symbol => {
            const primaryComma = getSagittalComma(symbol.primaryCommaId)
            const commaName = computeCommaName(primaryComma)

            console.warn(`\n\n${symbol.ascii} ${commaName}\n\n`)

            const secondaryCommaZone = computeSecondaryCommaZone(symbol)
            const minCents = secondaryCommaZone[ 0 ]
            const maxCents = secondaryCommaZone[ 1 ]
            const max23FreeSopfr = 61 as Max<Sopfr<{ rough: 5 }>>
            const max23FreeCopfr = 555 as Max<Copfr<{ rough: 5 }>>
            const maxAbsoluteApotomeSlope = 14 as Max<Abs<ApotomeSlope>>
            const maxPrimeLimit = 47 as Max<Max<Prime>>
            const maxAbsolute3Exponent = 15 as Max<Abs<Integer & Exponent<Prime>>>
            const maxN2D3P9 = 666 as Max<N2D3P9>
            const sortKey = "twoThreeFreeSopfr" as ObjectKey

            const commas = computeCommas({
                minCents,
                maxCents,
                max23FreeSopfr,
                max23FreeCopfr,
                maxAbsoluteApotomeSlope,
                maxPrimeLimit,
                maxAbsolute3Exponent,
                maxN2D3P9,
                sortKey,
            })
            const commaAnalyses = commas.map(comma => analyzeComma(comma))

            console.warn(computeFindCommasTable(commaAnalyses))
        })
    })
})

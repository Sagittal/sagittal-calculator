import { Abs, Comma, Copfr, Id, Integer, ioSettings, KeyPath, Max, Prime, Sopfr } from "../../../../../../src/general"
import { Exponent } from "../../../../../../src/general/math"
import {
    analyzeComma,
    ApotomeSlope,
    CommaAnalysis,
    formatSymbolClass,
    getPrimaryComma,
    JI_NOTATION,
    SymbolClass,
} from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeCommaName } from "../../../../../../src/sagittal/comma/name"
import { computeSecondaryCommaZone } from "../../../../../../src/sagittal/notations/ji/secondaryCommaZone"
import { computeCommas } from "../../../../../../src/scripts/jiPitch/findCommas"
import { computeFindCommasOutput } from "../../../../../../src/scripts/jiPitch/io"

describe("verifying primary commas", (): void => {
    // tslint:disable-next-line ban
    xit("checks that every symbol's primary comma is its best-ranked comma in its secondary comma zone according to our metric (not N2D3P9, but a comma notational popularity rank metric which uses it)", (): void => {
        JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
            const primaryComma = getPrimaryComma(symbolClassId)
            const commaName = computeCommaName(primaryComma)

            console.warn(`\n\n${formatSymbolClass(symbolClassId, ioSettings)} ${commaName}\n\n`)

            const secondaryCommaZone = computeSecondaryCommaZone(symbolClassId)
            const minCents = secondaryCommaZone[ 0 ]
            const maxCents = secondaryCommaZone[ 1 ]
            const max23FreeSopfr = 61 as Max<Sopfr<{ rough: 5 }>>
            const max23FreeCopfr = 555 as Max<Copfr<{ rough: 5 }>>
            const maxAas = 14 as Max<Abs<ApotomeSlope>>
            const maxPrimeLimit = 47 as Max<Max<Prime>>
            const maxAte = 15 as Max<Abs<3 & Integer & Exponent<Prime>>>
            const maxN2D3P9 = 666 as Max<N2D3P9>
            const sortKey = "twoThreeFreeSopfr" as KeyPath

            const commas = computeCommas({
                minCents,
                maxCents,
                max23FreeSopfr,
                max23FreeCopfr,
                maxAas,
                maxPrimeLimit,
                maxAte,
                maxN2D3P9,
                sortKey,
            })
            const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))

            console.warn(computeFindCommasOutput(commaAnalyses))
        })
    })
})

import { Prime } from "../../../../src/general"
import { Exponent } from "../../../../src/general/math"
import { ApotomeSlope, Copfr, Sopfr } from "../../../../src/general/music"
import { computeCommaName } from "../../../../src/general/music/name"
import { SYMBOLS } from "../../../../src/notations/ji"
import { computeSecondaryCommaZone } from "../../../../src/notations/ji/secondaryCommaZone"
import { computeCommas } from "../../../../src/scripts/findCommas/commas"
import { presentCommas } from "../../../../src/scripts/findCommas/present"

describe("verifying primary commas", () => {
    xit("checks that every symbol's primary comma is its best-ranked comma in its secondary comma zone according to our metric", () => {
        SYMBOLS.forEach(symbol => {
            const commaName = computeCommaName(symbol.primaryComma.monzo)

            console.log(`\n\n${symbol.ascii} ${commaName}\n\n`)

            const secondaryCommaZone = computeSecondaryCommaZone(symbol)
            const lowerBound = secondaryCommaZone[ 0 ]
            const upperBound = secondaryCommaZone[ 1 ]
            const maximumFiveRoughSopfr = 61 as Sopfr<5>
            const maximumFiveRoughCopfr = 555 as Copfr<5>
            const maximumApotomeSlope = 14 as ApotomeSlope
            const maximumPrimeLimit = 47 as Prime
            const maximumAbsoluteThreeExponent = 15 as Exponent<Prime>
            const fiveSlicedMonzo = undefined
            const sortKey = "fiveRoughSopfr"

            const commas = computeCommas({
                lowerBound,
                upperBound,
                maximumFiveRoughSopfr,
                maximumFiveRoughCopfr,
                maximumApotomeSlope,
                maximumPrimeLimit,
                maximumAbsoluteThreeExponent,
                fiveSlicedMonzo,
                sortKey,
            })

            console.log(presentCommas(commas))
        })
    })
})

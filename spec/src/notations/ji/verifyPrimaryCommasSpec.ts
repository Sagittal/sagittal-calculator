import { computeSecondaryCommaZone } from "../../../../src/notations/ji/secondaryCommaZone"
import { computeCommas } from "../../../../src/scripts/findCommas/commas"
import { presentCommas } from "../../../../src/utilities/comma/present/commas"
import { computeCommaName } from "../../../../src/utilities/comma/name"
import { SYMBOLS } from "../../../../src/notations/ji/symbols"
import { ApotomeSlope } from "../../../../src/notations/ji/types"
import { PrimeExponent } from "../../../../src/utilities/comma/types"
import { Prime } from "../../../../src/utilities/types"

describe("verifying primary commas", () => {
    xit("checks that every symbol's primary comma is its best-ranked comma in its secondary comma zone according to our metric", () => {
        SYMBOLS.forEach(symbol => {
            const commaName = computeCommaName(symbol.primaryComma.monzo)

            console.log(`\n\n${symbol.ascii} ${commaName}\n\n`)

            const secondaryCommaZone = computeSecondaryCommaZone(symbol)
            const lowerBound = secondaryCommaZone[ 0 ]
            const upperBound = secondaryCommaZone[ 1 ]
            const maximumFiveRoughSopfr = 61
            const maximumFiveRoughCopfr = 555
            const maximumApotomeSlope = 14 as ApotomeSlope
            const maximumPrimeLimit = 47 as Prime
            const maximumAbsoluteThreeExponent = 15 as PrimeExponent
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

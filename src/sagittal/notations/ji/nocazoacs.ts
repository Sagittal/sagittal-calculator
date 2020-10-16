import { Apotome, BLANK, Count, count, Direction, Id, indexOfFinalElement, shallowClone } from "../../../general"
import {
    CONVENTIONAL_DOUBLE_SHARP_ASCII,
    CONVENTIONAL_DOUBLE_SHARP_UNICODE,
    CONVENTIONAL_SHARP_ASCII,
    CONVENTIONAL_SHARP_UNICODE,
    PARENTHETICAL_CONVENTIONAL_NATURAL_ASCII,
    PARENTHETICAL_CONVENTIONAL_NATURAL_UNICODE,
} from "../../constants"
import { Ascii, computeAsciiFromSymbol, computeUnicodeFromSymbol, Unicode } from "../../io"
import { getApotomeComplement } from "../apotomeComplement"
import { apotomeShift } from "../apotomeShift"
import { getFlacco } from "../flacco"
import { flipSymbol } from "../flip"
import { computeSymbolFromFlacco } from "../symbolFromFlacco"
import { CommaClass, Flacco, Flavor, Notation, NotationCaptureZoneAccidental } from "../types"
import { BoundClass } from "./types"

const checkCommaClassIdsAgainstFlaccoIds = (
    commaClassIds: Array<Id<CommaClass>>,
    flaccoIds: Array<Id<Flacco>>,
): void => {
    commaClassIds.forEach((commaClassId: Id<CommaClass>, index: number): void => {
        const flaccoId = flaccoIds[ index ]
        if (commaClassId as Id !== flaccoId as Id) {
            throw new Error(`Comma class IDs should match the flacco IDs, but ${commaClassId} did not match ${flaccoId}.`)
        }
    })
}

const computeNocazoacs = (notation: Notation): NotationCaptureZoneAccidental[] => {
    const { commaClassIds, boundClassIds, flaccoIds } = notation

    const commaClassCount = count(commaClassIds)
    const boundClassCount = count(boundClassIds)
    const flaccoCount = count(flaccoIds)

    if (commaClassCount as Count !== boundClassCount as Count) {
        throw new Error(`The count of comma and bound classes must be the same, but were ${commaClassCount} and ${boundClassCount}, respectively.`)
    }

    checkCommaClassIdsAgainstFlaccoIds(commaClassIds, flaccoIds)

    // TODO: NOCAZOAC eventually want this method refined to have a single map rather than a series of forEach's
    const nocazoacs = [] as NotationCaptureZoneAccidental[]

    // Section 1a: upwards, from unison to half apotome
    boundClassIds.forEach((boundClassId: Id<BoundClass>, boundCommaOrFlaccoIndex: number): void => {
        const commaClassId = commaClassIds[ boundCommaOrFlaccoIndex ]
        const commaDirection = Direction.SUPER
        const apotomeCount = 0 as Count<Apotome>

        const flaccoId = flaccoIds[ boundCommaOrFlaccoIndex ]
        const flacco = getFlacco(flaccoId)
        const symbol = computeSymbolFromFlacco(flacco)
        const ascii = computeAsciiFromSymbol(symbol)
        const unicode = computeUnicodeFromSymbol(symbol)
        const revoAscii = ascii as Ascii<Flavor.REVO>
        const evoAscii = ascii as Ascii<Flavor.EVO>
        const revoUnicode = unicode as Unicode<Flavor.REVO>
        const evoUnicode = unicode as Unicode<Flavor.EVO>

        nocazoacs.push({
            boundClassId,
            commaClassId,
            commaDirection,
            apotomeCount,
            revoAscii,
            evoAscii,
            revoUnicode,
            evoUnicode,
        })
    })

    // Section 1b: upwards, from half apotome to max single-shaft symbol
    const finalCommaOrBoundClassIndex = indexOfFinalElement(commaClassIds)
    const extraFlaccoIds = flaccoIds.slice(boundClassCount)
    extraFlaccoIds.forEach((flaccoId: Id<Flacco>, extraFlaccoIndex: number): void => {
        const commaOrBoundClassIndex = finalCommaOrBoundClassIndex - extraFlaccoIndex
        const boundClassId = boundClassIds[ commaOrBoundClassIndex ]

        const commaClassId = commaClassIds[ commaOrBoundClassIndex ]
        const commaDirection = Direction.SUB
        const apotomeCount = 1 as Count<Apotome>

        const flacco = getFlacco(flaccoId)
        const symbol = computeSymbolFromFlacco(flacco)
        const ascii = computeAsciiFromSymbol(symbol)
        const unicode = computeUnicodeFromSymbol(symbol)
        const revoAscii = ascii as Ascii<Flavor.REVO>
        const evoAscii = ascii as Ascii<Flavor.EVO>
        const revoUnicode = unicode as Unicode<Flavor.REVO>
        const evoUnicode = unicode as Unicode<Flavor.EVO>

        nocazoacs.push({
            boundClassId,
            commaClassId,
            commaDirection,
            apotomeCount,
            revoAscii,
            evoAscii,
            revoUnicode,
            evoUnicode,
        })
    })

    // Section 1c: upwards, past max single-shaft symbol to apotome
    const extraFlaccoCount = flaccoCount - boundClassCount
    const reversedRemainingBoundClassIds = shallowClone(boundClassIds).reverse().slice(extraFlaccoCount)

    const finalRemainingBoundClassIndex = indexOfFinalElement(reversedRemainingBoundClassIds)
    reversedRemainingBoundClassIds.forEach((boundClassId: Id<BoundClass>, remainingBoundClassIndex: number): void => {
        const commaOrFlaccoIndex = finalRemainingBoundClassIndex - remainingBoundClassIndex
        const commaClassId = commaClassIds[ commaOrFlaccoIndex ]
        const commaDirection = Direction.SUB
        const apotomeCount = 1 as Count<Apotome>

        const flaccoId = flaccoIds[ commaOrFlaccoIndex ]
        const flacco = getFlacco(flaccoId)

        const revoSymbol = getApotomeComplement(computeSymbolFromFlacco(flacco))
        const revoAscii = computeAsciiFromSymbol(revoSymbol)
        const revoUnicode = computeUnicodeFromSymbol(revoSymbol)

        const evoSymbol = flipSymbol(computeSymbolFromFlacco(flacco))
        const evoSymbolAscii = computeAsciiFromSymbol(evoSymbol)
        const evoAscii = `${evoSymbolAscii === PARENTHETICAL_CONVENTIONAL_NATURAL_ASCII ? BLANK : evoSymbolAscii}${CONVENTIONAL_SHARP_ASCII}` as Ascii<Flavor.EVO>
        const evoSymbolUnicode = computeUnicodeFromSymbol(evoSymbol)
        const evoUnicode = `${evoSymbolUnicode === PARENTHETICAL_CONVENTIONAL_NATURAL_UNICODE ? BLANK : evoSymbolUnicode}${CONVENTIONAL_SHARP_UNICODE}` as
            Unicode<Flavor.EVO>

        nocazoacs.push({
            boundClassId,
            commaClassId,
            commaDirection,
            apotomeCount,
            revoAscii,
            evoAscii,
            revoUnicode,
            evoUnicode,
        })
    })

    // Section 2a: upwards, from apotome to apotome-and-a-half
    boundClassIds.forEach((boundClassId: Id<BoundClass>, boundCommaOrFlaccoIndex: number): void => {
        const commaClassId = commaClassIds[ boundCommaOrFlaccoIndex ]
        const commaDirection = Direction.SUPER
        const apotomeCount = 1 as Count<Apotome>

        const flaccoId = flaccoIds[ boundCommaOrFlaccoIndex ]
        const flacco = getFlacco(flaccoId)
        const evoSymbol = computeSymbolFromFlacco(flacco)
        const evoSymbolAscii = computeAsciiFromSymbol(evoSymbol)
        const evoSymbolUnicode = computeUnicodeFromSymbol(evoSymbol)
        const evoAscii = `${evoSymbolAscii === PARENTHETICAL_CONVENTIONAL_NATURAL_ASCII ? BLANK : evoSymbolAscii}${CONVENTIONAL_SHARP_ASCII}` as Ascii<Flavor.EVO>
        const evoUnicode = `${evoSymbolUnicode === PARENTHETICAL_CONVENTIONAL_NATURAL_UNICODE ? BLANK : evoSymbolUnicode}${CONVENTIONAL_SHARP_UNICODE}` as
            Unicode<Flavor.EVO>

        const revoSymbol = apotomeShift(computeSymbolFromFlacco(flacco))
        const revoAscii = computeAsciiFromSymbol(revoSymbol) as Ascii<Flavor.REVO>
        const revoUnicode = computeUnicodeFromSymbol(revoSymbol) as Unicode<Flavor.REVO>

        nocazoacs.push({
            boundClassId,
            commaClassId,
            commaDirection,
            apotomeCount,
            revoAscii,
            evoAscii,
            revoUnicode,
            evoUnicode,
        })
    })

    // Section 2b: upwards, from apotome-and-a-half to max-triple-shaft-symbol
    extraFlaccoIds.forEach((flaccoId: Id<Flacco>, extraFlaccoIndex: number): void => {
        const commaOrBoundClassIndex = finalCommaOrBoundClassIndex - extraFlaccoIndex
        const boundClassId = boundClassIds[ commaOrBoundClassIndex ]

        const commaClassId = commaClassIds[ commaOrBoundClassIndex ]
        const commaDirection = Direction.SUB
        const apotomeCount = 2 as Count<Apotome>

        const flacco = getFlacco(flaccoId)

        const revoSymbol = apotomeShift(computeSymbolFromFlacco(flacco))
        const revoAscii = computeAsciiFromSymbol(revoSymbol)
        const revoUnicode = computeUnicodeFromSymbol(revoSymbol)

        const evoSymbol = computeSymbolFromFlacco(flacco)
        const evoSymbolAscii = computeAsciiFromSymbol(evoSymbol)
        const evoSymbolUnicode = computeUnicodeFromSymbol(evoSymbol)
        const evoAscii = `${evoSymbolAscii === PARENTHETICAL_CONVENTIONAL_NATURAL_ASCII ? BLANK : evoSymbolAscii}${CONVENTIONAL_SHARP_ASCII}` as Ascii<Flavor.EVO>
        const evoUnicode = `${evoSymbolUnicode === PARENTHETICAL_CONVENTIONAL_NATURAL_UNICODE ? BLANK : evoSymbolUnicode}${CONVENTIONAL_SHARP_UNICODE}` as
            Unicode<Flavor.EVO>

        nocazoacs.push({
            boundClassId,
            commaClassId,
            commaDirection,
            apotomeCount,
            revoAscii,
            evoAscii,
            revoUnicode,
            evoUnicode,
        })
    })

    // Section 2c: upwards, past max-triple-shaft-symbol to double-apotome
    reversedRemainingBoundClassIds.forEach((boundClassId: Id<BoundClass>, remainingBoundClassIndex: number): void => {
        const commaOrFlaccoIndex = finalRemainingBoundClassIndex - remainingBoundClassIndex
        const commaClassId = commaClassIds[ commaOrFlaccoIndex ]
        const commaDirection = Direction.SUB
        const apotomeCount = 2 as Count<Apotome>

        const flaccoId = flaccoIds[ commaOrFlaccoIndex ]
        const flacco = getFlacco(flaccoId)

        const revoSymbol = apotomeShift(getApotomeComplement(computeSymbolFromFlacco(flacco)))
        const revoAscii = computeAsciiFromSymbol(revoSymbol)
        const revoUnicode = computeUnicodeFromSymbol(revoSymbol)

        const evoSymbol = flipSymbol(computeSymbolFromFlacco(flacco))
        const evoSymbolAscii = computeAsciiFromSymbol(evoSymbol)
        const evoAscii = `${evoSymbolAscii === PARENTHETICAL_CONVENTIONAL_NATURAL_ASCII ? BLANK : evoSymbolAscii}${CONVENTIONAL_DOUBLE_SHARP_ASCII}` as
            Ascii<Flavor.EVO>
        const evoSymbolUnicode = computeUnicodeFromSymbol(evoSymbol)
        const evoUnicode = `${evoSymbolUnicode === PARENTHETICAL_CONVENTIONAL_NATURAL_UNICODE ? BLANK : evoSymbolUnicode}${CONVENTIONAL_DOUBLE_SHARP_UNICODE}` as
            Unicode<Flavor.EVO>

        nocazoacs.push({
            boundClassId,
            commaClassId,
            commaDirection,
            apotomeCount,
            revoAscii,
            evoAscii,
            revoUnicode,
            evoUnicode,
        })
    })

    // Section -1a: upwards, from negative half apotome to unison
    // Section -1b: upwards, from negative max single-shaft symbol to negative half apotome
    // Section -1c: upwards, from negative apotome almost to negative max single-shaft symbol
    // Section -2a: upwards, from negative apotome-and-a-half to negative apotome
    // Section -2b: upwards, from negative max-triple-shaft-symbol to negative apotome-and-a-half
    // Section -2c: upwards, from negative double apotome almost to negative max-triple-shaft-symbol

    return nocazoacs
}

export {
    computeNocazoacs,
}

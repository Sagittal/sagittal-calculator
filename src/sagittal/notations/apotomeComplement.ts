import { Char, isUndefined, Maybe } from "../../general"
import { ANY_ACCENT_CHAR, PARENTHETICAL_CONVENTIONAL_NATURAL_ASCII } from "../constants"
import { formatSymbol } from "../io"
import { SHAFT_UP } from "./elements"
import { flipAccents } from "./flip"
import { SagittalSymbol } from "./types"

const APOTOME_COMPLEMENT_PAIRS: Array<[SagittalSymbol, SagittalSymbol]> = [
    [SHAFT_UP, "/||\\"],                                    // (need to also catch bare shafts with accents)
    [PARENTHETICAL_CONVENTIONAL_NATURAL_ASCII, "/||\\"],    //   X
    [")|", "(||~"],                                         // A W
    ["|(", "/||)"],                                         // B V
    ["~|", ")//||"],                                        // C U
    [")|(", "//||"],                                        // D T
    [")~|", "~||\\"],                                       // E S
    ["~|(", "(||("],                                        // F R
    ["|~", "/||~"],                                         // G Q
    ["~~|", "~||)"],                                        // H P
    [")|~", "(||"],                                         // I O
    ["/|", "||\\"],                                         // J N
    [")/|", ")||)"],                                        // K M
    ["|)", "||)"],                                          // L L
    [")|)", ")/||"],                                        // M K
    ["|\\", "/||"],                                         // N J
    ["(|", ")||~"],                                         // O I
    ["~|)", "~~||"],                                        // P H
    ["/|~", "||~"],                                         // Q G
    ["(|(", "~||("],                                        // R F
    ["~|\\", ")~||"],                                       // S E
    ["//|", ")||("],                                        // T D
    [")//|", ")|\\\\"],                                     // U 
    ["/|)", "(|\\"],                                        // V
    ["(|~", "|\\\\"],                                       // W
    ["/|\\", "(|)"],                                        // X
    ["(/|", "|\\)"],                                        // Y
    [")/|\\", ")/|\\"],                                     // Z
] as Array<[SagittalSymbol, SagittalSymbol]>

const getApotomeComplement = (symbol: SagittalSymbol): SagittalSymbol => {
    let accents = "" as SagittalSymbol
    let core = "" as SagittalSymbol
    const chars = symbol.split("") as Char[]
    chars.forEach((char: Char): void => {
        if (char.match(ANY_ACCENT_CHAR)) {
            accents = (accents + char) as SagittalSymbol
        } else {
            core = (core + char) as SagittalSymbol
        }
    })

    let apotomeComplement: Maybe<SagittalSymbol> = undefined
    APOTOME_COMPLEMENT_PAIRS.forEach(([complementA, complementB]: [SagittalSymbol, SagittalSymbol]): void => {
        if (core === complementA) apotomeComplement = complementB
        if (core === complementB) apotomeComplement = complementA
    })

    if (isUndefined(apotomeComplement)) {
        throw new Error(`Apotome complement not found for symbol ${formatSymbol(symbol, { align: false })}.`)
    }

    const flippedAccents = flipAccents(accents)

    return `${flippedAccents}${apotomeComplement}` as SagittalSymbol
}

export {
    getApotomeComplement,
}

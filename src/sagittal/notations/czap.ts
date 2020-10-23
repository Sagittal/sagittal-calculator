// Import {
//     AddScamons,
//     Comma,
//     Decimal,
//     Direction,
//     Id,
//     InvertScamon,
//     Max,
//     Min,
//     Multiplier,
//     MultiplyScamon,
//     Scamon,
//     UNISON, Zone,
// } from "../../../general"
// Import { APOTOME, HALF_APOTOME } from "../../constants"
// Import { getCommaClass } from "../commaClass"
// Import { AccidentalKey, Czap, Flacombo } from "../types"
// Import { AccidentalKeyOptions, CaptureZoneOptions, PrimaryCommaOptions } from "./types"
//
// Const computePrimaryComma = ({ commaClassId, commaDirection, apotomeCount }: PrimaryCommaOptions): Comma => {
//     Const comma = getCommaClass(commaClassId).pitch
//     Const commaticAlteration: Comma = commaDirection === Direction.SUPER ? comma : invertScamon(comma) as Comma
//     Const apotomeBase: Comma = multiplyScamon(
//         APOTOME,
//         ApotomeCount as Decimal<{ integer: true }> as Decimal<{ integer: true }> & Multiplier,
//     ) as Comma
//
//     Return addScamons(apotomeBase, commaticAlteration) as Scamon as Comma
// }
//
// Const computeCaptureZone = ({ boundClassId, commaDirection, apotomeCount }: CaptureZoneOptions): Zone => {
       // Todo: FLACOMBO, SECTION, NOTATION GENERATION
       //  Shite I just realized that you won't be able to get the full capture zone without info from other elements
       //  That is, the single individual flacombo won't have all the necessary info... so maybe you really should just
       //  Have more of a single "away-er" bound, relative to the nearest apotome? and if it's missing, that means it
       //  Straddles it? whether that's an apotome midpoint or apotome multiple?
       //  So that will mean more infrastructure/overhead/reasoning about the bounds, rather than it being cut and dry
       //  As a Zone... but maybe better overall?
//     Const bound = getBoundClass(boundClassId).pitch
//     Const boundAlteration = commaDirection === Direction.SUPER ? bound : invertScamon(bound)
//     Const apotomeBase = multiplyScamon(
//         APOTOME,
//         ApotomeCount as Decimal<{ integer: true }> as Decimal<{ integer: true }> & Multiplier,
//     ) as Comma
//
//     Return addScamons(apotomeBase, boundAlteration)
// }
//
// Const computeAccidentalKey = (options: AccidentalKeyOptions): AccidentalKey => {
//     Const { commaClassId, commaDirection, apotomeCount, flaccoId } = options
//
//     If (commaClassId === 0) {
//         Return "Z0D_000" as AccidentalKey
//     }
//
//     Const sectionDirection = commaDirection === Direction.SUPER ? "P" : "N"
//     Const sectionApotome =
//         ApotomeCount === 0 ?
//             1 :
//             ApotomeCount === 1 ?
//                 CommaDirection === Direction.SUPER ?
//                     2 :
//                     1 :
//                 2
//     Const sectionLetter = commaClassId as Id !== flaccoId as Id ?
//  "B" :
//  CommaDirection === Direction.SUPER ?
//      "A" :
//      "C"
//
//     Let formattedCommaClassId = commaClassId.toString()
//     While (formattedCommaClassId.length < 3) {
//         FormattedCommaClassId = "0" + formattedCommaClassId
//     }
//
//     Return `${sectionDirection}${sectionApotome}${sectionLetter}_${formattedCommaClassId}` as AccidentalKey
// }
//
// Const computeCzap = ({ commaClassId, commaDirection, apotomeCount, boundClassId, flaccoId }: Flacombo): Czap => {
//     Return {
//         PrimaryComma: computePrimaryComma({ commaClassId, commaDirection, apotomeCount }),
//         CaptureZone: computeCaptureZone(),
//         AccidentalKey: computeAccidentalKey({ commaClassId, commaDirection, apotomeCount, flaccoId }),
//     }
// }
//
// Export {
//     ComputeCzap,
// }

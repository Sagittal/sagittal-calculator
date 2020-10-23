import {Comma, compute23FreeClass, Id, saveLog, stringify} from "../../../general"
import {
    CommaClass,
    computeAas,
    computeAte,
    computeCommaName,
    computeN2D3P9,
    computeSecondaryCommaZone,
    formatCommaClass,
    getCommaClass,
    JI_NOTATION,
} from "../../../sagittal"
import {computeCommas, parseFindCommasSettings} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
import {applySharedPitchCommandSetup} from "./shared"

// TODO: FINALLY IMPLEMENT PRIMARY COMMA USEFULNESS CHECK
//  See: http://forum.sagittal.org/viewtopic.php?p=2432#p2432
//  And: http://forum.sagittal.org/viewtopic.php?p=2419#p2419

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()

// Vary these
const DATE = 9 // The ATE at which N2D3P9 will get doubled.
const DAAS = 9 // The AAS at which N2D3P9 will get doubled.

// The two different forms
/*
Actually, I can see some serious floating-point overflow and underflow issues with the form:
    N2D3P9 × 2^(2^(ATE-DATE)) × 2^(2^(AAS-DAAS))

Can you build it into the code as:
    lb(N2D3P9) + 2^(ATE-DATE) + 2^(AAS-DAAS)
*/

// Then for compress/expand

// Either
// Lb(n2d3p9) + 2^(ATE-DATE)
// Or
// N2d3p9^(1/2) * 2^2^???(ATE-DATE)^2 ???
// Actually I'm not sure whether this is multiply or add, or if either of the 2^2^'s cancel

// Finally the constants t and s
// What are these

JI_NOTATION.forEach((commaClassId: Id<CommaClass>): void => {
    const commaClass = getCommaClass(commaClassId)
    const commaName = computeCommaName(commaClass.pitch)

    saveLog(`\n\n${formatCommaClass(commaClassId)} ${commaName}\n\n`)

    const secondaryCommaZone = computeSecondaryCommaZone(commaClassId)
    const lowerBound = secondaryCommaZone[0]
    const upperBound = secondaryCommaZone[1]

    const commas = computeCommas({...jiPitchScriptGroupSettings, ...findCommasSettings, lowerBound, upperBound})

    // let bestUsefulness = Infinity
    // let bestComma = undefined
    commas.forEach((comma: Comma): void => {
        const name = computeCommaName(comma)
        const n2d3p9 = computeN2D3P9(compute23FreeClass(comma))
        const aas = computeAas(comma)
        const ate = computeAte(comma)
        saveLog(stringify({name, n2d3p9, aas, ate}))

        // const usefulness = log(n2d3p9, 2 as Base) + pow(ate - DATE, 2 as Exponent) + pow(aas - DAAS, 2 as Exponent)
        // if (usefulness < bestUsefulness) {
        //     bestUsefulness = usefulness
        //     bestComma = comma
        // }
    })

    // if (isUndefined(bestComma)) {
    //     saveLog("No best comma found.")
    // } else {
    //     saveLog(stringify(analyzeComma(bestComma), {multiline: true}))
    // }
})

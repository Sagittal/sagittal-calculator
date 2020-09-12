import {
    Comma,
    computeCentsFromPitch,
    computeIsSmoothJiPitch,
    computeIsSubPitch,
    computeIsUnisonPitch,
    computeJiPitchRatio,
    computeMonzoFromInteger,
    computeRoughRatio,
    computeSubRatio,
    computeSuperPitch, 
    Direction,
    FIVE_ROUGHNESS,
    FractionalPart,
    Name,
    PRIMES,
    Ratio,
    stringify,
    SUPERSCRIPT_NUMS,
    THREE_SMOOTHNESS,
} from "../../../general"
import { computeIsCommaSized } from "./isCommaSized"
import { computeSizeCategory } from "./sizeCategory"

const primeFactorize = (numeratorOrDenominator: FractionalPart) => {
    if (numeratorOrDenominator === 1) return "1"

    const monzo = computeMonzoFromInteger(numeratorOrDenominator)
    const factorizedTerms: string[] = []

    monzo.forEach((primeExponent, primeExponentIndex) => {
        if (primeExponent === 0) {
            return
        }

        if (primeExponent === 1) {
            factorizedTerms.push(`${PRIMES[ primeExponentIndex ]}`)
        }

        if (primeExponent > 1) {
            factorizedTerms.push(`${PRIMES[ primeExponentIndex ]}${SUPERSCRIPT_NUMS[ primeExponent ]}`)
        }
    })

    return factorizedTerms.join(".")
}

const stringifyRatio = (ratio: Ratio, { factored }: { factored: boolean }) => {
    return factored ?
        ratio.map(primeFactorize) :
        ratio.map((fractionalPart: FractionalPart) => fractionalPart.toString())
}

// "Secor-Keenan systematic name" or "Sagittal name"

const computeCommaName = (
    comma: Comma,
    { directed = true, factored = false, abbreviated = true } = {},
): Name<Comma> => {
    if (!computeIsCommaSized(comma)) {
        throw new Error(`Comma ${stringify(comma)} is outside of comma-sized range and cannot be named.`)
    }

    const maybeHyphen = abbreviated ? "" : "-"

    const maybeDown = computeIsSubPitch(comma) ? " down" : ""

    const superComma: Comma<{ direction: Direction.SUPER }> = 
        // TODO: okay, I tried valiantly, but I could not figure out how to get this thing to both take a parameterized
        //  T for the NumericTypeParameters while also allowing that Comma brand to pass through... 
        computeSuperPitch(comma) as Comma<{ direction: Direction.SUPER }>
    const sizeCategory = computeSizeCategory(computeCentsFromPitch(superComma), { abbreviated })

    let formattedTwoThreeFreeRatio
    if (computeIsSmoothJiPitch(comma, THREE_SMOOTHNESS) && !computeIsUnisonPitch(comma)) {
        formattedTwoThreeFreeRatio = "3"
    } else {
        // TODO: holy insano balls ... okay so it clearly matters very much the ORDER you do these things in...
        //  I'll bet if you compare how you construct a 2,3-free class you first roughen it and THEN super it.
        const twoThreeFreeRatio = computeRoughRatio(computeJiPitchRatio(superComma), FIVE_ROUGHNESS)

        if (directed) {
            const stringifiedRatio = stringifyRatio(twoThreeFreeRatio, { factored })

            formattedTwoThreeFreeRatio = stringifiedRatio[ 1 ] === "1" ? stringifiedRatio[ 0 ] : stringifiedRatio.join("/")
        } else {
            const stringifiedRatio = stringifyRatio(computeSubRatio(twoThreeFreeRatio), { factored })

            formattedTwoThreeFreeRatio = stringifiedRatio[ 0 ] === "1" ? stringifiedRatio[ 1 ] : stringifiedRatio.join(":")
        }
    }

    return `${formattedTwoThreeFreeRatio}${maybeHyphen}${sizeCategory}${maybeDown}` as Name<Comma>
}

export {
    computeCommaName,
}



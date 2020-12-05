import {
    BLANK,
    Comma,
    computeCentsFromPitch,
    computeSubQuotient,
    computeSuperScamon,
    Direction,
    formatCents,
    isRationalScamonSmooth,
    isRationalScamonSub,
    isRationalScamonUnison,
    Name,
    Quotient,
    stringify,
    THREE_SMOOTHNESS,
} from "../../../general"
import {computeCommaNameQuotient} from "./commaNameQuotient"
import {computeMaybeComplex, computeMaybeComplexFor3Commas} from "./complex"
import {formatCommaNameQuotient} from "./formatCommaNameQuotient"
import {SIZE_CATEGORY_ABBREVIATIONS, SIZE_CATEGORY_NAMES} from "./sizeCategories"
import {computeSizeCategory} from "./sizeCategory"
import {isCommaSized} from "./typeGuards"
import {CommaNameOptions, FactoringMode, SizeCategory} from "./types"

const removeParentheses = (string: string): string =>
    string
        .replace("(", BLANK)
        .replace(")", BLANK)

// "Secor-Keenan systematic name" or "Sagittal name"

const computeCommaName = (
    comma: Comma,
    {directed = true, factoringMode = FactoringMode.THRESHOLD, abbreviated = true}: CommaNameOptions = {},
): Name<Comma> => {
    if (!isCommaSized(comma)) {
        throw new Error(`Comma ${stringify(comma)} is outside of comma-sized range and cannot be named: ${formatCents(computeCentsFromPitch(comma))}`)
    }

    const maybeHyphen = abbreviated ? BLANK : "-"

    const maybeDown = isRationalScamonSub(comma) ? " down" : BLANK

    const superComma = computeSuperScamon(comma) as Comma<{rational: true, direction: Direction.SUPER}>
    const sizeCategory: SizeCategory = computeSizeCategory(superComma)
    const sizeCategoryText = abbreviated ? SIZE_CATEGORY_ABBREVIATIONS[sizeCategory] : SIZE_CATEGORY_NAMES[sizeCategory]

    let formattedCommaNameQuotient
    let maybeComplex
    if (isRationalScamonSmooth(comma, THREE_SMOOTHNESS) && !isRationalScamonUnison(comma)) {
        formattedCommaNameQuotient = "3"
        maybeComplex = computeMaybeComplexFor3Commas(comma)
    } else {
        const commaNameQuotient = computeCommaNameQuotient(comma)
        const maybeComplexOptions = {
            two3FreeQuotient: commaNameQuotient as Quotient<{rational: true}> as Quotient<{rational: true, rough: 5}>,
            sizeCategory,
            abbreviated,
        }
        maybeComplex = computeMaybeComplex(comma, maybeComplexOptions)

        if (directed) {
            const stringifiedQuotient = formatCommaNameQuotient(commaNameQuotient, {factoringMode})

            formattedCommaNameQuotient = stringifiedQuotient[1] === "1" ?
                removeParentheses(stringifiedQuotient[0]) :
                stringifiedQuotient.join("/")
        } else {
            const stringifiedQuotient =
                formatCommaNameQuotient(computeSubQuotient(commaNameQuotient), {factoringMode})

            formattedCommaNameQuotient = stringifiedQuotient[0] === "1" ?
                removeParentheses(stringifiedQuotient[1]) :
                removeParentheses(stringifiedQuotient.join(":"))
        }
    }

    return `${maybeComplex}${formattedCommaNameQuotient}${maybeHyphen}${sizeCategoryText}${maybeDown}` as Name<Comma>
}

export {
    computeCommaName,
}

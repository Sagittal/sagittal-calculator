import {
    compute23FreeClass,
    computeScamonFromQuotient,
    Denominator,
    Filename,
    isLowestTerms,
    Max,
    NEWLINE,
    Quotient,
    QuotientPart,
    readLines,
} from "../../general"
import {
    analyze23FreeClass,
    computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator,
    KnownLowN2D3P9Numerator,
    N2D3P9,
} from "../../sagittal"
import { computePopular23FreeClass } from "./popular23FreeClass"
import { Popular23FreeClass } from "./types"

const computePopular23FreeClassFromRationalQuotient = (
    rationalQuotient: Quotient<{ rational: true }>,
): Popular23FreeClass => {
    const rationalScamon = computeScamonFromQuotient(rationalQuotient)
    const two3FreeClass = compute23FreeClass(rationalScamon)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    return computePopular23FreeClass(two3FreeClassAnalysis)
}

const computePopular23FreeClassesFromKnownNumerators = (maxN2D3P9: Max<N2D3P9>): Popular23FreeClass[] => {
    const knownNumerators: KnownLowN2D3P9Numerator[] = JSON.parse(
        // tslint:disable-next-line max-line-length
        readLines("src/sagittal/ji/badness/complexity/unpopularity/n2d3p9/knownNumerators/knownNumerators.txt" as Filename).join(NEWLINE),
    )

    const popular23FreeClasses = [
        computePopular23FreeClassFromRationalQuotient([1, 1] as Quotient<{ rational: true }>),
    ] as Popular23FreeClass[]

    for (const [knownNumeratorIndex, knownNumerator] of knownNumerators.entries()) {
        const possibleDenominators = knownNumerators.slice(0, knownNumeratorIndex)

        for (const [possibleDenominatorIndex, possibleDenominator] of possibleDenominators.entries()) {
            const n2d3p9 =
                computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator(knownNumerator, possibleDenominator)

            if (n2d3p9 <= maxN2D3P9) {
                const rationalQuotient = [
                    knownNumerator.numerator,
                    possibleDenominator.numerator as QuotientPart as Denominator,
                ] as Quotient<{ rational: true }>
                if (!isLowestTerms(rationalQuotient)) continue
                popular23FreeClasses.push(computePopular23FreeClassFromRationalQuotient(rationalQuotient))
            } else if (possibleDenominatorIndex === 0) {
                break
            }
        }
    }

    return popular23FreeClasses
}

export {
    computePopular23FreeClassesFromKnownNumerators,
}

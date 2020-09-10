import { computeCentsFromMonzo, computeGpf, computeRatioFromMonzo, computeSopfr, Prime, Sopfr } from "../../general"
import { AnalyzedComma, Comma, TwoThreeFreeClass } from "../types"
import { computeApotomeSlope, computeN2D3P9, N2D3P9 } from "./evaluation"
import { computeSagittalCommaName } from "./name"
import { compute23FreeClass } from "./twoThreeFreeClass"
import { CommaNameOptions } from "./types"

const analyzeComma = (
    comma: Comma,
    options: CommaNameOptions = {},
): AnalyzedComma => {
    const { directed = true, factored = false, abbreviated = true } = options

    const monzo = comma.monzo

    const apotomeSlope = computeApotomeSlope(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromMonzo(monzo)
    const limit: Prime = computeGpf(monzo)

    // TODO: okay perhaps rather than using this "giveName" conceit instead you just ahave a sperate function
    //  called naalyzeComma which doesthis and this function doesn't do it
    const name = computeSagittalCommaName(monzo, { directed, factored, abbreviated })

    // TODO: post refactor, a lot of this might be kind of redund with analyzeRationalPitch
    const twoThreeFreeClass: TwoThreeFreeClass = compute23FreeClass(monzo)
    const twoThreeFreeSopfr = computeSopfr(twoThreeFreeClass.monzo) as Sopfr<5>
    const n2d3p9: N2D3P9 = computeN2D3P9(twoThreeFreeClass.monzo)

    return {
        ...comma,
        cents,
        ratio,
        name,
        limit,
        apotomeSlope,
        twoThreeFreeClass,
        twoThreeFreeSopfr,
        n2d3p9,
    } as AnalyzedComma
}

export {
    analyzeComma,
}

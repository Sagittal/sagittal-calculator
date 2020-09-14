import {
    abs,
    Cents,
    Comma,
    computeJiPitchMonzo,
    Copfr,
    Exponent,
    Io,
    LogTarget,
    Max,
    min,
    Min,
    ObjectKey,
    Prime,
    saveLog,
    Sopfr,
    sort,
    stringify, THREE_PRIME_INDEX,
} from "../../../general"
import { analyzeComma, CommaAnalysis, computeNotatingCommas, N2D3P9, Tina, TINA } from "../../../sagittal"
import { computeCommas } from "../commas"
import { jiPitchScriptGroupSettings } from "../globals"
import { applySharedPitchCommandSetup } from "./shared"

// Per http://forum.sagittal.org/viewtopic.php?p=2395#p2395

applySharedPitchCommandSetup()

const TINAS_TO_CHECK: Tina[] = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5] as Tina[]
const PLUS_MINUS_RANGE = 0.25
const maxTinaSizes: Cents[] = TINAS_TO_CHECK.map((tina: Tina): Cents => TINA * (tina + PLUS_MINUS_RANGE) as Cents)

const LIMITLESS_N2D3P9 = Infinity as Max<N2D3P9>
const LIMITLESS_COPFR = 99999 as Max<Copfr<{ rough: 5 }>>
const MAX_POSSIBLE_SOPFR_WITHOUT_CRASHING = 127 as Max<Sopfr<{ rough: 5 }>>
const MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR = MAX_POSSIBLE_SOPFR_WITHOUT_CRASHING as Max<Max<Prime>>
const MIN_CENTS = (TINAS_TO_CHECK[ 0 ] - PLUS_MINUS_RANGE) * TINA as Min<Cents>
const MAX_CENTS = (TINAS_TO_CHECK[ TINAS_TO_CHECK.length - 1 ] + PLUS_MINUS_RANGE) * TINA as Max<Cents>

const isLate = (comma: Comma): boolean => {
    const monzo = computeJiPitchMonzo(comma)
    const ate = abs(monzo[ THREE_PRIME_INDEX ])

    const notatingCommas = computeNotatingCommas(comma, { ...jiPitchScriptGroupSettings, maxN2D3P9: LIMITLESS_N2D3P9 })
    const ates = notatingCommas.map((notatingComma: Comma): Exponent<Prime> => {
        return abs(computeJiPitchMonzo(notatingComma)[ 1 ])
    })

    saveLog(`ATE ${ate} vs. other notating ATEs ${ates}` as Io, LogTarget.PROGRESS)

    const minimumAte = min(...ates)

    return ate === minimumAte as Exponent<Prime>
}

const commas = computeCommas({
    ...jiPitchScriptGroupSettings,
    max23FreeCopfr: LIMITLESS_COPFR,
    max23FreeSopfr: MAX_POSSIBLE_SOPFR_WITHOUT_CRASHING,
    maxPrimeLimit: MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR,
    minCents: MIN_CENTS,
    maxCents: MAX_CENTS,
    maxN2D3P9: LIMITLESS_N2D3P9,
})

const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))
sort(commaAnalyses, { by: "cents" })

const commaAnalysesByTina: { [ index: number ]: CommaAnalysis[] } = {
    [ 0.5 ]: [],
    [ 1 ]: [],
    [ 1.5 ]: [],
    [ 2 ]: [],
    [ 2.5 ]: [],
    [ 3 ]: [],
    [ 3.5 ]: [],
    [ 4 ]: [],
    [ 4.5 ]: [],
    [ 5 ]: [],
    [ 5.5 ]: [],
    [ 6 ]: [],
    [ 6.5 ]: [],
    [ 7 ]: [],
    [ 7.5 ]: [],
    [ 8 ]: [],
    [ 8.5 ]: [],
    [ 9 ]: [],
    [ 9.5 ]: [],
}

let currentTina = 0.5
commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
    if (commaAnalysis.cents > maxTinaSizes[ currentTina * 2 - 1 ]) {
        currentTina = currentTina + 0.5
    }
    commaAnalysesByTina[ currentTina ].push(commaAnalysis)
})

Object.entries(commaAnalysesByTina).forEach(([tina, tinaCommaAnalysis]: [string, CommaAnalysis[]]): void => {
    sort(tinaCommaAnalysis, { by: "n2d3p9" as ObjectKey })

    saveLog(
        // tslint:disable-next-line:max-line-length
        `Processing tina ${tina} with ${tinaCommaAnalysis.length} possible commas to check, sorted by increasing N2D3P9` as Io,
        LogTarget.PROGRESS,
    )

    let index = 0
    let lateComma = undefined
    while (true) {
        const comma = tinaCommaAnalysis[ index ]
        saveLog(`Checking comma ${index}: ${comma.monzo}, N2D3P9 ${comma.n2d3p9}` as Io, LogTarget.PROGRESS)
        if (isLate(comma)) {
            lateComma = comma
            break
        }
        index = index + 1
    }

    saveLog(`\n\nTINA ${tina}: ${stringify(lateComma)}\n\n\n` as Io, LogTarget.ALL)
})

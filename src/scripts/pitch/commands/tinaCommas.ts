import {
    abs,
    Cents,
    Copfr,
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
    stringify,
} from "../../../general"
import { analyzeComma, AnalyzedComma, Comma, computeNotatingCommas, N2D3P9, TINA } from "../../../sagittal"
import { computeCommas } from "../commas"
import { PITCH_SCRIPT_GROUP } from "../constants"
import { pitchScriptGroupSettings } from "../globals"
import { applySharedPitchCommandSetup } from "./shared"

applySharedPitchCommandSetup()

const TINAS_TO_CHECK = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5]
const PLUS_MINUS_RANGE = 0.25
const maxTinaSizes: Cents[] = TINAS_TO_CHECK.map(tina => TINA * (tina + PLUS_MINUS_RANGE) as Cents)

const LIMITLESS_N2D3P9 = Infinity as Max<N2D3P9>
const LIMITLESS_COPFR = 99999 as Max<Copfr<5>>
const MAX_POSSIBLE_SOPFR_WITHOUT_CRASHING = 127 as Max<Sopfr<5>>
const MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR = MAX_POSSIBLE_SOPFR_WITHOUT_CRASHING as Max<Max<Prime>>
const MIN_CENTS = (TINAS_TO_CHECK[ 0 ] - PLUS_MINUS_RANGE) * TINA as Min<Cents>
const MAX_CENTS = (TINAS_TO_CHECK[ TINAS_TO_CHECK.length - 1 ] + PLUS_MINUS_RANGE) * TINA as Max<Cents>

const isLate = (comma: Comma) => {
    const ate = abs(comma.monzo[ 1 ])

    const notatingCommas = computeNotatingCommas(comma, { ...pitchScriptGroupSettings, maxN2D3P9: LIMITLESS_N2D3P9 })
    const ates = notatingCommas.map(notatingComma => abs(notatingComma.monzo[ 1 ]))

    saveLog(`ATE ${ate} vs. other notating ATEs ${ates}` as Io, LogTarget.PROGRESS, PITCH_SCRIPT_GROUP)

    const minimumAte = min(...ates)

    return ate === minimumAte
}

const commas = computeCommas({
    ...pitchScriptGroupSettings,
    max23FreeCopfr: LIMITLESS_COPFR,
    max23FreeSopfr: MAX_POSSIBLE_SOPFR_WITHOUT_CRASHING,
    maxPrimeLimit: MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR,
    minCents: MIN_CENTS,
    maxCents: MAX_CENTS,
    maxN2D3P9: LIMITLESS_N2D3P9,
})

const analyzeCommas = commas.map(comma => analyzeComma(comma))
sort(analyzeCommas, { by: "cents" })

const tinasCommas: { [ index: number ]: AnalyzedComma[] } = {
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
analyzeCommas.forEach(analyzedComma => {
    if (analyzedComma.cents > maxTinaSizes[ currentTina * 2 - 1 ]) {
        currentTina = currentTina + 0.5
    }
    tinasCommas[ currentTina ].push(analyzedComma)
})

Object.entries(tinasCommas).forEach(([tina, tinaCommas]) => {
    sort(tinaCommas, { by: "n2d3p9" as ObjectKey })

    saveLog(
        `Processing tina ${tina} with ${tinaCommas.length} possible commas to check, sorted by increasing N2D3P9` as Io,
        LogTarget.PROGRESS,
        PITCH_SCRIPT_GROUP,
    )

    let index = 0
    let lateComma = undefined
    while (true) {
        const comma = tinaCommas[ index ]
        saveLog(
            `Checking comma ${index}: ${comma.monzo}, N2D3P9 ${comma.n2d3p9}` as Io,
            LogTarget.PROGRESS,
            PITCH_SCRIPT_GROUP,
        )
        if (isLate(comma)) {
            lateComma = comma
            break
        }
        index = index + 1
    }

    saveLog(`\n\nTINA ${tina}: ${stringify(lateComma)}\n\n\n` as Io, LogTarget.ALL, PITCH_SCRIPT_GROUP)
})

// tslint:disable no-reaching-imports

import {
    computeScamonFromDecimal,
    Decimal,
    Filename, Max,
    Min,
    Monzo,
    NEWLINE,
    readLines,
    Scamon,
    setupScriptAndIo, Zone,
} from "../general"
import {Ate, computeCommasFrom23FreeRationalMonzo, N2D3P9} from "../sagittal"
import {ScriptGroup} from "./types"

setupScriptAndIo(ScriptGroup.TMP as Filename)

// This is a great place to paste stuff you need to run without Jasmine swallowing the stacktrace!
// Just paste whatever you need here and run `npm run tmp`.

const tmp = JSON.parse(readLines("src/scripts/tmp.txt" as Filename).join(NEWLINE))

const two3FreeRationalMonzo = [0, 0, 3, 5, -1] as Monzo<{rational: true, rough: 5}>
const lowerBound = computeScamonFromDecimal(1.023374 as Decimal) as Min<Scamon>
const upperBound = computeScamonFromDecimal(1.023433 as Decimal) as Max<Scamon>
const zone: Zone = {extrema: [lowerBound, upperBound]}
const maxAte = 12 as Max<Ate>
const maxN2D3P9 = 40000 as Max<N2D3P9>

const actual = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {zone, maxAte, maxN2D3P9})

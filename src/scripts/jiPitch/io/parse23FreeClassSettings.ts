import { program } from "commander"
import { Max, Prime } from "../../../general"
import {
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_MAX_TWO_THREE_FREE_COPFR,
    DEFAULT_MAX_TWO_THREE_FREE_SOPFR,
} from "../../../sagittal"
import { TwoThreeFreeClassSettings } from "../types"

const parse23FreeClassSettings = (
    defaultOverrides: Partial<TwoThreeFreeClassSettings> = {},
): TwoThreeFreeClassSettings => {
    const max23FreeSopfr = program.max23FreeSopfr ||
        defaultOverrides.max23FreeSopfr ||
        DEFAULT_MAX_TWO_THREE_FREE_SOPFR
    const max23FreeCopfr = program.max23FreeCopfr ||
        defaultOverrides.max23FreeCopfr ||
        DEFAULT_MAX_TWO_THREE_FREE_COPFR
    const maxPrimeLimit: Max<Max<Prime>> = program.maxPrimeLimit ||
        defaultOverrides.maxPrimeLimit ||
        DEFAULT_MAX_PRIME_LIMIT

    return { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit }
}

export {
    parse23FreeClassSettings,
}

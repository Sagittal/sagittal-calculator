import { performance } from "perf_hooks"
import { count, Ms, round, sort } from "../../../src/general"
import { COUNT_SLOW_SPECS_TO_SUMMARIZE, MAX_TEST_DESCRIPTION_LENGTH, WARN_THRESHOLD_MS } from "./constants"
import { SpecTime } from "./types"

const specTimes: SpecTime[] = []
let specStartedTime = 0

const slowReporter: jasmine.CustomReporter = {
    specStarted() {
        specStartedTime = performance.now() // TODO: perhaps a typedOperations module inside code/
    },

    specDone(actual: jasmine.CustomReporterResult) {
        const time = round(performance.now() - specStartedTime) as Ms
        const description = actual.fullName.length > MAX_TEST_DESCRIPTION_LENGTH ?
            actual.fullName.slice(0, MAX_TEST_DESCRIPTION_LENGTH) + "…" :
            actual.fullName
        specTimes.push({ description: description, time: time })

        if (time >= WARN_THRESHOLD_MS) {
            console.log(`      took ${time}ms`.yellow)
        }
    },

    jasmineDone() {
        const slowestSpecs = sort(specTimes, { by: "time", descending: true })
            .filter(specTime => specTime.time > WARN_THRESHOLD_MS)
            .slice(0, COUNT_SLOW_SPECS_TO_SUMMARIZE)

        const slowestSpecCount = count(slowestSpecs)
        if (slowestSpecCount) {
            console.log(`${slowestSpecCount} slowest specs:`)
            console.table(slowestSpecs)
        }
    },
}

export {
    slowReporter,
}

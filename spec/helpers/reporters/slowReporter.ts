import { performance } from "perf_hooks"
import { sort } from "../../../src/general"
import { COUNT_SLOW_SPECS_TO_SUMMARIZE, MAX_TEST_DESCRIPTION_LENGTH, WARN_THRESHOLD_MS } from "./constants"
import { SpecTime } from "./types"
import CustomReporterResult = jasmine.CustomReporterResult
import CustomReporter = jasmine.CustomReporter

const specTimes: SpecTime[] = []
let specStartedTime = 0

const slowReporter: CustomReporter = {
    specStarted() {
        specStartedTime = performance.now()
    },

    specDone(result: CustomReporterResult) {
        const time = Math.round(performance.now() - specStartedTime)
        const description = result.fullName.length > MAX_TEST_DESCRIPTION_LENGTH ?
            result.fullName.slice(0, MAX_TEST_DESCRIPTION_LENGTH) + "…" :
            result.fullName
        specTimes.push({ description: description, time: time })

        if (time >= WARN_THRESHOLD_MS) {
            console.log(`      took ${time}ms`.yellow)
        }
    },

    jasmineDone() {
        const slowestSpecs = sort(specTimes, { by: "time", descending: true })
            .filter(specTime => specTime.time > WARN_THRESHOLD_MS)
            .slice(0, COUNT_SLOW_SPECS_TO_SUMMARIZE)

        if (slowestSpecs.length) {
            console.log(`${slowestSpecs.length} slowest specs:`)
            // TODO: wow, console.table huh? I should see if some of the old stuff would look better this way
            console.table(slowestSpecs)
        }
    },
}

export {
    slowReporter,
}
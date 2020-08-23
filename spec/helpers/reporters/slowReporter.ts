import { performance } from "perf_hooks"
import { SpecTime } from "./types"
import CustomReporterResult = jasmine.CustomReporterResult
import CustomReporter = jasmine.CustomReporter

const WARN_THRESHOLD_MS = 200
const COUNT_SLOW_SPECS_TO_SUMMARIZE = 20
const MAX_TEST_DESCRIPTION_LENGTH = 100

const specTimes: SpecTime[] = []
let specStartedTime = 0

const slowReporter: CustomReporter = {
    specStarted() {
        specStartedTime = performance.now()
    },

    specDone(result: CustomReporterResult) {
        const time = Math.round(performance.now() - specStartedTime)
        const description = result.fullName.length > MAX_TEST_DESCRIPTION_LENGTH ? result.fullName.slice(0, MAX_TEST_DESCRIPTION_LENGTH) + "…" : result.fullName
        specTimes.push({ description: description, time: time })

        if (time >= WARN_THRESHOLD_MS) {
            console.log(`      took ${time}ms`.yellow)
        }
    },

    jasmineDone() {
        // TODO: I should definitely add a helper method for sorting at this point
        const slowestSpecs = specTimes.sort((a: SpecTime, b: SpecTime) => b.time - a.time)
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

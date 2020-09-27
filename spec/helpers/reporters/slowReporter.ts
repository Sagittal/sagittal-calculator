import { count, Io, KeyPath, LogTarget, Ms, round, saveLog, sort, subtract } from "../../../src/general"
import { now } from "../../../src/general/code"
import { COUNT_SLOW_SPECS_TO_SUMMARIZE, MAX_TEST_DESCRIPTION_LENGTH, WARN_THRESHOLD_MS } from "./constants"
import { SpecTime } from "./types"

const specTimes: SpecTime[] = []
let specStartedTime = 0 as Ms

const slowReporter: jasmine.CustomReporter = {
    specStarted(): void {
        specStartedTime = now()
    },

    specDone(actual: jasmine.CustomReporterResult): void {
        const time = round(subtract(now(), specStartedTime))
        const description = actual.fullName.length > MAX_TEST_DESCRIPTION_LENGTH ?
            actual.fullName.slice(0, MAX_TEST_DESCRIPTION_LENGTH) + "…" :
            actual.fullName
        specTimes.push({ description: description, time: time })

        if (time >= WARN_THRESHOLD_MS) {
            saveLog(`      took ${time}ms` as Io, LogTarget.SPEC)
        }
    },

    jasmineDone(): void {
        const slowestSpecs = sort(specTimes, { by: "time" as KeyPath, descending: true })
            .filter((specTime: SpecTime): boolean => specTime.time > WARN_THRESHOLD_MS)
            .slice(0, COUNT_SLOW_SPECS_TO_SUMMARIZE)

        const slowestSpecCount = count(slowestSpecs)
        if (slowestSpecCount) {
            saveLog(`${slowestSpecCount} slowest specs:` as Io, LogTarget.SPEC)
            console.table(slowestSpecs)
        }
    },
}

export {
    slowReporter,
}

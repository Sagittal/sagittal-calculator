import { CustomReporterResult } from "jasmine-spec-reporter/built/spec-reporter"

// This is quite useful when the suite starts to hang, so you can identify where the issue is.

const specNameReporter: jasmine.CustomReporter = {
    specStarted(result: CustomReporterResult): void {
        // TODO: there might be some nice way to turn this on/off w/ a flag to `npm t`
        // console.warn(result.fullName)
    },
}

export {
    specNameReporter,
}

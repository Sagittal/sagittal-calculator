import { CustomReporterResult } from "jasmine-spec-reporter/built/spec-reporter"
import { Io } from "../../../src/general/io"
import { LogTarget, saveLog } from "../../../src/general/io/log"

// This is quite useful when the suite starts to hang, so you can identify where the issue is.

const PRINT_NAMES = process.argv[ 2 ] === "--names=true"

// TODO: so this doesn't actually work. I suspect it has something to do with saveLog not working in SPEC

const specNameReporter: jasmine.CustomReporter = {
    specStarted(result: CustomReporterResult): void {
        if (PRINT_NAMES) saveLog(result.fullName as Io, LogTarget.SPEC)
    },
}

export {
    specNameReporter,
}

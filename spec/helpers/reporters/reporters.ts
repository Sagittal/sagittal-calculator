import "colors"
import { specReporter } from "./specReporter"
import { slowReporter } from "./slowReporter"

Error.stackTraceLimit = Infinity

jasmine.getEnv()
    .clearReporters()

jasmine.getEnv()
    .addReporter(specReporter)
jasmine.getEnv()
    .addReporter(slowReporter)

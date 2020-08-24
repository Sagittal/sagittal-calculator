import "colors"
import { slowReporter } from "./slowReporter"
import { specReporter } from "./specReporter"

Error.stackTraceLimit = Infinity

jasmine.getEnv()
    .clearReporters()

jasmine.getEnv()
    .addReporter(specReporter)
jasmine.getEnv()
    .addReporter(slowReporter)

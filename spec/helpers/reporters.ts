import "colors"
/* tslint:disable-next-line no-reaching-imports */
import { slowReporter, specReporter } from "./reporters/index"

Error.stackTraceLimit = Infinity

jasmine.getEnv()
    .clearReporters()

jasmine.getEnv()
    .addReporter(specReporter)
jasmine.getEnv()
    .addReporter(slowReporter)

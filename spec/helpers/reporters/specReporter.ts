import { SpecReporter } from "jasmine-spec-reporter"
import { CI_MODE } from "../specHelper"

const specReporter = new SpecReporter({ summary: { displayPending: CI_MODE }})

export {
    specReporter,
}

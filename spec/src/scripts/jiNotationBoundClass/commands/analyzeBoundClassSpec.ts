import * as cp from "child_process"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"

describe("analyze-ji-notation-bound-class", (): void => {
    it("can receive the argument without a flag", (): void => {
        onlyRunInCi()

        cp.execSync("npm run analyze-ji-notation-bound-class 80")
    })
})

import * as cp from "child_process"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("analyze-bounds", () => {
    it("runs without error", () => {
        onlyRunInCi()

        cp.execSync("npm run analyze-bounds -- --do-not-update-files")
    })
})

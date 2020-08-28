import { IO } from "../../../../../src/general"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("notating-symbols", () => {
    it("gives you the list of the symbols which exactly notate the given ji pitch", () => {
        onlyRunInCi()

        const command = "npm run notating-symbols -- -r 35/1" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "symbol\tname \tratio          \tmonzo           \tcents ",
            ".|)   \t1/35C\t2097152/2066715\t[ 21 -10 -1 -1 ⟩\t25.310",
            "`.//| \t35S  \t2240/2187      \t[ 6 -7 1 1 ⟩    \t41.455",
            "/|)   \t1/35M\t36/35          \t[ 2 2 -1 -1 ⟩   \t48.770",
            "(|\\   \t35L  \t8505/8192      \t[ -13 5 1 1 ⟩   \t64.915",
        ] as IO[]
        expect(actual).toEqual(expected)
    })
})

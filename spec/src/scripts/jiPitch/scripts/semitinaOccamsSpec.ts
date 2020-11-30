import {Io} from "../../../../../src/general"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("semitina-occams", (): void => {
    it("finds, for each tina up to 9, the top 20% candidate commas, sorted in descending order by their occurrence counts as metacommas between the best commas per semitina zone up to the half-apotome, plus the candidate commas for the semitina, also top 20% sorted descending by occam, but this time the metacommas are between consecutive semitinas of the best commas per semitina zone up to the half apotome", (): void => {
        onlyRunInCi()

        const script = `npm run semitina-occams -- --log-targets final` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "(* indicates inconsistent commas)",
            "CANDIDATES FOR TINA 1",
            "7²⋅11⋅19/5n\t13",
            "121/(5²⋅7²)n\t12",
            "CANDIDATES FOR TINA 2",
            "1/(7³⋅17)n\t11",
            "35/(11²⋅13)n\t9",
            "CANDIDATES FOR TINA 3",
            "1/(5⋅7⋅13)n\t37",
            "CANDIDATES FOR TINA 4",
            "5²⋅11²/7n\t17",
            "49/(5⋅11⋅19)n\t15",
            "CANDIDATES FOR TINA 5",
            "7⁴/25n\t16",
            "CANDIDATES FOR TINA 6",
            "65/77n\t24",
            "CANDIDATES FOR TINA 7",
            "7/(5²⋅17)n\t12",
            "143/(5⋅7³)n\t12",
            "7⋅13⋅19n\t10",
            "7⋅17/11n\t10",
            "CANDIDATES FOR TINA 8",
            "11⋅17/(5²⋅7)n\t16",
            "5⋅7⋅11/19n\t13",
            "77/13n\t13",
            "CANDIDATES FOR TINA 9",
            "1/(7²⋅11)n\t36",
            "CANDIDATES FOR FRACTIONAL TINA",
            "77/(5⋅37)n\t25",
            "35/(13⋅23)n\t23",
            "5⋅11⋅17⋅23/7n\t22* (maps to 1 tinas)",
            "5²⋅11⋅17/13n\t21* (maps to 1 tinas)",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})

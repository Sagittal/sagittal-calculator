import {Io} from "../../../../../src/general/io"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("semitina-occams", (): void => {
    it("finds, for each tina up to 9, the top 20% candidate commas, sorted in descending order by their occurrence counts as metacommas between the best commas per semitina zone up to the half-apotome, plus the candidate commas for the semitina, also top 20% sorted descending by occam, but this time the metacommas are between consecutive semitinas of the best commas per semitina zone up to the half-apotome", (): void => {
        onlyRunInCi()

        const script = `npm run semitina-occams -- --log-targets final` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "(* indicates inconsistent commas)",
            "CANDIDATES FOR TINA 1",
            "10241/5n\t13",
            "121/1225n\t12",
            "CANDIDATES FOR TINA 2",
            "1/5831n\t11",
            "35/1573n\t9",
            "CANDIDATES FOR TINA 3",
            "1/455n\t37",
            "CANDIDATES FOR TINA 4",
            "3025/7n\t17",
            "49/1045n\t15",
            "CANDIDATES FOR TINA 5",
            "2401/25n\t16",
            "CANDIDATES FOR TINA 6",
            "65/77n\t24",
            "CANDIDATES FOR TINA 7",
            "7/425n\t12",
            "143/1715n\t12",
            "1729n\t10",
            "119/11n\t10",
            "CANDIDATES FOR TINA 8",
            "187/175n\t16",
            "385/19n\t13",
            "77/13n\t13",
            "CANDIDATES FOR TINA 9",
            "1/539n\t36",
            "CANDIDATES FOR SEMITINA",
            "77/185n\t25",
            "35/299n\t23",
            "21505/7n\t22* (maps to 1 tinas)",
            "4675/13n\t21* (maps to 1 tinas)",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})

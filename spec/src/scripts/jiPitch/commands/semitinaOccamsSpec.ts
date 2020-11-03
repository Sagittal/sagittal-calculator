import {Io} from "../../../../../src/general/io"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runCommandAndGetConsoleOutput} from "../../../../helpers/src/scripts/runCommand"

describe("semitina-occams", (): void => {
    // Todo: finish this
    // tslint:disable-next-line ban
    xit("finds, for each tina up to 9, the candidate commas, sorted in descending order by their occurrence counts as metacommas between the best commas per semitina zone up to the half-apotome", (): void => {
        onlyRunInCi()

        const command = `npm run semitina-occams -- --log-targets final` as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [

        ] as Io[]
        expect(actual).toEqual(expected)
    })
})

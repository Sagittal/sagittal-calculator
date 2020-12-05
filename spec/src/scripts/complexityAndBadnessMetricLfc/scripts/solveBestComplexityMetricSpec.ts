import {Io} from "@sagittal/general"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("solve-best-complexity-metric", (): void => {
    it("for each of the 8 complexity metric families, checks each of its complexity parameter sets in scope, then lists the sets which tie for minimizing the metric grade", (): void => {
        onlyRunInCi()

        const script = `npm run solve-best-complexity-metric -- --complexity-search-ed 3 --log-targets final` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            `Complexity parameter sets for complexity metric family lee which optimize its metric grade, all bringing it to 25 (count of ties 1): [{"sE":0.001,"tE":0.001}]`,
            `Complexity parameter sets for complexity metric family ree which optimize its metric grade, all bringing it to 82 (count of ties 1): [{"a":0,"sE":0.001,"tE":0.001}]`,
            `Complexity parameter sets for complexity metric family lpe which optimize its metric grade, all bringing it to 29 (count of ties 1): [{"b":1,"sP":0,"tE":0.001}]`,
            `Complexity parameter sets for complexity metric family rpe which optimize its metric grade, all bringing it to 71 (count of ties 1): [{"a":0,"b":1,"sP":0,"tE":0.001}]`,
            `Complexity parameter sets for complexity metric family lep which optimize its metric grade, all bringing it to 25 (count of ties 1): [{"sE":0.001,"c":1,"tP":0}]`,
            `Complexity parameter sets for complexity metric family rep which optimize its metric grade, all bringing it to 84 (count of ties 1): [{"a":0,"sE":0.001,"c":1,"tP":0}]`,
            `Complexity parameter sets for complexity metric family lpp which optimize its metric grade, all bringing it to 42 (count of ties 1): [{"b":1,"sP":0,"c":1,"tP":0}]`,
            `Complexity parameter sets for complexity metric family rpp which optimize its metric grade, all bringing it to 0 (count of ties 1): [{"a":0,"b":1,"sP":0,"c":1,"tP":0}]`,
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})

import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("solve best metric", () => {
    it("finds the best metric for the given range of chunk count", () => {
        const command = "npm run solve-best-metric 1 -- --no-color --no-time --no-write"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            `computing combinations`,
            `computing scopes: phase 1/1`,
            `submetric combinations (with repetitions) computed: 6; formula is ((1+6-1)!)/((1!)((6-1)!)) where 6 is the total of possible existing chunks and 1 is the count we are choosing at a time`,
            `parameter combinations (with repetitions) computed: 1; formula is ((0+25-1)!)/((0!)((25-1)!)) where 25 is the total of possible existing chunks and 0 is the count we are choosing at a time`,
            `we find 1 distributions of 0 parameter chunks across 2 bins (assignments to each of a combination of submetrics, plus an extra bin for parameters which will get applied to every submetric), which is how many more scopes should be contributed per each of the 1 parameter chunk combinations in this phase, and that times the 6 submetric chunk combinations in this phase, so expect 1 * 1 * 6 = 6 new scopes from this phase, so we should end with a total of 6`,
            `populating scopes for submetric chunk combination 1/6 with parameter chunk combination 1/1 (0%) | populated 0 | searched 0 | in the queue 0`,
            `populating scopes for submetric chunk combination 2/6 with parameter chunk combination 1/1 (0%) | populated 1 | searched 0 | in the queue 1`,
            `populating scopes for submetric chunk combination 3/6 with parameter chunk combination 1/1 (0%) | populated 2 | searched 0 | in the queue 2`,
            `populating scopes for submetric chunk combination 4/6 with parameter chunk combination 1/1 (0%) | populated 3 | searched 0 | in the queue 3`,
            `populating scopes for submetric chunk combination 5/6 with parameter chunk combination 1/1 (0%) | populated 4 | searched 0 | in the queue 4`,
            `populating scopes for submetric chunk combination 6/6 with parameter chunk combination 1/1 (0%) | populated 5 | searched 0 | in the queue 5`,
            `finished phase 1/1 of scope population | populated 6 | searched 0 | in the queue 6`,
            ``,
            ``,
            `FINISHED POPULATING | populated 6 | searched 0 | in the queue 6`,
            `searched out of populated: 1/6 (16.7%) | populated 6 | searched 1 | in the queue 5`,
            `searched out of populated: 2/6 (33.3%) | populated 6 | searched 2 | in the queue 4`,
            `searched out of populated: 3/6 (50.0%) | populated 6 | searched 3 | in the queue 3`,
            `searched out of populated: 4/6 (66.7%) | populated 6 | searched 4 | in the queue 2`,
            `searched out of populated: 5/6 (83.3%) | populated 6 | searched 5 | in the queue 1`,
            `searched out of populated: 6/6 (100%) | populated 6 | searched 6 | in the queue 0`,
            ``,
            ``,
            `FINAL STATUS | populated 6 | searched 6 | in the queue 0`,
            ``,
            ``,
            `AND THE BEST METRICS WERE {`,
            `    "{sum}": {`,
            `        "sumOfSquares": 0.014206086754420309,`,
            `        "submetrics": [`,
            `            {`,
            `                "sum": true`,
            `            }`,
            `        ]`,
            `    }`,
            `}`,
            ``,
            ``,
            `AND THE COUNT OF TIMED OUT METRICS WAS 0`,
        ])
    })
})

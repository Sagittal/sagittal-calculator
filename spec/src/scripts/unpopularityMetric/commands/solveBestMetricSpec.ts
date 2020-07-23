import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("solve best metric", () => {
    it("finds the best metric for the given range of chunk count", () => {
        const command = "npm run solve-best-metric -- -l 1 -u 1 --no-color"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            ``,
            ``,
            `POPULATING CHUNK COUNT 1/1`,
            `computing combinations for chunk count 1`,
            `computing scopes for chunk count 1: phase 1/1`,
            `submetric combinations (with repetitions) computed: 6; formula is ((1+6-1)!)/((1!)((6-1)!)) where 6 is the total of possible existing chunks and 1 is the count we are choosing at a time`,
            `parameter combinations (with repetitions) computed: 1; formula is ((0+14-1)!)/((0!)((14-1)!)) where 14 is the total of possible existing chunks and 0 is the count we are choosing at a time`,
            `we find 1 distributions of 0 parameter chunks across 2 bins (assignments to each of a combination of submetrics, plus an extra bin for parameters which will get applied to every submetric), which is how many more scopes should be contributed per each of the 1 parameter chunk combinations in this phase, and that times the 6 submetric chunk combinations in this phase, so expect 1 * 1 * 6 = 6 new scopes from this phase, so we should end with a total of 6`,
            `populating scopes for submetric chunk combination 1/6 with parameter chunk combination 1/1 (0%) | populated [] | searched [] | in the queue []`,
            ``,
            ``,
            `PROCESSING CHUNK COUNT 1 (still populating chunk count 1) | populated ["1: 1"] | searched [] | in the queue ["1: 1"]`,
            `populating scopes for submetric chunk combination 2/6 with parameter chunk combination 1/1 (0%) | populated ["1: 1"] | searched [] | in the queue ["1: 1"]`,
            `populating scopes for submetric chunk combination 3/6 with parameter chunk combination 1/1 (0%) | populated ["1: 2"] | searched [] | in the queue ["1: 2"]`,
            `populating scopes for submetric chunk combination 4/6 with parameter chunk combination 1/1 (0%) | populated ["1: 3"] | searched [] | in the queue ["1: 3"]`,
            `populating scopes for submetric chunk combination 5/6 with parameter chunk combination 1/1 (0%) | populated ["1: 4"] | searched [] | in the queue ["1: 4"]`,
            `populating scopes for submetric chunk combination 6/6 with parameter chunk combination 1/1 (0%) | populated ["1: 5"] | searched [] | in the queue ["1: 5"]`,
            `finished phase 1/1 of scope population for chunk count 1 | populated ["1: 6"] | searched [] | in the queue ["1: 6"]`,
            `FINISHED POPULATING CHUNK COUNT 1 | populated ["1: 6"] | searched [] | in the queue ["1: 6"]`,
            ``,
            ``,
            `FINISHED POPULATING`,
            `searched out of populated for chunk count 1: 1/6 (16.7%) | populated ["1: 6"] | searched ["1: 1"] | in the queue ["1: 4"]`,
            `searched out of populated for chunk count 1: 2/6 (33.3%) | populated ["1: 6"] | searched ["1: 2"] | in the queue ["1: 3"]`,
            `searched out of populated for chunk count 1: 3/6 (50.0%) | populated ["1: 6"] | searched ["1: 3"] | in the queue ["1: 2"]`,
            `searched out of populated for chunk count 1: 4/6 (66.7%) | populated ["1: 6"] | searched ["1: 4"] | in the queue ["1: 1"]`,
            `searched out of populated for chunk count 1: 5/6 (83.3%) | populated ["1: 6"] | searched ["1: 5"] | in the queue ["1: 0"]`,
            ``,
            ``,
            `FINAL STATUS | populated ["1: 6"] | searched ["1: 6"] | in the queue ["1: 0"]`,
            ``,
            ``,
            `AND THE BEST METRICS PER CHUNK COUNT WERE [`,
            `    {`,
            `        "sumOfSquares": 0.014206086754420309,`,
            `        "submetrics": [`,
            `            {`,
            `                "sum": true`,
            `            }`,
            `        ]`,
            `    }`,
            `]`,
        ])
    })
})

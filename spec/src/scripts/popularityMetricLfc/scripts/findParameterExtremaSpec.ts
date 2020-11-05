import {Io} from "../../../../../src/general/io"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("find-parameter-extrema", (): void => {
    it("returns the min and max values for each parameter that showed up among the best metrics of each name              ", (): void => {
        onlyRunInCi()
        const script = "npm run find-parameter-extrema" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            `{`,
            `    "kAsCoefficient": [`,
            `        0.7777777777777778,`,
            `        0.7777777777777778`,
            `    ],`,
            `    "kAsPowerExponent": [`,
            `        0.9661016949152543,`,
            `        0.9661016949152543`,
            `    ],`,
            `    "jAsCoefficient": [`,
            `        1,`,
            `        1`,
            `    ],`,
            `    "jAsPowerExponent": [`,
            `        1.0677966101694913,`,
            `        1.0677966101694913`,
            `    ],`,
            `    "aAsCoefficient": [`,
            `        0.1111111111111111,`,
            `        0.1111111111111111`,
            `    ],`,
            `    "aAsPowerExponent": [`,
            `        1.1694915254237293,`,
            `        2.389830508474576`,
            `    ],`,
            `    "w": [`,
            `        -1.6779661016949152,`,
            `        0.5593220338983049`,
            `    ],`,
            `    "x": [`,
            `        0.5593220338983049,`,
            `        0.5593220338983049`,
            `    ]`,
            `}`,
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})

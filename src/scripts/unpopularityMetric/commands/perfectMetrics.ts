import * as colors from "colors"
import { program } from "commander"
import { performance } from "perf_hooks"
import { Unit } from "../../../general"
import { MAXIMUM_UNIT, Metric } from "../bestMetric"
import {
    clearDebugLogFiles,
    debugSettings,
    DebugTarget,
    debugTargets,
    saveDebugMessage,
    setDebugTargets,
} from "../debug"
import { bestMetrics, solverStatus } from "../globals"
import { perfectMetrics } from "../perfecter"
import { presentBestMetrics } from "../solver"
import { ParameterValue } from "../sumOfSquares"

program
    .option("-d, --debug-targets [debugTargets]", "debug targets")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .option("-t, --no-time", "no time")
    .parse(process.argv)

setDebugTargets(program.debugTargets)
if (!program.color) {
    colors.disable()
}
const time = !!program.time
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

debugTargets[ DebugTarget.PERFECT ] = true
debugTargets[ DebugTarget.SEARCH ] = true
debugTargets[ DebugTarget.POPULATE ] = true
debugTargets[ DebugTarget.FINAL_SOLVER_RESULTS ] = true
debugTargets[ DebugTarget.SCOPE ] = true
debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true

solverStatus.maximumUnit = MAXIMUM_UNIT / 10 as Unit<ParameterValue>

const bestMetricsToBePerfected = {
    "{sum},{sum},{sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true
            },
            {
                "sum": true
            }
        ]
    },
    "{sum},{sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{sum,weightAsPowerExponent},{sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 0.05084745762711851
            },
            {
                "sum": true,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ],
        "spreadParameters": [
            "weightAsPowerExponent"
        ]
    },
    "{sum},{aAsLogarithmBase,count,withoutRepetition}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{sum,weightAsPowerExponent},{sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 0.05084745762711851
            },
            {
                "sum": true
            }
        ]
    },
    "{sum},{sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{sum,weightAsPowerBase},{sum,weightAsPowerBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            },
            {
                "sum": true,
                "weightAsPowerBase": 2
            }
        ],
        "spreadParameters": [
            "weightAsPowerBase"
        ]
    },
    "{sum,weightAsPowerBase},{sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            },
            {
                "sum": true
            }
        ]
    },
    "{sum},{sum,weightAsPowerBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{sum,useNuminator},{sum,useNuminator}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "useNuminator": true
            },
            {
                "sum": true,
                "useNuminator": true
            }
        ],
        "spreadParameters": [
            "useNuminator"
        ]
    },
    "{sum,useNuminator},{sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "useNuminator": true
            },
            {
                "sum": true
            }
        ]
    },
    "{sum},{sum,useNuminator}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "useNuminator": true
            }
        ]
    },
    "{sum},{aAsCoefficient,sum,withoutRepetition}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "withoutRepetition": true,
                "aAsCoefficient": 0
            }
        ]
    },
    "{sum},{sum,weightAsCoefficient,withoutRepetition}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "withoutRepetition": true,
                "weightAsCoefficient": 0
            }
        ]
    },
    "{sum},{aAsLogarithmBase,count}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "count": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{sum,weightAsLogarithmBase},{sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsLogarithmBase": 2
            },
            {
                "sum": true
            }
        ]
    },
    "{sum,weightAsLogarithmBase},{sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsLogarithmBase": 2
            },
            {
                "sum": true,
                "weightAsLogarithmBase": 2
            }
        ],
        "spreadParameters": [
            "weightAsLogarithmBase"
        ]
    },
    "{sum},{sum,weightAsCoefficient}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "weightAsCoefficient": 0
            }
        ]
    },
    "{sum,weightAsCoefficient},{sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0
            },
            {
                "sum": true
            }
        ]
    },
    "{sum,weightAsCoefficient},{sum,weightAsCoefficient}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.1111111111111111
            },
            {
                "sum": true,
                "weightAsCoefficient": 0.1111111111111111
            }
        ],
        "spreadParameters": [
            "weightAsCoefficient"
        ]
    },
    "{jAsCoefficient,sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1
            }
        ]
    },
    "{jAsCoefficient,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "weightAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{jAsCoefficient,sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{jAsCoefficient,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{jAsCoefficient,sum,weightAsPowerBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{jAsCoefficient,sum,useNuminator}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "useNuminator": true
            }
        ]
    },
    "{sum},{jAsCoefficient,sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "jAsCoefficient": 1
            }
        ]
    },
    "{jAsCoefficient,sum},{sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1
            },
            {
                "sum": true
            }
        ]
    },
    "{sum,weightAsCoefficient}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{sum,weightAsCoefficient,weightAsLogarithmBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.2222222222222222,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{sum,weightAsCoefficient,weightAsPowerExponent}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.1111111111111111,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{sum,weightAsCoefficient,weightAsPowerBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.1111111111111111,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{sum,useNuminator,weightAsCoefficient}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.1111111111111111,
                "useNuminator": true
            }
        ]
    },
    "{sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{sum,weightAsLogarithmBase,weightAsPowerExponent}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsLogarithmBase": 2,
                "weightAsPowerExponent": 3
            }
        ]
    },
    "{sum,useNuminator,weightAsLogarithmBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsLogarithmBase": 2,
                "useNuminator": true
            }
        ]
    },
    "{sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{sum,useNuminator,weightAsPowerExponent}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 0.05084745762711851,
                "useNuminator": true
            }
        ]
    },
    "{sum,weightAsPowerBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{sum,useNuminator,weightAsPowerBase}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2,
                "useNuminator": true
            }
        ]
    },
    "{jAsCoefficient,sum},{jAsCoefficient,sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1
            },
            {
                "sum": true,
                "jAsCoefficient": 1
            }
        ],
        "spreadParameters": [
            "jAsCoefficient"
        ]
    },
    "{sum,useNuminator}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true,
                "useNuminator": true
            }
        ]
    },
    "{sum,weightAsPowerBase,weightAsPowerExponent}": {
        "sumOfSquares": 0.014196808981525175,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 1.9830508474576272,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{sum},{aAsCoefficient,sum}": {
        "sumOfSquares": 0.014185728099591682,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "aAsCoefficient": 0.8888888888888888
            }
        ]
    },
    "{aAsCoefficient,sum},{sum}": {
        "sumOfSquares": 0.014185728099591682,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.8888888888888888
            },
            {
                "sum": true
            }
        ]
    },
    "{sum},{aAsLogarithmBase,modifiedCount,sum}": {
        "sumOfSquares": 0.014178734499258954,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "modifiedCount": true
            }
        ]
    },
    "{aAsCoefficient,sum,y}": {
        "sumOfSquares": 0.014163370473112549,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111,
                "y": 0.8644067796610169
            }
        ]
    },
    "{sum,weightAsPowerBase},{max,withoutRepetition}": {
        "sumOfSquares": 0.014150073331996103,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            },
            {
                "withoutRepetition": true,
                "max": true
            }
        ]
    },
    "{sum,weightAsPowerBase},{max,weightAsPowerBase,withoutRepetition}": {
        "sumOfSquares": 0.014150073331996103,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            },
            {
                "withoutRepetition": true,
                "max": true,
                "weightAsPowerBase": 2
            }
        ],
        "spreadParameters": [
            "weightAsPowerBase"
        ]
    },
    "{sum},{sum,y}": {
        "sumOfSquares": 0.01414659407684925,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "y": 1.0677966101694913
            }
        ]
    },
    "{sum,y},{sum}": {
        "sumOfSquares": 0.01414659407684925,
        "submetrics": [
            {
                "sum": true,
                "y": 1.0677966101694913
            },
            {
                "sum": true
            }
        ]
    },
    "{sum,weightAsPowerBase},{count}": {
        "sumOfSquares": 0.014140400965478764,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            },
            {
                "count": true
            }
        ]
    },
    "{sum,weightAsPowerBase},{count,weightAsPowerBase}": {
        "sumOfSquares": 0.014140400965478764,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            },
            {
                "count": true,
                "weightAsPowerBase": 2
            }
        ],
        "spreadParameters": [
            "weightAsPowerBase"
        ]
    },
    "{sum,x},{count,withoutRepetition,x}": {
        "sumOfSquares": 0.014102021608361177,
        "submetrics": [
            {
                "sum": true,
                "x": -0.05084745762711851
            },
            {
                "withoutRepetition": true,
                "count": true,
                "x": -0.05084745762711851
            }
        ],
        "spreadParameters": [
            "x"
        ]
    },
    "{sum,w},{count,w,withoutRepetition}": {
        "sumOfSquares": 0.014102021608361177,
        "submetrics": [
            {
                "sum": true,
                "w": -0.05084745762711851
            },
            {
                "withoutRepetition": true,
                "count": true,
                "w": -0.05084745762711851
            }
        ],
        "spreadParameters": [
            "w"
        ]
    },
    "{aAsPowerExponent,jAsCoefficient,sum}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "aAsPowerExponent": 1.1694915254237293
            }
        ]
    },
    "{aAsCoefficient,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111,
                "aAsPowerExponent": 1.1694915254237293
            }
        ]
    },
    "{aAsPowerExponent,sum,useNuminator}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.1694915254237293,
                "useNuminator": true
            }
        ]
    },
    "{aAsPowerExponent,sum},{aAsPowerExponent,sum}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.1694915254237293
            },
            {
                "sum": true,
                "aAsPowerExponent": 1.1694915254237293
            }
        ],
        "spreadParameters": [
            "aAsPowerExponent"
        ]
    },
    "{aAsPowerExponent,sum}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.1694915254237293
            }
        ]
    },
    "{aAsPowerExponent,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.1694915254237293,
                "weightAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{aAsPowerExponent,sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.1694915254237293,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{aAsPowerExponent,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.1694915254237293,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{aAsPowerExponent,sum,weightAsPowerBase}": {
        "sumOfSquares": 0.014072906420666415,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.1694915254237293,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{sum,weightAsPowerBase},{count,withoutRepetition}": {
        "sumOfSquares": 0.014068571875245416,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            },
            {
                "withoutRepetition": true,
                "count": true
            }
        ]
    },
    "{sum,weightAsPowerBase},{count,weightAsPowerBase,withoutRepetition}": {
        "sumOfSquares": 0.014068571875245416,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2
            },
            {
                "withoutRepetition": true,
                "count": true,
                "weightAsPowerBase": 2
            }
        ],
        "spreadParameters": [
            "weightAsPowerBase"
        ]
    },
    "{sum},{sum},{count,withoutRepetition}": {
        "sumOfSquares": 0.014061674155656654,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true
            }
        ]
    },
    "{sum},{max,weightAsCoefficient,withoutRepetition}": {
        "sumOfSquares": 0.014060344284684409,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "max": true,
                "weightAsCoefficient": 0.3333333333333333
            }
        ]
    },
    "{sum},{aAsCoefficient,max,withoutRepetition}": {
        "sumOfSquares": 0.014060344284684409,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "max": true,
                "aAsCoefficient": 0.3333333333333333
            }
        ]
    },
    "{sum,x},{count,withoutRepetition}": {
        "sumOfSquares": 0.014055203049967024,
        "submetrics": [
            {
                "sum": true,
                "x": -1.0677966101694916
            },
            {
                "withoutRepetition": true,
                "count": true
            }
        ]
    },
    "{sum,w},{count,withoutRepetition}": {
        "sumOfSquares": 0.014055203049967024,
        "submetrics": [
            {
                "sum": true,
                "w": -1.0677966101694916
            },
            {
                "withoutRepetition": true,
                "count": true
            }
        ]
    },
    "{sum,v,y}": {
        "sumOfSquares": 0.014055116465277843,
        "submetrics": [
            {
                "sum": true,
                "y": 0.9661016949152543,
                "v": 0.4576271186440679
            }
        ]
    },
    "{sum},{count,w,withoutRepetition}": {
        "sumOfSquares": 0.014054771191801872,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true,
                "w": -0.4576271186440679
            }
        ]
    },
    "{sum},{count,weightAsCoefficient,withoutRepetition}": {
        "sumOfSquares": 0.014054771191801872,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true,
                "weightAsCoefficient": 0.5555555555555556
            }
        ]
    },
    "{sum},{count,withoutRepetition,x}": {
        "sumOfSquares": 0.014054771191801872,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true,
                "x": -0.4576271186440679
            }
        ]
    },
    "{sum},{count,weightAsPowerExponent,withoutRepetition}": {
        "sumOfSquares": 0.014054771191801872,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true,
                "weightAsPowerExponent": 0.6610169491525424
            }
        ]
    },
    "{sum},{aAsCoefficient,count,withoutRepetition}": {
        "sumOfSquares": 0.014054771191801872,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true,
                "aAsCoefficient": 0.5555555555555556
            }
        ]
    },
    "{sum,weightAsPowerExponent},{count,weightAsPowerExponent,withoutRepetition}": {
        "sumOfSquares": 0.014054771191801872,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 1.0677966101694913
            },
            {
                "withoutRepetition": true,
                "count": true,
                "weightAsPowerExponent": 1.0677966101694913
            }
        ],
        "spreadParameters": [
            "weightAsPowerExponent"
        ]
    },
    "{sum,weightAsPowerExponent},{count,withoutRepetition}": {
        "sumOfSquares": 0.014054771191801872,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 1.0677966101694913
            },
            {
                "withoutRepetition": true,
                "count": true
            }
        ]
    },
    "{sum},{count,jAsPowerExponent,withoutRepetition}": {
        "sumOfSquares": 0.013993537789950642,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true,
                "jAsPowerExponent": 2.084745762711864
            }
        ]
    },
    "{aAsPowerExponent,sum,usePrimeIndex}": {
        "sumOfSquares": 0.01398991829584514,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.3728813559322033,
                "usePrimeIndex": true
            }
        ]
    },
    "{sum},{sum},{count}": {
        "sumOfSquares": 0.013989168754342854,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true
            },
            {
                "count": true
            }
        ]
    },
    "{sum,w,weightAsLogarithmBase}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true,
                "weightAsLogarithmBase": 2,
                "w": 0.5593220338983049
            }
        ]
    },
    "{sum},{count,w}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true
            },
            {
                "count": true,
                "w": -0.4576271186440679
            }
        ]
    },
    "{sum,w},{count,w}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true,
                "w": -0.15254237288135597
            },
            {
                "count": true,
                "w": -0.15254237288135597
            }
        ],
        "spreadParameters": [
            "w"
        ]
    },
    "{sum},{count,weightAsPowerExponent}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true
            },
            {
                "count": true,
                "weightAsPowerExponent": 0.7627118644067798
            }
        ]
    },
    "{sum,weightAsPowerExponent},{count}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 1.0677966101694913
            },
            {
                "count": true
            }
        ]
    },
    "{sum,weightAsPowerExponent},{count,weightAsPowerExponent}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 1.0677966101694913
            },
            {
                "count": true,
                "weightAsPowerExponent": 1.0677966101694913
            }
        ],
        "spreadParameters": [
            "weightAsPowerExponent"
        ]
    },
    "{sum},{count,weightAsCoefficient}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true
            },
            {
                "count": true,
                "weightAsCoefficient": 0.5555555555555556
            }
        ]
    },
    "{sum},{aAsCoefficient,count}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true
            },
            {
                "count": true,
                "aAsCoefficient": 0.5555555555555556
            }
        ]
    },
    "{sum,x},{count,x}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true,
                "x": -0.15254237288135597
            },
            {
                "count": true,
                "x": -0.15254237288135597
            }
        ],
        "spreadParameters": [
            "x"
        ]
    },
    "{sum},{count,x}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true
            },
            {
                "count": true,
                "x": -0.4576271186440679
            }
        ]
    },
    "{sum,weightAsLogarithmBase,x}": {
        "sumOfSquares": 0.013983040590027893,
        "submetrics": [
            {
                "sum": true,
                "weightAsLogarithmBase": 2,
                "x": 0.5593220338983049
            }
        ]
    },
    "{sum},{sum,w}": {
        "sumOfSquares": 0.013983026579272044,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "w": 1.4745762711864403
            }
        ]
    },
    "{sum,w},{sum}": {
        "sumOfSquares": 0.013983026579272044,
        "submetrics": [
            {
                "sum": true,
                "w": 1.4745762711864403
            },
            {
                "sum": true
            }
        ]
    },
    "{sum,x},{sum}": {
        "sumOfSquares": 0.013983026579272044,
        "submetrics": [
            {
                "sum": true,
                "x": 1.4745762711864403
            },
            {
                "sum": true
            }
        ]
    },
    "{sum},{sum,x}": {
        "sumOfSquares": 0.013983026579272044,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "x": 1.4745762711864403
            }
        ]
    },
    "{sum,w},{count}": {
        "sumOfSquares": 0.013981972334640084,
        "submetrics": [
            {
                "sum": true,
                "w": -0.35593220338983045
            },
            {
                "count": true
            }
        ]
    },
    "{sum,x},{count}": {
        "sumOfSquares": 0.013981972334640084,
        "submetrics": [
            {
                "sum": true,
                "x": -0.35593220338983045
            },
            {
                "count": true
            }
        ]
    },
    "{sum,w},{sum,w}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "w": 0.7627118644067798
            },
            {
                "sum": true,
                "w": 0.7627118644067798
            }
        ],
        "spreadParameters": [
            "w"
        ]
    },
    "{jAsCoefficient,sum,w}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "w": 0.7627118644067798
            }
        ]
    },
    "{sum,w}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "w": 0.7627118644067798
            }
        ]
    },
    "{sum,weightAsPowerBase,x}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2,
                "x": 0.7627118644067798
            }
        ]
    },
    "{sum,useNuminator,x}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "x": 0.7627118644067798,
                "useNuminator": true
            }
        ]
    },
    "{sum,x}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "x": 0.7627118644067798
            }
        ]
    },
    "{sum,x},{sum,x}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "x": 0.7627118644067798
            },
            {
                "sum": true,
                "x": 0.7627118644067798
            }
        ],
        "spreadParameters": [
            "x"
        ]
    },
    "{jAsCoefficient,sum,x}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "x": 0.7627118644067798
            }
        ]
    },
    "{sum,w,weightAsPowerBase}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerBase": 2,
                "w": 0.7627118644067798
            }
        ]
    },
    "{sum,useNuminator,w}": {
        "sumOfSquares": 0.013980948374639321,
        "submetrics": [
            {
                "sum": true,
                "w": 0.7627118644067798,
                "useNuminator": true
            }
        ]
    },
    "{sum,w,weightAsCoefficient}": {
        "sumOfSquares": 0.013980240963355756,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.7777777777777778,
                "w": 0.7627118644067798
            }
        ]
    },
    "{sum,weightAsPowerExponent,x}": {
        "sumOfSquares": 0.013980240963355756,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 0.9661016949152543,
                "x": 0.7627118644067798
            }
        ]
    },
    "{sum,w,weightAsPowerExponent}": {
        "sumOfSquares": 0.013980240963355756,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 0.9661016949152543,
                "w": 0.7627118644067798
            }
        ]
    },
    "{sum,weightAsCoefficient,x}": {
        "sumOfSquares": 0.013980240963355756,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.7777777777777778,
                "x": 0.7627118644067798
            }
        ]
    },
    "{aAsCoefficient,sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.013968433072725071,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{aAsCoefficient,sum},{aAsCoefficient,sum}": {
        "sumOfSquares": 0.013966994674845098,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111
            },
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111
            }
        ],
        "spreadParameters": [
            "aAsCoefficient"
        ]
    },
    "{aAsCoefficient,jAsCoefficient,sum}": {
        "sumOfSquares": 0.013966994674845098,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 1,
                "aAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{aAsCoefficient,sum,weightAsPowerBase}": {
        "sumOfSquares": 0.013966994674845098,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{aAsCoefficient,sum}": {
        "sumOfSquares": 0.013966994674845098,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{aAsCoefficient,sum,useNuminator}": {
        "sumOfSquares": 0.013966994674845098,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111,
                "useNuminator": true
            }
        ]
    },
    "{aAsCoefficient,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.013955621231317095,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111,
                "weightAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{sum,weightAsPowerExponent},{sum,withoutRepetition}": {
        "sumOfSquares": 0.013952930779999359,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 1.3728813559322033
            },
            {
                "sum": true,
                "withoutRepetition": true
            }
        ]
    },
    "{aAsCoefficient,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.013952381517560081,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111,
                "weightAsPowerExponent": 0.35593220338983045
            }
        ]
    },
    "{aAsPowerExponent,sum},{count}": {
        "sumOfSquares": 0.013919538579862957,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.0677966101694913
            },
            {
                "count": true
            }
        ]
    },
    "{aAsPowerExponent,sum},{aAsPowerExponent,count}": {
        "sumOfSquares": 0.013919538579862957,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 1.0677966101694913
            },
            {
                "count": true,
                "aAsPowerExponent": 1.0677966101694913
            }
        ],
        "spreadParameters": [
            "aAsPowerExponent"
        ]
    },
    "{sum,x,y}": {
        "sumOfSquares": 0.013890671095795618,
        "submetrics": [
            {
                "sum": true,
                "x": -1.576271186440678,
                "y": 1.0677966101694913
            }
        ]
    },
    "{sum,w,y}": {
        "sumOfSquares": 0.013890671095795618,
        "submetrics": [
            {
                "sum": true,
                "w": -1.576271186440678,
                "y": 1.0677966101694913
            }
        ]
    },
    "{sum,y},{sum,withoutRepetition,y}": {
        "sumOfSquares": 0.013874838975415499,
        "submetrics": [
            {
                "sum": true,
                "y": 1.3728813559322033
            },
            {
                "sum": true,
                "withoutRepetition": true,
                "y": 1.3728813559322033
            }
        ],
        "spreadParameters": [
            "y"
        ]
    },
    "{sum,y},{sum,withoutRepetition}": {
        "sumOfSquares": 0.013874838975415499,
        "submetrics": [
            {
                "sum": true,
                "y": 1.3728813559322033
            },
            {
                "sum": true,
                "withoutRepetition": true
            }
        ]
    },
    "{sum},{aAsPowerExponent,sum,withoutRepetition}": {
        "sumOfSquares": 0.013871886531323053,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "withoutRepetition": true,
                "aAsPowerExponent": -1.1694915254237288
            }
        ]
    },
    "{max,usePrimeIndex,withoutRepetition},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013804420944753194,
        "submetrics": [
            {
                "withoutRepetition": true,
                "max": true,
                "usePrimeIndex": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{sum},{max,weightAsPowerExponent,withoutRepetition}": {
        "sumOfSquares": 0.013786600806293152,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "max": true,
                "weightAsPowerExponent": 0.6610169491525424
            }
        ]
    },
    "{sum},{aAsPowerExponent,max,withoutRepetition}": {
        "sumOfSquares": 0.013786600806293152,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "max": true,
                "aAsPowerExponent": 0.6610169491525424
            }
        ]
    },
    "{sum},{aAsCoefficient,aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013771171933638733,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsCoefficient": 0.6666666666666666
            }
        ]
    },
    "{sum},{aAsLogarithmBase,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.013771171933638733,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "weightAsCoefficient": 0.6666666666666666
            }
        ]
    },
    "{sum,w},{aAsLogarithmBase,sum,w}": {
        "sumOfSquares": 0.013752400637399112,
        "submetrics": [
            {
                "sum": true,
                "w": -0.25423728813559343
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -0.25423728813559343
            }
        ],
        "spreadParameters": [
            "w"
        ]
    },
    "{sum,w,x}": {
        "sumOfSquares": 0.013735732157172519,
        "submetrics": [
            {
                "sum": true,
                "w": -0.7627118644067798,
                "x": 1.4745762711864403
            }
        ]
    },
    "{aAsCoefficient,sum,x}": {
        "sumOfSquares": 0.01373541129810748,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.5555555555555556,
                "x": 0.7627118644067798
            }
        ]
    },
    "{sum},{aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013734396787243188,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "aAsPowerExponent": -0.4576271186440679
            }
        ]
    },
    "{aAsPowerExponent,sum},{sum}": {
        "sumOfSquares": 0.013734396787243188,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": -0.4576271186440679
            },
            {
                "sum": true
            }
        ]
    },
    "{sum,weightAsCoefficient},{count,weightAsCoefficient,withoutRepetition}": {
        "sumOfSquares": 0.013726727600053184,
        "submetrics": [
            {
                "sum": true,
                "weightAsCoefficient": 0.1111111111111111
            },
            {
                "withoutRepetition": true,
                "count": true,
                "weightAsCoefficient": 0.1111111111111111
            }
        ],
        "spreadParameters": [
            "weightAsCoefficient"
        ]
    },
    "{aAsCoefficient,sum,w}": {
        "sumOfSquares": 0.013726562919887912,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.8888888888888888,
                "w": 0.7627118644067798
            }
        ]
    },
    "{aAsPowerExponent,max,withoutRepetition},{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013673806166562753,
        "submetrics": [
            {
                "withoutRepetition": true,
                "max": true,
                "aAsPowerExponent": 0.6610169491525424
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 0.6610169491525424
            }
        ],
        "spreadParameters": [
            "aAsPowerExponent"
        ]
    },
    "{sum,w},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013602108877571304,
        "submetrics": [
            {
                "sum": true,
                "w": -2.694915254237288
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{sum,x},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013602108877571304,
        "submetrics": [
            {
                "sum": true,
                "x": -2.694915254237288
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{sum},{aAsLogarithmBase,sum,w}": {
        "sumOfSquares": 0.013602108877571304,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -2.694915254237288
            }
        ]
    },
    "{sum},{aAsLogarithmBase,sum,x}": {
        "sumOfSquares": 0.013597434647417824,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "x": -1.4745762711864407
            }
        ]
    },
    "{sum,x},{aAsLogarithmBase,sum,x}": {
        "sumOfSquares": 0.013593794552374482,
        "submetrics": [
            {
                "sum": true,
                "x": -1.88135593220339
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "x": -1.88135593220339
            }
        ],
        "spreadParameters": [
            "x"
        ]
    },
    "{sum},{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013563105656828169,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 1.8813559322033901
            }
        ]
    },
    "{jAsLogarithmBase,kAsCoefficient,sum}": {
        "sumOfSquares": 0.013473774313575,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.1111111111111111,
                "jAsLogarithmBase": 2
            }
        ]
    },
    "{sum,usePrimeIndex},{max,usePrimeIndex,withoutRepetition}": {
        "sumOfSquares": 0.013461878832702997,
        "submetrics": [
            {
                "sum": true,
                "usePrimeIndex": true
            },
            {
                "withoutRepetition": true,
                "max": true,
                "usePrimeIndex": true
            }
        ],
        "spreadParameters": [
            "usePrimeIndex"
        ]
    },
    "{aAsLogarithmBase,kAsCoefficient,sum,x}": {
        "sumOfSquares": 0.013450274962956428,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "kAsCoefficient": 0.7777777777777778,
                "x": -2.8983050847457625
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013428610897186683,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.288135593220339
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{aAsLogarithmBase,sum},{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013428610897186683,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.288135593220339
            }
        ]
    },
    "{aAsPowerExponent,count},{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013415035516362663,
        "submetrics": [
            {
                "count": true,
                "aAsPowerExponent": 2.593220338983051
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.593220338983051
            }
        ],
        "spreadParameters": [
            "aAsPowerExponent"
        ]
    },
    "{count},{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013415035516362663,
        "submetrics": [
            {
                "count": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.593220338983051
            }
        ]
    },
    "{max,weightAsCoefficient,withoutRepetition},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013400321605375924,
        "submetrics": [
            {
                "withoutRepetition": true,
                "max": true,
                "weightAsCoefficient": 0.3333333333333333
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{aAsCoefficient,max,withoutRepetition},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013400321605375924,
        "submetrics": [
            {
                "withoutRepetition": true,
                "max": true,
                "aAsCoefficient": 0.3333333333333333
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{max,withoutRepetition},{aAsLogarithmBase,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.013397229653518644,
        "submetrics": [
            {
                "withoutRepetition": true,
                "max": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "weightAsPowerExponent": 1.3728813559322033
            }
        ]
    },
    "{aAsCoefficient,jAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013393184478333505,
        "submetrics": [
            {
                "sum": true,
                "jAsLogarithmBase": 2,
                "aAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{aAsCoefficient,sum},{aAsCoefficient,count,withoutRepetition}": {
        "sumOfSquares": 0.013371688717016737,
        "submetrics": [
            {
                "sum": true,
                "aAsCoefficient": 0.1111111111111111
            },
            {
                "withoutRepetition": true,
                "count": true,
                "aAsCoefficient": 0.1111111111111111
            }
        ],
        "spreadParameters": [
            "aAsCoefficient"
        ]
    },
    "{sum,weightAsPowerExponent},{max,withoutRepetition}": {
        "sumOfSquares": 0.01336908293134275,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 1.3728813559322033
            },
            {
                "withoutRepetition": true,
                "max": true
            }
        ]
    },
    "{aAsLogarithmBase,jAsPowerExponent,sum,x}": {
        "sumOfSquares": 0.013326639414655178,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "jAsPowerExponent": 1.1694915254237293,
                "x": -2.694915254237288
            }
        ]
    },
    "{jAsPowerExponent,kAsPowerBase,sum}": {
        "sumOfSquares": 0.013311601538374056,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerBase": 2,
                "jAsPowerExponent": 1.7796610169491522
            }
        ]
    },
    "{aAsPowerExponent,sum,x}": {
        "sumOfSquares": 0.013311391809439676,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 0.6610169491525424,
                "x": -2.4915254237288136
            }
        ]
    },
    "{count,withoutRepetition},{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.01328319694607455,
        "submetrics": [
            {
                "withoutRepetition": true,
                "count": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.186440677966102
            }
        ]
    },
    "{aAsPowerExponent,count,withoutRepetition},{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.01328319694607455,
        "submetrics": [
            {
                "withoutRepetition": true,
                "count": true,
                "aAsPowerExponent": 2.186440677966102
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.186440677966102
            }
        ],
        "spreadParameters": [
            "aAsPowerExponent"
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum,y}": {
        "sumOfSquares": 0.0131769458070501,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576,
                "y": 1.0677966101694913
            }
        ]
    },
    "{aAsPowerExponent,sum,w}": {
        "sumOfSquares": 0.013164214118057887,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 0.35593220338983045,
                "w": -1.3728813559322033
            }
        ]
    },
    "{aAsCoefficient,aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsCoefficient": 0.1111111111111111,
                "aAsPowerExponent": 2.389830508474576
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576,
                "weightAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum,useNuminator}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576,
                "useNuminator": true
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum,weightAsPowerBase}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum},{aAsLogarithmBase,aAsPowerExponent,sum}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 2.389830508474576
            }
        ],
        "spreadParameters": [
            "aAsPowerExponent"
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,jAsCoefficient,sum}": {
        "sumOfSquares": 0.013162605298940203,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "jAsCoefficient": 1,
                "aAsPowerExponent": 2.389830508474576
            }
        ]
    },
    "{max,weightAsPowerExponent,withoutRepetition},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013159641703127169,
        "submetrics": [
            {
                "withoutRepetition": true,
                "max": true,
                "weightAsPowerExponent": 0.6610169491525424
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{aAsPowerExponent,max,withoutRepetition},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013159641703127169,
        "submetrics": [
            {
                "withoutRepetition": true,
                "max": true,
                "aAsPowerExponent": 0.6610169491525424
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{count,w},{aAsLogarithmBase,sum,w}": {
        "sumOfSquares": 0.01312348542010814,
        "submetrics": [
            {
                "count": true,
                "w": -1.3728813559322033
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -1.3728813559322033
            }
        ],
        "spreadParameters": [
            "w"
        ]
    },
    "{count,w},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013006322008458998,
        "submetrics": [
            {
                "count": true,
                "w": -2.694915254237288
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{count,x},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.013006322008458998,
        "submetrics": [
            {
                "count": true,
                "x": -2.694915254237288
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{count},{aAsLogarithmBase,sum,w}": {
        "sumOfSquares": 0.013006322008458998,
        "submetrics": [
            {
                "count": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -2.694915254237288
            }
        ]
    },
    "{aAsPowerExponent,sum},{aAsPowerExponent,max,withoutRepetition}": {
        "sumOfSquares": 0.012924024581450335,
        "submetrics": [
            {
                "sum": true,
                "aAsPowerExponent": 0.6610169491525424
            },
            {
                "withoutRepetition": true,
                "max": true,
                "aAsPowerExponent": 0.6610169491525424
            }
        ],
        "spreadParameters": [
            "aAsPowerExponent"
        ]
    },
    "{aAsLogarithmBase,sum,w,y}": {
        "sumOfSquares": 0.012915811469421095,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -1.6779661016949152,
                "y": 1.0677966101694913
            }
        ]
    },
    "{sum,w},{max,withoutRepetition}": {
        "sumOfSquares": 0.012913713539013784,
        "submetrics": [
            {
                "sum": true,
                "w": 3
            },
            {
                "withoutRepetition": true,
                "max": true
            }
        ]
    },
    "{sum,x},{max,withoutRepetition}": {
        "sumOfSquares": 0.012913713539013784,
        "submetrics": [
            {
                "sum": true,
                "x": 3
            },
            {
                "withoutRepetition": true,
                "max": true
            }
        ]
    },
    "{sum,x},{max,withoutRepetition,x}": {
        "sumOfSquares": 0.012913713539013784,
        "submetrics": [
            {
                "sum": true,
                "x": 3
            },
            {
                "withoutRepetition": true,
                "max": true,
                "x": 3
            }
        ],
        "spreadParameters": [
            "x"
        ]
    },
    "{sum,w},{max,w,withoutRepetition}": {
        "sumOfSquares": 0.012913713539013784,
        "submetrics": [
            {
                "sum": true,
                "w": 3
            },
            {
                "withoutRepetition": true,
                "max": true,
                "w": 3
            }
        ],
        "spreadParameters": [
            "w"
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum,w}": {
        "sumOfSquares": 0.012665249411082477,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 1.4745762711864403,
                "w": -1.88135593220339
            }
        ]
    },
    "{sum,withoutRepetition},{aAsLogarithmBase,jAsPowerExponent,sum}": {
        "sumOfSquares": 0.012658204230215289,
        "submetrics": [
            {
                "sum": true,
                "withoutRepetition": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "jAsPowerExponent": 1.4745762711864403
            }
        ]
    },
    "{sum},{max,usePrimeIndex,withoutRepetition}": {
        "sumOfSquares": 0.01260508292536432,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "max": true,
                "usePrimeIndex": true
            }
        ]
    },
    "{jAsPowerExponent,sum},{sum,withoutRepetition}": {
        "sumOfSquares": 0.01250929026153203,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.2711864406779663
            },
            {
                "sum": true,
                "withoutRepetition": true
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,sum,x}": {
        "sumOfSquares": 0.012403148806009689,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsPowerExponent": 1.3728813559322033,
                "x": -2.1864406779661016
            }
        ]
    },
    "{aAsLogarithmBase,sum,w,x}": {
        "sumOfSquares": 0.012398744528575445,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -1.576271186440678,
                "x": -0.25423728813559343
            }
        ]
    },
    "{aAsLogarithmBase,sum,w,weightAsPowerBase}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "weightAsPowerBase": 2,
                "w": -1.6779661016949152
            }
        ]
    },
    "{aAsLogarithmBase,sum,w},{aAsLogarithmBase,sum,w}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -1.6779661016949152
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -1.6779661016949152
            }
        ],
        "spreadParameters": [
            "w"
        ]
    },
    "{aAsCoefficient,aAsLogarithmBase,sum,w}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "aAsCoefficient": 0.3333333333333333,
                "w": -0.5593220338983049
            }
        ]
    },
    "{aAsLogarithmBase,sum,w}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -1.6779661016949152
            }
        ]
    },
    "{aAsLogarithmBase,jAsCoefficient,sum,w}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "jAsCoefficient": 1,
                "w": -1.6779661016949152
            }
        ]
    },
    "{aAsLogarithmBase,sum,w,weightAsPowerExponent}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "weightAsPowerExponent": 0.05084745762711851,
                "w": -1.6779661016949152
            }
        ]
    },
    "{aAsLogarithmBase,sum,w,weightAsCoefficient}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "weightAsCoefficient": 0.1111111111111111,
                "w": -1.6779661016949152
            }
        ]
    },
    "{aAsLogarithmBase,sum,useNuminator,w}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -1.6779661016949152,
                "useNuminator": true
            }
        ]
    },
    "{aAsLogarithmBase,sum,w,weightAsLogarithmBase}": {
        "sumOfSquares": 0.012386244365525018,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "weightAsLogarithmBase": 2,
                "w": -1.6779661016949152
            }
        ]
    },
    "{jAsPowerExponent,sum},{count,jAsPowerExponent}": {
        "sumOfSquares": 0.012291032840363534,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913
            },
            {
                "count": true,
                "jAsPowerExponent": 1.0677966101694913
            }
        ],
        "spreadParameters": [
            "jAsPowerExponent"
        ]
    },
    "{jAsPowerExponent,sum},{count}": {
        "sumOfSquares": 0.01224588333149692,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913
            },
            {
                "count": true
            }
        ]
    },
    "{kAsPowerExponent,sum},{kAsPowerExponent,sum}": {
        "sumOfSquares": 0.011932731662545224,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543
            },
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543
            }
        ],
        "spreadParameters": [
            "kAsPowerExponent"
        ]
    },
    "{kAsPowerExponent,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.011932731662545224,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{kAsPowerExponent,sum,weightAsPowerBase}": {
        "sumOfSquares": 0.011932731662545224,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{kAsPowerExponent,sum}": {
        "sumOfSquares": 0.011932731662545224,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543
            }
        ]
    },
    "{kAsPowerExponent,sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.011932731662545224,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{kAsPowerExponent,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.011932731662545224,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543,
                "weightAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{aAsCoefficient,kAsPowerBase,sum}": {
        "sumOfSquares": 0.01184671832144609,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerBase": 2,
                "aAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{jAsPowerExponent,sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.011723803802867177,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{jAsPowerExponent,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.011723803802867177,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913,
                "weightAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{jAsPowerExponent,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.011723803802867177,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{jAsPowerExponent,sum,weightAsPowerBase}": {
        "sumOfSquares": 0.011723803802867177,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{jAsPowerExponent,sum}": {
        "sumOfSquares": 0.011723803802867177,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913
            }
        ]
    },
    "{jAsPowerExponent,sum},{jAsPowerExponent,sum}": {
        "sumOfSquares": 0.011723803802867177,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913
            },
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913
            }
        ],
        "spreadParameters": [
            "jAsPowerExponent"
        ]
    },
    "{kAsPowerExponent,sum},{count,withoutRepetition}": {
        "sumOfSquares": 0.011707587574419902,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543
            },
            {
                "withoutRepetition": true,
                "count": true
            }
        ]
    },
    "{kAsPowerExponent,sum},{count,kAsPowerExponent,withoutRepetition}": {
        "sumOfSquares": 0.011707587574419902,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.9661016949152543
            },
            {
                "withoutRepetition": true,
                "count": true,
                "kAsPowerExponent": 0.9661016949152543
            }
        ],
        "spreadParameters": [
            "kAsPowerExponent"
        ]
    },
    "{jAsPowerExponent,sum},{aAsLogarithmBase,sum}": {
        "sumOfSquares": 0.011676265759032375,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2
            }
        ]
    },
    "{kAsPowerExponent,sum,y}": {
        "sumOfSquares": 0.011641237933281345,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.8644067796610169,
                "y": 0.9661016949152543
            }
        ]
    },
    "{jAsPowerExponent,sum,useNuminator}": {
        "sumOfSquares": 0.011626622196382433,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913,
                "useNuminator": true
            }
        ]
    },
    "{kAsPowerExponent,sum,useNuminator}": {
        "sumOfSquares": 0.011516462448364974,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.8644067796610169,
                "useNuminator": true
            }
        ]
    },
    "{max,withoutRepetition},{aAsLogarithmBase,jAsPowerExponent,sum}": {
        "sumOfSquares": 0.01147973129329852,
        "submetrics": [
            {
                "withoutRepetition": true,
                "max": true
            },
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "jAsPowerExponent": 1.2711864406779663
            }
        ]
    },
    "{jAsCoefficient,kAsPowerExponent,sum}": {
        "sumOfSquares": 0.011241145941922001,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.7627118644067798,
                "jAsCoefficient": 0.8888888888888888
            }
        ]
    },
    "{kAsPowerBase,kAsPowerExponent,sum}": {
        "sumOfSquares": 0.01122374351599272,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.4576271186440679,
                "kAsPowerBase": 2
            }
        ]
    },
    "{sum},{count,kAsCoefficient,withoutRepetition}": {
        "sumOfSquares": 0.011164275187821647,
        "submetrics": [
            {
                "sum": true
            },
            {
                "withoutRepetition": true,
                "count": true,
                "kAsCoefficient": 0
            }
        ]
    },
    "{jAsPowerExponent,sum,y}": {
        "sumOfSquares": 0.01097814015621247,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "y": 0.8644067796610169
            }
        ]
    },
    "{aAsPowerExponent,kAsPowerExponent,sum}": {
        "sumOfSquares": 0.010919739692347018,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.8644067796610169,
                "aAsPowerExponent": 1.0677966101694913
            }
        ]
    },
    "{jAsPowerExponent,sum},{count,jAsPowerExponent,withoutRepetition}": {
        "sumOfSquares": 0.010768960944011603,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913
            },
            {
                "withoutRepetition": true,
                "count": true,
                "jAsPowerExponent": 1.0677966101694913
            }
        ],
        "spreadParameters": [
            "jAsPowerExponent"
        ]
    },
    "{jAsPowerExponent,sum},{count,withoutRepetition}": {
        "sumOfSquares": 0.010768960944011603,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913
            },
            {
                "withoutRepetition": true,
                "count": true
            }
        ]
    },
    "{kAsCoefficient,sum},{count,withoutRepetition}": {
        "sumOfSquares": 0.010766549994980336,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.5555555555555556
            },
            {
                "withoutRepetition": true,
                "count": true
            }
        ]
    },
    "{aAsLogarithmBase,kAsPowerBase,sum,w}": {
        "sumOfSquares": 0.010399576215003616,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "kAsPowerBase": 2,
                "w": -1.6779661016949152
            }
        ]
    },
    "{aAsLogarithmBase,kAsPowerExponent,sum,w}": {
        "sumOfSquares": 0.010328364007565264,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "kAsPowerExponent": 1.2711864406779663,
                "w": -1.6779661016949152
            }
        ]
    },
    "{kAsPowerExponent,sum},{sum}": {
        "sumOfSquares": 0.010157571453207002,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.6610169491525424
            },
            {
                "sum": true
            }
        ]
    },
    "{sum},{kAsPowerExponent,sum}": {
        "sumOfSquares": 0.010157571453207002,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "kAsPowerExponent": 0.6610169491525424
            }
        ]
    },
    "{aAsPowerExponent,kAsCoefficient,sum}": {
        "sumOfSquares": 0.009791288615662705,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "aAsPowerExponent": 1.0677966101694913
            }
        ]
    },
    "{aAsPowerExponent,jAsPowerExponent,sum}": {
        "sumOfSquares": 0.009773905503413017,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913,
                "aAsPowerExponent": 1.0677966101694913
            }
        ]
    },
    "{kAsPowerExponent,sum,x}": {
        "sumOfSquares": 0.00972892026288983,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.8644067796610169,
                "x": -0.05084745762711851
            }
        ]
    },
    "{kAsPowerExponent,sum,w}": {
        "sumOfSquares": 0.00972892026288983,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 0.8644067796610169,
                "w": -0.05084745762711851
            }
        ]
    },
    "{kAsCoefficient,sum},{sum}": {
        "sumOfSquares": 0.009498003227551665,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.5555555555555556
            },
            {
                "sum": true
            }
        ]
    },
    "{kAsCoefficient,sum}": {
        "sumOfSquares": 0.009498003227551665,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778
            }
        ]
    },
    "{kAsCoefficient,sum,weightAsPowerBase}": {
        "sumOfSquares": 0.009498003227551665,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "weightAsPowerBase": 2
            }
        ]
    },
    "{kAsCoefficient,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.009498003227551665,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "weightAsPowerExponent": 0.05084745762711851
            }
        ]
    },
    "{kAsCoefficient,sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.009498003227551665,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "weightAsLogarithmBase": 2
            }
        ]
    },
    "{sum},{kAsCoefficient,sum}": {
        "sumOfSquares": 0.009498003227551665,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "kAsCoefficient": 0.5555555555555556
            }
        ]
    },
    "{kAsCoefficient,sum},{kAsCoefficient,sum}": {
        "sumOfSquares": 0.009498003227551665,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778
            },
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778
            }
        ],
        "spreadParameters": [
            "kAsCoefficient"
        ]
    },
    "{kAsCoefficient,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.009498003227551665,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "weightAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{aAsCoefficient,kAsCoefficient,sum}": {
        "sumOfSquares": 0.009438544874892464,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "aAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{kAsCoefficient,sum,useNuminator}": {
        "sumOfSquares": 0.00940082162106692,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "useNuminator": true
            }
        ]
    },
    "{aAsLogarithmBase,kAsCoefficient,sum,w}": {
        "sumOfSquares": 0.009392609126210429,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "kAsCoefficient": 0.8888888888888888,
                "w": -1.6779661016949152
            }
        ]
    },
    "{aAsLogarithmBase,jAsPowerExponent,sum,w}": {
        "sumOfSquares": 0.009380945160357972,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "jAsPowerExponent": 1.0677966101694913,
                "w": -1.6779661016949152
            }
        ]
    },
    "{aAsCoefficient,kAsPowerExponent,sum}": {
        "sumOfSquares": 0.009299270612294169,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 1.7796610169491522,
                "aAsCoefficient": 0.1111111111111111
            }
        ]
    },
    "{kAsCoefficient,sum},{count,kAsCoefficient,withoutRepetition}": {
        "sumOfSquares": 0.00928136292971576,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.6666666666666666
            },
            {
                "withoutRepetition": true,
                "count": true,
                "kAsCoefficient": 0.6666666666666666
            }
        ],
        "spreadParameters": [
            "kAsCoefficient"
        ]
    },
    "{kAsCoefficient,kAsPowerExponent,sum}": {
        "sumOfSquares": 0.009175299141581633,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.3333333333333333,
                "kAsPowerExponent": 1.4745762711864403
            }
        ]
    },
    "{jAsPowerExponent,kAsCoefficient,sum}": {
        "sumOfSquares": 0.009156268437304337,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.2222222222222222,
                "jAsPowerExponent": 0.6610169491525424
            }
        ]
    },
    "{kAsCoefficient,sum,y}": {
        "sumOfSquares": 0.009137972814976598,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "y": 0.9661016949152543
            }
        ]
    },
    "{kAsCoefficient,sum,w}": {
        "sumOfSquares": 0.009136149155750431,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "w": -0.15254237288135597
            }
        ]
    },
    "{kAsCoefficient,sum,x}": {
        "sumOfSquares": 0.009136149155750431,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.7777777777777778,
                "x": -0.15254237288135597
            }
        ]
    },
    "{jAsCoefficient,jAsPowerExponent,sum}": {
        "sumOfSquares": 0.009134028151933865,
        "submetrics": [
            {
                "sum": true,
                "jAsCoefficient": 0.7777777777777778,
                "jAsPowerExponent": 1.1694915254237293
            }
        ]
    },
    "{jAsPowerExponent,sum},{sum}": {
        "sumOfSquares": 0.00910097075832883,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293
            },
            {
                "sum": true
            }
        ]
    },
    "{sum},{jAsPowerExponent,sum}": {
        "sumOfSquares": 0.00910097075832883,
        "submetrics": [
            {
                "sum": true
            },
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293
            }
        ]
    },
    "{aAsCoefficient,jAsPowerExponent,sum}": {
        "sumOfSquares": 0.0090837557617904,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "aAsCoefficient": 0.2222222222222222
            }
        ]
    },
    "{jAsPowerExponent,sum,w}": {
        "sumOfSquares": 0.009016930119832352,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913,
                "w": -0.15254237288135597
            }
        ]
    },
    "{jAsPowerExponent,sum,x}": {
        "sumOfSquares": 0.009016930119832352,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.0677966101694913,
                "x": -0.15254237288135597
            }
        ]
    },
    "{b,sum,w}": {
        "sumOfSquares": 0.008760369826135107,
        "submetrics": [
            {
                "sum": true,
                "w": -0.25423728813559343,
                "b": -1.3728813559322033
            }
        ]
    },
    "{sum,u,x}": {
        "sumOfSquares": 0.008760369826135107,
        "submetrics": [
            {
                "sum": true,
                "x": -0.25423728813559343,
                "u": -1.3728813559322033
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,kAsPowerExponent,sum}": {
        "sumOfSquares": 0.008318427452387986,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "kAsPowerExponent": 0.8644067796610169,
                "aAsPowerExponent": 2.084745762711864
            }
        ]
    },
    "{aAsLogarithmBase,b,sum,w}": {
        "sumOfSquares": 0.008302497121951356,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "w": -1.576271186440678,
                "b": -1.88135593220339
            }
        ]
    },
    "{jAsPowerExponent,kAsPowerExponent,sum}": {
        "sumOfSquares": 0.007969828119686818,
        "submetrics": [
            {
                "sum": true,
                "kAsPowerExponent": 1.4745762711864403,
                "jAsPowerExponent": 1.3728813559322033
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,jAsPowerExponent,sum}": {
        "sumOfSquares": 0.007788887283637467,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "jAsPowerExponent": 1.0677966101694913,
                "aAsPowerExponent": 2.084745762711864
            }
        ]
    },
    "{aAsLogarithmBase,aAsPowerExponent,kAsCoefficient,sum}": {
        "sumOfSquares": 0.007769298509074064,
        "submetrics": [
            {
                "sum": true,
                "aAsLogarithmBase": 2,
                "kAsCoefficient": 0.7777777777777778,
                "aAsPowerExponent": 2.084745762711864
            }
        ]
    }
} as unknown as Record<string, Metric> // paste things in from 1.txt, 2.txt, etc.

const startTime = performance.now()
perfectMetrics(Object.values(bestMetricsToBePerfected)).then(() => {
    saveDebugMessage(`\n\nTHE PERFECTED METRICS ARE ${JSON.stringify(presentBestMetrics(bestMetrics), undefined, 4)}`, DebugTarget.PERFECT)

    const endTime = performance.now()
    if (time) {
        saveDebugMessage(`\n\nPERFECTING METRICS TOOK ${endTime - startTime} MS`, DebugTarget.PERFECT)
    }
})

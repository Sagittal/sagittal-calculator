import { program } from "commander"
import { computeMonzoFromRatio, Monzo } from "../math"
import { ANY_MONZO_CHARS } from "./constants"
import { parseMonzo } from "./parseMonzo"
import { parseRatio } from "./parseRatio"

// TODO: you should also make it accept -n name!

// TODO: test this

const computeMonzoFromCommand = (): Monzo => {
    program
        .option("-m, --monzo <monzo>", "monzo", parseMonzo)
        .option("-r, --ratio <ratio>", "ratio", parseRatio)
        .parse(process.argv)

    const comma = program.args[ 0 ]

    let monzo
    if (comma) {
        if (comma.includes("/")) {
            monzo = computeMonzoFromRatio(parseRatio(comma))
        }
        if (comma.match(ANY_MONZO_CHARS)) {
            monzo = parseMonzo(comma)
        }
    } else if (program.monzo) {
        monzo = program.monzo
    } else if (program.ratio) {
        monzo = computeMonzoFromRatio(program.ratio)
    }

    if (!monzo) {
        throw new Error("Unable to determine monzo for comma.")
    }

    return monzo
}

export {
    computeMonzoFromCommand,
}

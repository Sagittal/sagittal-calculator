import { program } from "commander"
import { computeMonzoFromRatio, Monzo, Ratio } from "../math"
import { ANY_MONZO_CHARS } from "./constants"
import { parseMonzo } from "./parseMonzo"
import { parseRatio } from "./parseRatio"
import { Formatted, IO } from "./types"

// TODO: you should also make it accept -n name!

// TODO: test this

const computeMonzoFromCommand = (): Monzo => {
    program
        .option("-m, --monzo <monzo>", "monzo", (monzoText: string) => parseMonzo(monzoText as Formatted<Monzo>))
        .option("-r, --ratio <ratio>", "ratio", (ratioText: string) => parseRatio(ratioText as Formatted<Ratio>))
        .parse(process.argv)

    const comma = program.args[ 0 ] as IO

    let monzo
    if (comma) {
        if (comma.includes("/")) {
            monzo = computeMonzoFromRatio(parseRatio(comma as Formatted<Ratio>))
        }
        if (comma.match(ANY_MONZO_CHARS)) {
            monzo = parseMonzo(comma as Formatted<Monzo>)
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

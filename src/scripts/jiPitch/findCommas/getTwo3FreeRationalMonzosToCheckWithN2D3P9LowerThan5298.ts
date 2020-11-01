import { BLANK, Filename, Monzo, readLines } from "../../../general"

const getTwo3FreeRationalMonzosToCheckWithN2D3P9LowerThan5298 = (): Array<Monzo<{ rational: true, rough: 5 }>> => {
    // const two3FreeQuotients = readLines("src/scripts/jiPitch/findCommas/popular23FreeClassQuotients.txt" as Filename)
    //     .map(parseQuotient) as Array<Quotient<{ rational: true, rough: 5 }>>
    //
    // const inverted23FreeQuotients = two3FreeQuotients.map(invertQuotient) as
    //     Array<Quotient<{ rational: true, rough: 5 }>>
    //
    // const monzos = [
    //     ...two3FreeQuotients,
    //     ...inverted23FreeQuotients,
    // ].map(computeRationalMonzoFromRationalQuotient) as Array<Monzo<{ rational: true, rough: 5 }>>
    //
    // saveLog(stringify(monzos), LogTarget.ALL)

    return JSON.parse(
        readLines("src/scripts/jiPitch/findCommas/popular23FreeClassMonzos.txt" as Filename).join(BLANK)
    ) as Array<Monzo<{ rational: true, rough: 5 }>>
}

export {
    getTwo3FreeRationalMonzosToCheckWithN2D3P9LowerThan5298,
}

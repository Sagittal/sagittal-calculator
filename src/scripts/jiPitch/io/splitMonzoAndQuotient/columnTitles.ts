import { Count, Exponent, Io, ioSettings, Max, Prime, PRIMES, TableFormat } from "../../../../general"

const splitMonzoAndQuotientColumnTitles = (
    columnTitles: Io[],
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Io[] => {
    const adjustedColumnTitles = [] as Io[]

    columnTitles.forEach((columnTitle: Io): void => {
        if (columnTitle === "quotient" && ioSettings.tableFormat !== TableFormat.FORUM) {
            adjustedColumnTitles.push("quotient n" as Io, "/" as Io, "d" as Io)
        } else if (columnTitle === "monzo") {
            adjustedColumnTitles.push(
                "monzo [" as Io,
                ...PRIMES.slice(0, maxMonzoLength).map((prime: Prime): string => prime.toString()) as Io[],
                "⟩" as Io,
            )
        } else {
            adjustedColumnTitles.push(columnTitle)
        }
    })

    return adjustedColumnTitles
}

export {
    splitMonzoAndQuotientColumnTitles,
}
import { program } from "commander"
import { DEFAULT_MAX_N2D3P9 } from "../constants"
import { computePopularRatios } from "../popularRatios"

// TODO: consider adding a layer which pre-calculates numerators up to 3501 per Dave's suggestion on the forum

program
    .option("-m, --max-n2d3p9 [maxN2D3P9]", "max N2D3P9", parseFloat)
    .parse(process.argv)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9

const popularRatios = computePopularRatios(maxN2D3P9)

// TODO: this is all working okay for now,
//  but ideally we'd have something that will generalize the saveDebugMessage trick across all the different scripts
console.log(`count of results with N2D3P9 <= ${maxN2D3P9}: ${popularRatios.length}`)

// TODO: extract this... and can you use a table helper please
console.log(`[table]`)
console.log("[tr][th]2,3-equivalent[/th][th][/th][th][/th][th]introducing[/th][th][/th][th][/th][th][/th][/tr]")
console.log("[tr][th]pitch[/th][th][/th][th][/th][th]symbol[/th][th][/th][th]Scala[/th][th]Scala[/th][/tr]")
console.log("[tr][th]ratio[/th][th][/th][th][/th][th]subset[/th][th]N2D3P9[/th][th]archive[/th][th]archive[/th][/tr]")
console.log("[tr][th]class[/th][th]N2D3P9[/th][th]symbol[/th][th]indices[/th][th]rank[/th][th]rank[/th][th]occurrences[/th][/tr]")
popularRatios.forEach(result => {
    const { presentedN2D3P9, presentedRatio, rank: estimatedRank, popularityRank: actualRank, symbolSets, smileys, votes } = result
    console.log(`[tr][td]${presentedRatio}[/td][td]${presentedN2D3P9}[/td][td]${smileys}[/td][td]${symbolSets}[/td][td]${estimatedRank}[/td][td]${actualRank}[/td][td]${votes}[/td][/tr]`)
})
console.log(`[/table]`)

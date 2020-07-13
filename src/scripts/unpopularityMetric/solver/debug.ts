import { populatedForChunkCount, searchedForChunkCount, scopesForChunkCount } from "./globals"

const presentNums = (thing: number[]) => {
    return JSON.stringify(Object.entries(thing).map(([k, v]) => `${k}: ${v}`))
}

const presentLens = (thing: unknown[][]) => {
    return JSON.stringify(Object.entries(thing).map(([k, v]) => `${k}: ${v.length}`))
}

const debugSearchedAndPopulated = () => {
    return `| populated ${presentNums(populatedForChunkCount)} | searched ${presentNums(searchedForChunkCount)} | in the queue ${presentLens(scopesForChunkCount)}`
}

const presentPercentage = (a: number, b: number) => {
    return `${a}/${b} (${(100 * a / b).toPrecision(3)}%)`
}


export {
    debugSearchedAndPopulated,
    presentPercentage,
}

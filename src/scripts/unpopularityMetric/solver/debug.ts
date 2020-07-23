import { populatedsForChunkCount, scopesForChunkCount, searchedsForChunkCount } from "./globals"

const presentNums = (thing: number[]) =>
    JSON.stringify(Object.entries(thing).map(([k, v]) => `${k}: ${v}`))

const presentLens = (thing: unknown[][]) =>
    JSON.stringify(Object.entries(thing).map(([k, v]) => `${k}: ${v.length}`))

const debugSearchedAndPopulated = () =>
    `| populated ${presentNums(populatedsForChunkCount)} | searched ${presentNums(searchedsForChunkCount)} | in the queue ${presentLens(scopesForChunkCount)}`

const presentPercentage = (a: number, b: number) =>
    `${a}/${b} (${(100 * a / b).toPrecision(3)}%)`

export {
    debugSearchedAndPopulated,
    presentPercentage,
}

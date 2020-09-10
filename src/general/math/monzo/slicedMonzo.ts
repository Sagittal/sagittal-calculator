// import { ZERO_ONE_INDEX_DIFF } from "../../code"
// import { computePrimeCount } from "../primeCount"
// import { Monzo, MonzoTypeParameters } from "./types"
//
// // TODO: okay i'm just temperorarily going to make this do the same thing as roughening
// const computeMonzoSlicedToPrime = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
//     T extends Omit<MonzoTypeParameters, "rough">>(
//     monzo: Monzo<T>,
//     roughness: S,
// ): Monzo<T & { rough: S }> => {
//     const sliceIndex = computePrimeCount(roughness) - ZERO_ONE_INDEX_DIFF
//
//     return monzo.slice(sliceIndex) as Monzo<T & { rough: S }>
// }
//
// export {
//     computeMonzoSlicedToPrime,
// }

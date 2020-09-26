// import { deepClone } from "../code"
// import {
//     computeIsSubNum,
//     computeIsSuperNum,
//     computeIsUnisonNum,
//     computeSuperNum,
//     Direction,
//     Num,
//     NumTypeParameters,
// } from "../math"
// import { Pitch } from "./types"
//
// const computeIsSuperPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
//     pitch: U,
// ): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUPER }> =>
//     computeIsSuperNum(pitch)
//
// const computeIsSubPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
//     pitch: U,
// ): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUB }> =>
//     computeIsSubNum(pitch)
//
// const computeIsUnisonPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
//     pitch: U,
// ): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.UNISON }> =>
//     computeIsUnisonNum(pitch)
//
// const computeSuperPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
//     pitch: U,
// ): Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
//     const isSubPitch = computeIsSubPitch(pitch as Pitch)
//
//     let superPitch: Pitch
//     if (isSubPitch) {
//         superPitch = computeSuperNum(pitch as Num<T>) as Pitch
//     } else {
//         // TODO: yeah I don't know wth is up with these type assertions, but we got a bunch of these "pitch as Pitch"
//         //  and I'm pretty sure it has something to do with this "U" type trickery, which was necessary for these
//         //  to support branded pitches like Commas and TwoThreeFreeClasses
//         //  you can find these elsewhere too, such as in computeIsCommaSized.ts
//         superPitch = deepClone(pitch as Pitch)
//     }
//
//     return superPitch as Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }>
// }
//
// export {
//     computeIsSubPitch,
//     computeIsSuperPitch,
//     computeIsUnisonPitch,
//     computeSuperPitch,
// }

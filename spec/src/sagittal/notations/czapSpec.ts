// Import { Apotome, Count, Direction, Id } from "../../../../../src/general"
// Import { BoundClass } from "../../../../../src/sagittal/notations/ji"
// Import { computeCzap } from "../../../../../src/sagittal/notations/ji/czap"
// Import { AccidentalKey, CommaClass, Flacco, Flacombo } from "../../../../../src/sagittal/notations/types"
//
// Describe("computeCzap", (): void => {
//     It("converts a flacombo to a czap; works for section 1A kind", (): void => {
//         Const flacombo: Flacombo = {
//             BoundClassId: 63 as Id<BoundClass>,
//             CommaClassId: 58 as Id<CommaClass>,
//             CommaDirection: Direction.SUPER,
//             ApotomeCount: 0 as Count<Apotome>,
//             FlaccoId: 58 as Id<Flacco>,
//         }
//
//         Const actual = computeCzap(flacombo)
//
//         Const expected = {
//             PrimaryComma: {},
//             CaptureZone: [],
//             AccidentalKey: "" as AccidentalKey,
//         }
//         Expect(actual).toEqual(expected)
//     })
//
//     It("works for section 1B", (): void => {
//        
//     })
//
//     It("works for section 1C", (): void => {
//        
//     })
//
//     It("works for section 2A", (): void => {
//        
//     })
//
//     It("works for section 2B", (): void => {
//        
//     })
//
//     It("works for section 2C", (): void => {
//        
//     })
//
//     It("works for section -1A", (): void => {
//
//     })
//    
//     It("works for section -1B", (): void => {
//
//     })
//
//     It("works for section -1C", (): void => {
//
//     })
//
//     It("works for section -2A", (): void => {
//
//     })
//
//     It("works for section -2B", (): void => {
//
//     })
//
//     It("works for section -2C", (): void => {
//
//     })
// })

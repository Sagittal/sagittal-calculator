import {Scamon} from "../../../../../src/general/math/numeric/scamon"
import {isCommaSized} from "../../../../../src/sagittal/ji/name/typeGuards"

describe("isCommaSized", (): void => {
    it("returns true if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const candidateCommaSizedPitch = {
            monzo: [1, -1, 2, 0, 0, 0, 0, -1],
        } as Scamon<{rational: true}>                         // -226.841¢

        const actual = isCommaSized(candidateCommaSizedPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const candidateCommaSizedPitch = {
            monzo: [0, -1, 1, 0, 0, 1, 0, -1],
        } as Scamon<{rational: true}>                         // 227.373¢

        const actual = isCommaSized(candidateCommaSizedPitch)

        expect(actual).toBeFalsy()
    })
})

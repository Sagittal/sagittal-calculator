import { equalRealMonzos, RealMonzo } from "../../../../../../src/general/math/real/monzo"

describe("equalRealMonzos", (): void => {
    it("returns true if the monzos are equal", (): void => {
        const monzoA: RealMonzo = [5, 4] as RealMonzo
        const monzoB: RealMonzo = [5, 4] as RealMonzo

        const actual = equalRealMonzos(monzoA, monzoB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzos are not equal", (): void => {
        const monzoA: RealMonzo = [5, 4] as RealMonzo
        const monzoB: RealMonzo = [5, 0, 4] as RealMonzo

        const actual = equalRealMonzos(monzoA, monzoB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzos are equal, trimming them if necessary", (): void => {
        const monzoA: RealMonzo = [5, 4, 0] as RealMonzo
        const monzoB: RealMonzo = [5, 4] as RealMonzo

        const actual = equalRealMonzos(monzoA, monzoB)

        expect(actual).toBeTruthy()
    })
})

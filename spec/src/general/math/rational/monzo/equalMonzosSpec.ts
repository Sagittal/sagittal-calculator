import { equalMonzos, Monzo } from "../../../../../../src/general/math/rational/monzo"

describe("equalMonzos", (): void => {
    it("returns true if the monzos are equal", (): void => {
        const monzoA: Monzo = [5, 4] as Monzo
        const monzoB: Monzo = [5, 4] as Monzo

        const actual = equalMonzos(monzoA, monzoB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzos are not equal", (): void => {
        const monzoA: Monzo = [5, 4] as Monzo
        const monzoB: Monzo = [5, 0, 4] as Monzo

        const actual = equalMonzos(monzoA, monzoB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzos are equal, trimming them if necessary", (): void => {
        const monzoA: Monzo = [5, 4, 0] as Monzo
        const monzoB: Monzo = [5, 4] as Monzo

        const actual = equalMonzos(monzoA, monzoB)

        expect(actual).toBeTruthy()
    })
})

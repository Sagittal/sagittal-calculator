import { Ed, Step, Window } from "../../../types"
import { Prime } from "../../rational"
import { Exponent, Max } from "../../types"
import { RealDecimal } from "../decimal"
import { Quotient } from "../quotient"
import { NumericProperties, NumTypeParameterEffects } from "../types"

type Monzo<T extends NumericProperties = {}> =
    Array<Exponent<Prime>>
    & NumTypeParameterEffects<T>

type Val = Array<Exponent<Step>>

/*
ok so the val tells you
like if you've got a <12 19 28]
2 = 2^(12/12)
3 = 2^(19/12)
so it is giving you an exponent, yeah...? because you could re-write that (2^(1/12))^19
it's just no longer an exponent for a prime
but an exponent for a ...
well, when you combine it with whatever it is, you get 2.99661415375, or basically a prime, just an approximated one
so maybe you need an Approx<> type you could put around Prime
and maybe if an Exponent<Prime> is an exponent that can be combined with a Prime w/o needing to specify "Base"
which you can then get Power<Prime> and then Product<Power<Prime>> --> ji quotient

ok so another thing is, that value 2.99661415375, you can use that as the prime now, for monzos
cuz whatever that weird float is, it's a multiple of the step size of the EDO

ok so there's actually two stages of exponentiation, no?
first you've got the 2^(1/12) type thing
and you raise that to the 19th power to get the apprx of 3, 2.997
then you raise THAT to the, say, 5th power, if your monzo has a 5 in the 3-exp position

so it's like this is an Exponent<Pitch>
Pitch in the sense of a multiple of frequency
just like the 2 in the <> for Ed<2> is a Pitch

but if you want to keep this in math/ then it would have to just be a ... "Value"? why not just number, then?
 */

interface PatentValOptions<T extends Window> {
    ed: Ed<T>,
    window: T,
    primeLimit: Max<Max<Prime>>
}

type RealByMonzo<T extends NumericProperties> = {
    decimal?: RealDecimal<T>,
    monzo: Monzo<T>,
    quotient?: Quotient<T>,
}

export {
    Val,
    PatentValOptions,
    Monzo,
    RealByMonzo,
}
import { Ed, Step, Window } from "../../types"
import { Exponent, Integer, Max, Prime } from "../types"

enum Direction {
    SUPER = "super",
    SUB = "sub",
}

// TODO: COMMA MONZO RATIO JI note that many of these could apply to Ratio too
//  argh... but does the fact that "comma" is included render this not math?
//  I think that probably just means that when you implement that Comma is the thing which gets passed aroudn the most
//  containing either a Monzo or a Ratio, that the comma/not-comma brand will be on THAT thing, not the monzo
type NumericTypeParameters = Partial<{
    limit: number,
    irrational: boolean,
    direction: Direction
    comma: boolean,
    rough: number,
}>

type Monzo<T extends NumericTypeParameters = {}> =
    Array<(T extends { irrational: true } ? number : Integer) & Exponent<Prime>>
    & (T extends { direction: Direction.SUB } ? { _MonzoDirection: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _MonzoDirection: Direction.SUPER } : {})
    & (T extends { limit: number } ? { _MonzoLimit: Pick<T, "limit"> } : {})
    & (T extends { rough: number } ? { _MonzoRough: Pick<T, "rough"> } : {})
    & (T extends { comma: true } ? { _MonzoComma: "MonzoComma" } : {})

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
which you can then get Power<Prime> and then Product<Power<Prime>> --> ji ratio

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

export {
    Monzo,
    Val,
    PatentValOptions,
    NumericTypeParameters,
    Direction,
}

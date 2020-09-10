import { Cents, Direction, Id, JiPitch, Maybe, Monzo, Name, Prime, Ratio, Sopfr } from "../general"
import { ApotomeSlope, N2D3P9 } from "./comma"

// TODO: COMMA MONZO RATIO JI
//  - and if you could make Analyzed<> a parameterized thing like Formatted<>, of course it would be a bit different
//  because Formatted<> converts it from whatever object it is to a branded string, just with aspect of that object
//  whereas Analyzed would just extend the object
//  - okay how about this... you've been struggling with Analyzed vs Analysis 
//  so what if it was an Analysis<Thing>? that might help force you to think of it not as a Thing first but as an
//  Analysis first. and then maybe Formatted<Thing> can only be made out of some kind of an Analysis? well no that 
//  doens't work because you have all sorts of Formatted<number> and Formatted<Monzo>
//  - I want to be sensitive to the issue of the type names reading in a consistent direction
//  relative to the variable names, i.e. in the opposite order
//  like how primeExponentExtremas: Array<Extrema<Integer & Exponent<Prime>>>
//  so you'd have an analyzedJiPitch, which would be a Pitch<Ji<Analyzed>> by that pattern
//  but I'm sure you can see how that doesn't really make sense!
//  which maybe just means that the variable name should be jiPitchAnalyzed: Analyzed<Pitch<Ji>>
//  or per my above insight, would be jiPitchAnalysis = Analysis<Pitch<Ji>>
//  okay so would type Analysis<T> = T & T<"Analyzed"> which would allow you to write it like the above...
//  no wait, then "Analyzed" would conflict with the Ji part...
//  (although now that you've mastered the art of a type parameter object, you could have { analyzed: true })
//  - also consider how Rank<_, Integer> is how you make it an Integer... should that just be Integer & Rank?
//  like should Ji<T> just mean Integer & T?
//  yeah but you wouldn't want a Just Intoned Rank... so you should probably have it be Whole<>
//  except Whole numbers are technically only positive... so wouldn't it just be Integer<>?
//  why isn't Integer already parameterized? or is it?
//  so i think this Integer/Whole parameterized thing is independent from the Ji pitch vs not Ji
//  because that's going to be its own thing entirely, where JI must hhave at least one of monzo and ratio
//  and non-JI must have at least one of value/cents and ED maybe
// tslint:disable max-line-length
/*
Also parameteized types are great when realistically it could be a ton of different things
But avoid it when it’s just either number or integer...

Like just have a JiMonzo and a Monzo

and then a Comma is just a JiMonzo which is tagged to indicate it is small, and should be able to be named with the naming scheme

Pitch<JI> = JI? Monzo : Value
maybe

Still kinda working it out in my head. Monzos are not necessarily JI / rational (consider the monzos given [url=http://forum.sagittal.org/viewtopic.php?p=582#p582]here[/url] for the size category bounds, the square roots of Pythagorean intervals
*/

interface JiPitchAnalysis {
    apotomeSlope: ApotomeSlope,
    twoThreeFreeSopfr: Sopfr<5>,
    limit: Prime,
    ratio: Ratio,
    n2d3p9: N2D3P9,
    cents: Cents,
    twoThreeFreeClass: TwoThreeFreeClass,
}

interface Comma extends JiPitch {
    monzo: Monzo<{ comma: true }>,
}

interface AnalyzedJiPitch extends JiPitch, JiPitchAnalysis {
}

interface AnalyzedComma extends Comma, JiPitchAnalysis {
    name: Name<Comma>,
}

type SagittalComma<T extends "Maybe" | void = void> = Comma & (
    T extends "Maybe" ?
        { id?: Id<SagittalComma> } :
        { id: Id<SagittalComma> }
    )

interface TwoThreeFreeClass extends JiPitch {
    monzo: Monzo<{ rough: 5, direction: Direction.SUPER }>
    _TwoThreeFreeClassBrand: "TwoThreeFreeClass"
}

export {
    Comma,
    AnalyzedJiPitch,
    AnalyzedComma,
    SagittalComma,
    TwoThreeFreeClass,
}

import {FlaccoId} from "../accidental"
import {BoundClassId} from "../bound"
import {CommaClassId} from "../ji"

// Todo: FLACOMBO, SECTION, NOTATION GENERATION; SYMBOL CLASS (SUBSET) / FIRST SECTION / ID/NAME QUESTIONS / GETTING
//  I'm not quite ready for Sagittal to have ID yet
//  At that stage, you'd want a const SAGITTALS: Sagittal[] and generate it and test it, and maybe apotome shift &
//  Apotome complement methods would only be used in test, because you'd be "get"ting the symbol, not computing it
//  But we still need to wrangle with the problems of: do we +1000 for apotome shift? that works w/ Magrathean I think
//  Do we have negative IDs? is it a "key", then? this is pretty much what we used in the Spreadsheet Calculator.
//  Does this respect the principle of things expressing their existence minimally? do IDs go against that already? etc.
//  A valid symbols array would answer the question of how the valid cores and valid arms together
//  Sagittal class could go up thru 2 shafts and copy to other 3 sections
//  And this would be related to that "even supported" thing you just added
//  (which should be better documented and there might be a few places you should add some more comments,
//  If only of symbol ASCII, you know?)
//  So apotome complement would go from symbol class to symbol class
//  And the other two, shift and flip, go from symbol class to symbol
//  But this isn’t related to the minimum representation of a notation
//  Though the generation of all valid symbols should be similar to the generation of the extreme JI notation...
//  And if you do actually add SymbolClass, then address the comment introducing flacco below.
//  - Maybe it really should be Sagittal subset, not Flacco subset,
//  Because some Flaccos cross over in the Revo notation, you know?
//  E.g. )||( is in Spartan multi-shaft, but no single-shaft right scroll
//  Or is the problem only really solvable by that Flaccos only apply to the 1-shaft symbols,
//  And multi-shaft symbols are just not even flag & accent combos??
//  I mean, you could solve it by just calling them symbol subsets, but then you have to include all the redundancy...
//  Or how about saying that notations have only comma subsets?
//  Now this might be intertwined with the problem of whether a notation can be specified by ONLY one of
//  A list of Flacco IDs or a list of CommaClass IDs
//  Okay, well but actually, a symbol subset is meaningfully different than a flacco subset, because of like how
//  Spartan contains )||( as I just said above, you know?
//  In other words, we don't currently have captured anywhere an array of valid symbols, because the combinations of
//  Accents and Flags in the single-shaft does not necessarily translate to 2-shaft. I mean I guess we could have
//  Something that was intermediate, that included anything from 1 to 2 shafts, and then this becomes intertwined with
//  The questions of limiting the apotome shift and apotome complement methods to something *like* a section but not
//  - And Yeah Flacco is totally one of those things which should go by name, not ID
//  Or perhaps maybe just more like we've got the records of Core by CoreName, right
//  And probably also at some point Sagittal by SymbolName...?
//  But think about the fact that having the order in the form of the ID is actually quite handy sometimes...
//  Although you could include the order # as part of the ID I suppose and then you'd still get the bonus of it
//  As long as the name could still autocomplete
//  Yeah I guess this is really the thing - who is all this for? What are we trying to ensure?
//  That no one can put it into the code, like someone working on the code later? Or you can't input it from the app?
//  Without an enum to limit possibilities, the ID # doesn't really limit anything
//  Anyway, the other example is CommaClass, like:
//  Hey here's an idea... what if everywhere instead of ID we used names, so we could see what we were doing? e.g.
//  Const COMMA_CLASS_1_u = {
//    Name: "1u" as Name<Comma>,
//    RepresentativeFlaccoId: 0 as FlaccoId,
//    Pitch: UNISON,
//  }
//  And I wonder if Class<> shouldn't also be a parameterized type since we use that so much now?
//  In which case it would simply add an ID to a thing? and put the thing itself on a key called... object?
//  I think you'd have to make it generic, like it couldn't put a custom key on there based on the type parameter...
//  Or maybe we should just imagine a world without IDs at all...
//  Like I say above, the ID doesn't really limit anything. An enum you used as a key on some object would, though.
//  It should be a solvable problem for the bound IDs to still order them in the JI notation bound class analysis
//  - Ah okay, here's an insight: maybe they still get IDs on them as a sort of INSTANCE brand
//  So that you can't just go and manufacture whatever one you want, knowing the structure, but have to ask for one
//  From the limited set of them. Okay, I like that.
//  So then, how would we request a Sagittal? like a Flacco? no okay Flacco currently you request it by ID.
//  What I was thinking of was getArm, getHead, and getCore. so a symbol you'd need to pass it the same things you'd
//  Pass for a core, (head, shafts, aim) but then also the arm.
//  It's either that, or you pass it a Flacco name and then shafts and aim,
//  So the flacco would consolidate the head & arm. I like that less because it's not respecting the principle of
//  Minimum enums, of eliminating redundancy. But actually if you get really strict about that, then some of the
//  Validity enums we've still got around: the ArmId, HeadId... should those not be broken down by the same logic?
//  I feel like the answer is "no". But why? Is it just because they are *helpful* to have? I mean, the ...
//  Or is it just good to *name things which are arbitrarily limited*? In which case we should name these symbol classes
//  So there's actually two stages of validity that I should try to capture here.
//  Flacco is the combo of valid head and valid arm. and so you should go ahead and get that there.
//  Then Sagittal should capture the valid combo of flacco, shafts, and aim (which is almost everything, just a bunch
//  Cannot have even shafts)
//  Or rather Sagittal class should capture just either one or two shafts,
//  And then Sagittal goes to which Section you're in
//  Whoa... but then don't we get into a place where we've got two different layers of shaft information, i.e.
//  One layer whether it's odd or even, and another layer whether it's >2 or not? I'm a bit torn about this.
//  And if by the time you got to a Sagittal it already had its odd/even shaft, and what section it's in (shifted?)
//  Alright so the symbol sets would go by symbol class, sure. But not the notations. They could still go by comma (and
//  Bound) if we could ensure from comma we could get the unique stuff that happens to the bigger symbols). Well and
//  Also don't forget about the EDO notations, for which you really want to go by symbol, because the commas aren't
//  Fundamental to those. So you kind of want to go by visual/symbol/flacco/whatever, but you don't want the redundancy
//  Of the bigger mirrored symbols.
//  Kind of crazy, evo accidental doesn't need commaClassId for evo at all... kind of makes me want to get rid of it in
//  Revo and just say whether it's in section B or whatever (I think at some point I may have been going the other
//  Way, i.e. trying to get rid of flaccoId instead of commaClassId but I thin this way makes more sense actually
//  - Later: wait no again, all you need to know is whether they equal
//  (This next bit extracted from a related chunk in czap.ts)
//  Wait is that seriously all you need to know? (whether flaccoId === commaClassId or not) It feels a bit weird,
//  Like maybe you should just go ahead and include the flacco id in the accidental key?
//  Oor no, stick to your guns about that being weird in Revo?
//  Although there's no such thing as accidental key anymore...
//  - I really think you should be able to do this with only flaccoIds and boundClassIds
//  And while it does make sense for commaClasses to point to flaccos (their representative flacco)
//  It also makes sense that when you get a flacco, it comes with a comma, regardless whether its EDO tuning
//  Because the symbol in-and-of-itself doesn't have a way of communicating what type of notation its in
//  You just always get that implication of that JI underpinning
//  (and it may be up to the EDO notation to temper whatever comma it gets back for that flacco)
//  Okay, but if a flacco came with a comma class, it'd also have to say whether it was up or down, right?
//  At which point a Flacco on its own has a lot of info
//  And if Sagittal extends it, then it would have that info as well.
//  Maybe that's fine. It is after all just a reference
//  To the comma, right? That's the minimal interface, while also trying to capture the inextricable link between
//  The symbol and the comma?
//  And this synthesizes with the effort to get symbols by ID, so you have to do less representing of their entirety
//  In test I think...
//  - So I kind of want to only need to supply stuff up to the half-apotome
//  Which lends itself to only supplying the commas
//  We don't really think of the notation as being defined by the commas... usually as defined by the symbols...
//  Maybe we should just change that thinking though
//  - Also, what if we did something like this: either commas could specify the OTHER bigger flacco too, if any
//  Or the flacco could specify if it has a halfApotomeMirrorFlacco...
//  Ah, holy moly, perhaps what we have in the CaptureZone right now, everything in that group apart from the bound and
//  Comma, is a "symbol"? Well... but symbol is more the visual Sagittal thing. We know it could go Evo and have
//  A compatible. So it's more like a... proto-accidental? I guess it's close to like an accidental key like we used to
//  - Alright, well, I had gone ahead and collapsed mirrored and even into section
//  Because of the fact that when even, you must be mirrored
//  And slightly because of the fact that "even" preferences Revo
//  However! there's a con to this (in addition to requiring an enum rather than all being nice booleans)
//  Which is that now some things will need to check... well you can just say !Section.A if you mean to get "even"
//  So actually maybe that's fine.
//  Except that if we want to form a relationship between this and Accidental / Sagittal Class, that only cares about
//  The even/odd part, not the mirrored part, so that's an argument to split it up again.
//  So I'm thinking now that the current Accidental is describing something closer to glyph/IO, right, as is Sagittal
//  Although with Sagittal and below it's unambiguous. It's only once you get to Accidental that it diverges.
//  So Accidental extends Sagittal with compatible. but remember we might change symbol, so that instead of shafts
//  It has shifted and even, and negated instead of aim (or maybe at that point it's just aim). so are we actually
//  Finding that at the symbol level, by describing it in terms of shifted and even, we're kind of stepping away
//  From the glyph/IO thinking, and towards the abstract way, even if it doesn't make a difference?
//  That would also have the bonus of allowing it to know it had to be a Revo symbol the moment you go into even
//  Or shifted.
//  I think there's an opportunity to think of the way Sagittal is defined now, with the literal shafts, which is nice
//  As the glyph/IO kind, and have accidental as the abstract one, which defines it in terms of even or shafted.
//  There's only a little hurdle in that then when you needed to IO many Evo accidentals, instead of that being one
//  Call to an ASCII/Unicode/Smiley thing, it'd need to convert it. but I guess that'd be the same layer that'd
//  Convert from even + shifted to 4-shafts in Revo's case, yeah?
//  So in this case a CaptureZone is actually just { boundClassId, commaClassId, accidental }
//  But kind of what I was getting at elsewhere, these getters, I think you still need them backed by a hardcoded
//  List of valid ones with IDs to prevent arbitrary construction of them..... maybe? Does that idea actually work?
//  Maybe that doesn't make sense.
//  - Is symbol class equivalence defined by them being apotome complements or same visual flacco? The name is ambiguous
//  Maybe flacco class would be less so... But then it’s already supposed to *be* that, a "class" that is...
//  - Maybe flacco does after all hold all the apotome shifting and complementing inside it
//  Because it does not go straight to visual symbol, it goes to abstract accidental
//  So maybe the symbol type should go into Io?
//  - And maybe rename even to complemented?
//  Wait inside accidental is there any reason to know if you’re mirrored or not? Perhaps you can eliminate that from it
//  Well maybe the capture zone still needs to know! Yeah that goes on the outside with bound and comma.
//  - Might be cool if the JI notations could be expressed mostly in terms of the symbol subsets
//  - So In computing capture zones you go from flacco to accidental
//  (new abstract kind, w shifted negated and complemented)
//  And then there’s a layer which converts an accidental to symbols / compatibles array
//  (compatibles are now siblings of symbols, not glyphs) or perhaps it should split them up into not array
//  But just an object with or without each, and call that a.........
//  Well I want *that* to be accidental (in which case it could also just be the original accidental)
//  Then each of those can get Unicode or smiley whatever called on it
//  So symbol extends flacco but there’s this intermediate abstract type they go through
//  - Alright so what’s this new abstract accidental type called... a Sagittal?
//  It’s okay, by the way, that it has a flacco,
//  But due to complementing the final symbol could not be the same flag and accent combo
//  - Actually rename the existing symbol to Sagittal
//  So then we’d still need a name for this abstract Accidental type
//  - And generate the multi shaft symbol subsets from
//  The existing flaccos you’re Using for the single shaft ones
//  Just because they are generated by flaccos does not mean they can’t still be symbol subsets
//  Maybe they should actually map over the flaccos and convert to symbols there
//  - Wait, but actually aren't negated and shifted also needed by bound and comma? so maybe we don't even need a name
//  For a thing which bundles up flaccoId with stuff...
//  - FYI, every time we getFlacco we immediately convert it to a sagittal. and so if we were going to change getFlacco
//  To take instead of the ID the HeadId and ArmId and Orientation or whatever, (do we need a null arm?)
//  Then maybe we should get rid of it altogether and just cut to the chase with a getAccidental which also takes flavor
//  - I don't think you really need a valid symbols. the inversion of arms on even-shafts is contained by the valid
//  Flacco limitation.
//  - Yeah I'm kind of thinking we should just do an ID-apocalypse and bound class IDs could be by the mina #
//  (which of course is sometimes fractional)
//  Then do we really even need to call them bound class or comma class? or can we just use the COMMAS record and
//  BOUNDS record with CommaClassId and BoundName enums (or a getComma and getBound method)
//  Maybe if "name" is too long you could use CommaId but that's the constant case enum?! CommaId.65_77_n
//  - Maybe accidental is the abstract thing, and then we just don’t need the other type,
//  You just figure it out ...? No I think you do need that type. Call it Glyphs?
//  - Flaccore, Accore ... Yeah but we can’t really use those (don't need 'em)
//  Flatten core so that flacco doesn’t have a core but just left and right...
//  Shnecoflacco? sh-ifted ne-gated co-mplemented
//  Proto-? spec? Config? Builder? Def?
//  - Wait... It’s the capture zone after all which is mirrored, negated, shifted, complemented, etc.
//  Well let’s see actually it’s not really complemented... that only applies to the symbols...
//  So is there a type that’s just a maybe complemented symbol? Or
//  Does this speak to really needing to make symbols follow half-apotome pattern
//  And make the 50-60% thing more of an “effect” than a fundamental thing?
//  Maybe symbol class only goes up to half apotome but then includes the complementing
//  Like you take the complement even if there is a single shaft symbol in that 50-60 range?
//  - Eliminating ID because you know, this isn't actually a database, right?
//  Perhaps at this point that this to-do is like 200 lines long you should try to pull it out and mind map it...?
//  - Symbol class id goes up to half apotome only
//  And it’s the thing that has the flacco id and the comma id
//  Or Sagittal class id I guess
//  That way all of these classes follow the same mirroring shifting negating pattern
//  - Is it really a comma class, or a Sagittal comma? or both?
//  Well it's going to be comma class, bound class, and symbol class

// State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492
interface Notation {
    boundClassIds: Array<BoundClassId>,
    commaClassIds: Array<CommaClassId>,
    flaccoIds: Array<FlaccoId>,
}

// Flacco + CommaClassId + BoundClassId combination = Fla + Com + Bo; ranges from -2 to 2 apotomes
interface CaptureZone {
    flaccoId: FlaccoId,
    negated: boolean,               // Above or below natural
    shifted: boolean,               // In the 1st apotome section or the 2nd apotome section (absolute)
    section: Section,

    commaClassId: CommaClassId,

    boundClassId: BoundClassId,
}

enum Section {
    A = "a",                // Shaft count: n,      Abs apotome count: m,       Comma direction: away from natural
    B = "b",                // Shaft count: n,      Abs apotome count: m + 1,   Comma direction: toward natural
    C = "c",                // Shaft count: n + 1,  Abs apotome count: m + 1,   Comma direction: toward natural
}

export {
    Notation,
    CaptureZone,
    Section,
}

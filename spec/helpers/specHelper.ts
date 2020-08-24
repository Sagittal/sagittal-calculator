import "colors"

// TODO: can we find a way to annotate some tests as super slow and thus don't run them if a certain flag is passed
//  which it would be passed when running tests locally just not on CI?

// TODO: oh dang do I need to back over all of my tests and make sure I use expect(result).toEqual(expectedResult)?
//  that seems more aesthetically consistent with the verbose style I'm using in tests

// TODO: I need to bring in that tool for identifying specs that aren't running because they aren't named *Spec.ts
//  only issue is that it's a many-line long stretch of bash that the test command runs;
//  and so far I've gotten away without a bin/ directory... was hoping to continue doing so!
//  workflow stuff turned into such a pit of despair on the Musical Patterns project

// TODO: is there any trick I'm using in Musical Patterns repo to speed up the transpilation of my tests?

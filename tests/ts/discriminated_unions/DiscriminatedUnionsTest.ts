// we implicitly test that types work correctly here as tsc will fail on this file if not.

import {A, AT} from "./some-name-space/a.js"
import {BT} from "./some-name-space/b.js"
import {CT} from "./some-name-space/c.js"
import {ABC, ABCT} from "./some-name-space/abc.js"

// we don't need to execute anything in the below functions,
// they are compile / typechecks only, not runtime checks.
const assertAT = (a:AT) => {}
const assertABCT = (abc:ABCT) => {}
const assertFBNumberType = (x:number) => {}
const assertFBStringType = (x:string|Uint8Array|null) => {}
const assertNumberRuntime = (x:number) => {typeof x === 'number'}
const assertStringRuntime = (x:string|Uint8Array|null) => {typeof x === 'string'}
const assertNever = (x:never) => {
    throw new Error("failed assertNever");
}

// assert that handing a specific union case into a function expecting a different union case fails
{
    const b = new BT();
    //@ts-expect-error
    assertAT(b); // should fail
}

// assert that handing a specific union case into a function expecting the same union case succeeds
{
    const a = new AT();
    assertAT(a); // should be ok
}

// assert that handing a specific union case into a function expecting the general case succeeds
{
    const a = new AT();
    assertABCT(a); // should be ok
}

// assert that once we have a general union case, we can type narrow down
{
    const abc = new AT() as ABCT;
    switch(abc._type) {
        case "SomeNameSpace.AT": 
        {
            // compiler knows the type is "AT"
            // assert the types
            assertFBNumberType(abc.a);
            //@ts-expect-error
            assertFBStringType(abc.a);
        } break;
        case "SomeNameSpace.BT": 
        {
            // compiler knows the type is "BT"
            // assert the types
            assertFBNumberType(abc.b);
            //@ts-expect-error
            assertFBStringType(abc.b);
        } break;
        case "SomeNameSpace.CT": 
        {
            // compiler knows the type is "CT"
            // assert the types
            assertFBStringType(abc.c);
            //@ts-expect-error
            assertFBNumberType(abc.c);
        } break;
        default: assertNever(abc);
    }
}
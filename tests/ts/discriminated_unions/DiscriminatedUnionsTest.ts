// we implicitly test that types work correctly here as tsc will fail on this file if not.

import {A, AT} from "./a.js"
import {BT} from "./b.js"
import {CT} from "./c.js"
import {ABC, ABCT} from "./abc.js"

const doSomeThingWithA = (a:AT) => {}
const doSomethingWithABC = (abc:ABCT) => {}
const assertExhaustive = (x:never) => {
    throw new Error("failed assertExhaustive");
}

// assert that handing a specific union case into a function expecting a different union case fails
{
    const b = new BT();
    //@ts-expect-error
    doSomeThingWithA(b); // should fail
}

// assert that handing a specific union case into a function expecting the same union case succeeds
{
    const a = new AT();
    doSomeThingWithA(a); // should be ok
}

// assert that handing a specific union case into a function expecting the general case succeeds
{
    const a = new AT();
    doSomethingWithABC(a); // should be ok
}

// assert that once we have a general union case, we can type narrow down
{
    const abc = new AT() as ABCT;
    switch(abc._type) {
        case ABC.A: 
        {
            // compiler knows the type is "AT"
            console.log(abc.a);
        } break;
        case ABC.B: 
        {
            // compiler knows the type is "BT"
            console.log(abc.b);
        } break;
        case ABC.C: 
        {
            // compiler knows the type is "CT"
            console.log(abc.c);
        } break;
        default: assertExhaustive(abc._type);
    }
}

// assert that at runtime we get the correct behaviour
{
    const abc = new AT() as ABCT;
    switch(abc._type) {
        case ABC.A: 
        {
            // ok
        } break;
        case ABC.B: 
        {
            throw new Error("abc inferred to type b instead of a");
        }
        case ABC.C: 
        {
            throw new Error("abc inferred to type c instead of a");
        } break;
        default: assertExhaustive(abc._type);
    }
}
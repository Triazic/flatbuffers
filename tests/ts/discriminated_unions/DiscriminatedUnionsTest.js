// we implicitly test that types work correctly here as tsc will fail on this file if not.
import { A } from "./a.js";
import { B } from "./b.js";
const doSomeThingWithA = (a) => { };
// assert that handing a specific union case into a function expecting a different union case fails
{
    const b = new B();
    //@ts-expect-error
    doSomeThingWithA(b); // should fail
}
// assert that handing a specific union case into a function expecting the same union case succeeds
{
    const doSomeThingWithA = (a) => { };
    const a = new A();
    doSomeThingWithA(a); // should be ok
}

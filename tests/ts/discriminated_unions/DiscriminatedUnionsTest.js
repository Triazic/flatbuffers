// we implicitly test that types work correctly here as tsc will fail on this file if not.
import { B } from "./b.js";
const doSomeThingWithA = (a) => { };
const b = new B();
// //@ts-expect-error
doSomeThingWithA(b); // should fail

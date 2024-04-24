// we implicitly test that types work correctly here as tsc will fail on this file if not.

import {A} from "./a.js"
import {B} from "./b.js"

const doSomeThingWithA = (a:A) => {}

const b = new B();

// //@ts-expect-error
doSomeThingWithA(b); // should fail
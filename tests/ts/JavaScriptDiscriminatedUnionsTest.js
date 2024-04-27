import assert from 'assert'
import { AT } from "./discriminated_unions/some-name-space/a.js";

function main() {
    // at runtime, the only expected behaviour here is that each class has a globally unique string identifier.
    // the main benefits of this feature are at compile time, see discriminated_unions/DiscriminatedUnionsTest.ts
    const abc = new AT();
    assert.strictEqual(abc._type, "SomeNameSpace.AT");
    console.log('FlatBuffers discriminated union test: completed successfully');
}

main();


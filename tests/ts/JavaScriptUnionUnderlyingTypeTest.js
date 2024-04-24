import assert from 'assert'
import * as flatbuffers from 'flatbuffers'
import {UnionUnderlyingType as Test} from './union_underlying_type_test.js'

function main() {
    let a = new Test.AT();
    a.a = 1;
    let b = new Test.BT();
    b.b = "foo";
    let c = new Test.CT();
    c.c = true;
    let d = new Test.DT();
    d.testUnionType = Test.ABC.A;
    d.testUnion = a;
    d.testVectorOfUnionType = [Test.ABC.A, Test.ABC.B, Test.ABC.C];
    d.testVectorOfUnion = [a, b, c];

    // build d into binary
    let fbb = new flatbuffers.Builder();
    let offset = d.pack(fbb);
    fbb.finish(offset);

    // unpack
    let unpacked = Test.D.getRootAsD(fbb.dataBuffer()).unpack();

    // assert that the unpacked version of d is the same as d itself
    assert.equal(JSON.stringify(unpacked), JSON.stringify(d));

    console.log('FlatBuffers union underlying type test: completed successfully');
}

main()
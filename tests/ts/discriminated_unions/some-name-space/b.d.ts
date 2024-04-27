import * as flatbuffers from 'flatbuffers';
export declare class B implements flatbuffers.IUnpackableObject<BT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): B;
    static getRootAsB(bb: flatbuffers.ByteBuffer, obj?: B): B;
    static getSizePrefixedRootAsB(bb: flatbuffers.ByteBuffer, obj?: B): B;
    b(): number;
    static startB(builder: flatbuffers.Builder): void;
    static addB(builder: flatbuffers.Builder, b: number): void;
    static endB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createB(builder: flatbuffers.Builder, b: number): flatbuffers.Offset;
    unpack(): BT;
    unpackTo(_o: BT): void;
}
export declare class BT implements flatbuffers.IGeneratedObject {
    b: number;
    _type: "SomeNameSpace.BT";
    constructor(b?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}

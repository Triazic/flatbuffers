import * as flatbuffers from 'flatbuffers';
export declare class C implements flatbuffers.IUnpackableObject<CT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): C;
    static getRootAsC(bb: flatbuffers.ByteBuffer, obj?: C): C;
    static getSizePrefixedRootAsC(bb: flatbuffers.ByteBuffer, obj?: C): C;
    c(): string | null;
    c(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startC(builder: flatbuffers.Builder): void;
    static addC(builder: flatbuffers.Builder, cOffset: flatbuffers.Offset): void;
    static endC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createC(builder: flatbuffers.Builder, cOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CT;
    unpackTo(_o: CT): void;
}
export declare class CT implements flatbuffers.IGeneratedObject {
    c: string | Uint8Array | null;
    $type: "SomeNameSpace.CT";
    constructor(c?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}

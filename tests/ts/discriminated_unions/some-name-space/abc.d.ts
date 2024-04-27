import { A, AT } from '../some-name-space/a.js';
import { B, BT } from '../some-name-space/b.js';
import { C, CT } from '../some-name-space/c.js';
export declare enum ABC {
    NONE = 0,
    A = 1,
    B = 2,
    C = 3
}
export type ABCT = AT | BT | CT;
export declare function unionToAbc(type: ABC, accessor: (obj: A | B | C) => A | B | C | null): A | B | C | null;
export declare function unionListToAbc(type: ABC, accessor: (index: number, obj: A | B | C) => A | B | C | null, index: number): A | B | C | null;

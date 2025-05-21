/** One color entry in the wheel */
export interface ColorEntry {
    id:    number;
    name:  string;
    dmx:   number;
    rgb:   [number, number, number];
  }
  
  /** A group of entries (primary vs composite wheel) */
  export interface ColorGroup {
    _comment: string;
    entries:  ColorEntry[];
  }
  
  /** The top‐level JSON shape */
  export interface ColorTable {
    _comment: string;
    groups:   ColorGroup[];
  }
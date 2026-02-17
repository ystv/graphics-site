import { type TGraphicsCollection } from "..";
import { MMAGraphics } from "./mma";
import { UtilGraphics } from "./util";
import { YDCGraphics } from "./ydc";

export * from "./mma";
export * from "./util";
export * from "./ydc";

export const GraphicsCollections = {
  MMA: MMAGraphics,
  UTIL: UtilGraphics,
  YDC: YDCGraphics,
} satisfies Record<string, TGraphicsCollection>;

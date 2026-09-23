import { type TGraphicsCollection } from "..";
import { MMAGraphics } from "./mma";
import { SocietyGraphics } from "./society";
import { UtilGraphics } from "./util";
import { YDCGraphics } from "./ydc";

export * from "./mma";
export * from "./society";
export * from "./util";
export * from "./ydc";

export const GraphicsCollections = {
  MMA: MMAGraphics,
  SOCIETY: SocietyGraphics,
  UTIL: UtilGraphics,
  YDC: YDCGraphics,
} satisfies Record<string, TGraphicsCollection>;

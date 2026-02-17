import { YDCLowerThird } from "@/app/_components/graphics/ydc/lower-third";
import { TGraphicsCollection } from "..";
import { YDCHoldingCard } from "@/app/_components/graphics/ydc/holding-card";
import { YDCBackSoon } from "@/app/_components/graphics/ydc/back-soon";

export const YDCGraphics: TGraphicsCollection = {
  slug: "ydc",
  name: "York Dance Comp",
  description: "A collection of graphics for York Dance Competition",
  components: [YDCLowerThird, YDCHoldingCard, YDCBackSoon],
  data: {
    multi_texts: {
      team: {
        name: "Team Name",
      },
      section: {
        name: "Section Name",
      },
      back_soon_message: {
        name: "Back Soon Message",
      },
    },
    visible_states: {
      lower_third: {
        name: "Lower Third",
      },
      holding_card: {
        name: "Holding card",
      },
      back_soon: {
        name: "Lower Third",
      },
    },
  },
};

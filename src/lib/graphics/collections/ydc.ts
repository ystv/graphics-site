import { YDCLowerThird } from "@/app/_components/graphics/ydc/lower-third";
import { TGraphicsCollection } from "..";

export const YDCGraphics: TGraphicsCollection = {
  slug: "ydc",
  name: "York Dance Comp",
  description: "A collection of graphics for York Dance Competition",
  components: [YDCLowerThird],
  data: {
    multi_texts: {
      team: {
        name: "Team Name",
      },
      section: {
        name: "Section Name",
      },
    },
    visible_states: {
      lower_third: {
        name: "Lower Third",
      },
    },
  },
};

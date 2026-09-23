import { SocietyLowerThird } from "@/app/_components/graphics/society/lower-third";
import { TGraphicsCollection } from "..";

export const SocietyGraphics: TGraphicsCollection = {
  slug: "society",
  name: "Societies",
  description: "A collection of graphics for society information overlays",
  components: [SocietyLowerThird],
  data: {
    societies: {
      main: {
        name: "Society",
      },
    },
    visible_states: {
      lower_third: {
        name: "Lower Third",
      },
    },
  },
};

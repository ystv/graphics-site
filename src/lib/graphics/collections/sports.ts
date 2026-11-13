import { SportsBug } from "@/app/_components/graphics/sports/bug";
import { TGraphicsCollection } from "..";
import { SportLowerThird } from "@/app/_components/graphics/sports/lower-third";

/// TODO: colours, timer, fun stuff
export const Sports: TGraphicsCollection = {
    slug: "sports",
    name: "Generic Sports",
    description:
        "A collection of graphics for Generic sports scores counting, with a score bug, lower third (and clock)",
    components: [SportLowerThird, SportsBug],
    data: {
        multi_texts: {
            home: {
                name: "Home Team",
            },
            home_short: {
                name: "Home Team (short)"
            },
            // home_colour: {
            //     name: "Home Team colour"
            // },
            home_score: {
                name: "Home Team Score"
            },
            away: {
                name: "Away Team",
            },
            away_short: {
                name: "Away Team (short)"
            },
            // away_colour: {
            //     name: "Away team colour"
            // },
            away_score: {
                name: "Away Team Score"
            },
            notes: {
                name: "Other Notes",
            },
        },
        // timers: {
        //     game_time: {
        //         name: "Game Time",
        //     },
        // },
        visible_states: {
            lower_third: {
                name: "Lower Third",
            },
            lower_score: {
                name: "Lower Third Score"
            },
            bug: {
                name: "Score Bug",
            },
            notes: {
                name: "Notes",
            },
        },
    },
};

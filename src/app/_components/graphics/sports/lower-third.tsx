import { api } from "@/trpc/react";
import VisibleStateWrapper from "../visible-state-wrapper";
import { motion } from "framer-motion";
import MultiText from "../multi-text";
import {
  getMappedPath,
  GraphicsCollectionComponentProps,
} from "@/lib/graphics";

export function SportLowerThird(props: GraphicsCollectionComponentProps) {
  const graphicsCollection = api.graphicsCollections.getPublicState.useQuery({
    graphics_collection_id: props.graphics_collection_id,
  });

  const borderRadius = "15px";

  if (!graphicsCollection.data) return <></>;
  return (
    <VisibleStateWrapper
      path={getMappedPath(
        graphicsCollection.data.path_mapping,
        "visible_states",
        "lower_third",
      )}
      event_id={graphicsCollection.data.event_id}
    >
      {(state) => (
        <>
          <motion.div animate={{ opacity: state ? 1 : 0 }}>
            <VisibleStateWrapper
              event_id={graphicsCollection.data.event_id}
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "visible_states",
                "notes"
              )}
            >
              {(notesState) => (
                <motion.div
                  animate={{ bottom: notesState ? "13%" : "8%" }}
                  style={{
                    position: "absolute",
                    backgroundColor: "#e3170a",
                    height: "5%",
                    bottom: "13%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    borderRadius: "10px 10px 0 0",
                  }}
                >
                  <MultiText
                    event_id={graphicsCollection.data.event_id}
                    path={getMappedPath(
                      graphicsCollection.data.path_mapping,
                      "multi_texts",
                      "notes"
                    )}
                  >
                    {(notes) => (
                      <motion.div
                        style={{
                          position: "relative",
                          color: "#fff",
                          margin: "auto",
                          top: "1vh",
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: 20,
                          textAlign: "center"
                        }}
                      >
                        {notes.content}
                      </motion.div>
                    )}
                  </MultiText>
                </motion.div>
              )}
            </VisibleStateWrapper>
            <motion.div
              style={{
                position: "absolute",
                backgroundColor: "#1A2640",
                width: "45%",
                height: "8%",
                bottom: "5%",
                left: "5%",
                borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
              }}
            />
            <MultiText
              event_id={graphicsCollection.data.event_id}
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "multi_texts",
                "home",
              )}
            >
              {(home) => (
                <motion.div
                  style={{
                    position: "absolute",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 38,
                    width: "36%",
                    bottom: "6.5%",
                    left: "7%",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {home.content}
                </motion.div>
              )}
            </MultiText>
            <motion.div
              style={{
                position: "absolute",
                backgroundColor: "#000000",
                width: "45%",
                height: "8%",
                bottom: "5%",
                right: "5%",
                borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
              }}
            />
            <MultiText
              event_id={graphicsCollection.data.event_id}
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "multi_texts",
                "away",
              )}
            >
              {(away) => (
                <motion.div
                  style={{
                    position: "absolute",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 38,
                    width: "36%",
                    bottom: "6.5%",
                    right: "7%",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {away.content}
                </motion.div>
              )}
            </MultiText>
            <motion.div
              style={{
                position: "absolute",
                background:
                  "linear-gradient(90deg, rgba(26,38,64,1) 0%, rgba(0,0,0,1) 100%)",
                width: "20%",
                height: "8%",
                bottom: "5%",
                left: "40%",
                opacity: 1,
              }}
            />
            <VisibleStateWrapper
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "visible_states",
                "lower_score",
              )}
              event_id={graphicsCollection.data.event_id}
            >
              {(scoreState) => (
                <>
                  <motion.div
                    style={{
                      position: "absolute",
                      background:
                        "linear-gradient(90deg, #1A2640 0%, #333 25%, #333 75%, #000000 100%)",
                      width: "20%",
                      height: "8%",
                      bottom: "5%",
                      left: "40%",
                    }}
                    animate={{
                      opacity: scoreState ? 1 : 0,
                    }}
                  />
                  <MultiText
                    path={getMappedPath(
                      graphicsCollection.data.path_mapping,
                      "multi_texts",
                      "home_score"
                    )}
                    event_id={graphicsCollection.data.event_id}
                  >
                    {(home_score) => (
                      <motion.div
                        style={{
                          position: "absolute",
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: 38,
                          color: "#fff",
                          width: "3%",
                          left: "45%",
                          bottom: "6.5%",
                          textAlign: "left",
                        }}
                        animate={{
                          opacity: scoreState ? 1 : 0,
                        }}
                      >
                        {home_score.content}
                      </motion.div>
                    )}
                  </MultiText>
                  <MultiText
                    path={getMappedPath(
                      graphicsCollection.data.path_mapping,
                      "multi_texts",
                      "away_score"
                    )}
                    event_id={graphicsCollection.data.event_id}
                  >
                    {(away_score) => (
                      <motion.div
                        style={{
                          position: "absolute",
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: 38,
                          color: "#fff",
                          width: "3%",
                          right: "45%",
                          bottom: "6.5%",
                          textAlign: "right",
                        }}
                        animate={{
                          opacity: scoreState ? 1 : 0,
                        }}
                      >
                        {away_score.content}
                      </motion.div>
                    )}
                  </MultiText>
                  <motion.div
                    style={{
                      position: "absolute",
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 28,
                      color: "#fff",
                      width: "1%",
                      right: "50%",
                      bottom: "7%",
                      textAlign: "center",
                    }}
                  >
                    vs
                  </motion.div>
                </>
              )}
            </VisibleStateWrapper>
          </motion.div>
        </>
      )
      }
    </VisibleStateWrapper >
  );
}

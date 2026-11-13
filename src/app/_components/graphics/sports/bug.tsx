import { api } from "@/trpc/react";
import VisibleStateWrapper from "../visible-state-wrapper";
import { motion } from "framer-motion";
import MultiText from "../multi-text";
import {
  getMappedPath,
  GraphicsCollectionComponentProps,
} from "@/lib/graphics";

export function SportsBug(props: GraphicsCollectionComponentProps) {
  const graphicsCollection = api.graphicsCollections.getPublicState.useQuery({
    graphics_collection_id: props.graphics_collection_id,
  });
  if (!graphicsCollection.data) return <></>;

  const borderRadius = "15px";
  return (
    <VisibleStateWrapper
      path={getMappedPath(
        graphicsCollection.data.path_mapping,
        "visible_states",
        "bug",
      )}
      event_id={graphicsCollection.data.event_id}
    >
      {(state) => (
        <>
          <motion.div animate={{ opacity: state ? 1 : 0 }}>
            {/* home background box */}
            <motion.div
              style={{
                position: "absolute",
                backgroundColor: "#1A2640",
                width: "5%",
                height: "5%",
                top: "5%",
                left: "5%",
                borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
              }}
            />
            {/* away background box */}
            <motion.div
              style={{
                position: "absolute",
                backgroundColor: "#000000",
                width: "5%",
                height: "5%",
                top: "5%",
                left: "15%",
                borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                background:
                  "linear-gradient(90deg, #1A2640 0%, #0A6600 25%, #0A6600 75%, #000000 100%)",
                width: "5%",
                height: "5%",
                top: "5%",
                left: "10%",
                // borderRadius: `${borderRadius} 0 0 ${borderRadius}`
              }}
            />
            <MultiText
              event_id={graphicsCollection.data.event_id}
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "multi_texts",
                "home_short",
              )}
            >
              {(home) => (
                <motion.div
                  style={{
                    position: "absolute",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    top: "6%",
                    left: "7.5%",
                    width: "3%",
                    height: "2%",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  {home.content}
                </motion.div>
              )}
            </MultiText>
            <MultiText
              event_id={graphicsCollection.data.event_id}
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "multi_texts",
                "away_short",
              )}
            >
              {(away) => (
                <motion.div
                  style={{
                    position: "absolute",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    top: "6%",
                    left: "15%",
                    width: "3%",
                    height: "2%",
                    color: "#fff",
                    textAlign: "right",
                  }}
                >
                  {away.content}
                </motion.div>
              )}
            </MultiText>
            <MultiText
              event_id={graphicsCollection.data.event_id}
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "multi_texts",
                "home_score",
              )}
            >
              {(home_score) => (
                <motion.div
                  style={{
                    position: "absolute",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    top: "6%",
                    left: "11.5%",
                    width: "1%",
                    height: "2%",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  {home_score.content}
                </motion.div>
              )}
            </MultiText>
            <MultiText
              event_id={graphicsCollection.data.event_id}
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "multi_texts",
                "away_score",
              )}
            >
              {(away_score) => (
                <motion.div
                  style={{
                    position: "absolute",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    top: "6%",
                    left: "12.5%",
                    width: "1%",
                    height: "2%",
                    color: "#fff",
                    textAlign: "right",
                  }}
                >
                  {away_score.content}
                </motion.div>
              )}
            </MultiText>
            <VisibleStateWrapper
              event_id={graphicsCollection.data.event_id}
              path={getMappedPath(
                graphicsCollection.data.path_mapping,
                "visible_states",
                "notes",
              )}
            >
              {(notesState) => (
                <MultiText
                  event_id={graphicsCollection.data.event_id}
                  path={getMappedPath(
                    graphicsCollection.data.path_mapping,
                    "multi_texts",
                    "notes",
                  )}
                >
                  {(notes) => (
                    <motion.div
                      style={{
                        position: "absolute",
                        background: "#e3170a",
                        borderRadius: `${borderRadius}`,
                        top: "5%",
                        height: "5%",
                        left: "20.5%",
                        paddingLeft: "2%",
                        paddingRight: "2%",
                      }}
                      animate={{
                        opacity: notesState ? 1 : 0,
                      }}
                    >
                      <motion.div
                        style={{
                          position: "relative",
                          color: "#fff",
                          top: "1vh",
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: 20,
                          textAlign: "left",
                        }}
                      >
                        {notes.content}
                      </motion.div>
                    </motion.div>
                  )}
                </MultiText>
              )}
            </VisibleStateWrapper>
          </motion.div>
        </>
      )}
    </VisibleStateWrapper>
  );
}

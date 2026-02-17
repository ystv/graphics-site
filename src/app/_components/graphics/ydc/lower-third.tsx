import { api } from "@/trpc/react";
import VisibleStateWrapper from "../visible-state-wrapper";
import { motion } from "framer-motion";
import MultiText from "../multi-text";
import TimerWrapper from "../timer-wrapper";
import {
  getMappedPath,
  GraphicsCollectionComponentProps,
} from "@/lib/graphics";
import { CSSProperties } from "react";

export function YDCLowerThird(props: GraphicsCollectionComponentProps) {
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
        <motion.div animate={{ opacity: state ? 1 : 0 }}>
          <>
            <div
              style={{
                position: "absolute",
                bottom: "4%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                alignItems: "center",
                display: "inline-flex",
                opacity: 1,
                zIndex: 1,
              }}
            >
              <MultiText
                event_id={graphicsCollection.data.event_id}
                path={getMappedPath(
                  graphicsCollection.data.path_mapping,
                  "multi_texts",
                  "team",
                )}
              >
                {(team) => {
                  const sharedStyle: CSSProperties = {
                    margin: 0,
                    width: "90vw",
                    maxHeight: "90vh",
                    textAlign: "center",
                    fontFamily: '"Dancing Script", serif',
                    fontWeight: 700,
                    color: "#fdcc53",
                    fontSize: "70px",
                    position: "fixed",
                    bottom: "100%",
                  };
                  return (
                    <>
                      <p
                        style={{
                          ...sharedStyle,
                          WebkitTextStroke: "10px black",
                        }}
                      >
                        {team.content}
                      </p>
                      <p
                        style={{
                          ...sharedStyle,
                        }}
                      >
                        {team.content}
                      </p>
                    </>
                  );
                }}
              </MultiText>
              <MultiText
                event_id={graphicsCollection.data.event_id}
                path={getMappedPath(
                  graphicsCollection.data.path_mapping,
                  "multi_texts",
                  "section",
                )}
              >
                {(section) => {
                  const sharedStyle: CSSProperties = {
                    margin: 0,
                    width: "90vw",
                    maxHeight: "90vh",
                    textAlign: "center",
                    fontFamily: '"Dancing Script", serif',
                    fontWeight: 700,
                    color: "#fdcc53",
                    fontSize: "50px",
                    position: "relative",
                  };
                  return (
                    <>
                      <p
                        style={{
                          ...sharedStyle,
                          WebkitTextStroke: "8px black",
                        }}
                      >
                        {section.content}
                      </p>
                      <p
                        style={{
                          ...sharedStyle,
                          position: "fixed",
                        }}
                      >
                        {section.content}
                      </p>
                    </>
                  );
                }}
              </MultiText>
            </div>
          </>
        </motion.div>
      )}
    </VisibleStateWrapper>
  );
}

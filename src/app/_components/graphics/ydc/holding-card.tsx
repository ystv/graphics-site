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
import Image from "next/image";

export function YDCHoldingCard(props: GraphicsCollectionComponentProps) {
  const graphicsCollection = api.graphicsCollections.getPublicState.useQuery({
    graphics_collection_id: props.graphics_collection_id,
  });

  if (!graphicsCollection.data) return <></>;
  return (
    <VisibleStateWrapper
      path={getMappedPath(
        graphicsCollection.data.path_mapping,
        "visible_states",
        "holding_card",
      )}
      event_id={graphicsCollection.data.event_id}
    >
      {(state) => (
        <motion.div animate={{ opacity: state ? 1 : 0 }}>
          <div
            style={{
              width: "1920px",
              height: "1080px",
              position: "absolute",
              opacity: 1,
              zIndex: 10,
              backgroundColor: "#000",
            }}
          >
            <Image
              width={1920}
              height={1080}
              style={{
                opacity: 0.5,
              }}
              src={"/ydc_snow.svg"}
              alt={"This is a graphics site, I don't need alt text"}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 1,
              zIndex: 11,
            }}
          >
            <Image
              width={500}
              height={500}
              src={"/ydc_logo.png"}
              alt={"This is a graphics site, I don't need alt text"}
            />
          </div>
          <div
            style={{
              zIndex: 12,
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: '"Dancing Script", serif',
              fontWeight: 700,
              color: "#fdcc53",
              fontSize: "100px",
            }}
          >
            <p
              style={{
                margin: 0,
                width: "90vw",
                maxHeight: "90vh",
                textAlign: "center",
              }}
            >
              York Dance Comp 2026
            </p>
          </div>
        </motion.div>
      )}
    </VisibleStateWrapper>
  );
}

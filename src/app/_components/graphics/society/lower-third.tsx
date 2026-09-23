"use client";

import { api } from "@/trpc/react";
import VisibleStateWrapper, { useVisibleState } from "../visible-state-wrapper";
import { animate, AnimatePresence, motion, Variants } from "framer-motion";
import MultiText from "../multi-text";
import TimerWrapper from "../timer-wrapper";
import {
  getMappedPath,
  GraphicsCollectionComponentProps,
} from "@/lib/graphics";
import { use, useEffect, useRef } from "react";
import { useElementSize } from "@mantine/hooks";
import SocietyStateWrapper from "../society-data-wrapper";

export function SocietyLowerThird(props: GraphicsCollectionComponentProps) {
  const [graphicsCollection] =
    api.graphicsCollections.getPublicState.useSuspenseQuery({
      graphics_collection_id: props.graphics_collection_id,
    });

  const visible = useVisibleState(
    getMappedPath(
      graphicsCollection.path_mapping,
      "visible_states",
      "lower_third",
    ),
    graphicsCollection.event_id,
  );

  const mainRef = useRef<HTMLDivElement>(null);
  const { width: textWidth, ref: textRef } = useElementSize({});

  useEffect(() => {
    if (!mainRef.current) return;
    if (visible) {
      animate([
        [mainRef.current, { bottom: 50 }],
        [textRef.current, { marginLeft: 0 }],
      ]);
    } else {
      animate([
        [textRef.current, { marginLeft: -(textWidth + 60) }],
        [mainRef.current, { bottom: -150 }],
      ]);
    }
  }, [visible, mainRef, textRef, textWidth]);

  const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: [0, 0, 1] },
    exit: { opacity: [1, 0, 0] },
  };

  return (
    <SocietyStateWrapper
      event_id={graphicsCollection.event_id}
      path={getMappedPath(graphicsCollection.path_mapping, "societies", "main")}
    >
      {(state) =>
        state?.societyData && (
          <AnimatePresence>
            <motion.div
              ref={mainRef}
              style={{
                height: "150px",
                width: "fit-content",
                backgroundColor: "white",
                color: "black",
                fontSize: "45px",
                paddingRight: 30,
                position: "fixed",
                borderRadius: 16,
                bottom: 50,
                left: 50,
                display: "inline-flex",
                fontFamily: "'Open Sans', sans-serif",
                overflow: "hidden",
                minWidth: state.societyData.thumbnail_url ? 120 : 0,
              }}
            >
              {state.societyData.thumbnail_url && (
                <div
                  style={{
                    borderRadius: "16px 0 0 16px",
                    overflow: "hidden",
                    height: 150,
                    width: 150,
                    flexShrink: 0,
                    zIndex: 40,
                    backgroundColor: "white",
                  }}
                >
                  <motion.img
                    src={
                      state.societyData.group_id == 137
                        ? "/square-logo-trans.webp"
                        : state?.societyData.thumbnail_url
                    }
                    height={150}
                    width={150}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    alt="Society Logo"
                    key={"society-logo-" + state.societyData.group_id}
                  />
                </div>
              )}
              <div
                style={{
                  paddingLeft: 30,
                  paddingTop: "20px",
                  position: "relative",
                  // marginLeft: -(textWidth + 60),
                  // marginLeft: -400,
                  // maskImage:
                  //   "linear-gradient(to left, black 20%, transparent 60%)",
                }}
                ref={textRef}
              >
                <motion.div
                  style={{
                    fontWeight: 700,
                  }}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={state.societyData.name}
                >
                  {state.societyData.name}
                </motion.div>
                <motion.div
                  style={{
                    marginTop: -15,
                  }}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={
                    state.societyData.instagram +
                    state.societyData.email_address
                  }
                >
                  {state.societyData.instagram !== ""
                    ? "@" + state.societyData.instagram
                    : state.societyData.email_address}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        )
      }
    </SocietyStateWrapper>
  );
}

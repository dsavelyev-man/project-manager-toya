import { HTMLAttributes } from "react";
import { motion, MotionProps } from "framer-motion";
import classNames from "classnames";

const AnimatedHeight = (
  props: HTMLAttributes<HTMLDivElement> & MotionProps,
) => {
  return (
    <motion.section
      {...props}
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      className={classNames("overflow-hidden", props.className)}
    >
      {props.children}
    </motion.section>
  );
};

export default AnimatedHeight;

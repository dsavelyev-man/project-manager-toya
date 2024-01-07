import { createElement, ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";
import checkLoading from "@/helpers/checkLoading.tsx";

const variants = {
  showed: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  initial: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const RowList = <T,>(props: {
  items: T[];
  loading: boolean;
  card: (props: T) => JSX.Element;
}) => {
  const [animate, setAnimate] = useState("initial");

  useEffect(() => {
    if (!props.loading)
      setTimeout(() => {
        setAnimate("showed");
      }, 100);
  }, [props.loading]);

  return (
    <motion.div
      variants={variants}
      animate={animate}
      className="flex flex-col gap-6"
    >
      {checkLoading(
        props.loading,
        props.items,
        <div>Нет записей</div>,
        props.items.map((item, index) =>
          createElement(props.card, {
            ...item,
            key: index,
          }),
        ),
      )}
    </motion.div>
  );
};

export default RowList;

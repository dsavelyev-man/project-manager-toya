import {
  Dispatch,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { Action } from "@/types";
import classNames from "classnames";
import { motion } from "framer-motion";

export type Tab<T extends string | number> = {
  label: string;
  value: T;
  callback?: () => void;
};

export type TabActive<T extends string | number> = {
  value: T;
  width: number;
  left: number;
};

const Tabs = <T extends string | number>(props: {
  items: Tab<T>[];
  setActive: Action<TabActive<T>>;
  active: TabActive<T>;
}) => {
  const elements = useRef<{ [key in T]?: HTMLDivElement }>({});

  useLayoutEffect(() => {
    const currentIndex = props.items.findIndex(
      (item) => item.value === props.active.value,
    );

    props.setActive((s) => ({
      ...s,
      width: elements.current[props.active.value].offsetWidth,
      left: getLeft(currentIndex),
    }));
  }, []);

  const getLeft = (index: number) => {
    let left = 4;

    for (const [elIndex, el] of Object.values(elements.current).entries()) {
      if (elIndex === index) break;

      left = left + (el as HTMLDivElement).offsetWidth;
    }

    return left;
  };

  return (
    <div role="tablist" className="bg-muted flex relative p-1 rounded-md">
      {props.items.map((item, index) => (
        <div
          role="tab"
          ref={(e) => (elements.current[item.value] = e)}
          className={classNames(
            "tab z-[1] cursor-pointer transition px-3 py-1 text-sm font-medium ",
            {
              "": item.value !== props.active.value,
              "text-white": item.value === props.active.value,
            },
          )}
          key={item.value}
          onClick={(e) => {
            props.setActive({
              value: item.value,
              width: e.currentTarget.offsetWidth,
              left: getLeft(index),
            });

            if (item.callback) item.callback();
          }}
        >
          {item.label}
        </div>
      ))}
      {props.active.left !== 0 ? (
        <motion.div
          initial={{ left: props.active.left, width: props.active.width }}
          animate={{ width: props.active.width, left: props.active.left }}
          className="h-[calc(100%-0.50rem)] rounded-sm top-[50%] translate-y-[-50%] tab-active absolute bg-black"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export const TabContent = (props: PropsWithChildren) => {
  return (
    <motion.div
      className="overflow-hidden p-2"
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
    >
      {props.children}
    </motion.div>
  );
};

export default Tabs;

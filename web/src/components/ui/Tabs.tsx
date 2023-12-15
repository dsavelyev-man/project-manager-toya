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
  const arrayOfElements = Object.values(elements.current);

  useLayoutEffect(() => {
    props.setActive((s) => ({
      ...s,
      width: elements.current[props.active.value].offsetWidth,
    }));
  }, []);

  return (
    <div role="tablist" className="tabs tabs-boxed relative">
      {props.items.map((item, index) => (
        <div
          role="tab"
          ref={(e) => (elements.current[item.value] = e)}
          className={classNames("tab z-[1] transition", {
            "text-base-100": item.value === props.active.value,
          })}
          key={item.value}
          onClick={(e) => {
            let left = 4;

            for (const [elIndex, el] of arrayOfElements.entries()) {
              if (elIndex === index) break;

              left = left + (el as HTMLDivElement).offsetWidth;
            }

            props.setActive({
              value: item.value,
              width: e.currentTarget.offsetWidth,
              left,
            });
          }}
        >
          {item.label}
        </div>
      ))}
      <motion.div
        animate={{ width: props.active.width, left: props.active.left }}
        className="tab tab-active absolute transition top-0"
      ></motion.div>
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

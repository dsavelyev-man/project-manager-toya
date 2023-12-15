import Tabs, { Tab, TabActive } from "@components/ui/Tabs.tsx";
import { createElement, ReactElement, useState } from "react";

const useTabs = <T extends string | number>(
  items: Tab<T>[],
  initialActive: T,
) => {
  const [active, setActive] = useState<TabActive<T>>({
    value: initialActive,
    width: 0,
    left: 4,
  });

  return {
    active: active.value,
    element: createElement(Tabs, {
      items,
      setActive,
      active,
    }),
  };
};

export default useTabs;

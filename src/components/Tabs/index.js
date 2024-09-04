import React, { useState } from "react";
import Tab from "./components/Tab";

function Tabs() {
  const [currentActiveId, setCurrentActiveId] = useState(1);
  const handleChange = (id) => {
    setCurrentActiveId(id);
  };
  return (
    <div>
      <div>React Tab - using Composition Pattern</div>
      <div>
        <Tab currentActiveId={currentActiveId} onChange={handleChange}>
          <Tab.TabHeaderContainer>
            <Tab.TabHeaderItem label={"Tab 1"} id={1} />
            <Tab.TabHeaderItem label={"Tab 2"} id={2} />
            <Tab.TabHeaderItem label={"Tab 3"} id={3} />
          </Tab.TabHeaderContainer>
          <Tab.TabContentContainer>
            <Tab.TabContent id={1}>Tab 1 content</Tab.TabContent>
            <Tab.TabContent id={2}>Tab 2 content</Tab.TabContent>
            <Tab.TabContent id={3}>Tab 3 content</Tab.TabContent>
          </Tab.TabContentContainer>
        </Tab>
      </div>
    </div>
  );
}

export default Tabs;

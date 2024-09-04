import React, { createContext, useContext } from "react";
import "./tab.css";

const TabContext = createContext();

function Tab({ children, currentActiveId, onChange }) {
    console.log(currentActiveId)
  return (
    <TabContext.Provider value={{ currentActiveId, onChange }}>
      {children}
    </TabContext.Provider>
  );
}

function TabHeaderContainer({ children }) {
  return <div className="tabHeader">{children}</div>;
}

function TabHeaderItem({ label, id }) {
  const { currentActiveId, onChange } = useContext(TabContext);
  
  const handleClick = () => {
    onChange(id);
  };

  return (
    <div
      onClick={handleClick}
      className={`tabHeaderItem ${currentActiveId === id ? "active" : ""}`}
    >
      {label}
    </div>
  );
}

function TabContentContainer({ children }) {
  return <div className="tabContentContainer">{children}</div>;
}

function TabContent({ id, children }) {
  const { currentActiveId } = useContext(TabContext);
  return currentActiveId === id ? <div className="tabContent">{children}</div> : null;
}

Tab.TabHeaderContainer = TabHeaderContainer;
Tab.TabHeaderItem = TabHeaderItem;
Tab.TabContentContainer = TabContentContainer;
Tab.TabContent = TabContent;

export default Tab;

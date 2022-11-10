import React, { useMemo, useState } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsStateContext.Provider value={openedModals}>{children}</ModalsStateContext.Provider>
    </ModalsDispatchContext.Provider>
  );
};

export default ModalsProvider;

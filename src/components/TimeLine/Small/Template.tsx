import React from "react";
import { MdAttachMoney } from "react-icons/md";

const ComponentTemplate: React.FC = () => {
  return (
    <div className="h-100" id="rootTemplate">
      <div className="flex h-screen">
        <MdAttachMoney className="text-5xl" />
        <h1>Template</h1>
      </div>
    </div>
  );
};

export default ComponentTemplate;

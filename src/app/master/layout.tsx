"use client";

import { usePathname } from "next/navigation";
import React from "react";

const LayoutMaster = (props) => {
  const pathname = usePathname();
  const pathArray = pathname.split("/");

  pathArray.shift();

  return (
    <div>
      <div>
        <div className="text-sm breadcrumbs">
          <ul>
            {pathArray.map((path, i) => (
              <li key={i}>{path.toUpperCase()}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default LayoutMaster;

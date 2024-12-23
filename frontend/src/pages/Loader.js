import React from "react";
import "./styles.css";

function Loader() {
  return (
    <div>
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    </div>
  );
}

export default React.memo(Loader);

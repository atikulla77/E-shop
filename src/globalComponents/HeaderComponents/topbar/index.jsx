import React from "react";
import Container from "../../container";
import NumberAndAddress from "./NumberAndAddress";

const Topbar = () => {
  return (
    <div className="border-b-1 border-black02 py-[22px]">
      <Container>
        <div className="grid grid-cols-2 justify-between">
          <NumberAndAddress />
          <div>right</div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;

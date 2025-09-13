import React from "react";
import Container from "../../Container";
import NumberAndAddress from "./NumberAndAddress";
import SocialWithLang from "./SocialWithLang";

const Topbar = () => {
  return (
    <div className="border-b-1 border-black02 py-[22px]">
      <Container>
        <div className="grid grid-cols-2 justify-between">
          <NumberAndAddress />
          <SocialWithLang />
        </div>
      </Container>
    </div>
  );
};

export default Topbar;

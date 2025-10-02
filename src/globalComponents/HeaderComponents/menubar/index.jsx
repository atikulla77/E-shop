import Container from "../../Container";
import MenuLeftBarLayout from "./menubarLayouts/MenuLeftBarLayout";
import MenuRightBarLayout from "./menubarLayouts/MenuRightBarLayout";

const Menubar = () => {
  return (
    <div className="bg-orange py-6">
      <Container>
        <div className="grid grid-cols-2 justify-between items-center text-white">
          <MenuLeftBarLayout />
          <MenuRightBarLayout />
        </div>
      </Container>
    </div>
  );
};

export default Menubar;

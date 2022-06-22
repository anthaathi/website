import React from "react";
import { FullPageWithColor } from "@/components/FullPageWithColor";
import { AppBar } from "@/components/AppBar";
import { Products } from "@/components/Products";

const Index: React.FC = () => {
  return (
    <FullPageWithColor>
      <AppBar />

      <Products />
    </FullPageWithColor>
  );
};

export default Index;

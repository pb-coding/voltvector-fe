import { FC } from "react";
import { redirect } from "next/navigation";

const Index: FC = () => {
  redirect("/dashboard");
};

export default Index;

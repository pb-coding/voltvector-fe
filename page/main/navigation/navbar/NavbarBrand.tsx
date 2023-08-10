import { FC } from "react";
import Image from "next/image";

import { DASHBOARD_PATH } from "@/global/routes/routes";

const NavbarBrand: FC = () => {
  return (
    <a href={DASHBOARD_PATH} className="flex items-center">
      <div className="relative h-8 w-8 mr-1">
        <Image
          src="/voltvector_logo.png"
          alt="Voltvector Logo"
          width={100}
          height={100}
        />
      </div>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        VoltVector
      </span>
    </a>
  );
};

export default NavbarBrand;

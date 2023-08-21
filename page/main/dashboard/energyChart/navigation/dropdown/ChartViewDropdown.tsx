import { FC, useState } from "react";

import ChartViewDropdownMenu from "@/page/main/dashboard/energyChart/navigation/dropdown/ChartViewDropdownMenu";
import ChartViewToggleDropdown from "@/page/main/dashboard/energyChart/navigation/dropdown/ChartViewToggleDropdown";

const ChartViewDropdown: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="ml-auto relative">
      <ChartViewToggleDropdown setIsDropdownOpen={setIsDropdownOpen} />
      {isDropdownOpen && (
        <ChartViewDropdownMenu setIsDropdownOpen={setIsDropdownOpen} />
      )}
    </div>
  );
};

export default ChartViewDropdown;

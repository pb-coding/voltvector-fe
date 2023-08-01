import { FC, useState } from "react";
import ActionButton from "@/page/main/admin/users/action/ActionButton";
import ActionDropdown from "@/page/main/admin/users/action/ActionDropdown";

const ActionButtonDropdown: FC = () => {
  const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);

  return (
    <div className="flex-shrink-0">
      <ActionButton setIsActionDropdownOpen={setIsActionDropdownOpen} />
      {isActionDropdownOpen && <ActionDropdown />}
    </div>
  );
};

export default ActionButtonDropdown;

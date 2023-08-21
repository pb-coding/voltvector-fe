import { FC, useState } from "react";

import ChartSettingsButton from "./ChartSettingsButton";
import ChartSettingsModal from "./ChartSettingsModal";

const ChartSettings: FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ChartSettingsButton setShowModal={setShowModal} />
      {showModal && <ChartSettingsModal setShowModal={setShowModal} />}
    </div>
  );
};

export default ChartSettings;

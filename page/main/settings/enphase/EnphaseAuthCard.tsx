"use client";

import { FC } from "react";

import { EnphaseAppType } from "@/page/main/settings/enphase/types";
import { enphaseAppStatus } from "@/page/main/settings/enphase/constants";
import Badge from "@/global/badges/Badge";
import LockIcon from "@/global/icons/LockIcon";

type EnphaseAuthCardProps = {
  app: EnphaseAppType;
  userId: number;
};

const backendUrl = process.env.BACKEND_URL ?? "localhost";
const backendPort = process.env.BACKEND_PORT ?? 3001;
const backendProtocol = process.env.BACKEND_PROTOCOL ?? "http";

const calculateStatus = (app: EnphaseAppType) => {
  if (app.issueDate == null) {
    return enphaseAppStatus.NOT_CONNECTED;
  }
  const issueDate = new Date(app.issueDate);
  const diff = Math.abs(new Date().getTime() - issueDate.getTime());

  const weekInMs = 604800000;
  if (diff < weekInMs) {
    return enphaseAppStatus.CONNECTED;
  }

  return enphaseAppStatus.NEEDS_REAUTH;
};

const EnphaseAuthCard: FC<EnphaseAuthCardProps> = ({ app, userId }) => {
  const appStatus = calculateStatus(app);
  const statusColor =
    appStatus === enphaseAppStatus.CONNECTED ? "green" : "red";

  const link = `https://api.enphaseenergy.com/oauth/authorize?response_type=code&client_id=${app.clientId}&redirect_uri=${backendProtocol}%3A%2F%2F${backendUrl}%3A${backendPort}%2Fenphase%2Foauth%3Fuserid%3D${userId}%26appname%3D${app.name}`;

  return (
    <div
      className={`max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {app.name}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <Badge color={statusColor} text={appStatus} />
      </p>
      <a
        href={link}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Authorize
        <LockIcon />
      </a>
    </div>
  );
};
export default EnphaseAuthCard;

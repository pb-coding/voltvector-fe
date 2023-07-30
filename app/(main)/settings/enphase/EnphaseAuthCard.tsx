"use client";

import { FC } from "react";

import { EnphaseAppType } from "@/app/(main)/settings/enphase/types";
import { enphaseAppStatus } from "@/app/(main)/settings/enphase/constants";
import Badge from "@/global/badges/Badge";

type EnphaseAuthCardProps = {
  app: EnphaseAppType;
};

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

const EnphaseAuthCard: FC<EnphaseAuthCardProps> = ({ app }) => {
  const appStatus = calculateStatus(app);
  const statusColor =
    appStatus === enphaseAppStatus.CONNECTED ? "green" : "red";
  const userid = 2; // TODO: get userid from context

  const link = `https://api.enphaseenergy.com/oauth/authorize?response_type=code&client_id=${app.clientId}&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fenphase%2Foauth%3Fuserid%3D${userid}%26appname%3D${app.name}`;

  console.log(app);

  return (
    <div
      className={`max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {app.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <Badge color={statusColor} text={appStatus} />
      </p>
      <a
        href={link}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Authorize
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};
export default EnphaseAuthCard;
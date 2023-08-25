"use client";

import { FC } from "react";
import Image from "next/image";
import Badge from "@/global/badges/Badge";
import AddProviderAuthButton from "./authorizationDialog/AddProviderAuthButton";
import { is } from "date-fns/locale";

type SmartHomeProviderCardProps = {
  provider: string;
  saved: boolean;
  authorized: boolean;
};

const SmartHomeProviderCard: FC<SmartHomeProviderCardProps> = ({
  provider,
  saved,
  authorized,
}) => {
  const imageUrl = `/${provider.toLowerCase()}.png`;
  const needsReauthorization = saved && !authorized;
  const needsAuthorization = !saved && !authorized;
  const isAuthorized = saved && authorized;

  // currently hardcoded since only meross is supported for now
  const isImplemented = provider === "MEROSS";

  const badgeColor = isAuthorized ? "green" : "red";
  const badgeText = isAuthorized
    ? "Connected"
    : needsReauthorization
    ? "Renew Authorization"
    : "Not Authorized";

  const actionText = !isImplemented
    ? "Coming Soon"
    : needsAuthorization
    ? "Authorize"
    : "Renew Auth";

  return (
    <div
      className={`max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
        !isImplemented ? "opacity-50" : ""
      }`}
    >
      <a>
        <Image
          className="w-full h-auto"
          src={imageUrl}
          alt="meross"
          sizes="100vw"
          width={100}
          height={100}
        />
      </a>
      <div className="p-5 relative">
        <div className="flex justify-center items-center mb-2">
          <a href="#" className="self-start">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {provider}
            </h5>
          </a>
          <div className="self-end ml-auto">
            <Badge color={badgeColor} text={badgeText} />
          </div>
        </div>
        <AddProviderAuthButton
          text={actionText}
          activeButton={isImplemented}
          provider={provider}
          isReauth={needsReauthorization || isAuthorized}
        />
        {!isImplemented && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span
              style={{ opacity: 0.95 }} // for some reason, opacity-95 doesn't work
              className="text-2xl font-bold text-gray-700 bg-white p-4 rounded dark:bg-gray-700 dark:text-white"
            >
              Coming Soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartHomeProviderCard;

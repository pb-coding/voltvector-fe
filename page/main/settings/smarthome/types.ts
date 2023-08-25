enum SmartHomeProvider {
  MEROSS,
  KASA,
  EWELINK,
}

export type SmartHomeProviderType = keyof typeof SmartHomeProvider;

export type SmartHomeProviderOverview = {
  provider: SmartHomeProviderType;
  saved: boolean;
  authorized: boolean;
};

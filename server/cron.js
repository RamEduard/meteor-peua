SyncedCron.options = {
  //Log job run details to console
  log: true,

  //Name of collection to use for synchronisation and logging
  collectionName: 'cronHistory',

  //Default to using localTime
  utc: true,

  //TTL in seconds for history records in collection to expire
  //NOTE: Unset to remove expiry but ensure you remove the index from
  //mongo by hand
  collectionTTL: 172800
};

SyncedCron.start();

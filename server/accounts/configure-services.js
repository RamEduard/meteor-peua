(() => {

  if (!Meteor.settings.private || !Meteor.settings.private.oAuth ) {
    console.error('\nError: Settings private.oAuth not defined.\n')
    return
  } else if (Meteor.isServer) {
    // Configure service with callback
    ((services) => {
      // Check is valid settings
      check(services, Object)

      for( var service in services ) {
        // Updated configuration service
        ServiceConfiguration.configurations.upsert( { service: service }, {
          $set: services[ service ]
        })
      }
    })(Meteor.settings.private.oAuth)
  }

})()

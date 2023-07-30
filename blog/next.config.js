const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "AvielO",
        mongodb_password: "pass",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site", //could be my-site-dev if in dev mode
      },
    };
  }

  return {
    env: {
      mongodb_username: "AvielO",
      mongodb_password: "pass",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

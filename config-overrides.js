module.exports = function override(config, env) {
    if (!config.externals) {
        config.externals = {};
    }

    config.externals = {
        ...config.externals,
      'Config': JSON.stringify(
          process.env.NODE_ENV === 'production' ?
          require('./public/config.prod.json') :
          require('./public/config.dev.json'))
    };

    return config;
};
module.exports = {
  ignore: [],
  env: {
    test: {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: true
            },
            debug: true
          }
        ]
      ]
    },
    production: {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: true
            },
            debug: true
          }
        ]
      ]
    },
    development: {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: true
            },
            debug: true
          }
        ]
      ]
    }
  }
};

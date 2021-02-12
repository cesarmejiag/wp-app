module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './app/components',
            constants: './app/constants',
            hooks: './app/hooks',
            navigations: './app/navigations',
            screens: './app/screens',
            utils: './app/utils',
            assets: './assets',
          },
        },
      ],
    ],
  }
}

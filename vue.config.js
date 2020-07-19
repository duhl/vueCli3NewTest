export const devServer = {
  /* proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://ktfx.hemahenmang.cn`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '',
        },
      },
    }, */
  proxy: {
    /* '/api': {
      target: '<url>',
      ws: true,
      changeOrigin: true,
    }, */
    '/shop': {
      target: 'http://ktfx.hemahenmang.cn',
      changeOrigin: true,
    },
  },
};

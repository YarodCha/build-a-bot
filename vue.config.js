module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'htpp://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};

const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      'common': resolve("src/common"),
      'assets': resolve("src/assets"),
      'pages': resolve("src/pages"),
      'services': resolve("src/services")
    }
  }
}

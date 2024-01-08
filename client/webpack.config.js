module.exports = {
    // existing configurations
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
          "child_process": false,
          "fs": false
          // and also other packages that are not found
        }
      },
}


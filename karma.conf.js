module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    browsers: ["ChromeHeadless"],
    reporters: ["progress", "kjhtml"],
    client: {
      clearContext: false,
    },
    singleRun: true,
    restartOnFileChange: true,
  });
};

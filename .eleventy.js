module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "md",
        "css" // css is not yet a recognized template extension in Eleventy
      ]);
    return {
        dir: {
            input: "src",
            output: "public"
        },
    };
};
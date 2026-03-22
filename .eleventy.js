module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("reset.css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

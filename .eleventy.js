const fs = require('fs');
const Image = require("@11ty/eleventy-img");

(async () => {
  let url = "https://images.unsplash.com/photo-1601758003122-53c40e686a19";
  let url2 = "https://images.unsplash.com/photo-1570586790305-4f115cb439c6";
  let stats = await Image(url, {
    widths: [1600],
    urlPath: '_site/images',
    outputDir: './src/images'
  });
  let stats2 = await Image(url2, {
    widths: [380],
    urlPath: '_site/images',
    outputDir: './src/images'
  });
  console.log( stats, stats2 );
})();



module.exports = function (config) {

  // Static assets to pass through
  config.addPassthroughCopy('./src/images');
  config.addPassthroughCopy('./src/public');
  config.addPassthroughCopy('./src/styles');
  config.addPassthroughCopy('./src/main.js');

  // Get the current year - super useful for copyright dates.
  // Usage: {% year %}

  config.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'njk'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};

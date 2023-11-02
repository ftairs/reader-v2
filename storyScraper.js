//get page
const axios = require("axios");
const metadata = require("./src/metadata_node");
const fs = require("fs");
const cheerio = require("cheerio");

let stories = [];

metadata.metadata.results.map((item, index) => {
  let dest = item.formats["text/html"];

  axios.get(dest).then((res) => {
    // console.log(res.data);
    // const persons = res.data;
    // this.setState({ persons });
    // console.log(stories.length);
    // console.log(metadata.metadata.results.length);

    const $ = cheerio.load(res.data);
    let chapters = [];
    let chapterNames = [];
    $(".chapter").each((index, item) => {
      console.log(item);
      chapters.push($(item).html());

      chapterNames.push($(item).find("h2").text());
    });

    stories.push({
      id: item.id,
      chapters: chapters,
      chapterNames: chapterNames,
    });

    if (stories.length === metadata.metadata.results.length) {
      fs.writeFile(
        __dirname + "/src/contents.json",
        JSON.stringify(stories),
        (err) => {
          if (err) {
            console.error(err);
          }
          // file written successfully
        }
      );
    }

    // console.log(index);
    // if (stories.length > 2) {
    //   console.log("ending");
    // }
  });
});

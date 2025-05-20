const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const OpenAI = require("openai");
const client = new OpenAI();

app.set("views", path.resolve("views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (request, response) {
  response.render("index", {
    message: "Welcome to the bedtime story generator. Press the button on the menu for today's story!",
  }); 
});

app.get("/story", async (request, response) => {
  const result = await client.responses.create({
    model: "gpt-4.1-nano",
    input: "Write a 6 sentence bedtime story about a cute animal",
  });
  // console.log(result.output_text)
  // response.send(result.output_text)
  response.render("index", {
    message: result.output_text,
  });
});

app.listen(port, () => {
  console.log("listing on port 3000");
});

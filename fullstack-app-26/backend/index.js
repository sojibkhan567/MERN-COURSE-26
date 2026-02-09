import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to index page!");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      setup: "Why don’t programmers like nature?",
      punchline: "It has too many bugs.",
    },
    {
      id: 2,
      setup: "Why did the math book look sad?",
      punchline: "Because it had too many problems.",
    },
    {
      id: 3,
      setup: "Why can’t you trust atoms?",
      punchline: "They make up everything.",
    },
    {
      id: 4,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field.",
    },
    {
      id: 5,
      setup: "Why do Java developers wear glasses?",
      punchline: "Because they don’t C#.",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

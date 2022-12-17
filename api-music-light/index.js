// импорт стандартных библиотек Node.js
const {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  writeFile,
  unlink,
  statSync
} = require("fs");
const { createServer } = require("http");
const path = require("path");

const DB_FILE = process.env.DB_FILE || path.resolve(__dirname, "db.json");
const PORT = process.env.PORT || 3024;
const URI_PREFIX = "/api/music";

class ApiError extends Error {
  constructor(statusCode, data) {
    super();
    this.statusCode = statusCode;
    this.data = data;
  }
}

const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function getItemsList(params = {}) {
  const db = shuffle(JSON.parse(readFileSync(DB_FILE) || "[]"));

  if (params.search) {
    const search = params.search.trim().toLowerCase();
    return db.filter(
      (item) =>
        item.artist.toLowerCase().includes(search) ||
        item.track.toLowerCase().includes(search)
    );
  }

  return db;
}

function getItems(itemId) {
  const data = JSON.parse(readFileSync(DB_FILE) || "[]");
  const item = data.find(({ id }) => id === itemId);
  if (!item) throw new ApiError(404, { message: "Item Not Found" });
  return item;
}

module.exports = server = createServer(async (req, res) => {
  if (req.url.substring(1, 4) === "img") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpeg");
    require("fs").readFile(`.${req.url}`, (err, image) => {
      res.end(image);
    });
    return;
  }

  if (req.url.substring(1, 4) === "mp3") {
    res.statusCode = 200;
    require("fs").readFile(`.${req.url}`, (err, data) => {
      if (err) throw err;
      const range = req.headers.range;
      const total = data.length;
      const parts = range.replace(/bytes=/, "").split("-");
      const partialstart = parts[0];
      const partialend = parts[1];
      const start = parseInt(partialstart, 10);
      const end = partialend ? parseInt(partialend, 10) : total - 1;
      const chunksize = end - start + 1;
      res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "audio/mpeg",
      });
      res.end(data);
    });
    return;
  }

  res.setHeader("Content-Type", "application/json");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  // если URI не начинается с нужного префикса - можем сразу отдать 404
  if (!req.url || !req.url.startsWith(URI_PREFIX)) {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Not Found" }));
    return;
  }

  const [uri, query] = req.url.substring(URI_PREFIX.length).split("?");
  const queryParams = {};

  if (query) {
    for (const piece of query.split("&")) {
      const [key, value] = piece.split("=");
      queryParams[key] = value ? decodeURIComponent(value) : "";
    }
  }

  try {
    const body = await (async () => {
      if (uri === "" || uri === "/") {
        if (req.method === "GET") return getItemsList(queryParams);
      } else {
        const itemId = uri.substring(1);
        if (req.method === "GET") return getItems(itemId);
      }
      return null;
    })();
    res.end(JSON.stringify(body));
  } catch (err) {
    console.log("err: ", err);
    if (err instanceof ApiError) {
      res.writeHead(err.statusCode);
      res.end(JSON.stringify(err.data));
    } else {
      res.statusCode = 500;
      res.end(JSON.stringify({ message: "Server Error" }));
    }
  }
})
  .on("listening", () => {
    if (process.env.NODE_ENV !== "test") {
      console.log(
        `Сервер mth.music запущен. Вы можете использовать его по адресу http://localhost:${PORT}`
      );
      console.log("Нажмите CTRL+C, чтобы остановить сервер");
      console.log("Доступные методы:");
      console.log(`GET ${URI_PREFIX} - получить список треков`);
      console.log(
        `GET ${URI_PREFIX}?{search=""} - поиск трека по исполнителю и названию`
      );
    }
  })
  .listen(PORT);

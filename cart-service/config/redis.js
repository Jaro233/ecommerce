const redis = require("redis");
require("dotenv").config();

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS,
});

client.on("error", (err) => {
  console.error("Error connecting to Redis", err);
});

module.exports = client;

// queries/bookmarks.js
const db = require("../db/dbConfigure.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs };
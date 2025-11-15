// api/notion.js

const { Client } = require("@notionhq/client");

module.exports = async (req, res) => {
  try {
    // 環境変数から取得
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    // 接続テストとして自分の情報を取得してみる
    const user = await notion.users.me();

    res.status(200).json({
      message: "Notion connected",
      bot: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Notion connection failed",
      error: error.message,
    });
  }
};

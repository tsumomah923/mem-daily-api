import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    const pageId = process.env.NOTION_PAGE_ID;

    const page = await notion.pages.retrieve({ page_id: pageId });
    const blocks = await notion.blocks.children.list({ block_id: pageId });

    return res.status(200).json({
      page,
      blocks
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

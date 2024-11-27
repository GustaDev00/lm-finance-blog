import { FC } from "react";
import { Article } from "./styles";

const Content: FC<{ content: string }> = ({ content }) => {
  let cleanContent = "";

  try {
    const parsedContent = JSON.parse(content);
    cleanContent = parsedContent.html;
  } catch (error) {
    console.error("Failed to parse content:", error);
  }

  return <Article dangerouslySetInnerHTML={{ __html: cleanContent }} />;
};

export default Content;

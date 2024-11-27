"use client";

import { FC } from "react";
import * as S from "./styles";
import BlogContentProps from "./props";
import Writer from "@/components/molecules/writer";
import Content from "@/components/atoms/content";
import { LatestArticles } from "@/components/organisms/latest-articles";

const BlogContent: FC<BlogContentProps> = ({ post, posts }) => {
  console.log(post, posts);

  return (
    <S.Blog>
      <S.Wrapper>
        <S.Cta />
        <S.Article>
          <Writer timer={10} />
          <Content content={post.json.content} />
        </S.Article>
      </S.Wrapper>
      <LatestArticles values={posts} />
    </S.Blog>
  );
};

export default BlogContent;

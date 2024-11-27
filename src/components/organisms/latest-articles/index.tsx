import { FC } from "react";
import ListPostsResponse from "@/api/post/response";
import * as S from "./styles";
import C from "@/constants";

export const LatestArticles: FC<{ values: ListPostsResponse[] }> = ({ values }) => {
  if (!values) return null;

  return (
    <S.LatestArticlesSection>
      <S.Title>{C.latest.title}</S.Title>
      <S.LatestArticles>
        <S.Posts>
          {values.map((post) => (
            <S.Post
              key={post.id}
              title={post.json.title}
              text={post.json.text}
              img={post.json.link}
              created_at={post.created_at}
              link={post.json.link}
            />
          ))}
        </S.Posts>
        <S.Cta />
      </S.LatestArticles>
    </S.LatestArticlesSection>
  );
};

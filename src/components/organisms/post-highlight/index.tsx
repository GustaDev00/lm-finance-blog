import { FC } from "react";
import * as S from "./styles";
import C from "@/constants";
import { PostHighlightProps } from "./props";

export const PostHighlight: FC<PostHighlightProps> = ({ posts }) => {
  const hightlight = {
    title: posts[0].json.title,
    text: posts[0].json.text,
    img: posts[0].json.link,
    created_at: posts[0].created_at,
    horizontal: false,
    link: posts[0].json.link,
  };
  return (
    <S.PostHighlight>
      <S.Wrapper>
        <S.Article>
          <S.Title>{C.home.title}</S.Title>
          <S.Description>{C.home.description}</S.Description>
        </S.Article>
        <S.Container>
          <S.PostBig {...hightlight} />
          <S.Posts>
            {posts.slice(1, 4).map((post, index) => (
              <S.Post
                key={index}
                title={post.json.title}
                text={post.json.text}
                img={post.json.link}
                created_at={post.created_at}
                link={post.json.link}
                horizontal={true}
              />
            ))}
          </S.Posts>
        </S.Container>
      </S.Wrapper>
    </S.PostHighlight>
  );
};

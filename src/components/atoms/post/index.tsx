import * as S from "./styles";
import { FC } from "react";
import { PostProps } from "./props";
import { formatToLocaleDate } from "@/utils/replace-date";

export const Post: FC<PostProps> = ({
  link,
  title,
  text,
  img,
  created_at,
  horizontal,
  ...props
}) => {
  return (
    <S.Post
      href={`${process.env.NEXT_PUBLIC_URL}${link.toLocaleLowerCase()}`}
      {...props}
      $horizontal={horizontal}
    >
      <S.Img src={img} alt={title} title={title} $horizontal={horizontal} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.Info>
          <S.Author />
          <S.Date>{formatToLocaleDate(created_at.date)}</S.Date>
        </S.Info>
      </S.Content>
    </S.Post>
  );
};

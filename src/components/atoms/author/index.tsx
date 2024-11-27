import * as S from "./styles";
import C from "./constants";

export const Author = ({ ...props }) => (
  <S.Author {...props}>
    <S.AuthorImage {...C.img} />
    <S.Name>{C.name}</S.Name>
  </S.Author>
);

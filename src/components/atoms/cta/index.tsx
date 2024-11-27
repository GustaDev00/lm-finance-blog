import * as S from "./styles";
import { FC } from "react";
import { CtaProps } from "./props";

export const Cta: FC<CtaProps> = ({ title, href, ...props }) => {
  return (
    <S.Cta href={href} title={title} {...props}>
      {title}
    </S.Cta>
  );
};

import * as S from "./styles";
import useAnimation from "./animation";
import { FC } from "react";
import { CtaProps } from "./props";

export const Cta: FC<CtaProps> = ({ title, href, ...props }) => {
  useAnimation();
  return (
    <S.Cta href={href} title={title} {...props}>
      {title}
    </S.Cta>
  );
};

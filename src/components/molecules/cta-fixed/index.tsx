import * as S from "./styles";
import C from "@/constants";

export const CtaFixed = () => {
  return (
    <S.CtaFixed>
      <S.Modal>
        <S.Text>{C.cta.text}</S.Text>
        <S.Button {...C.cta} />
      </S.Modal>
    </S.CtaFixed>
  );
};

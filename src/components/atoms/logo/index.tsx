import * as S from "./styles";

export const Logo = ({ className }: { className?: string }) => (
  <S.Link href="/" className={className}>
    <S.Img src="/imgs/logo.png" alt="Logo principal" />
  </S.Link>
);

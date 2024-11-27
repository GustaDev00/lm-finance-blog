import C from "@/constants";
import * as S from "./styles";

export const Footer = () => {
  const { navigation, contact, footer } = C.data;
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Content>
          <S.WrapperLogo>
            <S.Logo />
          </S.WrapperLogo>

          <S.Categories>
            <S.Title>{navigation.text}</S.Title>

            <S.List>
              {navigation.items.map((category, index) => (
                <S.Item key={index}>
                  <S.Link href={category.href} title={category.title}>
                    {category.title}
                  </S.Link>
                </S.Item>
              ))}
            </S.List>
          </S.Categories>

          <S.Contact>
            <S.Title>{footer.text}</S.Title>

            <S.List>
              {contact.map(({ text, link, content }, index) => (
                <S.Item key={index}>
                  <S.Link href={link} title={content}>
                    {text}: {content}
                  </S.Link>
                </S.Item>
              ))}
            </S.List>
          </S.Contact>
        </S.Content>
        <S.Info>
          <S.Copy>{footer.copy}</S.Copy>
          <S.Agency>{footer.agency}</S.Agency>
        </S.Info>
      </S.Wrapper>
    </S.Footer>
  );
};

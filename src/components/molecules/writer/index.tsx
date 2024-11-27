import { FC } from "react";
import * as S from "./styles";
import WriterProps from "./props";
import C from "@/constants";
import { IconTime } from "@/components/atoms/svg";
import ShareButton from "@/components/atoms/share";
import { Author } from "@/components/atoms/author";

const Writer: FC<WriterProps> = ({ timer }) => {
  return (
    <S.WriterContainer>
      <S.User>
        <Author />
      </S.User>
      <S.Timer>
        <IconTime />
        {timer} {C.time}
      </S.Timer>
      <S.Share>
        <ShareButton />
      </S.Share>
    </S.WriterContainer>
  );
};

export default Writer;

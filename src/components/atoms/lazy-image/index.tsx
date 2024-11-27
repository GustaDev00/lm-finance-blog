import { forwardRef, Fragment, useMemo } from "react";
import LazyImageProps from "./props";
import * as S from "./styles";
import replaceExtension from "@/utils/replace-extension";
import Head from "next/head";
import { viewportsBase } from "@/utils/media-query/viewport-base";

export const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  ({ src, alt, notLazy, className, responsive, ...props }, ref) => {
    const ensureExtension = (value: string | undefined): string | undefined => {
      if (!value) return undefined;
      return value.match(/\.[a-zA-Z0-9]+$/) ? value : `${value}.png`;
    };

    const getSourceWebp = (value: string | undefined) => {
      if (!value) return null;
      const [source, ext] = replaceExtension(value, "webp");
      return ext !== ".svg" ? source : null;
    };

    const validatedSrc = ensureExtension(src);

    const responsiveSource = useMemo(() => {
      if (!responsive) {
        return null;
      }

      const entries = Object.entries(responsive)
        .map(([key, value]) => ({
          maxWidth: Number(
            key.match("[0-9]+") ? key : viewportsBase[key as keyof typeof viewportsBase].width,
          ),
          value: ensureExtension(value),
        }))
        .sort((p1, p2) => (p1.maxWidth > p2.maxWidth ? 1 : -1));

      return entries.map(({ maxWidth, value }) => {
        if (!value) {
          return;
        }

        const valueWebp = getSourceWebp(value);

        return (
          <Fragment key={maxWidth}>
            {valueWebp && (
              <source srcSet={valueWebp} media={`(max-width: ${maxWidth}px)`} type="image/webp" />
            )}
            <source srcSet={value} media={`(max-width: ${maxWidth}px)`} />
          </Fragment>
        );
      });
    }, [responsive]);

    const sourceWebp = getSourceWebp(validatedSrc);

    return (
      <>
        {notLazy && validatedSrc && (
          <Head>
            {sourceWebp && (
              <link rel="preload" as="image" href={`${process.env.NEXT_PUBLIC_URL}${sourceWebp}`} />
            )}
            <link rel="preload" as="image" href={`${process.env.NEXT_PUBLIC_URL}${validatedSrc}`} />
          </Head>
        )}
        <S.Picture>
          {responsiveSource}
          {sourceWebp && (
            <source srcSet={`${process.env.NEXT_PUBLIC_URL}${sourceWebp}`} type="image/webp" />
          )}
          {validatedSrc && (
            <img
              ref={ref}
              {...props}
              className={className}
              src={`${process.env.NEXT_PUBLIC_URL}${validatedSrc}`}
              alt={alt}
              title={alt}
              loading={notLazy ? "eager" : "lazy"}
            />
          )}
        </S.Picture>
      </>
    );
  },
);

LazyImage.displayName = "LazyImage";

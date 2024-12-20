"use client";

import { Suspense, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/styles/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";
import Nav from "@/shared/nav";
import { Footer } from "@/shared/footer";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="8t_75lI2kjA2HUGbh7Z-SiGTcoVXDHoVCydKK4x_c2Y"
        />
      </head>
      <body className={fontNames}>
        <FpjsProvider
          loadOptions={{
            apiKey: "29YjKqc5r2cevJ3GSXDP",
          }}
        >
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <GSAPInitializer />
              <Nav />
              <main>
                <Suspense>{children}</Suspense>
              </main>
              <Footer />
            </ThemeProvider>
          </StyledComponentsRegistry>
        </FpjsProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import { CustomBr } from "@/components/atoms/custom-br";
import { FacebookIcon } from "@/components/svgs/facebook";
import { HomeIcon } from "@/components/svgs/home";
import { InstagramIcon } from "@/components/svgs/instagram";

export default {
  data: {
    navigation: {
      text: "Seiten",
      menu: "navigation",
      items: [
        { title: "Home", href: "/", icon: HomeIcon },
        { title: "Blog", href: "/blog" },
        { title: "Über uns", href: "/portfolio" },
        { title: "Kontakt", href: "/kontakt" },
      ],
    },
    contact: [
      {
        text: "Phone",
        content: "076 469 28 31",
        link: "tel:+0764692831",
      },
      {
        text: "E-Mail",
        content: "info@trockenbau-dac.ch",
        link: "mailto:info@fiberweb.ch",
      },
    ],
    social_share: {
      text: "Folge uns",
      icons: [
        {
          title: "Instagram",
          link: "https://www.instagram.com/",
          icon: InstagramIcon,
        },
        {
          title: "Facebook",
          link: "https://www.facebook.com/",
          icon: FacebookIcon,
        },
        // {
        //   title: "Twitter",
        //   link: "https://x.com/home",
        //   icon: TwitterIcon,
        // },
      ],
    },
    footer: {
      text: "Kontakt Informationen",
      copy: "Copyright © 2024 Ha-Tech GmbH",
      agency: (
        <>
          Mit 💚 entwickelt von{" "}
          <span>
            <a href="https://www.fiberweb.ch/" target="_blank" rel="noreferrer">
              FiberWeb.ch
            </a>
          </span>
        </>
      ),
    },
  },
  home: {
    title: "Blog FiberWeb",
    description: (
      <>
        Die HA-Tech Gmbh umfasst ein mittlerweile 14-köpfiges Team und ist tätig in der
        <CustomBr byViewport="desktop" /> gesamten Deutschschweiz.
      </>
    ),
  },
  copy: {
    copy: "Copiar link",
    copied: "Link copiado",
  },
  time: "minutos de leitura",
  latest: {
    title: "Lastet Articles",
  },
  cta: {
    title: "Mehr dazu",
    text: "Ihm blieb einiges übrig zweifeln? Kontaktieren Sie uns im Augenblick!",
    href: "#",
  },
};

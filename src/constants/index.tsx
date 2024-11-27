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
        { title: "Home", href: "https://lm-finance.ch/", icon: HomeIcon },
        { title: "Blog", href: "/" },
        { title: "Kontakt", href: "https://lm-finance.ch/kontakt/" },
        { title: "Über uns", href: "https://lm-finance.ch/uber-uns/" },
      ],
    },
    contact: [
      {
        text: "Phone",
        content: "+41 78 261 94 66",
        link: "tel:+41782619466",
      },
      {
        text: "E-Mail",
        content: "info@lm-finance.ch",
        link: "mailto:info@lm-finance.ch",
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
      copy: "Copyright © 2024 L & M Finance AG",
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
    title: "Blog L & M Finance AG",
    description: (
      <>
        Unsere Dienstleistungen: Von Gesundheitsversicherungen
        <CustomBr byViewport="desktop" /> bis hin zu Immobilienberatung – wir haben das passende
        Angebot für dich.
      </>
    ),
  },
  copy: {
    copy: "Link kopieren",
    copied: "Link kopiert",
  },
  time: "Leseminuten",
  latest: {
    title: "Neueste Artikel",
  },
  cta: {
    title: "Mehr dazu",
    header: "Kontakt aufnehmen",
    text: "Noch Fragen? Kontaktieren Sie uns noch heute.",
    href: "https://lm-finance.ch/kontakt/#",
  },
};

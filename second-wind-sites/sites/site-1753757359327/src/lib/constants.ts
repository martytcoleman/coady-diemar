import { NavLink, KeyStat, LeadershipMember } from "@/lib/types";

export const NAV_LINKS: NavLink[] = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Industry Focus", href: "/industry-focus" },
    { text: "Services", href: "/services" },
    { text: "Leadership", href: "/leadership" },
    { text: "Transactions", href: "/transactions" },
    { text: "Contact", href: "/contact" }
];

export const KEY_STATS: KeyStat[] = [
    { label: "Total Transaction Volume", value: "$100B+" },
    { label: "Deals Closed", value: "175+" },
    { label: "Countries Transacted In", value: "22" },
    { label: "Average Years of Experience", value: "27" }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: "Clifford G. Adams, Jr.",
    title: "Managing Director",
    imageUrl: "https://static.wixstatic.com/media/3ccbaa_56a3949cb87a41b49befeab41fda2592~mv2.png/v1/fill/w_282,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Cliff%20v2.png"
  },
  {
    name: "Jonathan S. Anzaldo",
    title: "Managing Director",
    imageUrl: "https://static.wixstatic.com/media/3ccbaa_1eda0c9a337041d781263994b22f62f4~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Jonathan%20(2).png"
  },
  {
    name: "J. Scott Magrane, Jr.",
    title: "Managing Director",
    imageUrl: "https://static.wixstatic.com/media/3ccbaa_c5f7fff9d68945a282af729e8a6a33fb~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Scott%20(2).png"
  },
   {
    name: "Colin R. Knudsen",
    title: "Senior Advisor",
    imageUrl: "https://static.wixstatic.com/media/3ccbaa_2edbb63835054674922fb63d9122ff53~mv2.png/v1/fill/w_285,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Colin%20Knudson%202.png"
  }
];
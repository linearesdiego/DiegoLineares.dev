//icons

import Github from "../../public/images/icons/github.svg";
import Twitter from "../../public/images/icons/twitter.svg";
import Linkedin from "../../public/images/icons/linkedin.svg";

//logos

import Javascript from "../../public/images/logos/icon-javascript.svg";
import Typescript from "../../public/images/logos/icon-typescript.svg";
import React from "../../public/images/logos/icon-react.svg";
import NextJS from "../../public/images/logos/icon-nextjs.svg";
import NodeJS from "../../public/images/logos/icon-nodejs.svg";
import Tailwind from "../../public/images/logos/icon-tailwindcss.svg";
import Figma from "../../public/images/logos/icon-figma.svg";
import Git from "../../public/images/logos/icon-git.svg";
import Mysql from "../../public/images/logos/mysql.svg";
import Astro from "../../public/images/logos/astro.svg";
import Redux from "../../public/images/logos/redux.svg";
import Postman from "../../public/images/logos/postman.svg";

//proyects

import proyects1 from "../../public/images/proyects1.jpeg";
import proyects2 from "../../public/images/proyects2.jpeg";
import proyects3 from "../../public/images/proyects3.jpeg";
export const NAV_LINKS = [
  {
    label: "Sobre mi",
    href: "#about",
  },
  {
    label: "Experiencia",
    href: "#experience",
  },
  {
    label: "Proyectos",
    href: "#proyects",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/linearesdiego",
  },
  {
    icon: Twitter,
    url: "https://x.com/Linearesdiego12",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/diego-lineares-40576b215/",
  },
];

export const TECNOLOGIES = [
  {
    img: Javascript,
    title: "Javascript",
  },
  {
    img: Typescript,
    title: "Typescript",
  },
  {
    img: React,
    title: "React",
  },
  {
    img: NextJS,
    title: "NextJS",
  },
  {
    img: NodeJS,
    title: "NodeJS",
  },
  {
    img: Tailwind,
    title: "Tailwind",
  },
  {
    img: Figma,
    title: "Figma",
  },
  {
    img: Git,
    title: "Git",
  },
  {
    img: Mysql,
    title: "Mysql",
  },
  {
    img: Astro,
    title: "Astro",
  },
  {
    img: Redux,
    title: "Redux",
  },
  {
    img: Postman,
    title: "Postman",
  },
];

export const EXPERIENCES = [
  {
    title: "Nodos Hub",
    color: "#a2d2ff",
    subtitle: "Desarrollador FrontEnd",
    description: [
      "Trabajó para varios clientes como Institutos, Interredes, Secura.",
      "Trabajó con una variedad de tecnologías, incluyendo React, NextJS, Tailwind, Figma, Git, Redux, Mui.",
    ],
    date: "Ago 2022 - Actualidad",
  },

  {
    title: "Suinfi",
    color: "#a2d2ff",
    subtitle: "Desarrollador FullStack",
    description: [
      "Trabaje realizando eccomerce , sistema de stock y gastronomico.",
      "Trabaje con una variedad de tecnologías, incluyendo React, Node Js, Mysql, Tailwind, Figma, Git, Zustand.",
    ],
    date: "Febr 2024 - Jul 2024",
  },
];

export const PROJECTS = [
  {
    name: "Instagram Clone",
    description:
      "Este proyecto lo realize para presentar en una entrevista tecnica para una empresa de los estados unidos.",
    url: "https://next-instagram-buiffhlu1-linearesdiegos-projects.vercel.app/",
    previewImage: proyects1,
    technologies: [
      "Next JS",
      "Javascript",
      "Tailwind CSS",
      "Zustand",
      "Mockapi",
    ],
  },

  {
    name: "Instituto Sarmiento",
    description:
      "Este proyecto es una landing page para un instituto de educacion con su formulario y su reponsive.",
    url: "https://institutosuperiorsarmiento.com.ar/",
    previewImage: proyects2,
    technologies: ["Astro JS", "Typescript", "Tailwind CSS"],
  },
  {
    name: "Ayinco",
    description:
      "Este proyecto es un sitio web de una empresa constructura con su responsive y sus formularios de contacto.",
    url: "https://ayinco.vercel.app/",
    previewImage: proyects3,
    technologies: ["Astro JS", "Typescript", "Tailwind CSS"],
  },
];

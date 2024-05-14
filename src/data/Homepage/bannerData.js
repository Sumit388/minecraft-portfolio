import {
  bannerTexture,
  projectBannerTexture,
  contactBannerTexture,
  blankTexture,
} from "../../images/textures";

export const BANNER_DATA = [
  {
    id: 1,
    name: "aboutBanner",
    position: [-0.375, 5, -10],
    size: [8.5, 4, 2],
    rotation: [0, 0, 0],
    texture: bannerTexture,
    url: "/about",
  },
  {
    id: 2,
    name: "contactBanner",
    position: [9, 3, -13],
    size: [3.5, 5.5, 2],
    rotation: [0, 0, 0],
    texture: contactBannerTexture,
    url: "/contact",
  },
  {
    id: 3,
    name: "projectsBanner",
    position: [-10, 3, -13],
    size: [3.5, 5.5, 2],
    rotation: [0, 0, 0],
    texture: projectBannerTexture,
    url: "/projects",
  },
  {
    id: 4,
    name: "skillsBanner",
    position: [-15.5, 1.5, -10],
    size: [3, 3, 2],
    rotation: [0, 0, 0],
    texture: blankTexture,
    url: "/about",
  },
  {
    id: 5,
    name: "resumeBanner",
    position: [14.5, 1.5, -10],
    size: [3, 3, 2],
    rotation: [0, 0, 0],
    texture: blankTexture,
    url: "/about",
  },
];

import { v4 as uuid } from "uuid";
import { cameraFuji, cameraNikon, maskKn95, maskSurgical, sanitizerHandmade, sanitizerPurell, sunglassRaybanRound, sunglassRaybanSquare, tshirtSummer, tshirtVacation } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Fuji Digital Camera",
    image: {
      src: cameraFuji,
      alt: "Fuji Digital Camera"
    },
    author: "Shiv Khera",
    price: 5000,
    categoryName: "Camera"
  },
  {
    _id: uuid(),
    title: "Nikon DSLR Camera",
    image: {
      src: cameraNikon,
      alt: "Nikon DSLR Camera"
    },
    author: "Junaid Qureshi",
    price: 3000,
    categoryName: "Camera",
    badge: "NEW"
  },
  {
    _id: uuid(),
    title: "Rayban Round Sunglasses",
    image: {
      src: sunglassRaybanRound,
      alt: "Rayban Round Sunglasses"
    },
    author: "Shiv Khera",
    price: 1000,
    categoryName: "Sunglasses",
    outOfStock: true
  },
  {
    _id: uuid(),
    title: "Rayban Square Sunglasses",
    image: {
      src: sunglassRaybanSquare,
      alt: "Rayban Square Sunglasses"
    },
    author: "Shiv Khera",
    price: 1000,
    categoryName: "Sunglasses",
    badge: "TRENDING"
  },
  {
    _id: uuid(),
    title: "Vacation T-shirt",
    image: {
      src: tshirtVacation,
      alt: "Vacation T-shirt"
    },
    author: "Shiv Khera",
    price: 1000,
    categoryName: "T-shirt",
    outOfStock: true
  },
  {
    _id: uuid(),
    title: "Summer T-shirt",
    image: {
      src: tshirtSummer,
      alt: "Summer T-shirt"
    },
    author: "Shiv Khera",
    price: 1000,
    categoryName: "T-shirt"
  },
  {
    _id: uuid(),
    title: "Surgical Mask",
    image: {
      src: maskSurgical,
      alt: "Surgical Mask"
    },
    author: "Shiv Khera",
    price: 1000,
    categoryName: "Mask"
  },
  {
    _id: uuid(),
    title: "KN95 Mask",
    image: {
      src: maskKn95,
      alt: "KN95 Mask"
    },
    author: "Shiv Khera",
    price: 1000,
    categoryName: "Mask"
  },
  {
    _id: uuid(),
    title: "Handmade sanitizer",
    image: {
      src: sanitizerHandmade,
      alt: "Handmade sanitizer"
    },
    author: "Shiv Khera",
    price: 1000,
    categoryName: "Sanitizer"
  },
  {
    _id: uuid(),
    title: "Purell sanitizer",
    image: {
      src: sanitizerPurell,
      alt: "Purell sanitizer"
    },
    author: "Shiv Khera",
    price: 1000,
    categoryName: "Sanitizer",
    outOfStock: true
  }
];

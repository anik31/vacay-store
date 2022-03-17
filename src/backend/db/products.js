import { v4 as uuid } from "uuid";
import { cameraFuji, cameraNikon, maskKn95, maskSurgical, sanitizerHandmade, sanitizerPurell, suitcaseAmericanTourister, suitcaseSkybags, sunglassRaybanRound, sunglassRaybanSquare, tshirtSummer, tshirtVacation } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "American Tourister Suitcase",
    image: {
      src: suitcaseAmericanTourister,
      alt: "American Tourister Suitcase"
    },
    price: "9995",
    originalPrice: "15000",
    rating: {
      value: "2",
      count: "9966"
    },
    categoryName: "Suitcase",
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "Skybags Suitcase",
    image: {
      src: suitcaseSkybags,
      alt: "Skybags Suitcase"
    },
    price: "11999",
    originalPrice: "18999",
    rating: {
      value: "4.1",
      count: "25111"
    },
    categoryName: "Suitcase",
    badge: "BESTSELLER",
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "Fuji Digital Camera",
    image: {
      src: cameraFuji,
      alt: "Fuji Digital Camera"
    },
    price: "10000",
    originalPrice: "18000",
    rating: {
      value: "3.5",
      count: "12365"
    },
    categoryName: "Camera",
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "Nikon DSLR Camera",
    image: {
      src: cameraNikon,
      alt: "Nikon DSLR Camera"
    },
    price: "25000",
    originalPrice: "40000",
    rating: {
      value: "4.5",
      count: "255111"
    },
    categoryName: "Camera",
    badge: "NEW",
    dealOfTheDay: true,
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "Rayban Round Sunglasses",
    image: {
      src: sunglassRaybanRound,
      alt: "Rayban Round Sunglasses"
    },
    price: "2000",
    originalPrice: "4000",
    rating: {
      value: "4.8",
      count: "633122"
    },
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
    price: "1000",
    originalPrice: "1500",
    rating: {
      value: "4",
      count: "564456"
    },
    categoryName: "Sunglasses",
    badge: "TRENDING",
    dealOfTheDay: true,
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "Vacation T-shirt",
    image: {
      src: tshirtVacation,
      alt: "Vacation T-shirt"
    },
    price: "500",
    originalPrice: "1000",
    rating: {
      value: "3.9",
      count: "89455"
    },
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
    price: "800",
    originalPrice: "1100",
    rating: {
      value: "4",
      count: "46555"
    },
    categoryName: "T-shirt",
    dealOfTheDay: true,
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "Surgical Mask",
    image: {
      src: maskSurgical,
      alt: "Surgical Mask"
    },
    price: "50",
    originalPrice: "80",
    rating: {
      value: "4.8",
      count: "77889"
    },
    categoryName: "Mask",
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "KN95 Mask",
    image: {
      src: maskKn95,
      alt: "KN95 Mask"
    },
    price: "200",
    originalPrice: "300",
    rating: {
      value: "4.9",
      count: "4655632"
    },
    categoryName: "Mask",
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "Handmade sanitizer",
    image: {
      src: sanitizerHandmade,
      alt: "Handmade sanitizer"
    },
    price: "250",
    originalPrice: "400",
    rating: {
      value: "4.7",
      count: "23654"
    },
    categoryName: "Sanitizer",
    dealOfTheDay: true,
    outOfStock: false
  },
  {
    _id: uuid(),
    title: "Purell sanitizer",
    image: {
      src: sanitizerPurell,
      alt: "Purell sanitizer"
    },
    price: "500",
    originalPrice: "1000",
    rating: {
      value: "3.5",
      count: "4656565"
    },
    categoryName: "Sanitizer",
    outOfStock: true
  }
];

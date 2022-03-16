import { v4 as uuid } from "uuid";
import { cameraNikon, mask, sanitizer, suitcaseSkybags, sunglassRaybanSquare, tshirtVacation } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Camera",
    image: {
      src: cameraNikon,
      alt: "Nikon DSLR Camera"
    },
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Sunglasses",
    image: {
      src: sunglassRaybanSquare,
      alt: "Rayban Round Sunglasses"
    },
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "T-shirt",
    image: {
      src: tshirtVacation,
      alt: "Vacation T-shirt"
    },
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Suitcase",
    image: {
      src: suitcaseSkybags,
      alt: "Skybags suitcase"
    },
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Mask",
    image: {
      src: mask,
      alt: "Mask"
    },
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Sanitizer",
    image: {
      src: sanitizer,
      alt: "Sanitizer"
    },
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  }
];

<p align="center">
  <a href="https://vacay-store-react.netlify.app/">
    <img src="src/assets/images/logo.png" alt="Vacay Store logo">
  </a>
</p>
<h4 align="center"><i>Buy vacation essentials</i></h4>
<p align="center"><a href="https://vacay-store-react.netlify.app/">Visit website »</a></p>

## Introduction
Vacay store is an ecommerce web application for buying vacation essentials. Vacay store is publicly hosted on Netlify at https://vacay-store-react.netlify.app/.

## Demo
![vacay store demo](https://user-images.githubusercontent.com/56336326/162265324-d1fbbc6c-e4bd-445d-a29b-4cdacc798fae.mp4)

## Features
- Home page 
- Product listing page 
- Filters by
    - Price
    - Category
    - Ratings
    - Out of stock
- Sort by price
    - Low to high
    - High to low
    - Featured
- Wishlist management
- Cart management
- Authentication
    - Sign up
    - Login
    - Logout

## Tech stack
- ReactJS
- React Router v6
- useContext + useReducer for state management
- Vanilla CSS & Vacay UI library
- mockBee for mock backend APIs

## Installation
- Clone repository and change directory.
```bash
git clone https://github.com/anik31/vacay-store.git
cd vacay-store
```
- Switch to `dev` branch.
```bash
git checkout dev
```
- Create an environment variable inside `.env` file in the root of the project.
```
REACT_APP_JWT_SECRET=<your-jwt-secret>
```
- Install dependencies and start server.
```bash
yarn install
yarn start
```
## Socials
* Twitter - [_anik_31](https://twitter.com/_anik_31)
* Github - [anik31](https://www.linkedin.com/in/anik31/)
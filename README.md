
## GrowEasy _Grow Your Brand Together with GrowEasy_



### Deplyment Link
> Vercel deployment link [Live Web Link](https://grow-easyadsplatform-ranas25s-projects.vercel.app/)


### Technologies
[![Next.js](https://img.shields.io/badge/Next.js-blue.svg?style=for-the-badge)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-purple.svg?style=for-the-badge)](https://tailwindcss.com/)

[![ReactJS](https://img.shields.io/badge/React-blue.svg?style=for-the-badge)](https://reactjs.org/)
![Static Badge](https://img.shields.io/badge/Redux-%23155bd4?style=for-the-badge)


[![TypeScript](https://img.shields.io/badge/Typescript-blue.svg?style=for-the-badge)](https://www.typescriptlang.org/)
![Static Badge](https://img.shields.io/badge/Github-%23333033?style=for-the-badge)



## Features
>Beauitiful Banner Designs

>Edit Banner Details as per the requirements.

>Live Preview while editing Banner   _"This is helpful for creating banner without affecting the template design"_




## Project Structure:
  - `public` It contains the static files that are served to the user on first request
    
    - `icons` Icons used across different components
    - `images` Images that can be changed for any template
    - `templates` Templates used for banners
  - `src` all source code for the project is put here
    
    - `app` Files for the "/" route, served by the server
    - `components` Components for the homepage
    - `data` Contains data for banners displayed on the homepage
    - `lib` Contain files for Redux Store
      
      - `feature` Store Slices are created here
        - `BannerSlice.ts` Manages state variables related to banners
      - `hooks` Contains hooks for selector, dispatch, and Store
      - `store`.ts Store creation and configuration
    - `utils` contains utility data
      
      - `bannerConfig.ts` (Config for all banner templates with special CSS properties)
      - `images.ts` (Array of background images for banner selection)




    


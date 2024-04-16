<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Ant-Shell/image-match-game">
    <img width="173" alt="Image Match Game Logo" src="https://github.com/Ant-Shell/image-match-game/assets/100455148/cc563fa8-406a-4b7b-93a2-b3bbf50cb3dd">
  </a>

<!-- HEADER -->
  <h3 align="center">Image Match Game</h3>
  <p align="center">
    A dynamic image matching card game
    <br />
    <a href="https://github.com/Ant-Shell/image-match-game"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://image-match-game.vercel.app"><strong>Check it out! »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#notes">Notes</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

[![Application Preview][Preview-image]](https://github.com/Ant-Shell/image-match-game/assets/100455148/00c3a4c7-5457-48b7-b01f-3c60857bebf6)
[![Application Preview2][Preview-image2]](https://github.com/Ant-Shell/image-match-game/assets/100455148/964fc2d9-2582-4de8-a07b-efeb87490604)

This web application was created in order to learn a new JavaScript Framework ([Vue](https://vuejs.org/)), while creating a game that would be fun and relaxing to play.

### Built With

* [![Vue][Vue.js]][Vue-url]
* [![JavaScript][JavaScript-shield]][Javascript-url]
* [![Tailwind CSS][TailwindCSS-shield]][TailwindCSS-url]
* [![NPM][NPM-shield]][NPM-url]
* [![Vite][Vite-shield]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
- Clone the repository to your local machine by following instructions [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- Install dependencies:
```
npm i
```
- Start the project
```
npm run dev
```
<br>

<strong>Note:</strong> in order to utilize the dynamic images, you will need API credentials, which can be obtained [here](https://help.pexels.com/hc/en-us/articles/900004904026-How-do-I-get-an-API-key)

Then create up a local [.env](https://vitejs.dev/guide/env-and-mode) file in the root of the project:

```
touch .env
```
and add the follwing to the `.env` file:
```
VITE_APP_API_KEY=[YOUR-API-KEY-HERE]
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
- Click cards to try and find matches
- If cards match, they will remain face up, and Matches count will increase
- If cards do not match, they will flip face down again
- Upon winning, please try again!
- New card are added periodically, for a dynamic experience!
- To play, please visit the [deployed site](https://image-match-game.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Notes

After being accustomed to using React, I decided to try using a new framework ([Vue](https://vuejs.org/)). There is still much I have to learn about Vue, but I'm happy that I was able to turn an idea into a working game.

### Functionality includes...

- Card flipping animations
- Dynamic images for cards
- Tracking card matches for player feedback
- Default cards will be used, if unable to get cards from the Pexels API
- Responsiveness across devices

### Wins:

* Meeting and exceeding MVP (Minimum Viable Product)
* Animations
* Responsiveness

### Challenges:

* Learning Vue
* Animations
* Responsiveness

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Refactoring
- [ ] Testing
- [ ] Improved styling
- [ ] Improved accessibility

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

[![LinkedIn][Linkedin]][Linkedin-url] [![Gmail][Gmail]][Gmail-url]

## API Used

* [pexels.com](https://www.pexels.com/api/) was used for this project

## Credits

* Background Image by <a href="https://unsplash.com/@sebastian_unrau?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sebastian Unrau</a> on <a href="https://unsplash.com/photos/trees-on-forest-with-sun-rays-sp-p7uuT0tw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
* Card Face Down Image by <a href="https://unsplash.com/@alexander_tsang?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alexander Tsang</a> on <a href="https://unsplash.com/photos/brown-wooden-door-_frvdyMH6S0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[Preview-image]: https://github.com/Ant-Shell/image-match-game/assets/100455148/00c3a4c7-5457-48b7-b01f-3c60857bebf6

[Preview-image2]: https://github.com/Ant-Shell/image-match-game/assets/100455148/964fc2d9-2582-4de8-a07b-efeb87490604

[Vue.js]: https://img.shields.io/badge/Vue.js-000?style=for-the-badge&logo=vuedotjs&logoColor=65B588
[Vue-url]: https://vuejs.org/

[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://www.javascript.com/

[TailwindCSS-shield]: https://img.shields.io/badge/TailwindCSS-122539?style=for-the-badge&logo=tailwindcss&logoColor=60BCF3
[TailwindCSS-url]: https://tailwindcss.com/

[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/

[Vite-shield]: https://img.shields.io/badge/Vite-151B1F?style=for-the-badge&logo=vite&logoColor=9E5BF5
[Vite-url]: https://vitejs.dev/

[Linkedin]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[Linkedin-url]: https://www.linkedin.com/in/anthonyshellman/

[Gmail]: https://img.shields.io/badge/gmail-%2320232a.svg?style=for-the-badge&logo=gmail&logoColor=%DA5040
[Gmail-url]: mailto:atshellman@gmail.com

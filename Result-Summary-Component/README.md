# Frontend Mentor - Results summary component solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview
A result summary component with mobile and desktop responsiveness, built to closely replicate the sample UI from the challenge at [link](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV)

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot
** On mobile(375px) **
![](./screenshot.jpg)
** On desktop(1440px) **
![](./screenshot.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/result-summary-component-iVYKuSBM5b](https://www.frontendmentor.io/solutions/result-summary-component-iVYKuSBM5b)
- Live Site URL: [https://summary-comp.netlify.app/](https://summary-comp.netlify.app/)

## My process
- Define file structure
- Create a repo and add project to GitHub repo
- Add assets
- Create UI skeleton
- import data from data.json
- Create list on summary section
- Add colours and layout styles
- Add desktop responsiveness
- Deploy to Netlify
- Write README documentation

### Built with

- Tailwind CSS
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

**1. If data.json is in /public directory, use fetch to get the data but import data.json if it is in /src**
- When your JSON is in /public, it is out of reach for the bundler(Vite in my case) so you'd have to fetch it to access the JSON data
- However, if your JSON is in the /src directory, it is within the reach of your bundler, ready and accessible at any moment. You can just import for use.

Here is what cases look like in code:

```jsx
//when data.json is in /public
import {useEffect, useState} from "react"

const [data, setData] = useState([])

useEffect(() => {
    fetch("/data.json")
        .then(res => res.json())
        .then(data => setData(data))
})
```

```jsx
//when data.json is in /src
import data from "./data.json"
```

**2. Tailwind CSS cannot process dynamic hsl values**
Tailwind does not exist at runtme so it does not understand dynamic values, infact it considers them as empty. Tailwind classes must always exist as string literals to be processed successfully.
Demo of the mistake I was making before:
```jsx

     const bgColours = {
        Reaction: "hsla(0, 100%, 67%, 0.06)",
        Memory: "hsla(39, 100%, 56%, 0.06)",
        Verbal: "hsla(166, 100%, 37%, 0.06)",
        Visual: "hsla(234, 85%, 45%, 0.06)",
    }

    return (
    <>
       <div className={`flex justify-between bg-[${bgColours[dataObj.category]}]`}>
              ...
       </div>
    <>
    )

    
```

What I did instead(correct method):
```jsx
     
     const bgColours = {
        Reaction: "hsla(0, 100%, 67%, 0.06)",
        Memory: "hsla(39, 100%, 56%, 0.06)",
        Verbal: "hsla(166, 100%, 37%, 0.06)",
        Visual: "hsla(234, 85%, 45%, 0.06)",
    }

    return (
    <>
       <div 
          className="flex justify-between "
          style={{backgroundColor: bgColours[dataObj.category]}} 
       >
              ...
       </div>
    <>
    )
```
Inline styles are handled by browser runtime so the dynamic hsl values get processed successfully.


### Continued development

- React state management(more complicated examples) to refine my knowledge.


## Author
- Frontend Mentor - [@Gina-bun](https://www.frontendmentor.io/profile/Gina-bun)


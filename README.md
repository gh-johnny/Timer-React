# Timer App 🕑
#### Written in React.js, Typescript and Styled-components!
[![My Skills](https://skillicons.dev/icons?i=react,ts,styledcomponents)](https://skillicons.dev)

A website that allows you to keep track of your time during your daily tasks 
<img width="800" height="500" src="https://raw.githubusercontent.com/gh-johnny/Timer-React/main/docs/assets/timer-app-home-default.jpeg" alt="App printscreen">
<img width="800" height="500" src="https://raw.githubusercontent.com/gh-johnny/Timer-React/main/docs/assets/timer-app-home-countdown.jpeg" alt="App printscreen">
<img width="800" height="500" src="https://raw.githubusercontent.com/gh-johnny/Timer-React/main/docs/assets/timer-app-history.jpeg" alt="App printscreen">

## Dependencies 📦
- react (^18.2.0)
    - react-dom (^18.2.0)
    - react-router-dom (^6.22.0)
- react-hook-form (^7.50.1)
- date-fns (^3.3.1)
- phosphor-react (^1.4.1)
- immer (^10.0.3)
- styled-components (^6.1.8)
- zod (^3.22.4)
- @hookform/resolvers (^3.3.4)

#### Dev dependencies 📦
- vite (^5.0.8)
- typescript (^5.2.2)
- eslint (^8.56.0)
- eslint-plugin-react-hooks (^4.6.0)
- eslint-plugin-react-refresh (^0.4.5)
- @rocketseat/eslint-config (^2.2.2)
- @types/react (^18.2.55)
- @types/react-dom (^18.2.19)
- @types/styled-components (^5.1.34)
- @typescript-eslint/eslint-plugin (^6.21.0)
- @typescript-eslint/parser (^6.21.0)
- @vitejs/plugin-react (^4.2.1)

## Project setup ⚡

Install `git` or the `gh` cli package if you don't already have it on your machine

Clone the repo with
```
git clone https://github.com/gh-johnny/Timer-React.git

or

git clone git@github.com:gh-johnny/Timer-React.git

or

gh repo clone gh-johnny/Timer-React
```
---
Install a _package manager_ like `npm` if you don't already have it on your machine

Use package manager/runner of preference (npm, yarn, pnpm, bun...) <br>
Now enter the project install dependencies, start local server and open it on your browser with

```
cd Timer-React/ &&
npm install &&
npm run dev
```

## Project structure 👷 🏗 
### At top level 💯
- ##### docs/ 
```
Here you will find all files related to documentation (the very README.md file, images etc)  

Dir format: docs/ 
                -- contributing/ | examples/ | usage/ | assets/...
                    - CONTRIBUTING.md | LICENSE | CHANGE.log | .editorconfig | .gitignore...
                - README.md
```

- ##### public/ 
```
Here you will find all files that need or just are available to the browser like icons, logos)
just images file in general

Dir format: public/ 
                -- collection-of-public-assets/
                    - asset(.png, .svg...)
                -- logo/
                    -- logo-johnny.svg
```
- ##### src/ 
```
Literally where the app is 😀

Dir format: just down below 👇👇
```
<hr>

### At src/ level 🛠️
- ##### @types/ 
```
Where the type declarations sit (.d.ts files)
* These will not affect the code, but only assist during development time *

Dir format: @types/
                -- name-of-what-you-want-to-type/
                    - index.d.ts
                -- styles
                    - index.d.ts
```
- ##### assets/ 
```
Where the .svg, .png... files sit that will appear in our components

Dir format: assets/
                -- type-of-asset/
                    - name-of-asset(.svg, .png...)
                -- logo/
                    - logo-johnny.svg
```
- ##### components/ 
```
Where reusable react components that we create are

Dir format: components/
                -- NameOfComponent/
                    - indext.tsx
                    - styles.ts
                -- Header/
                    - indext.tsx
                    - styles.ts
```
- ##### contexts/ 
```
Where the components for the context api are, they allow us to share certain states anywhere 
in the application if the specified component of the context api is 
at the desired parent level 

Dir format: contexts/
                - NameOfContext.tsx
                - CyclesContext.tsx
```
- ##### layouts/ 
```
Where the components UI are layed out (so unecessary renders of entire compos are avoided)

Dir format: layouts/
                -- NameOfLayout/
                    - index.tsx
                    - styles.ts
                -- DefaultLayout/
                    - index.tsx
                    - styles.ts
```
- ##### pages/ 
```
Where the routes for the application are

Dir format: pages/
                -- NameOfRoute/
                    - index.tsx
                    - styles.ts
                -- Home/
                    - index.tsx
                    - styles.ts
```
- ##### reducers/ 
```
Where the reducers (pieces of code which will help deal with complicated states) are

Dir format: reducers/
                -- nameOfReducer/
                    - actions.ts
                    - reducer.ts
                -- cycles/
                    - actions.ts
                    - reducer.ts
```
- ##### styles/ 
```
Where the non-specific styled-components styles are

Dir format: styles/
                -- themes/
                    - default.ts
                - global.ts
```
- ##### utils/ 
```
Where the non-specific styled-components styles are

Dir format: styles/
                -- themes/
                    - default.ts
                - global.ts
```
- ##### App.tsx 
```
Where router and theme providers are
```

- ##### Router.tsx
```
Where the routes and their respective components are established 
```


<br>
<br>
<br>
This project is under MIT License.

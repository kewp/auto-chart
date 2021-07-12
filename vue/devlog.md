# devlog

`12 july 2021`

- init project with `npm init @vitejs/app vue --template vue`
- following the guide for tailwind guide https://tailwindcss.com/docs/guides/vue-3-vite

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

then change _purge_ in `tailwind.config.js` to

```js
purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
```

create `./src/index.css` to

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and make sure you `import './index.css'` inside of `./src/main.js`:

```js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```

finally to enable jit just say `mode: 'jit',` in `tailwind.config.js`.

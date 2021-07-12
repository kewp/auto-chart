# auto charts

demos of the same charting app using various viewing libraries.

each folder represents a separate project which builds
on it's own (use `npm install` and then `npm run dev` or
`npm run build`).

each is built using vite and tailwind css.

they are all self-explanatory as to which viewing library 
except for _direct_ which uses `auto`'s [direct dom manipulation].

they share an `auto` state object in `state.js`
global tailwind styles in `style.js`.

each uses the same structure too. for example
the root node looks like so:

```html
<App>
    <Bar />
    <Content />
</App>
```

`App` is defined as a single div and uses the style
defined under `App` in `style.js`:

```js
export default {
    'App': 'mx-5 px-10'
};
```

each implementation then pulls this style in. for example
in svelte:

```js
<script>
    import App as css from '../style.js';
</script>

<div class="{css}">
    <slot></slot>
</div>
```

i think it's better to have the styles directly in the
file they belong to but in order to not have duplication
across projects i had to have a global style file. for
your own project it might be worth copying them across
manually.

also interesting to note is the structure is also
duplicated i.e. divs. i suppose this could also be
defined in a global way, perhaps even with the styles
embedded

```js
export default {
    'App': {
        el: 'div',
        style: 'px-5'
    }
}
```

but this would make the project code even more
obscure to look at.

it's a fine line between avoiding duplication
and having example projects you can pick up
in your own language and play with in a manner
you are use to. i suppose tailwind is already
quite an odd approach so introducing a global
object for the style strings isn't so uncouth.
# Installation and Usage

## Installation

Run either one in your Vue directory:  
```bash
yarn add vue-ultimate-skeleton-cards
or
npm install vue-ultimate-skeleton-cards
```

## Usage
Open `main.js` and add the following along with other imports:
```js
import SkeletonCards from 'vue-ultimate-skeleton-cards'
Vue.use(SkeletonCards)
```
The name with which you import doesn't matter.  

In your component template, you can use [any of the two components](/guide/components) without importing them:
```vue
<SkeletonCard />
```
or
```vue
<SkeletonScaffold>
//Your custom layout
</SkeletonScaffold>
```

Read more about these components in the next section
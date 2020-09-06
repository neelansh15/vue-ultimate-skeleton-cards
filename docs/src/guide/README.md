# Introduction

Vue Ultimate Skeleton Cards (Or VUSC for short) is a cool customizable skeleton card plugin for VueJS. It gives you **two** ways of defining a skeleton card.  
One gives you basic customization and a *unique* structure prop.  
The other gives you complete control over the layout of your skeleton card.  

## Installation

Use either Yarn or npm in your Vue directory:  
```bash
yarn add vue-ultimate-skeleton-cards
or
npm install vue-ultimate-skeleton-cards
```

## Usage
Go to your `main.js` file and add the following at the top of your file with other imports:
```js
import SkeletonCards from 'vue-ultimate-skeleton-cards'
Vue.use(SkeletonCards)
```
The import name doesn't matter.  

In your component template, you can use [any of the two components](/guide/components) without importing them
```vue
<SkeletonCard />
```
or
```vue
<SkeletonScaffold>
//Your custom layout
</SkeletonScaffold>
```

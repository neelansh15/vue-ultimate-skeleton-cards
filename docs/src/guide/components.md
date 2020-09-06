# Components

Vue Ultimate Skeleton Cards (VUSC) gives you two components to define your skeleton cards:
1) [SkeletonCard](#skeletoncard)
2) [SkeletonScaffold](#skeletonscaffold)

## SkeletonCard
This is the easist to get started with. It provides by default a dark mode Skeleton Card for which you can customize various properties like color, animation, [structure](#the-structure-prop), etc.  

```vue
<SkeletonCard primary="crimson" />
```

```vue
<SkeletonCard primary="#112233" structure="601122033" />
```
Here is the full list of props that it accepts:

| Prop name | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| primary   | String | Primary color of your card | #242424 |
| borderRadius | String | Border radius of the card rounded by default | 20px |
| contrast | Number | Contrast between the card color and color of the inner blocks | 10 |
| animDisable | Boolean | Disable the animation or not | false |
| animDuration | String | Animation duration | 1.5s |
| animTimingFunction | String | Timing function for the animation with a bezier curve or the predefined css `ease`, `ease-in`, `ease-out`, `ease-in-out` | CSS default |
| structure | String | Define your structure with a string of numbers | 1120333304 |

### The Structure prop
The structure prop is a unique and super-easy way to define a basic vertical structure with a string of numbers each corresponding to a specific element type (for example a profile logo or header bar).  
For horizontal cards and more complex layouts, please refer to the [SkeletonScaffold Component](#skeletonscaffold)

Here is the mapping of the numbers:
| Number | Corresponds to | Properties |
| ------ | -------------- | ---------- |
| 7 | Card Image (Pinned to top) | **Always** add in the beginning of the prop's string and only *once* |
| 0 | `<br />` Break line | Breaks or adds new line. Useful for spacing   |
| 1 | Box Type 1 | Suitable for Titles<br />Height: 1.5em <br />Width: 90% <br />Color: Darker by 10 or 20 points depending on contrast |
| 2 | Box Type 2 | Suitable for Subtitles<br />Height: 1.3em <br />Width: 70% <br />Color: Darker by 3 or 10 points depending on contrast |
| 3 | Box Type 3 | Suitable for General content<br />Height: 1.1em <br />Width: 50%-90% (Random) <br />Color: Darker or Lighter by 10 points depending on contrast |
| 4 | Rounded Button | Border-radius: 20px |
| 5 | Rectangular Button | Border-radius: 0px |
| 6 | Circle | Suitable for profile images in skeleton card<br />Border-radius: 100%

The structure is rendered vertically using the string of numbers in the prop from left to right.  
Play around with it!

Here are some examples which showcase this prop:

```vue
<SkeletonCard primary="crimson" structure="12333" animDisable>
```

```vue
<SkeletonCard primary="royalblue" structure="701120333" animDisable>
```

```vue
<SkeletonCard primary="orange" structure="601120333044" animDisable>
```


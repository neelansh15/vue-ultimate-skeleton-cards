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
The structure prop is a unique and super-easy way to define a basic structure with a string of numbers each corresponding to a specific element type (for example a profile logo or header bar).  

Here is the mapping of the numbers:
| Number | Corresponds to | Property |
| ------ | -------------- | -------- |


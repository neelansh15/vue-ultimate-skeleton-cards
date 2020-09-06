# Components

Vue Ultimate Skeleton Cards (VUSC) gives you two globally defined components to create your skeleton cards:

1. [SkeletonCard](#skeletoncard)
2. [SkeletonScaffold](#skeletonscaffold)


## SkeletonCard

This is the easist to get started with. It provides by default a dark mode Skeleton Card for which you can customize various properties like color, animation, [structure](#the-structure-prop), etc.

```vue
<SkeletonCard />
```
<SkeletonCard class="responsive-card-width" />

```vue
<SkeletonCard primary="crimson" structure="60011203333" />
```
<SkeletonCard primary="crimson" structure="60011203333" class="responsive-card-width" />

Here is the list of props that it accepts:
### SkeletonCard Props

| Prop name          | Type    | Description                                                                                                              | Default     |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| primary            | String  | Primary color of your card                                                                                               | #242424     |
| padding            | String  | Padding                                                                                                                  | 2em 3em     |
| borderRadius       | String  | Border radius of the card rounded by default                                                                             | 20px        |
| contrast           | Number  | Contrast between the card color and color of the inner blocks                                                            | 10          |
| animDisable        | Boolean | Disable the animation or not                                                                                             | false       |
| animDuration       | String  | Animation duration                                                                                                       | 1.5s        |
| animTimingFunction | String  | Timing function for the animation with a bezier curve or the predefined css `ease`, `ease-in`, `ease-out`, `ease-in-out` | CSS default |
| structure          | String  | Define your structure with a string of numbers                                                                           | 1120333304  |

### The Structure prop

The structure prop is a **unique** and **super-easy** way to define a basic vertical structure with a string of numbers each corresponding to a specific element type (for example a profile logo or header bar).  
For horizontal cards and more complex layouts, please refer to the [SkeletonScaffold Component](#skeletonscaffold).

Here is the mapping of the numbers:
| Number | Corresponds to | Properties |
| ------ | -------------- | ---------- |
| 7 | Card Image (Pinned to the top) | Always add in the **beginning** of the prop's string and only _once_ |
| 0 | `<br />` Break line | Breaks or adds new line. Useful for spacing |
| 1 | Box Type 1 | Suitable for Titles<br />Height: 1.5em <br />Width: 90% <br />Color: Darker by 10 or 20 points depending on contrast |
| 2 | Box Type 2 | Suitable for Subtitles<br />Height: 1.3em <br />Width: 70% <br />Color: Darker by 3 or 10 points depending on contrast |
| 3 | Box Type 3 | Suitable for General content<br />Height: 1.1em <br />Width: 50%-90% (Random) <br />Color: Darker or Lighter by 10 points depending on contrast |
| 4 | Rounded Button | Border-radius: 20px |
| 5 | Rectangular Button | Border-radius: 0px |
| 6 | Circle | Suitable for profile images in skeleton card<br />Border-radius: 100% |

The structure is rendered vertically using the string of numbers in the prop from left to right.  
Play around with it!

Here are some examples which showcase this prop:

```vue
<SkeletonCard primary="crimson" structure="12333" animDisable />
```
<SkeletonCard primary="crimson" structure="12333" animDisable class="responsive-card-width" />

```vue
<SkeletonCard primary="royalblue" structure="701120333" animDisable />
```
<SkeletonCard primary="royalblue" structure="701120333" animDisable class="responsive-card-width" />

```vue
<SkeletonCard primary="orange" structure="600112033304" animDisable />
```
<SkeletonCard primary="orange" structure="600112033304" animDisable class="responsive-card-width" />

## SkeletonScaffold

This component gives you full control over the layout of your skeleton card. It does so by providing global Vue directives which you can use with `<div />` tags inside of the `SkeletonScaffold` component to generate the required boxes, circles, etc.

The colors of the generated elements will derive from the `SkeletonScaffold` component's `primary` prop. So setting the color once in the component will reflect on all the child components (See table below). To make the elements lighter or darker than the parent, use the `v-mLight` and `v-mDark` directives.

This way of scaffolding with vue directives is especially useful as you can use CSS to make this in any way you want, including using CSS Grids to get a proper layout in place.

**Example:**

```vue
<SkeletonScaffold primary="teal">
    <div v-mSquare style="border-radius: 100%" />
    <br />
    <div v-mBox v-mDark style="height: 1.5em" />
    <div v-mBox v-mDark style="height: 1.5em" />
    <div v-mBox style="height: 1.3em; width: 60%" />
</SkeletonScaffold>
```
<SkeletonScaffold primary="teal">
<p></p>
    <div v-mSquare style="border-radius: 100%"></div>
    <br />
    <div v-mBox v-mDark style="height: 1.5em"></div>
    <div v-mBox v-mDark style="height: 1.5em"></div>
    <div v-mBox style="height: 1.3em; width: 60%"></div>
</SkeletonScaffold>
  

`SkeletonScaffold` takes *almost* the same props as the [SkeletonCard](#skeletoncard) component except that it doesn't have the `structure` and `contrast` prop.
### SkeletonScaffold Props
| Prop name          | Type    | Description                                                                                                              | Default     |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| primary            | String  | Primary color of your card                                                                                               | #242424     |
| padding            | String  | Padding                                                                                                                  | "2em 3em"   |
| borderRadius       | String  | Border radius of the card rounded by default                                                                             | 20px        |
| animDisable        | Boolean | Disable the animation or not                                                                                             | false       |
| animDuration       | String  | Animation duration                                                                                                       | 1.5s        |
| animTimingFunction | String  | Timing function for the animation with a bezier curve or the predefined css `ease`, `ease-in`, `ease-out`, `ease-in-out` | CSS default |


For the structure itself, use the pre-defined global directives below inside the component.  
Here is the list of global directives available for use with `div` elements:

### Base Directives

| Vue Directive | Properties | Default Color | Default Dimensions (Width, Height) |
| ------------- | ---------- | ------------- | ---------------------------------- |
| v-mBox | Simple box useful for text content like title, subtitle or general content | Darker than parent by 3 points | 100%, 1.1em
| v-mSquare | Square. Useful for profile images. Can be rounded to make a circle | Darker than parent by 10 points | 3em, 3em
| v-mButton | Button | Darker than parent by 5 points | 5em, 2em
| v-mCardImg | **Pins to the top**. Big square for main image in a vertical card. | Darker than parent by 10 points | 100%, 10em

Moreover, `mBox` and `mSquare` have default bottom margin of `0.5em`

### Utility Directives
| Vue Directive | Property |
| ------------- | -------- |
| v-mLight | Lighten element by 10 points* |
| v-mDark | Darken element by 10 points* |
| v-mRandomWidth | Assign a random width between 50%-90% |

*\* = With reference to parent element's color*

Here is an example which uses all of these 7 directives:
```vue
<SkeletonScaffold primary="purple" animDisable>
    <div v-mCardImg></div> <!-- Card Image -->
    <br />
    
    <div v-mSquare style="border-radius: 100%"></div> <!-- Profile image -->
    <br />

    <div v-mBox v-mDark style="height: 1.5em"></div> <!-- Heading -->
    <div v-mBox v-mDark style="height: 1.5em"></div> <!-- Heading -->
    <div v-mBox style="height: 1.3em; width: 60%"></div> <!-- Sub-Heading -->
    <br />

    <!-- Content Boxes -->
    <div v-mBox v-mLight v-mRandomWidth></div>
    <div v-mBox v-mLight v-mRandomWidth></div>
    <div v-mBox v-mLight v-mRandomWidth></div>
    <div v-mBox v-mLight v-mRandomWidth></div>
    <br />

    <!-- Default Rectangular Button -->
    <div v-mButton></div>
</SkeletonScaffold>
```
<SkeletonScaffold primary="purple" animDisable style="width:60%">
  <span></span>
    <div v-mCardImg></div>
    <br />
<span></span>
    <div v-mSquare style="border-radius: 100%"></div>
    <br />
<span></span>
    <div v-mBox v-mDark style="height: 1.5em"></div>
    <div v-mBox v-mDark style="height: 1.5em"></div>
    <div v-mBox style="height: 1.3em; width: 60%"></div>
    <br />
<span></span>
    <div v-mBox v-mLight v-mRandomWidth></div>
    <div v-mBox v-mLight v-mRandomWidth></div>
    <div v-mBox v-mLight v-mRandomWidth></div>
    <div v-mBox v-mLight v-mRandomWidth></div>
    <br />
<span></span>
    <div v-mButton></div>
</SkeletonScaffold>


<style>
.responsive-card-width{
    width: 40%;
}
@media only screen and (max-width: 768px){
    .responsive-card-width{
        width: 70%
    }
}
</style>

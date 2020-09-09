# Introduction

Vue Ultimate Skeleton Cards (Or VUSC for short) is a cool customizable skeleton card plugin for VueJS. It gives you *two* ways of defining a skeleton card that **suits your needs**.

### New loading animation

The cards have a unique loading animation which is different from the legacy skeleton cards you have seen till now.  
There is more eye-catching movement in these cards to captivate your viewers.

<SkeletonCard class="responsive-card-width" />

It can be disabled if you prefer it that way.

### Minimal
By using just one prop, you can customize the entire structure of the skeleton card. [Read how to use it](/guide/components).

```vue
<SkeletonCard primary="#112233" structure="701120333" animDisable />
```

<SkeletonCard primary="#112233" structure="701120333" animDisable class="responsive-card-width" />

### Complete Customization
If you feel the [structure prop](/guide/components.html#the-structure-prop) of the `SkeletonCard` component is too limiting, you can use the `SkeletonScaffold` component to use your own css layouts for full control.

Read the next section to learn how to install it.

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

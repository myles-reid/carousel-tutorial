# Image Carousel
In this simple walk though, we'll look at how to implement a really easy carousel for your future projects. While it may look like a lot up front, under the hood it is really simple and rather easy to understand.

---

### [Live Demo Here](https://myles-reid.github.io/carousel-tutorial/) 

---

### HTML set up 
The HTML for this project is rather straight forwards, as all we need are a couple buttons, and an unordered list. We make use of data- attributes to distinguish between style and function. I've used some fontAwesome symbols for the next and previous buttons, but you can use whatever you see fit.

As for the images themselves, I have just taken a couple random images, but these could also be replaced with divs with info just as easily.

It is important to make sure that you have a 'wrapper' around both the buttons, and the list, containing them in one. 

---

### CSS styling
A few important notes for the styling:
  - Make sure to have the 'wrapper' that is around everything set to `position: relative;` with everything inside it, both the buttons and the slides set to ```position: absolute;`. 

  - Ensure that you are using `object-fit: cover;` when sizing your images, to make sure that the aspect ratio of each image is respected!

  - In order to do a nice smooth transition:
  ```css
  .slide {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .slide[data-active] {
    opacity: 1;
    transition: opacity 1s ease-in out;
  }
  ```
  > The `.slide[data-active]` is something we will use to make sure we know what slide should be visible.

Aside from these few points, the rest of the styling is up to you and what is needed in your specific project!

---

### JavaScript

Overall the script in this is really simple, as it only includes a single `forEach()`!

I have a few utility functions attached just to help clean things up a little:

> ```JavaScript
>function selectAll(selector, scope = document) {
>  return scope.querySelectorAll(selector);
>}
>
>function listen(event, element, callback) {
>  return element.addEventListener(event, callback);
>}
>```

These are just to help tidy up a little, and personally, I would rather use them than typing them over and over again.

By using data-selectors to select elements, it stops any overlap and confusion with CSS classes, keeping things separated!

Getting the slides to function, we select the slides by finding the nearest parent with the data-attribute of carousel (`button.closet('[data-carousel])`) and then selecting the slides which are within that carousel (`.querySelector('[data-slides])`). By doing it this way, it allows for multiple carousels to function with the one bit of script!

The next step is to find the current active slide (`[data-active]`). And then we need to convert the images to an array, find the index of our active slide, then  use the offset that has been set (based on what button was clicked) to set the new index to either the previous or the next slide.

In order to get the carousel to loop, we add the following: 

>```JavaScript
> if (newIndex < 0) newIndex = slides.children.length - 1;
> if (newIndex >= slides.children.length) newIndex = 0;
>``` 

This basically just tells the carousel to circle around, depending on where we are in the array/slides!

The last thing we do, is make sure we set the data-active attribute to the current new slide, and remove it from the previous slide!

---

### We're done!

And that will give you a really nice, adjustable image carousel that can be modified to your hearts desire to fit in and look good based on your project's need!

--- 

<p style="font-size: 12px;">Big thanks to <a href="https://github.com/WebDevSimplified">@WebDevSimplified</a> for the inspiration</p>

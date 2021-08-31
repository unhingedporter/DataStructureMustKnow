CSS Font Sizing: Pixels vs Em vs Rem vs Percent vs Viewport Units

Much has been debated about pixels vs em vs percent vs rem and which font property to use and when. In spite of all the 100+ articles online, this topic can be very confusing given how the usage of these font properties differs based on the needs of our projects. For example, some people suggest not to use fixed pixel values at the base level (html and body elements) as the user will not get the opportunity to reset the font-size to their specifications. But, for people like me who are dependent on bootstrap, this is not advisable. We end up having a fixed base value in pixels and have to create our entire project’s font properties relative to the base pixel values.

This article explains the difference between these font properties and how best to use them. Of course, there is no right way to do this and a large part of which font sizing's to use and how will be largely deterministic based on our understanding of these font sizing units and the project in question.

Pixels: Before the advent of responsive design, pixel was widely used as THE font sizing for everything from typography to width, padding and height. However, pixels are fixed-size units and do not change based on the size of the viewport or are scalable. If you want to build a responsive website using pixels, it can get very difficult to keep track of all the pixel based values throughout the CSS style sheet, including the values within media queries. So, What font property can we use that will allow us to make minimal changes to our CSS stylesheet but still be scalable? That’s where em, rem, percent and viewport units come into the picture.

Em:Em is a flexible, scalable unit that is converted by the browser into pixel values. If the default font size in chrome is 16 px, 1 em = 16 pixels. One big misconception about em is that it is relative to the font size of the parent element. As per the W3 spec, em is relative to the font size of the element on which they are used. This article here has done a wonderful job explaining the concept of em in a clear and detailed manner. If you really want to learn how em works, do not skip the above mentioned article. Ems are commonly used for typography such as headings, texts , paragraphs and the elements associated with typography such as margins, padding etc. If you set your base html and body elements font size in pixels and your typography element’s properties are defined using ems, for responsive design all you need to do is change the default font-size at the base level such as

@media (max-width: 400px) {
 html, body { font-size: 15px; }
}

and all em values will automatically re-compute to the base level.

However, ems have a major caveat, Inheritance!! For example, a <div> with a font-size of 16px containing a <p> with a font-size of 2em translates to 32 px for the <p> element. Now add a <div> inside the <p> with a font size of 0.5em too, the result of the div will be 16px, half of 32 px, not 8px. This is where rems come into the picture.

Rem: Rem is relative to the font size of the root element (html element). If the font-size of the html element is 16 px, then 1rem = 16 px. Rem will ALWAYS be relative to the root element, irrespective of how nested the elements are. However, using only rems and no ems can have it’s own share of troubles as the typography can either become too big or too small and this can lead to scaling issues. This article explains a great way to solve this problem.

Percents: Percent value is always relative to another value, be it the element’s parent value or from another property of the element itself. Percentages are used widely in responsive design. A great example would be Twitter’s Bootstrap framework. Bootstrap’s 12-Column layout has it’s widths set in percentages, so they’re always fluid and sized relative to their parent element
Percentages are commonly used for width and height of containers, divs and for sizing responsive images.

Viewport units: Viewport width and height properties are relative to the width/height of the current viewport size.

1vw = 1% of viewport width
1vh = 1% of viewport height

Viewport here means the browser’s window size. If you want to size your element based on the viewport width and not the parent element/root element, then viewport units is the font sizing unit you need to use. vw/vh units work great with typography and are commonly used for the same.
Here is a great article that explains how to use this property.

Final Verdict: Since I use bootstrap frequently, my default base size is in pixels. I use percent to set the width and height of images, containers and divs, ems and rems for typography and elements related to typography such as margin, padding etc. I am currently playing with viewport units for responsive typography and find it awesome. Experiment with these font properties a lot and you will soon fall into a style tailor made for you.

Reference: https://medium.com/@madhum86/css-font-sizing-pixels-vs-em-vs-rem-vs-percent-vs-viewport-units-b1485716afe7
### CSS Sprite:

   - Images for a website are typically stored in individual files. Some of these images may be related or may be variations of the same image, such as a plain button and a highlighted button. When a user opens the webpage their browser has to request each of these files, resulting in a slower experience.

   - With CSS sprites, multiple images are combined into a single image called a sprite sheet. Instead of downloading several files, the user downloads a single file and displays the necessary image (or sprite) by offsetting the file. This removes the overhead of having to request multiple files at the cost of having to download one larger file.
   
   * How CSS Sprites Work

        - A web developer merges several images into a single sprite sheet, placing them in a grid-like pattern. When a particular image is required, the CSS references the sprite sheet, offsets it by the index of the desired sprite, then defines the size of the sprite in pixels.

        - CSS sprites are commonly used in situations where a web page uses multiple images that have the same size, (e.g. for buttons or logos). Each button references the same sprite sheet but accesses an image by offsetting the sheet by a certain number of pixels. The desired image is then “framed” on the webpage.

* How to Create A CSS Sprite Sheet

    - There are many tools that will automate building sprite sheets, but creating a sprite sheet can be done in any image editing program.

    Create a grid of pixels. A grid will not only help with positioning images, but also in referencing images.
    Add the images. Small images might fit in a single cell, while larger images will take up multiple cells. Most sprite sheets group images by size.
    Add the CSS. There are three attributes used to create a sprite in CSS: width, height and background. Width and height define the size of the image, while background defines the sprite sheet and the location of the desired sprite (in pixels).
    Add the element to the page. An img tag with a placeholder image can reference the CSS sprite by ID or by class. When the page is loaded, the placeholder image will be replaced by the sprite.

* Example of CSS Sprites

    - Amazon’s redesign in October 2014 introduced a concise sprite sheet consisting of only a few icons: the site logo, search button, shopping cart icon and navigation arrows. When a shopper visits amazon.com, a copy of the sprite sheet is cached onto their computer and reused throughout the site. Using a sprite sheet instead of separate images saves Amazon from having to process over 30 additional HTTP requests per session.

    - Other major service providers including Apple, Google, and Facebook make extensive use of CSS sprites. For services that handle millions of users, reducing the number of requests is a key strategy for increasing responsiveness.

* Benefits of CSS Sprites

    - CSS sprites reduce overall page load time while giving enterprises more control over the performance of their website.

    - Users experience faster page load times since images appear as soon as the sprite sheet is downloaded.
    - Enterprises see greater throughput and lower resource usage as fewer HTTP requests are made, reducing the amount of network congestion.

* A small practical example
    - Instead of using three separate images, we use this single image ("img_navsprites.gif"):

        navigation images

        With CSS, we can show just the part of the image we need.

        In the following example the CSS specifies which part of the "img_navsprites.gif" image to show:

        #home {
        width: 46px;
        height: 44px;
        background: url(img_navsprites.gif) 0 0;
        }


        Example explained:

            <img id="home" src="img_trans.gif"> - Only defines a small transparent image because the src attribute cannot be empty. The displayed image will be the background image we specify in CSS
            width: 46px; height: 44px; - Defines the portion of the image we want to use
            background: url(img_navsprites.gif) 0 0; - Defines the background image and its position (left 0px, top 0px)

* Conclusion

    - When it comes to increasing web performance, reducing the number of downloads is a strategy that enterprises depend on. For web services with millions of users, a sprite sheet could mean the difference between one million and one hundred million downloads.

From: https://www.maxcdn.com/one/visual-glossary/css-sprites/?utm_source=text

### Copied CSS Interview Questions that may not have worth to be asked in interview

1) What is CSS?

CSS stands for Cascading Style Sheet. It is a popular styling language which is used with HTML to design websites. It can also be used with any XML documents including plain XML, SVG, and XUL.

2) What is the origin of CSS?

SGML (Standard Generalized Markup Language) is the origin of CSS. It is a language that defines markup languages.

3) What are the different variations of CSS?

Following are the different variations of CSS:

    CSS1
    CSS2
    CSS2.1
    CSS3

4) How can you integrate CSS on a web page?

There are three methods to integrate CSS on web pages.

    Inline method - It is used to insert style sheets in HTML document
    Embedded/Internal method - It is used to add a unique style to a single document
    Linked/Imported/External method - It is used when you want to make changes on multiple pages.

5) What are the advantages of CSS?

    Bandwidth
    Site-wide consistency
    Page reformatting
    Accessibility
    Content separated from presentation

6) What are the limitations of CSS?

    Ascending by selectors is not possible
    Limitations of vertical control
    No expressions
    No column declaration
    Pseudo-class not controlled by dynamic behavior
    Rules, styles, targeting specific text not possible

7) What are the CSS frameworks?

CSS frameworks are the preplanned libraries which make easy and more standard compliant web page styling. The frequently used CSS frameworks are: -

    Bootstrap
    Foundation
    Semantic UI
    Gumby
    Ulkit
    Material
    Element UI

8) Why background and color are the separate properties if they should always be set together?

There are two reasons behind this:

    It enhances the legibility of style sheets. The background property is a complex property in CSS, and if it is combined with color, the complexity will further increase.
    Color is an inherited property while the background is not. So this can make confusion further.

9) What is Embedded Style Sheet?

An Embedded style sheet is a CSS style specification method used with HTML. You can embed the entire stylesheet in an HTML document by using the STYLE element. More details...

     <style>    
    body {    
        background-color: linen;    
    }    
    h1 {    
        color: red;    
        margin-left: 80px;    
    }     
    </style>    
           

10) What are the advantages of Embedded Style Sheets?

    You can create classes for use on multiple tag types in the document.
    You can use selector and grouping methods to apply styles in complex situations.
    No extra download is required to import the information.

11) What is a CSS selector?

It is a string that identifies the elements to which a particular declaration apply. It is also referred as a link between the HTML document and the style sheet. It is equivalent of HTML elements. There are several different types of selectors in CSS: -

    CSS Element Selector
    CSS Id Selector
    CSS Class Selector
    CSS Universal Selector
    CSS Group Selector

12) Name some CSS style components.

    Some CSS Style components are:
        Selector
        Property
        Value

13) What is the use of CSS Opacity?

The CSS opacity property is used to specify the transparency of an element. In simple word, you can say that it specifies the clarity of the image. In technical terms, Opacity is defined as the degree to which light is allowed to travel through an object. For example:

    <style>    
    img.trans {    
        opacity: 0.4;    
        filter: alpha(opacity=40); /* For IE8 and earlier */    
    }    
    </style>   
    // background-color: rgba(255, 153, 36, 0.5)
     It won't change the text's opacity.

How to set opacity in parent div and not affect in child div? 

<div class="parent">
<div class="child">
Hello I am child 
</div>
</div>


.parent{
    width:300px;
    height:300px;
    position:relative;
    border:1px solid red;
}
.parent:after{
    content:'';
    background:url('http://www.dummyimage.com/300x300/000/fff&text=parent+image');
    width:300px;
    height:300px;
    position:absolute;
    top:0;
    left:0;
    opacity:0.5;
}
.child{
    background:yellow;
    position:relative;
    z-index:1;
}

Refer: http://jsfiddle.net/tLqs6wxz/1/

14) Explain universal selector.

The universal selector matches the name of any of the element type instead of selecting elements of a specific type.

    <style>    
    * {    
       color: green;    
       font-size: 20px;    
    }     
    </style>    
        

15) Which command is used for the selection of all the elements of a paragraph?

The p[lang] command is used for selecting all the elements of a paragraph.

16) What is the use of % unit?

It is used for defining percentage values.

17) Name the property used to specify the background color of an element.

The background-color property is used to specify the background color of the element. For example:

    <style>    
    h2,p{    
        background-color: #b0d4de;    
    }    
    </style>  
       

18) Name the property for controlling the image repetition of the background.

The background-repeat property repeats the background image horizontally and vertically. Some images are repeated only horizontally or vertically.

    <style>    
    body {    
    background-image: url("paper1.gif");    
    margin-left:100px;    
    }    
    </style>  
       

19) Name the property for controlling the image position in the background.

The background-position property is used to define the initial position of the background image. By default, the background image is placed on the top-left of the webpage.

You can set the following positions:

    center
    top
    bottom
    left
    right

    background: white url('good-morning.jpg');  
    background-repeat: no-repeat;  
    background-attachment: fixed;  
    background-position: center;   

20) Name the property for controlling the image scroll in the background.

The background-attachment property is used to specify if the background image is fixed or scroll with the rest of the page in the browser window. If you set fixed the background image, then the image not move during scrolling in the browser. Let's take an example with the fixed background image.

    background: white url('bbb.gif');  
    background-repeat: no-repeat;  
    background-attachment: fixed;  

21) What is the use of ruleset?

The ruleset is used to identify that selectors can be attached with other selectors. It has two parts:

    Selector - Selector indicates the HTML element you want to style.
    Declaration Block - The declaration block can contain one or more declarations separated by a semicolon.

CSS syntax

22) What is the difference between class selectors and id selectors?

An overall block is given to class selector while id selectors take only a single element differing from other elements.
CSS Class Selector

    <style>    
    .center {    
        text-align: center;    
        color: blue;    
    }    
    </style>  
       

CSS Id Selector

    <style>    
    #para1 {    
        text-align: center;    
        color: blue;    
    }    
    </style>    
       

23) What are the advantages of External Style Sheets?

    You can create classes for reusing it in many documents.
    By using it, you can control the styles of multiple documents from one file.
    In complex situations, you can use selectors and grouping methods to apply styles.

24) What is the difference between inline, embedded and external style sheets?

Inline: Inline Style Sheet is used to style only a small piece of code.
Syntax

    <htmltag style="cssproperty1:value; cssproperty2:value;"> </htmltag>     
           

Embedded: Embedded style sheets are put between the <head>...</head> tags.
Syntax

    <style>    
    body {    
        background-color: linen;    
    }    
    h1 {    
        color: red;    
        margin-left: 80px;    
    }     
    </style>    
           

External: This is used to apply the style to all the pages within your website by changing just one style sheet.
Syntax

    <head>    
    <link rel="stylesheet" type="text/css" href="mystyle.css">    
    </head>    
           

25) What is RWD?

RWD stands for Responsive Web Design. This technique is used to display the designed page perfectly on every screen size and device, for example, mobile, tablet, desktop and laptop. You don't need to create a different page for each device.

<meta name="viewport" content="width=device-width, initial-scale=1.0">

If the browser window is 1080px or smaller, the background color will be pink:

@media only screen and (max-width: 1080px) {
  body {
    background-color: pink;
  }
}

27) What is the difference between logical tags and physical tags?

Physical tags are referred to as presentational markup while logical tags are useless for appearances.
Physical tags are newer versions, on the other hand, logical tags are old and concentrate on content.

28) What is the CSS Box model and what are its elements?

The CSS box model is used to define the design and layout of elements of CSS.

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

If the box-sizing property is set to content-box (default) and if the element is a block element, the content area's size can be explicitly defined with the width, min-width, max-width, height, min-height, and max-height properties.


The elements are:

    Margin - It removes the area around the border. It is transparent.
    Border - It represents the area around the padding
    Padding - It removes the area around the content. It is transparent.
    Content - It represents the content like text, images, etc.

The box-sizing CSS property sets how the total width and height of an element is calculated.

Refer: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen. This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added. For example, if you have four boxes with width: 25%;, if any has left or right padding or a left or right border, they will not by default fit on one line within the constraints of the parent container.

The box-sizing property can be used to adjust this behavior:

    content-box gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.
    border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.


29) What is the float property of CSS?

The CSS float property is used to move the image to the right or left along with the texts to be wrapped around it. It doesn't change the property of the elements used before it.

To understand its purpose and origin, let's take a look at its print display. In the print display, an image is set into the page such that text wraps around it as needed.
CSS Float Print Layout

Its web layout is also just similar to print layout.

30) How to restore the default property value using CSS?

In short, there is no easy way to restore to default values to whatever a browser uses.

The closest option is to use the 'initial' property value, which restores the default CSS values, rather than the browser's default styles.

31) What is the purpose of the z-index and how is it used?

The z-index helps to specify the stack order of positioned elements that may overlap one another. The z-index default value is zero and can take on either a positive or negative number.

An element with a higher z-index is always stacked above than a lower index.

Z-Index can take the following values:

    Auto: Sets the stack order equal to its parents.
    Number: Orders the stack order.
    Initial: Sets this property to its default value (0).
    Inherit: Inherits this property from its parent element.


If you set position to other value than static but your element's z-index still doesn't seem to work, it may be that some parent element has z-index set.

The stacking contexts have hierarchy, and each stacking context is considered in the stacking order of the parent's stacking context.

32) Explain the difference between visibility: hidden and display: none?

visibility: hidden hides the element, but it occupies space and affects the layout of the document.

     <!DOCTYPE html>  
    <html>  
    <head>  
    <style>  
    h1.vis {  
        visibility: visible;  
    }  
      
    h1.hid {  
        visibility: hidden;  
    }  
    </style>  
    </head>  
    <body>  
    <h1 class="vis">It is visible</h1>  
    <h1 class="hid">It is hidden</h1>  
      
    <p>Note - Second heading is hidden, but it still occupy space.</p>  
    </body>  
    </html>  
           

display: none also hides the element but not occupy space. It will not affect the layout of the document.

    <!DOCTYPE html>  
    <html>  
    <head>  
    <style>  
    h1.vis {  
        display: block;  
    }  
      
    h1.hid {  
         display: none;  
    }  
    </style>  
    </head>  
    <body>  
    <h1 class="vis">It is visible</h1>  
    <h1 class="hid">It is hidden</h1>  
      
    <p>Note - Second heading is hidden and not occupy space.</p>  
    </body>  
    </html>  
       

33) What do you understand by W3C?

W3C stands for World Wide Web Consortium. Its purpose is to deliver the information of the World Wide Web. It also develops rules and guidelines for the Web.

34) What is tweening?

It is the process of generating intermediate frames between two images.

It gives the impression that the first image has smoothly evolved into the second one.

It is an important method used in all types of animations.

In CSS3, Transforms (matrix, translate, rotate, scale) module can be used to achieve tweening.

Rather than telling the program exactly how to render each frame, the animator would tell the program what position the objects are in at two "keyframes" and the program would figure out how to transition the objects between those two points.

In CSS we usually use the term "animate", but the concepts are the same. MDN has a good introduction here. This simple example (from the article) demonstrates how to make a <p> element slide in from off the right edge of the browser window:

p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}


35) What is the difference between CSS2 and CSS3?

The main difference between CSS2 and CSS3 is that CSS3 is divided into different sections which are also known as modules. Unlike CSS2, CSS3 modules are supported by many browsers.

Apart from that, CSS3 contains new General Sibling Combinators which is responsible for matching the sibling elements with the given elements.


Enlist the various Media types used?

Different media has different properties as they are case insensitive.

They are:

    Aural – for sound synthesizers and speech
    Print – gives a preview of the content when printed
    Projection- projects the CSS on projectors.
    Handheld- uses handheld devices.
    Screen- computers and laptop screens.


1) Explain what is Sass? How it can be used?

Sass stands for Syntactically Awesome Stylesheets and was created by Hampton Catlin. It is an extension of CSS3, adding nested rules, mixins, variables, selector inheritance, etc.

Sass can be used in three ways

    As a command line tool
    As a standalone Ruby module
    As a plugin for any Rack-enabled framework

2) List out the key features for Sass?

Key features for Sass include

    Full CSS3-compatible
    Language extensions such as nesting, variables, and mixins
    Many useful functions for manipulating colors and other values
    Advanced features like control directives for libraries
    Well-formatted, customizable output

3) List out the Data Types that SassScript supports?

SassScript supports seven main data types

    Numbers ( eg; 1,5 ,10px)
    Strings of texts ( g., “foo”, ‘bar’, etc.)
    Colors (blue, #04a3f9)
    Booleans (true or false)
    Nulls (e.g; null)
    List of values, separated by space or commas (g., 1.5em, Arial, Helvetica etc.)
    Maps from one value to another (g., ( key 1: value1, key 2: Value 2))

4) Explain how to define a variable in Sass?

Variables in Sass begin with a ($) sign and variable assignment is done with a colon(:).

5) Explain what is the difference between Sass and SCSS?

The difference between Sass and SCSS is that,

    Sass is a CSS pre-processor with syntax advancements and an extension of CSS3
    Sass has two syntax
    The first syntax is “SCSS” and it uses the .scss extension
    The other syntax is indented syntax or just “Sass” and it uses the .sass extension
    While Sass has loose syntax with white space and no semicolons, the SCSS resembles more to CSS

Any CSS valid document can be converted to Sass by simply changing the extension from.CSS to.SCSS.

Sass_Logo_Color.svg

6) What Selector Nesting in Sass is used for?

In Sass, selector nesting offers a way for stylesheet authors to compute long selectors by nesting shorter selectors within each other.

7) Explain what is a @extend function used for in Sass?

In Sass, the @EXTEND directive provides a simple way to allow a selector to inherit the styles of another one. It aims at providing a way for a selector A to extend the styles from a selector B. When doing so, the selector A will be added to selector B so they both share the same declarations.  @EXTEND prevents code bloat by grouping selectors that share the same style into one rule.

8) Explain what is the use of the @IMPORT function in Sass?

The @IMPORT function in Sass

    Extends the CSS import rule by enabling import of SCSS and Sass files
    All imported files are merged into a single outputted CSS file
    Can virtually mix and match any file and be certain of all your styles
    @IMPORT takes a filename to import

9) Why Sass is considered better than LESS?

    Saas allows you to write reusable methods and use logic statements, e., loops, and conditionals
    Saas user can access Compass library and use some awesome features like dynamic sprite map generation, legacy browser hacks and cross-browser support for CSS3 features
    Compass also allows you to add an external framework like Blueprint, Foundation or Bootstrap on top
    In LESS, you can write a basic logic statement using a ‘guarded mixin’, which is equivalent to Sass if statements
    In LESS, you can loop through numeric values using recursive functions while Sass allows you to iterate any kind of data
    In Sass, you can write your own handy functions

10) Explain what is the use of Mixin function in Sass? What is the meaning of DRY-ing out a mixin?

Mixin allows you to define styles that can be re-used throughout the stylesheet without needing to resort to non-semantic classes like .float-left.

DRY-ing out of a mixing means splitting it into dynamic and static parts.  The dynamic mixin is the one that the user actually going to call, and the static mixin is the pieces of information that would otherwise get duplicated.

11) Explain what Sass Maps is and what is the use of Sass Maps?

Sass map is a structured data in a hierarchical way and not just a bunch of variables. It can help in organizing the code. Some great use of Sass are

    It is very useful when dealing with layers of elements in your project
    It can be helpful in color management when there is long list of different color and shade
    Use icon map for various social media icons for example: facebook: ‘\e607’ or twitter: ‘\e602’
    Unlike other programming libraries, Sass map will consist only of code that is going to be used

12) Explain how Sass comments are different from regular CSS?

Syntax for comments in regular CSS starts with /* comments…*/, while in SASS there are two type of comment, the single line comments // and the multiline CSS comments with /* */.

13) Does Sass support inline comments?

Single line comments // will be removed by the .scss pre-processor and won’t appear in your .css file

While the comment */ are valid CSS, and will be preserved between the translation from .scss to your .css file

14) How interpolation is used in Sass?

In Sass, you can define an element in a variable and interpolate it inside the Sass code.  It is useful when you keep your modules in separate files.

15) Explain when can you use the %placeholders in Sass?

%placeholders in Sass is useful when you want to write styles that were meant to be extended, but you don’t want the base styles to be seen in output CSS styles

16) Is it possible to nest variables within variables in Sass?

Interpolation of variables names is not possible currently in Sass. However, you may use interpolation of placeholders.

17) What are Sass cons and pros?
Pros:

    Sass is easy to learn especially for them who has a background of Python, Ruby or Coffescript and place using functions, writing mixins
    CSS can be easily converted to Sass
    Throughout the project, you don’t have to repeat similar CSS statements using @extend attribute
    It allows to define variables that are usable throughout the entire project
    It keeps your responsive project more organized

18) Explain what is LESS?

LESS is dynamic style sheet producing language. LESS is a CSS pre-processors and extends CSS with dynamic behaviour. It allows for variables, mixins, operations and functions. LESS runs on server side and client side both.

19) Explain how to create LESS file and where to store it and compile it?

Creating or storing LESS file is similar to creating/storing CSS file. A new LESS file can be created with a .less extension, or you can rename existing .css file to .less file. You can write LESS code with existing CSS code.

The best way of creating it inside ~/content/ or ~/Styles/ folder

20) In what ways LESS can be used?

    Via npm LESS can be used on the command line
    Download as a script file for the browser
    For third party tools, it is used

21) How variable is represented in LESS?

lessinterviewquestions

LESS allows variables to be defined. In LESS, the variable is represented as @sing. While, variable assignment is done with a: (colon) sing. The values of the variables are inserted into the CSS output file as well as minified file.

 

22) Explain how Mixins is useful?

Mixins enable embedding all the properties of a class into another class by including the class name as one of its properties. It is just like variables but for whole classes. One of the closest analogy will be with Vue mixins. 

23) Explain how can set code in a watch mode when you run LESS.js in an HTML5 browser?

If you run LESS.js in an HTML5 browser, it will use local storage to cache the generated CSS. However, from the developer point of view they cannot see the changes they made instantly. In order to see your changes instantly, you can load program in development and watch mode by following JavaScript

<script type= “text/javascript”>

less.env = “development “ ;

less.watch () ;

</script>

24) Explain what is the meaning of nesting in LESS programming?

Nesting in LESS is clustering of statements inside other statements, so it forms a group of related code. In other words when we add a code snippet and add another code inside it, then that code snippet is called nesting.

25) Mention what are the color channel functions used in LESS?

    hue
    saturation
    hsvhue
    saturation
    hswalue
    red
    green
    blue
    alpha
    luma
    luminance

26) Explain what is data-uri in LESS?

In CSS, Data URI’s is one of the best technique, it allows developers to avoid external image referencing and instead embed them directly into a stylesheet. Data URIs are the excellent way to reduce HTTP requests

27) Explain what “Source Map Less Inline”?

The “ Source Map Less Inline” option indicates that we should include all of the CSS files into the sourcemap. Which means that you only need your map file to get to your original source.

28) Explain what is the use of Extend “all” in LESS?

When you specify all keyword last in an extend argument, it tells LESS to match that selector as part of another selector.

29) Explain what is “StrictImports” in LESS?

The strictImports controls whether the compiler will allow a @import inside of either @media blocks or other selector blocks

30) List out the differences between LESS and Sass?

Each style-sheet language is good in their perspective and use; however there are few differences in their usage.
LESS 	Sass
– LESS uses JavaScript and processed at client-side 	– Sass is coded in Ruby and thus processed to server-side
– Variable names are prefaced with the @symbol 	– Variable name are prefaced with $ symbol
– LESS does not inherit multiple selectors with one set of properties 	– Sass inherits multiple selectors with one set of properties
– LESS does not work with “unknown” units neither it returns syntax error notification for incompatible units or maths related syntax error 	– Sass allows you to work with “unknown” units also returns a syntax error notification for incompatible units

31) What are the similarities between LESS and Sass?

Between LESS and Sass the similarities are

    Namespaces
    Color functions
    Mixins and parametric mixins
    Nesting capabilities
    JavaScript evaluations

32) Explain what is the use of &combinator ?

&combinator concatenates nested selector with the parent selector. It is useful for Pseudo classes such as :hover and :focus

33) Explain what is the use of operations in LESS?

Operations can be used for performing functions like

    Simple Mathematical operators: +, – , *, /
    Color functions
    Math functions
    Any size or colour variable can be operated upon

34) Explain what is the use of Escaping?

The use of escaping in LESS

    When you need to output CSS that is not valid CSS syntax
    Proprietary syntax not recognized by LESS
    LESS compiler will throw an error if not used
    Simple prefix with ~ symbol and put in quotes

35) What does LESS elements contains?

Less elements contain commonly used mixins like

    .gradient
    .rounded
    .opacity
    .box-shadow
    .inner-shadow

36) List out alternatives against LESS?

    SASS: Syntactically Awesome Stylesheets
    SCSS: Version.2 of SASS
    Stylus

37) Explain how you can invoke the compiler from the command line?

You can invoke the compiler from the command line in LESS as

$ lessc styles.less

This will output the compiled CSS to stdout; you may then redirect it to a file of your choice

$ lessc styles.less > styles.css

38) What is the use of e () function?

With the help of e() function you can escape a value so that it passes straight through to the compiled CSS, without being noticed by the LESS compiler.

39) Explain how you can pre-compile LESS into CSS?

To pre-compile LESS into CSS you can use

    Run less.js using Node.js : By using the Node.js JavaScript framework you can run the less.js script outside the browser
    Use lessphp: For the implementation of the LESS compiler written in PHP, lessphp is used
    Use online Compiler: Use online compiler for quick compilation of LESS code without installing a compiler
    Less. app (for Mac users): Less.app is a free tool for Mac users, this tool auto compiles them into CSS files

40) Explain how merge function is used in LESS?

For aggregating values from multiple properties into a space or comma separated list under a single property LESS is used. It is useful for properties such as transform and background

41) How can you create a loop structures in LESS?

A mixin can call itself in LESS. Such recursive mixins, when combined with Pattern matching and Guard Expressions, can be used to create various iterative/loop structures.

42) Why do we need parametric mixins in LESS?

Parametric mixins are same like standard mixins. The only difference is that parametric mixins take parameters like functions in JavaScript. After determining parameters to the mixins, you get more control over mixins.

Cons:

    White space sensitive
    No inline rules




#Flexbox - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

The Flexbox Layout (Flexible Box) module (a W3C Candidate Recommendation as of October 2017) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.

Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

Note: Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts. 

display

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

.container {
  display: flex; /* or inline-flex */
}

Note that CSS columns have no effect on a flex container. 

By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

.item {
  order: <integer>; /* default is 0 */
}

flex-direction

the four possible values of flex-direction being shown: top to bottom, bottom to top, right to left, and left to right
This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

.container {
  flex-direction: row | row-reverse | column | column-reverse;
}

    row (default): left to right in ltr; right to left in rtl
    row-reverse: right to left in ltr; left to right in rtl
    column: same as row but top to bottom
    column-reverse: same as row-reverse but bottom to top

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}

    nowrap (default): all flex items will be on one line
    wrap: flex items will wrap onto multiple lines, from top to bottom.
    wrap-reverse: flex items will wrap onto multiple lines from bottom to top.


The following property will enable soft word wrap in the container:

{
    white-space: initial
}
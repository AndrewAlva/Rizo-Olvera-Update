# Frontend boilerplate (Lighthouse optimized)
This is a quickstart for small frontend projects aiming to be shipped fast but still following best practices for performance and cool experiences which includes animation and experimental interactions.

Currently more focused on single pages, but still useful for multiple pages websites.

## Google Lighthouse optimizations included:
### 1, Defer scripts
* Inline "critical" CSS & JS to avoid render blocking
* Defers load of other assets and scripts


### 2. Lazy load images ([lazysizes.js by Alexander Farkas](https://github.com/aFarkas/lazysizes))
* Includes standard responsive image support (picture and srcset)
* Responsive image support
* SEO improved: lazysizes does not hide images/assets from Google.
* For more info about this library, check the GitHub repo mentioned above


### 3. PWA setup files and assets
* Service Worker
* Manifest
* Icons examples


## Frontend tools and features
### I. Single production minified CSS and JS files


### II. Modular approach
* Using jade preprocessor for HTML and
* SCSS for CSS files.
* Brunch will take care of compiling all js files placed in `js` folder into a single file and uglify it.


### III. Grid systems (2) based on SCSS vars and formulas/functions to set and calculate:
* Flexible features:
	* Columns (as many as you want)
	* Gutters
	* Left/right margin of the whole grid

* a) Media queries oriented (grid-media-queries.scss)
	* Define multiple tresholds based on 6 prestablished media queries:
		* xs => 	$mobile-large-min-width: 	576px; 		
		* sm => 	$tablet-min-width: 			768px; 			
		* md => 	$small-laptop-min-width: 	1025px; 		
		* lg => 	$laptop-min-width: 			1200px; 			
		* xl => 	$small-desktop-min-width: 	1441px;		
		* xxl => 	$desktop-min-width: 		1650px; 			

* b) 2 different versions: Mobile (Touch devices) & Desktop (Non-touch devices) (grid-2-versions.scss)* [Coming Soon]
	* Important: still in progress.
	* Oriented for viewport proportion designs (`vw` and `vh` units)
	* Also useful to create 2 different styles based on how will user interact (touch or with a pointer device like a mouse, trackpad or pen, etc.)
	* This interaction requires a mobile detection library like [Mobile-Detect by Şerban Ghiţă](https://github.com/serbanghita/Mobile-Detect) or [mobile-detect.js by Heinrich Goebl](https://github.com/hgoebl/mobile-detect.js)


### IV. Cascade animations SCSS system (`cascade-animations.scss`)
* Delay system based on CSS attributes
* Separated on 2 possible scenarios: Mobile and Desktop
* Media query breakpoint is variable for you to decide when delays should change


### V. JS listener for elements inside viewport (`inview.js`)


### VI. Complete list of metatags for sharing crawlers
* Open graph tags (og:--)
* Twitter tags
* Favicon tags
* Google Structured Data Tags


### VII. Favicon examples
* Full list of favicon sizes
* sitemanifest setup file


### VIII. Typefaces hierarchy (`typefaces.scss`)
Global hierarchy to facilitate texts styling and follow DRY principle.


### IX. SCSS mixins
* -webkit- prefixes included in most common properties to expand coverage.
* Short writing for:
	* Flexbox
	* Keyframe animations
	* Transforms
	* Transitions and Delays


### X. Throttle & Debounce JS optimizers from [Lodash](https://lodash.com/)


## Basic server configuration (only for Apache servers)
### .htaccess example
* HTTPS redirection
* .html suffix removal



## Upcoming updates
* Optional frontend features* [Coming Soon]
	* Smooth vertical scroll (full page)
	* Smooth vertical scroll (per section)
	* HTML 5 Canvas 2D
	* WebGL Basic Utilities
	* Horizontal scroll (on desktop devices)



* Compatible libraries already tested* [Coming Soon]

	* These libraries have been used in combination with this boilerplate, but they are not included in the core, you must integrate them by yourself downloading the files into your repo or using a CDN, as you prefer.

	* [locomotive-scroll](https://locomotivemtl.github.io/locomotive-scroll/) by Locomotive
	* [three.js](https://threejs.org/) by Ricardo Cabello (aka Mr.doob)
	* [blotter.js](https://blotter.js.org/) by Bradley Griffith
	* [p5.js](https://p5js.org/) started by Lauren McCarthy


* Overall optimization with [Juan Fuentes](https://codepen.io/JuanFuentes/).





# How to use it: First Steps

## Development Environment (Built on npm and Brunch)
Hi there, to use this boilerplate you must install npm and brunch in your computer. The coded is oriented to use "modules" and "objects" of HTML and CSS with Jade and SCSS. The JS syntax you will find in default files is ES5 (ECMAScript5).

### Getting to know Brunch

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X (and if you have Homebrew, if you don't go or work over Windows or Linux go check directly the documentation at Node)
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)


### Installation of this repo

1. Clone this repo in your dev environment, you can simply run:
```console
foo@bar:~$ git clone https://github.com/AndrewAlva/Brunch_Sass_Jade_Boilerplate.git
```

2. Then install node modules through npm:
```console
foo@bar:~$ npm install
```

And that's it; now you are able to work on this repo.

Also, you can watch files and compile them live while you're working with this command:
```console
foo@bar:~$ brunch w -s --port 3000
```
The last number is the port where you'd like to view the page, you can use whatever you want: 8000, 1111, etc. For mor commands visit [Brunch documentation.](http://brunch.io/docs/commands)


### Get final files for production

When you finish editing the project, you can run this code to get the final assets for production:
```console
foo@bar:~$ brunch build --production
```

This builds minified files ready to upload to server.



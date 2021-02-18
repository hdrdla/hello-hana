---
path: /blog/how-to-add-custom-font-shopify
title: How to Add a Custom Font to Shopify
date: 2020-09-08
month: 2020-09-01
year: 2020-01-01
featuredImage: ./how-to-add-a-custom-font-to-shopify.jpg
tags: ["shopify", "tutorial", "shopify101"]
published: true
---

import Gist from "react-gist"

You don't need an app to add a custom font to Shopify. Let me walk you through the steps of adding font files and using Adobe fonts in your Shopify project.

In this article, we will:

- Add the font files to our theme
- Import these fonts into our css styles
- Define how we want these fonts used

<br/><br/>

## Custom Fonts on Shopify

<br/>

### Step 1: Add the font

If you are importing an Adobe font, skip to step 2.

If you have the **web font** files, you want to head to your theme code. Go to **Online Store → Actions → Edit Code**. Here you'll see a list of code files. Scroll down to the **Assets** folder and click "**Add a new asset**". Here you need to upload your web font files. I'll be adding "The Braggest". I add four file types: **.eot**, **.ttf**, **.woff**, and **.svg**.

### Step 2: Import font to styles

Find your **theme.scss.liquid** file where all your theme styles are held. If you are using a premium theme, check for a **custom.css** file instead. Scroll down to the bottom of the file.

If your fonts were added to assets, add the following code with your font file names. If you are using an Adobe font, put the code from your Adobe font project in the file instead. See the last line of code and replace 'xxxx' with your unique project code.

<Gist id='1cb8b6e86fbcdd0477ce353214c11f54' file='shopify-import-font.txt' />

<br/>

### Step 3: Define font usage

The font I'm using is cursive and I want it used only for the main headings on the page - my H1 and H2 headings. I'll go through the code defining how we want the font used step by step and give the final code at the end.

**I need to define:**

- Where I want this font used: `h1, h2 {font-family: 'TheBraggest';}`
- Provide a backup font: `h1, h2 {font-family: 'TheBraggest', "Twentieth Century", sans-serif ;}`
- The font size: `font-size: 5em`
- The font size on mobile: `@include media-query($small) {font-size: 2.5em;}`
- I don't want my titles on my product pages to appear in this font as it is difficult to read with more than one word: `h1:not(.product-single__title)`
- Remove the uppercase style of these headings: `text-transform: none;`

**This brings me to:**

<Gist id='1cb8b6e86fbcdd0477ce353214c11f54' file='shopify-use-font.txt' />

<br/>

I hope that was easy enough! Keep in mind that you may have to adjust some of the words such as the media-query `$small` and the product title class `.product-single__title` depending on your theme. This was done with Debut theme.

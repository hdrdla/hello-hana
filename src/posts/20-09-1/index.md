---
path: /blog/shopify-page-speed-report
title: Shopify's New Page Speed Report
date: 2020-09-01
month: 2020-09-01
year: 2020-01-01
featuredImage: ./improve-shopify-website-speed.jpg
tags: ["shopify"]
published: true
---

You may have noticed in the past week that Shopify now displays your page speed score in the Admin section of your site. You may also have been horrified to see a score below 50, thinking that you’ve heard that a slow website reduces conversions, is bad for SEO and you must have lost so many sales because of this! That’s unlikely… but let’s dig into this new page speed report.

By the way, if you’re looking for your speed report, you can find it by going to Online Store → Themes and your “Speed Score” will be under your active theme.

Shopify’s speed report uses Google PageSpeed Insights to deliver your page speed score. The tool runs an audit on the page and generates a report on how well you did, then offers some _(confusing)_ suggestions of how to improve the page. Speed reports can paint an ugly picture of your website and it can be easy to get caught up in the nightmare of speed optimization.

## Making Sense of Page Speeds

### Testing Shopify Stores

When I look at my Shopify customers’ stores, I see scores between 22 and 52. Shopify says these scores are at the “Same speed as similar stores”. I was curious so I installed a fresh, unedited version of a theme and received a score of 63. There were no images or content uploaded to this theme yet. This tells me that the score has a lot to do with factors I cannot control.

With some more testing, I checked one of my client’s stores. The report recorded a First Contentful Paint at 2.9 seconds and Time to Interactive at 5.3 seconds. I loaded the website on an Incognito window and it loaded within 2 seconds. Now, if I immediately scrolled down to the bottom of the page, then no, all the images and Instagram feed were not loaded. But this isn’t how customers use the site. The site was useable within 2 seconds. That’s considered super fast!

What really matters is how quickly your page loads. As you read through the report, remember that it’s just a tool and not a determining factor of the customer experience. Focus on the perceived speed by your customers. That is - what speed they experience when they visit your website. Visit your website from an incognito browser window and see how quickly it loads. If it’s under three seconds, you’re good to go. Over three seconds, and you have some work to put in.

### Comparing Reports

Shopify is using Google PageSpeed Insights to deliver your page speed score. If you test your website speed on other reputable platforms such as <a href="https://gtmetrix.com/" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">GTMetrix</a> or <a href="https://tools.pingdom.com/" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">Pingdom</a>, you’ll see that you receive a different score on each platform. I’ll use my own website as an example. It’s a Gatsby site, with no e-commerce but it still proves a point.

- On **Google**, I received a score of **74**. First Contentful paint: **2.1** seconds. Time to interactive: **7.7** seconds.
- On **Pingdom**, I received a score of **71** or a grade of **C**. Load time: **687ms**.
- On **GTMetrix** I received a score of **91** or a grade of **A**. Fully loaded time: **3.6** seconds.

<br/>

These scores and load times are all over the place, and it can be very confusing when each tool is measuring something different, and giving a different weight to each of these measurements to create a score. That’s why it’s so important to just use these reports as information to process, but not to obsess about. Your visitors don’t care about your score. They only care about what they see when they visit the site.

It’s true that Google considers your load time as a ranking factor in its search engine. But this is load time, not your score, and it is not the sole determining factor of ranking. There are so many other elements that go into where you rank on Google, and speed could just be the final tie-breaker if two sites are equal on all other fronts. No one except people who work at Google know exactly how much of an influence your load time has as a ranking factor.

### What you can’t control

The truth is that you have no control over many of the things that Google is assessing speed on. For example, the report recommends that I optimize external files coming from Google Analytics. I have no control over that. Note that it’s saying there’s room for improvement on Google’s own tool! Your score is also negatively impacted for using a CDN when CDNs are what allow your page to load quickly in the first place.

A common recommendation is to “Remove unused CSS”. Your theme comes with many features and code that allow for maximum flexibility to build your site. You cannot use all these features at once, and many styles apply to different types of pages, but the entire CSS code is loaded anyways. Unless you go through the theme and delete all unused code, or build your own theme from scratch, this is an unrealistic recommendation.

### What you can control

Some steps to reduce the load time of your website:

- **Optimize image sizes:** Before uploading, re-save your images to the appropriate size. Consider the largest size that the images will appear to your customer, and save at that size. From there, you can also compress the image with a tool like <a href="https://tinypng.com/" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">TinyPNG</a>. You can also use an app such as <a href="https://apps.shopify.com/avada-seo-suite" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">AVADA SEO</a> that compresses images.
- **Choose your images wisely:** Keep slideshows to 2-3 images. Don’t include all the product images you have, but just enough to show what the customer wants to see. No redundancy.
- **Remove unused or unnecessary apps:** Weigh the cost of speed and the benefits of the app to decide if the app is worth keeping or not. Some apps leave code in your theme even after being uninstalled and you may need to contact the app developer to remove the code for you.
- **Remove content:** Is your home page very long? You can use a heat map tool to see how far down the page customers are scrolling, and what features they are actually using. Removing content will allow you to load less things on the page, and result in a faster load time.

### Let’s be real

Consider your audience. If your customers are mostly from countries with fast internet speeds, then you should have less concern about your score. However, if your customer base is in regions with slower internet speeds, then you will need to give more consideration to your load speed.

Read the recommendations from speed reports carefully and consider if they are possible, or worth your time. Page speed reports are just a tool to help you understand your site better, but they should not be relied on to assess the performance of your site.

<br/><br/>

#### You might also like...

- <a href="https://hanadrdla.com/blog/why-your-newsletter-email-list-is-valuable-to-your-shopify-business" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">Why your newsletter email list is the most valuable part of your Shopify business</a>
- <a href="https://hanadrdla.com/blog/how-to-design-a-navigation-menu-that-sells" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">How to Design a Navigation Menu that Sells</a>

---
path: /blog/how-to-make-your-website-ecofriendly
title: How to Build an Eco-Friendly Website
date: 2021-01-12
month: 2021-01-01
featuredImage: ./build-an-eco-friendly-website.jpg
tags: ["web design"]
published: true
---

Most people probably don’t think about how their website can be affecting the environment. We tend to highlight the ‘eco-friendly’ features of products, but ignore the fact that the internet is a huge energy user. If you’re concerned about your carbon footprint, then your website shouldn’t be overlooked.

The internet has a huge environmental impact. In fact, 2% of global carbon emissions come from electricity used by the internet; an impact equal to that of the aviation industry, and greater than that of the entire United Kingdom. This is due to the energy needs of our devices, data centres and telecommunication networks that the internet needs to function. Emissions are only growing as we access the internet on more devices, it becomes accessible to more people, and streaming services increase. 

What impact do you have on this? Well, the energy used by the internet breaks down to 48% used in the data centre, 14% used in the telecommunication networks, and 38% on the end user’s device (<a href="https://www.aceee.org/files/proceedings/2012/data/papers/0193-000409.pdf" target="_blank">see those stats here</a>). This suggests that at a minimum, part of that 38% falls partially under the responsibility of the web developer or designer.

The benefits of ‘greening’ your website extend to your customers. Faster loading time and better site organization create a better user experience, a lower bounce rate and improved SEO. 

In this post I’ll go through some of the ways you, as a web designer can reduce carbon emissions of the websites you build. I’ll be talking mostly about the front-end aspects of your website since that’s what I’m most familiar with. 

### Measure your impact

First, measure the current environmental impact your website has. Basically this means measuring the energy usage to load your website. Use <a href="https://www.websitecarbon.com" target="_blank">WebsiteCarbon.com</a> or <a href="https://www.ecograder.com" target="_blank">EcoGrader.com</a> to evaluate how data transfer and CPU usage translate into specific CO2 emission figures of your home page. By using your website’s analytics to see how many visitors your website receives, you can calculate your website’s annual CO2 emissions. You can also see if the data centre your host uses is run with renewable energy or not. Now that you’ve measured your website’s emissions, you can set targets to reduce carbon emissions.

### Switch to Renewable Energy

Changing your website host to one powered by renewable energy will reduce your emissions. When I tested my own website, Website Carbon said that my website would emit 9% less CO2 if I switched to green hosting. 

In recent years, Google has been a leader in greening its energy supply. It reached a goal of using 100% renewable energy globally. That’s huge considering the amount of people who use Google products. Fun facts: Google data centres use 50% less energy than a typical data centre, and their net operational carbon emissions in 2016 were zero thanks to their renewable energy and carbon offset programs. 

Use <a href="https://www.thegreenwebfoundation.org/" target="_blank">The Green Web Foundation</a> to search for hosting providers that use green energy or a hosting provider that’s partnered with Google Cloud Platform. Carefully review your host’s commitment to the environment. <a href="https://cloud.google.com/sustainability/" target="_blank">Google’s promise</a> of 100% renewable energy for its data centres is a no-brainer. 

### Design with speed in mind

Simply reducing data transfer will reduce energy use and emissions. This will create a faster and better experience for your customers as well. When building your website, keep these points in mind:

#### Images & videos
- Only use the images you need.
- Upload images with the appropriate dimensions, rather than depending on CSS to resize them.
- Compress files and images to reduce file sizes without loss of quality. I use <a href="https://tinypng.com/" target="_blank">TinyPNG.com</a> for this and usually can reduce image sizes by 85%. <a href="https://wordpress.org/plugins/wp-smushit/" target="_blank">Smush</a> is another one I use for Wordpress websites.
- Lazy load images. This means images are only loaded as the user scrolls down the page. 
- Stop using image slideshows or carousels. Instead, use one strong image. Research has shown that <a href="https://shouldiuseacarousel.com" target="_blank">most visitors do not engage with slideshows</a>. Avoiding them will reduce images and Javascript needing to be loaded.
- Use vector graphics and CSS effects for an engaging experience, rather than JPEGS and GIFs.
- Avoid autoplaying videos to stop unnecessary loading. 
- Use a lower resolution for videos.
<br />
<br />

#### Code
- Write efficient code. Learn which operations are more expensive than others.
- Avoid excessive usage of divs, classes and CSS. 
- Minify html, CSS and JS files.
<br />
<br />

#### General
- Improve site navigation to make it easy for visitors to find information, thereby loading fewer pages.
- Make sure all content is providing value.
- Reduce the number of scripts, plugins and apps. Decide what you really need and make sure uninstalled apps have had the code removed.
- Minimize using custom fonts, or use web-safe fonts to speed up loading times.
- Use web caching. This will temporarily store a copy of your website closer to the user to ensure that visitors do not need to fetch fresh content from your website every time they visit.
- Use a CDN datacenter located near your users. This will allow you to send data with a shorter distance, thereby using less energy.

<br />
<br />

Now that you know how to green your website, get going! Some things will be necessary to keep to help your customers, such as embedded maps, so carefully evaluate how to improve the customer experience. A green website benefits the environment, your customers and shows your business’s commitment to sustainability. And when you’re ready, head over to <a href="https://www.sustainablewebmanifesto.com/" target="_blank">Sustainable Web Manifesto</a> to declare your commitment to create a greener web.

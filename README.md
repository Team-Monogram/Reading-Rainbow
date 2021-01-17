## Inspiration
One of our team members is a big fan of reading light novels online. Fan-created light novels are much like blogs or fanfictions in that they are works displayed on websites through html. They do not usually come in the form of downloadable files like PDFS or images, and require using websites that often mine your information. Furthermore, reading light novels may be complicated due to the interface of the websites that host them (such as numerous ads or unfriendly UI), making reading a tedious experience. For these reasons, we wanted to create an application that could consolidate and simplify light novels for easy reading without the headaches created by the sites that they are usually hosted on. 

## What it does
Reading rainbow utilizes a web-scraping script to extract the text from the HTML code on light novel websites, and displays it on an external site. One of our goals for this project was to have it qualify as a Progressive Web App (PWA), meaning that it has the feel and functionality of an actual native app. This was important to us especially because we wanted to create a web app that would feel easy-to-use and comfortable on any kind of device, as most people like to do reading on-the-go with their tablets or cell phones.

## How We built it
We started by writing out the basic python scripts for web-scraping. Here we got the html files for the individual light novels on websites such as 'Royal Road.' Then we wanted to create a simple and aesthetically pleasing UI for a reader that would load the HTMLs and display the individual chapters.

## Challenges We ran into
One of the challenges that we ran into was creating the specific functions for relocating to the next chapter of a light novel. Light novels are generally updated by chapters, and each chapter has its own unique url. Rather than extracting the url for every single chapter, we created 'previous_chapter' and 'next_chapter' functions that could identify the url of the chapters preceding and following the current one. However, when it came to the test cases of the first chapter and the last chapter, it was difficult to modify these functions into returning "error" when there was no preceding chapter or following chapter. Furthermore, for the chapters that had both a preceding and following chapter, we needed to figure out a way to distinguish between the two urls, which proved to be challenging.

## What We learned
In the process of building this application, we learned a lot about creating PWAs and meeting the standards necessary for progressive web apps. We also used Google Cloud Platform for some of our functionality, which was new to some of our team members. Two of us are beginners to coding, so seeing a project through from conception to finish was an education in itself. 

One thing we wanted to have for our application was a pleasing UI for users to be able to easily use. We wanted Reading Rainbow to be easy on the eyes. We know that being engrossed in a book can be captivating, and we didn't want to have any eye strain on the user. So creating a mock up on Figma, we leapt to google on figuring out what HTML, CSS and Javascript were and how to use them to create what we wanted. 

## What's next for Reading Rainbow 
The next step for Reading Rainbow is to expand into other kinds of works other than light novels. For example, fan fictions and blogs were previously mentioned as being similar to light novels, and could easily be a new direction for Reading Rainbow. We believe Reading Rainbow could be a place for users to view any literary works they desired, in an easy and relaxed fashion.

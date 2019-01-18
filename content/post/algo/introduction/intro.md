---
title: "A Beginner friendly, practical introduction to algorithms and data structures"
date: 2018-10-27T17:01:50+02:00
draft: false
---

# The friendly neighbor

Let's say you have downloaded an application and notice that it started to slow down your computer/mobile so much that you are not able to use the computer when the application is open. Obviously, you would delete the application, rate it poorly and would never recommend it to anyone. Whenever you write any code or build an application yourself, the application will most likely run alongside other apps. Your app will need to be a good and friendly neighbor or it will be kicked out mercilessly. Computing resources like CPU and memory are not unlimited and with applications now running on mobiles and low power devices, using computing resources efficiently is of utmost importance for gearing towards success.

> Be a friendly neighbor to your fellow apps. Be Spiderman if you can.

# A quick buck

Even when you are writing server side applications which are hosted on hardware that the user never sees slowing down, there are multiple reasons why you want to optimize your applications to behave optimal and use optimal resources. First and foremost, if your application is not optimal, users who access your application can feel the lag waiting for a response from the server. Second, and perhaps more important, is that as users or usage grows, if more resources are being used, scaling the service will be costly to operate as you will have to pay more for server costs. Engineers from every company that serve more than a few thousand users to millions of users are constantly looking for ways to bring down the server costs by using efficient algorithms. In the modern day SaaS business, saving server costs is how a business can stay lean and offer value to customers.

> Be quick and also save a buck or more every month.

# Algorithms before computers

The application you interact with might seem smart, but underneath, it is a set of instructions coded by smart individuals that are run again and again, most of the times with a different set of data. Algorithms are important because they make your applications deterministic and efficient. Though computing has been around for less than a century, algorithms in general have been around at least since [300 BC](https://en.wikipedia.org/wiki/Euclidean_algorithm). As computing rose to prominence, algorithms have found wide usage and gained popularity. Below is the frequency of the word "algorithm" since 1800s according to Google books' n-gram viewer.

<!-- <iframe name="ngram_chart" src="https://books.google.com/ngrams/interactive_chart?content=algorithm&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Calgorithm%3B%2Cc0" width=900 height=320 marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no></iframe> -->

> The word algorithm itself derives from the 9th Century mathematician *Muḥammad ibn Mūsā al-Khwārizmī*, Latinized *Algoritmi*. This fact will not help you in any way what so ever.

Each algorithm solves a distinct problem. But, most algorithms are optimized for resources like time(user or CPU) or memory or both. Scrolling through [Wikipedia's list of algorithms](https://en.wikipedia.org/wiki/List_of_algorithms) gives us a peek into the range of algorithms that exist. Given that there are many algorithms, there are ways (Big O Notation) to discuss, compare and to get a sense of an algorithm. According to Introduction to Algorithms by CLRS,

> Informally, an **algorithm** is any well-defined computational procedure that takes some value, or set of values, as **input** and produces some value, or set of values, as **output**. An algorithm is thus a sequence of computational steps that transform the input into the output.

At it's core, that is it - an algorithm is a set of well defined steps that can be repeated by a computer(or a human, albeit slowly) on a given set of data to achieve a certain result or goal. However, what any programmer or developer would be concerned about is the study of computing algorithms. In computing, a lot of algorithms are already proved and well established, however, it is not entirely uncommon for developers to need to come up with a slight variation of a well known algorithm to solve a task at hand. That is why, the study of known computer algorithms involves understanding the basics of how to come up or arrive at the algorithm by yourself. A lot of practice problems exist for you to identify which algorithm is required to solve a certain problem and to push your boundaries of understanding by asking you a slightly different variant of the algorithm that you have already studied(or not yet studied). This is why studying and mastering algorithms is a continuous process.

# Data Structures

More often than not, designing an efficient algorithm requires several data structures. According to [Data Structures page on Wikipedia](https://en.wikipedia.org/wiki/Data_structure)

> Data structures provide a means to manage large amounts of data efficiently for uses such as large databases and internet indexing services. Usually, **efficient data structures are key to designing efficient algorithms**. Some formal design methods and programming languages emphasize data structures, rather than algorithms, as the key organizing factor in software design.

As algorithms operate on data, it is important to have efficient ways to store, manipulate and manage the data. Data structures provide deterministic and efficient ways to manage the data. Take a look at the [list of data structures](https://en.wikipedia.org/wiki/List_of_data_structures) page on Wikipedia to get an idea of the broad categories of popular data structures. Indeed, a list itself is a data structure. The list might seem intimidating and exhausting, but once you get the basic idea of some of the complex data structures, they become less intimidating and more fun to play with.

# A Data structure is an Algorithm's best friend

As algorithms require efficient data structures and because data structures use algorithms to store, find and change data, algorithms and data structures are inseparable and are commonly studied together. However, if you are going to study an algorithm that uses a particular data structure, it is a good idea to study and understand the data structure first.

> If presented with a chicken and an egg, I would eat the egg before eating the chicken. Use your discretion.

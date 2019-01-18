---
title: "Making sense of logarithms in computing and beyond"
date: 2018-10-31T18:12:13+01:00
draft: false
mathjax: true
mathjaxEnableSingleDollar: true
---

## Every one for each other

Consider the equation

$$ a = b + c$$

In the above expression, the value of `a` is expressed in terms of `b` and `c`. We can also express the values of `b` and `c` in a similar manner.

$$ b = a - c $$
$$ c = a - b $$

---

Now, consider the equation

$$ p = q \times r$$

It can be expressed for `q` and `r` as

$$ q = \frac{p}{r}$$
$$ r = \frac{p}{q}$$

---

## Things get tricky

The equations above have 3 variables in them and we are able to express one variable in terms of the other. Now, consider the equation

$$ x = y^z $$

Now, one part is easy.

$$ y = \sqrt[z] x$$

But how does one express `z` in terms of `y` and `x`? If you have read the title, then you could have guessed

$$ z = \log_y x$$

---

Let's see an example

$$ 2^5 = 32 $$

and likewise,

$$ \sqrt[5] 32 = 2$$

and also

$$ \log_2 32 = 5 $$

---

## Like a snail :snail:

That sounds like a long jump, but what does this really mean in practice? First let us notice one interesting property about logarithms.

> Logarithms move at a slow pace

Let us consider the following values

$$ \text{3    9    27    81    243    729} $$

If you see the pattern, they are values of $3^1$, $3^2$, $3^3$, $3^4$, $3^5$, $3^6$. Expressed in logarithms, they become

$$ \log_3 3   = 1$$
$$ \log_3 9   = 2$$
$$ \log_3 27  = 3$$
$$ \log_3 81  = 4$$
$$ \log_3 243 = 5$$
$$ \log_3 729 = 6$$

Now, notice the last two values - the logarithm of $243$ to be the base $3$ is $5$, while the logarithm of $729$ is $6$. So, as the value increased by about $486(729 - 243)$, the value of it's logarithm(to the base 3) increased only by a very short value, i.e. $1$. Indeed,

$$ \log_3 420 = 5.498$$

If we examine the values further, as the values keep increasing dramatically, the value of it's logarithm moves at a slow pace.


## Closest power

Consider the value $49761$. Let's say we want to find the value that is closest to $49761$ that is a power of 7. How do we find it? Easy

$$ \log_7 49761 = 5.557 $$

Now, it gets easy for us, as we can clearly tell that the value lies between $7^5$ and $7^6$. This works great for larger numbers. Lets say, if we want to find out the closest power of number 11 to the value of speed of light in meters. You now know how to find it in one [quick search](https://www.wolframalpha.com/input/?i=log11(3x10%5E8)).

## Logarithmic complexity

If you have studied algorithms, I am sure you must have come across $O(logn)$ or $O(nlogn)$ complexity without knowing what it exactly means. In the general case, the logarithm referred to is a base of 2. What it really means, is that as the input size grows, the run time of the program grows at a logarithmic rate, i.e. very slowly as we have noticed above.

Consider binary search. We start with the middle element and then decide, whether to go left or right. When we choose a direction, what we are really doing is halving the search space by ignoring one half of it. So, if in the beginning there were $1024$ elements, by the first iteration, we have only 512 elements to search in. Every iteration, we lose half the items and the search space continues to become $\text{256, 128, 64, 32, 16, 8}$ etc, unless you get lucky and were searching for that middle element in one of these spaces. So, even for a large set that has $33554432$ elements in it, you can always find an item using binary search in less than $25$ steps. Unbelievable, right?

### Additional reading:

https://stackoverflow.com/questions/1569702/is-big-ologn-log-base-e

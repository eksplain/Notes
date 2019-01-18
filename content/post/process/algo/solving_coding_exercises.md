---
title: "How I solve coding exercises"
date: 2018-11-02T01:52:26+01:00
draft: false
---

My current way so far is to:

1. Translate the problem into mathematical terms, i.e. break it down in a way that it can be solved with some formula or repeating operations. I usually work out the problem on paper for a few inputs.
2. Once I come up with a working formula, I evaluate its computational complexity as I have conceived it.
3. Then I look for places where I can optimize it or go for less complexity. Anything from $O(nlogn)$ and below for medium/hard problems, and I go to next step
4. Next step is to break it down into the variables - the initial variables, intermediate variables and the final results. This is very important as it helps mitigate a lot of confusion and gives me data structures and sub routines I need to work out.
5. Write skeleton code with comments.
6. Implement and submit.
7. Once accepted, I check for the actual and any better solutions.

After a while, I became better at combining steps 2 and 3. If I don't hit step 2 in 30 minutes, I check for the solution online. I also check solution when some of the operations I need are too expensive, so, it mostly turns out as an efficient data structure or a totally novel way of solving the problem.
I never start typing code without working step 4. Turns out working out step 4 saves a lot of confusion and time.

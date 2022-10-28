---
layout: post
title: Constrained Policy Optimization
header-img: "img/code-front-end.jpg"
description: summary of the paper Constrained Policy Optimization, <strong>ICML 2017</strong> from <i>Joshua Achiam et.al., Berkeley AI Research</i>

---

_Joshua Achiam, David Held, Aviv Tamar, Pieter Abbeel_; __Berkeley AI Research__

## Useful Links
* ICML 2017 [paper](https://arxiv.org/abs/1705.10528)
* Berkeley AI Research [blog](http://bair.berkeley.edu/blog/2017/07/06/cpo/) <-- *best resource to start with.*
* [Code](https://github.com/jachiam/cpo)

### The applicable scenarios of Constrained Policy Optimization?
[Faulty reward functions](https://blog.openai.com/faulty-reward-functions/) can cause the agent to learn unintended and sometimes harmful behaviour. In situations where RL algorithms are needed to be applied in real-life situations such as UAV control or household robots, the first concern to address is: **safety**. So, even while learning situations in RL setting, one needs to make sure there is a very minimum or no unsafe exploratory behaviour in initial stages.CPO is designed to meet this need in Deep RL setting.

### What is policy optimization?
Search for best policy is policy optimization. Constrained policy optimization is a local policy search method, in which the policies are learned in such a way that each new policy is close (*local*) in some way to the old one; and it is iterated until convergence.

Another example of local policy search is policy gradients, explained well in Andrej Karpathy's [blog](http://karpathy.github.io/2016/05/31/rl/).It keeps policies close by taking small steps in the direction of the gradient of the performance.

In [Trust Region](https://arxiv.org/abs/1502.05477) method, each new policy has to be close to the old one in terms of average KL-divergence. Since policies output probability distrbution over actions, and KL-divergence measures how different two probability distributions are over each other, this seems a *natural* way to update policies.

CPO also uses trust region method of updating policies, and is for constrained RL which approximately enforces constraints in every policy update.It uses approximations of the constraints to predict how much the constraint costs might change after any given update, and then chooses the update that will most improve performance while keeping the constraint costs below their limits.

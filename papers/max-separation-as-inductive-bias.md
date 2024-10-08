---
layout: paper
title: Maximum Class Separation as Inductive Bias in One Matrix
description: NeurIPS 2022 (Oral)
---


[[code]](https://github.com/tkasarla/max-separation-as-inductive-bias) [[arxiv]](https://arxiv.org/abs/2206.08704)


#### Summary
{: .fs-3 .lh-default}


Maximizing the separation between classes constitutes a well-known inductive bias in machine learning and a pillar of many traditional algorithms. By default, deep networks are not equipped with this inductive bias and therefore many alternative solutions have been proposed through differential optimization. Current approaches tend to optimize classification and separation jointly: aligning inputs with class vectors and separating class vectors angularly. This paper proposes a simple alternative: encoding maximum separation as an inductive bias in the network by adding one fixed matrix multiplication before computing the softmax activations. The main observation behind our approach is that separation does not require optimization but can be solved in closed-form prior to training and plugged into a network. We outline a recursive approach to obtain the matrix consisting of maximally separable vectors for any number of classes, which can be added with negligible engineering effort and computational overhead. Despite its simple nature, this one matrix multiplication provides real impact. We show that our proposal directly boosts classification, long-tailed recognition, out-of-distribution detection, and open-set recognition, from CIFAR to ImageNet.   
{: style="text-align: justify"}  


<!-- TODO
add GIFs
add single line of code
add citation -->

### Citation

```
@article{kasarla2022maximum,
  title={Maximum Separation as Inductive Bias in One Matrix},
  author={Kasarla, Tejaswi and  and Burghouts, Gertjan J and van Spengler, Max and van der Pol, Elise and Cucchiara, Rita and Mettes, Pascal},
  booktitle={NeurIPS},
  year={2022}
}
```
{: style="text-align: left" .fs-4}  

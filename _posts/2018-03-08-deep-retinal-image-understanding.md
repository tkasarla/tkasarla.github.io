---
layout: post
title: Deep Retinal Image Understanding
header-img: "img/convnet.jpg"
description: summary of the paper Deep Retinal Image Understanding, <strong>MICCAI 2016</strong> from <i>K.K. Maninis et.al., ETH Zurich</i>
---

_K.K. Maninis, J. Pont-Tuset, P. Arbeláez, and L. Van Gool_

## Useful Links
* MICCAI 2016 [paper](https://arxiv.org/pdf/1609.01103.pdf)
* Project [blog](http://www.vision.ee.ethz.ch/~cvlsegmentation/driu/)

### Approach of the paper
Specialized task of a base segmentation network to specific tasks like - blood vessel segmentation and optical disk segmentation - in the retina
 * basenet - VGGnet
 * task specific specialized convolutional layers - inspired by GoogLeNet

#### Specifics of the network
- specialized layers add supervision to multiple internal layers.
- it produces feature maps in __k__ different channels which are resized to original image size and concatenated thereby creating fine to coarse feature maps
- a last convolutional layer linearly combines the feauture maps created by specialized layer to regressed result.
- class balanced cross entropy to train the network to detect contours.
- first 4 finer feature maps for __blood vessel segmentation__ and last 4 coarse feature maps for __optic disk segmentation__

[Sample reporduced results](http://preon.iiit.ac.in/~tejaswi_kasarla/lvpei/)

---
layout: default
title: Home
description: MS by Research. CVIT. IIIT Hyderabad
nav_order: 1
permalink: /
---


I am a Computer Science MS student at IIIT-Hyderabad. I am advised by [Prof. C. V. Jawahar](http://faculty.iiit.ac.in/~jawahar/) and [Dr. Vineeth N. Balasubramanian](https://www.iith.ac.in/~vineethnb/).

My primary research area is computer vision with my research focus in scene understanding. My current work is on improving smart data annotation through active learning methods for semantic segmentation.

*** 

# news

**02 May 2019** | Joined **Research and Technology Center, Bosch** as Computer Vision Researcher. Will be working on problems related to Autonomous Driving.

**05 Nov 2018** | Paper on _Region Based Active Learning for Efficient Labelling in Semantic Segmentation_ accepted to [WACV 2019](http://wacv19.wacv.net)! [[link]](https://ieeexplore.ieee.org/document/8659293)

**15 Jun 2018 -<br>30 Oct 2018** | Interning with **Research and Technology Center, Bosch**. \| Mentors: [Guruprasad Hegde](https://www.linkedin.com/in/guruprasad-hegde-657b81a/),  [Amit Kale](https://www.linkedin.com/in/kaleamit/)

**15 Apr 2018** | Presenting our work on **Active Learning for Semantic Segmentation** at 1st Research Symposium, IIIT Hyderabad.

***

# publications

Region-Based Active Learning for Efficient Labelling in Semantic Segmentation. **Tejaswi Kasarla**, G Nagendar, Guruprasad Hegde, Vineeth N. Balasubramanian, C.V. Jawahar. WACV 2019
<div>
[<a href="https://ieeexplore.ieee.org/document/8659293">paper</a>]
[<a href="https://drive.google.com/file/d/1N3VXOKCNsdL2MySr7EXJV5DcAymV632z/view?usp=sharing">supplementary</a>]
[<a href="assets/wacv%20spotlight%20presentation.pdf">slides</a>]
[<a href="assets/poster_wacv.pdf">poster</a>] 
<span class="abstract"> [<a>abstract</a>]</span>
<span class="bibtex"> [<a>bibtex</a>] </span> <br />  
<span hidden class="abstract-hidden" style="border: 1px solid black; border-style: dashed; display:inline-block; text-align: justify"> As vision-based autonomous systems, such as self-driving vehicles, become a reality, there is an increasing need for large annotated datasets for developing solutions to vision tasks. One important task that has seen significant interest in recent years is semantic segmentation. However, the cost of annotating every pixel for semantic segmentation is immense, and can be prohibitive in scaling to various settings and locations. In this paper, we propose a region-based active learning method for efficient labeling in semantic segmentation. 
Using the proposed active learning strategy, we show that we are able to judiciously select the regions for annotation such that we obtain 93.8% of the baseline performance (when all pixels are labeled) with addtional labeling of 10% of the total number of pixels. Further, we show that this approach can be used to transfer annotations from a model trained on a given dataset (Cityscapes) to a different dataset (Mapillary), thus highlighting its promise and potential. </span>
<span hidden class="bibtex-hidden" style="border: 1px solid black; border-style: dashed; text-align:justify">
@inproceedings{kasarla2019region,
  title={Region-based active learning for efficient labeling in semantic segmentation},
  author={Kasarla, Tejaswi and Nagendar, G and Hegde, Guruprasad M and Balasubramanian, V and Jawahar, CV},
  booktitle={2019 IEEE Winter Conference on Applications of Computer Vision (WACV)},
  pages={1109--1117},
  year={2019},
  organization={IEEE}
}
</span>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
$(document).ready(function(){
  $(".bibtex-hidden").hide()
  $(".abstract-hidden").hide()
  $(".abstract").click(function(){
    $(this).parent().find(".bibtex-hidden").hide(); 
    $(this).parent().find(".abstract-hidden").toggle();
  });
   $('.bibtex').click(function() {
    $(this).parent().find(".abstract-hidden").hide();  
    $(this).parent().find(".bibtex-hidden").toggle();
  });
});
</script>


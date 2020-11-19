---
layout: default
title: Home
description: Researcher. Bosch | MS by Research. CVIT. IIIT Hyderabad
nav_order: 1
permalink: /
---

<img src="/assets/images/profile_photo.png" alt="Tejaswi Kasarla" width="200" style="vertical-align:middle;horizontal-align:right;border-radius:50%"> | <img width="500"/> <span style="font-size:larger;">Computer Vision Researcher</span> <br> [Bosch](https://www.bosch.com/research/)


<hr>

<a name="/bio"></a>

My primary research area is computer vision with a focus in scene understanding. I mainly [write](/blog) short paper summaries and meta-topics in research. <!-- I am vocal about reproducibility and ethics in AI. -->

I am currently a Computer Vision Researcher at [Research and Technology Center, Bosch](https://www.bosch.com/research/about-research/research-locations/), India. My work spans multimodal data visualization and annotation (LiDAR, RADAR and images), event detection in driving sequences and attribute understanding in images. <!---- I corganize Whiteboard Talks, a bi-monthly talk series --->

I graduated with MS in Computer Science from IIIT-Hyderabad. I was fortunate to be advised by [Prof. C. V. Jawahar](http://faculty.iiit.ac.in/~jawahar/) and [Dr. Vineeth N. Balasubramanian](https://www.iith.ac.in/~vineethnb/). During my Masters, I worked on (i) improving smart data annotation through active learning methods for semantic segmentation and (ii) knowledge distillation for semantic segmentation. My thesis on *Efficient Annotation and Knowledge Distillation for Semantic Segmentation* can be found [here](http://web2py.iiit.ac.in/research_centres/publications/view_publication/mastersthesis/769)




***
<a name="/news"></a>

# news

Aug 2020 | Presenting [poster](https://smiles.skoltech.ru/poster-presentations) on Region based Active Learning for Semantic Segmentation at **Summer School of Machine Learning at Skoltech (SMILES)**
Jul 2020 | Volunteered for and attended **International Conference on Machine Learning (ICML) 2020**.
Apr 2020 | Volunteered for and attended **International Conference on Learning Representations (ICLR) 2020**.
Aug 2019 | Served as Reviewer for **Women in Machine Learning (WiML) workshop**, co-located with **NeurIPS 2019**.
Aug 2019 | Graduated with MS by Research in Computer Science from International Institute of Information Technology, Hyderabad (IIIT-H), India
May 2019 | Started working as Computer Vision Researcher at **Research and Technology Center, Bosch**. Excited to work on problems related to Autonomous Driving. \| Collaborators: [Amit Kale](https://www.linkedin.com/in/kaleamit/), [Yasaswi Bharadwaj](https://www.linkedin.com/in/yasaswi-bharadwaj-katta-87647555), [Hiranmai M.](https://www.linkedin.com/in/hiranmai-4b0a3398/), [Subramanya Bharadwaj](https://www.linkedin.com/in/subramanya-bharadwaj-63b10758/)
Nov 2018 | Paper on _Region Based Active Learning for Efficient Labelling in Semantic Segmentation_ accepted to [WACV 2019](http://wacv19.wacv.net) [[link]](https://ieeexplore.ieee.org/document/8659293)
Jun 2018 \-<br> Oct 2018 | Interning at **Research and Technology Center, Bosch**. \| Mentors: [Guruprasad Hegde](https://www.linkedin.com/in/guruprasad-hegde-657b81a/),  [Amit Kale](https://www.linkedin.com/in/kaleamit/)
Apr 2018 | Presenting our work on **Active Learning for Semantic Segmentation** at 1st Research Symposium, IIIT Hyderabad


***
<a name="/publications"></a>

# publications

Region-Based Active Learning for Efficient Labelling in Semantic Segmentation. **Tejaswi Kasarla**, G Nagendar, Guruprasad Hegde, Vineeth N. Balasubramanian, C.V. Jawahar. WACV 2019
<div>
[<a href="https://ieeexplore.ieee.org/document/8659293">paper</a>]
[<a href="https://drive.google.com/file/d/1N3VXOKCNsdL2MySr7EXJV5DcAymV632z/view?usp=sharing">supplementary</a>]
[<a href="assets/wacv%20spotlight%20presentation.pdf">slides</a>]
[<a href="assets/poster_wacv.pdf">poster</a>]
<span class="abstract"> [<a>abstract</a>]</span>
<span class="bibtex"> [<a>bibtex</a>] </span> <br />  
<span hidden class="abstract-hidden" style="border: 1px solid black; border-style: dashed; display:inline-block; font-size: 10pt; text-align: justify"> As vision-based autonomous systems, such as self-driving vehicles, become a reality, there is an increasing need for large annotated datasets for developing solutions to vision tasks. One important task that has seen significant interest in recent years is semantic segmentation. However, the cost of annotating every pixel for semantic segmentation is immense, and can be prohibitive in scaling to various settings and locations. In this paper, we propose a region-based active learning method for efficient labeling in semantic segmentation.
Using the proposed active learning strategy, we show that we are able to judiciously select the regions for annotation such that we obtain 93.8% of the baseline performance (when all pixels are labeled) with addtional labeling of 10% of the total number of pixels. Further, we show that this approach can be used to transfer annotations from a model trained on a given dataset (Cityscapes) to a different dataset (Mapillary), thus highlighting its promise and potential. </span>
<span hidden class="bibtex-hidden" style="border: 1px solid black; border-style: dashed; display: block; font-size: 10pt; text-align:justify">
  @inproceedings{kasarla2019region,<br>
  title={Region-based active learning for efficient labeling in semantic segmentation},<br>
  author={Kasarla, Tejaswi and Nagendar, G and Hegde, Guruprasad M and Balasubramanian, V and Jawahar, CV},<br>
  booktitle={2019 IEEE Winter Conference on Applications of Computer Vision (WACV)},<br>
  pages={1109--1117},<br>
  year={2019},<br>
  organization={IEEE}<br>
  }
</span>
</div>


# services

- _Organizing Committee_, 

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

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

<script type="text/javascript">
    $('ul:gt(0) li:gt(12)').hide();
    $('#read-more-button > a').click(function() {
        $('ul:gt(0) li:gt(12)').show();
        $('#read-more-button').hide();
    });
</script>

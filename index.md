---
layout: default
title: Home
description: Researcher. Bosch | MS by Research. CVIT. IIIT Hyderabad
nav_order: 1
permalink: /
---
<div class="row">
    <div class="col-sm-3 col-xs-12">
        <img src="/assets/images/profile_photo.png" style="border-radius:50%">
    </div>
    <div class="col-sm-9 col-xs-12">
    <br><br>
    <span style="font-size:larger;"><strong>Tejaswi Kasarla</strong></span><br>
    <span style="font-size:large;">Computer Vision Researcher</span> <br>
    <a href="https://www.bosch.com/research/">Robert Bosch</a> <br>
    </div>
</div>


<!--<img src="/assets/images/profile_photo.png" alt="Tejaswi Kasarla" width="200" style="vertical-align:middle;horizontal-align:right;border-radius:50%"> | <img width="500"/> <span style="font-size:larger;">Computer Vision Researcher</span> <br> [Bosch](https://www.bosch.com/research/)-->


<hr>

<a name="/bio"></a>

I develop data-efficient machine learning methods for computer vision (mainly in scene understanding). I also [write](/blog) short paper summaries and collect [resources](/resources.html) for meta-topics in research. As a strong proponent of diversity in tech, I am one of the chairs of [Women in Computer Vision Workshop](https://sites.google.com/view/wicv/), to be co-hosted with [CVPR 2021](http://cvpr2021.thecvf.com/). In my free time, I enjoy playing drums and ukulele, [reading books](/more.html) and occasionally, exploring some [computational art](/art.html)! <!-- I am vocal about reproducibility and ethics in AI. -->

I am currently a Computer Vision Researcher at [Research and Technology Center, Robert Bosch](https://www.bosch.com/research/about-research/research-locations/), India. My work spans multimodal data visualization and annotation (LiDAR, RADAR and images), event detection in driving sequences and attribute understanding in images.

I graduated with MS in Computer Science from IIIT-Hyderabad. I was fortunate to be advised by [Prof. C. V. Jawahar](http://faculty.iiit.ac.in/~jawahar/) and [Dr. Vineeth N. Balasubramanian](https://www.iith.ac.in/~vineethnb/). My Master's work (i) simplifies data annotation through active learning methods for semantic segmentation and (ii) improves performance for real-time segmentation models with knowledge distillation. Read my thesis on *Efficient Annotation and Knowledge Distillation for Semantic Segmentation* is on [this link](http://web2py.iiit.ac.in/research_centres/publications/view_publication/mastersthesis/769)!






***
<a name="/news"></a>

# news

Dec 2020 | I will be co-organzing the [Women in Computer Vision Workshop](https://sites.google.com/view/wicvcvpr2021/home) at CVPR 2021! Submit extended abstracts and papers by March 12th 2021 and accepted papers will be funded to attend CVPR 2021 virtually.
Nov 2020 | I was featured on [ResearcHers Code](https://www.researcherscode.com/twitter-contributors) [twitter](https://twitter.com/search?q=from%3AResearchersCode%20since%3A2020-11-02%20until%3A2020-11-09&src=typed_query&f=live) from 2nd to 8th November. ResearcHers Code is an international community supporting cis & trans women & non-binary working in computational sciences, technology and research. I talked about my research and other related topics like SciComm, PhD admissions.
Aug 2020 | Presented [poster](https://smiles.skoltech.ru/poster-presentations) on Region based Active Learning for Semantic Segmentation at **Summer School of Machine Learning at Skoltech (SMILES)**
Jul 2020 | Volunteered for and attended **International Conference on Machine Learning (ICML) 2020**.
Apr 2020 | [Volunteered](https://iclr.cc/virtual_2020/index.html#footer) for and attended **International Conference on Learning Representations (ICLR) 2020**.
Aug 2019 |  Reviewed papers for **Women in Machine Learning (WiML) workshop**, co-located with **NeurIPS 2019**.
Aug 2019 |  Graduated with MS by Research in Computer Science from International Institute of Information Technology, Hyderabad (IIIT-H), India
May 2019 | Started working as Computer Vision Researcher at **Research and Technology Center, Bosch**. Excited to work on problems related to Autonomous Driving. \| Collaborators: [Amit Kale](https://www.linkedin.com/in/kaleamit/), [Yasaswi Bharadwaj](https://www.linkedin.com/in/yasaswi-bharadwaj-katta-87647555), [Hiranmai M.](https://www.linkedin.com/in/hiranmai-4b0a3398/), [Subramanya Bharadwaj](https://www.linkedin.com/in/subramanya-bharadwaj-63b10758/)
Nov 2018 | Paper on _Region Based Active Learning for Efficient Labelling in Semantic Segmentation_ accepted to [WACV 2019](http://wacv19.wacv.net) [[link]](https://ieeexplore.ieee.org/document/8659293)
Jun 2018 - Oct 2018 | Interning at **Research and Technology Center, Bosch**. \| Mentors: [Guruprasad Hegde](https://www.linkedin.com/in/guruprasad-hegde-657b81a/),  [Amit Kale](https://www.linkedin.com/in/kaleamit/)
Apr 2018 | Presenting our work on **Active Learning for Semantic Segmentation** at 1st Research Symposium, IIIT Hyderabad

<div id="read-more-button">
    <a nohref>+ more</a>
</div>
<div id="read-less-button">
    <a nohref>- less</a>
</div>
***
<a name="/publications"></a>

# publications

_Region-Based Active Learning for Efficient Labelling in Semantic Segmentation_. **Tejaswi Kasarla**, G Nagendar, Guruprasad Hegde, Vineeth N. Balasubramanian, C.V. Jawahar. WACV 2019
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


# scientific outreach

- **_General Chair_**, Women in Computer Vision Workshop (WiCV), CVPR 2021
- **_Organizer:_** Whiteboard Talks, Robert Bosch (ongoing). _A bi-weekly talk series discussing research, engineering and other ongoing topics at Corporate Research, Robert Bosch, India_
- **_Reviewer:_** WiML Workshop @ NeurIPS 2019
- **_Volunteer:_** NeurIPS 2020, ICML 2020, [ICLR 2020](https://iclr.cc/virtual_2020/index.html#footer), ICVGIP 2018
- **_Talks:_** _\<to-be-updated\>_



<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>


<script type="text/javascript">
    $('tr:gt(5)').hide();
    $('#read-less-button').hide();
    $('#read-more-button > a').click(function() {
        $('tr:gt(5)').show();
        $('#read-less-button').show();
        $('#read-more-button').hide();

    });
</script>

<script type="text/javascript">
    $('#read-less-button > a').click(function() {
        $('tr:gt(5)').hide();
        $('#read-more-button').show();
        $('#read-less-button').hide();
    });
</script>

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
    $('tr:gt(0) tr:gt(12)').hide();
    $('#read-more-button > a').click(function() {
        $('ul:gt(0) li:gt(12)').show();
        $('#read-more-button').hide();
    });
</script>

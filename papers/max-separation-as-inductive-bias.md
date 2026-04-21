---
layout: paper
title: "Maximum Class Separation as Inductive Bias in One Matrix"
nav_exclude: true
venue: "NeurIPS 2022"
award: "★ Oral"
authors:
  - name: Tejaswi Kasarla
    me: true
    affil: 1
  - name: Gertjan J. Burghouts
    url: https://scholar.google.nl/citations?user=Vl44iuMAAAAJ
    affil: 2
  - name: Max van Spengler
    url: https://www.linkedin.com/in/max-van-spengler-45908b147
    affil: 1
  - name: Elise van der Pol
    url: https://www.elisevanderpol.nl/
    affil: 1
  - name: Rita Cucchiara
    url: https://aimagelab.ing.unimore.it/imagelab/person.asp?idpersona=1
    affil: 3
  - name: Pascal Mettes
    url: https://staff.fnwi.uva.nl/p.s.m.mettes/
    affil: 1
affiliations:
  - num: 1
    name: VIS Lab, University of Amsterdam
  - num: 2
    name: TNO, The Netherlands
  - num: 3
    name: University of Modena and Reggio Emilia
links:
  - label: "Paper"
    url: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/bf1aa4a3b6a7d4d81a2805f8d3c1ab2f-Abstract-Conference.html"
    icon: "fas fa-file-lines"
  - label: "arXiv"
    url: "https://arxiv.org/abs/2206.08704"
    icon: "fas fa-file-pdf"
  - label: "Code"
    url: "https://github.com/tkasarla/max-separation-as-inductive-bias"
    icon: "fab fa-github"
abstract: >
  Maximizing the separation between classes constitutes a well-known inductive bias in
  machine learning and a pillar of many traditional algorithms. By default, deep networks
  are not equipped with this inductive bias and therefore many alternative solutions have
  been proposed through differential optimization. Current approaches tend to optimize
  classification and separation jointly: aligning inputs with class vectors and separating
  class vectors angularly. This paper proposes a simple alternative: encoding maximum
  separation as an inductive bias in the network by adding one fixed matrix multiplication
  before computing the softmax activations. The main observation behind our approach is
  that separation does not require optimization but can be solved in closed-form prior to
  training and plugged into a network. We outline a recursive approach to obtain the matrix
  consisting of maximally separable vectors for any number of classes, which can be added
  with negligible engineering effort and computational overhead. Despite its simple nature,
  this one matrix multiplication provides real impact. We show that our proposal directly
  boosts classification, long-tailed recognition, out-of-distribution detection, and
  open-set recognition, from CIFAR to ImageNet.
bibtex: |
  @inproceedings{kasarla2022maximum,
    title={Maximum Class Separation as Inductive Bias in One Matrix},
    author={Kasarla, Tejaswi and Burghouts, Gertjan J and van Spengler, Max and van der Pol, Elise and Cucchiara, Rita and Mettes, Pascal},
    booktitle={Advances in Neural Information Processing Systems},
    year={2022}
  }
---

---
layout: paper
title: "Maximally Separated Active Learning"
nav_exclude: true
venue: "ECCV 2024 · Beyond Euclidean Workshop"
authors:
  - name: Tejaswi Kasarla
    me: true
    affil: 1
  - name: Abhishek Jha
    url: https://abskjha.github.io
    affil: 1
  - name: Faye Tervoort
    url: https://www.linkedin.com/in/faye-tervoort-15298a171/
    affil: 1
  - name: Rita Cucchiara
    url: https://aimagelab.ing.unimore.it/imagelab/person.asp?idpersona=1
    affil: 2
  - name: Pascal Mettes
    url: https://staff.fnwi.uva.nl/p.s.m.mettes/
    affil: 1
affiliations:
  - num: 1
    name: VIS Lab, University of Amsterdam
  - num: 2
    name: University of Modena and Reggio Emilia
links:
  - label: "Paper"
    url: "https://arxiv.org/abs/2411.17444"
    icon: "fas fa-file-pdf"
  - label: "Code"
    url: "https://github.com/tkasarla/ActiveLearning-MaxSep"
    icon: "fab fa-github"
abstract: >
  Active learning aims to select the most informative unlabeled samples for annotation.
  We propose Maximally Separated Active Learning, which applies the principle of maximum
  class separation — where class prototypes are arranged as an equiangular tight frame in
  feature space — as an inductive bias for sample selection. By querying samples that best
  support maximally separated representations, our approach achieves strong performance
  with fewer labeled examples across classification benchmarks.
bibtex: |
  @inproceedings{kasarla2024maximally,
    title={Maximally Separated Active Learning},
    author={Kasarla, Tejaswi and Jha, Abhishek and Tervoort, Faye and Cucchiara, Rita and Mettes, Pascal},
    booktitle={European Conference on Computer Vision Workshop},
    year={2024}
  }
---


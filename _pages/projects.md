---
title: "Projects"
permalink: /projects/
author_profile: true
---

During my journey to my doctorate, I have been involved in various research projects. Here you can find more details on past and ongoing projects.

## Generating synthesised mobility traces
A central topic in individual human mobility is the quantification of location visits and mobility modelling for synthesized mobility generation (e.g., check the [container model](https://doi.org/10.1038/s41586-020-2909-1)) or trip/activity generation (e.g., check the [eqasim framework](https://doi.org/10.1016/j.trc.2021.103291)) that are essential for downstream applications such as travel demand modelling and epidemic control. 

We aim to explore approaches for hybrid modelling, referring to integrating mechanistic and DL models for generating synthesized location visitation sequences. While mechanistic approaches are in principle directly interpretable and generalize well in unseen situations, DL models are highly flexible in approximating the non-linear relationships in data. Combining both methods could increase the performance and generalization ability of the mobility generation model. 

## Interpretable and Robust ML
The past few years have seen rapid development in transportation applications using DL. However, such networks are often challenging to interpret and lack robustness. Through the collaboration with the [Swiss Data Science Center (SDSC)](https://datascience.ch/), we aim to bring together the knowledge of GIS and DL, advancing our understanding of how interpretable and robust machine learning methods can be tailored to mobility analysis with the support of causal inference. The outcome of this research will help develop more interpretable and reliable DL models for tackling transport-related issues. 

## Next location prediction
Next location prediction refers to the prediction of the immediate next location an individual will visit given their historical mobility. The problem has found a wide range of applications in recommendation systems, traffic optimization and sustainable transportation systems. We focus on the problem for GNSS-based datasets, where continuous traces of individuals are available. We introduced a set of preprocessing guidelines and a new DL model (multi-head self-attention), discussed the optimum approaches for integrating movement related-context, and compared the different design choices that impact the problem definition and prediction accuracy.

Relevant studies are presented at [SIGSPATIAL '22](https://doi.org/10.1145/3557915.3560996) and a follow up study is available on [arXiv](https://arxiv.org/abs/2212.01953).

## Long-term mobility behaviour

## Trackintel

Our work at the MIE lab is centred around processing and analysing individual tracking data. With many projects that share similar preprocessing pipelines, we had the idea of collecting the commonly used preprocessing and analysing functions into an open-source Python library. This is the beginning of trackintel, a structured and well-maintained framework for individual tracking data analysis. The core of trackintel is the hierarchical data model for movement data used in GIS, transport planning and related fields, which supports tracking data from various sources (e.g., GNSS tracking data, call detailed records, location-based social networks). 

This is a joined work with my colleagues [Dominik Bucher](http://dominikbucher.com/), [Henry Martin](https://n.ethz.ch/~martinhe/) and Nina Wiedemann. Check out the [paper](https://doi.org/10.1016/j.compenvurbsys.2023.101938) and the [GitHub repo](https://github.com/mie-lab/trackintel)!


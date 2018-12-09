---
layout : post
title : Caffe Installation on Ada Cluster 
header-img: "img/code.png"
description: instructions to install caffe on ada cluster of HPC, IIIT-H


---

Do not forget to export proxy before installation. Assuming, we [cloned the caffe's github repository](https://github.com/BVLC/caffe), follow the next steps.

## Installing caffe (pycaffe enabled)

Install pycaffe dependencies : `pip install --user protobuf scikit-image`

All required dependencies for caffe installation are already available on the cluster. We need to add path for it in `.bashrc` and caffe's `Makefile.config`

In `.bashrc`:

```
#path to glog,gflags,cudnn

export LD_LIBRARY_PATH=/usr/local/apps/glog-0.3.5/lib/:/usr/local/apps/gflags/2.2.1/lib/:/usr/local/apps/cuDNN/5.1/lib64/:$LD_LIBRARY_PATH
```

In `Makefile.config`:

```
USE_CUDNN:=1 # set this to 1 if you need cudnn enabled. 
 
WITH_PYTHON_LAYER := 1
```

Also add the paths of glog,gflags,hdf5,cudnn to `Makefile.config`:

```
# Whatever else you find you need goes here.                                                                             
INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include /usr/local/apps/gflags-2.2.1/include /usr/local/apps/glog-0.3.5/include /usr/local/apps/cuDNN/5.1/include /usr/include/hdf5/serial                                                               

LIBRARY_DIRS := $(PYTHON_LIB) /usr/local/lib /usr/lib /usr/lib/x86_64-linux-gnu /usr/lib/x86_64-linux-gnu/hdf5/serial /usr/local/apps/gflags-2.2.1/lib /usr/local/apps/glog-0.3.5/lib /usr/local/apps/cuDNN/5.1/lib64/
```


Make caffe and pycaffe:

```
make -jx (x=number of cpu clusters chosen) 

make pycaffe
```

Add pycaffe to `.bashrc`:

```
#pycaffe path

export PYTHONPATH=~/libraries/caffe/python:$PYTHONPATH
```


"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5851],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5279:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"TextAnalytics - Amazon Book Reviews with Word2Vec",hide_title:!0,status:"stable",name:"TextAnalytics - Amazon Book Reviews with Word2Vec"},l=void 0,p={unversionedId:"features/other/TextAnalytics - Amazon Book Reviews with Word2Vec",id:"version-0.10.0/features/other/TextAnalytics - Amazon Book Reviews with Word2Vec",title:"TextAnalytics - Amazon Book Reviews with Word2Vec",description:"TextAnalytics - Amazon Book Reviews with Word2Vec",source:"@site/versioned_docs/version-0.10.0/features/other/TextAnalytics - Amazon Book Reviews with Word2Vec.md",sourceDirName:"features/other",slug:"/features/other/TextAnalytics - Amazon Book Reviews with Word2Vec",permalink:"/SynapseML/docs/features/other/TextAnalytics - Amazon Book Reviews with Word2Vec",tags:[],version:"0.10.0",frontMatter:{title:"TextAnalytics - Amazon Book Reviews with Word2Vec",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"HyperParameterTuning - Fighting Breast Cancer",permalink:"/SynapseML/docs/features/other/HyperParameterTuning - Fighting Breast Cancer"},next:{title:"TextAnalytics - Amazon Book Reviews",permalink:"/SynapseML/docs/features/other/TextAnalytics - Amazon Book Reviews"}},c={},m=[{value:"TextAnalytics - Amazon Book Reviews with Word2Vec",id:"textanalytics---amazon-book-reviews-with-word2vec",level:2}],d={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"textanalytics---amazon-book-reviews-with-word2vec"},"TextAnalytics - Amazon Book Reviews with Word2Vec"),(0,o.kt)("p",null,"Yet again, now using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Word2Vec")," Estimator from Spark.  We can use the tree-based\nlearners from spark in this scenario due to the lower dimensionality representation of\nfeatures."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/BookReviewsFromAmazon10K.parquet"\n)\ndata.limit(10).toPandas()\n')),(0,o.kt)("p",null,"Modify the label column to predict a rating greater than 3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'processedData = data.withColumn("label", data["rating"] > 3).select(["text", "label"])\nprocessedData.limit(5).toPandas()\n')),(0,o.kt)("p",null,"Split the dataset into train, test and validation sets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"train, test, validation = processedData.randomSplit([0.60, 0.20, 0.20])\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Tokenizer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Word2Vec")," to generate the features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml import Pipeline\nfrom pyspark.ml.feature import Tokenizer, Word2Vec\n\ntokenizer = Tokenizer(inputCol="text", outputCol="words")\npartitions = train.rdd.getNumPartitions()\nword2vec = Word2Vec(\n    maxIter=4, seed=42, inputCol="words", outputCol="features", numPartitions=partitions\n)\ntextFeaturizer = Pipeline(stages=[tokenizer, word2vec]).fit(train)\n')),(0,o.kt)("p",null,"Transform each of the train, test and validation datasets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ptrain = textFeaturizer.transform(train).select(["label", "features"])\nptest = textFeaturizer.transform(test).select(["label", "features"])\npvalidation = textFeaturizer.transform(validation).select(["label", "features"])\nptrain.limit(5).toPandas()\n')),(0,o.kt)("p",null,"Generate several models with different parameters from the training data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.classification import (\n    LogisticRegression,\n    RandomForestClassifier,\n    GBTClassifier,\n)\nfrom synapse.ml.train import TrainClassifier\nimport itertools\n\nlrHyperParams = [0.05, 0.2]\nlogisticRegressions = [\n    LogisticRegression(regParam=hyperParam) for hyperParam in lrHyperParams\n]\nlrmodels = [\n    TrainClassifier(model=lrm, labelCol="label").fit(ptrain)\n    for lrm in logisticRegressions\n]\n\nrfHyperParams = itertools.product([5, 10], [2, 3])\nrandomForests = [\n    RandomForestClassifier(numTrees=hyperParam[0], maxDepth=hyperParam[1])\n    for hyperParam in rfHyperParams\n]\nrfmodels = [\n    TrainClassifier(model=rfm, labelCol="label").fit(ptrain) for rfm in randomForests\n]\n\ngbtHyperParams = itertools.product([8, 16], [2, 3])\ngbtclassifiers = [\n    GBTClassifier(maxBins=hyperParam[0], maxDepth=hyperParam[1])\n    for hyperParam in gbtHyperParams\n]\ngbtmodels = [\n    TrainClassifier(model=gbt, labelCol="label").fit(ptrain) for gbt in gbtclassifiers\n]\n\ntrainedModels = lrmodels + rfmodels + gbtmodels\n')),(0,o.kt)("p",null,"Find the best model for the given test dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.automl import FindBestModel\n\nbestModel = FindBestModel(evaluationMetric="AUC", models=trainedModels).fit(ptest)\nbestModel.getRocCurve().show()\nbestModel.getBestModelMetrics().show()\nbestModel.getAllModelMetrics().show()\n')),(0,o.kt)("p",null,"Get the accuracy from the validation dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\npredictions = bestModel.transform(pvalidation)\nmetrics = ComputeModelStatistics().transform(predictions)\nprint(\n    "Best model\'s accuracy on validation set = "\n    + "{0:.2f}%".format(metrics.first()["accuracy"] * 100)\n)\nprint(\n    "Best model\'s AUC on validation set = "\n    + "{0:.2f}%".format(metrics.first()["AUC"] * 100)\n)\n')))}u.isMDXComponent=!0}}]);
# new_blog

## 前端









## 后端







## 数据库

#### mongodb

*MongoDB与Mysql的区别*

MongoDB主要以Json格式存储对应文件

比如，在nodejs中存储博客文章

```js
// 引入必要的库和模型定义
const mongoose = require('mongoose');

// 定义文章模型
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);

// 连接MongoDB数据库
mongoose.connect('mongodb://localhost/blog');

// 存储文章
const newArticle = new Article({
  title: '示例文章',
  content: '这是一个示例文章的内容。',
  author: 'John Doe',
});

newArticle.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('文章已成功保存到MongoDB数据库。');
  }
});

// 查询文章
Article.find({ author: 'John Doe' }, (err, articles) => {
  if (err) {
    console.error(err);
  } else {
    console.log('找到以下文章：');
    console.log(articles);
  }
});

----from ChatGpt
```

而Mysql更趋向于结构化的表存储（关系型）

- MongoDB提供MQL查询
- 具有良好扩展性---分片(Sharding)技术



获取到免费的MongoDB后，拿到对应的URI

*URL、URI、URN区别*

URI包含另URL、URN

URI是资源的唯一标识，可以是网上的也可以是本地的

URL用于定位互联网上的资源

URN用于提供资源的永久名称（唯一标识）
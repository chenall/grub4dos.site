var extend = hexo.extend;
var route = hexo.route;
var htmlTag = hexo.util.html_tag;

var isObject = function(obj){return (typeof(obj) == "object")};
var findData = function(data, source){
  if (!source.length) return true;

  for (var i = 0, len = source.length; i < len; ++i){
    if (data.indexOf(source[i]) != -1) return true;
  }

  return false;
};

var arrayCaseFind = function(data, value){
  value = value.toUpperCase();

  for (var i = 0,len = data.length; i < len; i++){
    if (data[i].toUpperCase() === value) return true;
  }

  return false;
};

var makeWhereQuery = function(index){
  return function(data){
    return findData(data, index);
  };
};

var getPosts = function(site, options){
  var posts = site.posts,
    queryData = [],
    conditions = options.query,
    queryOperator = 'and',
    query = {};

  var getIndex = function(type, query){
    if (isObject(query._index)) return query._index;
    if (!isObject(query)) query = query.split(/\s*,\s*/);

    if (query && query.length){
      var data = site[type].find({
        name: {
          $where: function(name){
            return arrayCaseFind(query, name);
          }
        }
      });

      return data._index;
    }

    return false;
  };

  var keys = Object.keys(conditions);

  for (var i = 0, len = keys.length; i<len; ++i){
    var key = keys[i],
      obj = {};

    query = conditions[key];

    switch (key){
      case 'tags':
      case 'categories':
        var _index = getIndex(key, query);
        if (_index && _index.length){
          obj[key] = {
            $where: makeWhereQuery(_index)
          };
          queryData.push(obj);
        }
        break;

      case 'operator':
        queryOperator = query;
        break;

      default:
        obj[key] = typeof query === 'function' ? {$where: query} : query;
        queryData.push(obj);
    }
  }

  if (options.posts) posts = options.posts;

  if (options.orderby){
    if (options.orderby == 'random') posts = posts.random();
    else posts = posts.sort(options.orderby, options.order);
  }

  if (queryData.length){
    var queryOpt;
    query = {};

    if (options.count) queryOpt = {limit: options.count};

    query['$' + queryOperator] = queryData;

    return posts.find(query, queryOpt);
  }

  return options.count ? posts.limit(options.count) : posts;
};


extend.generator.register(function(locals, render, callback){
  var config = hexo.config;
  var data = [];
  var reg = /\*\s*\[(.+?)\]/g;
  var item={};
  ['0.4.5c','0.4.6a'].forEach(function(tag){
   var posts = getPosts(locals,{posts:locals.posts,orderby:"date",order:"-1",count:10,query:{categories:"downloads",tags:tag,operator:"and"}});
    posts.each(function(post){
      if (!post.commit){
        res = /\/commit\/([0-9a-f]{8})/.exec(post.raw);
        if (res) post.commit = res[1];
        else  post.commit = '';
      }
      item = {commit:post.commit,url:post.permalink,download:post.downlink,md5:post.md5,title: post.title,ver:tag,date: post.date,log:[],files:post.files};
      while(res = reg.exec(post.raw))
         item.log.push(res[1]);
      data.push(item);
    });
  })

  route.set('download.json',JSON.stringify(data));
  if (config.url)
  {
    var domain = config.url.match(/\/\/([^\/]+)/);
    if (domain) route.set('CNAME',domain[1]);
  }
  callback();
});

extend.tag.register('imgL',function(args, content){
  return '<img src="http://c-dl.qiniudn.com/post/' + args.shift() + '">';
});

extend.tag.register('tdj',function(args){
  var itemtext = '点击购买';
  if (/^\d+$/.test(args)){
    var itemid = args;
  } else {
    var itemstr = /^([a-z]+:)?\/{1,2}.+?id=(\d+)/.exec(args);
    if (itemstr){
      var itemid = itemstr[2];
      itemtext = args;
      var href = args;
    } else {
      return '<a type="error"></a>';
    }
  }

  var attrs = {
    'data-type': "0",
    'data-tmpl': "628x100",
    'data-tmplid': "7",
    'data-rd':    "2",
    'data-border': "1",
    'data-style': "2",
    'biz-itemid': itemid,
    'target': '_blank',
    'rel':  'external',
    'title': '点此链接购买',
    'href': href || 'item.taobao.com/item.htm?id=' + itemid,
  };
  
  return htmlTag('a',attrs,itemtext);
});


extend.generator.register(function(locals, render, callback){
  route.set('index.php', '');
  callback();
});

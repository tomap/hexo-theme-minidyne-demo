hexo.extend.tag.register('video', function(args){
    return `<video> <source src="${args[0]}" type="video/mp4"> </video>`;
  });
}, {async: true});

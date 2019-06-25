export const loadJs = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.type = 'text/javascript'
    document.body.appendChild(script)
    script.onload = () => {
      resolve()
    }
  }) 
}

export const loadCss = (url) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    document.head.appendChild(link)
    link.onload = () => {
      resolve()
    }
  })
}

export const generateUUID = () => {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x7|0x8)).toString(16);
  });
  return uuid;
}

export const print_page= (page_id,head='',cb)=>{
    let content_= window.open()
    setTimeout(()=>{
        content_.document.getElementsByTagName('head')[0].innerHTML= head
        content_.document.body.appendChild(document.getElementById(page_id).cloneNode(true))
        function close_w(){
            cb && cb()
            content_.close()
            content_.removeEventListener('afterprint',close_w)
        }
        content_.addEventListener("afterprint", close_w)
        content_.onload= content_.print()

    },100)
    // element.hasAttribute("href")  //元素是否有此属性
    // element.getAttributeNode(has_w).value  //获取元素的属性的值
}
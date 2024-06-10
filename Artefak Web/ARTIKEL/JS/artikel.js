document.addEventListener('DOMContentLoaded', function() {
    function checkChildren(nodes, elemId){
     for(i=0;i<nodes.length;i++){
      if(nodes[i].id==elemId){
       return nodes[i];
      }else{
       return checkChildren(nodes[i].children, elemId);
      }
     }
    }
    
    function isNumeric(value) {
     var type = typeof value;
     return (type === 'number' || type === 'string') && !Number.isNaN(value - Number.parseFloat(value));
    }
    
    var nodes = document.querySelector('div.post-body').children;
    var splitdong = checkChildren(nodes, 'postsplit').innerHTML;
 
    var content = splitdong.split('<!--nextpage-->');
    
    var url = window.location.href;
    var url = url.split('?');
    var no = url[1] + '&m=4';
    var no = no.split('m');
    var no = no[0];
    var no = no.replace('&', '');
    var url = url[0];
    var i = 1;
    
    if( !isNumeric(no) ){
     var no = 1;
    }
    
    document.getElementById('postsplit').innerHTML = content[no-1];
    
    if( content.length > 1 ) {
     document.getElementById('postsplit').innerHTML += "<div class='cm-pagenav cm-clearfix' id='post-pager'><span class='page current'>Page :</span> </div>";
    }  
    if( no>1 ){
     document.getElementById('post-pager').innerHTML += "<a href='"+url+"?"+(no-1)+"' title='Previous Page'> Previous</a>";
    }
    content.forEach(function(item) {
     if( no == i ){
      document.getElementById('post-pager').innerHTML += "<span class='current'>"+i+"</span>";
     } else {
      document.getElementById('post-pager').innerHTML += "<a href='"+url+"?"+i+"' rel='nofollow' title='Page "+i+"'>"+i+"</a>";
     }
     i++;
    }); 
    if(content.length > no){
     var nn = parseInt(no) + 1;
     document.getElementById('post-pager').innerHTML += "<a href='"+url+"?"+nn+"' rel='nofollow' title='Next Page'>Next</a>";
      }
   });
   const navBar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle
    ("scrolling-active", windowPosition);
});


function menuToggle(MenuBtn,Menu,MenuList,Transitions,NameType){
    var menubtn=MenuBtn;
    var menu=Menu;
    var menuList=MenuList;
    transitions=Transitions;
    nameType=NameType;
    var open =menubtn.children[0];
    var close=menubtn.children[1];
    var setConstants=function(Menu,MenuList){
    menu=Menu;
    menuList=MenuList;
    }
    var slides=function(menu,menuList){
        var menuHolder=menu.parentElement;
        if(menu.firstElementChild.classList.contains('active')){
            menuList.classList.remove('menu-list-active');
            setTimeout(function(){
            [].slice.call(menu.children).forEach(function(item){
                  item.classList.remove('active');  
            });},200);
            menuHolder.classList.remove('menu1-active');
        }
        else{
            menuHolder.classList.add('menu1-active');
            [].slice.call(menu.children).forEach(function(item){
                  item.classList.add('active');  
            });
            menuList.classList.add('menu-list-active');
        }
    }
    var toggle=function(){
        if(open.classList.contains('not-hidden')){
            open.classList.remove('not-hidden');
            open.classList.add('hidden');
            close.classList.remove('hidden');
            close.classList.add('not-hidden');}
        else{
            
            close.classList.remove('not-hidden');
            close.classList.add('hidden');
            open.classList.remove('hidden');
            open.classList.add('not-hidden');
        }
        slides(menu,menuList);
    };
     var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]); 
      }
    };
    var addSelected=function(list,selected,className){
        forEach(list,function(index,item){
            item.classList.remove(className);
        });
        selected.classList.add(className);
    };
    var transitionSelect=function(transitions,nameType){
        forEach(transitions,function(index,item){
        item.addEventListener('click',function(e){
        addSelected(transitions,item,'selected');
        var text;
        if(e.target.children.length===0){
          text=e.target.innerHTML;  
        }
        else{
            text=e.target.children[0].innerHTML;
        }
        nameType.innerHTML=text;
        text='.'+text+'-slides';
        menuSlide=document.querySelector(text);
        setConstants(menuSlide,menuList);
        })
    });
    }
    transitionSelect(transitions,nameType);
    menubtn.addEventListener('click',toggle);
    
    }




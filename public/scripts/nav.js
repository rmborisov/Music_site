function nav_main(hrf) {

 document.write('<div class="nav-scroller">');
 document.write('<nav class="nav-scroller__items dragscroll">');

 if(hrf=="main") {
   document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Главная</a>');
 }
 else {
  document.write('<a href="/" class="nav-scroller__item">Главная</a>');
 }
  if(hrf=="singers") {
   document.write('<a href="#" class="nav-scroller__item  nav-scroller__item_active">Зарубежные исполнители</a>');
  }
  else {
   document.write('<a href="/singers" class="nav-scroller__item">Зарубежные исполнители</a>');
 }
  if(hrf=="genre") {
    document.write(' <a href="#" class="nav-scroller__item   nav-scroller__item_active">Жанры</a>');
   }
  else {
   document.write(' <a href="/genres" class="nav-scroller__item">Жанры</a>');
  }
  if(hrf=="albums") {
     document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Альбомы</a>');
   }
   else {
   document.write('<a href="/albums" class="nav-scroller__item">Альбомы</a>');
  }
  if(hrf=="melomans") {
     document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Меломанам</a>');
  }
  else {
   document.write('<a href="/melomans" class="nav-scroller__item">Меломанам</a>');
  }
    if(hrf=="sponsors") {
      document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Спонсорам</a>');
     }
    else {
    document.write('<a href="/sponsors" class="nav-scroller__item">Спонсорам</a>');
    }
      if(hrf=="search") {
       document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Поиск</a>');
      }
      else {
       document.write('<a href="/search" class="nav-scroller__item">Поиск</a>');
     }
      if(hrf=="contacts") {
          document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Контакты</a>');
       }
       else {
       document.write('<a href="/contacts" class="nav-scroller__item">Контакты</a>');
       }
 document.write('</nav>');
 document.write('</div>');
}

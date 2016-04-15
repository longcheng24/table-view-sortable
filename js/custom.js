  $(function() {

    $('.brand p').mouseover(function(){
      moveBrand();
    })
    $(".mainCategory p").mouseover(function(){
      moveMainCategory();
    })
    $(".subCategory p").mouseover(function(){
      moveSubCategory();
    })
    $(".productName p").mouseover(function(){
      moveProduct();
    })

  });

  function moveBrand(){
    $( ".rowTable" ).sortable({
      item: $(".brand")
    });
  }

  function moveMainCategory(){
    $( ".bigMain" ).sortable({
      item: $(".mainCategory")
    });
  }

  function moveSubCategory(){
    $( ".bigSub" ).sortable({
      item: $(".subCategory")
    });
  }

  function moveProduct(){
    $( ".bigProduct" ).sortable({
      item: $(".productName")
    });
  }

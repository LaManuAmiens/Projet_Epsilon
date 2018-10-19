$(function() {
  /* Assign actions */
  $('.product-quantity input').change( function() {
    var prix = $(this).attr('class');
    console.log(prix);
    var quantité = parseInt($('.product-quantity').val());
    console.log(quantité);
    var total = quantité * prix;
    $(".product-line-price").text(total);
  });

  $('.product-removal').click( function() {
    $(this).attr('produit');
    $(this).remove();
  });
})

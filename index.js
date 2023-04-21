function DrinkButtons() {
  function init() {
    $(document).on('click', 'button', processOrder)
  }

  function processOrder() {
    updateItemCounter($(this));
    updateTotalItems();
    updateTotalPrice();
  }

  function updateItemCounter($item) {
    setCount($item, getCount($item) + 1);
    $item.closest('.itemContainer').find('.countContainer').html(getCount($item));
  }

  function setCount($item, count) {
    $item.data('count', count);
  }

  function getCount($item) {
    return parseInt($item.data('count'));
  }

  function updateTotalItems() {
    const total = calculateTotalItemsSelected();
    $('#count').html(total);
  }

  function calculateTotalItemsSelected() {
    let total = 0;
    $('button').each(function() {
      total += getCount($(this));
    });

    return total;
  }

  function updateTotalPrice() {
    const total = calculateTotalPrice();
    $('#price').html(total);
  }

  function calculateTotalPrice() {
    let total = 0;
    $('button').each(function() {
      total += getCount($(this)) * getPrice($(this));
    });

    return total;
  }

  function getPrice($item) {
    return $item.data('price');
  }

  return {
    init: init
  }
}
DrinkButtons().init();
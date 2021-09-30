function initBaseDropdown() {
  $('.js-dropdown-select-current').on('click', function () {
    $(this).parent().toggleClass('base-dropdown-select--active');
  });

  $('.js-dropdown-select-dropdown-item').on('click', function () {
    const $this = $(this);
    const $html = $('html');
    const $currentDatadropdown = $this.find('.js-dropdown-select-item-data').attr('data-dropdown');
    const $parentContainer = $this.closest('.js-dropdown-select');
    const $currentActiveData = $parentContainer.find('.js-dropdown-select-current');
    const $currentActiveDataClone = $currentActiveData.clone().html();
    const $currentDataClone = $this.clone().html();

    $html.attr('dropdown', $currentDatadropdown);
    $currentActiveData.html($currentDataClone);
    // $this.html($currentActiveDataClone);
    $parentContainer.removeClass('base-dropdown-select--active');
  });

}

$(document).mouseup(function(event) {
  const $parentContainer = $(".js-dropdown-select");
  if (!$parentContainer.is(event.target) && $parentContainer.has(event.target).length === 0) {
    $parentContainer.removeClass('base-dropdown-select--active');
  }
});
jQuery( $ => {

    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('.mybyu-grid__card-container').addClass('hidden');
        const targetType = $(this).text();
        $('.mybyu-grid__card-container').each(function () {
            console.log('Data: ' + $(this).data('tab-type'));
            console.log('Target type: ' + targetType);
            console.log($(this).data('tab-type') == targetType);
            if ($(this).data('tab-type') == targetType) {
                $(this).removeClass('hidden');
            }
        });
    });

});

$(document).ready(function () {
    // 0. Mobile Hamburger Menu Toggle
    $('#mobile-menu-btn').on('click', function (e) {
        e.stopPropagation();
        const $menu = $('#mobile-menu');
        const $icon = $(this).find('i');

        if ($menu.hasClass('hidden')) {
            $menu.removeClass('hidden').hide().slideDown(250);
            $icon.removeClass('fa-bars').addClass('fa-xmark fa-times');
        } else {
            $menu.slideUp(250, function () {
                $menu.addClass('hidden').removeAttr('style');
            });
            $icon.removeClass('fa-xmark fa-times').addClass('fa-bars');
        }
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#mobile-menu, #mobile-menu-btn').length) {
            const $menu = $('#mobile-menu');
            if (!$menu.hasClass('hidden')) {
                $menu.slideUp(200, function () {
                    $(this).addClass('hidden').removeAttr('style');
                });
                $('#mobile-menu-btn i').removeClass('fa-xmark fa-times').addClass('fa-bars');
            }
        }
    });

    // Reset mobile menu state on window resize to desktop
    $(window).on('resize', function () {
        if ($(window).width() >= 768) {
            $('#mobile-menu').addClass('hidden').removeAttr('style');
            $('#mobile-menu-btn i').removeClass('fa-xmark fa-times').addClass('fa-bars');
        }
    });

    // 1. FAQ Accordion
    $('.faq-question').on('click', function () {
        // Close other open answers
        $('.faq-answer').not($(this).next()).slideUp(200);
        $('.faq-question').not($(this)).removeClass('text-emerald-700').addClass('text-emerald-900');
        
        // Toggle the clicked answer
        $(this).next().slideToggle(200);
        $(this).toggleClass('text-emerald-900 text-emerald-700');
    });

    // 2. Form Submission Simulation (Demo only)
    $('.demo-form').on('submit', function (e) {
        e.preventDefault();
        
        const $form = $(this);
        const $submitBtn = $form.find('button[type="submit"]');
        const originalText = $submitBtn.text();
        
        // Change button state
        $submitBtn.text('Mengirim...').prop('disabled', true).addClass('opacity-75 cursor-wait');
        
        // Simulate network request
        setTimeout(function () {
            // Revert button
            $submitBtn.text(originalText).prop('disabled', false).removeClass('opacity-75 cursor-wait');
            
            // Show success message
            const $successMsg = $('<div class="mt-4 p-4 bg-emerald-100 text-emerald-800 rounded border border-emerald-300 font-medium">Data berhasil dikirim (Ini hanya simulasi).</div>');
            
            // Remove old message if exists
            $form.find('.form-message').remove();
            $successMsg.addClass('form-message').hide();
            
            $form.append($successMsg);
            $successMsg.fadeIn();
            
            // Reset form
            $form[0].reset();
            
            // Hide message after 5 seconds
            setTimeout(function () {
                $successMsg.fadeOut(function() {
                    $(this).remove();
                });
            }, 5000);
            
        }, 1500);
    });
    
    // 3. Enable disabled submit buttons on demo forms (to allow simulation)
    $('.demo-form button[type="submit"]').prop('disabled', false).removeClass('bg-gray-300 text-gray-700 cursor-not-allowed').addClass('bg-emerald-800 text-white hover:bg-emerald-900');

    // 4. Dokter Filter
    $('.filter-btn').on('click', function () {
        const filterValue = $(this).attr('data-filter');
        
        // Update active button styling
        $('.filter-btn').removeClass('bg-emerald-800 text-white').addClass('bg-emerald-100 text-emerald-900 hover:bg-emerald-200');
        $(this).removeClass('bg-emerald-100 text-emerald-900 hover:bg-emerald-200').addClass('bg-emerald-800 text-white');
        
        if (filterValue === 'all') {
            $('.dokter-card').fadeIn(300);
        } else {
            $('.dokter-card').hide();
            $('.dokter-card[data-category="' + filterValue + '"]').fadeIn(300);
        }
    });

    // 5. Member Table Search
    $('#search-member').on('keyup', function() {
        const value = $(this).val().toLowerCase();
        $('#member-table-body tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

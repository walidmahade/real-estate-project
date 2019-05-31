$(document).ready(function() {
    /*==========================================
            global scripts: (for all page)
    ===========================================*/
    /*--- initialize popovers ---*/
    $('[data-toggle="popover"]').popover()
    /*--- dismiss popovers ---*/
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });
    /*--- add header offset ---*/
    let headerOffsetTarget = $("[data-js-header-offset]");
    // console.log(headerOffsetTarget.length);
    if ( headerOffsetTarget.length > 0 ) {
        // get header height
        let headerHeight = $("#site-header").outerHeight();
        headerOffsetTarget.css('margin-top', headerHeight)
    }
    /*-----------------------------------------
        change accordion behaviour: all pages
        add a class for easy css styling
    -------------------------------------------*/
    let $collapse = $('.collapse');
    $collapse.on('shown.bs.collapse', function () {
        $(this).prev().addClass('active-acc');
    });

    $collapse.on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active-acc');
    });
    /*-------------------------------------------
        header search
    -------------------------------------------*/
    // show hide full screen search
    const searchTrigger = $("#search");

    searchTrigger.click(function () {
        $("#main-menu-js").removeClass('show-mobile-menu');
        searchFullScreen.toggleClass('hidden');
    });

    $("#close-header-search").click(function () {
        searchFullScreen.addClass('hidden');
    });

    // show hide search results box
    const mainHeaderSearchInput = $("#main-header-search");
    const searchFullScreen = $("#search-full-screen");

    function showHideSearchResultsBox() {
        if (mainHeaderSearchInput.val() === null || mainHeaderSearchInput.val() === "") {
            // mainHeaderSearchInput.removeClass('expanded');
            searchFullScreen.removeClass('expanded');
        } else {
            // mainHeaderSearchInput.addClass('expanded');
            searchFullScreen.addClass('expanded');
        }
    }

    mainHeaderSearchInput.keyup(function() {
        showHideSearchResultsBox();
    });

    mainHeaderSearchInput.focusout(function () {
        // mainHeaderSearchInput.removeClass('dropdown-visible');
        searchFullScreen.removeClass('expanded');
    });

    mainHeaderSearchInput.focusin(function () {
        showHideSearchResultsBox();
    });
    /*==========================================
            Home page scripts
    ===========================================*/
    // hero slider, also used in about page
    $("#hero-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        appendArrows: $("#hero-slider-nav"),
        nextArrow: `<span class="hero-slider-nav-right"><svg xmlns="http://www.w3.org/2000/svg" width="42.2" height="12.827" viewBox="0 0 42.2 12.827"> <g id="arrow-right" transform="translate(-29.5 0.707)"> <path id="Combined-Shape-Copy-5" d="M49.947,6.5l.045.045-5.58,5.58-.683-.683L48.67,6.5l-5.1-5.1L44.25.712l5.743,5.743Z" transform="translate(21 -0.712)" fill="#3d3d3d" stroke="#707070" stroke-width="1" fill-rule="evenodd"/> <rect id="Rectangle-1-Copy" width="40" height="1" stroke-width="1" fill="#3d3d3d" stroke="#707070" transform="translate(30 5.706)"/> </g> </svg></span>`,
        prevArrow: `<span class="hero-slider-nav-left"><svg xmlns="http://www.w3.org/2000/svg" width="42.199" height="12.827" viewBox="0 0 42.199 12.827"> <g id="arrow-left" transform="translate(41.699 12.12) rotate(180)"> <path id="Path_1" data-name="Path 1" d="M6.381,5.788l.045.045-5.58,5.58-.683-.683L5.1,5.788,0,.683.683,0,6.426,5.743Z" transform="translate(34.566)" fill="#3d3d3d" stroke="#707070" stroke-width="1" fill-rule="evenodd"/> <rect id="Rectangle-2-Copy" width="40" height="1" stroke-width="1" fill="#3d3d3d" stroke="#707070" transform="translate(0 5.288)"/> </g> </svg></span>`,
    });

    var $featuredSlider = $('#featured-slider');
    var $featuredSliderDots = $("#f-g-slider-dots");

    $featuredSlider.on('init', function(event, slick){
        // console.log("initialized");
        var calcDotNavWidth = $featuredSliderDots.width() / $featuredSliderDots.find('Button').length;
        // console.log($featuredSliderDots.width);
        // console.log($featuredSliderDots.find('Button').length);
        // console.log(calcDotNavWidth);
        $featuredSliderDots.find('Button').width(calcDotNavWidth)
    });

    $featuredSlider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '80px',
        dots: true,
        appendDots: $featuredSliderDots,
        appendArrows: $("#f-g-slider-nav"),
        prevArrow: `<span class="nav-item nav-left"><i class="icofont-long-arrow-left"></i></span>`,
        nextArrow: `<span class="nav-item nav-right"><i class="icofont-long-arrow-right"></i></span>`,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1333,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /*------------------------------------------
        image slider: home hero
    --------------------------------------------*/
    $("#featured-homes-image-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        appendDots: $("#f-h-s__nav-dots"),
        appendArrows: $("#f-h-s__nav"),
        prevArrow: `<span class="nav-item nav-left"><i class="fas fa-chevron-left"></i></span>`,
        nextArrow: `<span class="nav-item nav-right"><i class="fas fa-chevron-right"></i></span>`,
    });

    $("#mobile-menu-icon").click(function (e) {
        e.preventDefault();
        $("#main-menu-js").addClass('show-mobile-menu');
    });

    $("#mobile-menu-close").click(function (e) {
        e.preventDefault();
        $("#main-menu-js").removeClass('show-mobile-menu');
    });

    /*============================================================
    end of home page scripts
    ==============================================================*/
    /*============================================================
        Search page scripts
    ==============================================================*/
    $(".search-results__item__favorite").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('is-favourite');
    });
    /*============================================================
        testimonials page scripts
    ==============================================================*/
    $("#testimonials--slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        // centerPadding: '80px',
        variableWidth: true,
        dots: true,
        appendDots: $featuredSliderDots,
        appendArrows: $("#testimonials-slider-nav"),
        nextArrow: `<span class="hero-slider-nav-right"><svg xmlns="http://www.w3.org/2000/svg" width="42.2" height="12.827" viewBox="0 0 42.2 12.827"> <g id="arrow-right" transform="translate(-29.5 0.707)"> <path id="Combined-Shape-Copy-5" d="M49.947,6.5l.045.045-5.58,5.58-.683-.683L48.67,6.5l-5.1-5.1L44.25.712l5.743,5.743Z" transform="translate(21 -0.712)" fill="#3d3d3d" stroke="#707070" stroke-width="1" fill-rule="evenodd"/> <rect id="Rectangle-1-Copy" width="40" height="1" stroke-width="1" fill="#3d3d3d" stroke="#707070" transform="translate(30 5.706)"/> </g> </svg></span>`,
        prevArrow: `<span class="hero-slider-nav-left"><svg xmlns="http://www.w3.org/2000/svg" width="42.199" height="12.827" viewBox="0 0 42.199 12.827"> <g id="arrow-left" transform="translate(41.699 12.12) rotate(180)"> <path id="Path_1" data-name="Path 1" d="M6.381,5.788l.045.045-5.58,5.58-.683-.683L5.1,5.788,0,.683.683,0,6.426,5.743Z" transform="translate(34.566)" fill="#3d3d3d" stroke="#707070" stroke-width="1" fill-rule="evenodd"/> <rect id="Rectangle-2-Copy" width="40" height="1" stroke-width="1" fill="#3d3d3d" stroke="#707070" transform="translate(0 5.288)"/> </g> </svg></span>`,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1333,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    });

    /*============================================================
        add property page scripts
    ==============================================================*/
    let uploadedFilesInfoWrapper = $("#uploaded-files-info");

    $("#add-gallery-images").change(function(e) {
        // let fileName = e.target.files[0].name;
        let fileName = e.target.files;
        // alert('The file "' + fileName +  '" has been selected.');
        console.log(fileName);
        for (let i = 0; i < fileName.length; i++) {
            // console.log(fileName[i].name);
            // uploadedFilesInfoWrapper.append(`<li>${fileName[i].name}</li>`)
            uploadedFilesInfoWrapper.append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${fileName[i].name}
                    <span class="badge delete-uploaded-img" data-file="files_${i}"><i class="icofont-ui-delete"></i></span>
                </li>
            `)
        }
    });

    /*============================================================
            listings page scripts
    ==============================================================*/
    let mobileFilters = $("#mobile-filters");

    $("#mobile-filters-trigger").click(function (e) {
        e.preventDefault();
        openMobileFilter();
    });
    $("#close-mobile-filter").click(function (e) {
        e.preventDefault();
        closeMobileFilter();
    });

    function openMobileFilter() {
        mobileFilters.addClass('show');
    }
    function closeMobileFilter() {
        mobileFilters.removeClass('show');
    }
});
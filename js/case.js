(function($, window) {
        // console.log(screen.width)
        // 768以下，判断为移动端 
        if (screen.width < 768) {

            $('.ca-modal-close').css('display', 'none');
            var divWidth = screen.width;
            $('.ca-modal-dialog').css('width', divWidth + 'px');
            $('#myCarousel .carousel-inner .col-md-7 ').each(function(index, el) {
                $(el).css({
                    'width': divWidth + 'px',
                    'height': divWidth * 0.77 + 'px'
                });
            });
        }

        // 清除弹窗的右边距
        document.getElementById("myModal").style.paddingRight = "0px";

        var myCarousel = $(".myCarousel");
        var body = $(body);
        var preIndex = 0;
        var indicators = $('.carousel-indicators li')
        var items = $('.carousel-inner .item')
            // 点击弹出
        $('.percase').click(function(event) {
            // Act on the event
            var nowIndex = $(this).index();
            // var windowH = $(window).height();
            // var windowW = $(window).width();

            // 所有的class清空
            indicators.each(function(index, el) {
                el.className = '';
            });
            items.each(function(index, el) {
                el.className = 'item';
            });
            indicators[nowIndex].className = 'active';
            items[nowIndex].className += ' active';
            // 弹出框
            document.getElementById('modelflag').click();
            // 移动端 按钮
            $('.js-fh5co-nav-toggle.fh5co-nav-toggle.fh5co-nav-white').css('display','none');
        });

        // 触发 点击 关闭弹窗 事件
        $('.ca-modal-close, .ca-phone-arrow').click(function(e) {
            $('.js-fh5co-nav-toggle.fh5co-nav-toggle.fh5co-nav-white').css('display','block');
            e.preventDefault();
            $('#myModal').trigger('click');



        });



    $("#myModal .carousel-inner .item").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            //This only fires when the user swipes left
            $('.right.carousel-control.ca-arrow').trigger('click')
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            //This only fires when the Rightuser swipes right
            $('.left.carousel-control.ca-arrow').trigger('click')
        }

    });





    // iptv页面开始

})($, window)

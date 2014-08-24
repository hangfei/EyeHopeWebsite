/*
 * blueimp Gallery Demo JS 2.11.1
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from flickr:
    $.ajax({
        url: 'https://api.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.interestingness.getList',
            api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var carouselLinks = [],
            linksContainer = $('#links'),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:

            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/1_c.jpg'))
                .prop('href', 'image/gallery/1.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/2_c.jpg'))
                .prop('href', 'image/gallery/2.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_10_c.jpg'))
                .prop('href', 'image/gallery/4_10.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);





            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/8_c.jpg'))
                .prop('href', 'image/gallery/8.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_12_c.jpg'))
                .prop('href', 'image/gallery/4_12.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);




            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/9_c.jpg'))
                .prop('href', 'image/gallery/9.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_13_c.jpg'))
                .prop('href', 'image/gallery/4_13.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/10_c.jpg'))
                .prop('href', 'image/gallery/10.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_11_c.jpg'))
                .prop('href', 'image/gallery/4_11.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);



            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/11_c.jpg'))
                .prop('href', 'image/gallery/11.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);




            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/2_1_c.jpg'))
                .prop('href', 'image/gallery/2_1.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/2_2_c.jpg'))
                .prop('href', 'image/gallery/2_2.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/12_c.jpg'))
                .prop('href', 'image/gallery/12.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/2_3_c.jpg'))
                .prop('href', 'image/gallery/2_3.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/2_4_c.jpg'))
                .prop('href', 'image/gallery/2_4.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/2_5_c.jpg'))
                .prop('href', 'image/gallery/2_5.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/2_6_c.jpg'))
                .prop('href', 'image/gallery/2_6.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);



            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/3_1_c.jpg'))
                .prop('href', 'image/gallery/3_1.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/3_2_c.jpg'))
                .prop('href', 'image/gallery/3_2.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_7_c.jpg'))
                .prop('href', 'image/gallery/4_7.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);

            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_8_c.jpg'))
                .prop('href', 'image/gallery/4_8.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);

            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_9_c.jpg'))
                .prop('href', 'image/gallery/4_9.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/3_c.jpg'))
                .prop('href', 'image/gallery/3.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);



            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/5_c.jpg'))
                .prop('href', 'image/gallery/5.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);




            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/7_c.jpg'))
                .prop('href', 'image/gallery/7.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);



            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/3_3_c.jpg'))
                .prop('href', 'image/gallery/3_3.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_1_c.jpg'))
                .prop('href', 'image/gallery/4_1.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_2_c.jpg'))
                .prop('href', 'image/gallery/4_2.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);

            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_3_c.jpg'))
                .prop('href', 'image/gallery/4_3.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);


            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/6_c.jpg'))
                .prop('href', 'image/gallery/6.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);



            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_4_c.jpg'))
                .prop('href', 'image/gallery/4_4.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);

            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_5_c.jpg'))
                .prop('href', 'image/gallery/4_5.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);

            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_6_c.jpg'))
                .prop('href', 'image/gallery/4_6.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);




            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/5_1_c.jpg'))
                .prop('href', 'image/gallery/5_1.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);



            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/4_c.jpg'))
                .prop('href', 'image/gallery/4.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);



            $('<a/>')
                .append($('<img>').prop('src', 'image/gallery/5_2_c.jpg'))
                .prop('href', 'image/gallery/5_2.jpg')
                .prop('title', '01.jpg')
                .attr('data-gallery', '')
                .appendTo(linksContainer);






            carouselLinks.push({
                href: 'image/gallery/7.jpg',
                title: '7.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/4_10.jpg',
                title: '4_10.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/4_2.jpg',
                title: '4_2.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/4_12.jpg',
                title: '4_12.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/4_13.jpg',
                title: '4_13.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/4_11.jpg',
                title: '4_11.jpg'
            });





            carouselLinks.push({
                href: 'image/gallery/3_1.jpg',
                title: '3_1.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/4_7.jpg',
                title: '4_7.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/4_8.jpg',
                title: '4_8.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/4_9.jpg',
                title: '4_9.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/3_3.jpg',
                title: '3_3.jpg'
            });



            carouselLinks.push({
                href: 'image/gallery/4_5.jpg',
                title: '4_5.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/4_4.jpg',
                title: '4_46.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/4_6.jpg',
                title: '4_6.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/13.jpg',
                title: '6.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/6.jpg',
                title: '01.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/5_2.jpg',
                title: '5_2.jpg'
            });




            carouselLinks.push({
                href: 'image/gallery/1.jpg',
                title: '01.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/2.jpg',
                title: '2.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/3.jpg',
                title: '3.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/4.jpg',
                title: '4.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/5.jpg',
                title: '01.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/1.jpg',
                title: '01.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/5.jpg',
                title: '5.jpg'
            });



            carouselLinks.push({
                href: 'image/gallery/8.jpg',
                title: '01.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/9.jpg',
                title: '01.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/10.jpg',
                title: '6.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/11.jpg',
                title: '6.jpg'
            });


            carouselLinks.push({
                href: 'image/gallery/12.jpg',
                title: '6.jpg'
            });

            carouselLinks.push({
                href: 'image/gallery/13.jpg',
                title: '6.jpg'
            });






        // Initialize the Gallery as image carousel:
        blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        });
    });

    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
        {
            title: 'Sintel',
            href: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
            type: 'video/mp4',
            poster: 'http://media.w3.org/2010/05/sintel/poster.png'
        },
        {
            title: 'Big Buck Bunny',
            href: 'http://upload.wikimedia.org/wikipedia/commons/7/75/' +
                'Big_Buck_Bunny_Trailer_400p.ogg',
            type: 'video/ogg',
            poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
                'Big.Buck.Bunny.-.Opening.Screen.png/' +
                '800px-Big.Buck.Bunny.-.Opening.Screen.png'
        },
        {
            title: 'Elephants Dream',
            href: 'http://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
                'Elephants_Dream_%28high_quality%29.ogv/' +
                'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
            type: 'video/webm',
            poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
                'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
        },
        {
            title: 'LES TWINS - An Industry Ahead',
            type: 'text/html',
            youtube: 'zi4CIXpx7Bg'
        },
        {
            title: 'KN1GHT - Last Moon',
            type: 'text/html',
            vimeo: '73686146',
            poster: 'http://b.vimeocdn.com/ts/448/835/448835699_960.jpg'
        }
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});
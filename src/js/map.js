ymaps.ready(function () {
    let footer = document.querySelector('footer')
    let hidden = document.querySelector('.hidden')

    var myMap = new ymaps.Map('myMap', {
        center: [55.700359, 37.740776],
        zoom: 18,
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: [
            '<address>',
            '<strong>Территория Баланса</strong>',
            '<br/>',
            'г. Москва, ул. Юных Ленинцев, д.25',
            '<br/>',
            '+7-925-221-99-29',
            '<br/>',
            'Email : <a href="mailto:info@terrabalans.ru">info@terrabalans.ru</a>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#blueIcon',
        iconCaptionMaxWidth: '150',
    });

    myMap.geoObjects.add(myPlacemark)

    // myPlacemark.events.add(['click', 'balloonclose'], function (e){
    //     if(e.get('type')==='click'){
    //         hidden.classList.remove('b-hide')
    //         hidden.classList.add('b-show')
    //     }
    //     else if(e.get('type')==='balloonclose'){
    //         hidden.classList.add('b-hide')
    //         hidden.classList.remove('b-show')
    //     }
    // })
});



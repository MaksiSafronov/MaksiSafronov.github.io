ymaps.ready(['Panel']).then(function () {
    var map = new ymaps.Map("map", {
        center: [55.970, 38.200],
        zoom: 9.4,
        controls: []
    });
    // Создадим контент для меток.
    var Schelkovo =     '<a href="Schelkovo.html">Щелково</a>' +
                        '<p><img style="width: 190px;" src="img/Flag_of_Schelkovo_(Moscow_oblast).png"></p>'+
                        '<p>Щёлково (исторически деревня Щёлкова усадьбы Гребнево) - </p>'+
                        '<p>Город областного подчинения.</p>'+
                        '<p>Население - 135к человек. Площадь города - 52 км²</p>';

    var Trubino =       '<a href="Trubino.html">Трубино</a>' +
                        '<p><img style="width: 190px;" src="img/trub.jpg"></p>'+
                        '<p>Село в Щёлковском районе,</p>'+
                        '<p>административный центр Трубинского сельского поселения.</p>'+
                        '<p>Население - 1000 человек</p>';


    var Ogudnevo =      '<a href="Ogudnevo.html">Огуднево</a>' +
                        '<p><img style="width: 190px;" src="img/ogud.jpg"></p>'+ 
                        '<p>Деревня в городском округе Щёлково.</p>'+
                        '<p>Первое упоминание в 1584—1586 годах.</p>'+
                        '<p>Население - 1100 человек.</p>';


    var Fryanovo =      '<a href="Fryanovo.html">Фряново</a>' +
                        '<p><img style="width: 190px;" src="img/Flag_of_Fryanovo_(Moscow_oblast).png"></p>'+
                        '<p>Рабочий посёлок в городском округе Щёлково.</p>'+
                        '<p>Расположен на реке Ширенке.</p>'+
                        '<p>Население — 12 523 человек.</p>';
                        
                        
    var Monino =        '<a href="Monino.html">Монино</a>' +
                        '<p><img style="width: 190px;" src="img/Flag_of_Monino.png"></p>'+
                        '<p>Посёлок городского типа в городском округе Щёлково.</p>'+
                        '<p>Расположен в 23 км к востоку от Москвы по Горьковскому шоссе.</p>'+
                        '<p>Население — 20 281 человек.</p>';


    var Zagoryanskiy =  '<a href="Zagoryanskiy.html">Загорянский</a>' +
                        '<p><img style="width: 190px;" src="img/Flag_of_Zagoryansky_(Moscow_oblast).png"></p>'+
                        '<p>Дачный посёлок в городском округе Щёлково.</p>'+
                        '<p>Первое упоминание - 1 июля 1912г.</p>'+
                        '<p>Население — 10 291 человек.</p>';


    var Litvinovo =  '<a href="Litvinovo.html">Litvinovo</a>' +
                        '<p><img style="width: 190px;" src="img/litv.jpg"></p>'+
                        '<p>Посёлок в городском округе Щёлково.</p>'+
                        '<p>Расположен на правом берегу речки Лашутки.</p>'+
                        '<p>Население - 3200 человек.</p>';

    var Grebnevo =  '<a href="Grebnevo.html">Гребнево</a>' +
                        '<p><img style="width: 190px;" src="img/Greb.jpg"></p>'+
                        '<p>Деревня в городском округе Щёлково.</p>'+
                        '<p>Располагается на левом берегу реки Любосеевки бассейна Клязьмы.</p>'+
                        '<p>Население - 1484 человека.</p>';

    var Medvejie_ozera = '<a href="Medvejie_ozera.html">Медвежьи Озера</a>' +
                        '<p><img style="width: 190px;" src="img/medv.jpg"></p>'+
                        '<p>Деревня в городском округе Щёлково.</p>'+
                        '<p>Граничит с деревней Долгое Лёдово и посёлком Новый Городок.</p>'+
                        '<p>Население - 5500 человек.</p>';

    // Создадим и добавим панель на карту.
    var panel = new ymaps.Panel();
    map.controls.add(panel, {
        float: 'left'
    });
    // Создадим коллекцию геообъектов.
    var collection = new ymaps.GeoObjectCollection(null, {
        // Запретим появление балуна.
        hasBalloon: false,
        iconColor: '#3b5998'
    });
    // Добавим геообъекты в коллекцию.
    collection
        .add(new ymaps.Placemark([56.064644, 38.261956], {
            balloonContent: Ogudnevo
        }))
        .add(new ymaps.Placemark([55.986939, 38.124784], {
            balloonContent: Trubino
        }))
        .add(new ymaps.Placemark([55.921134, 37.991851], {
            balloonContent: Schelkovo
        }))
        .add(new ymaps.Placemark([56.133788, 38.446176], {
            balloonContent: Fryanovo
        }))
        .add(new ymaps.Placemark([55.842377, 38.194586], {
            balloonContent: Monino
        }))
        .add(new ymaps.Placemark([55.926902, 37.916310], {
            balloonContent: Zagoryanskiy
        }))
        .add(new ymaps.Placemark([56.020343, 38.123893], {
            balloonContent: Litvinovo
        }))
        .add(new ymaps.Placemark([55.950874, 38.088413], {
            balloonContent: Grebnevo
        }))
        .add(new ymaps.Placemark([55.868101, 37.989696], {
            balloonContent: Medvejie_ozera
        }));
    // Добавим коллекцию на карту.
    map.geoObjects.add(collection);
    // Подпишемся на событие клика по коллекции.
    collection.events.add('click', function (e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        var target = e.get('target');
        // Зададим контент боковой панели.
        panel.setContent(target.properties.get('balloonContent'));
        // Переместим центр карты по координатам метки с учётом заданных отступов.
        map.panTo(target.geometry.getCoordinates(), { useMapMargin: true });
    });
});
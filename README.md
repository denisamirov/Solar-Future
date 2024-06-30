#### Настройка диспетчерского ПО:
1. Арендуйте облачный сервер;
2. [Откройте порт](https://timeweb.cloud/docs/windows-guides/otkrytie-portov-v-brandmauehre-windows-server) для входящих соединений модемов Promodem;
3. Установите [GSMService](https://promodem.ru/produkty/po-dlya-modemov-serii-gsm-i-3g/sluzhba-dannykh-gsmservice-.html); 
4. Скачайте программу [GSMConfig](https://promodem.ru/produkty/po-dlya-nb-iot-3g-gprs-loggery/servisnoe-po-promodem-config.html);
5. Задайте в ПО GSMConfig во вкладке "Настройки подключений" IP и порт;
6. Во вкладке "Настройки подключений" после обновления информации нужно нажать "Обновить"
--------

#### Настройка GSM-модема:
*Этот пункт нужно выполнять с того хоста, куда физически по USB-интерфейсу можно подключить модем*
1. Откройте GSMConfig;
2. Во вкладке "Настройка канала связи" оставляем все, как есть
3. Залейте актуальную прошивку в модем;
4. Задайте IP и порт диспетчерского компа во вкладке "Настройки подключений";
5. Во вкладке "Таблица соответствия" создайте новое подключение. 
6. Обязательно прочитайте параметры и укажите порт. По указанному TCP-порту на стороне сервера будет определен модем
-------

#### Полезные инструменты:
1. [Hercules](https://www.hw-group.com/software/hercules-setup-utility)
2. [Сайт Promodem](https://promodem.ru/)
3. [GSM Config](https://promodem.ru/produkty/po-dlya-nb-iot-3g-gprs-loggery/servisnoe-po-promodem-config.html)
4. [GSM Service](https://promodem.ru/produkty/po-dlya-modemov-serii-gsm-i-3g/sluzhba-dannykh-gsmservice-.html)
5. [Видеоинструкция](https://www.youtube.com/watch?v=HPCJwuaTbRk)


#### Запуск c использованием Docker
1. docker up docker-compose.yml
2. Адрес хоста для docker - host.docker.internal


#### Запуск без использования Docker
##### Запуск backend
1. cd api
2. npm i
3. npm run dev
##### Запуск frontend
1. cd next 
2. npm i
3. npm run dev
##### Запуск mongod
1. cd mongo/db 
2. mongod --dbpath ./ --port 27017
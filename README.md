# Лабораторная работа №4
Разработка кроссплатформенных приложений на React Native

## Дано
Приложение - небольшой мессенджер, который использует Firebase (authentification + cloud firestore) в качестве бэкенда. Реализовано 5 экранов: логина, регистрации, домашний экран, экран чата и экран добавления чатов.
## Задание
1. Добавить экран профиля пользователя (переход по нажатию на свой аватар на домашнем экране). На экране отображается:
   1. Фото пользователя
   2. Имя 
   3. Email
   4. Доп. задание. Общее количество отправленных сообщений в разные чаты
2. Добавить экран поиска диалогов по названию (переход по нажатию на иконку лупы на домашнем экране). На экране:
   1. Строка ввода 
   2. Список найденных диалогов (аналогичный списку на домашнем экране)
   3. По мере ввода в поисковую строку в списке должны отображаться диалоги, в названии которых присутствует введенная строка. При пустом запросе отображаются все диалоги в системе
3. Реализовать удаление своих сообщений на экране чата (ChatScreen). Сообщения других пользователей удалить при этом нельзя.
4. Доп. задание. Добавить реакции на сообщения на экране чатов (Like/Dislike или другие кастомные реакции)

## Материалы
 - Официальная документация: https://reactnative.dev/docs/getting-started 
 - Nader Dabit, React Native in Action. Developing iOS and Android apps with JavaScript (2019)
 - Maximilian Schwarzmüller, React Native - The Practical Guide [O'Reilly](https://www.oreilly.com/library/view/react-native/9781789139747/)
 - React Native Crash Course | Build a Complete App (3:24:28) - [YouTube](https://www.youtube.com/watch?v=VozPNrt-LfE&t=9603s)

## Настройка окружения
Инструкция на [оф.сайте](https://reactnative.dev/docs/environment-setup)
 - Для беспроводной отладки на физическом мобильном устройстве понадобится: Node.js + npm, Expo, приложение Expo Go на смартфоне. Мобильное устройство должно быть в той же беспроводной сети, что и ПК разработчика.
 - Для отладки по кабелю или с помощью эмулятора понадобится:
   - Запуск под iOS: macOS на ПК разработчика, Node.js, Watchman, Ruby, Xcode + iOS Simulator, CocoaPods
   - Запуск под Android: Node.js + npm, Expo, JDK, Android Studio (а именно, компоненты, которые будут установлены вместе с Android Studio: ADB, Google USB Driver, Android SDK, Android SDK Platform Tools, Android Emulator). Добавить в переменные среды ANDROID_HOME (путь к Android SDK) и в path добавить путь к platform-tools.
 - Отладка на Веб-версии: Node.js + npm, Expo, react-native-web, react-dom, @expo/webpack-config. Библиотеки можно поставить через npm expo install ...

Не забудьте добавить файл firebase-credentials.js, в который нужно поместить константу - объект, содержащий ваши личные параметры подключения. Процесс настройки окружения и подключения к firebase рассматривался на лекции.

## Настройка репозитория
Сделайте свою приватную копию репозитория. Как это сделать, описано [тут](https://gist.github.com/0xjac/85097472043b697ab57ba1b1c7530274) или [тут](https://stackoverflow.com/questions/10065526/github-how-to-make-a-fork-of-public-repository-private). Или можно создать чистый репозиторий самостоятельно и залить код туда. Важно, чтобы он был приватным!

Добавьте проверяющих в коллабораторы. GitHub логины: **maegv, (GremGroz) sasha.b997@gmail.com**.

## Отправка задания
Выполните задания, сохраните изменения, сделайте commit и push в свой репозиторий.

Напишите на почту apicourse@yandex.ru письмо с темой вида MiniLab-4 ФИО группа с просьбой проверить работу. В письме должна быть ссылка на репозиторий с выполненной работой, проверяться будет версия, которая лежит в ветке main. Репозиторий должен быть приватным; в ветке main не должно быть файлов и папок с русскими названиями!

### Дедлайн
**Дедлайн:** 23:59 19/11/2022 (19 ноября).

**Базовая оценка:** 0.2 балла (+ до 20% дополнительно за выполнение всех доп. заданий).

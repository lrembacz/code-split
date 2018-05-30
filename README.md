# Code Split

Poradnik do VueJS Code Split - Webpack chunks + Async Components for SPA and MPA.

## Pierwsze kroki

Poniższa instrukcja przedstawia sposób uruchomienia tego projektu na własnej maszynie.

## Wymagania wstępne

Do uruchomienia projektu potrzebny jest podstawowy pakiet PHP oraz MySQL wymagany do uruchomienia projektu napisanego w Laravelu wersji 5.6 wraz z NodeJS.

Więcej informacji dostępnych tutaj: https://laravel.com/docs/5.6/installation

## Instalacja

1 . Pobranie projektu z githuba

```
git clone https://github.com/lrembacz/code-split.git
```

2 . Composer install w katalogu głównym

```
composer install
```

3 . Utworzenie folderu node_modules

```
npm install
```

4 . Przejście do trybu developerskiego

```
npm run dev
```

## Debugowanie / Produkcja

### Debugowanie

```
npm run dev
```

Wymuszenie pojedyńczej kompilacji plików vue

```
npm run watch
```

Wymuszenie kompilacji plików vue po każdej zmianie

### Produkcja

```
npm run prod
```
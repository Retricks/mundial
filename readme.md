Dokumentacja aplikacji Mundial 2022

Aplikacja Mundial 2022 to prosta aplikacja do obsługi wyników meczów piłkarskich. Użytkownik ma możliwość wprowadzenia wyników poszczególnych meczów oraz przeglądania statystyk grupowych.

Opis plików
App.js - główny plik aplikacji, w którym znajduje się komponent App odpowiedzialny za logikę aplikacji
Matches.js - komponent odpowiedzialny za wyświetlanie pojedynczego meczu oraz obsługę zmiany wyniku
Stats.js - komponent odpowiedzialny za wyświetlanie statystyk dla danej grupy
allmatches.js - plik z danymi dotyczącymi wszystkich meczów
Opis komponentów
Komponent App
Główny komponent aplikacji, zawiera logikę odpowiedzialną za obsługę meczów oraz statystyk.

Props
Komponent App nie przyjmuje żadnych propsów.

Stan
Komponent App korzysta z dwóch stanów:

matches - tablica z danymi dotyczącymi wszystkich meczów
editingIndex - indeks meczu, dla którego aktualnie edytowany jest wynik
Funkcje
Komponent App posiada następujące funkcje:

handleScoreChange(event, index, type) - funkcja obsługująca zmianę wyniku meczu. Przyjmuje trzy argumenty:
event - obiekt zdarzenia związanego z zmianą wyniku
index - indeks meczu, dla którego zmieniano wynik
type - typ zmiany wyniku, możliwe wartości to homeScore lub awayScore
handleScoreClick(index) - funkcja obsługująca kliknięcie w mecz, umożliwiająca edycję wyniku. Przyjmuje jeden argument - indeks meczu.

Komponent Matches
Komponent odpowiedzialny za wyświetlanie pojedynczego meczu oraz obsługę zmiany wyniku.

Props
Komponent Matches przyjmuje następujące propsy:

match - obiekt z danymi dotyczącymi meczu
index - indeks meczu w tablicy meczów
editingIndex - indeks meczu, dla którego aktualnie edytowany jest wynik
setEditingIndex - funkcja umożliwiająca zmianę indeksu meczu, dla którego edytowany jest wynik
handleScoreChange - funkcja obsługująca zmianę wyniku meczu
handleScoreClick - funkcja obsługująca kliknięcie w mecz, umożliwiająca edycję wyniku
Stan
Komponent Matches nie korzysta z żadnych stanów.

Komponent Stats
Komponent odpowiedzialny za wyświetlanie statystyk dla danej grupy.

Props
Komponent Stats przyjmuje następujące propsy:

group - oznaczenie grupy, dla której wyświetlane są statystyki
matches - tablica z danymi dotyczącymi wszystkich meczów
Stan
Komponent Stats nie korzysta z żadnych stanów.
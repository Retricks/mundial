Dokumentacja kodu:

1. Opis ogólny:
Kod przedstawia aplikację wyświetlającą mecze piłkarskie oraz ich statystyki. Aplikacja składa się z dwóch głównych komponentów: Matches oraz Stats. Komponent Matches odpowiada za wyświetlanie pojedynczego meczu oraz pozwala na edycję wyników meczu, natomiast komponent Stats wyświetla statystyki dla każdej z grup meczów. Dane meczów są przechowywane w stanie komponentu App i są pobierane z pliku allmatches lub z localStorage, jeśli istnieją tam dane.

2. Importy:
- React: biblioteka React, używana do tworzenia interfejsu użytkownika za pomocą komponentów
- useState i useEffect: hooki React, używane do zarządzania stanem i efektami w komponentach
- allmatches: plik z danymi wszystkich meczów
- Stats: komponent odpowiedzialny za wyświetlanie statystyk
- Matches: komponent odpowiedzialny za wyświetlanie pojedynczego meczu i edycję jego wyników

3. Komponent App:

a. Komponent App jest głównym komponentem aplikacji i zarządza danymi meczów oraz wyświetla komponenty Matches i Stats. Komponent składa się z następujących elementów:
- Zmienna matches przechowująca dane meczów. Domyślnie pobierana jest z localStorage, jeśli są tam dostępne, w przeciwnym razie pobierana jest z pliku allmatches.
- Zmienna editingIndex przechowująca indeks meczu, który jest obecnie edytowany. Domyślnie ustawiona na null.
- Funkcja handleScoreChange, która jest wywoływana podczas zmiany wyniku meczu. Funkcja aktualizuje wynik meczu i ustawia flagę "played" na true.
- Funkcja handleScoreClick, która jest wywoływana podczas kliknięcia na wynik meczu. Funkcja ustawia indeks meczu, który ma zostać edytowany, poprzez ustawienie wartości zmiennej editingIndex.
- Hook useEffect, który jest wywoływany przy każdej zmianie stanu matches i umożliwia zapisanie danych meczów do localStorage.

b. Komponent App renderuje następujące elementy:
- Nagłówek z tekstem "Mecze"
- Kontener z komponentami Matches dla każdego meczu z listy matches. Każdy komponent Matches otrzymuje następujące propsy:
- match - obiekt meczu
- index - indeks meczu w liście matches
- editingIndex - indeks meczu, który jest obecnie edytowany
- setEditingIndex - funkcja umożliwiająca ustawienie indeksu meczu, który ma zostać edytowany
- handleScoreChange - funkcja obsługująca zmianę wyniku meczu
- handleScoreClick - funkcja obsługująca kliknięcie na wynik meczu
- Nagłówek z tekstem "Statystyki"
- Kontener z komponentami Stats dla każdej grupy meczów. Każdy komponent Stats otrzymuje następujące propsy:
- group - nazwa grupy meczów
- matches - lista meczów

4. Komponent Matches:
a. Komponent Matches odpowiada za wyświetlanie pojedynczego meczu oraz umożliwienie edycji wyniku meczu. Składa się z następujących elementów:
- Nagłówek z nazwami drużyn oraz wynikiem meczu
- Formularz z polami do edycji wyniku meczu, jeśli indeks meczu jest równy editingIndex
- Przycisk "Zapisz", który jest wyświetlany tylko wtedy, gdy indeks meczu jest równy editingIndex

b. Komponent Matches otrzymuje następujące propsy:
- match - obiekt meczu
- index - indeks meczu w liście matches
- editingIndex - indeks meczu, który jest obecnie edytowany
- setEditingIndex - funkcja umożliwiająca ustawienie indeksu meczu, który ma zostać edytowany
- handleScoreChange - funkcja obsługująca zmianę wyniku meczu
- handleScoreClick - funkcja obsługująca kliknięcie na wynik meczu
- Wszystkie te propsy są przekazywane do komponentu Matches przez komponent App.

c. Komponent Matches renderuje następujące elementy:
- Nagłówek z nazwami drużyn oraz wynikiem meczu. Nagłówek jest klikalny i wywołuje funkcję handleScoreClick przekazaną jako prop.
- Formularz z polami do edycji wyniku meczu, jeśli indeks meczu jest równy editingIndex. Pola są wyświetlane tylko wtedy, gdy indeks meczu jest równy editingIndex. Każde pole jest obsługiwane przez funkcję handleScoreChange przekazaną jako prop.
- Przycisk "Zapisz", który jest wyświetlany tylko wtedy, gdy indeks meczu jest równy editingIndex. Przycisk wywołuje funkcję setEditingIndex przekazaną jako prop i ustawia wartość editingIndex na null.

5. Komponent Stats:
a. Komponent Stats odpowiada za wyświetlanie statystyk dla danej grupy meczów. Składa się z następujących elementów:
- Nagłówek z nazwą grupy meczów
- -Tabela z danymi statystyk dla każdej drużyny w grupie: liczba rozegranych meczów, zdobytych punktów, strzelonych i straconych bramek

b. Komponent Stats otrzymuje następujące propsy:
- group - nazwa grupy meczów
- matches - lista meczów

c. Komponent Stats renderuje następujące elementy:
- Nagłówek z nazwą grupy meczów
- Tabela z danymi statystyk dla każdej drużyny w grupie. Statystyki są obliczane na podstawie meczów z listy matches, które zostały rozegrane w grupie o nazwie group.

6. Informacje o autorze:
a. Kamil Langer

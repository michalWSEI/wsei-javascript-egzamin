/*
Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.
Każda funkcja niech zwraca tablicę wypełnioną odpowiednimi elementami. ( Pamiętasz, że zwracanie, a wyświetlanie to różnica? )
Wykonaj następujące polecenia:

1. Szukanie nazw tagów:

znajdź wszystkie elementy o klasie sample_class,
stwórz funkcję getTagsOfElements(elements) do której przekaż jako argument znalezione elementy,
stwórz w funkcji tablicę i wypełnij ją nazwami tagów. Pobierz je z elementów przekazanych jako argument.
zwróć tablicę.
2. Szukanie nazw klas:

Znajdź element o id sample_id.
stwórz funkcję getClassesOfElement(element) do której przekaż jako argument znaleziony element.
stwórz w funkcji tablicę i wypełnij ją nazwami klas. Pobierz klasy z przekazanego jako argument elementu.
zwróć tablicę.
3. Szukanie tekstu:

Znajdź wszystkie elementy listy znajdujące się w elemencie o klasie sample_class_2,
stwórz funkcję getInnerTextsOfElements(elements), do której przekaż jako argument znalezione elementy.
stwórz w funkcji tablicę i wypełnij ją tekstami pobranymi z elementów przekazanych jako argument.
zwróć tablicę.
4. Szukanie adresów linków:

Znajdź wszystkie linki,
stwórz funkcję getAddressesOfElements(elements), do której przekaż jako argument znalezione elementy.
stwórz w funkcji tablicę i wypełnij ją adresami pobranymi z elementów przekazanych jako argument.
zwróć tablicę.
5. Szukanie tagów dzieci:

Znajdź wszystkie dzieci elementu o klasie sample_class_3,
do funkcji, która wyszukuje tagi elementów, przekaż jako argument, znalezione dzieci.
*/

const sample_class_elements = document.querySelectorAll('.sample_class')
const sample_id_element = document.querySelector('#sample_id')
const sample_class_2 = document.querySelectorAll('.sample_class_2 > ul > li')
const a_elemenets = document.querySelectorAll('a')
const sample_class_3_children = document.querySelector('.sample_class_3').children

function getTagsOfElements(sample_class_elements) {
    const tagNamesArr = [];
    for(let i = 0; i < sample_class_elements.length; i++) {
        tagNamesArr.push(sample_class_elements[i].tagName)
    }
    return tagNamesArr;
}
function getClassesOfElement(element) {
    const cssClassArr = []
    for(let i = 0; i < element.classList.length; i++) {
        cssClassArr.push(element.classList[i])
    }
    return cssClassArr;
}
function getInnerTextsOfElements(elements) {
    const innerHTMLarr = []
    for(let i = 0; i < elements.length; i++) {
        innerHTMLarr.push(elements[i].innerText)
    }
    return innerHTMLarr;
}
function getAddressesOfElements(elements) {
    const allHrefElemenets = []
    for(let i = 0; i < elements.length; i++) {
        allHrefElemenets.push(elements[i].href)
    }
    return allHrefElemenets;
}

console.log(getTagsOfElements(sample_class_elements))
console.log(getClassesOfElement(sample_id_element))
console.log(getInnerTextsOfElements(sample_class_2))
console.log(getAddressesOfElements(a_elemenets))
console.log(getTagsOfElements(sample_class_3_children))
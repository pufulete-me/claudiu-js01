let calculateRectangleArea = (L, l) => {
  return L * l;
};

console.warn('Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.');

let totalWallSurface = 0;
let longWallSurface = calculateRectangleArea(6, 2.5);
let shortWallSurface = calculateRectangleArea(4, 2.5);
let doorSurface = calculateRectangleArea(2.2, 1.5);
let windowSurface = calculateRectangleArea(2, 1.5);
totalWallSurface = 2 * (longWallSurface + shortWallSurface);

console.log(`Suprafata necesara de tapet este: ${totalWallSurface - doorSurface - windowSurface} m2.`);

console.warn('Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia. O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.');

let calculateSquareArea = (l) => {
  let squareSurface = calculateRectangleArea(l, l);
  return squareSurface;
}

console.warn('Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.');

let totalRoomSurface = 2 * calculateRectangleArea(12, 2.5) + 2 * calculateRectangleArea(9, 2.5);
doorSurface = calculateRectangleArea(3, 2);
windowSurface = calculateRectangleArea(3, 2);
let totalNeededSurface = totalRoomSurface - doorSurface - windowSurface;

console.log(`Suprafata de tapet este de: ${totalNeededSurface} mp.`);

console.warn(`Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().`);

let aggregateSurfaceArea = (L, l, newL, newl) => {
  let rectangle1Surface = calculateRectangleArea(L, l);
  let rectangle2Surface = calculateRectangleArea(newL, newl);
  return rectangle1Surface + rectangle2Surface;
}

console.warn(`Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102. `);

let totalSurface = aggregateSurfaceArea(48, 92, 51, 102);

console.log(`Suprafata totala este: ${totalSurface} mp`);



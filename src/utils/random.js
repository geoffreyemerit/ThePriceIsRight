// c'est une fonction qui prend un nombre min et un nombre max pour determiner un nombre aleatoire
export const randomRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

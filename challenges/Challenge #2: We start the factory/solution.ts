/*
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
*/

function manufacture(gifts: string[], materials: string): string[] {
  const buildableGifts: string[] = [];
  const materialsChars: Set<string> = new Set<string>();

  for (const material of materials) {
    materialsChars.add(material);
  }

  for (const gift of gifts) {
    let canBeBuilt = true;

    for (const char of gift) {
      if (!materialsChars.has(char)) {
        canBeBuilt = false;
        break;
      }
    }

    if (canBeBuilt) {
      buildableGifts.push(gift);
    }
  }

  return buildableGifts;
}

// Time Complexity: O(n * m + k)
// Space Complexity: O(k + n)
export function hash(key: string, bucketsNumber: number) {
  let hashCode = 0;
  // Let's go through all key characters and add their code to hash
  for (
    let characterIndex = 0;
    characterIndex < key.length;
    characterIndex += 1
  ) {
    hashCode += key.charCodeAt(characterIndex);
  }

  return hashCode % bucketsNumber;
}

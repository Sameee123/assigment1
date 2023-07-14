function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let magician of magicians) {
    const greatMagician = magician + " the Great";
    greatMagicians.push(greatMagician);
  }
  return greatMagicians;
}

const magicians: string[] = ['sameer', 'sam', 'iqbal', 'khan'];
const greatMagicians: string[] = make_great(magicians);

show_magicians(greatMagicians);
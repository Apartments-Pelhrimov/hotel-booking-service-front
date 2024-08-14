const getPeopleEnding = (beds: number): string => {
  if (
    beds % 10 >= 5 ||
    beds % 10 === 0 ||
    (beds % 100 >= 11 && beds % 100 <= 19)
  ) {
    return 'osob';
  }
  if (beds % 10 === 1) {
    return 'osoba';
  }
  return 'osoby';
};

export default getPeopleEnding;

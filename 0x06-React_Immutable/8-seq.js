import Immutable from 'immutable';

const { Seq } = Immutable;

const upperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function printBestStudents(object) {
  const bestScore = Seq(object)
    .filter((std) => std.score < 70)
    .map((std) => {
      const { firstName, lastName } = std;
      return {
        ...std,
        firstName: upperCase(firstName),
        lastName: upperCase(lastName),
      };
    });

  bestScore.forEach((std) => console.log(std));
}

/**
 Given a set of letter grades, output the GPA (grade point average) of those grades.

Key and examples:

A = 4 grade points
A- = 3.7 grade points
B+ = 3.3 grade points
B = 3 grade points
B- = 2.7 grade points
C+ = 2.3 grade points
C = 2 grade points
C- = 1.7 grade points
D+ = 1.3 grade points
D = 1 grade point
D- = 0.7 grade points
F = 0 grade points
$ calculateGPA(['A'])
$ 4

$ calculateGPA(['F', 'F', 'F'])
$ 0

$ calculateGPA(['A', 'A-', 'B+', 'B', 'B-'])
$ 3.3

$ calculateGPA(['A', 'B+', 'C-', 'A'])
$ 3.3

 */

/**
 * Round a number to a certain number of decimal places
 * @param {number} value to be rounded
 * @param {number} precision number of decimal places
 * @returns {number} rounded value
 */
const round = (value, precision = 0) => {
  const multiplier = Math.pow(10, precision)
  return Math.round(value * multiplier) / multiplier
}

const gradeKey = {
  A: 4,
  'A-': 3.7,
  'B+': 3.3,
  B: 3,
  'B-': 2.7,
  'C+': 2.3,
  C: 2,
  'C-': 1.7,
  'D+': 1.3,
  D: 1,
  'D-': 0.7,
  F: 0,
}

/**
 * Given a set of letter grades, output the GPA (grade point average) of those grades.
 * @param {string[]} grades
 * @returns {number} the Grade Point Average (GPA) with 1 decimal place
 * @example calculateGPA(['F', 'F', 'F']) // 0
 * @example calculateGPA(['A', 'A-', 'B+', 'B', 'B-']) // 3.3
 * @example calculateGPA(['A', 'B+', 'C-', 'A']) // 3.3
 */
export const calculateGPA = (grades) => {
  const total = grades.reduce((total, grade) => {
    return total + gradeKey[grade]
  }, 0)

  return round(total / grades.length, 1)
}

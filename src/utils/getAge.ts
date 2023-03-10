/** Calculates the current age given a birthdate string.
 * Convert current date and birthdate to Date object
 * @param dateString birthday date string
 * @returns age
 */
export default function getAge(dateString: string): number {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  // decrease the age by 1 if birthday not occurred yet in current year
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

function getCurrentEuropeanSeasonYear(): number {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  return currentMonth >= 8 ? currentYear : currentYear - 1;
}

export default getCurrentEuropeanSeasonYear;

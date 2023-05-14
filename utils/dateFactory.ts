function getRandomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
   const startDate = new Date(2019, 0, 1); // 2019年1月1日
  const endDate = new Date(2023, 4, 31); // 2023年5月31日
   const randomDates = Array.from({ length: 100 }, () => getRandomDate(startDate, endDate));
   randomDates.sort((a, b) => a.getTime() - b.getTime());
  const fakeDate = randomDates.map(date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  export { fakeDate }
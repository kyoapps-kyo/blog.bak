<template>
    <div>

    </div>
</template>

<script setup lang='ts'>
const daysInMonth = (dateString: string): number => {
    const [year, month] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month), 0).getDate();
}

console.log(daysInMonth('2021-02-01'));

const datesArray: string[] = [
    '2019-05-06',
    '2019-05-06',
    '2023-01-01',
    '2023-01-01',
    '2023-01-02',
    '2023-01-02',
    '2023-01-02',
    '2024-02-29',
    '2024-02-29'
];
interface UniqueDate {
    date: string;
    count: number;
}

const fillSortedArray = (datesArray: string[]) => {
    const newDateArr = new Set();
    datesArray.forEach((dateString) => {
        const [year, month] = dateString.split('-');
        const daysInMonth = new Date(parseInt(year), parseInt(month), 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            newDateArr.add(`${year}-${month}-${i.toString().padStart(2, '0')}`);
        }
    });
    return Array.from(newDateArr).map(dateString => new Date(dateString) as unknown as Date); // 需要类型断言
};
const resultObject = datesArray.reduce((acc: { [date: string]: number }, date: string) => {
    const [year, month, day] = date.split('-');
    const newDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    acc[newDate] = (acc[newDate] || 0) + 1;
    return acc;
}, {});
const uniqueArray: UniqueDate[] = Object.keys(resultObject).map((dateString: string) => {
    return {
        date: dateString,
        count: resultObject[dateString]
    };
});
const dateFormat = (datesArray: Date[], uniqueArray: UniqueDate[]) => {
    const formatDate = new Map()
    datesArray.forEach((date) => {
        formatDate.set(date.toISOString().slice(0, 10), 0)
    })
    uniqueArray.forEach(item => {
        formatDate.set(item.date, item.count)
    })
    return formatDate
}
const fillDate = fillSortedArray(uniqueArray.map(item => new Date(item.date)));
console.log(dateFormat(fillDate, uniqueArray));

</script>

<style scoped></style>

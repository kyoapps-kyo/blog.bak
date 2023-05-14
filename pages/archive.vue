<template>
    <div class=" container mx-auto">
        <!-- <div class="grid grid-cols-1 gap-4 max-w-screen-lg mx-auto md:grid-cols-3">
            <div v-for="item in monthlyData" :key="item.month" class="mb-10">
                <div class="text-center mb-10">{{ months[item.month] }}</div>
                <ContributionsCell v-if="item.data" :calendarData="item.data" class="mx-auto"></ContributionsCell>
            </div>
        </div> -->
    </div>
</template>

<script setup lang='ts'>
definePageMeta({
    title: '归档'
})
const head = useHead({
    title: '归档'
})
interface CalendarData {
    date: string;
    count: number;
}
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


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
const daysInMonth = (dateString: string): number => {
    const [year, month] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month), 0).getDate();
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
    return Array.from(newDateArr).map(dateString => new Date(dateString as string));
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
const dateArrayToStringArray = (dateArray: Date[]) => {
    return dateArray.map(date => date.toISOString().slice(0, 10));
};
const fillDate = fillSortedArray(dateArrayToStringArray(uniqueArray.map(item => new Date(item.date))));


const mapToObject = (map: Map<string, number>): CalendarData[] => {
    return Array.from(map, ([date, count]) => ({ date, count }));
};

const date: Map<string, number> = dateFormat(fillDate, uniqueArray);
const newDate = mapToObject(date);
console.log(newDate);

const tempMap = new Map()
const yearlyConstruct = (map: Map<string, number>)=>{
    const result = new Map()
    for(const key in map.keys()){
        if(!result.has(key)){
            result.set(key, new Map(key.slice(5,7), map.get(key)))
        }else{

        }
    }
}

</script>

<style scoped></style>

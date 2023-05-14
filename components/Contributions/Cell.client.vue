<template>
    <svg :width="width" :height="height">
        <g>
            <rect v-for="(day, index) in calendarData" :key="index" :fill="getCalendarFillColor(day.count)"
                :x="getXPosition(index) + 2" :y="getYPosition(index) + 2" :width="cellWidth - 4" :height="cellHeight - 4"
                rx="2" ry="2" />
        </g>
    </svg>
</template>
<script lang="ts">
const CELL_WIDTH = 45
const CELL_HEIGHT = 45
const COLUMNS = 7
const ROWS = 5
</script>
<script setup lang='ts'>
interface CalendarData {
    date: string;
    count: number;
}

const props = defineProps({
    calendarData: {
        type: Array as () => CalendarData[],
        required: true,
    },
    width: {
        type: Number,
        default: CELL_WIDTH * COLUMNS,
    },
    height: {
        type: Number,
        default: CELL_HEIGHT * ROWS,
    },
    cellWidth: {
        type: Number,
        default: CELL_WIDTH,
    },
    cellHeight: {
        type: Number,
        default: CELL_HEIGHT,
    },
})

const calendarData = reactive(props.calendarData);

const cellWidth = computed(() => props.cellWidth);
const cellHeight = computed(() => props.cellHeight);

const numberOfColumns = computed(() => Math.floor(props.width / cellWidth.value));
const numberOfRows = computed(() => Math.floor(props.height / cellHeight.value));
const totalNumberOfCells = computed(() => numberOfColumns.value * numberOfRows.value);
const startIndex = computed(() => Math.max(calendarData.length - totalNumberOfCells.value, 0));

const getXPosition = (index: number) => {
    const column = index % numberOfColumns.value;
    return column * cellWidth.value;
};

const getYPosition = (index: number) => {
    const row = Math.floor(index / numberOfColumns.value);
    return row * cellHeight.value;
};

const getCalendarFillColor = (count: number): string => {
    const colorScale = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
    if (count > 0) {
        if (count <= 4) {
            return colorScale[count - 1];
        } else {
            return colorScale[4];
        }
    } else {
        return 'rgba(255,255,255,0.2)';
    }
};

// const dateMap = new Map();
//  datesArray.forEach(date => {
//   const [year, month, day] = date.split('-');
//    // 在 Map(year,Map(month,Map(day,count))) 中保存日期
//   if (!dateMap.has(year)) {
//     dateMap.set(year, new Map());
//   }
//   if (!dateMap.get(year).has(month)) {
//     dateMap.get(year).set(month, new Map());
//   }
//   if (!dateMap.get(year).get(month).has(day)) {
//     dateMap.get(year).get(month).set(day, 0);
//   }
//    // 更新计数
//   dateMap.get(year).get(month).set(day, dateMap.get(year).get(month).get(day) + 1);
// });

</script>

<style scoped></style>

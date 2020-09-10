<template>
  <div class="random-calendar">
    <div class="wrapper">
      <CalendarHeatmap
        :values="calendarValues"
        :end-date="new Date()"
        :range-color="['#ebedf0', '#9be9a8', '#3fc463', '#30a14e', '#216e3a']"
      />
    </div>
    <span>Random calendar (does not represent actual data)</span>
  </div>
</template>

<script>
import { CalendarHeatmap } from 'vue-calendar-heatmap';
import {
  subYears, isBefore, isSameDay, addDays,
} from 'date-fns';

const generateHeatmapValues = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  const values = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

  return values;
};

export default {
  name: 'RandomCalendar',
  components: { CalendarHeatmap },
  data() {
    return { calendarValues: generateHeatmapValues() };
  },
};
</script>

<style scoped lang="scss">
.random-calendar {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  padding: 16px 20px 0 10px;
  border: 1px solid var(--border);
  border-radius: 6px;

  .wrapper {
    width: 893px;
  }

  span {
    align-self: flex-start;

    font-size: 11px;
    color: var(--link);
    margin-top: -20px;
    margin-left: 7px;
    padding-bottom: 16px;
  }
}
</style>

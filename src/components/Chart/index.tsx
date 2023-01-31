import { Line } from '@ant-design/plots';
import React, { useMemo } from 'react';
type PropsChart = {
  type: string;
};
const Chart: React.FC<PropsChart> = (props: PropsChart) => {
  const { type } = props;
  const mockData = [
    {
      hour: '6am',
      value: 6,
      time: 'day',
    },
    {
      hour: '6am',
      value: 7,
      time: 'week',
    },
    {
      hour: '6am',
      value: 6,
      time: 'month',
    },
    {
      hour: '6am',
      value: 7,
      time: 'year',
    },

    {
      hour: '7am',
      value: 12,
      time: 'day',
    },
    {
      hour: '7am',
      value: 11,
      time: 'week',
    },
    {
      hour: '7am',
      value: 12,
      time: 'month',
    },
    {
      hour: '7am',
      value: 10,
      time: 'year',
    },

    {
      hour: '8am',
      value: 6,
      time: 'day',
    },
    {
      hour: '8am',
      value: 4,
      time: 'week',
    },
    {
      hour: '8am',
      value: 5,
      time: 'month',
    },
    {
      hour: '8am',
      value: 5,
      time: 'year',
    },
    {
      hour: '9am',
      value: 8,
      time: 'day',
    },
    {
      hour: '9am',
      value: 9,
      time: 'week',
    },
    {
      hour: '9am',
      value: 7,
      time: 'month',
    },
    {
      hour: '9am',
      value: 8,
      time: 'year',
    },
    {
      hour: '10am',
      value: 12,
      time: 'day',
    },
    {
      hour: '10am',
      value: 14,
      time: 'week',
    },
    {
      hour: '10am',
      value: 13,
      time: 'month',
    },
    {
      hour: '10am',
      value: 13,
      time: 'year',
    },
    {
      hour: '11am',
      value: 12,
      time: 'day',
    },
    {
      hour: '11am',
      value: 14,
      time: 'week',
    },
    {
      hour: '11am',
      value: 13,
      time: 'month',
    },
    {
      hour: '11am',
      value: 13,
      time: 'year',
    },
    {
      hour: '12am',
      value: 10,
      time: 'day',
    },
    {
      hour: '12am',
      value: 8,
      time: 'week',
    },
    {
      hour: '12am',
      value: 9,
      time: 'month',
    },
    {
      hour: '12am',
      value: 9,
      time: 'year',
    },
    {
      hour: '1pm',
      value: 4,
      time: 'day',
    },
    {
      hour: '1pm',
      value: 6,
      time: 'week',
    },
    {
      hour: '1pm',
      value: 5,
      time: 'month',
    },
    {
      hour: '1pm',
      value: 5,
      time: 'year',
    },
    {
      hour: '2pm',
      value: 12,
      time: 'day',
    },
    {
      hour: '2pm',
      value: 14,
      time: 'week',
    },
    {
      hour: '2pm',
      value: 13,
      time: 'month',
    },
    {
      hour: '2pm',
      value: 13,
      time: 'year',
    },
    {
      hour: '3pm',
      value: 14,
      time: 'day',
    },
    {
      hour: '3pm',
      value: 10,
      time: 'week',
    },
    {
      hour: '3pm',
      value: 12,
      time: 'month',
    },
    {
      hour: '3pm',
      value: 12,
      time: 'year',
    },
    {
      hour: '4pm',
      value: 20,
      time: 'day',
    },
    {
      hour: '4pm',
      value: 22,
      time: 'week',
    },
    {
      hour: '4pm',
      value: 22,
      time: 'month',
    },
    {
      hour: '4pm',
      value: 21,
      time: 'year',
    },
    {
      hour: '5pm',
      value: 6,
      time: 'day',
    },
    {
      hour: '5pm',
      value: 5,
      time: 'week',
    },
    {
      hour: '5pm',
      value: 6,
      time: 'month',
    },
    {
      hour: '5pm',
      value: 5,
      time: 'year',
    },
    {
      hour: '6pm',
      value: 8,
      time: 'day',
    },
    {
      hour: '6pm',
      value: 7,
      time: 'week',
    },
    {
      hour: '6pm',
      value: 6,
      time: 'month',
    },
    {
      hour: '6pm',
      value: 7,
      time: 'year',
    },
  ];
  const newData = useMemo(() => {
    console.log('type', type);
    const data = mockData.filter((i) => i.time === type);
    console.log('newData', data);
    return data;
  }, [type]);
  const config = {
    data: newData,
    width: 1000,
    height: 400,
    autoFit: true,
    xField: 'hour',
    yField: 'value',
    seriesField: 'time',
    // axis: {
    //   position: 'bottom',
    // },
    yAxis: {
      label: {
        style: { color: '#fff' },
        formatter: (v: any) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    xAxis: {
      label: {
        style: { color: '#fff' },
      },
    },
    legend: {
      position: undefined,
    },
    point: {
      shape: ({}: any) => {
        return 'circle';
      },
      style: ({}: any) => {
        return {
          r: 3,
        };
      },
    },
    color: ['#FFCC21', '#8FE9D0', '#5B8FF9', '#5AD8A6'],
    // tooltip: {
    //   formatter: (data: any) => {
    //     return {
    //       name: '',
    //       value: data,
    //     };
    //   },
    //   customContent: (name: string, data: any) =>
    //     `<div>${data?.map((item: any) => {
    //       return `<div class=tooltip-chart" >
    //           <span class="tooltip-item-name">${item?.name}</span>
    //           <span class="tooltip-item-value">${item?.value}</span>
    //         </div>`;
    //     })}</div>`,
    //   showMarkers: false,
    //   showContent: false,
    //   position: undefined,
    //   showCrosshairs: false,
    // },
  };
  return <Line {...config} />;
};
export default Chart;

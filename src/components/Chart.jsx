/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';


// eslint-disable-next-line react/prop-types
const EChartsComponent = ({ selectedCoin, selectedOption, precio, maxPrecio, minPrecio, simbolo, fastUpdate }) => {
  const chartRef = useRef(null);

  // Parsing the input values to ensure they are numeric
  // eslint-disable-next-line react/prop-types
  const value = parseFloat(precio.replace(`${simbolo}`, '').replace(',', '')).toFixed(2);
  const value2 = parseFloat(maxPrecio.replace(`${simbolo}`, '').replace(',', '')).toFixed(2);
  const value3 = parseFloat(minPrecio.replace(`${simbolo}`, '').replace(',', '')).toFixed(2);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize the echarts instance based on the prepared dom
    const myChart = echarts.init(chartRef.current);

    // Specify the configuration items and data for the chart
    const option = {
      title: {
        text: `Cotización de ${selectedCoin} a ${selectedOption}`,
        subtext: fastUpdate,
        left: 'center',
        textStyle: {
          color: '#333',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 18,
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['Cotización'],
        textStyle: {
          color: '#333',
        },
        top: 35,
        right: 20,
      },
      xAxis: {
        type: 'category',
        data: ['Precio', 'Máximo hoy', 'Mínimo hoy'],
        axisLine: {
          lineStyle: {
            color: '#333',
          },
        },
        axisLabel: {
          fontSize: 10,
        },
      },
      yAxis: {
        type: 'value',
        name: `Precio en ${selectedOption}`,
        nameLocation: 'middle',
        nameGap: 30,
        nameTextStyle: {
          fontSize: 14,
          padding: [0, 0, 20, 0], // Ajuste de la posición del texto
        },
        axisLine: {
          lineStyle: {
            color: '#333',
          },
        },
        axisLabel: {
          fontSize: 12,
        },
      },
      series: [
        {
          name: 'Cotización',
          type: 'bar',
          data: [value, value2, value3],
          barWidth: '50%',
          itemStyle: {
            color: '#4f46e5',
          },
          label: {
            show: true,
            position: 'top',
            color: '#000',
            fontSize: 10,
            formatter: `{c} ${selectedOption }`,
          },
        },
      ],
      backgroundColor: '#fff',
    };

    // Display the chart using the configuration items and data just specified.
    myChart.setOption(option);
    
    return () => {
      myChart.dispose();
     
    };
  }, [fastUpdate, selectedCoin, selectedOption, value, value2, value3]);

  return <div ref={chartRef} 
  className='w-[600px] h-[300px] md:w-[650px] md:h-[400px] '
  ></div>;
};

export default EChartsComponent;

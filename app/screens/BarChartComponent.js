import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Text as SvgText } from 'react-native-svg';

const BarChartComponent = ({ data }) => {
  const fill = 'rgb(134, 65, 244)';

  const Labels = ({ x, y, bandwidth, data }) => (
    data.map((value, index) => (
      <SvgText
        key={index}
        x={x(index) + (bandwidth / 2)}
        y={y(value) - 10}
        fontSize={14}
        fill='black'
        alignmentBaseline={'middle'}
        textAnchor={'middle'}
      >
        {value}
      </SvgText>
    ))
  );

  return (
    <View style={styles.container}>
      <YAxis
        data={data}
        contentInset={{ top: 10, bottom: 10 }}
        svg={{
          fill: 'grey',
          fontSize: 10,
        }}
        numberOfTicks={Math.max(...data) + 1}
        min={0}
        max={Math.max(...data)}
        formatLabel={(value) => `${value}`}
      />
      <View style={styles.chartContainer}>
        <BarChart
          style={styles.chart}
          data={data}
          svg={{ fill }}
          contentInset={{ top: 10, bottom: 10 }}
        >
          <Grid />
          <Labels />
        </BarChart>
        <XAxis
          style={styles.xAxis}
          data={data}
          formatLabel={(value, index) => `Item ${index + 1}`}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    padding: 20,
    flexDirection: 'row',
  },
  chartContainer: {
    flex: 1,
    marginLeft: 10,
  },
  chart: {
    flex: 1,
  },
  xAxis: {
    marginHorizontal: -10,
  },
});

export default BarChartComponent;

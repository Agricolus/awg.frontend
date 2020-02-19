import 'echarts/lib/chart/bar';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import Vue from 'vue';
import ECharts from 'vue-echarts';
import { Component, Prop } from 'vue-property-decorator';
import { PrecipitationsDefaultChartSettings, xAxisDateFormatterGenerator } from "./chartSettings";

@Component({
  components: {
    chart: ECharts
  }
})
export default class PrecipitationsChart extends Vue {

  @Prop()
  precipitations: { time: Date, precipitation: number }[];

  get chartOptions() {
    if (!this.precipitations) return null;
    let co = Object.assign({}, PrecipitationsDefaultChartSettings);
    co.dataset.source = this.precipitations;
    co.xAxis.axisLabel.formatter = xAxisDateFormatterGenerator(this.precipitations);
    return co;
  }
}

import BaseRestService from "./base";
import CONFIGURATION from '@/config';
import { WeatherTypeEnum } from '@/enums/weatherTypeEnum';
import { WeatherMeasureVisibilityEnum } from '@/enums/weatherMeasureVisibilityEnum';
import { PressureTendencyEnum } from '@/enums/pressureTendencyEnum';
import dayjs from 'dayjs';

class MeasuresServicesMOCKED extends BaseRestService {
  measuresApiEndpoint: string;

  constructor() {
    super();
    this.measuresApiEndpoint = (CONFIGURATION.api as any).apiServerUrl.concat("/api/measures");
  }

  async getLastMeasure(stationId: string): Promise<dto.WeatherObserved> {
    console.debug("dummy call to getLastMeasure", `${this.measuresApiEndpoint}/last?stationId=${stationId}`);
    return {
      id: "observation-id",
      type: "observation-type",
      dataProvider: "http://dataprovider??",
      dateModified: new Date(),
      dateCreated: new Date(),
      name: "observation-name",
      location: "any???",
      address: "observation-address",
      dateObserved: new Date(),
      source: "observation-source",
      refDevice: "observation-refdev",
      refPointOfInterest: "observation-refpoi",
      weatherType: WeatherTypeEnum.thunder,
      dewPoint: 123,
      visibility: WeatherMeasureVisibilityEnum.veryPoor,
      temperature: 21,
      relativeHumidity: 50,
      precipitation: 5,
      windDirection: 234,
      windSpeed: 12,
      atmosphericPressure: 1234,
      pressureTendency: PressureTendencyEnum.raising,
      solarRadiation: 2,
      illuminance: 3,
      streamGauge: 4,
      snowHeight: 5,
    };// as dto.WeatherObserved;
  }

  async getLastDailyMeasures(stationId: string, from: Date | null = null, to: Date | null = null): Promise<dto.DailyMeasureDetail[]> {
    console.debug("dummy call to getLastDailyMeasure", `${this.measuresApiEndpoint}/daily?stationId=${stationId}&from=${from}&to=${to}`);
    return __LAST_DAILY_MEASURES;
  }

  async getLastWeeklyMeasures(stationId: string, from: Date | null = null, to: Date | null = null): Promise<dto.WeeklyMeasureDetail[]> {
    console.debug("dummy call to getLastWeeklyMeasure", `${this.measuresApiEndpoint}/weekly?stationId=${stationId}&from=${from}&to=${to}`)
    return [
      {
        stationId: 'station-1',
        date: new Date(),
        precipitations: 1,
        solarRadiations: 2,
        avgSolarRadiations: 3,
        minWindSpeed: 4,
        avgWindSpeed: 5,
        maxWindSpeed: 6,
        minTemperature: 7,
        avgTemperature: 8,
        maxTemperature: 9,
        minRelativeHumidity: 10,
        avgRelativeHumidity: 11,
        maxRelativeHumidity: 12,
        windDirection: 13,
        year: 2020,
        week: 10,
        dateLast: new Date(),
      },
      {
        stationId: 'station-2',
        date: new Date(),
        precipitations: 1,
        solarRadiations: 2,
        avgSolarRadiations: 3,
        minWindSpeed: 4,
        avgWindSpeed: 5,
        maxWindSpeed: 6,
        minTemperature: 7,
        avgTemperature: 8,
        maxTemperature: 9,
        minRelativeHumidity: 10,
        avgRelativeHumidity: 11,
        maxRelativeHumidity: 12,
        windDirection: 13,
        year: 2020,
        week: 10,
        dateLast: new Date(),
      }
    ]; // as dto.WeeklyMeasureDetail[];
  }

  async getLastMonthlyMeasures(stationId: string, from: Date | null = null, to: Date | null = null): Promise<dto.MonthlyMeasureDetail[]> {
    console.debug("dummy call to getLastMonthlyMeasure", `${this.measuresApiEndpoint}/monthly?stationId=${stationId}&from=${from}&to=${to}`)
    return [{
      stationId: 'station-1',
      date: new Date(),
      precipitations: 1,
      solarRadiations: 2,
      avgSolarRadiations: 3,
      minWindSpeed: 4,
      avgWindSpeed: 5,
      maxWindSpeed: 6,
      minTemperature: 7,
      avgTemperature: 8,
      maxTemperature: 9,
      minRelativeHumidity: 10,
      avgRelativeHumidity: 11,
      maxRelativeHumidity: 12,
      windDirection: 13,
      year: 2020,
      month: 1
    },
    {
      stationId: 'station-2',
      date: new Date(),
      precipitations: 1,
      solarRadiations: 2,
      avgSolarRadiations: 3,
      minWindSpeed: 4,
      avgWindSpeed: 5,
      maxWindSpeed: 6,
      minTemperature: 7,
      avgTemperature: 8,
      maxTemperature: 9,
      minRelativeHumidity: 10,
      avgRelativeHumidity: 11,
      maxRelativeHumidity: 12,
      windDirection: 13,
      year: 2020,
      month: 1
    }];// as dto.MonthlyMeasureDetail[];
  }

  async getMeasuresList(stationId: string, from: Date | null = null, to: Date | null = null): Promise<dto.WeatherObserved[]> {
    console.debug("dummy call to getMeasureList", `${this.measuresApiEndpoint}/interval?stationId=${stationId}&from=${from}&to=${to}`)
    return [{
      id: "observation-id-1",
      type: "observation-type",
      dataProvider: "http://dataprovider??",
      dateModified: new Date(),
      dateCreated: new Date(),
      name: "observation-name",
      location: "any???",
      address: "observation-address",
      dateObserved: new Date(),
      source: "observation-source",
      refDevice: "observation-refdev",
      refPointOfInterest: "observation-refpoi",
      weatherType: WeatherTypeEnum.thunder,
      dewPoint: 123,
      visibility: WeatherMeasureVisibilityEnum.veryPoor,
      temperature: 21,
      relativeHumidity: 50,
      precipitation: 5,
      windDirection: 234,
      windSpeed: 12,
      atmosphericPressure: 1234,
      pressureTendency: PressureTendencyEnum.raising,
      solarRadiation: 2,
      illuminance: 3,
      streamGauge: 4,
      snowHeight: 5,
    },
    {
      id: "observation-id-2",
      type: "observation-type",
      dataProvider: "http://dataprovider??",
      dateModified: new Date(),
      dateCreated: new Date(),
      name: "observation-name",
      location: "any???",
      address: "observation-address",
      dateObserved: new Date(),
      source: "observation-source",
      refDevice: "observation-refdev",
      refPointOfInterest: "observation-refpoi",
      weatherType: WeatherTypeEnum.thunder,
      dewPoint: 123,
      visibility: WeatherMeasureVisibilityEnum.veryPoor,
      temperature: 21,
      relativeHumidity: 50,
      precipitation: 5,
      windDirection: 234,
      windSpeed: 12,
      atmosphericPressure: 1234,
      pressureTendency: PressureTendencyEnum.raising,
      solarRadiation: 2,
      illuminance: 3,
      streamGauge: 4,
      snowHeight: 5,
    }]; // as dto.WeatherObserved[];
  }

}


export default new MeasuresServicesMOCKED();


const __LAST_DAILY_MEASURES = [
  {
    stationId: 'station-1',
    date: new Date(),
    precipitations: 1.1,
    solarRadiations: 2.1,
    avgSolarRadiations: 3.1,
    minWindSpeed: 4.1,
    avgWindSpeed: 5.1,
    maxWindSpeed: 6.1,
    minTemperature: 7.1,
    avgTemperature: 8.1,
    maxTemperature: 9.1,
    minRelativeHumidity: 10.1,
    avgRelativeHumidity: 11.1,
    maxRelativeHumidity: 12.1,
    windDirection: 13.1,
  },
  {
    stationId: 'station-1',
    date: dayjs().subtract(1, 'day').toDate(),
    precipitations: 1.2,
    solarRadiations: 2.2,
    avgSolarRadiations: 3.2,
    minWindSpeed: 4.2,
    avgWindSpeed: 5.2,
    maxWindSpeed: 6.2,
    minTemperature: 7.2,
    avgTemperature: 8.2,
    maxTemperature: 9.2,
    minRelativeHumidity: 10.2,
    avgRelativeHumidity: 11.2,
    maxRelativeHumidity: 12.2,
    windDirection: 13.2,
  },
  {
    stationId: 'station-1',
    date: dayjs().subtract(2, 'day').toDate(),
    precipitations: 1.3,
    solarRadiations: 2.3,
    avgSolarRadiations: 3.3,
    minWindSpeed: 4.3,
    avgWindSpeed: 5.3,
    maxWindSpeed: 6.3,
    minTemperature: 7.3,
    avgTemperature: 8.3,
    maxTemperature: 9.3,
    minRelativeHumidity: 10.3,
    avgRelativeHumidity: 11.3,
    maxRelativeHumidity: 12.3,
    windDirection: 13.3,
  },
  {
    stationId: 'station-1',
    date: dayjs().subtract(3, 'day').toDate(),
    precipitations: 1.4,
    solarRadiations: 2.4,
    avgSolarRadiations: 3.4,
    minWindSpeed: 4.4,
    avgWindSpeed: 5.4,
    maxWindSpeed: 6.4,
    minTemperature: 7.4,
    avgTemperature: 8.4,
    maxTemperature: 9.4,
    minRelativeHumidity: 10.4,
    avgRelativeHumidity: 11.4,
    maxRelativeHumidity: 12.4,
    windDirection: 13.4,
  },
  {
    stationId: 'station-1',
    date: dayjs().subtract(4, 'day').toDate(),
    precipitations: 1.5,
    solarRadiations: 2.5,
    avgSolarRadiations: 3.5,
    minWindSpeed: 4.5,
    avgWindSpeed: 5.5,
    maxWindSpeed: 6.5,
    minTemperature: 7.5,
    avgTemperature: 8.5,
    maxTemperature: 9.5,
    minRelativeHumidity: 10.5,
    avgRelativeHumidity: 11.5,
    maxRelativeHumidity: 12.5,
    windDirection: 13.5,
  },
  {
    stationId: 'station-1',
    date: dayjs().subtract(5, 'day').toDate(),
    precipitations: 1.6,
    solarRadiations: 2.6,
    avgSolarRadiations: 3.6,
    minWindSpeed: 4.6,
    avgWindSpeed: 5.6,
    maxWindSpeed: 6.6,
    minTemperature: 7.6,
    avgTemperature: 8.6,
    maxTemperature: 9.6,
    minRelativeHumidity: 10.6,
    avgRelativeHumidity: 11.6,
    maxRelativeHumidity: 12.6,
    windDirection: 13.6,
  },
  {
    stationId: 'station-1',
    date: dayjs().subtract(6, 'day').toDate(),
    precipitations: 1.7,
    solarRadiations: 2.7,
    avgSolarRadiations: 3.7,
    minWindSpeed: 4.7,
    avgWindSpeed: 5.7,
    maxWindSpeed: 6.7,
    minTemperature: 7.7,
    avgTemperature: 8.7,
    maxTemperature: 9.7,
    minRelativeHumidity: 10.7,
    avgRelativeHumidity: 11.7,
    maxRelativeHumidity: 12.7,
    windDirection: 13.7,
  }
];
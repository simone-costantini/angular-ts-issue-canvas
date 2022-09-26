import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ILoadedEventArgs,
  ChartTheme,
  IMouseEventArgs,
  ChartComponent,
} from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample for Line Series
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public enableCanvas: boolean = true;

  @ViewChild('chart')
  public chart: ChartComponent;
  public data: Object[] = [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ];
  public data1: Object[] = [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    /*stripLines: [
      {
        start: 30,
        sizeType: 'Pixel',
        dashArray: '4,5',
        color: 'blue',
        visible: true,
      },
      {
        start: 70,
        sizeType: 'Pixel',
        dashArray: '4,5',
        color: 'red',
        visible: true,
      },
    ],*/
  };
  public annotations: Object = [
    {
      x: '20%',
      y: '120%',
      coordinateUnits: 'Pixel',
      region: 'Series',
      content:
        '<div id="chart_annotation0" style="color:blue;"><div style="margin-right:5px;width:15px;display: inline-block; border: solid blue;"></div>Low Critical</div>',
    },
    {
      x: '80%',
      y: '120%',
      coordinateUnits: 'Pixel',
      region: 'Series',
      content:
        '<div id="chart_annotation1" style="color:red"><div style="margin-right:5px;width:15px;display: inline-block; border: solid red;"></div>High Critical</div>',
    },
  ];
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  public width: string = Browser.isDevice ? '100%' : '60%';
  public marker: Object = {
    visible: true,
    height: 10,
    width: 10,
  };
  public tooltip: Object = {
    enable: true,
  };
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(
        /-dark/i,
        'Dark'
      )
    );
  }
  public onChartMouseClick(args: IMouseEventArgs): void {
    var annotationId = args.target;
    if (annotationId.indexOf('chart_annotation') >= 0) {
      var stripIndex = args.target.charAt(args.target.length - 1);
      this.chart.primaryYAxis.stripLines[stripIndex].visible = this.chart
        .primaryYAxis.stripLines[stripIndex].visible
        ? false
        : true;
    }
  }
  // custom code end
  public title: string = 'Inflation - Consumer Price';

  constructor() {
    //code
  }
}

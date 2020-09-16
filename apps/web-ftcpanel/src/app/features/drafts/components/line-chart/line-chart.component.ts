import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";
import { Line } from 'd3';

@Component({
  selector: 'line-chart-component',
  templateUrl: 'line-chart.component.html'
})
export class LineChartComponent implements OnInit {

  public title = 'Line Chart';

  // need to load data from database better.
  public data: any[] = [
    {date: new Date('2010-01-01'), value: 40},
    {date: new Date('2010-01-02'), value: 85},
    {date: new Date('2010-01-04'), value: 93},
    {date: new Date('2010-01-05'), value: 95},
    {date: new Date('2010-01-06'), value: 130},
    {date: new Date('2010-01-07'), value: 110},
    {date: new Date('2010-01-08'), value: 120},
    {date: new Date('2010-01-09'), value: 129},
    {date: new Date('2010-01-10'), value: 107},
    {date: new Date('2010-01-11'), value: 140}
  ];

  private trans;

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private g: any; // line group
  private line: Line<[number, number]>; // this is line defination

  constructor() {
    // configure margins and width/height of the graph
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit():void {
    this.trans = d3.transition().duration(1000);
    this.buildSvg();
    this.addXYAxis();
    this.drawLineAndPath();
  }

  private buildSvg():void {
    this.svg = d3.select('figure#linechart').append('svg')
    .attr( "width", this.width + this.margin.left + this.margin.right )
    .attr( "height", this.height + this.margin.top + this.margin.bottom );

    this.g = this.svg.append('g');
  }

  private addXYAxis():void {
    // range of data config
    this.x = d3.scaleTime().range( [0, this.width ] );
    this.y = d3.scaleLinear().range( [this.height, 0] );
    this.x.domain( d3.extent( this.data, (d:any) => d.date ) );
    this.y.domain( [0, d3.max( this.data, (d:any) => d.value) ] );
    //this.y.domain( d3.extent( this.data, (d:any) => d.value ) );
    // Configure X axis
    this.svg.append('g')
    .attr('transform', `translate(0, ${this.height} )`)
    .call( d3.axisBottom( this.x ) );
    // Configure Y axis
    this.svg.append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(this.y));
  }

  private drawLineAndPath():void {
    this.appendPathToGroup();
  }

  private appendPathToGroup() {
    const t = d3.transition().duration(1000);
    const line = d3.line()
    .x( (d: any) => this.x( d.date ) )
    .y( (d:any ) => this.y( d.value ) );

    // Configuring line path
    this.g.append('path')
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", "3px")
    .datum( this.data )
    .transition(t)
    .attr('d', line);
  }

  update():void {
    const t = d3.transition().duration(1000);

    // update scales
    this.x.domain( d3.extent( this.data, (d:any) => d.date ) );
    this.y.domain( [0, d3.max( this.data, (d:any) => d.value) ] );
    //this.y.domain( d3.extent( this.data, (d:any) => d.value ) );

  }

  updateScales() {
    this.x.domain( d3.extent( this.data, d => d.date ) );
    this.y.domain( [0, d3.max( this.data, d => d.value)] );

    // update axes


  }

}

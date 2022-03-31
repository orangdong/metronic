"use strict";

// Class definition
var KTWidgets = function () {
    // Statistics widgets
    var initStatisticsWidget3 = function() {
        var charts = document.querySelectorAll('.statistics-widget-3-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 45, 32, 70, 40]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: '#E4E6EF',
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 80,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function(val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        stops: [0, 100]
                    }
                },
                colors: [baseColor],
                markers: {
                    colors: [baseColor],
                    strokeColor: [lightColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });        
    }

    var initStatisticsWidget4 = function() {
        var charts = document.querySelectorAll('.statistics-widget-4-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [40, 40, 30, 30, 35, 35, 50]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: '#E4E6EF',
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function(val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        stops: [0, 100]
                    }
                },
                colors: [baseColor],
                markers: {
                    colors: [baseColor],
                    strokeColor: [lightColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });        
    }

    // Charts widgets
    var initChartsWidget1 = function() {
        var element = document.getElementById("kt_charts_widget_1_chart");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['30%'],
                    endingShape: 'rounded'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();      
    }

    var initChartsWidget2 = function() {
        var element = document.getElementById("kt_charts_widget_2_chart");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-warning');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['30%'],
                    endingShape: 'rounded'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    var initChartsWidget3 = function() {
        var element = document.getElementById("kt_charts_widget_3_chart");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-info');
        var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [30, 40, 40, 90, 90, 70, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    var initChartsWidget4 = function() {
        var element = document.getElementById("kt_charts_widget_4_chart");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-success');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-light-success');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-warning');
        var secondaryLightColor = KTUtil.getCssVariableValue('--bs-light-warning');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [60, 50, 80, 40, 100, 60]
            }, {
                name: 'Revenue',
                data: [70, 60, 110, 40, 50, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: labelColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                colors: [baseLightColor, secondaryLightColor],
                strokeColor: [baseLightColor, secondaryLightColor],
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    var initChartsWidget5 = function() {
        var element = document.getElementById("kt_charts_widget_5_chart");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-info');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [40, 50, 65, 70, 50, 30]
            }, {
                name: 'Revenue',
                data: [-30, -40, -55, -60, -40, -20]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                stacked: true,
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['12%'],
                    endingShape: 'rounded'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                min: -80,
                max: 80,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    var initChartsWidget6 = function() {
        var element = document.getElementById("kt_charts_widget_6_chart");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-light-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-info');        

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                type: 'bar',
                stacked: true,
                data: [40, 50, 65, 70, 50, 30]
            }, {
                name: 'Revenue',
                type: 'bar',
                stacked: true,
                data: [20, 20, 25, 30, 30, 20]
            }, {
                name: 'Expenses',
                type: 'area',
                data: [50, 80, 60, 90, 50, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                stacked: true,
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    stacked: true,
                    horizontal: false,
                    endingShape: 'rounded',
                    columnWidth: ['12%']
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                max: 120,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor, baseLightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    var initChartsWidget7 = function() {
        var element = document.getElementById("kt_charts_widget_7_chart");

        var height = parseInt(KTUtil.css(element, 'height'));

        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var strokeColor = KTUtil.getCssVariableValue('--bs-gray-300');

        var color1 = KTUtil.getCssVariableValue('--bs-warning');
        var color1Light = KTUtil.getCssVariableValue('--bs-light-warning');

        var color2 = KTUtil.getCssVariableValue('--bs-success');
        var color2Light = KTUtil.getCssVariableValue('--bs-light-success');

        var color3 = KTUtil.getCssVariableValue('--bs-primary');  
        var color3Light = KTUtil.getCssVariableValue('--bs-light-primary');  

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [30, 30, 50, 50, 35, 35]
            }, {
                name: 'Revenue',
                data: [55, 20, 20, 20, 70, 70]
            }, {
                name: 'Expenses',
                data: [60, 60, 40, 40, 30, 30]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [color1, 'transparent', 'transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [color1, color2, color3],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                colors: [color1Light, color2Light, color3Light],
                strokeColor: [color1, color2, color3],
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    var initChartsWidget8 = function() {
        var element = document.getElementById("kt_charts_widget_8_chart");

        var height = parseInt(KTUtil.css(element, 'height'));

        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var strokeColor = KTUtil.getCssVariableValue('--bs-gray-300');

        var color1 = KTUtil.getCssVariableValue('--bs-warning');
        var color1Light = KTUtil.getCssVariableValue('--bs-light-warning');

        var color2 = KTUtil.getCssVariableValue('--bs-success');
        var color2Light = KTUtil.getCssVariableValue('--bs-light-success');

        var color3 = KTUtil.getCssVariableValue('--bs-primary');  
        var color3Light = KTUtil.getCssVariableValue('--bs-light-primary');  

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [30, 30, 50, 50, 35, 35]
            }, {
                name: 'Revenue',
                data: [55, 20, 20, 20, 70, 70]
            }, {
                name: 'Expenses',
                data: [60, 60, 40, 40, 30, 30]
            },],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [color1, color2, color3]
            },
            xaxis: {
                x: 0,
                offsetX: 0,
                offsetY: 0,
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                },
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                y: 0,
                offsetX: 0,
                offsetY: 0,
                padding: {
                    left: 0,
                    right: 0
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [color1Light, color2Light, color3Light],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            },
            markers: {
                colors: [color1, color2, color3],
                strokeColor: [color1, color2, color3],
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    // Mixed widgets
    var initMixedWidget2 = function() {
        var charts = document.querySelectorAll('.mixed-widget-2-chart');

        var color;
        var strokeColor;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var options;
        var chart;

        [].slice.call(charts).map(function(element) {
            height = parseInt(KTUtil.css(element, 'height'));
            color = KTUtil.getCssVariableValue('--bs-' + element.getAttribute("data-kt-color"));
            strokeColor = KTUtil.colorDarken(color, 15);

            options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 45, 32, 70, 40, 40, 40]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: strokeColor,
                        opacity: 0.5
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 0
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [strokeColor]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: borderColor,
                            width: 1,
                            dashArray: 3
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 80,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px',
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ['transparent'],
                markers: {
                    colors: [color],
                    strokeColor: [strokeColor],
                    strokeWidth: 3
                }
            };

            chart = new ApexCharts(element, options);
            chart.render();  
        });        
    }

    var initMixedWidget3 = function() {
        var charts = document.querySelectorAll('.mixed-widget-3-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 25, 45, 30, 55, 55]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                colors: [lightColor],
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });        
    }

    var initMixedWidget4 = function() {
        var charts = document.querySelectorAll('.mixed-widget-4-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );
            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-700');

            var options = {
                series: [74],
                chart: {
                    fontFamily: 'inherit',
                    height: height,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "65%"
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: false,
                                fontWeight: '700'
                            },
                            value: {
                                color: labelColor,
                                fontSize: "30px",
                                fontWeight: '700',
                                offsetY: 12,
                                show: true,
                                formatter: function (val) {
                                    return val + '%';
                                }
                            }
                        },
                        track: {
                            background: lightColor,
                            strokeWidth: '100%'
                        }
                    }
                },
                colors: [baseColor],
                stroke: {
                    lineCap: "round",
                },
                labels: ["Progress"]
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });        
    }

    var initMixedWidget5 = function() {
        var charts = document.querySelectorAll('.mixed-widget-5-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 30, 60, 25, 25, 40]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                    opacity: 1,
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 0.5,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.375,
                        stops: [25, 50, 100],
                        colorStops: []
                    }
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 65,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                colors: [lightColor],
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });        
    }

    var initMixedWidget6 = function() {
        var charts = document.querySelectorAll('.mixed-widget-6-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 25, 45, 30, 55, 55]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                colors: [lightColor],
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });        
    }

    var initMixedWidget7 = function() {
        var charts = document.querySelectorAll('.mixed-widget-7-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [15, 25, 15, 40, 20, 50]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                colors: [lightColor],
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });        
    }

    var initMixedWidget10 = function() {
        var charts = document.querySelectorAll('.mixed-widget-10-chart');

        var color;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseLightColor;
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');
        var baseColor;
        var options;
        var chart;

        [].slice.call(charts).map(function(element) {
            color = element.getAttribute("data-kt-color");
            height = parseInt(KTUtil.css(element, 'height'));
            baseColor = KTUtil.getCssVariableValue('--bs-' + color);

            options = {
                series: [{
                    name: 'Net Profit',
                    data: [50, 60, 70, 80, 60, 50, 70, 60]
                }, {
                    name: 'Revenue',
                    data: [50, 60, 70, 80, 60, 50, 70, 60]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'bar',
                    height: height,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: ['50%'],
                        endingShape: 'rounded'
                    },
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    y: 0,
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    type: 'solid'
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " revenue"
                        }
                    }
                },
                colors: [baseColor, secondaryColor],
                grid: {
                    padding: {
                        top: 10
                    },
                    borderColor: borderColor,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    }
                }
            };

            chart = new ApexCharts(element, options);
            chart.render();      
        });        
    }

    // Feeds Widgets
    var initFeedWidget1 = function() {
        var formEl = document.querySelector("#kt_forms_widget_1_form");
        var editorId = 'kt_forms_widget_1_editor';

        if ( !formEl ) {
            return;
        }

        // init editor
        var options = {
            modules: {
                toolbar: {
                    container: "#kt_forms_widget_1_editor_toolbar"
                }
            },
            placeholder: 'What is on your mind ?',
            theme: 'snow'
        };

        if (!formEl) {
            return;
        }

        // Init editor
        var editorObj = new Quill('#' + editorId, options);
    }

    var initFeedsWidget4 = function() {
        var btn = document.querySelector('#kt_widget_5_load_more_btn');
        var widget5 = document.querySelector('#kt_widget_5');

        if (btn) {
            btn.addEventListener('click', function(e){
                e.preventDefault();
                btn.setAttribute('data-kt-indicator', 'on');

                setTimeout(function() {
                    btn.removeAttribute('data-kt-indicator');
                    widget5.classList.remove('d-none');         
                    btn.classList.add('d-none');         
                    
                    KTUtil.scrollTo(widget5, 200);
                }, 2000);                
            });
        }                 
    }  

    // Follow button
    var initUserFollowButton = function() {
        var follow = document.querySelector('#kt_user_follow_button');

        if (follow) {
            follow.addEventListener('click', function(e){
                // Prevent default action 
                e.preventDefault();
                
                // Show indicator
                follow.setAttribute('data-kt-indicator', 'on');
                
                // Disable button to avoid multiple click 
				follow.disabled = true;

                // Check button state
                if (follow.classList.contains("btn-success")) {
                     setTimeout(function() {
                        follow.removeAttribute('data-kt-indicator');
                        follow.classList.remove("btn-success");
                        follow.classList.add("btn-light");
                        follow.querySelector(".svg-icon").classList.add("d-none");
                        follow.querySelector(".indicator-label").innerHTML = 'Follow';
				        follow.disabled = false;
                    }, 1500);   
                } else {
                     setTimeout(function() {
                        follow.removeAttribute('data-kt-indicator');
                        follow.classList.add("btn-success");
                        follow.classList.remove("btn-light");
                        follow.querySelector(".svg-icon").classList.remove("d-none");
                        follow.querySelector(".indicator-label").innerHTML = 'Following';
                        follow.disabled = false;
                    }, 1000);   
                }        
            });
        }                 
    }

    // Public methods
    return {
        init: function () {
            // Statistics widgets
            initStatisticsWidget3();
            initStatisticsWidget4();

            // Charts widgets
            initChartsWidget1();
            initChartsWidget2();
            initChartsWidget3();
            initChartsWidget4();
            initChartsWidget5();
            initChartsWidget6();
            initChartsWidget7();
            initChartsWidget8();

            // Mixed widgets
            initMixedWidget2();
            initMixedWidget3();
            initMixedWidget4();
            initMixedWidget5();
            initMixedWidget6();
            initMixedWidget7();
            initMixedWidget10();

            // Feeds
            initFeedWidget1();
            initFeedsWidget4();

            // Follow button
            initUserFollowButton();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTWidgets;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTWidgets.init();
});

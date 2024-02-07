$(function() {
    $('input[name="birthday"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
      alert("You are " + years + " years old!");
    });
  });

  const chart = echarts.init(document.getElementById("chartInnerId"));


const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {trigger:'axis'},
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

chart.on('highlight', (p) => {
  chart.setOption({
      title: {text: 'dataIndex= ' +p.batch[0].dataIndex }, 
  });
});

chart.setOption(option);



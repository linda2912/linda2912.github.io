if (!Modernizr.touch || !Modernizr.inputtypes.date) {
        document.getElementById('myDate').type = 'date'
            .attr('type', 'text')
            .datepicker({

                dateFormat: 'yy-mm-dd'
            });
}
var getSetData = {
    fetchmydata : function()
    {
        $.ajax({
          url: 'http://data.colorado.gov/resource/4ykn-tg5h.json',
          //url: 'http://data.colorado.gov/resource/4ykn-tg5h.json?entityStatus=Good%20Standing&principalZipCode=80005',
          type: 'GET',
          dataType: 'json',
          //data: {param1: 'value1'},
          success: function(data, textStatus, xhr) {
            $.each(data, function (key, val) {
                console.log(key + " : " + val.principaladdress1);
            });
          },
          error: function(xhr, textStatus, errorThrown) {
            console.log('Error');
          }
        });
    },
    showFetcheddata : function()
    {
        this.fetchmydata();
    },
    getInfo : function()
    {
        $.ajax({
          url: 'info.json',
          type: 'GET',
          dataType: 'json',
          success: function(data, textStatus, xhr) {
            $.each(data, function (key, val) {
                console.log(key + " : " + val.name);
                console.log(key + " : " + val.age);
            });
          },
          error: function(xhr, textStatus, errorThrown) {
            console.log('Error');
          }
        });
    },
    getInfoData : function()
    {
        this.getInfo();
    }

};

getSetData.showFetcheddata();
getSetData.getInfoData();
function handleDrag(event) {

    var data = {id: event.target.dataset.id, status: event.target.dataset.status};
    var json_data = JSON.stringify(data);
    
    event.dataTransfer.setData('data', json_data);
}


function handleDragover(event){
    event.preventDefault();
}


function handleDropFinished(event){
    
    var id = JSON.parse(event.dataTransfer.getData('data')).id;
    var status = JSON.parse(event.dataTransfer.getData('data')).status;
    
    if(status === 'open'){
        apex.server.process(
            'Update Todo',
            {
                x01: status,
                x02: id
            },
            {
                success: function(pData){
                    apex.event.trigger('#open', 'apexrefresh');
                    apex.event.trigger('#finished', 'apexrefresh');
                },
                dataType: 'text'
            }
        );
    }
}

function handleDropOpen(event){
    
    var id = JSON.parse(event.dataTransfer.getData('data')).id;
    var status = JSON.parse(event.dataTransfer.getData('data')).status;
    
    if (status === 'finished'){
         apex.server.process(
             'Update Todo',
             {
                 x01: status,
                 x02: id
             },
             {
                 success: function(pData){
                     apex.event.trigger('#open', 'apexrefresh');
                     apex.event.trigger('#finished', 'apexrefresh')
                 },
                 dataType: 'text'
             }
         );
    }
}

function setMargin ( action ) {

    var value = parseInt([doc askForUserInput:"Set value for margin" initialValue:"24"])

    array_right = new Array();
    array_down = new Array();

    for (var i=[selection count] - 1; i >= 0; i--){
        item = selection [i];

        array_right.push({item: item, position: item.frame().x()});
        array_down.push({item: item, position: item.frame().y()});
    }

    array_down.sort(function(a,b) {
        return a.position - b.position;
    });

    array_right.sort(function(a,b) {
        return a.position - b.position;
    });


    for(i in array_down) {
        i = parseInt(i);
        if(i > 0){
            if( action == "right") {
                myItem = array_right[i].item;
                nextItem = array_right[i-1].item;
                myItem.frame().x = value + nextItem.frame().x() + nextItem.frame().width();
            } else {
                myItem = array_down[i].item;
                nextItem = array_down[i-1].item;
                myItem.frame().y = value + nextItem.frame().y() + nextItem.frame().height();
            }
        }
    }
}
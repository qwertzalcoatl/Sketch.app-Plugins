function setMargin ( action ) {
    var totalMargin = 0;
    var lastPosition = 0;
    var loop = [selection objectEnumerator]
    var value = parseInt([doc askForUserInput:"Set value for margin" initialValue:"24"])
    
    for (var i=[selection count] - 1; i >= 0; i--){
        item = selection [i];
        if ( i < [selection count] - 1){
            if( action == "right") {
                item.frame().x = value + selection[i+1].frame().x() + selection[i+1].frame().width();
            } else {
                item.frame().y = value + selection[i+1].frame().y() + selection[i+1].frame().height();
            }
        }
    }
}
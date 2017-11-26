chrome.runtime.sendMessage({todo : "showPageAction"});
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

if(request.todo == "GetSummary")
{
    jsonObj = [];
    $( ".review-text" ).each(function( index ) {
    item = {}
    item["id"] = index;
    item["text"] = $( this ).text();
    jsonObj.push(item);
  	});
    console.log(jsonObj);


    $.ajax({
        type : 'POST',
        url : "{{url_for('test')}}",
        contentType: 'application/json;charset=UTF-8',
        data : {'data':jsonObj},
        success : function(response){ 
            console.log("Respose reached");
            console.log(response); 
        }
    });


}
if(request.todo == "GetSummaryPara")
{
    jsonObj = [];
    item = {}
    item["id"] = 1;
    item["text"] = request.text;
    jsonObj.push(item);
  	console.log(jsonObj);

    $.ajax({
        type : 'POST',
        url : "{{url_for('test')}}",
        contentType: 'application/json;charset=UTF-8',
        data : {'data':jsonObj},
        success : function(response){ 
            console.log("Respose reached");
            console.log(response); 
        }
    });
}

});
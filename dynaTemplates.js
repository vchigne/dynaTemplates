createDynaTemplate= function (tmplt,clss,dvid)
/* tmplt = Template Name
   clss = Class used by the template
   dvid = ID asigned to the created DIV
*/
    var div = document.createElement("DIV");
    div.className = clss;
    div.id = dvid;
    document.body.appendChild(div);
    var renderedTmpl = Blaze.render(Template[tmplt], div);
}

deleteDynaTemplate=function(dvid){
    var div = document.getElementById(dvid);
    div.parentNode.removeChild(div);
}

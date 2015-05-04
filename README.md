# dynaTemplates
Create Divs dinamically in meteor and assign templates to them

Usage:

When you need to create a DIV and assign a temlate call:

    createDynaTemplate (tmplt,clss,dvid)
    /* tmplt = Template Name
      clss = Class used by the template
      dvid = ID asigned to the created DIV
    */
The template must exists.

To delete the div:

    deleteDynaTemplate(dvid)

Manage reactivity with mongo collections, as usual.



Based completely in this Gist from @lampe

https://gist.github.com/lampe/5bda16cf269f5d271598





({
	clickCreateItem : function(component, event, helper) {
		var validItem = true;
        
        //  get and verify the name is set
        var nameField = component.find("campItemName");
        var campname = nameField.get("v.value");
        if ($A.util.isEmpty(campname))
        {
            validItem = false;
            nameField.set("v.errors", [{message: "Camping Item name can't be blank."}]);
        }
        else
        {
            nameField.set("v.errors", null);
        }
        
        //  check quantity
        var quantityField = component.find("quantity");
        var quantityValue = quantityField.get("v.value");
        if ($A.util.isEmpty(quantityValue) || quantityValue == 0)
        {
            validItem = false;
            quantityField.set("v.errors", [{message : "Quantity cannot be 0 or blank."}]);
        }
        else
        {
            quantityField.set("v.errors", null);
        }
        
        //  check price
        var priceField = component.find("price");
        var priceValue = priceField.get("v.value");
        if ($A.util.isEmpty(priceValue) || priceValue == 0)
        {
            validItem = false;
            priceField.set("v.errors", [{message : "Price cannot be 0 or blank."}]);
        }
        else
        {
            priceField.set("v.errors", null);
        }
        
        // If we pass error checking, do some real work
        if(validItem){
            var newIt = component.get("v.newItem");
            // Create the new expense
            var theItems = component.get("v.items");
            
            // Copy the expense to a new object
            // THIS IS A DISGUSTING, TEMPORARY HACK
            var newitem = JSON.parse(JSON.stringify(newIt));
            theItems.push(newitem);
            component.set("v.items", theItems);
            
            //  this will reset the view's newItem object 
            //  to a be a blank sobject of type Camping_Item__c
            component.set("v.newItem",
                          {'sobjectType' : 'Camping_Item__c',
                           'Name' : '',
                           'Quantity__c' : 0,
                           'Price__c' : 0,
                           'Packed__c' : false});
        }
	}
})

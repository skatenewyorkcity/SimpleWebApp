var jsonObject = {}
var text = { "firstName":"John" , 
  "lastName":"Doe", 
  "email":"some@some.com" };

for(var x = 0; x < 5; x++){
  for(var y = 0; y < 4; y++){ 
    var fnFromJson = text.firstName;
    var lnFromJson = text.lastName ;
    var eFromJson = "some@some.com";
    var idFromJason = y;
    jsonObject = { fnFromJson, 
                   lnFromJson, 
                   eFromJson, 
                   idFromJason };
    console.log(jsonObject);
  }    
  console.log("---");
}

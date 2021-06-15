const arr = [
    {
        firstname: "John",
        lastname: "Doe"
    },
    {
        firstname: "Sarah",
        lastname: "Doe"
    },
    {
        firstname: "Sarah",
        lastname: "Sharp"
    },
    {
        firstname: "Roger",
        lastname: "Waters"
    },
    {
        firstname: "Tom",
        lastname: "Cruise"
    },
    {
        firstname: "Taylor",
        lastname: "Swift"
    }
 ];
 
 function match(obj, value) {
     return obj.firstname.toLowerCase() === value.toLowerCase() ||
            obj.lastname.toLowerCase() === value.toLowerCase();
 }

 function search(value) {
     return arr.filter(obj => match(obj, value));
 }

 console.log(search("Roger"));
//Q.No.1. a. Write a constructor for the class Movie, which takes a String representing the title of the movie, 
        //a. String representing the studio, and a String representing the rating as its arguments, and sets the 
          // respective class properties to these values.

            class Movie {
                constructor(title, studio, rating) {
                    this.title = title;
                    this.studio = studio;
                    this.rating = rating;
                }

                getrating() {
                    return "the rating is  " + this.rating;
                }
            }


        //b. The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 
            class Movie {
                constructor(title, studio, rating){
                    this.title = title;
                    this.studio = studio;
                    this.rating = "PG";
                 }
            }

        //d. Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
           //the studio “Eon Productions”, and the rating “PG­13”

           const CasinoRoyale = new Movie( "Casino Royal", "Eon Productions", "PG13");

//Q.NO.3 Write a “person” class to hold all the details.
class Person{
    constructor(name,age,gender,religion,nationality,location,height,weight,education,martiality,emailId,languages_known){
       this.name = name;
       this.age = age;
       this.gender = gender;
       this.religion = religion;
       this.nationality = nationality;
       this.location = location;
       this.height = height;
       this.weight = weight;
       this.education = education;
       this.martiality = martiality;
       this.emailId = emailId;
       this.languages_known = languages_known;
    }
}
var test = new Person("Jeeva","20","male","Hindu","Indian","chennai","168cm","72kg","BCA","Single","jeevabot10@gmail.com","Tamil,English");
   console.log(test.name);
   console.log(test.age);
   console.log(test.gender);
   console.log(test.religion);
   console.log(test.nationality);
   console.log(test.location);
   console.log(test.height);
   console.log(test.weight);
   console.log(test.education);
   console.log(test.martiality);
   console.log(test.emailId);
   console.log(test.languages_known);

   // Output:
   /*Jeeva
   20
   male
   Hindu
   Indian
   chennai
   168
   72kg
   BCA
   Single
   jeevabot10@gmail.com
   Tamil,English*/
   
//Q.NO.4. Write a class to calculate the Uber price.
   class Uberprice{
   constructor(distance,time,minfaresupplement,waittime){
     this.distance = distance;
     this.time = time;
     this.minfaresupplement = minfaresupplement;
     this.waittime = waittime;
   }
}
var obj = new Uberprice(102,102,28,16);
var total = (obj.distance+obj.time+obj.minfaresupplement+obj.waittime)
console.log(total);
// Output:
//248
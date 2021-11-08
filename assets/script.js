// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Bertha Zhao " // HINT: Replace this with your own name!
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`
// We'll use these variables to track the counts of each cookie type

let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

//total of the cookies
var gbnocookies;
var ccnocookies;
var sugarnocookies;
var total = 0;


// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
 if(gb >= 0)
     {
        gb++ 
        gbnocookies = document.getElementById('qty-gb');
        gbnocookies.textContent = gb;
        totalgbnocookies = document.getElementById('qty-total');
        total = total + 1;
        totalgbnocookies.textContent = total;
        console.log('gingerbread + was clicked!')
     }   
})
// Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0)
        {
         gb--  
         gbnocookies = document.getElementById('qty-gb');
         gbnocookies.textContent = gb;
         totalgbnocookies = document.getElementById('qty-total');
         total= total - 1;
         totalgbnocookies.textContent =  total ;
         console.log('gingerbread - was clicked!')
        }
   })
   // Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    if(cc >= 0)
       {
        cc++    
        ccnocookies = document.getElementById('qty-cc');
        ccnocookies.textContent = cc;
        totalccnocookies = document.getElementById('qty-total');
        total = total + 1;
        totalccnocookies.textContent = total;
        console.log('Chocolate Chip + was clicked!')
       }  
   })
   // Event listener for clicks on the "-" button for Chocolate chip cookies
   document.getElementById('minus-cc').addEventListener('click', function() {
       if(cc > 0)
         {
           cc--   
           ccnocookies = document.getElementById('qty-cc');
           ccnocookies.textContent = cc;
           totalccnocookies = document.getElementById('qty-total');
           total = total - 1;
           totalccnocookies.textContent = total;
           console.log('Chocolate Chip - was clicked!')
         }  
      })
      // Event listener for clicks on the "+" button for Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    if(sugar >= 0)
        {
        sugar++  
        sugarnocookies = document.getElementById('qty-sugar');
        sugarnocookies.textContent = sugar;
        totalsugarnocookies = document.getElementById('qty-total');
        total = total + 1;
        totalsugarnocookies.textContent = total;
       console.log('sugar + was clicked!')
        }
   })
   // Event listener for clicks on the "-" button for Sugar cookies
   document.getElementById('minus-sugar').addEventListener('click', function() {
       if(sugar > 0)
         {
         sugar--          
         sugarnocookies = document.getElementById('qty-sugar');
         sugarnocookies.textContent = sugar;
         totalsugarnocookies = document.getElementById('qty-total');
         total = total - 1;
         totalsugarnocookies.textContent = total;
         console.log('sugar - was clicked!')
         }
    })
   

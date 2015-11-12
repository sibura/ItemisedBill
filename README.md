# Itemised Bill

Practice basic Algorithms for find, filter and sort.

**For each of the scenarios below create a function :**

* that can read an [Itemised cell phone bill](./ItemisedBill.csv) and **create a list of maps** (an object in JS). Each line in the file become a map/object.
* that can return all the **phone calls for the specified provider**. It takes the list of phone number as a parameter.
* that calculates **the total number of calls** made to numbers for each cellphone operator
* that can calculate the **duration in seconds** for a call duration which is in the **format `00h00m00s`**
* that can **order the calls** by ascending call duration
* that can create **sub totals** for each **cell phone operator** and add it below each cellphone operator in the list
* that takes a [handlebars template](https://www.npmjs.com/package/handlebars) and create a nicely formatted **itemized bill with totals and sub totals**. Add lines to the report that indicates when the calls for a cell phone provider starts and a row that displays the total call duration for each provider and a line at the bottom displaying the total call duration for all calls.

**Note:**
The results of the functions are parameters for the other functions. The one functions data feed into the next function. It all starts from the CSV file.


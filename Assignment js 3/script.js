// 1. Write a program that displays current date and time in
// your browser
// document.write("<div style='border:2px solid blue; width:100%'>")
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>")
 var date = new Date();
 document.write("<h1>" + date + "<br>");
 document.write("</div>");

//  2. Write a program that alerts the current month in words.
// For example December.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>")
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = new Date();
var currentMonth = month.getMonth();
document.write("<h1>Current month: " + monthNames[currentMonth]);
document.write("</div>")

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>")
var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var day = new Date();
var currentDay = day.getDay();
document.write("<h1>Today is " + dayNames[currentDay]);
document.write("</div>")

//4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>")
var currentDates = new Date();
var currentDays = currentDates.getDay();
if (currentDays == 0 || currentDays == 6){
    document.write("<h1>It's a Fun Day </h1>");
} else {
    document.write("<h1>It's Working Day </h1>");
}
document.write("</div>");

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>")
var currentDatess = new Date();
var currentDayss = currentDatess.getDate();
if(currentDayss < 16){
    document.write("<h1>First fifteen days of the month </h1>");
} else {
    document.write("</h1>Last days of the month")
}
document.write("</div>");

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>")
var currenTDate = new Date();
var milliseconds = currenTDate.getTime();
var minutes = milliseconds/(1000*60)
document.write("<h1>Current Date: " + currenTDate.toString() + "</h1>");
document.write("<h1>Spent Milliseconds since January 1, 1970: " + milliseconds + "</h1>");
document.write("<h1>Spent Minutes since January 1, 1970: " + minutes + "</h1>");
document.write("</div>");

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>")
var currentDate = new Date();
var currentHours = currentDate.getHours();
if(currentDate < 12){
    document.write("<h1>It's AM");
} else {
    document.write("<h1>It's PM");
}
document.write("</div>");

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>");
var laterDate = new Date(2020,11,31);
document.write("<h1>Later Date: " + laterDate.toString() + "</h1>");
document.write("</div>")

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>");
var ramadanStartDate = new Date(2024,2,12);
var currentDatees = new Date();
var daysDifference = currentDatees - ramadanStartDate;
var days = Math.floor(daysDifference / (1000 * 60 * 60 * 24));
document.write("<h1>" + days + " days have passed since 1st Ramadan,2024" +"</h1>")
document.write("</div>")

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>");
var refernceDate = new Date();
var startDate = new Date(2015,0,1);
var difference = refernceDate - startDate;
var seconds = Math.floor(difference / 1000);
document.write("<h1>On reference date " + refernceDate + ", " + seconds + " seconds had passed since beginning of 2015.");
document.write("</div>")

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>");
var currentDate = new Date();
var currentHour = currentDate.getHours();
document.write("<h1>current date: " + currentDate + "</h1>");
currentDate.setHours(currentDate.getHours()-1);
document.write("<h1>1 hour ago, it was " + currentDate + "</h1>");
document.write("</div>");

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>");
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.write("<h1>current date: " + currentDate + "</h1>");
currentDate.setFullYear(currentDate.getFullYear()-100);
document.write("<h1>100 years back, it was " + currentDate + "</h1>");
document.write("</div>");

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
document.write("<div style='border:2px solid blue; padding:10px; margin:10px; background-color:#f9f9f9; font-family:Arial,sans-serif; color:#333; text-align:left; width:100%;'>");
var age = prompt("Enter your Age");
document.write("<h1>Your age is " + age);
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("<h1> Your birth year is " + birthYear + "</h1>");
document.write("</div>");

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
function generateBill() {
    const customerName = prompt("Enter Customer Name:");
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
    const chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
    const latePaymentSurcharge = parseFloat(prompt("Enter Late Payment Surcharge:"));

    const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
    const grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

    const billDetails = `
    <div style="border: 2px solid blue; border-radius: 10px; padding: 20px; width: 450px; margin: 20px; font-family: Arial, sans-serif;">
        <h2 style="text-align: center;">Bill Details</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Current Month:</strong> ${currentMonth}</p>
        <p><strong>Number of Units:</strong> ${numberOfUnits}</p>
        <p><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)}</p>
        <p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable}</p>
        <p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)}</p>
        <p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable}</p>
    </div>
`;
    document.write("<h1>" + billDetails +"</h1>" + "<br/>");
}

generateBill();




















document.write("</div>")

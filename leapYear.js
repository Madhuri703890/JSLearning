function leapYear(year) {
    var year;
    if (year%4==0) {
        console.log("Given year=",year,"is leap year");
    } else {
        console.log("Givaen year=",year,"not leap year");
    }
}
leapYear(2000);
leapYear(2020);
leapYear(1990);
leapYear(1600);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);

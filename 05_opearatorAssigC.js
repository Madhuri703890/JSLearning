function tcsEligibility(gradeScore,hscScore,sscScore,candidateName)
 {
var gradeScore;
var hscScore;
var sscScore;
var candidateName;

var result=gradeScore>=70||hscScore>=80||sscScore>90?"eligible":"not eligible"
console.log(candidateName,"you are",result,"for TCS interview");    
}
tcsEligibility(80,86,90,"Madhuri");
tcsEligibility(70,65,55,"Rudhira");
tcsEligibility(60,79,88,"Devansh");
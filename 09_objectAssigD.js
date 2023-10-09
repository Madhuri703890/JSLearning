let professor={
    profName:"Mr.John",
    ProfContact:9999-9999-99,
    ProfSubj:'Java',
    ProfAddress:'Satara',
    ProfDepartment:'CSE',

        degrees:{
            engineering:'cse',
            PHD:'Adv Computing',
            Spetialist:'networking',
            award:'for database',
        },
        certificate:['Haker Rank Participation','Certification in IFE cource','Certificate in Adv programming']
        };
        console.log(professor.ProfAddress);
        professor.experience=14;
        console.log(`Professor havin ${professor.experience} years of experience`);
        professor.ProfSubj='CSS';
        console.log(professor);

       professor.certificate.push('Oracle Certificate');
        console.table(professor.certificate);

        console.log(`last element of array ${professor.certificate[3]}`);
        console.log(professor);
        for (let index = 0; index < professor.certificate.length; index++) {
            const element = professor.certificate[index];
            console.log(element);
        }//console.log(professor.certificate);

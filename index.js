const studentInfo= require ('./information');



const cowsay=require ("cowsay");
console.log ( cowsay.say ({
    text: `Hello I m ${studentInfo.name} from ${studentInfo.campus}`,
}));
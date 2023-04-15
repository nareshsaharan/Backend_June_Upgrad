import chalk from 'chalk';
import validator from 'validator';


let email = "nareshsaharan@adobe.com";

if(validator.isEmail(email)) {
    console.log(chalk.green.inverse('Success'));
}else {
    console.log(chalk.red.inverse('Wrong'));
}





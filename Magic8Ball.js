console.log("========================Magic 8 Ball===================")

var userName = 'Jane';

userName === 'Jane' ? console.log('Hello, Jane!') : console.log('Hello!');

const userQuestion='Will I succeed?'

userQuestion === 'Will I succeed?' ? console.log('Will I succeed?') : console.log('Will I succeed?');

const randomNumber = Math.floor(Math.random()*8);

const eightBall=""

if (randomNumber==0){

  return console.log('It is certain')
} else if (randomNumber==1){

  return console.log('It is decidedly so')
} else if (randomNumber==2){

  return console.log('Reply hazy try again')
} else if (randomNumber==3){

  return console.log('Cannot predict now')
} else if (randomNumber==4){

  return console.log('Do not count on it')
} else if (randomNumber==5){

  return console.log('My sources say no')
} else if (randomNumber==6){

  return console.log('Outlook not so good')
} else if (randomNumber==7){

  return console.log('Signs point to yes')
}
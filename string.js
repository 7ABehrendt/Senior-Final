var exports = module.exports = {};

function PasswordMessage(m){

}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode >= min && unicode <= max){
      return true;
    }
    else{
      return false;
    }

}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  var hasUpper = false
  try{
        for(let i=0;i < str.length;i++){
            if(Inrange(str[i],65,90)){
                hasUpper = true;
  }
  else{
    throw new PasswordMessage("You need to have a uppercase letter")
  }
  catch(e){
        console.log(e.name+": "+e.message);
        return hasUpper;

}


exports.containsLower =function(str){
  var hasLower = false
  try{
        for(let i=0;i < str.length;i++){
            if(Inrange(str[i],97,122)){
                hasUpper = true;
  }
  else{
    throw new PasswordMessage("You need to have a lowercase letter")
  }
  catch(e){
        console.log(e.name+": "+e.message);
        return hasLower;


exports.containsNumerical =function(str){
  var hasNumerical = false
  try{
        for(let i=0;i < str.length;i++){
            if(Inrange(str[i],48,57)){
                hasNumerical = true;
  }
  else{
    throw new PasswordMessage("You need to have a Numerical")
  }
  catch(e){
        console.log(e.name+": "+e.message);
        return hasNumerical;

}


exports.containsSpecial =function(str){
  hasSpecial = false;
   let special = [33,64,35,36,37,94,38,42]
   try{
       for(let i=0;i < str.length;i++){
           for(let c=0;c < special.length;c++){
               if(str[i].charCodeAt(0) == special[c]){
                   hasSpecial = true;
               }
           }
       }
       else{
           throw new PasswordMessage('You need a special character.');
       }
   }
   catch(e){
       console.log(e.name+": "+e.message);
       return hasSpecial;
   }

}

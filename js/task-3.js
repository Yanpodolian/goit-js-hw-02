function checkForSpam(message){
    const vetitiVerbum1 = ("SPAM");
    const vetitiVerbum2 = ("sAlE");

  const messageMod = message.toLowerCase();
   const vetitiVerbum1Mod = vetitiVerbum1.toLowerCase();
   const vetitiVerbum2Mod = (vetitiVerbum2.toLowerCase());

  const test1 = messageMod.includes(vetitiVerbum2Mod) || messageMod.includes(vetitiVerbum1Mod);
return test1;
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

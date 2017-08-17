class lab3{

     testDefaultParamters(a,b = 100) {
      return { first: a , second: b };
    }


     testTemplateLiterals(firstName,middleName,lastName){
     return `${firstName},${middleName},${lastName}`;
    }


     testMultilineStrings(){
       return `I am a multiline string.
Isn’t it great!
So amazing.
Can’t believe it.`;

    }


     testSortWithArrowFunction(a){
       return a.sort(function(m,n) {
                return n - m;
        });

    }
}
export {lab3}

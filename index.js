const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // we are writing funcitons in starting at the bottom because they callback functions 

  // this function replaces the first letter of each word in the sentence looking for b regex which is for word boundaries followed by w to select the word. Then it passes the word into the match variable to make it uppercase. It is returned to the 
  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase())
  }
  // helper function takes the array tutorials and assigns it to arr, then calls map function but map function first calls capitalizeWords function to capitalize each 
  const assembleArray = (arr) => {
    return arr.map((str) => capitalizeWords(str))
  }

  return assembleArray(tutorials)

}

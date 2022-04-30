export const validatePhoneNumber = (str:string):string=>{
  const numbers = str.match(/\d+\d{11}/g)?.join('') ?? ''
  return numbers
}

export const validateName = (str:string):string => {
  const name = str.match(/[a-zA-Z][a-zA-Z ]{2,}/)?.join('') ?? ''
  return name
}

export const validateEmail = (str:string):string | boolean => {
  const email = str.match(/\S+@\S+\.\S+/)?.join('') ?? ''
  return (email || email.length === 0)
}

export function validateComment (str:string):boolean{
  const comment = str ?? '' 
  return (comment.length >=10 || comment.length === 0)
}
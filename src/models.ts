

export type PhonesType ={
      home:string;
      mobile:string;
      office:string;
}

export type PersonalType ={
     firstName:string,
     lastName:string,
     email:string,
     comments?:string
     address?:string
     phones:PhonesType
     skills:string[]
     corses:string[]
}

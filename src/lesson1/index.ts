
 interface IUser {
     id: number,
     username: string,
     email: string,
     address: { street: string, name: string,
         suite: string, city: string,
         zipcode: string,
         geo: { lat: string, lng: string }};
     phone: string,
     website: string,
     company: {name: string, catchPhrase: string,
         bs: string}
 }
 const user: IUser = {
     id: 12,
     username: 'Eva',
     email: 'string@gm',
     address: { street: 'ooo', name: 'Anna',
         suite: 'jjj', city: 'jjjjjj',
         zipcode: '999999',
         geo: { lat: 'jfks', lng: 'dkfkk' }},
     phone: 'de8888888',
     website: "hildegard.org",
     company: {name: 'JJJJ', catchPhrase: 'JH',
         bs: 'KKKKKKK'}
 }
 console.log(user)
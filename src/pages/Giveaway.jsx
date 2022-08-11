import React,{useState} from 'react';
import "./Giveaway.css";
import { collection,addDoc } from 'firebase/firestore';
import {db} from "../components/firebase-config";


export const Giveaway = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

 // const subCollectionReference = collection(db,"subdata");
  
  // const ref =firebase.firestore().collection("sub-data");
  // console.log(ref)

// const Submit=(e)=>{
//   e.preventDefault();
//   if(!name || !email){
//     alert("Name or Email Address cannot be Blank");
//   }
//   else{
//          setName("");
//          setEmail("");
//   }
// }
// const handleSubmit = async(e) => {
//   e.preventDefault();
//   const data={name,email};
//   await addDoc(collection(db,"sub-data"),{
//     name: name,
//     email: email
//   })
// }
const saveChange = async(e) => {
  // await addDoc(subCollectionReference, {
  //   name: name,
  //   email: email,
  // });
  // if(name === ' ' || email === ''){
  //   alert("Please enter name & Email")
  // }
  // do{
  //   alert("Please enter name & Email");
  //   break;
  // }while(name === ' ' || email === '')
  e.preventDefault();

 if( await addDoc(collection(db,"sub-data") ,{
    name: name,
    email: email,
  })
 )
 {
   alert("hurrry!... You have Registered for Giveaway ");
   setName("");
   setEmail("");
 }
 else{
  alert("Sorry ,Unable to Regeister")
  setName("");
  setEmail("");
 }
  ;
  
};
  return (
      <>
      <div className="mainBox">

      
  <form className="OurBox" onSubmit={saveChange}> 

    <div className="box">
  <label className="form-label">Name</label><br/>
  <input type="text" value={name} onChange={(e)=> {setName(e.target.value)} } className="InputText" id="name" required /><br/>
   <h6 className="required">Required*</h6>
   </div>

   <div className="box">
  <label className="form-label">Email Address</label><br/>
  <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)} } className="InputText" id ="email" required />
  <h6 className="required">Required*</h6>
   </div>
   <br/>
   <div>
   <button className="btn2">Register Now</button>
   </div>
</form>
</div>
 </>
  );
}

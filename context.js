import React,{createContext,useState} from 'react'

export const UserContext = createContext();

export const UserDetails = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [dob, setDoB] = useState("");
    const [gender, setGender] = useState("");
    const [feets, setFeets] = useState(0);
    const [inches, setInches] = useState(0);
    const [heightM, setHeightM] = useState(0.0);
    const [mass, setMass] = useState(0.0);
    const [bmi, setBMI] = useState(0.0);
    const [bmr, setBMR] = useState(0.0); 
 
 return <UserContext.Provider value={{Name: [name,setName],Email: [email,setEmail],Password: [password,setPassword],NewPassword: [newPassword, setNewPassword],Feets: [feets, setFeets],Inches: [inches, setInches],Mass: [mass, setMass],HeightM: [heightM,setHeightM],BMI: [bmi, setBMI],BMR: [bmr,setBMR],DOB: [dob,setDoB],Gender: [gender,setGender]}}>
 {props.children}
 </UserContext.Provider>

}
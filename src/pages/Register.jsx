import { useState } from "react"
import "../css/style.scss"

const Register = () => {

const [formData, setFormData] = useState ({
    firstname : '',
    lastname : '',
    username : '',
    password : '',
    gender :'',
    techskills : []
})


const handleOnChange = (event) => {
    if (event.target.name === 'techskills') {
        let copy = {...formData}

       if(event.target.checked) {
            copy .techskills.push(event.target.value)
       }
       else {
       copy.techskills =  copy.techskills = copy.techskills.filter(el => el !== event.target.value)
       }
       console.log(copy)
        
    }
    else {
        setFormData(() => ({
            ...formData,
            [event.target.name] : event.target.value
        }))
        
    }
   
}




const submitForm = (event) => {
    event.preventDefault()
    console.log (formData)
} 
    return (
        <div className="container">
        <form>
        
        <h2> Registration Form</h2>
        <div className="form-group">
            <label htmlFor="firstname">First Name: <br></br>
            <input type="text" name="firstname" placeholder="First Name" onChange={handleOnChange}></input>
            </label>
        </div>
        <div className="form-group">
            <label htmlFor="lastname">Last Name: <br></br>
            <input type="text" name="lastname" placeholder="Last Name" onChange={handleOnChange}></input>
            </label>
        </div>
        <div className="form-group">
            <label htmlFor="username"> User Name: <br></br>
            <input type="text" name="username" placeholder="User Name" onChange={handleOnChange}></input>
            </label>
        </div>
        <div className="form-group">
            <label htmlFor="password"> Password: <br></br>
            <input type="password" name="password" placeholder="Password" onChange={handleOnChange}></input>
            </label>
        </div>
        <br></br>
        <div>
        <select>
            <option >Select Gender</option> 
            <option value="Male" onChange={handleOnChange}>Male</option>
            <option value="Female" onChange={handleOnChange}>Female</option>
            <option value="Prefer not to say" onChange={handleOnChange}>Prefer not to say</option>
        </select>
        </div>
        <br></br>
        
        <h5>Tech Skills</h5>
        <div className="form-group"> 
        <input type="checkbox" value="HTML" name="techskills" onChange={handleOnChange}></input>
        <label className="form-check-label" htmlFor="techskills">
            HTML
        </label>
        </div>

        <div className="form-group">
        <input type="checkbox" value="CSS" name="techskills" onChange={handleOnChange}></input>
        <label className="form-check-label" htmlFor="techskills">
            CSS
        </label>
        </div>

        <div className="form-group">
        <input type="checkbox" value="Javascript" name="techskills" onChange={handleOnChange}></input>
        <label className="form-check-label" htmlFor="techskills">
            Javascript
        </label>
        </div>

        <div className="form-group">
        <input type="checkbox" value="ReactJS" name="techskills" onChange={handleOnChange}></input>
        <label className="form-check-label" htmlFor="techskills">
            ReactJS
        </label>
        </div>

        <div className="form-group">
        <input type="checkbox" value="PHP" name="techskills" onChange={handleOnChange}></input>
        <label className="form-check-label" htmlFor="techskills">
            PHP
        </label>
        </div>

        <br></br>

        <button onClick={submitForm} className="btn btn-primary d-block w-100" >Submit</button>
    </form>
    </div>

        


    )
}

export default Register
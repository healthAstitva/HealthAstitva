

const UserForm = () => {
  return (
    <div className="text-black  shadow-2xl p-6  m-24 border-2 border-black border-solid ">
      <p className="font-bold text-3xl ps-44 pb-10">Personal Details</p>
        <form className="flex flex-col justify-center items-start text-xl gap-10">
          <div className="flex gap-44">
            <label>First Name : <input type="text" name="firstName"/></label>
            <label>Last Name : <input type="text" name="lastName"/></label>

          </div>
            <label>Date of Birth : <input type="date" name="birthdate"/></label>
            <label >Gender : <input type="radio" name="gender" value="male"/> Male  <input type="radio" name="gender" value="female"/> Female</label>
            <label>Date of Registration : <input type="date" name="regdate"/></label>
            <label>Marital Status: <select name="maritalstatus">
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
              </select></label>

            <label>Father/Husbands Name : <input type="text" name="Name"/></label>
            <label>Contact Info : <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"  required/></label>
            <label>Work Address : <input type="text" name="workadd" /></label>
            <label>Current Address : <input type="text" name="curadd" /></label>
            <label>Permanent Address : <input type="text" name="permadd" /></label>
            <div className="gap-3 flex flex-col">
            <label>Documents: </label>
            <div className="flex gap-5">
            <input type="checkbox" value="aadharcard" name="doc1"/>Aadhaar Card
            <input type="checkbox" value="pancard" name="doc2"/>Pan Card
            <input type="checkbox" value="rationCard" name="doc3"/>Ration Card
            <input type="checkbox" value="lightBill" name="doc4"/>Light Bill
            </div>
            </div>
            



            
        </form>
    </div>
  )
}

export default UserForm
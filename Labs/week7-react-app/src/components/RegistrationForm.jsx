export default function RegistrationForm() {
  function handleSubmit(e) {
    e.preventDefault() // stop the page from refreshing
    // e.target is the <form> DOM element; FormData reads each named input from it
    const data = new FormData(e.target)
    alert(`Submitted: ${data.get('name')} — ${data.get('email')}`)
  }

  return (
    <form className="registration" onSubmit={handleSubmit}>
      <label className="labelText">Name:</label>
      <input type="text" name="name" required /><br /><br />

      <label className="labelText">Email:</label>
      <input type="email" name="email" required /><br /><br />

      <label className="labelText">Password:</label>
      <input type="password" name="password" required minLength="8" /><br /><br />

      <label className="labelText">Re-type password:</label>
      <input type="password" name="repPassword" required /><br /><br />

      <input type="checkbox" name="buyer" value="buyer" />
      <label>I want to buy produce directly from allotment owners.</label><br />
      <input type="checkbox" name="seller" value="seller" />
      <label>I want to sell produce from my allotment.</label><br /><br />

      <input type="checkbox" name="tos" value="tos" required />
      <label>I agree to the Terms of Use and Privacy Policy.</label><br /><br />

      <button type="submit">Submit</button>
    </form>
  )
}

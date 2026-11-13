function handleSubmit(e) {
  e.preventDefault();

  const data = new FormData(e.currentTarget);
  const name = data.get("name");
  const email = data.get("email");

  alert(`Submitted: ${name} — ${email}`);
}

export default function RegistrationForm() {
  return (
    <form className="center" onSubmit={handleSubmit}>
      <label className="textInput" htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        maxLength={50}
      />
      <br /><br />

      <label className="textInput" htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br /><br />

      <label className="textInput" htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minLength={8}
      />
      <br /><br />

      <label className="textInput" htmlFor="repPassword">
        Re-type password:
      </label>
      <input
        type="password"
        id="repPassword"
        name="repPassword"
        required
        minLength={8}
      />
      <br /><br />

      <input type="checkbox" id="buyer" name="buyer" value="buyer" />
      <label htmlFor="buyer">
        I want to buy produce directly from allotment owners.
      </label>
      <br />

      <input type="checkbox" id="seller" name="seller" value="seller" />
      <label htmlFor="seller">
        I want to sell produce from my allotment.
      </label>
      <br /><br />

      <input type="checkbox" id="tos" name="tos" value="tos" required />
      <label htmlFor="tos">
        I agree to the <a href="">Terms of Use</a> and{" "}
        <a href="">Privacy Policy</a>.
      </label>
      <br /><br />

      <button type="submit">Register</button>
      {" "}
      <a href="">Learn more</a>
    </form>
  );
}


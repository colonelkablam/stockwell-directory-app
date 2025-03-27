exports.handler = async (event) => {
    const { password } = JSON.parse(event.body);
  
    const expected = process.env.ADMIN_SUBMIT_PASSWORD;

    console.log(expected, password);
  
    if (password === expected) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, error: "Unauthorised" }),
      };
    }
  };
  
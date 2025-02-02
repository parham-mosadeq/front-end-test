const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export function loginService() {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  const response = fetch(`${baseUrl}/otp`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });

  return response;
}

export function verifyOtpService({ otp = 0 }) {
  const response = fetch(`${baseUrl}/verify-otp`, {
    method: "POST",
    body: JSON.stringify({ otp }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });

  return response;
}

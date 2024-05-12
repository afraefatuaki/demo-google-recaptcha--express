const verifyReCaptchaToken = async (token) => {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`,
    { method: 'POST' },
  );

  return await response.json();
};

module.exports = verifyReCaptchaToken;

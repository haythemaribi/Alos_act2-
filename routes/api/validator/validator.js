const validator = (schema, property) => async (req, res, next) => {
  const { error } = await schema.validate(req[property], { abortEarly: false });
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    res.status(422).json({
      success: false,
      error: message,
    });
  }
};

module.exports = validator;

export const login = async (req, res) => {
  try {
    res.status(200).json({ status: "Successful login" });
  } catch (error) {
    console.log(error);
  }
};

exports.index = (req, res) => {
  res.status(200).render("index");
};
exports.blog = (req, res) => {
  res.status(200).render("blog");
};
exports.contact = (req, res) => {
  res.status(200).render("contact");
};
exports.services = (req, res) => {
  res.status(200).render("services");
};

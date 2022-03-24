//-------CRUD operation
// Author: vickybaskae7@gmail.com
// Date: 23 Mar, 2022.

const { get } = require("express/lib/response");
const DB = require("../models");
const employe = require("../models/employe");

const emp = DB.employe;
//-------To add a new record
const add = async (req, res) => {
  let info = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    location: req.body.location
  };
  const list = await emp
    .create(info)
    .then(() => {
      res.status(200).send(info);
    })
    .catch((err) => {
      res.send(err);
    });
};
//--------To find one record
const listone = async (req, res) => {
  let id = req.params.id;
  let one = await emp.findOne({ where: { id: id } });
  res.status(200).send(one)
}
//--------To update a record
const update = async (req, res) => {
  let id = req.params.id;
  let update = await emp.update(req.body, { where: { id: id } });
  res.status(200).send("update")
}
//---------To delete a record
const del = async (req, res) => {
  let id = req.params.id;
  let del = await emp.destroy({ where: { id: id } });
  res.status(200).send("deleted")
}

module.exports = {
  add,
  listone,
  update,
  del
};
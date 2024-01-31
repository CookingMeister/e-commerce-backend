const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data  // do
  Tag.findAll({
    include: {      // done
      model: Product,
      through: ProductTag,
    },
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data // do
  Tag.findByPk(req.params.id, {
    include: {          // done
      model: Product,
      through: ProductTag,
    },
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag  // do
  Tag.create({
   name: req.body.name  // done
 })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value  // do
  Tag.update(
   {
     name: req.body.name  // done
   },
   {
     where: {
       id: req.params.id
     }
   }
 )
   .then((dbTagData) => res.json(dbTagData))
   .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value  // do
  Tag.destroy({
   where: {     // done
     id: req.params.id
   }
 })
   .then(dbTagData => {
     if (!dbTagData) {
       res.status(404).json({ message: 'No tag found with this id!' });
       return;
     }
     res.json(dbTagData);
   })
   .catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
});

module.exports = router;

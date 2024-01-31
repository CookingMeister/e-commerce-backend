const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products  // do
  Category.findAll({
    include: {      // tested working
      model: Product,
    },
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products  // do
  Category.findByPk(req.params.id, {
  include: {        // tested working
    model: Product,
  },
})
  .then((dbCategoryData) => res.json(dbCategoryData))
  .catch((err) => res.status(400).json(err));
});

router.post('/', (req, res) => {
  // create a new category  // do
  Category.create({
   name: req.body.name  // done
 })
   .then((dbCategoryData) => res.json(dbCategoryData))
   .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value  // do
  Category.update(
    {
      name: req.body.name,   // done
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCategoryData) => {
      !dbCategoryData[0]
        ? res.status(404).json({ message: 'This id could not be found!' })
        : res.json(dbCategoryData);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value  // do
  Category.destroy({
  where: {
    id: req.params.id   // done
  }
})
  .then((dbCategoryData) => {
    !dbCategoryData 
      ? res.status(404).json({ message: 'No category id found!' })
      : res.json(dbCategoryData)
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;

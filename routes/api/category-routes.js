const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories including its associated Products
  Category.findAll({
    include: {
      model: Product,
    },
  })
    .then((dbCategoryData) => res.status(200).json(dbCategoryData))
    .catch((err) => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value including its associated Products
  Category.findByPk(req.params.id, {
  include: {
    model: Product,
  },
})
  .then((dbCategoryData) => res.status(200).json(dbCategoryData))
  .catch((err) => res.status(400).json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
 })
   .then((dbCategoryData) => res.status(200).json(dbCategoryData))
   .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value 
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCategoryData) => {
      !dbCategoryData[0]
        ? res.status(404).json({ message: 'This category id could not be found!' })
        : res.status(200).json(dbCategoryData);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
  where: {
    id: req.params.id
  }
})
  .then((dbCategoryData) => {
    !dbCategoryData 
      ? res.status(404).json({ message: 'This category id could not be found!' })
      : res.status(200).json({ message: 'This category has been deleted!' });
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;

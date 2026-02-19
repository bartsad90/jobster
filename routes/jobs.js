const express = require('express')
const checkIfTestUser = require('../middleware/testUser')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats
} = require('../controllers/jobs')

router
.route('/')
.post(checkIfTestUser, createJob)
.get(getAllJobs)

router.route('/stats').get(showStats)

router
.route('/:id')
.get(getJob)
.delete(checkIfTestUser, deleteJob)
.patch(checkIfTestUser, updateJob)


module.exports = router

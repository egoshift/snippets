import yup from 'yup'

const SnippetsSchema = yup.object().shape({
  filename: yup.string().default('Untitled'),
  owner: yup.string().required(),
  path: yup.string().required(),
  type: yup.string().required()
})

export default SnippetsSchema
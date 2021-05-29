import yup from 'yup'

const UserSchema = yup.object().shape({
  email: yup.string().required(),
  displayName: yup.string()
})

export default UserSchema
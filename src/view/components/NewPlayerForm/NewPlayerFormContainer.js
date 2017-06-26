import { reduxForm } from 'redux-form'
import NewPlayerForm from './NewPlayerForm'

export default reduxForm({
  form: 'newPlayer'
})(NewPlayerForm)

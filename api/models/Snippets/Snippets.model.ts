import firestore from 'models/Base'
import SnippetsSchema from 'models/Snippets/Snippets.schema'

function addSnippet(document): void {

  SnippetsSchema
    .isValid(document)
    .then((isValid) => {
      if (isValid)
        firestore.collection('snippets').doc().set(document)
    })

}

export { addSnippet }
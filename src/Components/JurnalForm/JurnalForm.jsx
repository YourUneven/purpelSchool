import './JurnalForm.css'
import Button from '../Button/Button';


function JurnalForm({ onSubmit }) {
  const addJoJurnalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };


  return (

<form className='jurnal-form' onSubmit={addJoJurnalItem}>
<input type="text" name="title"/>
<input type="date"/>
<input type="text" name="tag"/>
<textarea name="text" id="" cols='30'rows='10'></textarea>
<Button text='Сохранить' onClick={() => {console.log( "Нажали" );}}></Button>
</form>

   
  )
};

export default JurnalForm;
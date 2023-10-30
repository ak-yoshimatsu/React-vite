import { Form, useActionData } from 'react-router-dom';

const FormAction = () => {
  const errors = useActionData() as any

  return (
    <div>
      <ul>
        {errors?.map(msg => <li key={msg}>{msg}</li>)}
      </ul>
      <Form method='POST' noValidate>
        <div>
          <label htmlFor="title">書名：</label>
          <input type="text" name='title' id='title' size={20} />
        </div>
        <div>
          <label htmlFor="price">価格：</label>
          <input type="number" name='price' id='price' />円
        </div>
        <div>
          <label htmlFor="published">刊行日：</label>
          <input type="date" name='published' id='published' />円
        </div>
        <div>
          <button type='submit'>登録</button>
        </div>
      </Form>
    </div>
  );
};

export default FormAction;
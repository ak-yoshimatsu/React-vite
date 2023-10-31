import { useState } from "react";

const StateForm = () => {
  const [form, setForm] = useState({ name: '山田', age: 18 })
  const handleForm = e => {
    console.log(e.target.name, e.target.value);
    
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  // 送信ボタンでログにメッセージ出力
  const show = () => {
    console.log(`こんにちは、${form.name}（${form.age}）さん`);
    
  }

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input type="text" id="name" name="name" onChange={handleForm} value={form.name} />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input type="number" id="age" name="age" onChange={handleForm} value={form.age} />
      </div>
      <div>
        <button type="button" onClick={show}>送信</button>
      </div>
      <p>こんにちは、{form.name}（{form.age}）さん</p>
    </form>
  );
};

export default StateForm;
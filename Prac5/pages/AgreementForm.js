import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AgreementForm() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleConfirmation = () => {
    if (isChecked) {
      navigate('/second-page');
    }
  };

  return (
    <div>
      <h2>Пользовательское соглашение</h2>
      <form>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          Я принимаю пользовательское соглашение
        </label>
        <br />
        <button type="button" onClick={handleConfirmation} disabled={!isChecked}>
          Подтвердить соглашение
        </button>
      </form>
    </div>
  );
}

export default AgreementForm;

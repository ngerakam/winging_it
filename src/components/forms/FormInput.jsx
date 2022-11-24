function FormInput({ myType, dummyText, mySt }) {
  return (
    <div class="form-floating">
      <input type={myType} className={mySt} placeholder={dummyText} />
      <label for="floatingInput">{dummyText}</label>
    </div>
  );
}

export default FormInput;

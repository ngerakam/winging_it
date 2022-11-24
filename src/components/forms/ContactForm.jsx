import FormInput from "./FormInput";
import TextArea from "./TextArea";

function ContactForm() {
  const nameType = "name";
  const telType = "tel";
  const emailType = "email";
  const btnType = "submit";
  const mailHolder = "Email address";
  const telHolder = "07*8**34*2";
  const fstHolder = "First Name";
  const lstHolder = "Last Name";
  const numRows = 4;
  const formatSt = "form-control no-bord";
  return (
    <>
      <form action="">
        <FormInput myType={nameType} mySt={formatSt} dummyText={fstHolder} />
        <FormInput myType={nameType} mySt={formatSt} dummyText={lstHolder} />
        <FormInput myType={emailType} mySt={formatSt} dummyText={mailHolder} />
        <FormInput myType={telType} mySt={formatSt} dummyText={telHolder} />
        <TextArea numRows={numRows} mySt={formatSt}/>
        <input
          type={btnType}
          className="form-control mt-2 mb-2 btn btn-warning"
          value="submit"
        />
      </form>
    </>
  );
}

export default ContactForm;

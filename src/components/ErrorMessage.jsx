const ErrorMessage = ({errorMessage})=>{
    console.log(errorMessage);
  return <div className="ErrorMessageDiv">
    <h1>{errorMessage}</h1>
  </div>
}

export default ErrorMessage;
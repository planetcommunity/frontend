import VerifyEmail from '../components/registrationComponent/VerifyEmail'

export function useFetch(url){
    useEffect(()=>{
        <VerifyEmail 
        verifyEmailAddress={verifyEmailAddress}
        responseErrorMessage={responseErrorMessage}
        emailInputRef={emailInputRef}
        isError={isError}
        />
    },[verifyEmailAddress, responseErrorMessage, emailInputRef, isError])
 
 }
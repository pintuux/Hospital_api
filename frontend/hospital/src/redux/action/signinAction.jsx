// login constants
export const SIGN_IN = 'Signin';
export const SIGN_OUT = 'Signout';
export const CLOSE = "Close"
//action creators
export const signIn = ()=>({type:SIGN_IN})
export const signOut = () =>({type:SIGN_OUT})
export const close = ()=>({type:CLOSE})
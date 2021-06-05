import React from 'react';
const authContext = React.createContext({
    logged: false,
    userName: '',
    email: '',
});
export default authContext;
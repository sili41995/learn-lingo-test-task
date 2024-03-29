const enum Messages {
  loadedSuccess = 'Adverts loaded successfully',
  authErr = 'Please authenticate',
  nameReqErr = 'Name is required',
  emailReqErr = 'Email is required',
  emailRegExpErr = 'Email must be letters, digits, dot and @',
  phoneReqErr = 'Phone is required',
  phoneRegExpErr = 'Phone number must be digits and can start with character +',
  passwordReqErr = 'Password is required',
  passwordMinLengthErr = 'Password minimum length is 6 characters',
  emptyFavList = 'Favorites list is empty',
  emptyFilteredList = 'No ads match the filtering criteria',
}

export default Messages;

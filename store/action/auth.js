export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const ADMIN = "ADMIN";
import firebase from "../../firebase";

export const signup = (email, password, name) => {
  return async (dispatch) => {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    response.user.updateProfile({
      displayName: name,
    });

    try {
      const userInformation = {
        uid: response.user.uid,
        email: email,
        name: name,
      };

      await firebase
        .firestore()
        .collection("users")
        .doc(response.user.uid)
        .set(userInformation);
    } catch (err) {
      let errMessage = err.message;
      // const errResData = await response.json();
      const errCode = await err.code;

      if (errCode === "auth/account-exists-with-different-credential") {
        errMessage = " The email address is already in use by another account.";
      }

      throw new Error(errMessage);
    }

    dispatch({
      type: SIGNUP,
      uid: response.user.uid,
      email: email,
      name: name,
    });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    try {
      await firebase
        .firestore()
        .collection("users")
        .where("uid", "==", response.user.uid)
        .get();


        const token=await response.user.getIdToken()
      console.log(response.user);

      dispatch({
        type: LOGIN,
        email: email,
        token:token,
        userId: response.user.uid,
        name: response.user.displayName,
      });
    } catch (err) {
      let errMessage = "something went wrong";
      // const errResData = await response.;
      const errCode = await err.code;

      if (errCode === "auth/user-not-found") {
        errMessage =
          " There is no user record corresponding to this identifier. The user may have been deleted.";
      } else if (errCode === "auth/wrong-password") {
        errMessage =
          " The password is invalid or the user didnt enter the right password.";
      }
      throw new Error(errMessage);
    }
  };
};

export const loginAdmin = (email, password) => {
  return { type: ADMIN, email: email, password: password };
};

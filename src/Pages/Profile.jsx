import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName);
        setEmail(currentUser.email);
        setPhotoURL(currentUser.photoURL);
        setImage(currentUser.photoURL);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    setName(user.displayName);
    setPhotoURL(user.photoURL);
  };

  const handleSave = async () => {
    try {
      await updateProfile(user, { displayName: name, photoURL });
      setIsEdit(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
        </TabList>
        <TabPanel>
          <div>
            {user ? (
              <div>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    disabled={!isEdit}
                  />
                </div>
                <div>
                  <label>Profile Picture:</label>
                  {photoURL ? (
                    <img
                      src={photoURL}
                      alt="Profile"
                      className="block w-32 h-32 rounded-full mb-2"
                    />
                  ) : (
                    <input
                      type="file"
                      value={image}
                      accept="image/*"
                      onChange={handleChangeImage}
                      disabled={!isEdit}
                    />
                  )}
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" value={email} disabled />
                </div>
                {!isEdit ? (
                  <button onClick={handleEdit}>Edit</button>
                ) : (
                  <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                )}
              </div>
            ) : (
              <div>Please log in to view your profile.</div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Profile;

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useContext, useState } from "react";

import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [image, setImage] = useState(null);

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
      loading(true);
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
          <div className="border border-black flex justify-center items-center p-5">
            <div>
              <div className="flex gap-3">
                <div>
                  <label htmlFor="Name" className="block  dark:text-gray-600 ">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={user.displayName}
                    onChange={handleChangeName}
                    disabled={!isEdit}
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 border border-black dark:text-gray-800 focus:dark:border-violet-600"
                  />
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 border border-black dark:text-gray-800 focus:dark:border-violet-600"
                      value={user.email}
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <label>Profile Picture:</label>
                  {user ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="block w-32 h-32 rounded-full mb-2"
                    />
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      value={user.photoURL}
                      onChange={handleChangeImage}
                      disabled={!isEdit}
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    disabled={!isEdit}
                  />
                </div>
              </div>

              {!isEdit ? (
                <button className="btn btn-secondary" onClick={handleEdit}>
                  Edit
                </button>
              ) : (
                <div className="flex gap-4">
                  <button className="btn btn-success" onClick={handleSave}>
                    Save
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Profile;

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useContext, useState } from "react";

import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useLoaderData, useNavigate } from "react-router-dom";
import EstateBookList from "../Layout/EstateBookList";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Profile = () => {
  const estateData = useLoaderData();
  const storedBooks = JSON.parse(localStorage.getItem("estates") || "[]");

  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const estateBookList = estateData.filter((book) =>
    storedBooks.some((b) => b.id === book.id)
  );

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

      MySwal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          navigate("/");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // const handleChangeImage = (e) => {
  //   if (e.target.files[0]) {
  //     const file = e.target.files[0];
  //     setImage(file);
  //     setPhotoURL(URL.createObjectURL(file));
  //   }
  // };

  const handleChangeImage = (e) => {
    const input = e.target.value;
    if (input) {
      // Check if the input is a valid URL
      if (isValidURL(input)) {
        setPhotoURL(input);
      } else {
        // If not a valid URL, treat it as a file upload
        const file = e.target.files[0];
        setImage(file);
        setPhotoURL(URL.createObjectURL(file));
      }
    }
  };

  const isValidURL = (url) => {
    // Regular expression to validate URLs
    const pattern = /^(http|https):\/\/[^ "]+$/;
    return pattern.test(url);
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Booked Property</Tab>
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
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    placeholder="Photo Url"
                    value={user.photoURL}
                    onChange={handleChangeImage}
                    disabled={!isEdit}
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 border border-black dark:text-gray-800 focus:dark:border-violet-600"
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
        <TabPanel>
          <ul>
            {estateBookList.map((item) => (
              <EstateBookList key={item.id} item={item}></EstateBookList>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Profile;

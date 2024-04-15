import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Profile = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
        </TabList>
        <TabPanel>
          <ul></ul>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Profile;

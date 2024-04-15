import { useEffect, useState } from "react";
import EstateCard from "../Layout/EstateCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const EstateCards = () => {
  const [estateCardData, setEstateCardData] = useState([]);

  useEffect(() => {
    fetch("residentialData.json")
      .then((res) => res.json())
      .then((data) => setEstateCardData(data));
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter data based on category
  const filteredData =
    selectedCategory === "All"
      ? estateCardData
      : estateCardData.filter((item) => item.category === selectedCategory);
  return (
    <div>
      <div className="mt-11">
        <h1 className="text-3xl font-bold text-center animate__animated animate__fadeInDown">
          View Our Properties
        </h1>
      </div>
      <div className="mt-6 max-h-fit">
        <Tabs>
          <TabList>
            <Tab onClick={() => setSelectedCategory("All")}>All</Tab>
            <Tab onClick={() => setSelectedCategory("Single-family homes")}>
              Single-family homes
            </Tab>
            <Tab onClick={() => setSelectedCategory("Apartments")}>
              Apartment
            </Tab>
            <Tab onClick={() => setSelectedCategory("Townhouses")}>
              Townhouses
            </Tab>
            <Tab
              onClick={() => setSelectedCategory("Senior living communities")}
            >
              Senior living communities
            </Tab>
            <Tab onClick={() => setSelectedCategory("Student housing")}>
              Student housing
            </Tab>
            <Tab onClick={() => setSelectedCategory("Vacation Rentals")}>
              Vacation rentals
            </Tab>
          </TabList>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {estateCardData.map((data) => (
                <EstateCard key={data.id} data={data}></EstateCard>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <EstateCard key={data.id} data={data}></EstateCard>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <EstateCard key={data.id} data={data}></EstateCard>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <EstateCard key={data.id} data={data}></EstateCard>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <EstateCard key={data.id} data={data}></EstateCard>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <EstateCard key={data.id} data={data}></EstateCard>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <EstateCard key={data.id} data={data}></EstateCard>
              ))}
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default EstateCards;

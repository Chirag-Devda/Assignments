import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useState } from "react";

import { Navbar, PropertyDetailsForm } from "../../components";
import { ListPropertyTabs } from "../../constants";

const ListProperty = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-72px)]">
        <div className="container mx-auto flex h-full items-center justify-center">
          <div className="h-[552px] w-[976px]">
            <Tabs value="html">
              <TabsHeader className="bg-darkCream">
                {ListPropertyTabs.map(({ label, value, progressWidth }) => (
                  <Tab
                    onClick={() => {
                      setProgress(progressWidth);
                    }}
                    className="h-20"
                    key={value}
                    value={value}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <div
                style={{ width: `${progress}%` }}
                className="h-1 bg-darkBlue duration-500"
              ></div>
              <TabsBody>
                <TabPanel
                  className="bg-cream p-0"
                  key="property"
                  value="property"
                >
                  <PropertyDetailsForm />
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </main>
    </>
  );
};

export default ListProperty;

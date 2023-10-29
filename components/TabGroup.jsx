import React from "react";
import { Tabs } from "flowbite-react";
import CommitteReg from "./CommitteReg";
import UserReg from "./UserReg";
const TabGroup = () => {
  return (
    <div className='h-1/2  mx-auto'>
      <Tabs.Group className="" aria-label="Tabs with underline" style="underline"
      
      > 
       
        <Tabs.Item title="User">
            <UserReg />
        </Tabs.Item>
        
        <Tabs.Item active={true} title="Section Head">
       <CommitteReg></CommitteReg>
        </Tabs.Item>
        {/* <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled">
          Disabled content
        </Tabs.Item> */}
      </Tabs.Group>
    </div>
  );
};

export default TabGroup;

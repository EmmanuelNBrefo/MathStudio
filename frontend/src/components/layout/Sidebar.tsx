import React from "react";
import {
  Folder,
  FileText,
  Star,
  Clock,
  Settings
} from "lucide-react";

const Sidebar = () => {

  const items = [
    {
      name: "Projects",
      icon: Folder,
    },
    {
      name: "Templates",
      icon: FileText,
    },
    {
      name: "Favorites",
      icon: Star,
    },
    {
      name: "Recent Files",
      icon: Clock,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 bg-slate-800 text-white min-h-full p-4">

      <h2 className="text-lg font-semibold mb-6">
        Explorer
      </h2>


      <div className="space-y-3">

        {items.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="
                w-full 
                flex 
                items-center 
                gap-3 
                p-3 
                rounded-lg
                hover:bg-slate-700
                transition
              "
            >

              <Icon size={20}/>

              <span>
                {item.name}
              </span>

            </button>
          );

        })}

      </div>

    </aside>
  );
};

export default Sidebar;
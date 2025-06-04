import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // <-- add useLocation
import {
  BiSolidDashboard,
  BiSolidReport,
  BiSolidLogOut,
} from "react-icons/bi";
import {
  MdInventory,
  MdOutlineSecurity,
  MdManageAccounts,
  MdHelpCenter,
  MdArrowDropDown,
} from "react-icons/md";
import { BsEthernet } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { RiFileSearchFill } from "react-icons/ri";

export default function Sidemenu() {
  const location = useLocation();

  const [isICTOpen, setIsICTOpen] = useState(false);
  const [isCRAOpen, setIsCRAOpen] = useState(false);

  useEffect(() => {
    const ictRoutes = ["/ict-assets-inventory", "/readiness", "/fas", "/ppe"];
    const craRoutes = ["/cra-status-reports", "/cra-status-assets", "/cra-status-risk"];

    setIsICTOpen(ictRoutes.includes(location.pathname));
    setIsCRAOpen(craRoutes.includes(location.pathname));
  }, [location.pathname]);

  const handleDropdownItemClick = () => {
    // Dropdown stays open on click
  };

  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium pt-25">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <BiSolidDashboard className="w-6 h-6" />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>

            {/* ICT Assets Inventory main + dropdown */}
           <li>
  <NavLink
    to="/ict-assets-inventory"
    className={({ isActive }) => {
      const baseClasses = "flex items-center justify-between p-2 rounded-lg group";
      // Highlight if active or dropdown open
      const activeClasses = "bg-gray-200 dark:bg-gray-700 text-black dark:text-white";
      const inactiveClasses = "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
      return `${baseClasses} ${isActive || isICTOpen ? activeClasses : inactiveClasses}`;
    }}
  >
    <div className="flex items-center">
      <MdInventory className="w-6 h-6" />
      <span className="ms-3">ICT Assets Inventory</span>
    </div>
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault(); // prevent NavLink navigation on toggle
        setIsICTOpen(!isICTOpen);
      }}
      className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
    >
      <MdArrowDropDown
        className={`w-5 h-5 transition-transform ${isICTOpen ? "rotate-180" : ""}`}
      />
    </button>
  </NavLink>

  {isICTOpen && (
    <ul className="ml-8 mt-1 space-y-1">
      <li>
        <NavLink
          to="/readiness"
          className={({ isActive }) =>
            `block p-2 rounded-lg ${
              isActive
                ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            }`
          }
        >
          READINESS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/fas"
          className={({ isActive }) =>
            `block p-2 rounded-lg ${
              isActive
                ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            }`
          }
        >
          FAS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ppe"
          className={({ isActive }) =>
            `block p-2 rounded-lg ${
              isActive
                ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            }`
          }
        >
          PPE
        </NavLink>
      </li>
    </ul>
  )}
</li>


            <li>
              <NavLink
                to="/noc-monitoring"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <BsEthernet className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">NOC Monitoring</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/soc-alerts"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <MdOutlineSecurity className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">SOC Alerts</span>
              </NavLink>
            </li>

            {/* CRA Status Reports like ICT dropdown */}
            <li>
              <NavLink
                to="/cra-status-reports" // You can change this to a dedicated main page "/cra-status" if you want
                className={({ isActive }) => {
                  const baseClasses = "flex items-center justify-between p-2 rounded-lg group";
                  // Highlight if active or dropdown open
                  const activeClasses = "bg-gray-200 dark:bg-gray-700 text-black dark:text-white";
                  const inactiveClasses = "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
                  return `${baseClasses} ${isActive || isCRAOpen ? activeClasses : inactiveClasses}`;
                }}
              >
                <div className="flex items-center">
                  <MdInventory className="w-6 h-6" />
                  <span className="ms-3">CRA Status Report</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(); // prevent NavLink navigation on toggle
                    setIsCRAOpen(!isCRAOpen);
                  }}
                  className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  <MdArrowDropDown
                    className={`w-5 h-5 transition-transform ${isCRAOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </NavLink>

              {isCRAOpen && (
                <ul className="ml-8 mt-1 space-y-1">
                  <li>
                    <NavLink
                      to="/cra-status-assets"
                      className={({ isActive }) =>
                        `block p-2 rounded-lg ${
                          isActive
                            ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                            : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`
                      }
                    >
                      ASSET MANAGEMENT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cra-status-risk"
                      className={({ isActive }) =>
                        `block p-2 rounded-lg ${
                          isActive
                            ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                            : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`
                      }
                    >
                      RISK MANAGEMENT
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/asset-management"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <IoMdAnalytics className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">Reports & Analytics</span>
              </NavLink>
            </li>
          </ul>

          {/* Lower Section */}
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <NavLink
                to="/risk-management"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <MdManageAccounts className="w-6 h-6" />
                <span className="ms-3">User Management</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <IoSettings className="w-6 h-6" />
                <span className="ms-3">Settings</span>
              </NavLink>
            </li>
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <NavLink
                to="/references"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <RiFileSearchFill className="w-6 h-6" />
                <span className="ms-3">References</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <MdHelpCenter className="w-6 h-6" />
                <span className="ms-3">Help</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <BiSolidLogOut className="w-6 h-6" />
                <span className="ms-3">Log Out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

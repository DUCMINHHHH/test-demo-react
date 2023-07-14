import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { SiAidungeon } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 8ff02ef037b6a8d5f3bf270ba4e5ac5d17689ca0

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <>
      <ProSidebar
        // image={image ? sidebarBg : false}
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <SiAidungeon size={"3em"} color={"goldenrod"} />{" "}
            <span>MARCO MINH</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<MdDashboard />}
              suffix={<span className="badge red">New</span>}
            >
              Dashboard
<<<<<<< HEAD
              <Link to="/admin" />
=======
>>>>>>> 8ff02ef037b6a8d5f3bf270ba4e5ac5d17689ca0
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              icon={<FaGem />}
              title="Features"
              suffix={<span className="badge red">3</span>}
            >
<<<<<<< HEAD
              <MenuItem>
                Quản lí Users
                <Link to="/admin/mange-users" />
              </MenuItem>
=======
              <MenuItem> Quản lí Users </MenuItem>
>>>>>>> 8ff02ef037b6a8d5f3bf270ba4e5ac5d17689ca0
              <MenuItem> Quản lí Bài Quiz</MenuItem>
              <MenuItem>Quản lí Câu Hỏi</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                MARCO MINH
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
      ;
    </>
  );
};

export default SideBar;

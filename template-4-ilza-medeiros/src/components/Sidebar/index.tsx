import { AiFillHome, AiFillFolder } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { toast } from "react-toastify";

import { Container, Content, Navigation, List, Link } from "./styles";

export const Sidebar = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <p>EasyCandidate</p>

        <Navigation>
          <List>
            <Link>
              <a href="#" onClick={() => toast.error("In construction")}>
                <AiFillHome />
                <span>Home</span>
              </a>
            </Link>
            <Link active>
              <a href="#">
                <BsPeopleFill />
                <span>Employees</span>
              </a>
            </Link>
            <Link>
              <a href="#" onClick={() => toast.error("In construction")}>
                <AiFillFolder />
                <span>Documents</span>
              </a>
            </Link>
            <Link>
              <a href="#" onClick={() => toast.error("In construction")}>
                <MdSettings />
                <span>Settings</span>
              </a>
            </Link>
          </List>
        </Navigation>
      </Content>
    </Container>
  );
};

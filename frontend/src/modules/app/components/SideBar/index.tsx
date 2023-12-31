import { Flex } from "@chakra-ui/react";
import { BiTask } from "react-icons/bi";
import { FaCalendarDay, FaStickyNote } from "react-icons/fa";
import { SideBarButton } from "../SideBarButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Flex w="100%" h="100%" padding="1rem" direction="column" gap="1rem">
      <SideBarButton
        lefticon={<BiTask size="1.3rem" />}
        onClick={() => {
          navigate(ROUTES.TASKS);
        }}
      >
        Tasks
      </SideBarButton>

      <SideBarButton
        lefticon={<FaCalendarDay size="1.3rem" />}
        onClick={() => {
          navigate(ROUTES.CALENDAR);
        }}
      >
        Calendar
      </SideBarButton>

      <SideBarButton
        lefticon={<FaStickyNote size="1.3rem" />}
        onClick={() => {
          navigate(ROUTES.TASKS);
        }}
      >
        Notes
      </SideBarButton>
    </Flex>
  );
};

export default SideBar;

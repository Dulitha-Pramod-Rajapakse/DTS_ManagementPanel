import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const hours = currentTime.getHours();
    if (hours < 12) {
      return "Good Morning...";
    }
    if (hours < 17) {
      return "Good Afternoon...";
    }
    return "Good Night... Have a Sweet Dreams!";
  };

  const formatTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formatDate = currentTime.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "30px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        padding: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/*Logo + Greeting*/}
      <Box display="flex" alignItems="flex-start" flexDirection={"column"}>
        <img src={logo} alt="DTS INFO Logo" style={{ height: 60 }} />
        <Typography variant="h5" fontWeight={600} color="black">
          {getGreeting()}
        </Typography>
      </Box>

      {/*Date/Time*/}
      <Box textAlign={"right"}>
        <Typography variant="h5" fontWeight={500} color="black">
          {formatTime}
        </Typography>
        <Typography variant="h6" color="black">
          {formatDate}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

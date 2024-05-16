import { useState } from "react";
import "./customaccordion.css";

import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";

function CustomAccordion() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenOne, setIsOpenOne] = useState(true);
  const [isOpenTwo, setIsOpenTwo] = useState(true);
  const [isOpenThree, setIsOpenThree] = useState(true);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            marginBottom: "200px",
            width: "1000px",
          }}
        >
          {/* start selection */}
          <Divider sx={{ marginBottom: "34px" }}></Divider>
          <Box
            display="flex"
            justifyContent="space-between"
            height="60px"
            alignItems="center"
          >
            <Box
              sx={{
                fontWeight: "500",
                color: "#685DC5",
                fontSize: "22px",
                width: "360px",
              }}
            >
              Program conditions
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "#535353",
                fontSize: "22px",
                width: "560px",
              }}
            >
              What are my obligations?
            </Box>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </IconButton>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "380px" }}></Box>
            <Collapse
              in={!isOpen}
              sx={{
                width: "560px",
                fontWeight: "300",
                color: "#535353",
                fontSize: "22px",
                lineHeight: "32px",
                letterSpacing: "0.33px",
                wordWrap: "break-word",
              }}
            >
              The majority of our students receive numerous job offers at the
              end of the second academic year of their Bachelor's programme and
              at the end of the first academic year of their Master's programme.
              The best applicants receive an offer from our industrial partners
              at the beginning of their programmes. Harbour.Space is highly
              recognized among innovative employers and is strategic partner of
              B.Grimm multi- industry corporation with 140 years of history in
              Thailand. Together we insure students get the best knowledge about
              the current job market opportunities. We offer our students paid
              internships options during studies jointly with our industrial
              partners. Employers that hired graduates of Harbour.Space in the
              past include Google, IBM, Accenture, Typeform, Frog, and other
              tech centric companies. Our industry specific employability report
              could be provided to you separately during the admission process.
            </Collapse>
            <Divider />
          </Box>

          {/* end selection */}
          {/* start selection */}
          <Divider sx={{ marginBottom: "34px", marginTop: "32px" }}></Divider>
          <Box
            display="flex"
            justifyContent="space-between"
            height="60px"
            alignItems="center"
          >
            <Box
              sx={{
                fontWeight: "500",
                color: "#685DC5",
                fontSize: "22px",
                width: "360px",
              }}
            >
              Program conditions
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "#535353",
                fontSize: "22px",
                width: "560px",
              }}
            >
              Do I get a job placement upon graduation?
            </Box>
            <IconButton onClick={() => setIsOpenOne(!isOpenOne)}>
              {isOpenOne ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </IconButton>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "380px" }}></Box>
            <Collapse
              in={!isOpenOne}
              sx={{
                width: "560px",
                fontWeight: "300",
                color: "#535353",
                fontSize: "22px",
                lineHeight: "32px",
                letterSpacing: "0.33px",
                wordWrap: "break-word",
              }}
            >
              The majority of our students receive numerous job offers at the
              end of the second academic year of their Bachelor's programme and
              at the end of the first academic year of their Master's programme.
              The best applicants receive an offer from our industrial partners
              at the beginning of their programmes. Harbour.Space is highly
              recognized among innovative employers and is strategic partner of
              B.Grimm multi- industry corporation with 140 years of history in
              Thailand. Together we insure students get the best knowledge about
              the current job market opportunities. We offer our students paid
              internships options during studies jointly with our industrial
              partners. Employers that hired graduates of Harbour.Space in the
              past include Google, IBM, Accenture, Typeform, Frog, and other
              tech centric companies. Our industry specific employability report
              could be provided to you separately during the admission process.
            </Collapse>
            <Divider />
          </Box>

          {/* end selection */}
          {/* start selection */}
          <Divider sx={{ marginBottom: "34px", marginTop: "32px" }}></Divider>
          <Box
            display="flex"
            justifyContent="space-between"
            height="60px"
            alignItems="center"
          >
            <Box
              sx={{
                fontWeight: "500",
                color: "#685DC5",
                fontSize: "22px",
                width: "360px",
              }}
            >
              Program conditions
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "#535353",
                fontSize: "22px",
                width: "560px",
              }}
            >
              What if I want to start my own company?
            </Box>
            <IconButton onClick={() => setIsOpenTwo(!isOpenTwo)}>
              {isOpenTwo ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </IconButton>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "380px" }}></Box>
            <Collapse
              in={!isOpenTwo}
              sx={{
                width: "560px",
                fontWeight: "300",
                color: "#535353",
                fontSize: "22px",
                lineHeight: "32px",
                letterSpacing: "0.33px",
                wordWrap: "break-word",
              }}
            >
              The majority of our students receive numerous job offers at the
              end of the second academic year of their Bachelor's programme and
              at the end of the first academic year of their Master's programme.
              The best applicants receive an offer from our industrial partners
              at the beginning of their programmes. Harbour.Space is highly
              recognized among innovative employers and is strategic partner of
              B.Grimm multi- industry corporation with 140 years of history in
              Thailand. Together we insure students get the best knowledge about
              the current job market opportunities. We offer our students paid
              internships options during studies jointly with our industrial
              partners. Employers that hired graduates of Harbour.Space in the
              past include Google, IBM, Accenture, Typeform, Frog, and other
              tech centric companies. Our industry specific employability report
              could be provided to you separately during the admission process.
            </Collapse>
            <Divider />
          </Box>

          {/* end selection */}
          {/* start selection */}

          <Divider sx={{ marginBottom: "34px", marginTop: "32px" }}></Divider>
          <Box
            display="flex"
            justifyContent="space-between"
            height="60px"
            alignItems="center"
          >
            <Box
              sx={{
                fontWeight: "500",
                color: "#685DC5",
                fontSize: "22px",
                width: "360px",
              }}
            >
              Program conditions
            </Box>
            <Box
              sx={{
                fontWeight: "500",
                color: "#535353",
                fontSize: "22px",
                width: "560px",
              }}
            >
              Do I need a visa?
            </Box>
            <IconButton onClick={() => setIsOpenThree(!isOpenThree)}>
              {isOpenThree ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </IconButton>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "380px" }}></Box>
            <Collapse
              in={!isOpenThree}
              sx={{
                width: "560px",
                fontWeight: "300",
                color: "#535353",
                fontSize: "22px",
                lineHeight: "32px",
                letterSpacing: "0.33px",
                wordWrap: "break-word",
              }}
            >
              The majority of our students receive numerous job offers at the
              end of the second academic year of their Bachelor's programme and
              at the end of the first academic year of their Master's programme.
              The best applicants receive an offer from our industrial partners
              at the beginning of their programmes. Harbour.Space is highly
              recognized among innovative employers and is strategic partner of
              B.Grimm multi- industry corporation with 140 years of history in
              Thailand. Together we insure students get the best knowledge about
              the current job market opportunities. We offer our students paid
              internships options during studies jointly with our industrial
              partners. Employers that hired graduates of Harbour.Space in the
              past include Google, IBM, Accenture, Typeform, Frog, and other
              tech centric companies. Our industry specific employability report
              could be provided to you separately during the admission process.
            </Collapse>
            <Divider />
          </Box>

          {/* end selection */}
          <Divider sx={{ marginBottom: "34px", marginTop: "32px" }}></Divider>
        </Box>
      </Box>
    </>
  );
}

export default CustomAccordion;

import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function Sidebar() {
  const [openSubmenus, setOpenSubmenus] = React.useState({});

  const teams = [
    {
      id: 1,
      name: "Positioning & Niche Clarity",
      subcategories: [
        {
          id: 101,
          name: "Specialisation",
        },
        {
          id: 102,
          name: "Target Customer",
        },
        {
          id: 103,
          name: "Goals",
        },
        {
          id: 104,
          name: "Problems",
        },
        {
          id: 105,
          name: "Myths",
        },
        {
          id: 106,
          name: "New Solution",
        },
        {
          id: 107,
          name: "Benefits",
        },
        {
          id: 108,
          name: "Positioning Word",
        },
        {
          id: 109,
          name: "Customer Insight",
        },
        {
          id: 110,
          name: "Positioning Blueprint",
        },
        {
          id: 111,
          name: "Positioning One Liner",
        },
        // Add more subcategories as needed
      ],
    },
    {
      id: 2,
      name: "Page",
      subcategories: [
        {
          id: 201,
          name: "Name Options",
        },
        {
          id: 202,
          name: "One Line Description",
        },
        {
          id: 203,
          name: "Who is this for",
        },
        {
          id: 204,
          name: "Why learn this",
        },
        {
          id: 205,
          name: "What you will learn",
        },
        {
          id: 206,
          name: "About Me",
        },
        {
          id: 207,
          name: "Landing Page Video Script",
        },
        {
          id: 208,
          name: "Welcome Video Script",
        },
      ],
    },
    {
      id: 3,
      name: "Membership Levels",
      subcategories: [
        {
          id: 301,
          name: "Membership Planning (Ideas)",
        },
        {
          id: 302,
          name: "Level Planning",
        },
        {
          id: 303,
          name: "Level 1 Beginners",
        },
        {
          id: 304,
          name: "Level 2 Intermediate",
        },
        {
          id: 305,
          name: "Level 3 Advanced",
        },
        {
          id: 306,
          name: "Level 4 Mastery",
        },
      ],
    },
    {
      id: 4,
      name: "Curriculum & Lessons",
      subcategories: [
        {
          id: 401,
          name: "Create Curriculum",
        },
        {
          id: 402,
          name: "Create Coaching Levels",
        },
        {
          id: 403,
          name: "Level 1 Beginners",
        },
        {
          id: 404,
          name: "5 day Whatsapp Class Ideas",
        },
        {
          id: 405,
          name: "3 month Challenge",
        },
        {
          id: 406,
          name: "Challenges",
        },
      ],
    },
    {
      id: 5,
      name: "Image Ads",
      subcategories: [
        {
          id: 501,
          name: "Ad Hooks",
        },
        {
          id: 502,
          name: "Single Image (Mini Challenge)",
        },
        {
          id: 503,
          name: "Single Image Ad (Double negative)",
        },
        {
          id: 504,
          name: "Single Image Ad (Double benefit)",
        },
        {
          id: 505,
          name: "Single Image Ad (Benefit & Without)",
        },
        {
          id: 506,
          name: "Facebook ad copy",
        },
        {
          id: 507,
          name: "Lead Qualification",
        },
        {
          id: 508,
          name: "Carousel Ad",
        },
      ],
    },
    {
      id: 6,
      name: "Video Ads",
      subcategories: [
        {
          id: 601,
          name: "Problem - Solution Script",
        },
        {
          id: 602,
          name: "Opportunity + Statistics",
        },
        {
          id: 603,
          name: "Without & Even If",
        },
        {
          id: 604,
          name: "Bold Shocking Statement",
        },
        {
          id: 605,
          name: "Your Story",
        },
        {
          id: 606,
          name: "Strong Reframe",
        },
        {
          id: 607,
          name: "Facebook Primary Text",
        }
      ],
    },
  ];

  const handleAccordionClick = (teamId) => {
    setOpenSubmenus((prevOpenSubmenus) => ({
      ...prevOpenSubmenus,
      [teamId]: !prevOpenSubmenus[teamId],
    }));
  };

  return (
    <Card className="w-full max-w-[20rem] shadow-xl bg-cardheader">
      <List>
        {teams.map((team) => (
          <React.Fragment key={team.id}>
            <Accordion
              open={openSubmenus[team.id] || false}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openSubmenus[team.id] ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0 text-white">
                <AccordionHeader
                  onClick={() => handleAccordionClick(team.id)}
                  className="border-b-0 p-3"
                >
                  <Typography className="mr-auto font-normal text-white">
                    {team.name}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {openSubmenus[team.id] && (
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {team.subcategories.map((subcategory) => (
                      <ListItem key={subcategory.id} className="text-white">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        {subcategory.name}
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              )}
            </Accordion>
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}
